# -*- coding: utf-8 -*-
"""
为全部武器补齐「90 级基础攻击力 + 副词条提升值」，并同步三处数据源：
  1. 数据库 t_weapon（生成 springBootTest/sql/weapon_90_stats.sql 迁移脚本）
  2. 前端兜底数据 genshin-login-vue/src/data/homeData.js
  3. 三个初始化 SQL 的 t_weapon 建表语句（补上新列定义）

数值口径：原神官方武器成长规律表（BiliBili WIKI「武器属性推论」）。
武器的 90 级白值档位与副属性数值严格一一对应，同一星级共 4 档：
  5★  44/542、46/608、48/674、49/741    4★  41/454、42/510、44/565、45/620
  3★  38/354、39/401、40/448（已实装三档）
本项目为本地演示站，未逐把考据白值档位，因此按「星级 + 副词条类型」取常见档位，
并对有公开资料可查的热门武器做精确覆盖。全部数值都可在后台「武器养成」里逐条修改。
"""
import io
import os
import re
import subprocess

ROOT = r'C:\Users\20285\IdeaProjects\xx'
MYSQL = r'C:\Users\20285\Desktop\xx-mysql\mysql-8.0.29-winx64\bin\mysql.exe'
HOME_JS = os.path.join(ROOT, 'genshin-login-vue', 'src', 'data', 'homeData.js')
SQL_DIR = os.path.join(ROOT, 'springBootTest', 'sql')

# 数据库 stat 文本 -> 档位表列名
STAT_KEY = {
    '攻击力': 'atk',
    '生命值': 'hp',
    '防御力': 'def',
    '物理伤害加成': 'phys',
    '元素充能效率': 'er',
    '元素精通': 'em',
    '暴击率': 'cr',
    '暴击伤害': 'cd',
}
STAT_LABEL = {
    'atk': '攻击力', 'hp': '生命值', 'def': '防御力', 'phys': '物理伤害加成',
    'er': '元素充能效率', 'em': '元素精通', 'cr': '暴击率', 'cd': '暴击伤害',
}

# (1级白值, 90级白值, {副属性: 90级数值})；百分比用小数，元素精通为整数
TIERS = {
    5: [
        (44, 542, dict(atk=66.2, hp=66.2, def_=82.7, phys=82.7, er=73.5, em=265, cr=44.1, cd=88.2)),
        (46, 608, dict(atk=49.6, hp=49.6, def_=62.0, phys=62.0, er=55.1, em=198, cr=33.1, cd=66.2)),
        (48, 674, dict(atk=33.1, hp=33.1, def_=41.3, phys=41.3, er=36.8, em=132, cr=22.1, cd=44.1)),
        (49, 741, dict(atk=16.5, hp=16.5, def_=20.7, phys=20.7, er=18.4, em=66, cr=11.0, cd=22.1)),
    ],
    4: [
        (41, 454, dict(atk=55.1, hp=55.1, def_=69.0, phys=69.0, er=61.3, em=221, cr=36.8, cd=73.5)),
        (42, 510, dict(atk=41.3, hp=41.3, def_=51.7, phys=51.7, er=45.9, em=165, cr=27.6, cd=55.1)),
        (44, 565, dict(atk=27.6, hp=27.6, def_=34.5, phys=34.5, er=30.6, em=110, cr=18.4, cd=36.8)),
        (45, 620, dict(atk=13.8, hp=13.8, def_=17.2, phys=17.2, er=15.3, em=55, cr=9.2, cd=18.4)),
    ],
    3: [
        (38, 354, dict(atk=46.9, hp=46.9, def_=58.6, phys=58.6, er=52.1, em=187, cr=31.2, cd=62.4)),
        (39, 401, dict(atk=35.2, hp=35.2, def_=43.9, phys=43.9, er=39.0, em=141, cr=23.4, cd=46.9)),
        (40, 448, dict(atk=23.5, hp=23.5, def_=29.3, phys=29.3, er=26.0, em=94, cr=15.6, cd=31.2)),
    ],
}

# 未考据武器按副词条类型取最常见档位（下标对应 TIERS 里的档位）
DEFAULT_TIER = {
    5: dict(cr=2, cd=2, atk=1, er=1, em=1, hp=1, def_=0, phys=3),
    4: dict(cr=1, cd=1, atk=1, er=2, em=1, hp=0, def_=1, phys=2),
    3: dict(cr=1, cd=1, atk=1, er=1, em=1, hp=1, def_=1, phys=1),
}

# 有公开资料可查的热门武器：精确覆盖 (1级白值, 90级白值, 档位下标)
OVERRIDES = {
    # 5★ 单手剑 / 大剑 / 长柄 / 法器 / 弓
    '雾切之回光': (48, 674, 2), '磐岩结绿': (44, 542, 0), '苍古自由之誓': (46, 608, 1),
    '天空之刃': (46, 608, 1), '风鹰剑': (48, 674, 2), '斫峰之刃': (46, 608, 1),
    '波乱月白经津': (48, 674, 2), '有乐御簾切': (44, 542, 0),
    '狼的末路': (46, 608, 1), '松籁响起之时': (49, 741, 3), '无工之剑': (46, 608, 1),
    '赤角石溃杵': (44, 542, 0), '苇海信标': (46, 608, 1),
    '护摩之杖': (46, 608, 1), '和璞鸢': (48, 674, 2), '薙草之稻光': (46, 608, 1),
    '贯虹之槊': (46, 608, 1), '息灾': (49, 741, 3), '赤沙之杖': (44, 542, 0),
    '四风原典': (46, 608, 1), '天空之卷': (48, 674, 2), '尘世之锁': (46, 608, 1),
    '神乐之真意': (46, 608, 1), '不灭月华': (46, 608, 1), '千夜浮梦': (44, 542, 0),
    '寝正月初晴': (44, 542, 0), '金流监督': (48, 674, 2),
    '阿莫斯之弓': (46, 608, 1), '天空之翼': (48, 674, 2), '终末嗟叹之诗': (46, 608, 1),
    '飞雷之弦振': (46, 608, 1), '冬极白星': (46, 608, 1), '若水': (44, 542, 0),
    '猎人之径': (44, 542, 0), '最初的大魔术': (46, 608, 1),
    # 4★ 常见
    '螭骨剑': (42, 510, 1), '决斗之枪': (41, 454, 0), '黑剑': (42, 510, 1),
    '流浪乐章': (42, 510, 1), '绝弦': (42, 510, 1), '祭礼剑': (41, 454, 0),
    '西风猎弓': (44, 565, 2), '匣里灭辰': (41, 454, 0), '千岩古剑': (42, 510, 1),
    '渔获': (42, 510, 1), '暗巷闪光': (45, 620, 3), '西风长枪': (44, 565, 2),
}


def parse_stat(text):
    """'副属性：暴击伤害' -> ('cd', '暴击伤害')"""
    s = (text or '').strip()
    s = re.sub(r'^副属性[:：]\s*', '', s)
    for cn, key in STAT_KEY.items():
        if cn in s:
            return key, STAT_LABEL[key]
    return 'atk', '攻击力'


def fmt_value(key, v):
    if key == 'em':
        return str(int(v))
    return ('%.1f' % v) + '%'


def compute(name, rarity, stat_text):
    key, label = parse_stat(stat_text)
    rarity = int(rarity) if rarity else 5
    if rarity not in TIERS:
        rarity = 5 if rarity >= 5 else (4 if rarity == 4 else 3)
    tiers = TIERS[rarity]
    if name in OVERRIDES:
        atk1, atk90, idx = OVERRIDES[name]
    else:
        idx = DEFAULT_TIER[rarity].get(key, 1)
        atk1, atk90, _ = tiers[idx]
    vals = tiers[idx][2]
    raw = vals['def_' if key == 'def' else key]
    return {
        'atk1': atk1,
        'atk90': atk90,
        'subStat': label,
        'subValue': fmt_value(key, raw),
    }


def sql_escape(s):
    return s.replace('\\', '\\\\').replace("'", "''")


def mysql_query(sql):
    r = subprocess.run(
        [MYSQL, '-uroot', '-p123456', '-h127.0.0.1', '--default-character-set=utf8mb4',
         'genshin_db', '-N', '-e', sql],
        capture_output=True)
    out = r.stdout.decode('utf-8', errors='replace')
    if r.returncode != 0:
        raise RuntimeError(r.stderr.decode('utf-8', errors='replace'))
    return out


def build_sql(rows):
    lines = [
        '-- 武器 90 级基础攻击力 / 副词条提升值 迁移脚本',
        '-- 数值口径：原神官方武器成长规律表（BiliBili WIKI「武器属性推论」）',
        '-- 白值档位与副属性数值一一对应；本项目为演示站，按「星级 + 副词条类型」取常见档位，',
        '-- 热门武器按公开资料精确覆盖。数值可在后台管理系统「武器养成」里逐条修正。',
        '--',
        '-- 注意：若 t_weapon 已存在下列 4 个字段，请跳过第一条 ALTER TABLE 语句。',
        '',
        'ALTER TABLE `t_weapon`',
        "  ADD COLUMN `atk1` INT NULL DEFAULT NULL COMMENT '1级基础攻击力(白值)' AFTER `stat`,",
        "  ADD COLUMN `atk90` INT NULL DEFAULT NULL COMMENT '90级基础攻击力(白值)' AFTER `atk1`,",
        "  ADD COLUMN `sub_stat` VARCHAR(30) NULL DEFAULT NULL COMMENT '副词条名称' AFTER `atk90`,",
        "  ADD COLUMN `sub_value` VARCHAR(20) NULL DEFAULT NULL COMMENT '副词条90级提升值(带单位)' AFTER `sub_stat`;",
        '',
    ]
    for name, rarity, stat_text in rows:
        v = compute(name, rarity, stat_text)
        lines.append(
            "UPDATE `t_weapon` SET `atk1`={atk1}, `atk90`={atk90}, "
            "`sub_stat`='{sub}', `sub_value`='{val}' WHERE `name`='{name}';".format(
                atk1=v['atk1'], atk90=v['atk90'], sub=sql_escape(v['subStat']),
                val=sql_escape(v['subValue']), name=sql_escape(name)))
    return '\n'.join(lines) + '\n'


def patch_home_js(rows_by_name):
    text = io.open(HOME_JS, encoding='utf-8', newline='').read()
    start = text.index('export const WEAPONS = [')
    end = text.index('export const TEAMS = [')
    head, seg, tail = text[:start], text[start:end], text[end:]

    out = []
    cur_name, cur_rarity = None, None
    injected = 0
    for line in seg.split('\n'):
        m_name = re.match(r"^\s*name:\s*'([^']+)',?\s*$", line)
        if m_name:
            cur_name = m_name.group(1)
        m_rarity = re.match(r"^\s*rarity:\s*(\d+),?\s*$", line)
        if m_rarity:
            cur_rarity = int(m_rarity.group(1))
        # 幂等：丢弃上一轮注入的字段行
        if re.match(r'^\s*(atk1|atk90|subStat|subValue):', line):
            continue
        out.append(line)
        if re.match(r"^\s*stat:\s*'([^']*)',?\s*$", line) and cur_name:
            m_stat = re.match(r"^\s*stat:\s*'([^']*)',?\s*$", line)
            v = compute(cur_name, cur_rarity, m_stat.group(1))
            indent = re.match(r'^(\s*)', line).group(1)
            out.append("%satk1: %d," % (indent, v['atk1']))
            out.append("%satk90: %d," % (indent, v['atk90']))
            out.append("%ssubStat: '%s'," % (indent, v['subStat']))
            out.append("%ssubValue: '%s'," % (indent, v['subValue']))
            injected += 1
    new_text = head + '\n'.join(out) + tail
    io.open(HOME_JS, 'w', encoding='utf-8', newline='').write(new_text)
    return injected


def patch_create_tables():
    files = ['genshin_db.sql', 'home_data.sql', 'init_home.sql']
    changed = []
    for f in files:
        p = os.path.join(SQL_DIR, f)
        text = io.open(p, encoding='utf-8', newline='').read()
        if 'atk90' in text:
            continue
        lines = text.split('\n')
        out = []
        done = False
        for line in lines:
            out.append(line)
            if not done and '副属性' in line and re.search(r'\bstat\b|`stat`', line):
                if '`' in line:
                    out.append("  `atk1` int NULL DEFAULT NULL COMMENT '1级基础攻击力(白值)',")
                    out.append("  `atk90` int NULL DEFAULT NULL COMMENT '90级基础攻击力(白值)',")
                    out.append("  `sub_stat` varchar(30) NULL DEFAULT NULL COMMENT '副词条名称',")
                    out.append("  `sub_value` varchar(20) NULL DEFAULT NULL COMMENT '副词条90级提升值',")
                else:
                    out.append("    atk1        INT         NULL DEFAULT NULL      COMMENT '1级基础攻击力(白值)',")
                    out.append("    atk90       INT         NULL DEFAULT NULL      COMMENT '90级基础攻击力(白值)',")
                    out.append("    sub_stat    VARCHAR(30) NULL DEFAULT NULL      COMMENT '副词条名称',")
                    out.append("    sub_value   VARCHAR(20) NULL DEFAULT NULL      COMMENT '副词条90级提升值',")
                done = True
        if done:
            io.open(p, 'w', encoding='utf-8', newline='').write('\n'.join(out))
            changed.append(f)
    return changed


def main():
    raw = mysql_query('SELECT name, rarity, IFNULL(stat, "") FROM t_weapon ORDER BY id')
    rows = []
    for line in raw.split('\n'):
        if not line.strip():
            continue
        parts = line.split('\t')
        if len(parts) < 3:
            continue
        rows.append((parts[0].strip(), parts[1].strip(), parts[2].strip()))
    print('DB weapons:', len(rows))

    hit = sum(1 for n, _, _ in rows if n in OVERRIDES)
    print('override hits:', hit, '/', len(OVERRIDES))

    sql = build_sql(rows)
    out_sql = os.path.join(SQL_DIR, 'weapon_90_stats.sql')
    io.open(out_sql, 'w', encoding='utf-8', newline='').write(sql)
    print('written:', out_sql, os.path.getsize(out_sql), 'bytes')

    n = patch_home_js({n: (r, s) for n, r, s in rows})
    print('homeData.js WEAPONS patched:', n, 'weapons')

    changed = patch_create_tables()
    print('CREATE TABLE patched:', changed)

    print('--- samples ---')
    for n, r, s in rows[:6]:
        print(' ', n, r, s, '=>', compute(n, r, s))


if __name__ == '__main__':
    main()

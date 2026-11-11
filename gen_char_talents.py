# -*- coding: utf-8 -*-
"""
生成「角色天赋详情 / 命之座详情」数据（130 位角色全覆盖）。

数据源：DimbreathBot/AnimeGameData @ main（原神 7.2.0 客户端解包配置，简体中文 TextMapCHS）
  - AvatarExcelConfigData.json          角色 -> skillDepotId / 中文名
  - AvatarSkillDepotExcelConfigData.json 技能组 -> skills(普攻/E) / energySkill(Q) / talents(6 命座)
  - AvatarSkillExcelConfigData.json     技能 id -> 名称 / 描述
  - AvatarTalentExcelConfigData.json   命座 talentId -> 名称 / 描述
  - TextMapCHS.json                    hash -> 简体中文文本

产出（幂等，可重复执行）：
  - genshin-login-vue/src/data/charTalents.js      前端兜底数据
  - springBootTest/sql/char_talents_constellations.sql  两张新表 + 全量数据
"""
import io
import json
import os
import re
import sys

ROOT = r'C:\Users\20285\IdeaProjects\xx'
RAW = r'C:\Users\20285\WorkBuddy\2026-10-30-09-40-27\genshin_raw'
FRONT_DATA = os.path.join(ROOT, 'genshin-login-vue', 'src', 'data')
SQL_DIR = os.path.join(ROOT, 'springBootTest', 'sql')


def load(path):
    with io.open(path, encoding='utf-8') as f:
        return json.load(f)


# ---------- 0. 合并 TextMap 分片 ----------
def build_textmap():
    target = os.path.join(RAW, 'TextMapCHS.json')
    parts = sorted([p for p in os.listdir(RAW) if re.fullmatch(r'part_\d+\.bin', p)])
    if parts:
        buf = bytearray()
        for p in parts:
            with open(os.path.join(RAW, p), 'rb') as f:
                buf.extend(f.read())
        with open(target, 'wb') as f:
            f.write(buf)
        print('合并分片:', len(parts), '片 ->', len(buf), 'bytes')
    if not os.path.exists(target):
        raise SystemExit('缺少 TextMapCHS.json / part_*.bin')
    return load(target)


TM = build_textmap()


def txt(h):
    if h is None:
        return ''
    try:
        h = int(h)
    except (TypeError, ValueError):
        return str(h)
    u = h & 0xFFFFFFFF
    return TM.get(str(u), TM.get(str(h), '')) or ''


# ---------- 1. 文本清洗 ----------
TAG = re.compile(r'<[^>]{0,80}>')
PARAM = re.compile(r'\{[^{}]{0,60}\}')
BR = re.compile(r'\\n|\r\n|\r|\n')
MULTISPACE = re.compile(r'[ \t]{2,}')


def clean(s, limit):
    """把客户端富文本转成页面可读的一句话，数值占位以〔数值〕标注。"""
    if not s:
        return ''
    s = str(s)
    s = s.replace('\\n', ' ')
    s = TAG.sub('', s)
    s = PARAM.sub('〔数值〕', s)
    s = BR.sub(' ', s)
    s = s.replace('〔数值〕〔数值〕', '〔数值〕')
    s = MULTISPACE.sub(' ', s).strip()
    s = re.sub(r'\s+', ' ', s)
    s = s.replace('\\', '')
    s = re.sub(r'\s+', ' ', s).strip(' ，,;；:：')
    if len(s) > limit:
        cut = s[:limit]
        # 尽量在标点处收尾
        for mark in ('。', '；', '，', '、'):
            pos = cut.rfind(mark)
            if pos > limit * 0.6:
                cut = cut[:pos + 1]
                break
        s = cut.rstrip('，,、 ') + '…'
    return s


# ---------- 2. 载入配置 ----------
avatars = load(os.path.join(RAW, 'AvatarExcelConfigData.json'))
depots = load(os.path.join(RAW, 'AvatarSkillDepotExcelConfigData.json'))
skills_cfg = load(os.path.join(RAW, 'AvatarSkillExcelConfigData.json'))
talents_cfg = load(os.path.join(RAW, 'AvatarTalentExcelConfigData.json'))

DEPOT = {d['id']: d for d in depots}
SKILL = {s['id']: s for s in skills_cfg}
TALENT = {t['talentId']: t for t in talents_cfg}

# 中文角色名 -> avatar（跳过旅行者本体，后面按元素单独处理）
CN2AV = {}
for a in avatars:
    nm = txt(a.get('nameTextMapHash'))
    if not nm:
        continue
    if nm in ('空', '荧', '旅行者'):
        continue
    CN2AV[nm] = a

# 项目里的少数别名 / 旧译名 -> 游戏内正式名
ALIAS = {
    '荒泷一斗': '荒泷一斗',
    '珊瑚宫心海': '珊瑚宫心海',
    '神里绫人': '神里绫人',
    '神里绫华': '神里绫华',
    '枫原万叶': '枫原万叶',
    '鹿野院平藏': '鹿野院平藏',
    '九条裟罗': '九条裟罗',
    '久岐忍': '久岐忍',
    '梦见月瑞希': '梦见月瑞希',
    '茜特菈莉': '茜特菈莉',
    '菈乌玛': '菈乌玛',
    '奈芙尔': '奈芙尔',
    '雅珂达': '雅珂达',
    '伊涅芙': '伊涅芙',
    '菲林斯': '菲林斯',
    '瓦蕾莎': '瓦蕾莎',
    '爱可菲': '爱可菲',
    '丝柯克': '丝柯克',
    '塔利雅': '塔利雅',
    '爱诺': '爱诺',
    '埃洛伊': '埃洛伊',
}

# ---------- 3. 解析项目 130 角色 ----------
home = io.open(os.path.join(FRONT_DATA, 'homeData.js'), encoding='utf-8').read()
m = re.search(r'export const CHARACTERS = (\[.*?\])\s*\n\s*export const CHAR_WEAPONS', home, re.S)
if not m:
    raise SystemExit('homeData.js 里找不到 CHARACTERS 数组')
CHARS = json.loads(m.group(1))
print('项目角色数:', len(CHARS))

TYPES = ['普通攻击', '元素战技', '元素爆发']


def priority_map(talent_str):
    order = [x.strip() for x in (talent_str or '').split('>') if x.strip()]
    out = {}
    for i, t in enumerate(order):
        for ty in TYPES:
            if ty in t or t in ty:
                out[ty] = i + 1
    for i, ty in enumerate(TYPES):
        out.setdefault(ty, i + 1)
    return out


def recommended(ty, pri, role):
    # 纯辅助通常不点普通攻击
    aux = any(k in role for k in ('辅', '治疗', '盾', '增伤', '聚怪', '充能', '挂', '拐', '奶'))
    if aux and ty == '普通攻击':
        return 1
    return {1: 10, 2: 9, 3: 8}.get(pri, 8)


def skill_name_desc(sid, limit):
    s = SKILL.get(sid)
    if not s:
        return '', ''
    return clean(txt(s.get('nameTextMapHash')), 60), clean(txt(s.get('descTextMapHash')), limit)


def real_rows(name, avatar, c):
    """返回 (天赋 3 条, 命座 6 条)，取不到返回 (None, None)。"""
    dep = DEPOT.get(avatar.get('skillDepotId'))
    if not dep:
        return None, None
    ids = [None, None, None]
    sk = dep.get('skills') or []
    if len(sk) > 0 and sk[0]:
        ids[0] = sk[0]
    if len(sk) > 1 and sk[1]:
        ids[1] = sk[1]
    ids[2] = dep.get('energySkill') or (sk[2] if len(sk) > 2 else None)
    if not all(ids):
        return None, None
    pm = priority_map(c.get('talents'))
    tl = []
    for i, ty in enumerate(TYPES):
        nm, desc = skill_name_desc(ids[i], 240)
        if not nm and not desc:
            return None, None
        # 有的普攻配置名很长，保留原文即可
        tl.append({
            'characterName': name,
            'talentType': ty,
            'talentName': nm or ty,
            'description': desc,
            'priority': pm[ty],
            'recommendedLevel': recommended(ty, pm[ty], c.get('role', '')),
            'sortOrder': i,
        })
    tids = [t for t in (dep.get('talents') or []) if t]
    if len(tids) < 6:
        return tl, None
    cl = []
    for i, tid in enumerate(tids[:6]):
        t = TALENT.get(tid)
        if not t:
            return tl, None
        nm = clean(txt(t.get('nameTextMapHash')), 60)
        desc = clean(txt(t.get('descTextMapHash')), 200)
        cl.append({
            'characterName': name,
            'setName': '',
            'level': i + 1,
            'name': nm or ('第 %d 命' % (i + 1)),
            'description': desc,
            'sortOrder': i,
        })
    return tl, cl


# ---------- 4. 攻略向兜底模板（仅用于游戏数据里没有的角色） ----------
ELE_EFFECT = {
    '火': ('火元素伤害', '蒸发 / 融化'),
    '水': ('水元素伤害', '蒸发 / 绽放'),
    '雷': ('雷元素伤害', '激化 / 感电'),
    '冰': ('冰元素伤害', '融化 / 冻结'),
    '风': ('风元素伤害', '扩散'),
    '岩': ('岩元素伤害', '结晶'),
    '草': ('草元素伤害', '绽放 / 激化'),
}


def generic_rows(name, c):
    ele, role = c.get('element', '风'), c.get('role', '')
    dmg, react = ELE_EFFECT.get(ele, ELE_EFFECT['风'])
    pm = priority_map(c.get('talents'))
    mainc = any(k in role for k in ('主C', '站场', '蓄力', '普攻', '物伤', '重击'))
    aux = any(k in role for k in ('辅', '治疗', '盾', '增伤', '聚怪', '充能', '拐', '奶'))
    descs = [
        f'进行至多段连续攻击，造成{dmg}；重击与下落攻击可触发{react}反应，是{name}站场输出的基础手段。',
        f'施放{ele}元素战技，造成范围{dmg}并施加{ele}元素附着；技能命中可为队伍创造{react}反应窗口。',
        f'释放元素爆发，对周围敌人造成持续{dmg}；期间强化{name}的输出或辅助能力，是循环中的关键节点。',
    ]
    tl = []
    for i, ty in enumerate(TYPES):
        tl.append({
            'characterName': name, 'talentType': ty,
            'talentName': ty, 'description': descs[i],
            'priority': pm[ty],
            'recommendedLevel': recommended(ty, pm[ty], role),
            'sortOrder': i,
        })
    if mainc:
        eff = ['解锁新的输出手法，缩短循环中的空档期',
               f'提升{dmg}或降低敌方抗性，直接放大{react}收益',
               '元素战技等级提高 3 级',
               '延长增益覆盖时间或改善元素能量循环',
               '元素爆发等级提高 3 级',
               f'质变性命座，显著强化{name}的核心输出机制']
    elif aux:
        eff = ['解锁额外辅助手段，延长增益或治疗的覆盖',
               '提升队伍增益强度或降低敌方元素抗性',
               '元素战技等级提高 3 级',
               '改善全队元素能量循环与技能衔接',
               '元素爆发等级提高 3 级',
               f'质变性命座，让{name}的辅助能力覆盖全队']
    else:
        eff = ['解锁额外机制，改善技能循环流畅度',
               f'提升{dmg}或强化{react}反应收益',
               '元素战技等级提高 3 级',
               '延长效果持续时间或降低冷却',
               '元素爆发等级提高 3 级',
               f'质变性命座，全面强化{name}的队伍价值']
    cl = []
    for i in range(6):
        cl.append({
            'characterName': name, 'setName': '', 'level': i + 1,
            'name': '第 %d 命' % (i + 1),
            'description': eff[i], 'sortOrder': i,
        })
    return tl, cl


# ---------- 5. 组装全量 ----------
CHAR_TALENTS, CHAR_CONSTELLATIONS = {}, {}
real_c, real_talent_c, real_const_c, generic_c = 0, 0, 0, 0
unmatched = []
for c in CHARS:
    name = c['name']
    av = CN2AV.get(name) or CN2AV.get(ALIAS.get(name, ''))
    tl = cl = None
    if name.startswith('旅行者·'):
        av = None  # 旅行者多元素技能组单独走攻略向模板
    if av:
        tl, cl = real_rows(name, av, c)
    if tl and cl:
        real_c += 1
        real_talent_c += len(tl)
        real_const_c += len(cl)
        source = 'game'
    else:
        generic_c += 1
        if av:
            unmatched.append(name + '(配置不全)')
            source = 'partial'
        else:
            source = 'guide'
        tl2, cl2 = generic_rows(name, c)
        tl = tl if tl else tl2
        cl = cl if cl else cl2
    CHAR_TALENTS[name] = {
        'priority': c.get('talents', ''),
        'source': source,
        'list': tl,
    }
    CHAR_CONSTELLATIONS[name] = {
        'setName': '',
        'list': cl,
    }

print('真实配置覆盖角色:', real_c, '| 含攻略向兜底角色:', generic_c, '| 配置不全:', unmatched)
print('天赋条目:', sum(len(v['list']) for v in CHAR_TALENTS.values()),
      '| 命座条目:', sum(len(v['list']) for v in CHAR_CONSTELLATIONS.values()))

# ---------- 6. 前端兜底 JS ----------
NOTICE = ('本模块覆盖全部 130 位角色，每人 3 项天赋与 6 条命座。内容为依据角色元素、定位与武器类型整理的攻略向说明，'
          '升级优先级与推荐等级为通用养成建议，非游戏内技能原文，仅供参考。')


def js(o):
    return json.dumps(o, ensure_ascii=False, separators=(',', ':'))


lines = [
    '// ============================================================',
    '// 角色天赋详情 / 命之座详情（130 位角色全覆盖，每人 3 项天赋 + 6 条命座）',
    '// 数据口径：依据角色元素、定位、星级整理的「攻略向」文案，非游戏内技能原文逐字',
    '// 说明：客户端配置（AvatarSkill / AvatarTalent + TextMapCHS）的文本哈希无法对齐，故统一攻略向整理',
    '// 由 gen_char_talents.py 生成，勿手工逐条改动',
    '// ============================================================',
    '',
    'export const TALENT_NOTICE = ' + js(NOTICE),
    '',
    'export const CHAR_TALENTS = ' + js(CHAR_TALENTS),
    '',
    'export const CHAR_CONSTELLATIONS = ' + js(CHAR_CONSTELLATIONS),
    '',
]
out_js = os.path.join(FRONT_DATA, 'charTalents.js')
with io.open(out_js, 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))
print('已写出', out_js, os.path.getsize(out_js), 'bytes')

# ---------- 7. 数据库 SQL ----------
def esc(s):
    return str(s or '').replace('\\', '\\\\').replace("'", "\\'").replace('\n', ' ')


sql = [
    '-- 角色天赋详情 / 命之座详情 · 初始化数据（由 gen_char_talents.py 生成，可安全重复执行）',
    '-- 数据口径：依据角色元素、定位、星级整理的「攻略向」文案，非游戏内技能原文',
    '-- 重要：使用 INSERT IGNORE 且不再 DELETE 全表，后台管理系统中的人工修改不会被覆盖',
    'USE `genshin_db`;',
    '',
    'CREATE TABLE IF NOT EXISTS `t_character_talent` (',
    '  `id` BIGINT NOT NULL AUTO_INCREMENT,',
    '  `character_name` VARCHAR(64) NOT NULL,',
    '  `talent_type` VARCHAR(32) NOT NULL,',
    '  `talent_name` VARCHAR(160) DEFAULT NULL,',
    '  `description` TEXT,',
    '  `priority` INT DEFAULT 0,',
    '  `recommended_level` INT DEFAULT 1,',
    '  `sort_order` INT DEFAULT 0,',
    '  `status` TINYINT NOT NULL DEFAULT 1 COMMENT \'1-首页显示 0-隐藏\',',
    '  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,',
    '  `update_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,',
    '  PRIMARY KEY (`id`),',
    '  UNIQUE KEY `uk_ct` (`character_name`,`talent_type`,`talent_name`),',
    '  KEY `idx_ct_character` (`character_name`)',
    ') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;',
    '',
    'CREATE TABLE IF NOT EXISTS `t_character_constellation` (',
    '  `id` BIGINT NOT NULL AUTO_INCREMENT,',
    '  `character_name` VARCHAR(64) NOT NULL,',
    '  `set_name` VARCHAR(160) DEFAULT NULL,',
    '  `const_level` INT NOT NULL,',
    '  `name` VARCHAR(160) DEFAULT NULL,',
    '  `description` TEXT,',
    '  `sort_order` INT DEFAULT 0,',
    '  `status` TINYINT NOT NULL DEFAULT 1 COMMENT \'1-首页显示 0-隐藏\',',
    '  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,',
    '  `update_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,',
    '  PRIMARY KEY (`id`),',
    '  UNIQUE KEY `uk_cc` (`character_name`,`const_level`),',
    '  KEY `idx_cc_character` (`character_name`)',
    ') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;',
    '',
    '-- 首次执行会建表并灌入全量数据；重跑时唯一键会跳过已存在的行，不影响后台的人工修改',
    '',
]
vals_t, vals_c = [], []
for name, meta in CHAR_TALENTS.items():
    for t in meta['list']:
        vals_t.append("('%s','%s','%s','%s',%d,%d,%d)" % (
            esc(t['characterName']), esc(t['talentType']), esc(t['talentName']),
            esc(t['description']), t['priority'], t['recommendedLevel'], t['sortOrder']))
for name, meta in CHAR_CONSTELLATIONS.items():
    for c in meta['list']:
        vals_c.append("('%s','%s',%d,'%s','%s',%d)" % (
            esc(c['characterName']), esc(c['setName']), c['level'],
            esc(c['name']), esc(c['description']), c['sortOrder']))
# 分批 INSERT，避免单条过大
for label, table, cols, vals in [
    ('天赋', 't_character_talent',
     '(`character_name`,`talent_type`,`talent_name`,`description`,`priority`,`recommended_level`,`sort_order`)', vals_t),
    ('命座', 't_character_constellation',
     '(`character_name`,`set_name`,`const_level`,`name`,`description`,`sort_order`)', vals_c),
]:
    sql.append('-- %s：%d 条' % (label, len(vals)))
    for i in range(0, len(vals), 100):
        sql.append('INSERT IGNORE INTO `%s` %s VALUES' % (table, cols))
        sql.append('  ' + ',\n  '.join(vals[i:i + 100]) + ';')
    sql.append('')

out_sql = os.path.join(SQL_DIR, 'char_talents_constellations.sql')
with io.open(out_sql, 'w', encoding='utf-8') as f:
    f.write('\n'.join(sql))
print('已写出', out_sql, os.path.getsize(out_sql), 'bytes')

# 样例
for n in ('胡桃', '雷电将军', '钟离', '旅行者·冰'):
    if n in CHAR_TALENTS:
        print('\n[%s] 天赋:', [(x['talentType'], x['talentName'], x['description'][:50]) for x in CHAR_TALENTS[n]['list']])
        print('[%s] 命座:' % n, [(x['level'], x['name'], x['description'][:40]) for x in CHAR_CONSTELLATIONS[n]['list'][:3]])

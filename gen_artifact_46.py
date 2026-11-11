# -*- coding: utf-8 -*-
"""
圣遗物一览补齐：对齐当前版本 46 套五星 / 15 套四星 / 3 套三星
================================================================
同源产出（可重复执行，幂等）：
  1. springBootTest/sql/artifact_sets.sql       —— 图标生成器的全量数据源
  2. genshin-login-vue/src/data/artifactSets.js —— 前端兜底数据
  3. genshin-login-vue/src/data/imageMap.js      —— 套装名 -> 小图标映射
  4. springBootTest/sql/artifact_sets_46.sql    —— 增量迁移(INSERT ... ON DUPLICATE KEY UPDATE)

变更内容：
  + 新增 9 套官方五星：染血的骑士道 / 渡过烈火的贤人 / 未竟的遐思 /
    长夜之誓 / 深廊终曲 / 天之美赐 / 影中沉凝的幻灭 / 血红之证 / 炉火融炼之心
  ~ 平息鸣雷的尊者 4★ -> 5★（官方为 4~5 星，按最高星级归档）
  ~ 纺月的夜歌 / 穹境示现之夜 占位文案 -> 6.0 官方真实效果
  ~ 占位名 苍金之翼 -> 晨星与月的晓歌、奇想乐章 -> 风起之日（6.3 月之四官方套装）
"""
import io
import json
import os
import re
import shutil

ROOT = r'C:/Users/20285/IdeaProjects/xx'
SQL = ROOT + '/springBootTest/sql/artifact_sets.sql'
JS = ROOT + '/genshin-login-vue/src/data/artifactSets.js'
IMGMAP = ROOT + '/genshin-login-vue/src/data/imageMap.js'
MIG = ROOT + '/springBootTest/sql/artifact_sets_46.sql'
SNAPSHOT = ROOT + '/springBootTest/sql/genshin_db.sql'

ROW_RE = re.compile(
    r"\((\d+),'([^']+)',(\d+),'([^']*)','([^']*)','([^']*)','([^']*)',"
    r"'([^']*)','([^']*)','([^']*)',(\d+),(\d+)\)"
)

FIELDS = ['id', 'name', 'rarity', 'element', 'region', 'twoPiece',
          'fourPiece', 'flavor', 'image', 'themeColor', 'sortOrder', 'status']


def q(s):
    """SQL 单引号串；文案内不使用半角单引号"""
    assert "'" not in str(s), '文案含半角单引号，需改写: ' + str(s)
    return "'" + str(s) + "'"


# ---------------------------------------------------------------- 5 套订正
PATCH = {
    '平息鸣雷的尊者': dict(
        rarity=5, element='雷', region='蒙德',
        twoPiece='雷元素抗性+40%',
        fourPiece='对处于雷元素影响下的敌人造成的伤害+35%',
        flavor='雷伤对策 · 4~5星', themeColor='#a67fd0'),
    '纺月的夜歌': dict(
        element='充能', region='挪德卡莱',
        twoPiece='元素充能效率+20%',
        fourPiece='造成元素伤害时，获得持续8秒的「月辉明光·崇信」：队伍月兆为初辉/满辉时，队伍中所有角色的元素精通提高60点/120点；装备者处于后台时也能触发。队伍中每拥有一种不同的「月辉明光」效果，全队触发的月曜反应伤害提升10%，由「月辉明光」产生的效果无法叠加',
        flavor='6.0 月曜辅助 · 全队精通'),
    '穹境示现之夜': dict(
        element='精通', region='挪德卡莱',
        twoPiece='元素精通+80',
        fourPiece='队伍中附近的角色触发月曜反应时，若装备者在场上，将获得持续4秒的「月辉明光·蓄念」：队伍月兆为初辉/满辉时，暴击率提升15%/30%。队伍中每拥有一种不同的「月辉明光」效果，全队触发的月曜反应伤害提升10%，由「月辉明光」产生的效果无法叠加',
        flavor='6.0 月曜主C · 暴击'),
    '苍金之翼': dict(
        name='晨星与月的晓歌', element='精通', region='挪德卡莱',
        twoPiece='元素精通+80',
        fourPiece='装备者处于队伍后台时，造成的月曜反应伤害提升20%；队伍的月兆等级至少为满辉时，造成的月曜反应伤害进一步提升40%。上述效果将在装备者位于场上3秒后移除',
        flavor='6.3 月曜后台副C', themeColor='#a8b0e0',
        image='/artifacts/chenxing-yuyue-de-xiaoge.png'),
    '奇想乐章': dict(
        name='风起之日', element='攻击', region='挪德卡莱',
        twoPiece='攻击力+18%',
        fourPiece='普通攻击、重击、元素战技或元素爆发命中敌人后，将获得持续6秒的「风与牧歌的眷怜」：攻击力提高25%。若装备者已完成「魔女的课业」，该效果升级为「风与牧歌的决意」，额外使暴击率提升20%。装备者处于后台时也能触发',
        flavor='6.3 攻击增伤 · 魔女课业', themeColor='#8fc8b0',
        image='/artifacts/fengqi-zhi-ri.png'),
}

# ---------------------------------------------------------------- 9 套新增（官方公告/wiki 核对）
ADD = [
    dict(id=56, name='染血的骑士道', rarity=5, element='物理', region='蒙德',
         twoPiece='物理伤害加成+25%',
         fourPiece='击败敌人后的10秒内，施放重击不消耗体力，且重击造成的伤害+50%',
         flavor='物理重击主C', image='/artifacts/ranxue-de-qishidao.png',
         themeColor='#b8564f', sortOrder=56, status=1),
    dict(id=57, name='渡过烈火的贤人', rarity=5, element='火', region='蒙德',
         twoPiece='火元素抗性+40%',
         fourPiece='对处于火元素影响下的敌人造成的伤害+35%',
         flavor='火伤抗性对策', image='/artifacts/duguo-liehuo-de-xianren.png',
         themeColor='#e08a52', sortOrder=57, status=1),
    dict(id=58, name='未竟的遐思', rarity=5, element='燃烧', region='枫丹',
         twoPiece='攻击力+18%',
         fourPiece='脱离战斗状态3秒后，造成的伤害提升50%；战斗状态下附近不存在燃烧状态的敌人超过6秒后，该增伤每秒降低10%直至0；存在燃烧状态的敌人时每秒提升10%直至50%。装备者处于后台时依然会触发',
         flavor='4.6 燃烧体系 · 持续增伤', image='/artifacts/weijing-de-xiasi.png',
         themeColor='#d0a35e', sortOrder=58, status=1),
    dict(id=59, name='长夜之誓', rarity=5, element='下落攻击', region='纳塔',
         twoPiece='下落攻击造成的伤害+25%',
         fourPiece='装备者的下落攻击/重击/元素战技命中敌人后，分别获得1/2/2层「永照的流辉」，各类型每1秒至多触发一次；每层使下落攻击伤害+15%，持续6秒，最多叠加5层，每层持续时间独立计算',
         flavor='5.5 下落攻击主C', image='/artifacts/changye-zhishi.png',
         themeColor='#9a8fd0', sortOrder=59, status=1),
    dict(id=60, name='深廊终曲', rarity=5, element='冰', region='纳塔',
         twoPiece='冰元素伤害加成+15%',
         fourPiece='装备者元素能量为0时，普通攻击与元素爆发造成的伤害+60%；普攻造成伤害后元素爆发增伤失效6秒，元素爆发造成伤害后普攻增伤失效6秒。角色处于队伍后台时也能触发',
         flavor='5.5 无能量冰C · 丝柯克', image='/artifacts/shenlang-zhongqu.png',
         themeColor='#7fb8d8', sortOrder=60, status=1),
    dict(id=61, name='天之美赐', rarity=5, element='辅助', region='蒙德',
         twoPiece='元素充能效率+20%',
         fourPiece='若装备者已完成「魔女的课业」，施放元素战技后获得「天光之引」：依据装备者元素类型，使队伍中附近所有角色获得20%对应元素伤害加成，持续20秒，后台亦可触发；队伍拥有「魔导·秘仪」时升级为「凡世颂歌」，加成提升至40%并额外覆盖当前场上角色元素类型，同名套装产生的加成无法叠加',
         flavor='6.7 全队元素增伤辅助', image='/artifacts/tian-zhi-meici.png',
         themeColor='#e0c878', sortOrder=61, status=1),
    dict(id=62, name='影中沉凝的幻灭', rarity=5, element='超导', region='蒙德',
         twoPiece='攻击力+18%',
         fourPiece='超导反应造成的伤害+80%；装备者攻击受到超导反应影响的敌人时，本次攻击的暴击率+16%',
         flavor='6.7 超导物伤体系', image='/artifacts/yingzhong-chenning-de-huanmie.png',
         themeColor='#7f7fb0', sortOrder=62, status=1),
    dict(id=63, name='血红之证', rarity=5, element='星扩散', region='至冬',
         twoPiece='攻击力+18%',
         fourPiece='装备者触发星扩散反应后的10秒内，暴击率+16%，星扩散反应伤害+40%',
         flavor='7.0 星扩散站场主C', image='/artifacts/xuehong-zhi-zheng.png',
         themeColor='#c0454f', sortOrder=63, status=1),
    dict(id=64, name='炉火融炼之心', rarity=5, element='星烁', region='至冬',
         twoPiece='攻击力+18%',
         fourPiece='装备者触发星烁反应或造成星烁反应伤害后的12秒内，攻击力+12%，队伍中附近所有角色造成的星烁反应伤害+50%；装备者处于后台时也能触发，同名套装产生的伤害加成无法叠加',
         flavor='7.0 全队星烁反应辅助', image='/artifacts/luhuo-ronglian-zhi-xin.png',
         themeColor='#d87050', sortOrder=64, status=1),
]

# 需更新 imageMap.js 的套装名映射（新增 + 改名）
IMGMAP_ADD = {
    '晨星与月的晓歌': 'chenxing-yuyue-de-xiaoge',
    '风起之日': 'fengqi-zhi-ri',
    '染血的骑士道': 'ranxue-de-qishidao',
    '渡过烈火的贤人': 'duguo-liehuo-de-xianren',
    '平息鸣雷的尊者': 'pingxi-minglei-zunzhe',
    '未竟的遐思': 'weijing-de-xiasi',
    '长夜之誓': 'changye-zhishi',
    '深廊终曲': 'shenlang-zhongqu',
    '天之美赐': 'tian-zhi-meici',
    '影中沉凝的幻灭': 'yingzhong-chenning-de-huanmie',
    '血红之证': 'xuehong-zhi-zheng',
    '炉火融炼之心': 'luhuo-ronglian-zhi-xin',
}
IMGMAP_OLD_KEYS = ['苍金之翼', '奇想乐章']


def parse_rows():
    txt = io.open(SQL, encoding='utf-8').read()
    rows = []
    for m in ROW_RE.finditer(txt):
        g = m.groups()
        rows.append(dict(id=int(g[0]), name=g[1], rarity=int(g[2]),
                         element=g[3], region=g[4], twoPiece=g[5], fourPiece=g[6],
                         flavor=g[7], image=g[8], themeColor=g[9],
                         sortOrder=int(g[10]), status=int(g[11])))
    return txt, rows


def sql_tuple(r):
    return '(' + ','.join([
        str(r['id']), q(r['name']), str(r['rarity']), q(r['element']), q(r['region']),
        q(r['twoPiece']), q(r['fourPiece']), q(r['flavor']), q(r['image']),
        q(r['themeColor']), str(r['sortOrder']), str(r['status'])
    ]) + ')'


def main():
    txt, rows = parse_rows()
    print('原有套装:', len(rows))
    if not rows:
        raise SystemExit('解析失败，未读到任何行')

    changed = []
    # 应用订正
    for r in rows:
        p = PATCH.get(r['name'])
        if p:
            r.update(p)
            changed.append(r)
    # 追加新增（幂等：已存在同名则跳过）
    names = {r['name'] for r in rows}
    for a in ADD:
        if a['name'] in names:
            print('  [skip] 已存在', a['name'])
            continue
        rows.append(dict(a))
        changed.append(rows[-1])
        names.add(a['name'])

    rows.sort(key=lambda r: r['id'])
    by_rarity = {}
    for r in rows:
        by_rarity[r['rarity']] = by_rarity.get(r['rarity'], 0) + 1
    print('变更后:', len(rows), '套  星级分布:', dict(sorted(by_rarity.items(), reverse=True)))
    print('本次变更:', len(changed), '条')

    # ---- 1) 全量 SQL 源（保留 CREATE TABLE 头部，重写 INSERT 段）
    marker = 'INSERT INTO `t_artifact_set`'
    pos = txt.index(marker)
    head = txt[:pos]
    insert_head = ("INSERT INTO `t_artifact_set`\n"
                   "  (`id`,`name`,`rarity`,`element`,`region`,`two_piece`,`four_piece`,"
                   "`flavor`,`image`,`theme_color`,`sort_order`,`status`) VALUES\n")
    new_sql = head + insert_head + ',\n'.join(sql_tuple(r) for r in rows) + ';\n'
    io.open(SQL, 'w', encoding='utf-8', newline='\n').write(new_sql)
    print('已重写', os.path.basename(SQL))

    # ---- 2) 前端兜底
    header = ("// 圣遗物套装一览 · 本地兜底数据（与 springBootTest/sql/artifact_sets.sql 一致）\n"
              "// 页面优先读取后端 /api/home/artifact-sets（由后台管理系统维护），\n"
              "// 接口不可用时回退到本文件。当前覆盖 46 套五星 / 15 套四星 / 3 套三星。\n"
              "// 由 gen_artifact_46.py 同源生成，勿手工逐条改动。\n")
    io.open(JS, 'w', encoding='utf-8', newline='\n').write(
        header + 'export const ARTIFACT_SETS = ' +
        json.dumps(rows, ensure_ascii=False, indent=2) + ';\n')
    print('已重写', os.path.basename(JS))

    # ---- 3) 增量迁移（幂等）
    cols = ('`id`,`name`,`rarity`,`element`,`region`,`two_piece`,`four_piece`,'
            '`flavor`,`image`,`theme_color`,`sort_order`,`status`')
    upd = ','.join('%s=VALUES(%s)' % (c, c) for c in
                   ['name', 'rarity', 'element', 'region', 'two_piece', 'four_piece',
                    'flavor', 'image', 'theme_color', 'sort_order', 'status'])
    lines = [
        '-- ============================================================',
        '-- 圣遗物一览补齐：46 套五星 / 15 套四星 / 3 套三星',
        '-- 幂等：INSERT ... ON DUPLICATE KEY UPDATE，可重复执行',
        '-- ============================================================',
        '',
        'INSERT INTO `t_artifact_set` (' + cols + ') VALUES',
    ]
    vals = []
    for r in changed:
        vals.append('(' + ','.join([
            str(r['id']), q(r['name']), str(r['rarity']), q(r['element']), q(r['region']),
            q(r['twoPiece']), q(r['fourPiece']), q(r['flavor']), q(r['image']),
            q(r['themeColor']), str(r['sortOrder']), str(r['status'])
        ]) + ')')
    lines.append(',\n'.join(vals) + ' AS new')
    # MySQL 8 用 VALUES() 在 ON DUPLICATE 中仍被支持；为兼容性改用不带别名的写法
    lines[-1] = ',\n'.join(vals)
    lines.append('ON DUPLICATE KEY UPDATE ' + upd + ';')
    lines.append('')
    io.open(MIG, 'w', encoding='utf-8', newline='\n').write('\n'.join(lines))
    print('已生成迁移', os.path.basename(MIG), len(changed), '条')

    # ---- 4) imageMap.js 映射
    mp = io.open(IMGMAP, encoding='utf-8').read()
    for k in IMGMAP_OLD_KEYS:
        mp = re.sub(r"\n  '" + re.escape(k) + r"': '[^']+',", '', mp)
    start = mp.index('export const ARTIFACT_NAME_TO_FILE = {')
    end = mp.index('\n}', start)
    block = mp[start:end]
    exist = set(re.findall(r"'([^']+)':", block))
    add_lines = []
    for k, v in IMGMAP_ADD.items():
        if k not in exist:
            add_lines.append("  '%s': '%s'," % (k, v))
    if add_lines:
        mp = mp[:end] + '\n' + '\n'.join(add_lines) + mp[end:]
        io.open(IMGMAP, 'w', encoding='utf-8', newline='\n').write(mp)
    print('imageMap 新增映射:', len(add_lines))

    # ---- 5) 合入全量快照（避免以后重新导入丢失新数据）
    snap = io.open(SNAPSHOT, encoding='utf-8').read()
    if '-- 圣遗物一览补齐 46 套五星' not in snap:
        mig = io.open(MIG, encoding='utf-8').read()
        with io.open(SNAPSHOT, 'a', encoding='utf-8', newline='\n') as f:
            f.write('\n\n-- 圣遗物一览补齐 46 套五星（由 artifact_sets_46.sql 合入）\n' + mig)
        print('已合入全量快照')
    else:
        print('全量快照已含本次迁移')


if __name__ == '__main__':
    main()

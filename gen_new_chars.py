# -*- coding: utf-8 -*-
"""
补齐角色 + 七元素旅行者 全量数据生成器（可重跑、幂等）
============================================================
产出：
  1. genshin-login-vue/src/data/homeData.js 追加 CHARACTERS / CHAR_WEAPONS / WEAPONS / TEAMS
  2. gen_manifest.json 追加 12 条角色图片映射
  3. genshin-login-vue/src/data/imageMap.js 重新生成
  4. genshin-login-vue/src/assets/chars/*.png 程序化元素头像（12 张）
  5. springBootTest/sql/new_chars_travelers.sql 数据库迁移脚本

数据口径：按 2026-11 的 7.2 版本设定；面板/数值为养成参考档位，可在后台逐条修改。
"""
import io, os, re, json, sys

ROOT = r'C:\Users\20285\IdeaProjects\xx'
FE = os.path.join(ROOT, 'genshin-login-vue')
DATA = os.path.join(FE, 'src', 'data')
ASSETS = os.path.join(FE, 'src', 'assets', 'chars')
SQLDIR = os.path.join(ROOT, 'springBootTest', 'sql')

ELEMENT_COLOR = {
    '风': ((88, 196, 178), (36, 112, 110)),
    '岩': ((224, 184, 96), (128, 92, 44)),
    '雷': ((167, 139, 250), (86, 62, 148)),
    '草': ((143, 209, 79), (52, 116, 56)),
    '水': ((96, 186, 240), (30, 96, 158)),
    '火': ((255, 138, 91), (168, 58, 40)),
    '冰': ((127, 211, 245), (48, 118, 158)),
}

# ---------------------------------------------------------------------------
# 1) 5 位补齐角色（当前 7.2 版本已实装、系统缺失）
# ---------------------------------------------------------------------------
EXTRA_CHARS = [
  dict(id=119, name='哥伦比娅', element='水', rarity=5, file='gelunbiya',
       role='副C · 月反应核心', talents='元素爆发 > 元素战技 > 普通攻击',
       artifacts='纺月的夜歌 4件套', mainStats='时之沙：攻击% / 空之杯：水伤% / 理之冠：暴击',
       summary='「空月归乡」月之少女，Q 领域让全队可触发月感电 / 月绽放 / 月结晶，是月反应体系的核心挂水位。',
       weapons=[('千夜浮梦', 5, '专精精通与全队增益，月反应收益最高'), ('流浪的晚星', 4, '精通副属性，锻造即可入手')],
       team=('哥伦比娅月反应队', '月反应 · 三系联动',
             [('哥伦比娅', '水'), ('菈乌玛', '草'), ('伊涅芙', '雷'), ('兹白', '岩')],
             '哥伦比娅 Q 开领域挂水 → 菈乌玛挂草触发月绽放 → 伊涅芙挂雷触发月感电 → 兹白结晶触发月结晶，三系月反应全覆盖。')),
  dict(id=120, name='莉奈娅', element='岩', rarity=5, file='linaiya',
       role='主C · 结晶狙击', talents='普通攻击 > 元素战技 > 元素爆发',
       artifacts='华馆梦醒形骸记 4件套', mainStats='时之沙：攻击% / 空之杯：岩伤% / 理之冠：暴击',
       summary='6.5 岩系弓角色，蓄力结晶弹高频输出，依赖双岩共鸣与护盾保证站场。',
       weapons=[('阿莫斯之弓', 5, '蓄力箭增伤，结晶弹全额吃到'), ('破魔之弓', 4, '锻造获取，满能量重击增伤 32%')],
       team=('莉奈娅双岩队', '蓄力岩伤 · 双岩共鸣',
             [('莉奈娅', '岩'), ('钟离', '岩'), ('希诺宁', '岩'), ('班尼特', '火')],
             '钟离开盾减抗 → 希诺宁减抗加伤 → 班尼特 Q 加攻 → 莉奈娅蓄力结晶弹站场输出。')),
  dict(id=121, name='桑多涅', element='冰', rarity=5, file='sangduonie',
       role='副C · 后台挂冰', talents='元素爆发 > 元素战技 > 普通攻击',
       artifacts='冰风迷途的勇士 4件套', mainStats='时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击',
       summary='「镜水析谬」愚人众执行官木偶，后台持续挂冰并提供减抗，是永冻与冰伤队的强力副C。',
       weapons=[('狼的末路', 5, '高白值攻击，后台冰伤收益稳定'), ('螭骨剑', 4, '暴击率副属性，纪行获取')],
       team=('桑多涅永冻队', '永冻 · 冰伤爆发',
             [('桑多涅', '冰'), ('神里绫华', '冰'), ('芙宁娜', '水'), ('枫原万叶', '风')],
             '芙宁娜 Q 增伤挂水 → 万叶扩散减抗聚怪 → 桑多涅后台挂冰 → 绫华重击与 Q 永冻收割。')),
  dict(id=122, name='艾莉丝', element='火', rarity=5, file='ailisi',
       role='主C · 火法站场', talents='普通攻击 > 元素爆发 > 元素战技',
       artifacts='炽烈的炎之魔女 4件套', mainStats='时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击',
       summary='魔女会成员，火系法器站场主C，大范围火伤兼顾蒸发与融化，配水系辅助出伤最高。',
       weapons=[('四风原典', 5, '站场叠层元素伤，暴击率副属性缓解双暴压力'), ('流浪乐章', 4, '三类增益轮换，爆发期收益极高')],
       team=('艾莉丝蒸发队', '蒸发 · 火法站场',
             [('艾莉丝', '火'), ('芙宁娜', '水'), ('枫原万叶', '风'), ('班尼特', '火')],
             '班尼特 Q 加攻 → 万叶扩散减抗 → 芙宁娜挂水增伤 → 艾莉丝站场普攻与 Q 连续蒸发。')),
  dict(id=123, name='埃洛伊', element='冰', rarity=5, file='ailuoyi',
       role='主C · 冰弓', talents='普通攻击 > 元素战技 > 元素爆发',
       artifacts='冰风迷途的勇士 4件套', mainStats='时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击',
       summary='联动限定冰弓角色，E 冰弹附魔普攻并叠加线圈，融化 / 永冻皆可，绝版收藏向主C。',
       weapons=[('阿莫斯之弓', 5, '蓄力与普攻增伤，冰弓输出最优'), ('破魔之弓', 4, '锻造获取，满能量重击增伤')],
       team=('埃洛伊融化队', '融化 · 冰弓站场',
             [('埃洛伊', '冰'), ('班尼特', '火'), ('香菱', '火'), ('钟离', '岩')],
             '钟离开盾保站场 → 班尼特 Q 加攻 → 香菱 Q 后台挂火 → 埃洛伊 E 附魔普攻连续融化。')),
]

# ---------------------------------------------------------------------------
# 2) 七元素旅行者（7.0 至冬共鸣后七元素齐全）
# ---------------------------------------------------------------------------
TRAVELERS = [
  dict(id=124, name='旅行者·风', element='风', file='traveler-feng',
       role='副C · 聚怪扩散', talents='元素爆发 > 元素战技 > 普通攻击',
       artifacts='翠绿之影 4件套', mainStats='时之沙：攻击% / 空之杯：风伤% / 理之冠：暴击',
       summary='与风元素共鸣，Q 风涡卷聚怪扩散、E 风刃击退；翠绿之影 4 件套减抗，平民泛用副C。',
       weapons=[('苍古自由之誓', 5, '精通与全队增伤，扩散队最优'), ('铁蜂刺', 4, '锻造获取，精通副属性扩散收益稳定')],
       team=('风主扩散队', '扩散 · 双风聚怪',
             [('旅行者·风', '风'), ('枫原万叶', '风'), ('班尼特', '火'), ('香菱', '火')],
             '班尼特 Q 加攻 → 香菱 Q 挂火 → 万叶 E 聚怪扩散减抗 → 旅行者·风 Q 风涡卷持续扩散收尾。')),
  dict(id=125, name='旅行者·岩', element='岩', file='traveler-yan',
       role='副C · 岩造物', talents='元素战技 > 元素爆发 > 普通攻击',
       artifacts='华馆梦醒形骸记 4件套', mainStats='时之沙：防御% / 空之杯：岩伤% / 理之冠：暴击',
       summary='与岩元素共鸣，E 荒星造物挡伤并共鸣、Q 岩潮结界控场；双岩队稳定副C，养成成本低。',
       weapons=[('磐岩结绿', 5, '生命与暴击率兼顾，泛用五星单手剑'), ('西风剑', 4, '充能副属性，缓解全队循环压力')],
       team=('岩主结晶队', '双岩共鸣 · 结晶护盾',
             [('旅行者·岩', '岩'), ('钟离', '岩'), ('阿贝多', '岩'), ('班尼特', '火')],
             '钟离开盾减抗 → 班尼特 Q 加攻 → 阿贝多 E 后台岩伤 → 旅行者·岩 荒星与 Q 结晶补伤。')),
  dict(id=126, name='旅行者·雷', element='雷', file='traveler-lei',
       role='辅助 · 全队充能', talents='元素战技 > 元素爆发 > 普通攻击',
       artifacts='绝缘之旗印 4件套', mainStats='时之沙：充能% / 空之杯：雷伤% / 理之冠：暴击',
       summary='与雷元素共鸣，E 落雷勾玉为全队回能、Q 雷影斩后台挂雷；激化 / 超导队的充能功能位。',
       weapons=[('天空之刃', 5, '充能副属性，开大循环最顺'), ('西风剑', 4, '产球辅助，全队充能无忧')],
       team=('雷主激化队', '激化 · 充能辅助',
             [('旅行者·雷', '雷'), ('纳西妲', '草'), ('菲谢尔', '雷'), ('钟离', '岩')],
             '钟离开盾 → 纳西妲 E 全场挂草 → 旅行者·雷 E 勾玉回能 → 菲谢尔奥兹后台雷触发激化。')),
  dict(id=127, name='旅行者·草', element='草', file='traveler-cao',
       role='副C · 持续挂草', talents='元素爆发 > 元素战技 > 普通攻击',
       artifacts='深林的记忆 4件套', mainStats='时之沙：元素精通 / 空之杯：草伤% / 理之冠：元素精通',
       summary='与草元素共鸣，Q 草灯莲持续挂草，配合水 / 雷触发绽放与激化；深林 4 件套减草抗。',
       weapons=[('圣显之钥', 5, '生命转精通，绽放队辅助向'), ('西风剑', 4, '充能副属性，保证 Q 循环不断档')],
       team=('草主绽放队', '超绽放 · 双草挂草',
             [('旅行者·草', '草'), ('纳西妲', '草'), ('行秋', '水'), ('久岐忍', '雷')],
             '纳西妲 E 挂草 → 行秋 Q 挂水生成草原核 → 旅行者·草 Q 草灯莲续草 → 久岐忍 E 触发超绽放。')),
  dict(id=128, name='旅行者·水', element='水', file='traveler-shui',
       role='辅助 · 挂水治疗', talents='元素爆发 > 元素战技 > 普通攻击',
       artifacts='昔时之歌 4件套', mainStats='时之沙：生命% / 空之杯：水伤% / 理之冠：治疗加成',
       summary='与水元素共鸣，E 水球挂水、Q 潮汐领域持续治疗；蒸发 / 绽放队兼顾挂水与生存的功能位。',
       weapons=[('静水流涌之辉', 5, '生命副属性，战技伤害与治疗双收益'), ('祭礼剑', 4, '重置战技，挂水覆盖更稳')],
       team=('水主蒸发队', '蒸发 · 双水挂水',
             [('旅行者·水', '水'), ('胡桃', '火'), ('行秋', '水'), ('钟离', '岩')],
             '钟离开盾减抗 → 行秋 Q 挂水 → 旅行者·水 E+Q 持续挂水治疗 → 胡桃 E 后重击蒸发。')),
  dict(id=129, name='旅行者·火', element='火', file='traveler-huo',
       role='副C · 后台挂火', talents='元素爆发 > 元素战技 > 普通攻击',
       artifacts='炽烈的炎之魔女 4件套', mainStats='时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击',
       summary='与火元素共鸣，Q 火莲后台持续挂火，配合冰 / 水打融化与蒸发；纳塔火体系的功能副C。',
       weapons=[('雾切之回光', 5, '元素伤害加成与普攻增伤，火伤收益高'), ('铁蜂刺', 4, '锻造获取，精通副属性反应收益稳定')],
       team=('火主融化队', '融化 · 后台挂火',
             [('旅行者·火', '火'), ('甘雨', '冰'), ('班尼特', '火'), ('钟离', '岩')],
             '钟离开盾保站场 → 班尼特 Q 加攻 → 旅行者·火 Q 火莲后台挂火 → 甘雨蓄力霜华矢连续融化。')),
  dict(id=130, name='旅行者·冰', element='冰', file='traveler-bing',
       role='主C · 星烁反应', talents='元素爆发 > 元素战技 > 普通攻击',
       artifacts='穹境示现之夜 4件套', mainStats='时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击',
       summary='7.0 至冬七天神像共鸣解锁冰元素：配雷走站场「星超导」、配风走后台「星扩散」；主线赠送五星专武「星锋剑」。',
       weapons=[('星锋剑', 5, '7.0 主线赠送专武，攻击/双暴/充能全面加成，随神像解锁层数强化'), ('西风剑', 4, '充能副属性，速切循环更顺')],
       team=('冰主星烁队', '星超导 · 星扩散双路线',
             [('旅行者·冰', '冰'), ('米提亚', '雷'), ('奥黛塔', '冰'), ('枫原万叶', '风')],
             '米提亚 Q 铺极星辉域 → 万叶扩散触发星扩散清群 → 奥黛塔后台挂冰增伤 → 旅行者·冰 站场星超导收割。')),
]

ALL_CHARS = EXTRA_CHARS + TRAVELERS
for _c in ALL_CHARS:
    _c.setdefault('rarity', 5)   # 旅行者与 5 位补齐角色统一为五星

# ---------------------------------------------------------------------------
# 3) 新武器（7.x 版本专武，带 90 级白值与副词条提升）
# ---------------------------------------------------------------------------
NEW_WEAPONS = [
  dict(name='星锋剑', rarity=5, type='单手剑', stat='副属性：暴击率', atk1=46, atk90=608,
       subStat='暴击率', subValue='22.1%',
       desc='7.0 主线赠送的旅行者(冰)专武，攻击、双暴与充能全面加成，随至冬七天神像解锁层数强化。'),
  dict(name='秘星典谕', rarity=5, type='法器', stat='副属性：暴击伤害', atk1=44, atk90=542,
       subStat='暴击伤害', subValue='66.2%',
       desc='7.2 米提亚专武：施放战技提升精通，触发反应叠加「炬中法度」，星超导暴伤进一步提升。'),
  dict(name='白湖冬羽', rarity=5, type='单手剑', stat='副属性：暴击伤害', atk1=48, atk90=674,
       subStat='暴击伤害', subValue='44.1%',
       desc='7.0 奥黛塔专武，提升冰伤与星烁反应伤害，后台挂冰时依然生效。'),
  dict(name='蝶变', rarity=5, type='单手剑', stat='副属性：暴击率', atk1=46, atk90=608,
       subStat='暴击率', subValue='22.1%',
       desc='7.1 薇斯纳专武，触发星扩散后提升全队风伤与扩散伤害。'),
]

# ---------------------------------------------------------------------------
# JS 序列化辅助
# ---------------------------------------------------------------------------
def q(v):
    """JS 字符串字面量（双引号）"""
    return json.dumps(str(v), ensure_ascii=False)

def js_char(c):
    return "  {\n" + "\n".join([
        "    id: %d," % c['id'],
        "    name: %s," % q(c['name']),
        "    element: %s," % q(c['element']),
        "    rarity: %d," % c['rarity'],
        "    role: %s," % q(c['role']),
        "    talents: %s," % q(c['talents']),
        "    artifacts: %s," % q(c['artifacts']),
        "    mainStats: %s," % q(c['mainStats']),
        "    summary: %s" % q(c['summary']),
    ]) + "\n  },"

def js_rec(c):
    inner = "\n".join(
        "      { name: %s, rarity: %d, reason: %s }," % (q(n), r, q(reason))
        for n, r, reason in c['weapons']
    )
    return "  {\n    character: %s,\n    element: %s,\n    best: [\n%s\n    ]\n  }," % (
        q(c['name']), q(c['element']), inner)

def js_weapon(w):
    return "  {\n" + "\n".join([
        "    name: %s," % q(w['name']),
        "    rarity: %d," % w['rarity'],
        "    type: %s," % q(w['type']),
        "    stat: %s," % q(w['stat']),
        "    atk1: %d," % w['atk1'],
        "    atk90: %d," % w['atk90'],
        "    subStat: %s," % q(w['subStat']),
        "    subValue: %s," % q(w['subValue']),
        "    desc: %s," % q(w['desc']),
        "    users: []",
    ]) + "\n  },"

def js_team(t, idx):
    name, core, members, tip = t
    mem = "\n".join("      { name: %s, element: %s }," % (q(n), q(e)) for n, e in members)
    return "  {\n    name: %s,\n    core: %s,\n    members: [\n%s\n    ],\n    tip: %s\n  }%s" % (
        q(name), q(core), mem, q(tip), ',' if idx < 11 else ',')

# ---------------------------------------------------------------------------
# 4) 更新 homeData.js
# ---------------------------------------------------------------------------
def array_end(src, name):
    m = re.search(r'export const %s\s*=\s*\[' % name, src)
    if not m: raise RuntimeError('array not found: ' + name)
    i = m.end() - 1; depth = 0
    for j in range(i, len(src)):
        if src[j] == '[': depth += 1
        elif src[j] == ']':
            depth -= 1
            if depth == 0: return j
    raise RuntimeError('unterminated array: ' + name)

def insert_before_end(src, name, text, markers):
    """在数组结尾 ] 前插入；markers 全部已存在则跳过（幂等）"""
    j = array_end(src, name)
    body = src[:j]
    if markers and all(m in body for m in markers):
        print('  [skip] %s 已包含全部新条目' % name)
        return src
    return body + text + src[j:]

def main():
    p = os.path.join(DATA, 'homeData.js')
    src = io.open(p, encoding='utf-8').read().replace('\r\n', '\n')

    # 校验推荐武器是否已在图鉴中；缺失的自动补一条演示档位武器
    wsec = src[src.index('export const WEAPONS'):]
    known = set(re.findall(r"name:\s*'([^']+)'", wsec))
    missing = []
    for c in ALL_CHARS:
        for n, r, _ in c['weapons']:
            if n not in known and n not in [w['name'] for w in NEW_WEAPONS]:
                missing.append((c['name'], n, r))
    if missing:
        print('  [warn] 图鉴缺失武器，自动补演示条目:', missing)
        for _, n, r in missing:
            NEW_WEAPONS.append(dict(name=n, rarity=r, type='单手剑', stat='副属性：暴击率',
                                    atk1=46 if r == 5 else 41, atk90=608 if r == 5 else 510,
                                    subStat='暴击率', subValue='22.1%' if r == 5 else '15.2%',
                                    desc='养成推荐武器，数值为参考档位，可在后台修正。'))

    char_block = "\n".join(js_char(c) for c in ALL_CHARS) + "\n"
    rec_block = "\n".join(js_rec(c) for c in ALL_CHARS) + "\n"
    weapon_block = "\n".join(js_weapon(w) for w in NEW_WEAPONS) + "\n"
    team_block = "\n".join(js_team(c['team'], i) for i, c in enumerate(ALL_CHARS)) + "\n"

    src = insert_before_end(src, 'CHARACTERS', char_block,
                            ["name: '%s'" % c['name'] for c in ALL_CHARS])
    src = insert_before_end(src, 'CHAR_WEAPONS', rec_block,
                            ["character: '%s'" % c['name'] for c in ALL_CHARS])
    src = insert_before_end(src, 'WEAPONS', weapon_block,
                            ["name: '%s'" % w['name'] for w in NEW_WEAPONS])
    src = insert_before_end(src, 'TEAMS', team_block,
                            ["name: '%s'" % c['team'][0] for c in ALL_CHARS])
    io.open(p, 'w', encoding='utf-8', newline='\n').write(src)
    print('  [ok] homeData.js 已更新')

    # 5) manifest + imageMap
    mp = os.path.join(ROOT, 'gen_manifest.json')
    manifest = json.load(io.open(mp, encoding='utf-8'))
    by_name = {x['name']: x for x in manifest}
    for c in ALL_CHARS:
        by_name[c['name']] = dict(id=c['id'], name=c['name'], file=c['file'],
                                  element=c['element'], role=c['role'], rarity=c['rarity'])
    manifest = sorted(by_name.values(), key=lambda x: x['id'])
    io.open(mp, 'w', encoding='utf-8', newline='\n').write(
        json.dumps(manifest, ensure_ascii=False, indent=2) + '\n')
    print('  [ok] gen_manifest.json =', len(manifest), '条')

    # imageMap.js：直接按 manifest 重建（保留原圣遗物映射表）
    imp = os.path.join(DATA, 'imageMap.js')
    old = io.open(imp, encoding='utf-8').read()
    art_block = old[old.index('export const ARTIFACT_NAME_TO_FILE'):old.index('// 取角色立绘 URL')]
    L = [
        '// 自动生成：角色中文名 -> assets/chars 文件名 映射',
        '// 由 gen_new_chars.py / gen_image_map.py 生成，勿手工编辑',
        'const charFiles = import.meta.glob("../assets/chars/*.png", { eager: true, import: "default" })',
        'const artifactFiles = import.meta.glob("../assets/artifacts/*.png", { eager: true, import: "default" })',
        '', '// 中文名 -> 拼音文件名（不含扩展名）', 'export const CHAR_NAME_TO_FILE = {',
    ]
    for c in manifest:
        L.append("  '%s': '%s'," % (c['name'], c['file']))
    L.append('}')
    L.append('')
    io.open(imp, 'w', encoding='utf-8', newline='\n').write(
        '\n'.join(L) + '\n' + art_block + old[old.index('// 取角色立绘 URL'):])
    print('  [ok] imageMap.js 已重建')

    # 6) 头像
    gen_avatars()

    # 7) SQL
    write_sql(manifest)

def gen_avatars():
    try:
        from PIL import Image, ImageDraw, ImageFont
    except ImportError:
        print('  [skip] 未安装 Pillow，跳过头像生成')
        return
    os.makedirs(ASSETS, exist_ok=True)
    font_paths = [r'C:\Windows\Fonts\msyhbd.ttc', r'C:\Windows\Fonts\msyh.ttc',
                  r'C:\Windows\Fonts\simhei.ttf']
    fp = next((x for x in font_paths if os.path.exists(x)), None)
    def font(sz):
        return ImageFont.truetype(fp, sz) if fp else ImageFont.load_default()
    W = H = 320
    for c in ALL_CHARS:
        light, dark = ELEMENT_COLOR[c['element']]
        img = Image.new('RGBA', (W, H), (0, 0, 0, 0))
        d = ImageDraw.Draw(img)
        # 渐变底
        for y in range(H):
            t = y / H
            col = tuple(int(light[k] * (1 - t) + dark[k] * t) for k in range(3)) + (255,)
            d.line([(0, y), (W, y)], fill=col)
        # 暗角 + 金环
        d.ellipse([16, 16, W - 16, H - 16], outline=(240, 214, 150, 230), width=6)
        d.ellipse([28, 28, W - 28, H - 28], outline=(255, 255, 255, 70), width=2)
        # 中央元素字
        big = font(120)
        ch = c['element']
        bb = d.textbbox((0, 0), ch, font=big)
        d.text(((W - (bb[2] - bb[0])) / 2 - bb[0], 52), ch, font=big,
               fill=(255, 255, 255, 235))
        # 星级
        sf = font(24)
        stars = '★' * c['rarity']
        bb = d.textbbox((0, 0), stars, font=sf)
        d.text(((W - (bb[2] - bb[0])) / 2 - bb[0], 20), stars, font=sf, fill=(255, 226, 150, 255))
        # 名称条
        nf = font(30)
        name = c['name']
        bb = d.textbbox((0, 0), name, font=nf)
        tw = bb[2] - bb[0]
        d.rounded_rectangle([(W - tw - 44) / 2, 224, (W + tw + 44) / 2, 276],
                            radius=22, fill=(20, 26, 40, 205))
        d.text(((W - tw) / 2 - bb[0], 236), name, font=nf, fill=(255, 255, 255, 255))
        img.save(os.path.join(ASSETS, c['file'] + '.png'))
    print('  [ok] 生成头像', len(ALL_CHARS), '张')

def esc(s):
    return str(s).replace('\\', '\\\\').replace("'", "\\'")

def write_sql(manifest):
    L = []
    A = L.append
    A('-- 补齐 5 位角色 + 七元素旅行者：幂等迁移脚本（gen_new_chars.py 生成）')
    A('-- 执行：mysql -h 127.0.0.1 -P 3306 -uroot -p123456 genshin_db < new_chars_travelers.sql')
    A('SET NAMES utf8mb4;')
    names = [c['name'] for c in ALL_CHARS]
    wnames = [w['name'] for w in NEW_WEAPONS]
    tnames = [c['team'][0] for c in ALL_CHARS]
    A("DELETE FROM t_team_member WHERE team_id BETWEEN 38 AND 49;")
    A("DELETE FROM t_team WHERE id BETWEEN 38 AND 49;")
    A("DELETE FROM t_char_weapon WHERE character_name IN (%s);" % ','.join("'%s'" % esc(n) for n in names))
    A("DELETE FROM t_weapon WHERE name IN (%s);" % ','.join("'%s'" % esc(n) for n in wnames))
    A("DELETE FROM t_character WHERE name IN (%s);" % ','.join("'%s'" % esc(n) for n in names))
    A('')
    A('-- 角色养成攻略')
    for c in ALL_CHARS:
        A("INSERT INTO t_character (id,name,element,rarity,role_name,talents,artifacts,main_stats,summary,sort_order,status) VALUES "
          "(%d,'%s','%s',%d,'%s','%s','%s','%s','%s',%d,1);" % (
              c['id'], esc(c['name']), c['element'], c['rarity'], esc(c['role']),
              esc(c['talents']), esc(c['artifacts']), esc(c['mainStats']),
              esc(c['summary']), c['id']))
    A('')
    A('-- 新武器（含 90 级数值）')
    for i, w in enumerate(NEW_WEAPONS):
        A("INSERT INTO t_weapon (id,name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES "
          "(%d,'%s',%d,'%s','%s',%d,%d,'%s','%s','%s',%d,1);" % (
              204 + i, esc(w['name']), w['rarity'], esc(w['type']), esc(w['stat']),
              w['atk1'], w['atk90'], esc(w['subStat']), esc(w['subValue']),
              esc(w['desc']), 204 + i))
    A('')
    A('-- 角色武器推荐')
    cid = 254
    for c in ALL_CHARS:
        for k, (n, r, reason) in enumerate(c['weapons']):
            A("INSERT INTO t_char_weapon (id,character_name,element,weapon_name,rarity,reason,sort_order) VALUES "
              "(%d,'%s','%s','%s',%d,'%s',%d);" % (
                  cid, esc(c['name']), c['element'], esc(n), r, esc(reason), k + 1))
            cid += 1
    A('')
    A('-- 队伍与成员')
    mid = 157
    for i, c in enumerate(ALL_CHARS):
        tname, core, members, tip = c['team']
        tid = 38 + i
        A("INSERT INTO t_team (id,name,core,tip,sort_order,status) VALUES "
          "(%d,'%s','%s','%s',%d,1);" % (tid, esc(tname), esc(core), esc(tip), 37 + i))
        for k, (mn, me) in enumerate(members):
            A("INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES "
              "(%d,%d,'%s','%s',%d);" % (mid, tid, esc(mn), me, k))
            mid += 1
    A('')
    A('-- 汇总：角色 %d 位（原 118）、七元素旅行者 7 位、武器 %d 把、武器推荐 %d 条、队伍 %d 支、成员 %d 人次' %
      (len(ALL_CHARS), len(NEW_WEAPONS), cid - 254, len(ALL_CHARS), len(ALL_CHARS) * 4))
    out = os.path.join(SQLDIR, 'new_chars_travelers.sql')
    io.open(out, 'w', encoding='utf-8', newline='\n').write('\n'.join(L) + '\n')
    print('  [ok] SQL ->', out)

if __name__ == '__main__':
    main()

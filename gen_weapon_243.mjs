/**
 * 补齐「243 把三星及以上武器」+ 新圣遗物上角色/队伍推荐
 * ----------------------------------------------------------------------------
 * 产物：
 *   1) genshin-login-vue/src/data/homeData.js   全量重写（WEAPONS / CHAR_WEAPONS / CHARACTERS）
 *   2) chars.json / charweapons.json / weapons.json  （供 gen_materials.py 消费）
 *   3) springBootTest/sql/weapons_243.sql          增量迁移脚本（可重复执行）
 *
 * 重跑： node gen_weapon_243.mjs
 * 之后依次执行： python gen_materials.py && mysql < materials_data.sql && node gen_team_guides.mjs
 */
import fs from 'node:fs'

const ROOT = 'C:/Users/20285/IdeaProjects/xx/'
const DATA = ROOT + 'genshin-login-vue/src/data/'
const SQL_OUT = ROOT + 'springBootTest/sql/weapons_243.sql'

// ---------------------------------------------------------------- 载入现有数据
function load(file, names) {
  let src = fs.readFileSync(DATA + file, 'utf8')
    .replace(/^import\s+.*$/gm, '')
    .replace(/^export\s+/gm, '')
  const tail = '\nreturn {' + names.map(n => `${n}: typeof ${n} !== "undefined" ? ${n} : undefined`).join(',') + '};'
  return new Function(src + tail)()
}
const H = load('homeData.js', ['ELEMENT_NATION', 'CHARACTERS', 'CHAR_WEAPONS', 'WEAPONS', 'TEAMS'])
const A = load('artifactSets.js', ['ARTIFACT_SETS'])
const { ELEMENT_NATION, CHARACTERS, CHAR_WEAPONS, WEAPONS, TEAMS } = H
const ART_NAMES = new Set(A.ARTIFACT_SETS.map(a => a.name))

// ---------------------------------------------------------------- 90 级数值档位
// 口径与 gen_weapon_90_stats.py 完全一致（原神官方武器成长规律表）
const TIERS = {
  5: [
    [44, 542, { 攻击力: '66.2%', 生命值: '66.2%', 防御力: '82.7%', 物理伤害加成: '82.7%', 元素充能效率: '73.5%', 元素精通: '265', 暴击率: '44.1%', 暴击伤害: '88.2%' }],
    [46, 608, { 攻击力: '49.6%', 生命值: '49.6%', 防御力: '62.0%', 物理伤害加成: '62.0%', 元素充能效率: '55.1%', 元素精通: '198', 暴击率: '33.1%', 暴击伤害: '66.2%' }],
    [48, 674, { 攻击力: '33.1%', 生命值: '33.1%', 防御力: '41.3%', 物理伤害加成: '41.3%', 元素充能效率: '36.8%', 元素精通: '132', 暴击率: '22.1%', 暴击伤害: '44.1%' }],
    [49, 741, { 攻击力: '16.5%', 生命值: '16.5%', 防御力: '20.7%', 物理伤害加成: '20.7%', 元素充能效率: '18.4%', 元素精通: '66', 暴击率: '11.0%', 暴击伤害: '22.1%' }],
  ],
  4: [
    [41, 454, { 攻击力: '55.1%', 生命值: '55.1%', 防御力: '69.0%', 物理伤害加成: '69.0%', 元素充能效率: '61.3%', 元素精通: '221', 暴击率: '36.8%', 暴击伤害: '73.5%' }],
    [42, 510, { 攻击力: '41.3%', 生命值: '41.3%', 防御力: '51.7%', 物理伤害加成: '51.7%', 元素充能效率: '45.9%', 元素精通: '165', 暴击率: '27.6%', 暴击伤害: '55.1%' }],
    [44, 565, { 攻击力: '27.6%', 生命值: '27.6%', 防御力: '34.5%', 物理伤害加成: '34.5%', 元素充能效率: '30.6%', 元素精通: '110', 暴击率: '18.4%', 暴击伤害: '36.8%' }],
    [45, 620, { 攻击力: '13.8%', 生命值: '13.8%', 防御力: '17.2%', 物理伤害加成: '17.2%', 元素充能效率: '15.3%', 元素精通: '55', 暴击率: '9.2%', 暴击伤害: '18.4%' }],
  ],
  3: [
    [38, 354, { 攻击力: '46.9%', 生命值: '46.9%', 防御力: '58.6%', 物理伤害加成: '58.6%', 元素充能效率: '52.1%', 元素精通: '187', 暴击率: '31.2%', 暴击伤害: '62.4%' }],
    [39, 401, { 攻击力: '35.2%', 生命值: '35.2%', 防御力: '43.9%', 物理伤害加成: '43.9%', 元素充能效率: '39.0%', 元素精通: '141', 暴击率: '23.4%', 暴击伤害: '46.9%' }],
    [40, 448, { 攻击力: '23.5%', 生命值: '23.5%', 防御力: '29.3%', 物理伤害加成: '29.3%', 元素充能效率: '26.0%', 元素精通: '94', 暴击率: '15.6%', 暴击伤害: '31.2%' }],
  ],
}
const DEFAULT_TIER = {
  5: { 暴击率: 2, 暴击伤害: 2, 攻击力: 1, 元素充能效率: 1, 元素精通: 1, 生命值: 1, 防御力: 0, 物理伤害加成: 3 },
  4: { 暴击率: 1, 暴击伤害: 1, 攻击力: 1, 元素充能效率: 2, 元素精通: 1, 生命值: 0, 防御力: 1, 物理伤害加成: 2 },
  3: { 暴击率: 1, 暴击伤害: 1, 攻击力: 1, 元素充能效率: 1, 元素精通: 1, 生命值: 1, 防御力: 1, 物理伤害加成: 1 },
}

// ---------------------------------------------------------------- 新增 39 把武器
// sub=副词条名称, users=适配角色（脚本会校验类型）, desc=武器被动
// 其中 12 把为此前遗漏的已实装武器，其余为与项目 7.x 版本设定配套的新增武器。
const NEW = [
  // ---- 已实装但此前遗漏（12） ----
  { name: '鹤鸣余音', r: 5, t: '法器', sub: '攻击力', users: ['闲云', '梦见月瑞希', '砂糖'], desc: '施放元素战技后全队下落攻击伤害提升，并回复元素能量，风系下落队核心辅助武器。' },
  { name: '柔灯挽歌', r: 5, t: '长柄武器', sub: '暴击伤害', users: ['艾梅莉埃', '香菱', '托马'], desc: '触发燃烧相关反应后提升攻击力与元素伤害，草火体系后台副C适用。' },
  { name: '山王长牙', r: 5, t: '双手剑', sub: '暴击伤害', users: ['基尼奇', '荒泷一斗', '迪卢克'], desc: '元素战技命中后叠层提升暴击伤害与攻击力，夜魂/燃烧主C适用。' },
  { name: '星鹫赤羽', r: 5, t: '弓', sub: '暴击伤害', users: ['恰斯卡', '甘雨', '菲谢尔'], desc: '队伍中存在多种元素时提升重击与元素战技伤害，多元素队主C适用。' },
  { name: '祭星者之望', r: 5, t: '法器', sub: '元素精通', users: ['茜特菈莉', '纳西妲', '白术'], desc: '施放元素爆发后全队元素精通提升，护盾辅助与反应队核心武器。' },
  { name: '寝正月初晴', r: 5, t: '法器', sub: '暴击伤害', users: ['梦见月瑞希', '八重神子', '烟绯'], desc: '触发扩散反应后提升全队对应元素伤害，风系扩散副C适用。' },
  { name: '香韵奏者', r: 5, t: '长柄武器', sub: '攻击力', users: ['爱可菲', '申鹤', '雷电将军'], desc: '队伍中冰/水角色触发冻结后提升全队攻击力，冰队增伤辅助武器。' },
  { name: '苍耀', r: 5, t: '单手剑', sub: '暴击伤害', users: ['丝柯克', '神里绫华', '刻晴'], desc: '不依赖元素能量的站场冰C专武，元素战技后大幅提升普攻与爆发伤害。' },
  { name: '支离轮光', r: 5, t: '长柄武器', sub: '暴击率', users: ['伊涅芙', '赛诺', '魈'], desc: '触发月感电/感电反应后提升攻击力与暴击伤害，雷水体系适用。' },
  { name: '真语秘匣', r: 5, t: '法器', sub: '暴击率', users: ['奈芙尔', '流浪者', '可莉'], desc: '触发月绽放后提升元素精通与暴击伤害，绽放站场主C适用。' },
  { name: '裁断', r: 5, t: '长柄武器', sub: '暴击伤害', users: ['赛诺', '雷电将军', '香菱'], desc: '元素爆发期间提升攻击力与暴击伤害，长轴站场输出适用。' },
  { name: '无垠蔚蓝之歌', r: 4, t: '法器', sub: '元素充能效率', users: ['莫娜', '芭芭拉', '砂糖'], desc: '活动限定法器，施放元素爆发后提升全队元素伤害与充能循环。' },

  // ---- 版本新武器（27）：与项目 7.x 版本设定配套，命名风格与既有武器一致 ----
  { name: '晨曦之誓', r: 5, t: '单手剑', sub: '暴击率', users: ['刻晴', '艾尔海森', '旅行者·雷'], desc: '触发激化/超激化后叠加暴击率与元素伤害，雷草站场主C适用。' },
  { name: '霜庭之刃', r: 5, t: '单手剑', sub: '暴击伤害', users: ['神里绫华', '凯亚', '莱欧斯利'], desc: '攻击冻结或受冰影响的敌人时提升暴击伤害，永冻冰C专武。' },
  { name: '星语短剑', r: 4, t: '单手剑', sub: '元素充能效率', users: ['行秋', '班尼特', '琳妮特'], desc: '施放元素战技后为全队回复元素能量，脱手挂元素辅助适用。' },
  { name: '烬城之钥', r: 5, t: '单手剑', sub: '攻击力', users: ['法尔伽', '琴', '旅行者·风'], desc: '双持站场时提升攻击速度与攻击力，纳塔体系近战主C适用。' },
  { name: '月桂的证言', r: 4, t: '单手剑', sub: '元素精通', users: ['枫原万叶', '琳妮特', '久岐忍'], desc: '触发扩散/激化后提升全队元素精通，精通型辅助适用。' },
  { name: '碎星之骸', r: 5, t: '双手剑', sub: '暴击伤害', users: ['荒泷一斗', '优菈', '诺艾尔'], desc: '基于防御力或生命上限提升重击伤害，防御型站场C适用。' },
  { name: '赤焰王座', r: 5, t: '双手剑', sub: '攻击力', users: ['玛薇卡', '迪卢克', '嘉明'], desc: '消耗夜魂值/战意后大幅提升攻击力与火伤，火神体系主C适用。' },
  { name: '霜噬巨刃', r: 4, t: '双手剑', sub: '物理伤害加成', users: ['优菈', '雷泽', '辛焱'], desc: '触发超导后提升物理伤害与攻击速度，物理重击队适用。' },
  { name: '烬城重锤', r: 4, t: '双手剑', sub: '元素充能效率', users: ['北斗', '重云', '早柚'], desc: '施放元素爆发后提升全队攻击力，脱手爆发副C适用。' },
  { name: '星陨巨剑', r: 5, t: '双手剑', sub: '暴击率', users: ['迪卢克', '基尼奇', '法尔伽'], desc: '元素战技命中后叠加暴击率，三段战技与蓄力输出适用。' },
  { name: '苍穹之楔', r: 5, t: '长柄武器', sub: '暴击伤害', users: ['魈', '赛诺', '旅行者·岩'], desc: '下落攻击与元素爆发伤害提升，长轴站场长柄主C适用。' },
  { name: '幽夜的裁决', r: 5, t: '长柄武器', sub: '暴击率', users: ['赛诺', '雷电将军', '托马'], desc: '元素爆发期间持续提升暴击率与攻击力，长轴激化主C适用。' },
  { name: '星陨之枪', r: 4, t: '长柄武器', sub: '元素充能效率', users: ['香菱', '雷电将军', '云堇'], desc: '元素爆发命中后为全队回复元素能量，脱手循环辅助适用。' },
  { name: '月轮之誓', r: 4, t: '长柄武器', sub: '元素精通', users: ['托马', '菈乌玛', '瑶瑶'], desc: '触发绽放/燃烧后提升元素精通，草火反应辅助适用。' },
  { name: '霜华之矛', r: 5, t: '长柄武器', sub: '攻击力', users: ['申鹤', '爱可菲', '罗莎莉亚'], desc: '基于攻击力为全队提供冰伤加成，冰系增伤辅助适用。' },
  { name: '星轨秘录', r: 5, t: '法器', sub: '暴击伤害', users: ['纳西妲', '八重神子', '烟绯'], desc: '触发元素反应后叠加暴击伤害与元素精通，反应型法器主C适用。' },
  { name: '月辉之书', r: 5, t: '法器', sub: '元素精通', users: ['纳西妲', '菈乌玛', '丽莎'], desc: '触发月绽放/激化后提升全队元素精通，草系核心辅助适用。' },
  { name: '霜华咏叹', r: 4, t: '法器', sub: '攻击力', users: ['烟绯', '可莉', '凝光'], desc: '重击命中后叠加攻击力，重击站场法器主C适用。' },
  { name: '烬城秘典', r: 4, t: '法器', sub: '元素充能效率', users: ['莫娜', '砂糖', '白术'], desc: '施放元素爆发后提升全队元素伤害，增伤辅助适用。' },
  { name: '晨星绪论', r: 5, t: '法器', sub: '暴击率', users: ['流浪者', '鹿野院平藏', '可莉'], desc: '站场期间持续叠加暴击率与普攻伤害，法器站场主C适用。' },
  { name: '逐星之矢', r: 5, t: '弓', sub: '暴击伤害', users: ['甘雨', '夜兰', '提纳里'], desc: '重击与蓄力箭命中后叠加暴击伤害，蓄力弓主C适用。' },
  { name: '霜羽长弓', r: 5, t: '弓', sub: '攻击力', users: ['埃洛伊', '菲谢尔', '迪奥娜'], desc: '攻击受冰影响敌人时提升攻击力与暴击率，冰系弓C适用。' },
  { name: '烬城猎弓', r: 4, t: '弓', sub: '元素精通', users: ['温迪', '柯莱', '珐露珊'], desc: '触发扩散后提升全队元素精通与元素伤害，风系聚怪辅助适用。' },
  { name: '幽夜回响', r: 4, t: '弓', sub: '元素充能效率', users: ['五郎', '迪奥娜', '夜兰'], desc: '施放元素爆发后为全队回复能量，后台挂元素辅助适用。' },
  { name: '星海之笺', r: 5, t: '弓', sub: '暴击率', users: ['达达利亚', '恰斯卡', '宵宫'], desc: '普攻与断流命中后叠加暴击率，高频站场弓C适用。' },
  { name: '月影之弦', r: 4, t: '弓', sub: '物理伤害加成', users: ['菲谢尔', '埃洛伊', '安柏'], desc: '重击与蓄力箭提升物理伤害，物理弓过渡输出适用。' },
  { name: '星穹之弦', r: 5, t: '弓', sub: '元素充能效率', users: ['温迪', '夜兰', '五郎'], desc: '施放元素爆发后为全队回复能量并提升后台伤害，充能辅助弓适用。' },
]

// ---------------------------------------------------------------- 角色武器类型池
const ALIAS = { '狼末': '狼的末路', '西风弓': '西风猎弓' }
const wByName = new Map(WEAPONS.map(w => [w.name, w]))
const charType = new Map()
for (const cw of CHAR_WEAPONS) {
  const b = cw.best && cw.best[0]
  if (!b) continue
  const w = wByName.get(ALIAS[b.name] || b.name)
  if (w) charType.set(cw.character, w.type)
}
const charNames = new Set(CHARACTERS.map(c => c.name))
const typePool = {}
for (const [name, t] of charType) (typePool[t] ||= []).push(name)

// ---------------------------------------------------------------- 1. 清理重名 + 生成武器
// 「峡湾长歌」被误加了一份长柄版本（真实为弓），删掉重复项，保证 243 把全部唯一
const before = WEAPONS.length
for (let i = WEAPONS.length - 1; i >= 0; i--) {
  if (WEAPONS[i].name === '峡湾长歌' && WEAPONS[i].type === '长柄武器') WEAPONS.splice(i, 1)
}
console.log('去重复名:', before, '->', WEAPONS.length)

const existing = new Set(WEAPONS.map(w => w.name))
const added = []
for (const n of NEW) {
  const tier = TIERS[n.r][DEFAULT_TIER[n.r][n.sub] ?? 1]
  const [atk1, atk90, vals] = tier
  const w = {
    name: n.name,
    rarity: n.r,
    type: n.t,
    stat: '副属性：' + n.sub,
    atk1,
    atk90,
    subStat: n.sub,
    subValue: vals[n.sub] || '',
    desc: n.desc,
    users: [],
  }
  // 幂等：已存在则原地更新，不存在才追加；无论哪种都进入 added 以便生成完整 SQL
  let idx = WEAPONS.findIndex(x => x.name === n.name)
  if (idx < 0) {
    WEAPONS.push(w)
    idx = WEAPONS.length - 1
    existing.add(n.name)
  } else {
    WEAPONS[idx] = Object.assign({}, WEAPONS[idx], w)
  }
  added.push({ w: WEAPONS[idx], src: n })
}
console.log('新增/同步武器:', added.length, '| WEAPONS 总数:', WEAPONS.length)

// ---------------------------------------------------------------- 2. 适配角色 users（全量 243 把）
// 每把武器至少 3 个适配角色：来自角色武器推荐 + 同类型角色补足
const recByWeapon = new Map()
for (const cw of CHAR_WEAPONS) for (const b of cw.best) {
  const k = ALIAS[b.name] || b.name
  if (!recByWeapon.has(k)) recByWeapon.set(k, [])
  recByWeapon.get(k).push(cw.character)
}
function fillUsers(w, prefer = []) {
  const out = []
  const push = x => { if (x && charNames.has(x) && charType.get(x) === w.type && !out.includes(x)) out.push(x) }
  for (const p of prefer) push(p)
  for (const p of recByWeapon.get(w.name) || []) push(p)
  const pool = typePool[w.type] || []
  for (let i = 0; i < pool.length && out.length < 4; i++) push(pool[i])
  return out.slice(0, 4)
}
for (const w of WEAPONS) {
  const prefer = added.find(a => a.w.name === w.name)?.src.users || []
  w.users = fillUsers(w, prefer)
}

// ---------------------------------------------------------------- 3. 新武器进角色武器推荐
const byChar = new Map(CHAR_WEAPONS.map(c => [c.character, c]))
const addCount = new Map()
const newRecRows = []   // { character, element, weapon, rarity, reason, sort }
for (const { w, src } of added) {
  const candidates = src.users.filter(u => charNames.has(u) && charType.get(u) === w.type)
  let placed = 0
  for (const u of candidates) {
    const cw = byChar.get(u)
    if (!cw) continue
    // 已存在（重跑场景）：不再追加，但仍记录一行供 SQL 的 INSERT IGNORE 使用
    const hit = cw.best.find(b => (ALIAS[b.name] || b.name) === w.name)
    if (hit) {
      newRecRows.push({ character: u, element: cw.element, weapon: w.name, rarity: hit.rarity, reason: hit.reason, sort: 10 + placed })
      placed++
      if (placed >= 3) break
      continue
    }
    const n = addCount.get(u) || 0
    if (n >= 2 && placed > 0) continue          // 每角色最多 2 条新推荐（除非该武器还无人推荐）
    const reason = w.rarity === 5
      ? `新增五星 · ${w.subStat}副词条，${src.desc.slice(0, 16)}…`
      : `新增${w.rarity}星 · ${w.subStat}副词条，可作过渡替代`
    cw.best.push({ name: w.name, rarity: w.rarity, reason })
    addCount.set(u, n + 1)
    newRecRows.push({ character: u, element: cw.element, weapon: w.name, rarity: w.rarity, reason, sort: 10 + n })
    placed++
    if (placed >= 3) break
  }
  // 兜底：该武器必须至少被一位角色推荐
  if (placed === 0) {
    const pool = typePool[w.type] || []
    const u = pool[0]
    const cw = byChar.get(u)
    if (cw) {
      const hit = cw.best.find(b => (ALIAS[b.name] || b.name) === w.name)
      if (!hit) {
        const reason = `新增${w.rarity}星 · ${w.subStat}副词条，可作为备选`
        cw.best.push({ name: w.name, rarity: w.rarity, reason })
        newRecRows.push({ character: u, element: cw.element, weapon: w.name, rarity: w.rarity, reason, sort: 12 })
      }
    }
  }
}
// 队伍覆盖补齐：确保 39 把新武器每一把都至少被一位「队伍成员」推荐，
// 这样队伍详情页（TEAM_GUIDES）里 39 把全部可见，而不只是留在角色库里。
const teamMembers = new Set()
for (const t of TEAMS) for (const m of t.members) teamMembers.add(m.name)
const EXTRA_TEAM_RECS = [
  { weapon: '鹤鸣余音', character: '纳西妲' },
  { weapon: '无垠蔚蓝之歌', character: '白术' },
  { weapon: '烬城重锤', character: '迪卢克' },
  { weapon: '月轮之誓', character: '香菱' },
]
for (const e of EXTRA_TEAM_RECS) {
  const cw = byChar.get(e.character)
  const w = WEAPONS.find(x => x.name === e.weapon)
  if (!cw || !w || !teamMembers.has(e.character)) continue
  if (cw.best.some(b => (ALIAS[b.name] || b.name) === e.weapon)) continue
  const reason = `新增${w.rarity}星 · ${w.subStat}副词条，队伍体系备选`
  cw.best.push({ name: e.weapon, rarity: w.rarity, reason })
}
// 校验：每把新武器至少一位队伍成员
const noTeamCoverage = added.filter(({ w }) =>
  !CHAR_WEAPONS.some(cw => teamMembers.has(cw.character) && cw.best.some(b => (ALIAS[b.name] || b.name) === w.name))
).map(a => a.w.name)
console.log('新武器中未被任何队伍成员推荐的:', noTeamCoverage.length, noTeamCoverage)

console.log('新增角色武器推荐:', newRecRows.length, '| 涉及角色:', addCount.size, '| 推荐总数:', CHAR_WEAPONS.reduce((s, c) => s + c.best.length, 0))
const missingRec = added.filter(a => !newRecRows.some(r => r.weapon === a.w.name))
console.log('未被任何角色推荐的新武器:', missingRec.length, missingRec.map(a => a.w.name))

// ---------------------------------------------------------------- 4. 圣遗物：修正失效旧名 + 分配新套装
const ART_FIX = {
  // 失效旧名订正（这些名字已不在圣遗物图鉴中）
  '阿蕾奇诺': '谐律异想断章 4件套',
  '克洛琳德': '谐律异想断章 4件套',
  '妮露': '花海甘露之光 4件套',
  '娜维娅': '回声之林夜话 4件套',
  '神里绫人': '来歆余响 4件套',
  '珊瑚宫心海': '海染砗磲 4件套',
  '久岐忍': '乐园遗落之花 4件套',
  '玛拉妮': '黑曜秘典 4件套',
  '五郎': '悠古的磐岩 4件套',
  // 需求 G 新补 / 改名的 11 套
  '爱可菲': '晨星与月的晓歌 4件套',
  '爱诺': '晨星与月的晓歌 4件套',
  '桑多涅': '晨星与月的晓歌 4件套',
  '洛恩': '风起之日 4件套',
  '沃雅妮莎': '风起之日 4件套',
  '艾莉丝': '风起之日 4件套',
  '优菈': '染血的骑士道 4件套',
  '雷泽': '染血的骑士道 4件套',
  '菲米尼': '染血的骑士道 4件套',
  '迪希雅': '渡过烈火的贤人 4件套',
  '托马': '渡过烈火的贤人 4件套',
  '安柏': '渡过烈火的贤人 4件套',
  '艾梅莉埃': '未竟的遐思 4件套',
  '基尼奇': '未竟的遐思 4件套',
  '杜林': '未竟的遐思 4件套',
  '魈': '长夜之誓 4件套',
  '嘉明': '长夜之誓 4件套',
  '闲云': '长夜之誓 4件套',
  '丝柯克': '深廊终曲 4件套',
  '班尼特': '天之美赐 4件套',
  '夏沃蕾': '天之美赐 4件套',
  '伊安珊': '天之美赐 4件套',
  '奥黛塔': '影中沉凝的幻灭 4件套',
  '罗莎莉亚': '影中沉凝的幻灭 4件套',
  '薇斯纳': '血红之证 4件套',
  '米提亚': '血红之证 4件套',
  '旅行者·冰': '炉火融炼之心 4件套',
  '瓦列里': '炉火融炼之心 4件套',
  '哥伦比娅': '炉火融炼之心 4件套',
}
let artChanged = 0
for (const c of CHARACTERS) {
  if (ART_FIX[c.name] && ART_FIX[c.name] !== c.artifacts) {
    c.artifacts = ART_FIX[c.name]
    artChanged++
  }
}
console.log('圣遗物推荐更新角色数:', artChanged)
// 校验：所有角色引用的套装名都能在图鉴命中
const unresolved = CHARACTERS.filter(c => {
  const s = (c.artifacts || '').replace(/\s*\d\s*件套.*$/, '').trim()
  return s && !ART_NAMES.has(s)
}).map(c => `${c.name}:${c.artifacts}`)
console.log('仍未匹配到图鉴的角色:', unresolved.length, unresolved.slice(0, 10))

// ---------------------------------------------------------------- 5. 重写 homeData.js
const q = o => JSON.stringify(o, null, 2)
const header = `// ============================================================
// 首页数据：角色养成攻略 / 角色武器推荐 / 武器养成攻略 / 角色队伍推荐
// 覆盖原神全量已实装角色（7 元素，五星+四星）与 243 把三星及以上武器
// 由 gen_weapon_243.mjs 生成，勿手工逐条改动
// ============================================================

`
fs.writeFileSync(DATA + 'homeData.js', header
  + 'export const ELEMENT_NATION = ' + q(ELEMENT_NATION) + '\n\n'
  + 'export const CHARACTERS = ' + q(CHARACTERS) + '\n\n'
  + 'export const CHAR_WEAPONS = ' + q(CHAR_WEAPONS) + '\n\n'
  + 'export const WEAPONS = ' + q(WEAPONS) + '\n\n'
  + 'export const TEAMS = ' + q(TEAMS) + '\n', 'utf8')
console.log('已重写 homeData.js', fs.statSync(DATA + 'homeData.js').size, 'bytes')

// ---------------------------------------------------------------- 6. 导出 JSON（供 gen_materials.py）
const wrap = d => JSON.stringify({ code: 200, message: 'success', data: d }, null, 2)
fs.writeFileSync(ROOT + 'chars.json', wrap(CHARACTERS), 'utf8')
fs.writeFileSync(ROOT + 'charweapons.json', wrap(CHAR_WEAPONS), 'utf8')
fs.writeFileSync(ROOT + 'weapons.json', wrap(WEAPONS), 'utf8')
console.log('已导出 chars.json / charweapons.json / weapons.json')

// ---------------------------------------------------------------- 7. 生成增量 SQL
const esc = v => String(v == null ? '' : v).replace(/\\/g, '\\\\').replace(/'/g, "''")
const L = []
L.push('-- =============================================================')
L.push('-- 补齐 243 把三星及以上武器 + 角色/队伍武器推荐 + 新圣遗物上角色推荐')
L.push('-- 由 gen_weapon_243.mjs 生成，可重复执行（ON DUPLICATE KEY / INSERT IGNORE）')
L.push('-- =============================================================')
L.push('USE genshin_db;')
L.push('')
L.push('-- ---------- 1. 新增武器图鉴（含 1/90 级白值、副词条、被动） ----------')
for (let i = 0; i < added.length; i++) {
  const w = added[i].w
  L.push(`INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES`)
  L.push(`  ('${esc(w.name)}',${w.rarity},'${esc(w.type)}','${esc(w.stat)}',${w.atk1},${w.atk90},'${esc(w.subStat)}','${esc(w.subValue)}','${esc(w.desc)}',${900 + i},1)`)
  L.push(`  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;`)
}
L.push('')
L.push('-- ---------- 2. 角色武器推荐：全量同步，保证后端接口与前端兜底完全一致 ----------')
// 先清掉前端已不存在的历史行（别名/脏数据），再全量 upsert
const pairs = CHAR_WEAPONS.flatMap(cw => cw.best.map(b => `('${esc(cw.character)}','${esc(b.name)}')`))
L.push(`DELETE FROM t_char_weapon WHERE (character_name, weapon_name) NOT IN (\n  ${pairs.join(',\n  ')}\n);`)
for (const cw of CHAR_WEAPONS) {
  cw.best.forEach((b, i) => {
    L.push(`INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES`)
    L.push(`  ('${esc(cw.character)}','${esc(cw.element)}','${esc(b.name)}',${b.rarity},'${esc(b.reason)}',${i})`)
    L.push(`  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);`)
  })
}
L.push('')
L.push('-- ---------- 3. 武器适配角色（全量 243 把，卡片不再空白） ----------')
for (const w of WEAPONS) {
  for (let i = 0; i < w.users.length; i++) {
    L.push(`INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('${esc(w.name)}','${esc(w.users[i])}',${i}) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);`)
  }
}
L.push('')
L.push('-- ---------- 4. 角色圣遗物推荐订正 / 新套装分配 ----------')
for (const c of CHARACTERS) {
  if (!ART_FIX[c.name]) continue
  L.push(`UPDATE t_character SET artifacts='${esc(c.artifacts)}' WHERE name='${esc(c.name)}';`)
}
L.push('')
fs.writeFileSync(SQL_OUT, L.join('\n'), 'utf8')
console.log('已生成 SQL:', SQL_OUT, fs.statSync(SQL_OUT).size, 'bytes', '| 行数', L.length)
console.log('\n=== 汇总 ===')
console.log('武器总数:', WEAPONS.length, '| 星级分布', WEAPONS.reduce((m, w) => (m[w.rarity] = (m[w.rarity] || 0) + 1, m), {}))
console.log('角色:', CHARACTERS.length, '| 武器推荐:', CHAR_WEAPONS.reduce((s, c) => s + c.best.length, 0), '| 队伍:', TEAMS.length)

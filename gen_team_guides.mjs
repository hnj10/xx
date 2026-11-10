/**
 * 队伍详情页数据生成器
 * ----------------------------------------------------------------------------
 * 从 homeData.js（角色 / 武器推荐 / 武器图鉴 / 队伍）与 artifactSets.js（圣遗物）
 * 聚合出「每套队伍 × 每位成员」的养成攻略与面板推荐，产出 src/data/teamGuides.js。
 *
 * 差异化重点：不是把角色通用资料复制四份，而是结合
 *   队伍反应类型、元素共鸣、输出循环、成员在队内的位置
 * 给出「在该队伍时」的定位、职责、手法、面板目标与专属要点。
 *
 * 重跑：node gen_team_guides.mjs
 */
import fs from 'node:fs'

const ROOT = 'C:/Users/20285/IdeaProjects/xx/genshin-login-vue/src/data/'
const OUT = ROOT + 'teamGuides.js'

function load(file, names) {
  let src = fs.readFileSync(ROOT + file, 'utf8')
    .replace(/^import\s+.*$/gm, '')
    .replace(/^export\s+/gm, '')
  const tail = '\nreturn {' + names.map(n => `${n}: typeof ${n} !== "undefined" ? ${n} : undefined`).join(',') + '};'
  return new Function(src + tail)()
}

const H = load('homeData.js', ['CHARACTERS', 'CHAR_WEAPONS', 'WEAPONS', 'TEAMS'])
const A = load('artifactSets.js', ['ARTIFACT_SETS'])

const chars = new Map(H.CHARACTERS.map(c => [c.name, c]))
const recs = new Map(H.CHAR_WEAPONS.map(p => [p.character, p]))
const weapons = new Map(H.WEAPONS.map(w => [w.name, w]))
const arts = A.ARTIFACT_SETS || []
const ALIAS = { '狼末': '狼的末路', '西风弓': '西风猎弓' }

// ---------------------------------------------------------------------------
// 队伍反应类型 / 共鸣
// ---------------------------------------------------------------------------
function detectReaction(t) {
  const parts = [t.name || '', t.core || '', t.tip || '']
  const rules = [
    ['月绽放', /月绽放/], ['月感电', /月感电/], ['月结晶', /月结晶/],
    ['星超导', /星超导/], ['星扩散', /星扩散/],
    ['激化', /激化/], ['燃烧', /燃烧/], ['绽放', /绽放/],
    ['永冻', /永冻|冻结/], ['蒸发', /蒸发/], ['融化', /融化/],
    ['纯色', /纯火|纯水|纯色/], ['结晶', /结晶/], ['物理', /物理/],
    ['扩散', /扩散/], ['多元素', /多元素/], ['混伤', /混伤/],
    ['下落', /下落/], ['爆发', /爆发|一刀|核弹|收割/],
    ['直伤', /站场.*伤|风伤|冰伤|雷伤|水伤|岩伤|火伤|生命契约|高机动/],
  ]
  for (const scope of parts) {
    for (const [label, re] of rules) if (re.test(scope)) return label
  }
  return '常规'
}

const RESONANCE = {
  '火': '双火共鸣 · 攻击力提升，队内攻击加成收益更高',
  '水': '双水共鸣 · 提升生命与充能，缓解循环压力',
  '雷': '双雷共鸣 · 触发雷系反应额外产球，充能更宽裕',
  '冰': '双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤',
  '风': '双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺',
  '岩': '双岩共鸣 · 护盾强效与岩伤提升，站场更稳',
  '草': '双草共鸣 · 元素精通提升，激化/绽放收益进一步放大',
}
function resonanceOf(t) {
  const count = {}
  for (const m of t.members || []) count[m.element] = (count[m.element] || 0) + 1
  const dup = Object.entries(count).filter(([, n]) => n >= 2).map(([e]) => e)
  if (!dup.length) return '四元素混编 · 无元素共鸣，充能与附着顺序需自行规划'
  return dup.map(e => RESONANCE[e] || `${e}元素共鸣`).join('；')
}

const REACTION_COLOR = {
  '蒸发': '#ff8a5b', '融化': '#ff6f91', '激化': '#8fd14f', '燃烧': '#ff9a3c',
  '绽放': '#7bd88f', '月绽放': '#9be36a', '月感电': '#a78bfa', '月结晶': '#e3b873',
  '永冻': '#7fd3f5', '纯色': '#6fb8f0', '结晶': '#e0c078', '物理': '#cbd5e1',
  '扩散': '#7fe3c0', '多元素': '#c9a7f5', '混伤': '#f3a06a',
  '星超导': '#b39bff', '星扩散': '#8fe0d8',
  '下落': '#9ec5f0', '爆发': '#ff7a59', '直伤': '#7fb2e8', '常规': '#6fd6c0',
}

// ---------------------------------------------------------------------------
// 输出循环：把 tip 拆成步骤并标注归属角色
// ---------------------------------------------------------------------------
// tip 里大量使用简称/群体词/体系缩写，这里统一还原成具体成员
const NAME_ALIAS = {
  '枫原万叶': ['万叶'], '雷电将军': ['雷神', '将军'], '珊瑚宫心海': ['心海'],
  '九条裟罗': ['九条'], '神里绫华': ['绫华'], '神里绫人': ['绫人'],
  '荒泷一斗': ['一斗'], '纳西妲': ['草神'], '八重神子': ['神子'],
  '菲谢尔': ['皇女', '奥兹'], '芙宁娜': ['水神'], '班尼特': ['班爷', '点赞哥'],
  '香菱': ['锅巴'], '阿蕾奇诺': ['仆人'], '那维莱特': ['龙王', '那维'],
  '甘雨': ['椰羊'], '达达利亚': ['公子'], '流浪者': ['散兵'],
  '艾尔海森': ['海哥'], '钟离': ['岩神'], '温迪': ['风神'],
}
const TEAM_SHORTHAND = {
  '万班香': ['枫原万叶', '班尼特', '香菱'],
  '雷九万班': ['雷电将军', '九条裟罗', '枫原万叶', '班尼特'],
  '神鹤万心': ['神里绫华', '申鹤', '枫原万叶', '珊瑚宫心海'],
}
function matchOwners(text, names, t) {
  const hit = new Set()
  for (const n of names) {
    if ([n, ...(NAME_ALIAS[n] || [])].some(k => text.includes(k))) hit.add(n)
  }
  // 「双水 / 双火」等群体词：影响该元素的所有成员
  for (const g of text.match(/双[火水雷冰风岩草]/g) || []) {
    const el = g[1]
    for (const m of t.members || []) if (m.element === el) hit.add(m.name)
  }
  for (const [short, list] of Object.entries(TEAM_SHORTHAND)) {
    if (text.includes(short)) for (const n of list) if (names.includes(n)) hit.add(n)
  }
  return names.filter(n => hit.has(n))
}
function buildRotation(t) {
  const raw = t.tip || ''
  const chunks = raw.split(/→|->/).flatMap(s => s.split(/[，,]/)).map(s => s.trim()).filter(Boolean)
  const names = (t.members || []).map(m => m.name)
  return chunks.map(text => ({ text, owners: matchOwners(text, names, t) }))
}

// ---------------------------------------------------------------------------
// 队内定位
// ---------------------------------------------------------------------------
function classify(char, idx) {
  const r = char.role || ''
  if (/主C|核心|火神|站场|蓄力|突进|断流|重击|普攻|战技|双持|月感电|月绽放|星之楔/.test(r)) return 'main'
  if (/盾辅|护盾|盾位|生存/.test(r)) return 'shield'
  if (/治疗/.test(r)) return 'heal'
  if (/副C|后台/.test(r)) return 'sub'
  if (/充能/.test(r)) return 'battery'
  return 'support'
}
const TYPE_LABEL = {
  main: '站场主C', sub: '后台副C', shield: '护盾 / 生存位',
  heal: '治疗 / 续航位', battery: '充能辅助', support: '增伤辅助',
}

// ---------------------------------------------------------------------------
// 面板推荐：高频角色精确覆盖 + 按定位/反应的通用模板
// ---------------------------------------------------------------------------
const SPECIAL = {
  '钟离': [['生命值', '35,000 – 45,000', '护盾厚度与 Q 伤害同源'], ['元素充能效率', '130% – 160%', '保证 Q 循环'], ['暴击率 / 暴击伤害', '50% / 100%', '走副C流时再堆双暴']],
  '班尼特': [['元素充能效率', '200% – 240%', 'Q 无缝覆盖是核心'], ['基础攻击力（白值）', '越高越好', '只吃武器白值+等级，不吃圣遗物攻击%'], ['生命值', '25,000+', '兼顾治疗量']],
  '枫原万叶': [['元素精通', '900 – 1,000', '扩散增伤按精通结算'], ['元素充能效率', '160% – 180%', '保证 Q 循环'], ['暴击率（副C流）', '60%', '精通达标后再考虑']],
  '纳西妲': [['元素精通', '800 – 1,000', '激化/绽放核心，且受天赋上限约束'], ['暴击率 / 暴击伤害', '60% / 120%', '精通达标后补双暴'], ['元素充能效率', '120% – 140%', 'Q 循环']],
  '芙宁娜': [['生命值', '35,000+', '增伤幅度与生命挂钩'], ['元素充能效率', '170% – 200%', '单水入队需堆充能'], ['暴击率 / 暴击伤害', '65% / 130%', '副C伤害补充']],
  '夜兰': [['生命值', '28,000 – 32,000', '伤害按生命结算'], ['元素充能效率', '170% – 200%', '单水入队优先充能'], ['暴击率 / 暴击伤害', '70% / 140%', '生命达标后堆双暴']],
  '行秋': [['元素充能效率', '190% – 220%', 'Q 是挂水核心，充能第一优先'], ['攻击力', '1,500 – 1,800', ''], ['暴击率 / 暴击伤害', '60% / 120%', '充能达标后补双暴']],
  '香菱': [['元素充能效率', '200% – 240%', 'Q 锁面板，循环刚需'], ['元素精通', '150 – 250', '蒸发/融化收益'], ['暴击率 / 暴击伤害', '60% / 120%', '充能达标后补双暴']],
  '胡桃': [['生命值', '28,000 – 32,000', 'E 按生命上限转攻击'], ['元素精通', '100 – 200', '蒸发队精通收益高'], ['暴击率 / 暴击伤害', '70% / 200%', '护摩+暴伤头，双暴优先']],
  '雷电将军': [['元素充能效率', '230% – 270%', '充能转雷伤与愿力'], ['攻击力', '1,900 – 2,200', ''], ['暴击率 / 暴击伤害', '70% / 140%', '双暴优先于增伤']],
  '珊瑚宫心海': [['生命值', '32,000 – 40,000', '治疗与伤害同源'], ['治疗加成', '海染/千岩按套装', ''], ['元素充能效率', '150% – 180%', '保证 E/Q 覆盖']],
  '申鹤': [['攻击力', '3,000 – 3,800', '冰翎加成按攻击结算'], ['元素充能效率', '150% – 180%', 'Q 循环'], ['暴击率', '可选', '非刚需']],
  '九条裟罗': [['元素充能效率', '180% – 220%', 'Q 循环'], ['攻击力（白值）', '越高越好', '加攻按基础攻击结算'], ['暴击率 / 暴击伤害', '60% / 120%', '满命后再考虑']],
  '五郎': [['防御力', '2,000 – 2,600', '岩队加成按防御结算'], ['元素充能效率', '170% – 200%', 'Q 循环'], ['暴击率', '可选', '非刚需']],
  '珐露珊': [['元素充能效率', '210% – 250%', 'Q 覆盖是风队核心'], ['攻击力', '1,600 – 1,900', ''], ['暴击率 / 暴击伤害', '60% / 120%', '充能达标后补']],
  '菲谢尔': [['攻击力', '1,600 – 1,900', ''], ['暴击率 / 暴击伤害', '65% / 130%', ''], ['元素精通', '激化队 150 – 250', '激化队精通收益显著']],
  '白术': [['生命值', '40,000 – 50,000', '治疗与增伤按生命结算'], ['元素充能效率', '160% – 200%', 'Q 循环'], ['暴击率', '可选', '非刚需']],
  '甘雨': [['攻击力', '2,000 – 2,300', ''], ['暴击率 / 暴击伤害', '60% / 200%', '永冻下暴击率需求可降低'], ['元素精通', '融化队 100 – 200', '纯永冻队可不堆']],
  '神里绫华': [['攻击力', '2,000 – 2,300', ''], ['暴击率 / 暴击伤害', '45% / 220%', '永冻+双冰共鸣，暴击率可压低'], ['元素充能效率', '120% – 140%', 'Q 循环']],
  '荒泷一斗': [['防御力', '2,300 – 2,800', '输出按防御结算'], ['暴击率 / 暴击伤害', '70% / 160%', ''], ['元素充能效率', '120% – 140%', 'Q 循环']],
  '那维莱特': [['生命值', '32,000 – 38,000', '重击伤害按生命结算'], ['暴击率 / 暴击伤害', '65% / 180%', ''], ['元素充能效率', '110% – 130%', '需求较低']],
  '枫丹妮娅': null,
}
function panelFor(char, type, reaction) {
  if (SPECIAL[char.name]) return SPECIAL[char.name].map(([label, value, hint]) => ({ label, value, hint }))
  const reactionPanel = {
    '蒸发': ['元素精通', '100 – 200', '蒸发按精通放大，优先于攻击%'],
    '融化': ['元素精通', '100 – 200', '融化倍率受精通影响'],
    '激化': ['元素精通', '200 – 350', '激化基础伤害直接吃精通'],
    '绽放': ['元素精通', '300 – 500', '绽放伤害只看精通与等级'],
    '月绽放': ['元素精通', '300 – 500', '月绽放继承精通收益'],
    '月感电': ['元素精通', '200 – 350', '月感电吃精通与双暴'],
    '星超导': ['元素精通', '150 – 300', '后台雷伤兼顾精通'],
    '永冻': ['暴击伤害', '180% – 220%', '冻结+双冰共鸣下暴击率需求低'],
    '物理': ['物理伤害加成', '优先杯子', '物理队靠杯子与超导减抗'],
    '纯色': ['元素伤害加成', '优先杯子', '纯色队吃对应元素伤'],
    '结晶': ['暴击率 / 暴击伤害', '65% / 140%', '结晶队以直伤为主'],
    '多元素': ['元素精通', '150 – 250', '多元素反应队精通有收益'],
    '混伤': ['元素精通', '100 – 200', '混编队兼顾直伤与反应'],
    '直伤': ['元素伤害加成', '对应元素伤杯子', '直伤队杯子收益最高'],
    '下落': ['下落攻击伤害加成', '按套装/武器', '下落流吃专属增伤区'],
    '爆发': ['暴击伤害', '160% – 220%', '爆发压单窗口，暴伤收益高'],
    '星扩散': ['元素精通', '200 – 350', '扩散链按精通结算'],
  }[reaction] || ['暴击率 / 暴击伤害', '65% / 140%', '双暴是最稳的通用收益']

  const base = {
    main: [
      ['攻击力 / 生命·防御主属性', '1,800 – 2,300（或对应主属性 3万+）', '按角色吃攻击、生命还是防御决定'],
      ['暴击率 / 暴击伤害', '70% / 140% – 180%', '双暴 1:2 配比收益最优'],
      reactionPanel,
      ['元素充能效率', '110% – 140%', '站场主C充能需求较低'],
    ],
    sub: [
      ['攻击力', '1,500 – 1,900', '后台输出基础'],
      ['暴击率 / 暴击伤害', '60% / 120% – 140%', '后台副C双暴'],
      ['元素充能效率', '160% – 200%', '脱手 Q 循环刚需'],
      reactionPanel,
    ],
    support: [
      ['元素精通 / 攻击力', '精通 800+ 或 攻击 2,000+', '按增伤方式二选一'],
      ['元素充能效率', '170% – 210%', '保证 Q 增伤覆盖'],
      ['暴击率 / 暴击伤害', '可选', '辅助位非刚需'],
    ],
    shield: [
      ['生命值 / 防御力', '生命 35,000+ / 防御 2,000+', '护盾厚度来源'],
      ['元素充能效率', '130% – 160%', '保证 Q 循环'],
      ['暴击率 / 暴击伤害', '可选', '走副C流时再堆'],
    ],
    heal: [
      ['生命值', '30,000 – 40,000', '治疗量与部分伤害同源'],
      ['元素充能效率', '160% – 200%', '保证 E/Q 覆盖'],
      ['治疗加成', '按套装', '海染 / 少女等'],
    ],
    battery: [
      ['元素充能效率', '200% – 240%', '充能位核心指标'],
      ['攻击力', '1,500+', '兼顾产球与伤害'],
      ['暴击率 / 暴击伤害', '可选', '非刚需'],
    ],
  }[type] || []
  return base.map(([label, value, hint]) => ({ label, value, hint }))
}

// ---------------------------------------------------------------------------
// 队内专属要点
// ---------------------------------------------------------------------------
const REACTION_NOTES = {
  '蒸发': ['保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率', '挂水位优先保证 Q 覆盖率，充能优先级高于双暴', '本队以单体爆发为主，聚怪与站位会明显影响输出'],
  '融化': ['融化倍率高于蒸发，但对冰/火附着顺序更敏感', '挂元素角色需覆盖主C的爆发窗口', '注意元素附着内置 CD，避免连续同元素吞反应'],
  '激化': ['先挂草再上雷建立原激化，后续雷/草命中触发超激化/蔓激化', '精通收益显著，副词条优先精通与双暴', '维持激化状态不要被其他元素打断'],
  '燃烧': ['需持续草底 + 火触发维持燃烧', '燃烧队对精通与持续时间敏感', '注意燃烧会伤及自身，护盾/治疗位不可省'],
  '绽放': ['产种子后由雷/火触发超绽放/烈绽放', '触发者精通决定绽放伤害', '注意种子上限与触发节奏'],
  '月绽放': ['月绽放不吃常规精通转化，按新体系堆对应主属性', '保持队伍挂元素循环，避免断轴', '注意月绽放专属机制的触发条件'],
  '月感电': ['月感电按队伍雷/水角色数量与面板结算', '保持雷水同时在场，避免提前切走', '充能与精通需按队伍轴长平衡'],
  '永冻': ['冻结需水+冰持续附着，挂水位不能断', '永冻下暴击率需求下降，可把词条让给暴伤', 'BOSS 无法冻结，需准备爆发轴替代方案'],
  '纯色': ['纯色队吃对应元素伤害加成，杯子优先元素伤', '减抗与增伤辅助收益高于堆攻击', '同元素共鸣会进一步放大主属性收益'],
  '结晶': ['结晶反应产盾，注意及时拾取晶片', '岩队吃防御/岩伤，减抗位收益高', '护盾覆盖是站场输出的前提'],
  '物理': ['超导减物抗是物理队核心，保持雷冰触发', '物理伤害杯子优先', '注意部分敌人物抗较高'],
  '扩散': ['风角色优先扩散可被转化的元素', '精通决定扩散增伤幅度', '聚怪位置影响后续 AOE 命中'],
  '多元素': ['多元素队按可转化元素决定扩散/反应收益', '注意附着顺序，避免元素互相吞掉', '循环轴较长，充能需按最慢角色配置'],
  '混伤': ['混编队兼顾直伤与反应，词条不要极端化', '注意附着顺序与反应归属', '按主C爆发窗口安排增伤技能'],
  '星超导': ['星超导以后台雷伤为主，保持触发条件', '后台角色充能与精通都需兼顾', '注意新机制与传统超导的区别'],
  '星扩散': ['星扩散依托浮空/扩散触发', '精通与风伤收益按队伍配置取舍', '保持聚怪与扩散链条'],
  '月结晶': ['月结晶按岩系体系结算，注意新机制触发条件', '结晶护盾维持站场', '减抗与增伤按岩队配置'],
  '下落': ['下落攻击吃专属增伤，注意高度与落地判定', '护盾/抗打断位保证下落不被打断', '充能需覆盖主C的站场轴'],
  '爆发': ['把增伤与减抗技能压缩进主C爆发窗口', '爆发队对轴，充能按最短技能 CD 配平', '爆发外时间以挂元素和产球为主'],
  '直伤': ['直伤队吃元素伤害加成与减抗，杯子优先元素伤', '反应收益有限，词条优先双暴与攻击/生命/防御主属性', '增伤辅助应覆盖主C完整站场时间'],
  '常规': ['按主C爆发窗口安排增伤与挂元素技能', '保证关键技能充能循环', '优先补齐双暴再考虑其他词条'],
}
function notesFor(type, reaction, char, t, resonance) {
  const out = [...(REACTION_NOTES[reaction] || REACTION_NOTES['常规'])]
  const roleTip = {
    main: `${char.name}是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。`,
    sub: `${char.name}以脱手输出为主，Q 的覆盖与充能比对轴影响最大。`,
    support: `${char.name}提供增伤/减抗，需在主C上场前完成 buff 铺垫。`,
    shield: `${char.name}负责护盾与抗打断，护盾覆盖是主C安心站场的前提。`,
    heal: `${char.name}负责治疗与续航，注意保持挂元素/治疗的持续时间。`,
    battery: `${char.name}负责产球充能，优先保证全队 Q 循环。`,
  }[type]
  out.push(roleTip)
  out.push(`队伍共鸣：${resonance}`)
  return out
}

// ---------------------------------------------------------------------------
// 圣遗物 / 武器
// ---------------------------------------------------------------------------
// 55 套主数据之外的后期套装，补一段效果摘要，保证详情页不空白
const ARTIFACT_FALLBACK = {
  '谐律的异想': {
    twoPiece: '攻击力+18%',
    fourPiece: '生命之契的数值发生变动时，角色造成的伤害提升18%，持续6秒，最多叠加3层',
    flavor: '生命之契体系 · 阿蕾奇诺 / 克洛琳德',
    themeColor: '#d97a86',
  },
  '回响之林': {
    twoPiece: '攻击力+18%',
    fourPiece: '施放元素战技后的20秒内，岩元素伤害加成+20%；处于结晶反应产生的护盾庇护下时，该效果提升150%',
    flavor: '岩系爆发 · 娜维娅',
    themeColor: '#d6b070',
  },
}
function artifactFor(char) {
  const raw = char.artifacts || ''
  const short = raw.replace(/\s*\d\s*件套.*$/, '').trim()
  const hit = arts.find(a => a.name === short || a.name.startsWith(short) || short.startsWith(a.name))
  const fb = ARTIFACT_FALLBACK[short] || null
  return {
    raw,
    name: hit ? hit.name : short,
    twoPiece: hit ? hit.twoPiece : (fb?.twoPiece || ''),
    fourPiece: hit ? hit.fourPiece : (fb?.fourPiece || ''),
    flavor: hit ? hit.flavor : (fb?.flavor || ''),
    image: hit ? hit.image : '',
    themeColor: hit ? hit.themeColor : (fb?.themeColor || '#8fa2c7'),
    matched: !!hit,
  }
}
function weaponFor(b) {
  const real = ALIAS[b.name] || b.name
  const w = weapons.get(real) || {}
  return {
    name: real,
    displayName: b.name,
    rarity: b.rarity || w.rarity || 5,
    reason: b.reason || '',
    type: w.type || '',
    stat: w.stat || '',
    desc: w.desc || '',
    atk1: w.atk1 ?? null,
    atk90: w.atk90 ?? null,
    subStat: w.subStat || w.stat || '',
    subValue: w.subValue || '',
  }
}

// ---------------------------------------------------------------------------
// 生成
// ---------------------------------------------------------------------------
const guides = {}
for (const t of H.TEAMS) {
  const reaction = detectReaction(t)
  const resonance = resonanceOf(t)
  const rotation = buildRotation(t)
  const members = (t.members || []).map((m, idx) => {
    const char = chars.get(m.name) || { name: m.name, element: m.element, rarity: 5, role: '功能位', talents: '', artifacts: '', mainStats: '', summary: '' }
    const type = classify(char, idx)
    const best = (recs.get(m.name)?.best || [])
    const mySteps = rotation.filter(s => s.owners.includes(m.name)).map(s => s.text)
    return {
      name: m.name,
      element: m.element || char.element,
      rarity: char.rarity || 5,
      roleInTeam: `${TYPE_LABEL[type]} · ${reaction}体系`,
      type,
      duty: (() => {
        const base = {
          main: `承担本队主要输出，围绕「${t.core}」打满爆发窗口`,
          sub: `后台脱手补伤害与挂元素，为主C创造${reaction}条件`,
          support: `上场铺垫增伤/减抗/聚怪，放大主C输出`,
          shield: `提供护盾与抗打断，保障站场环境`,
          heal: `提供治疗与挂元素，维持队伍续航`,
          battery: `产球供能，保证全队技能循环`,
        }[type]
        return base
      })(),
      summary: char.summary || '',
      talents: char.talents || '按主输出技能优先升级',
      mainStats: char.mainStats || '时之沙/空之杯/理之冠 按主属性与元素伤配置',
      weapon: weaponFor(best[0] || { name: '待补充' }),
      altWeapons: best.slice(1).map(weaponFor),
      artifact: artifactFor(char),
      panel: panelFor(char, type, reaction),
      notes: notesFor(type, reaction, char, t, resonance),
      mySteps,
      // 与 team.rotation 一一对应的布尔数组：该步是否由本角色执行
      stepMine: rotation.map(s => s.owners.includes(m.name)),
    }
  })
  guides[t.name] = {
    name: t.name,
    core: t.core || '',
    tip: t.tip || '',
    reaction,
    resonance,
    themeColor: REACTION_COLOR[reaction] || '#6fd6c0',
    rotation,
    members,
  }
}

const header = `// 队伍详情数据 · 由 gen_team_guides.mjs 生成，请勿手工逐条改动
// 来源：homeData.js（角色 / 武器推荐 / 武器图鉴 / 队伍）+ artifactSets.js（圣遗物）
// 每个 (队伍, 成员) 的攻略与面板推荐都结合了队内反应类型、元素共鸣与输出循环。
// 面板数值为养成参考阈值，不是逐角色考据的官方数值。
// 重跑：node gen_team_guides.mjs
export const TEAM_GUIDES = `
fs.writeFileSync(OUT, header + JSON.stringify(guides, null, 2) + '\n', 'utf8')

console.log('生成完成:', OUT)
console.log('队伍数:', Object.keys(guides).length, '| 成员总数:', Object.values(guides).reduce((s, g) => s + g.members.length, 0))
console.log('反应类型分布:', Object.values(guides).reduce((m, g) => (m[g.reaction] = (m[g.reaction] || 0) + 1, m), {}))
const noArt = [], noW90 = [], noSteps = []
for (const g of Object.values(guides)) for (const m of g.members) {
  if (!m.artifact.matched) noArt.push(`${g.name}/${m.name}:${m.artifact.raw}`)
  if (!m.weapon.atk90) noW90.push(`${g.name}/${m.name}:${m.weapon.name}`)
  if (!m.mySteps.length) noSteps.push(`${g.name}/${m.name}`)
}
console.log('圣遗物未匹配:', noArt.length, [...new Set(noArt)].slice(0, 8))
console.log('武器缺90级数值:', noW90.length, [...new Set(noW90)].slice(0, 8))
console.log('循环里未点到名(用通用职责兜底):', noSteps.length, noSteps.slice(0, 8))
console.log('文件大小:', fs.statSync(OUT).size, 'bytes')

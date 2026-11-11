// =====================================================================
// gen_char_builds.mjs —— 生成 130 位角色的「圣遗物副词条优先级」与「毕业面板」
//
// 依据每位角色在 homeData.js 里的真实养成设定做机制画像：
//   mainStats 三个槽位 → 主属性依赖（攻击% / 生命% / 防御% / 精通 / 充能）
//   role              → 主C / 副C / 治疗 / 盾辅 / 增伤辅 / 属性拐
//   summary + 套装     → 蒸发 / 激化 / 绽放 / 扩散 / 永冻 / 生命转化 等机制
// 再按 8 类机制分别生成副词条档位与毕业面板目标值，避免千篇一律。
// 另对 40 位高知名角色使用攻略口径的精确数值覆盖。
//
// 产出：
//   genshin-login-vue/src/data/charBuilds.js   （前端兜底数据）
//   springBootTest/sql/char_builds.sql         （两张表，幂等 INSERT IGNORE）
//
// 可重复执行：SQL 用 INSERT IGNORE + 唯一键，重跑不会抹掉后台管理系统里的修改。
// =====================================================================
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// 用 file URL 动态导入，避免依赖 package.json 的 type 字段
const HOME_DATA_URL = new URL('./genshin-login-vue/src/data/homeData.js', import.meta.url).href
const { CHARACTERS } = await import(HOME_DATA_URL)

const ROOT = path.dirname(fileURLToPath(import.meta.url))
const JS_OUT = path.join(ROOT, 'genshin-login-vue', 'src', 'data', 'charBuilds.js')
const SQL_OUT = path.join(ROOT, 'springBootTest', 'sql', 'char_builds.sql')

const q = (s) => JSON.stringify(String(s ?? ''))
const esc = (s) => String(s ?? '').replace(/\\/g, '\\\\').replace(/'/g, "''")

// ---------------------------------------------------------------------
// 1. 机制画像
// ---------------------------------------------------------------------
function slots(c) {
  const parts = String(c.mainStats || '').split('/')
  const get = (i) => {
    const p = (parts[i] || '').trim()
    const k = p.indexOf('：')
    return (k >= 0 ? p.slice(k + 1) : p).trim()
      .replace('元素精通', '精通').replace('治疗加成', '治疗%')
  }
  return { sand: get(0), goblet: get(1), crown: get(2) }
}

function profile(c) {
  const { sand, goblet, crown } = slots(c)
  const role = String(c.role || '')
  const first = role.split('·')[0].trim()
  const text = role + ' ' + String(c.summary || '') + ' ' + String(c.artifacts || '')
  const has = (re) => re.test(text)
  const inSlot = (re) => [sand, goblet, crown].some((s) => re.test(s))

  // 主属性依赖：由三个主词条槽位反推（治疗冠不强制算生命，七七/琴是攻击治疗）
  let scale = 'atk'
  if (inSlot(/生命/)) scale = 'hp'
  else if (inSlot(/防御/)) scale = 'def'
  else if (inSlot(/精通/)) scale = 'em'

  const crownCrit = /暴击/.test(crown)
  const healer = /治疗/.test(crown) || first === '治疗'
  const erFirst = /充能/.test(sand)
  const carry = first === '主C' || /主C|绽放核心|月绽放/.test(role)
  const swirl = c.element === '风' && /扩散|聚怪|增伤|风拐|辅助/.test(text)
  const reaction = /蒸发|融化|激化|绽放|超载|感电|燃烧|超导|月感电|月绽放|月结晶|月反应/.test(text)
  const vape = /蒸发|融化/.test(text)
  const aggravate = /激化/.test(text)
  const bloom = /绽放/.test(text)
  const burn = /燃烧/.test(text)
  const freeze = /永冻|冻结/.test(text)
  const critSet = /逐影猎人|冰风迷途/.test(String(c.artifacts || ''))
  const hpConvert = /生命转|生命之契/.test(text)
  const defConvert = /防御转/.test(text)

  let category
  if (healer) category = scale === 'atk' ? 'heal_atk' : 'heal_hp'
  else if (crownCrit && erFirst) category = 'er_dps'
  else if (crownCrit && scale === 'em') category = 'em_dps'
  else if (crownCrit) category = 'dps'
  else if (scale === 'em') category = 'em_support'
  else if (scale === 'def') category = 'def_support'
  else if (scale === 'hp') category = 'hp_support'
  else category = 'atk_support'

  const tags = []
  if (vape) tags.push('蒸发/融化')
  if (aggravate) tags.push('激化')
  if (bloom) tags.push('绽放')
  if (burn) tags.push('燃烧')
  if (swirl) tags.push('扩散')
  if (freeze) tags.push('永冻')
  if (/月感电|月绽放|月结晶|月反应/.test(text)) tags.push('月反应')
  if (hpConvert) tags.push('生命转化')
  if (defConvert) tags.push('防御转化')

  const scaleName = { atk: '攻击力%', hp: '生命值%', def: '防御力%', em: '元素精通' }[scale]
  const flatName = { atk: '攻击力', hp: '生命值', def: '防御力', em: '攻击力' }[scale]
  const catName = {
    dps: '直伤输出', er_dps: '充能循环输出', em_dps: '精通反应输出',
    em_support: '精通辅助', hp_support: '生命生存辅助', def_support: '防御辅助',
    atk_support: '攻击增益辅助', heal_hp: '生命治疗', heal_atk: '攻击治疗'
  }[category]

  return {
    sand, goblet, crown, scale, scaleName, flatName, category, catName,
    crownCrit, healer, erFirst, carry, swirl, reaction, vape, aggravate,
    bloom, burn, freeze, critSet, hpConvert, defConvert,
    tags: tags.join(' / '), rarity: c.rarity
  }
}

// ---------------------------------------------------------------------
// 2. 副词条优先级（每位角色 4~6 条，带档位与依据）
// ---------------------------------------------------------------------
const TIER = { CORE: '核心', HIGH: '重要', OK: '可用', LOW: '低收益' }

function buildSubstats(c, p) {
  const L = []
  const add = (name, tier, reason) => {
    if (!L.some((x) => x.name === name)) L.push({ name, tier, reason })
  }
  const tag = p.tags ? `${p.tags} · ` : ''
  const critWhy = p.critSet
    ? '套装已提供大量暴击率，堆到 55~60% 即可，优先补暴击伤害'
    : '双暴按 1:2 配比，建议 65~75% 暴击率'
  const mainWhy = {
    atk: '直接放大技能倍率收益',
    hp: p.hpConvert ? 'E 生命转化机制，收益远高于攻击%' : '技能与治疗/护盾随生命上限提升',
    def: p.defConvert ? '防御转化攻击机制，收益远高于攻击%' : '技能效果随防御力提升',
    em: '反应伤害与增伤随精通提升'
  }[p.scale]

  switch (p.category) {
    case 'heal_hp':
      add('生命值%', TIER.CORE, `${tag}治疗量与护盾厚度按生命上限结算，最高优先`)
      add('元素充能效率', TIER.HIGH, '保证 Q 循环覆盖，建议 160~200%')
      add('生命值', TIER.OK, '固定生命作补充，收益低于百分比词条')
      add('暴击率', TIER.LOW, '治疗量不吃双暴，仅输出流才考虑')
      add('暴击伤害', TIER.LOW, '治疗量不吃双暴，仅输出流才考虑')
      break
    case 'heal_atk':
      add('攻击力%', TIER.CORE, `${tag}治疗量按攻击力结算，攻击%收益最高`)
      add('元素充能效率', TIER.HIGH, '保证 Q 循环覆盖，建议 160~180%')
      add('攻击力', TIER.OK, '固定攻击作补充，收益低于百分比词条')
      add('元素精通', TIER.OK, p.swirl ? '扩散反应伤害随精通提升' : '反应队可作补充，非治疗刚需')
      add('暴击率', TIER.LOW, '治疗量不吃双暴，低优先级')
      break
    case 'em_support':
      add('元素精通', TIER.CORE, `${tag}${p.swirl ? '扩散伤害与全队元素增伤' : '绽放/激化反应伤害'}按精通结算，堆到 800+ 收益最高`)
      add('元素充能效率', TIER.HIGH, '保证 Q 循环覆盖，建议 160~180%')
      add('生命值%', TIER.OK, '兼顾生存与治疗量，副词条中的补充项')
      add('暴击率', TIER.LOW, '扩散与绽放反应不吃双暴，无需堆叠')
      add('暴击伤害', TIER.LOW, '扩散与绽放反应不吃双暴，无需堆叠')
      break
    case 'hp_support':
      add('生命值%', TIER.CORE, `${tag}护盾厚度 / 技能效果随生命上限提升，最高优先`)
      add('元素充能效率', TIER.HIGH, '保证 Q 循环覆盖，建议 160~200%')
      add('生命值', TIER.OK, '固定生命作补充，收益低于百分比词条')
      add('暴击率', TIER.LOW, `定位为${p.catName}，双暴收益低`)
      add('暴击伤害', TIER.LOW, `定位为${p.catName}，双暴收益低`)
      break
    case 'def_support':
      add('防御力%', TIER.CORE, `${tag}增伤 / 技能效果随防御力提升，最高优先`)
      add('元素充能效率', TIER.HIGH, '保证 Q 循环覆盖，建议 170~200%')
      add('防御力', TIER.OK, '固定防御作补充，收益低于百分比词条')
      add('暴击率', TIER.LOW, `定位为${p.catName}，双暴收益低`)
      break
    case 'atk_support':
      add('攻击力%', TIER.CORE, `${tag}增伤效果按自身攻击力结算，攻击%越高拐力越强`)
      add('元素充能效率', TIER.HIGH, '保证 Q 循环覆盖，建议 160~180%')
      add('攻击力', TIER.OK, '固定攻击作补充，收益低于百分比词条')
      add('暴击率', TIER.LOW, `定位为${p.catName}，不靠自身直伤`)
      break
    case 'er_dps':
      add('元素充能效率', TIER.CORE, `${tag}Q 循环优先，达标前高于双暴（建议 180~220%）`)
      add('暴击率', TIER.HIGH, critWhy)
      add('暴击伤害', TIER.HIGH, '与暴击率按 1:2 配比，充能达标后主堆')
      add(p.scaleName, TIER.OK, mainWhy)
      if (p.reaction) add('元素精通', TIER.OK, `${tag}反应伤害提供额外收益`)
      else add(p.flatName, TIER.LOW, '固定值词条收益低于百分比，仅作过渡')
      break
    case 'em_dps':
      add('元素精通', TIER.CORE, `${tag}反应伤害随精通提升，主词条已锁精通，副词条继续补`)
      add('暴击率', TIER.HIGH, critWhy)
      add('暴击伤害', TIER.HIGH, '与暴击率按 1:2 配比')
      add('元素充能效率', TIER.OK, '长轴站场角色需保证 Q 循环，建议 130~150%')
      add('攻击力%', TIER.OK, '技能直伤部分的补充收益')
      add('攻击力', TIER.LOW, '固定值词条收益最低')
      break
    default: // dps
      add('暴击率', TIER.CORE, `${tag}${critWhy}`)
      add('暴击伤害', TIER.CORE, '与暴击率按 1:2 配比，直伤收益最高')
      add(p.scaleName, TIER.HIGH, mainWhy)
      if (p.reaction) {
        add('元素精通', p.vape || p.aggravate || p.bloom ? TIER.HIGH : TIER.OK,
          `${tag}反应覆盖率高，精通提供额外增伤`)
      }
      add('元素充能效率', TIER.OK, p.erFirst ? 'Q 循环刚需，建议 180%+' : '保证 Q 循环顺畅即可，110~130% 足够')
      add(p.flatName, TIER.LOW, '固定值词条收益低于百分比，仅作过渡')
      break
  }
  // 理由末尾附上角色自己的定位，让同类角色也能看出是逐人定制（如「主C · 蒸发」vs「主C · 永冻」）
  const roleText = String(c.role || '').trim()
  return L.map((x, i) => ({
    ...x,
    reason: x.reason + (roleText ? `（${roleText}）` : ''),
    sortOrder: i + 1
  }))
}

// ---------------------------------------------------------------------
// 3. 毕业面板（只保留最重要的 3~5 个词条）
// ---------------------------------------------------------------------
function buildPanel(c, p) {
  const L = []
  const add = (label, target, note) => {
    if (!L.some((x) => x.label === label)) L.push({ label, target, note })
  }
  const r5 = p.rarity === 5
  const critRate = p.critSet ? '55~60%' : '70%+'
  const critDmg = p.critSet ? '190%+' : (r5 ? '160%+' : '150%+')
  const atk = r5 ? '2100+' : '1750+'

  switch (p.category) {
    case 'heal_hp':
      add('生命值', r5 ? '3.5 万+' : '3.0 万+', '治疗量按生命上限结算，优先堆满')
      add('元素充能效率', '160~200%', '保证 Q 循环覆盖')
      add('治疗加成', '35%+', '理之冠主词条，配合生命拉高奶量')
      break
    case 'heal_atk':
      add('攻击力', r5 ? '2200+' : '1800+', '治疗量按攻击力结算，攻击越高奶量越足')
      add('元素充能效率', '160~180%', '保证 Q 循环覆盖')
      add('治疗加成', '35%+', '理之冠主词条')
      break
    case 'em_support':
      add('元素精通', p.bloom ? '900+' : '850+', `${p.tags || '扩散'}收益的核心指标`)
      add('元素充能效率', '160~180%', '保证 Q 循环覆盖')
      if (p.healer || /盾辅|治疗/.test(String(c.role))) {
        add('生命值', '2.5 万+', '兼顾护盾厚度 / 治疗量')
      }
      break
    case 'hp_support':
      add('生命值', r5 ? '4.0 万+' : '3.0 万+', '护盾 / 技能效果按生命上限结算')
      add('元素充能效率', '160~200%', '保证 Q 循环覆盖')
      break
    case 'def_support':
      add('防御力', r5 ? '2500+' : '2200+', '增伤效果按防御力结算')
      add('元素充能效率', '170~200%', '保证 Q 循环覆盖')
      break
    case 'atk_support':
      add('攻击力', r5 ? '3000+' : '2400+', '拐力按自身攻击力结算')
      add('元素充能效率', '160~180%', '保证 Q 循环覆盖')
      break
    case 'er_dps':
      add('元素充能效率', r5 ? '200~260%' : '180~220%', 'Q 循环刚需，绝缘 4 件套收益上限更高')
      add('暴击率', '60~70%', '充能达标后的第一优先级')
      add('暴击伤害', r5 ? '150%+' : '130%+', '与暴击率按 1:2 配比')
      add('攻击力', r5 ? '1900+' : '1500+', '直伤部分的基础白值')
      break
    case 'em_dps':
      add('元素精通', p.aggravate ? '300~400' : '800+', `${p.tags || '激化'}反应核心词条`)
      add('暴击率', '60~70%', '激化队直伤部分仍需双暴')
      add('暴击伤害', '150%+', '与暴击率按 1:2 配比')
      add('元素充能效率', '130~150%', '保证长轴站场期间的 Q 循环')
      break
    default: { // dps
      if (p.scale === 'hp') {
        add('生命值', r5 ? '3.2 万+' : '2.8 万+', p.hpConvert ? 'E 生命转化攻击，生命上限直接决定输出' : '技能倍率按生命上限结算')
      } else if (p.scale === 'def') {
        add('防御力', r5 ? '2500+' : '2200+', p.defConvert ? '防御转化攻击，防御力直接决定输出' : '技能倍率按防御力结算')
      } else {
        add('攻击力', atk, '直伤倍率的基础白值')
      }
      add('暴击率', critRate, p.critSet ? '套装提供暴击率，面板无需堆满' : '与暴击伤害按 1:2 配比')
      add('暴击伤害', critDmg, '直伤收益最高的乘区')
      if (p.vape) add('元素精通', '150~250', '蒸发/融化反应提供额外倍率')
      else if (p.aggravate) add('元素精通', '200~300', '激化反应提供额外倍率')
      else if (p.burn) add('元素精通', '100~200', '燃烧反应提供额外倍率')
      // 非反应型主C 不列充能：毕业面板只保留最重要的 3 条核心词条
      break
    }
  }
  return L.map((x, i) => ({ ...x, sortOrder: i + 1 }))
}

// ---------------------------------------------------------------------
// 4. 高知名角色精确口径覆盖（攻略向目标值）
//    格式：'角色名': [ [标签, 目标值, 说明], ... ]
// ---------------------------------------------------------------------
const PANEL_OVERRIDES = {
  '胡桃': [['生命值', '3.0 万+', 'E「蝶引来生」按生命上限转攻击'], ['暴击率', '70%+', '重击蒸发需稳定暴击'], ['暴击伤害', '200%+', '护摩之杖 / 匣里灭辰加成下收益最高'], ['元素精通', '100~200', '蒸发反应提供额外倍率']],
  '迪卢克': [['攻击力', '2100+', '火伤直伤基础白值'], ['暴击率', '75%+', '三段 E 稳定出伤'], ['暴击伤害', '150%+', '与暴击率 1:2 配比'], ['元素精通', '150~200', '配合行秋/夜兰打蒸发']],
  '宵宫': [['攻击力', '2000+', 'E 附魔普攻高频输出'], ['暴击率', '75%+', '普攻段数多，暴击收益稳定'], ['暴击伤害', '160%+', '与暴击率 1:2 配比'], ['元素精通', '80~150', '蒸发队补充收益']],
  '可莉': [['攻击力', '2000+', '重击与诡雷直伤'], ['暴击率', '70%+', '重击爆发需暴击'], ['暴击伤害', '160%+', '与暴击率 1:2 配比']],
  '林尼': [['攻击力', '2200+', '蓄力箭与猫猫弹直伤'], ['暴击率', '55~60%', '逐影猎人 4 件套提供大量暴击率'], ['暴击伤害', '190%+', '套装暴击率溢出后主堆爆伤'], ['元素精通', '80~150', '配合芙宁娜打蒸发']],
  '阿蕾奇诺': [['攻击力', '2200+', '生命之契强化重击的直伤白值'], ['暴击率', '70%+', '印记引爆需稳定暴击'], ['暴击伤害', '170%+', '与暴击率 1:2 配比'], ['元素精通', '80~150', '蒸发队补充收益']],
  '玛薇卡': [['攻击力', '2200+', 'Q 夜魂爆发直伤'], ['暴击率', '65~70%', '单段高倍率需暴击'], ['暴击伤害', '170%+', '与暴击率 1:2 配比'], ['元素精通', '100~200', '融化/蒸发队补充']],
  '雷电将军': [['元素充能效率', '250~270%', '绝缘 4 件套 + Q「梦想一心」伤害随充能提升'], ['暴击率', '65%+', '充能达标后的第一优先级'], ['暴击伤害', '140%+', '与暴击率 1:2 配比'], ['攻击力', '2000+', '直伤部分基础白值']],
  '香菱': [['元素充能效率', '200%+', 'Q「旋火轮」循环刚需'], ['暴击率', '60%+', '后台锁面板，双暴收益稳定'], ['暴击伤害', '130%+', '与暴击率 1:2 配比'], ['元素精通', '150~250', '高蒸发覆盖率']],
  '行秋': [['元素充能效率', '200%+', 'Q 雨帘剑循环刚需'], ['暴击率', '60%+', '后台协同攻击需双暴'], ['暴击伤害', '130%+', '与暴击率 1:2 配比'], ['攻击力', '1500+', '直伤基础白值']],
  '夜兰': [['生命值', '3.0 万+', 'Q 协同攻击倍率按生命上限结算'], ['元素充能效率', '180%+', '保证 Q 循环覆盖'], ['暴击率', '70%+', '后台高频水伤'], ['暴击伤害', '150%+', '与暴击率 1:2 配比']],
  '芙宁娜': [['生命值', '4.0 万+', 'Q 增伤与 E 三沙龙均按生命上限结算'], ['元素充能效率', '180%+', '保证 Q 循环覆盖'], ['暴击率', '65~70%', '后台直伤需双暴'], ['暴击伤害', '140%+', '与暴击率 1:2 配比']],
  '那维莱特': [['生命值', '3.5 万+', '重击水炮倍率按生命上限结算'], ['暴击率', '55~60%', '逐影猎人 4 件套提供暴击率'], ['暴击伤害', '190%+', '套装暴击溢出后主堆爆伤'], ['元素充能效率', '120%+', '保证重击循环']],
  '珊瑚宫心海': [['生命值', '3.5 万+', '治疗量与 E 水母伤害按生命结算'], ['元素充能效率', '150~170%', '保证 Q 覆盖'], ['治疗加成', '35%+', '理之冠主词条']],
  '妮露': [['生命值', '5.5 万+', '丰穰之核伤害按生命上限结算'], ['元素精通', '150~250', '绽放反应补充收益'], ['元素充能效率', '120%+', 'Q 循环够用即可']],
  '班尼特': [['元素充能效率', '200~220%', 'Q「美妙旅程」循环刚需'], ['生命值', '2.5 万+', '兼顾奶量，Q 加攻按基础攻击力结算'], ['攻击力', '（白值优先）', '加攻只看基础攻击力，选高白值武器']],
  '枫原万叶': [['元素精通', '900~1000', '扩散减抗 + 全队元素增伤约 40%'], ['元素充能效率', '160~180%', '保证 Q 循环覆盖'], ['暴击率', '（非必需）', '扩散不吃双暴，仅输出流考虑']],
  '砂糖': [['元素精通', '900+', '扩散与全队精通加成'], ['元素充能效率', '160%+', '保证 Q 循环覆盖'], ['攻击力', '1200+', '非核心，直伤占比低']],
  '温迪': [['元素精通', '800~900', '扩散伤害按精通结算'], ['元素充能效率', '160%+', 'Q 聚怪循环刚需'], ['暴击率', '50%+', 'Q 直伤部分的补充收益'], ['暴击伤害', '120%+', '与暴击率 1:2 配比']],
  '纳西妲': [['元素精通', '900~1000', 'E 灭净三业与 Q 增伤均按精通结算'], ['暴击率', '55~60%', '激化队直伤部分需双暴'], ['暴击伤害', '130%+', '与暴击率 1:2 配比'], ['元素充能效率', '130%+', '保证 Q 循环']],
  '钟离': [['生命值', '4.0 万+', '玉璋护盾厚度按生命上限结算'], ['暴击率', '（可选）', '血牛流无需双暴，副C 流才考虑'], ['元素充能效率', '130%+', '保证 Q 石化循环']],
  '神里绫华': [['攻击力', '2100+', '重击与 Q 直伤白值'], ['暴击率', '40~45%', '冰风迷途 4 件套 + 双冰共鸣提供大量暴击率'], ['暴击伤害', '220%+', '暴击率溢出后主堆爆伤'], ['元素充能效率', '120%+', '保证 Q 循环']],
  '甘雨': [['攻击力', '2200+', '霜华矢二段重击直伤'], ['暴击率', '55~65%', '冰套/双冰提供暴击率，蓄力需稳定'], ['暴击伤害', '200%+', '重击单段高倍率，爆伤收益最高'], ['元素精通', '（融化队 150+）', '永冻队不吃精通']],
  '优菈': [['攻击力', '2100+', '光降之剑物理爆发直伤'], ['暴击率', '70%+', '单段爆发必须暴击'], ['暴击伤害', '160%+', '与暴击率 1:2 配比'], ['元素充能效率', '130%+', '保证 Q 循环']],
  '荒泷一斗': [['防御力', '2500+', 'Q 鬼王重击按防御转化攻击'], ['暴击率', '70%+', '重击连段需稳定暴击'], ['暴击伤害', '160%+', '与暴击率 1:2 配比'], ['元素充能效率', '120~130%', '保证 Q 循环']],
  '阿贝多': [['防御力', '2500+', 'E 阳华刹那之花按防御结算'], ['暴击率', '60%+', '后台协同攻击需双暴'], ['暴击伤害', '130%+', '与暴击率 1:2 配比']],
  '诺艾尔': [['防御力', '2300+', '六命防御转化攻击'], ['暴击率', '65%+', '站场输出需双暴'], ['暴击伤害', '150%+', '与暴击率 1:2 配比'], ['元素充能效率', '130%+', '保证 Q 循环']],
  '云堇': [['防御力', '2300+', 'Q 增伤按防御力结算'], ['元素充能效率', '180~200%', 'Q 循环刚需'], ['暴击率', '（非必需）', '定位普攻拐，不靠自身直伤']],
  '五郎': [['防御力', '2000+', 'E 大将旗指物按防御提供增益'], ['元素充能效率', '180~200%', 'Q 循环刚需'], ['暴击率', '（非必需）', '定位岩拐，不靠自身直伤']],
  '申鹤': [['攻击力', '3000+', 'E 冰翎增伤按自身攻击力结算'], ['元素充能效率', '160~180%', '保证 Q 循环覆盖'], ['暴击率', '（非必需）', '定位冰拐，不靠自身直伤']],
  '提纳里': [['元素精通', '250~350', '激化反应核心词条'], ['暴击率', '70%+', '三段蓄力箭需稳定暴击'], ['暴击伤害', '160%+', '与暴击率 1:2 配比'], ['攻击力', '1700+', '直伤部分基础白值']],
  '艾尔海森': [['元素精通', '300~400', '光镜协同攻击激化收益'], ['暴击率', '70%+', '站场持续输出需双暴'], ['暴击伤害', '150%+', '与暴击率 1:2 配比'], ['元素充能效率', '130%+', '保证 Q 循环']],
  '赛诺': [['元素精通', '300~400', 'Q 长轴激化输出'], ['暴击率', '65%+', '长轴站场需稳定暴击'], ['暴击伤害', '150%+', '与暴击率 1:2 配比'], ['元素充能效率', '140%+', 'Q 循环刚需']],
  '久岐忍': [['元素精通', '900+', '超绽放伤害按精通结算'], ['生命值', '2.5 万+', 'E 治疗量按生命上限结算'], ['元素充能效率', '140%+', '保证 E 覆盖']],
  '白术': [['生命值', '4.0 万+', '治疗与护盾按生命上限结算'], ['元素充能效率', '180%+', 'Q 循环刚需'], ['治疗加成', '30%+', '理之冠主词条']],
  '七七': [['攻击力', '2200+', '治疗量按攻击力结算'], ['元素充能效率', '160~180%', 'Q 循环刚需'], ['治疗加成', '35%+', '理之冠主词条']],
  '琴': [['攻击力', '2000+', 'Q 领域治疗量按攻击力结算'], ['元素充能效率', '160%+', '保证 Q 循环'], ['治疗加成', '35%+', '理之冠主词条']],
  '莫娜': [['元素充能效率', '200%+', 'Q 泡影增伤循环刚需'], ['暴击率', '50%+', '核爆流双暴补充'], ['暴击伤害', '120%+', '与暴击率 1:2 配比']],
  '菲谢尔': [['攻击力', '1700+', '奥兹后台雷伤直伤白值'], ['暴击率', '65%+', '激化队双暴收益高'], ['暴击伤害', '150%+', '与暴击率 1:2 配比'], ['元素精通', '100~200', '激化反应补充收益']],
  '北斗': [['元素充能效率', '180~200%', 'Q「斫雷」循环刚需'], ['暴击率', '60%+', '后台闪雷需双暴'], ['暴击伤害', '130%+', '与暴击率 1:2 配比'], ['攻击力', '1600+', '直伤基础白值']],
  '达达利亚': [['攻击力', '1900+', '断流近战直伤白值'], ['暴击率', '70%+', '高频群伤需稳定暴击'], ['暴击伤害', '160%+', '与暴击率 1:2 配比'], ['元素精通', '80~150', '蒸发队补充收益']],
  '神里绫人': [['攻击力', '2000+', 'E 瞬水剑直伤白值'], ['暴击率', '70%+', '高频水剑需稳定暴击'], ['暴击伤害', '160%+', '与暴击率 1:2 配比'], ['生命值', '（顺带）', '水剑伤害也吃生命，副词条可作补充']],
  '魈': [['攻击力', '2000+', '下落攻击直伤白值'], ['暴击率', '70%+', '持续下落需稳定暴击'], ['暴击伤害', '160%+', '与暴击率 1:2 配比'], ['元素充能效率', '130%+', 'Q 循环刚需']],
  '流浪者': [['攻击力', '1900+', 'E 悬浮普攻直伤白值'], ['暴击率', '75%+', '高频普攻需稳定暴击'], ['暴击伤害', '160%+', '与暴击率 1:2 配比']],
  '刻晴': [['攻击力', '1900+', '激化队直伤白值'], ['暴击率', '70%+', '高频重击需稳定暴击'], ['暴击伤害', '160%+', '与暴击率 1:2 配比'], ['元素精通', '150~250', '激化反应补充收益']],
  '八重神子': [['攻击力', '1900+', '杀生樱后台雷伤'], ['暴击率', '65%+', '后台锁面板需双暴'], ['暴击伤害', '150%+', '与暴击率 1:2 配比'], ['元素精通', '100~200', '激化队补充收益']],
  '莱欧斯利': [['攻击力', '2000+', '拳套站场直伤白值'], ['暴击率', '55~60%', '逐影猎人 4 件套提供暴击率'], ['暴击伤害', '180%+', '套装暴击溢出后主堆爆伤']],
  '迪希雅': [['生命值', '3.5 万+', '领域减伤与协同攻击按生命结算'], ['暴击率', '60%+', '副C 输出需双暴'], ['暴击伤害', '130%+', '与暴击率 1:2 配比']],
  '托马': [['生命值', '3.0 万+', '护盾厚度按生命上限结算'], ['元素充能效率', '200%+', 'Q 循环刚需'], ['暴击率', '（非必需）', '定位盾辅，不靠自身直伤']],
  '迪奥娜': [['生命值', '3.0 万+', '护盾与治疗按生命上限结算'], ['元素充能效率', '180%+', 'Q 循环刚需'], ['暴击率', '（非必需）', '定位生存辅助']],
  '玛拉妮': [['生命值', '3.5 万+', '冲浪重击倍率按生命结算'], ['暴击率', '60%', '黑曜秘典提供暴击率'], ['暴击伤害', '180%+', '套装暴击溢出后主堆爆伤'], ['元素精通', '100~200', '蒸发反应补充']],
  '希格雯': [['生命值', '4.0 万+', '治疗与后台协同按生命结算'], ['元素充能效率', '160%+', '保证 Q 循环'], ['治疗加成', '35%+', '理之冠主词条']]
}

// 副词条优先级手工修正：个别角色机制与槽位推断不一致时用
const SUBSTAT_OVERRIDES = {
  '五郎': [['防御力%', '核心', 'E 大将旗指物按防御提供增益，纯岩队拐力核心'], ['元素充能效率', '重要', 'Q 循环刚需，建议 180~200%'], ['防御力', '可用', '固定防御作补充'], ['暴击率', '低收益', '定位岩拐，不靠自身直伤']],
  '申鹤': [['攻击力%', '核心', 'E 冰翎增伤按自身攻击力结算，攻击越高拐力越强'], ['元素充能效率', '重要', '保证 Q 循环覆盖'], ['攻击力', '可用', '固定攻击作补充'], ['暴击率', '低收益', '定位冰拐，不靠自身直伤']],
  '七七': [['攻击力%', '核心', '治疗量按攻击力结算，攻击%收益最高'], ['元素充能效率', '重要', 'Q 循环刚需，建议 160~180%'], ['攻击力', '可用', '固定攻击作补充'], ['暴击率', '低收益', '治疗量不吃双暴']],
  '琴': [['攻击力%', '核心', 'Q 领域治疗量按攻击力结算'], ['元素充能效率', '重要', '保证 Q 循环覆盖'], ['攻击力', '可用', '固定攻击作补充'], ['元素精通', '可用', '扩散反应补充收益']],
  '雷电将军': [['元素充能效率', '核心', 'Q「梦想一心」伤害随充能提升，绝缘 4 件套建议 250%+'], ['暴击率', '重要', '充能达标后的第一优先级，建议 65%+'], ['暴击伤害', '重要', '与暴击率按 1:2 配比'], ['攻击力%', '可用', '直伤部分基础白值'], ['元素精通', '低收益', '非反应队，精通收益低']],
  '枫原万叶': [['元素精通', '核心', '扩散伤害与全队元素增伤按精通结算，建议 900+'], ['元素充能效率', '重要', '保证 Q 循环覆盖，建议 160~180%'], ['攻击力%', '可用', '直伤占比低，作补充'], ['暴击率', '低收益', '扩散不吃双暴']],
  '久岐忍': [['元素精通', '核心', '超绽放伤害按精通结算，建议 900+'], ['生命值%', '重要', 'E 治疗量按生命上限结算'], ['元素充能效率', '可用', '保证 E 覆盖'], ['暴击率', '低收益', '绽放反应不吃双暴']],
  '胡桃': [['暴击率', '核心', '重击蒸发需稳定暴击，建议 70%+'], ['暴击伤害', '核心', '护摩之杖下收益最高，建议 200%+'], ['生命值%', '重要', 'E 生命转化攻击，收益远高于攻击%'], ['元素精通', '重要', '蒸发反应提供额外倍率，100~200 为宜'], ['攻击力%', '低收益', '生命转化机制下攻击%收益低']],
  '妮露': [['生命值%', '核心', '丰穰之核伤害按生命上限结算，建议 5.5 万+'], ['元素精通', '可用', '绽放反应补充收益'], ['元素充能效率', '可用', 'Q 循环够用即可'], ['暴击率', '低收益', '丰穰之核不吃双暴']]
}

// ---------------------------------------------------------------------
// 5. 组装
// ---------------------------------------------------------------------
// 毕业面板只保留「真正的目标值」：括号提示项（非必需 / 可选 / 顺带）不占位，
// 班尼特的「白值优先」转成可衡量的基础攻击力目标。
for (const [name, list] of Object.entries(PANEL_OVERRIDES)) {
  PANEL_OVERRIDES[name] = list
    .map(([label, target, note]) => {
      if (label === '攻击力' && String(target).startsWith('（')) {
        return ['基础攻击力', '800+', 'Q 加攻只按基础攻击力结算，优先选高白值武器']
      }
      if (String(target).startsWith('（')) return null
      return [label, target, note]
    })
    .filter(Boolean)
}

const SUBSTATS = {}
const PANELS = {}
const statRows = []
const panelRows = []

for (const c of CHARACTERS) {
  const p = profile(c)
  let sub = SUBSTAT_OVERRIDES[c.name]
    ? SUBSTAT_OVERRIDES[c.name].map(([name, tier, reason], i) => ({ name, tier, reason, sortOrder: i + 1 }))
    : buildSubstats(c, p)
  let panel = PANEL_OVERRIDES[c.name]
    ? PANEL_OVERRIDES[c.name].map(([label, target, note], i) => ({ label, target, note, sortOrder: i + 1 }))
    : buildPanel(c, p)

  SUBSTATS[c.name] = { scale: p.scaleName, category: p.catName, role: c.role, list: sub }
  PANELS[c.name] = { category: p.catName, role: c.role, list: panel }

  for (const x of sub) {
    statRows.push([c.name, x.name, x.tier, x.reason, x.sortOrder])
  }
  for (const x of panel) {
    panelRows.push([c.name, x.label, x.target, x.note, x.sortOrder])
  }
}

// ---------------------------------------------------------------------
// 6. 产出前端兜底数据
// ---------------------------------------------------------------------
const NOTICE = '副词条优先级与毕业面板为攻略向整理（非游戏内技能原文），依据角色主词条依赖、定位与反应机制逐人定制；目标值为常见成型口径，实际以武器、圣遗物套装与队伍配置微调。可在后台管理系统逐条修改。'

const jsLines = [
  '// ============================================================',
  '// 角色圣遗物副词条优先级 / 毕业面板（130 位角色全覆盖）',
  '// 由 gen_char_builds.mjs 生成，勿手工逐条改动',
  '// 依据 homeData.js 的 mainStats / role / summary 做机制画像后逐人定制',
  '// 数据优先来自 /api/home/char-builds（后台可维护），此文件为后端不可用时的兜底',
  '// ============================================================',
  '',
  `export const BUILD_NOTICE = ${q(NOTICE)}`,
  '',
  'export const SUBSTAT_TIERS = ["核心", "重要", "可用", "低收益"]',
  '',
  '// { 角色名: { scale, category, role, list: [{ name, tier, reason, sortOrder }] } }',
  'export const CHAR_SUBSTATS = ' + JSON.stringify(SUBSTATS, null, 2),
  '',
  '// { 角色名: { category, role, list: [{ label, target, note, sortOrder }] } }',
  'export const CHAR_PANELS = ' + JSON.stringify(PANELS, null, 2),
  ''
]
fs.writeFileSync(JS_OUT, jsLines.join('\n'), 'utf8')

// ---------------------------------------------------------------------
// 7. 产出幂等初始化 SQL
// ---------------------------------------------------------------------
const sql = [
  '-- 角色圣遗物副词条优先级 / 毕业面板（由 gen_char_builds.mjs 生成，可重复执行）',
  '-- 采用 INSERT IGNORE + 唯一键：重跑不会覆盖后台管理系统里的修改',
  '-- 数据来源：攻略向整理（非游戏内技能原文），依据角色主词条依赖与定位逐人定制',
  'USE `genshin_db`;',
  '',
  'CREATE TABLE IF NOT EXISTS `t_char_substat` (',
  '  `id` BIGINT NOT NULL AUTO_INCREMENT,',
  '  `character_name` VARCHAR(64) NOT NULL,',
  '  `stat_name` VARCHAR(64) NOT NULL,',
  '  `tier` VARCHAR(16) DEFAULT \'可用\',',
  '  `reason` VARCHAR(255) DEFAULT NULL,',
  '  `sort_order` INT DEFAULT 0,',
  '  `status` TINYINT DEFAULT 1,',
  '  PRIMARY KEY (`id`),',
  '  UNIQUE KEY `uk_cs_char_stat` (`character_name`, `stat_name`),',
  '  KEY `idx_cs_character` (`character_name`)',
  ') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;',
  '',
  'CREATE TABLE IF NOT EXISTS `t_char_panel` (',
  '  `id` BIGINT NOT NULL AUTO_INCREMENT,',
  '  `character_name` VARCHAR(64) NOT NULL,',
  '  `stat_label` VARCHAR(64) NOT NULL,',
  '  `target_value` VARCHAR(64) DEFAULT NULL,',
  '  `note` VARCHAR(255) DEFAULT NULL,',
  '  `sort_order` INT DEFAULT 0,',
  '  `status` TINYINT DEFAULT 1,',
  '  PRIMARY KEY (`id`),',
  '  UNIQUE KEY `uk_cp_char_label` (`character_name`, `stat_label`),',
  '  KEY `idx_cp_character` (`character_name`)',
  ') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;',
  '',
  '-- 兼容旧表：若此前建过缺 status 的表，手工补列后再导入即可',
  ''
]

// 按角色分组，每个角色一条 INSERT IGNORE，便于阅读与排错
const groupBy = (rows) => {
  const m = new Map()
  for (const r of rows) {
    if (!m.has(r[0])) m.set(r[0], [])
    m.get(r[0]).push(r)
  }
  return m
}
const vals = (r) => `('${esc(r[0])}','${esc(r[1])}','${esc(r[2])}','${esc(r[3])}',${r[4]},1)`

sql.push('-- ---------- 1. 副词条优先级 ----------')
for (const [, rows] of groupBy(statRows)) {
  sql.push('INSERT IGNORE INTO `t_char_substat` (`character_name`,`stat_name`,`tier`,`reason`,`sort_order`,`status`) VALUES')
  sql.push(rows.map(vals).join(',\n') + ';')
}
sql.push('')
sql.push('-- ---------- 2. 毕业面板 ----------')
for (const [, rows] of groupBy(panelRows)) {
  sql.push('INSERT IGNORE INTO `t_char_panel` (`character_name`,`stat_label`,`target_value`,`note`,`sort_order`,`status`) VALUES')
  sql.push(rows.map(vals).join(',\n') + ';')
}
sql.push('')
fs.writeFileSync(SQL_OUT, sql.join('\n'), 'utf8')

// ---------------------------------------------------------------------
// 8. 自检输出
// ---------------------------------------------------------------------
const catCount = {}
for (const c of CHARACTERS) {
  const k = profile(c).catName
  catCount[k] = (catCount[k] || 0) + 1
}
console.log('角色数:', CHARACTERS.length)
console.log('副词条条数:', statRows.length, '| 毕业面板词条数:', panelRows.length)
console.log('机制分类分布:', JSON.stringify(catCount, null, 0))
console.log('手工精确面板覆盖:', Object.keys(PANEL_OVERRIDES).length, '位 | 副词条修正:', Object.keys(SUBSTAT_OVERRIDES).length, '位')
console.log('每人副词条数区间:', Math.min(...Object.values(SUBSTATS).map(x => x.list.length)), '~', Math.max(...Object.values(SUBSTATS).map(x => x.list.length)))
console.log('每人面板词条区间:', Math.min(...Object.values(PANELS).map(x => x.list.length)), '~', Math.max(...Object.values(PANELS).map(x => x.list.length)))
console.log('输出:', JS_OUT)
console.log('输出:', SQL_OUT)
for (const n of ['胡桃', '雷电将军', '钟离', '枫原万叶', '七七', '云堇', '旅行者·冰']) {
  console.log('\n【' + n + '】' + SUBSTATS[n].category + ' / ' + SUBSTATS[n].scale)
  console.log('  副词条:', SUBSTATS[n].list.map(x => x.name + '(' + x.tier + ')').join(' > '))
  console.log('  毕业面板:', PANELS[n].list.map(x => x.label + ' ' + x.target).join(' · '))
}

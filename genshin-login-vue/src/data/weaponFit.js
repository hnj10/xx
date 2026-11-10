// -*- coding: utf-8 -*-
/**
 * 角色 × 武器 适配度计算（运行时）
 *
 * 设计原则：不落静态数据，直接以首页已加载的 /api/home/* 数据为输入，
 * 后台改武器数值 / 角色名 / 推荐关系后，详情页刷新即自动跟随，不需要重新生成。
 *
 * 评分口径（0-100，越高越优先）：
 *   1. 该角色在「角色武器推荐」中的首选 / 次选命中（最强信号）
 *   2. 武器副词条与角色定位、圣遗物主词条的契合度
 *   3. 武器被动描述与角色元素、输出方式、职能的关键词契合度
 *   4. 90 级基础攻击力白值（输出型角色更吃白值）
 *   5. 星级基准（5★ > 4★ > 3★），同星级内部仍按适配度排序
 */

const ALIAS = { '狼末': '狼的末路', '西风弓': '西风猎弓' }
const DPS_SUB = { '暴击率': 12, '暴击伤害': 12, '攻击力': 8, '物理伤害加成': 9, '元素精通': 5, '元素充能效率': 3, '生命值': 0, '防御力': 0 }
const SUBC_SUB = { '暴击率': 8, '暴击伤害': 8, '攻击力': 6, '元素充能效率': 8, '元素精通': 6, '物理伤害加成': 5, '生命值': 2, '防御力': 1 }
const SUP_SUB = { '元素充能效率': 12, '生命值': 9, '防御力': 8, '元素精通': 6, '攻击力': 2, '暴击率': 2, '暴击伤害': 2, '物理伤害加成': 0 }
const HEAL_SUB = { '生命值': 13, '元素充能效率': 10, '攻击力': 2, '元素精通': 3, '暴击率': 1, '暴击伤害': 1, '防御力': 2, '物理伤害加成': 0 }

const KEYWORDS = [
  ['普通攻击', /普攻|普通攻击/], ['重击', /重击|蓄力/], ['元素战技', /元素战技|战技|E 技能|E技能/],
  ['元素爆发', /元素爆发|爆发|Q /], ['下落攻击', /下落/], ['元素精通', /元素精通|精通/],
  ['充能', /充能|能量|元素爆发回复/], ['治疗', /治疗|回复生命|生命值恢复/],
  ['护盾', /护盾|护盾强效/], ['生命上限', /生命值上限|生命值提高|生命上限/],
  ['防御', /防御力|防御提高/], ['攻击力', /攻击力提升|攻击力提高|攻击加成/]
]

function kindOf(role = '', mainStats = '') {
  const r = role
  if (/治疗|奶|医|回复/.test(r)) return 'heal'
  if (/盾辅|护盾|生存|辅助|增伤|增攻|聚怪|挂|后台辅|冰辅|控制/.test(r)) return 'sup'
  if (/副C|后台|速切|绽放|激化辅/.test(r)) return 'subc'
  if (/主C|物伤|站场|输出/.test(r)) return 'dps'
  // 兜底：主词条偏充能/生命视为辅助
  if (/充能%|生命%|治疗%/.test(mainStats) && !/暴击/.test(mainStats)) return 'sup'
  return 'dps'
}

function subAffinity(subStat, kind, mainStats, charText) {
  const table = kind === 'heal' ? HEAL_SUB : kind === 'sup' ? SUP_SUB : kind === 'subc' ? SUBC_SUB : DPS_SUB
  let v = table[subStat] ?? 0
  // 圣遗物主词条反映角色吃什么属性，命中则额外加权
  if (/生命%/.test(mainStats) && subStat === '生命值') v += 7
  if (/防御%/.test(mainStats) && subStat === '防御力') v += 7
  if (/充能%/.test(mainStats) && subStat === '元素充能效率') v += 5
  if (/精通/.test(mainStats) && subStat === '元素精通') v += 5
  if (/攻击%/.test(mainStats) && subStat === '攻击力') v += 3
  // 反应队角色（蒸发/融化/激化/绽放）对精通需求更高
  if (/蒸发|融化|激化|绽放|感电|超导/.test(charText) && subStat === '元素精通') v += 4
  // 物理队角色对物伤词条需求更高
  if (/物伤|物理/.test(charText) && subStat === '物理伤害加成') v += 5
  return Math.min(v, 18)
}

function passiveAffinity(w, char) {
  const desc = w.desc || ''
  const charText = `${char.role || ''} ${char.talents || ''} ${char.summary || ''} ${char.artifacts || ''}`
  let score = 0
  const hits = []
  // 同元素伤害加成
  if (char.element && new RegExp(char.element + '(元素)?伤害|' + char.element + '伤').test(desc)) {
    score += 6; hits.push(`${char.element}元素伤害加成`)
  }
  // 输出方式 / 职能关键词在角色文案与被动描述中同时出现
  for (const [label, re] of KEYWORDS) {
    if (re.test(desc) && re.test(charText)) { score += 2; hits.push(label) }
  }
  // 被动描述里直接点到角色名（专武描述常见）
  if (char.name && desc.includes(char.name.replace(/·.*$/, ''))) { score += 5; hits.push('角色专属被动') }
  if (/专属|专武|完美契合/.test(desc)) { score += 3; hits.push('专属定位') }
  return { score: Math.min(score, 14), hits: hits.slice(0, 3) }
}

function baseByRarity(r) { return r === 5 ? 68 : r === 4 ? 57 : 37 }
function clampRange(v, r) {
  const range = r === 5 ? [54, 99] : r === 4 ? [40, 88] : [22, 55]
  return Math.max(range[0], Math.min(range[1], Math.round(v)))
}
export function tierOf(fit) {
  if (fit >= 90) return { key: 'S', label: '毕业' }
  if (fit >= 78) return { key: 'A', label: '优秀' }
  if (fit >= 65) return { key: 'B', label: '可用' }
  if (fit >= 50) return { key: 'C', label: '过渡' }
  return { key: 'D', label: '不推荐' }
}

/**
 * @param {string} name 角色名
 * @param {Array} weapons /api/home/weapons 数据
 * @param {Array} charWeapons /api/home/char-weapons 数据
 * @param {Array} characters /api/home/characters 数据
 */
export function buildWeaponFit(name, weapons = [], charWeapons = [], characters = []) {
  const char = characters.find(c => c.name === name) || {}
  const rec = charWeapons.find(p => p.character === name) || {}
  const best = rec.best || []
  const resolve = n => ALIAS[n] || n
  const recNames = best.map(b => resolve(b.name))
  const primary = recNames[0] || ''
  const secondary = recNames[1] || ''

  // 武器类型：用推荐武器反查（推荐武器必为角色可用类型）
  // 后台改了推荐武器名时，weaponType 为空 → 展示全部类型，页面仍不空白
  const wByName = new Map(weapons.map(w => [w.name, w]))
  let weaponType = ''
  for (const b of best) {
    const w = wByName.get(resolve(b.name))
    if (w && w.type) { weaponType = w.type; break }
  }

  const usable = weapons.filter(w => w && w.name && (!weaponType || w.type === weaponType))
  const kind = kindOf(char.role, char.mainStats)
  const charText = `${char.role || ''} ${char.talents || ''} ${char.summary || ''} ${char.artifacts || ''} ${char.mainStats || ''}`

  const cards = usable.map(w => {
    const rn = w.rarity === 5 ? 5 : w.rarity === 4 ? 4 : 3
    let score = baseByRarity(rn)
    const tags = []
    let recReason = ''
    if (w.name === primary) { score += 30; tags.push('首选推荐'); recReason = (best[0] && best[0].reason) || '' }
    else if (w.name === secondary) { score += 21; tags.push('次选推荐'); recReason = (best[1] && best[1].reason) || '' }

    const aff = subAffinity(w.subStat, kind, char.mainStats || '', charText)
    score += aff
    if (aff >= 10) tags.push('副词条契合')

    const pas = passiveAffinity(w, char)
    score += pas.score
    if (pas.hits.length) tags.push('被动契合')

    const atk = Number(w.atk90) || 0
    if (kind === 'dps' || kind === 'subc') {
      if (atk >= 674) { score += 5; tags.push('高白值') }
      else if (atk >= 608) score += 3
      else if (atk && atk <= 454) score -= 2
    } else if (atk >= 608) score += 2

    const fit = clampRange(score, rn)
    const tier = tierOf(fit)

    // 适配理由：优先用后台维护的推荐语，否则由命中信号生成
    let reason
    if (recReason) {
      reason = (w.name === primary ? '首选推荐 · ' : '次选推荐 · ') + recReason
      if (pas.hits.length) reason += `；被动契合${pas.hits.slice(0, 2).join('、')}`
    } else {
      const bits = []
      bits.push(`${w.subStat || w.stat || '该武器'}副词条${aff >= 10 ? '高度契合' : aff >= 5 ? '较为契合' : '契合度一般'}${kindLabel(kind)}需求`)
      if (pas.hits.length) bits.push(`被动覆盖${pas.hits.slice(0, 2).join('、')}`)
      if (atk) bits.push(`90级白值 ${atk}`)
      reason = bits.join('；') + '。'
    }

    return {
      name: w.name, rarity: rn, type: w.type,
      atk1: w.atk1, atk90: w.atk90, subStat: w.subStat, subValue: w.subValue,
      stat: w.stat, desc: w.desc || '',
      fit, tier: tier.key, tierLabel: tier.label,
      reason, tags, isPrimary: w.name === primary, isSecondary: w.name === secondary
    }
  })

  const byFit = (a, b) => b.fit - a.fit || (b.atk90 || 0) - (a.atk90 || 0) || a.name.localeCompare(b.name, 'zh')
  const groups = { five: [], four: [], three: [] }
  for (const r of [5, 4, 3]) {
    const arr = cards.filter(c => c.rarity === r).sort(byFit)
    arr.forEach((c, i) => { c.rank = i + 1 })
    groups[r === 5 ? 'five' : r === 4 ? 'four' : 'three'] = arr
  }
  // 全局优先级（五星优先于四星，四星优先于三星）
  let n = 0
  for (const key of ['five', 'four', 'three']) for (const c of groups[key]) { c.priority = ++n }

  return {
    name, character: char, weaponType: weaponType || '全部类型',
    role: char.role || '', element: char.element || '', rarity: char.rarity || 5,
    summary: char.summary || '', mainStats: char.mainStats || '', talents: char.talents || '',
    artifacts: char.artifacts || '',
    primary, secondary,
    recReason: best[0] ? best[0].reason : '',
    groups,
    total: cards.length,
    topFit: cards.length ? Math.max(...cards.map(c => c.fit)) : 0
  }
}

function kindLabel(kind) {
  return kind === 'heal' ? '治疗/生存' : kind === 'sup' ? '辅助/循环' : kind === 'subc' ? '副C/后台' : '输出'
}

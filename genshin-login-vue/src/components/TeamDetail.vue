<template>
  <div class="team-detail" :style="{ '--accent': guide.themeColor }">
    <header class="topbar">
      <button class="back" @click="$emit('back')">← 返回首页</button>
      <div class="brand">
        <span class="logo">队伍详情</span>
        <span class="sub">Team Composition</span>
      </div>
      <span class="crumb">{{ team.name }}</span>
    </header>

    <!-- ===== 队伍概览 ===== -->
    <section class="team-hero">
      <div class="hero-title">
        <span class="reaction-tag">{{ guide.reaction }}体系</span>
        <h1>{{ team.name }}</h1>
        <span class="core">{{ team.core }}</span>
      </div>
      <p class="hero-tip">{{ team.tip }}</p>
      <div class="resonance"><span>✦</span>{{ guide.resonance }}</div>
    </section>

    <!-- ===== 4 位成员 · 自由切换 ===== -->
    <section class="roster">
      <div class="sec-head">
        <span class="sec-tag">成员</span>
        <h2>队伍成员</h2>
        <span class="sec-count">{{ roster.length }} 位 · 点击查看该角色在本队的养成攻略</span>
      </div>
      <div class="member-row">
        <button
          v-for="(m, i) in roster"
          :key="m.name"
          class="member-card"
          :class="{ active: i === active }"
          :style="{ '--elc': eleColor(m.element) }"
          @click="select(i)"
        >
          <span class="idx">0{{ i + 1 }}</span>
          <div class="portrait">
            <img v-if="charImg(m.name)" :src="charImg(m.name)" :alt="m.name" />
            <span v-else class="ph">{{ m.name.slice(0, 1) }}</span>
            <i class="ele-dot" :style="{ background: eleColor(m.element) }"></i>
          </div>
          <div class="mc-name">{{ m.name }}</div>
          <div class="mc-role">{{ m.roleInTeam }}</div>
          <span class="mc-bar"></span>
        </button>
      </div>
      <div class="switcher">
        <button :disabled="active === 0" @click="select(active - 1)">← 上一位</button>
        <span class="switch-label">{{ active + 1 }} / {{ roster.length }}　·　可用键盘 ← → 切换</span>
        <button :disabled="active === roster.length - 1" @click="select(active + 1)">下一位 →</button>
      </div>
    </section>

    <!-- ===== 当前角色的养成攻略 + 面板推荐 ===== -->
    <transition name="pane" mode="out-in">
      <div v-if="cur" :key="cur.name" ref="paneRef" class="pane">
        <section class="char-hero">
          <div class="char-portrait">
            <img v-if="charImg(cur.name)" :src="charImg(cur.name)" :alt="cur.name" />
            <span v-else class="ph big">{{ cur.name.slice(0, 1) }}</span>
          </div>
          <div class="char-info">
            <div class="char-title">
              <i class="ele-dot" :style="{ background: eleColor(cur.element) }"></i>
              <h2>{{ cur.name }}</h2>
              <span class="stars" :class="'r' + cur.rarity">{{ star(cur.rarity) }}</span>
              <span class="ele-tag">{{ cur.element }}元素</span>
            </div>
            <p class="role-badge">{{ cur.roleInTeam }}</p>
            <p class="duty"><span class="k">队内职责</span>{{ cur.duty }}</p>
            <p class="char-summary">{{ cur.summary }}</p>
            <div class="quick">
              <div><span class="k">天赋优先级</span><span class="v">{{ cur.talents }}</span></div>
              <div><span class="k">圣遗物主词条</span><span class="v">{{ cur.mainStats }}</span></div>
            </div>
          </div>
        </section>

        <div class="two-col">
          <!-- 面板推荐 -->
          <section class="sec">
            <div class="sec-head">
              <span class="sec-tag c-gold">面板</span>
              <h2>面板推荐</h2>
              <span class="sec-count">毕业参考阈值</span>
            </div>
            <div class="panel-list">
              <div v-for="(p, i) in cur.panel" :key="i" class="panel-row">
                <span class="pk">{{ p.label }}</span>
                <b class="pv">{{ p.value }}</b>
                <small v-if="p.hint" class="phint">{{ p.hint }}</small>
              </div>
            </div>
            <p class="notice">面板为养成参考阈值，实际以角色吃攻击 / 生命 / 防御与武器副词条微调。</p>
          </section>

          <!-- 推荐武器 -->
          <section class="sec">
            <div class="sec-head">
              <span class="sec-tag c-purple">武器</span>
              <h2>本队推荐武器</h2>
              <span class="sec-count">{{ 1 + cur.altWeapons.length }} 把</span>
            </div>
            <div class="weapon-block">
              <div class="w-head">
                <span class="w-name">{{ cur.weapon.displayName }}</span>
                <span class="stars" :class="'r' + cur.weapon.rarity">{{ star(cur.weapon.rarity) }}</span>
              </div>
              <div v-if="cur.weapon.reason" class="w-reason">{{ cur.weapon.reason }}</div>
              <div v-if="cur.weapon.type" class="w-meta">{{ cur.weapon.type }} · {{ cur.weapon.stat }}</div>
              <div v-if="cur.weapon.atk90" class="w90">
                <div class="w90-line">
                  <span class="w90-badge">90级</span><span class="w90-k">基础攻击力</span><b>{{ cur.weapon.atk90 }}</b>
                  <span class="w90-gain">1级 {{ cur.weapon.atk1 }} → 提升 +{{ cur.weapon.atk90 - cur.weapon.atk1 }}</span>
                </div>
                <div class="w90-line"><span class="w90-k">副词条提升</span><b class="sub">{{ cur.weapon.subStat }} +{{ cur.weapon.subValue }}</b></div>
              </div>
              <p v-if="cur.weapon.desc" class="w-desc">{{ cur.weapon.desc }}</p>
            </div>
            <div v-for="a in cur.altWeapons" :key="a.name" class="alt-weapon">
              <span class="alt-name">{{ a.displayName }}</span>
              <span class="stars sm" :class="'r' + a.rarity">{{ star(a.rarity) }}</span>
              <span class="alt-reason">{{ a.reason }}</span>
              <span v-if="a.atk90" class="alt-stat">90级 {{ a.atk90 }} · {{ a.subStat }} +{{ a.subValue }}</span>
            </div>
          </section>
        </div>

        <!-- 圣遗物 -->
        <section class="sec">
          <div class="sec-head">
            <span class="sec-tag c-green">圣遗物</span>
            <h2>推荐套装与主词条</h2>
            <span class="sec-count">{{ cur.artifact.raw || cur.artifact.name }}</span>
          </div>
          <div class="art-block">
            <div class="art-img" :style="{ '--ac': cur.artifact.themeColor }">
              <img v-if="cur.artifact.image" :src="cur.artifact.image" :alt="cur.artifact.name" />
              <span v-else class="ph">{{ cur.artifact.name.slice(0, 1) }}</span>
            </div>
            <div class="art-text">
              <h3>{{ cur.artifact.name }}<small v-if="cur.artifact.flavor"> · {{ cur.artifact.flavor }}</small></h3>
              <div v-if="cur.artifact.twoPiece" class="art-line"><span class="badge">2件</span>{{ cur.artifact.twoPiece }}</div>
              <div v-if="cur.artifact.fourPiece" class="art-line"><span class="badge">4件</span>{{ cur.artifact.fourPiece }}</div>
              <div v-if="!cur.artifact.twoPiece && !cur.artifact.fourPiece" class="art-line empty">套装效果以游戏内描述为准</div>
              <div class="art-main"><span class="k">主词条</span>{{ cur.mainStats }}</div>
            </div>
          </div>
        </section>

        <!-- 输出循环 -->
        <section class="sec">
          <div class="sec-head">
            <span class="sec-tag c-sky">循环</span>
            <h2>本队输出循环</h2>
            <span class="sec-count">高亮为 {{ cur.name }} 的操作</span>
          </div>
          <div class="rotation">
            <div
              v-for="(s, i) in guide.rotation"
              :key="i"
              class="rot-step"
              :class="{ mine: cur.stepMine && cur.stepMine[i] }"
            >
              <span class="rot-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="rot-text">{{ s.text }}</span>
              <span v-if="cur.stepMine && cur.stepMine[i]" class="mine-tag">{{ cur.name }}</span>
              <span v-else-if="s.owners && s.owners.length" class="owner-tag">{{ s.owners.join('、') }}</span>
            </div>
          </div>
        </section>

        <!-- 养成攻略 -->
        <section class="sec guide-sec">
          <div class="sec-head">
            <span class="sec-tag c-red">攻略</span>
            <h2>{{ cur.name }} 在「{{ team.name }}」中的养成攻略</h2>
          </div>
          <div v-if="cur.mySteps && cur.mySteps.length" class="my-steps">
            <span class="k">本队需要你做的事</span>
            <span v-for="(s, i) in cur.mySteps" :key="i" class="step-chip">{{ s }}</span>
          </div>
          <ul class="notes">
            <li v-for="(n, i) in cur.notes" :key="i">{{ n }}</li>
          </ul>
        </section>
      </div>
    </transition>

    <footer class="foot">
      点击上方成员卡片，或使用键盘 ← → 在 4 位角色间自由切换 · 面板与攻略随队内定位联动
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { NATIONS, svgFull } from '../data/nations.js'
import { ELEMENT_NATION, CHARACTERS, CHAR_WEAPONS, WEAPONS } from '../data/homeData.js'
import { TEAM_GUIDES } from '../data/teamGuides.js'
import { charImg } from '../data/imageMap.js'

const props = defineProps({
  team: { type: Object, required: true }
})
defineEmits(['back'])

const WEAPON_ALIAS = { '狼末': '狼的末路', '西风弓': '西风猎弓' }
const active = ref(0)
const paneRef = ref(null)

// 后端队伍数据（可在后台改名/改成员）优先；找不到对应攻略时按本地数据现算，保证不空白
const REACTION_COLORS = {
  '蒸发': '#ff8a5b', '融化': '#ff6f91', '激化': '#8fd14f', '燃烧': '#ff9a3c',
  '绽放': '#7bd88f', '月绽放': '#9be36a', '月感电': '#a78bfa', '月结晶': '#e3b873',
  '永冻': '#7fd3f5', '纯色': '#6fb8f0', '结晶': '#e0c078', '物理': '#cbd5e1',
  '扩散': '#7fe3c0', '多元素': '#c9a7f5', '混伤': '#f3a06a',
  '星超导': '#b39bff', '星扩散': '#8fe0d8',
  '下落': '#9ec5f0', '爆发': '#ff7a59', '直伤': '#7fb2e8', '常规': '#6fd6c0'
}
const REACTION_RULES = [
  ['月绽放', /月绽放/], ['月感电', /月感电/], ['月结晶', /月结晶/],
  ['星超导', /星超导/], ['星扩散', /星扩散/], ['激化', /激化/],
  ['燃烧', /燃烧/], ['绽放', /绽放/], ['永冻', /永冻|冻结/],
  ['蒸发', /蒸发/], ['融化', /融化/], ['纯色', /纯火|纯水|纯色/],
  ['结晶', /结晶/], ['物理', /物理/], ['扩散', /扩散/],
  ['多元素', /多元素/], ['混伤', /混伤/], ['下落', /下落/],
  ['爆发', /爆发|一刀|核弹|收割/], ['直伤', /站场.*伤|风伤|冰伤|雷伤|水伤|岩伤|火伤/]
]
function guessReaction(t) {
  const text = `${t.name || ''} ${t.core || ''} ${t.tip || ''}`
  for (const [label, re] of REACTION_RULES) if (re.test(text)) return label
  return '常规'
}
function guessResonance(members) {
  const c = {}
  for (const m of members || []) if (m.element) c[m.element] = (c[m.element] || 0) + 1
  const dup = Object.entries(c).filter(([, n]) => n >= 2).map(([e]) => e)
  return dup.length
    ? `${dup.join('、')}元素共鸣 · 同元素成员共享充能/属性加成，按共鸣调整词条`
    : '四元素混编 · 无元素共鸣，充能与附着顺序需自行规划'
}
function fallbackGuide(t) {
  const reaction = guessReaction(t)
  const steps = (t.tip || '').split(/→|->/).flatMap(s => s.split(/[，,]/)).map(s => s.trim()).filter(Boolean)
  return {
    name: t.name, core: t.core || '', tip: t.tip || '', reaction,
    resonance: guessResonance(t.members),
    themeColor: REACTION_COLORS[reaction] || '#6fd6c0',
    rotation: steps.map(text => ({ text, owners: [] })),
    members: []
  }
}
const guide = computed(() => TEAM_GUIDES[props.team.name] || fallbackGuide(props.team))

// 同名角色在其他队伍里的攻略索引：后台改动成员后仍可给出完整养成资料
const MEMBER_INDEX = {}
for (const g of Object.values(TEAM_GUIDES)) {
  for (const m of g.members || []) if (!MEMBER_INDEX[m.name]) MEMBER_INDEX[m.name] = m
}

function fallbackMember(m, i) {
  const ref = MEMBER_INDEX[m.name]
  const shell = {
    name: m.name,
    element: m.element || ref?.element || '？',
    rarity: ref?.rarity || 5,
    roleInTeam: `${ref?.roleInTeam?.split(' · ')[0] || '队伍成员'} · ${guide.value.reaction}体系`,
    duty: `在「${props.team.name}」中${ref?.duty || '配合队伍输出循环'}`,
    notes: [
      ...(ref?.notes || []).slice(0, 3),
      `本队核心思路：${props.team.core || props.team.tip || '按输出循环配合'}`,
      `队伍共鸣：${guide.value.resonance}`
    ],
    mySteps: [],
    stepMine: guide.value.rotation.map(() => false)
  }
  // 该角色在其他队伍已有完整攻略：复用面板 / 武器 / 圣遗物，仅替换队内语境
  if (ref) return { ...ref, ...shell }

  // 完全不在图鉴里的新角色：从本地基础数据兜底
  const c = CHARACTERS.find(x => x.name === m.name) || {}
  const b = (CHAR_WEAPONS.find(x => x.character === m.name)?.best || [])[0] || {}
  const real = WEAPON_ALIAS[b.name] || b.name
  const w = WEAPONS.find(x => x.name === real) || {}
  const artName = (c.artifacts || '').replace(/\s*\d\s*件套.*$/, '').trim()
  return {
    ...shell,
    roleInTeam: `${c.role || ref?.roleInTeam?.split(' · ')[0] || '队伍成员'} · ${guide.value.reaction}体系`,
    summary: c.summary || '',
    talents: c.talents || '优先升级主要输出技能',
    mainStats: c.mainStats || '按主属性与元素伤配置时之沙 / 空之杯 / 理之冠',
    weapon: {
      name: real, displayName: b.name || '暂缺', rarity: b.rarity || w.rarity || 5,
      reason: b.reason || '', type: w.type || '', stat: w.stat || '', desc: w.desc || '',
      atk1: w.atk1 ?? null, atk90: w.atk90 ?? null,
      subStat: w.subStat || w.stat || '', subValue: w.subValue || ''
    },
    altWeapons: [],
    artifact: { raw: c.artifacts || '', name: artName || '待补充', twoPiece: '', fourPiece: '', flavor: '', image: '', themeColor: '#8fa2c7' },
    panel: [
      { label: '暴击率 / 暴击伤害', value: '65% / 140%', hint: '通用双暴参考配比' },
      { label: '元素充能效率', value: '160% – 200%', hint: '按队伍循环需求调整' },
      { label: '主属性', value: '按角色吃攻击 / 生命 / 防御', hint: '优先堆对应主属性' }
    ],
  }
}

const roster = computed(() => {
  const gm = guide.value.members || []
  return (props.team.members || []).map((m, i) => gm.find(x => x.name === m.name) || fallbackMember(m, i))
})
const cur = computed(() => roster.value[active.value] || null)

function select(i) {
  if (i < 0 || i >= roster.value.length) return
  active.value = i
  nextTick(() => {
    const sc = document.querySelector('.home')
    const pane = paneRef.value
    if (!sc || !pane) return
    const top = pane.getBoundingClientRect().top - sc.getBoundingClientRect().top + sc.scrollTop
    sc.scrollTo({ top: Math.max(0, top - 84), behavior: 'smooth' })
  })
}

function onKey(e) {
  if (e.key === 'ArrowLeft') select(active.value - 1)
  else if (e.key === 'ArrowRight') select(active.value + 1)
}
onMounted(() => {
  window.addEventListener('keydown', onKey)
  nextTick(() => document.querySelector('.home')?.scrollTo({ top: 0 }))
})
onUnmounted(() => window.removeEventListener('keydown', onKey))

function star(n) { return '★'.repeat(Number(n) || 0) }
function eleNation(element) { return NATIONS.find(n => n.name === ELEMENT_NATION[element]) || NATIONS[0] }
function eleColor(element) { return eleNation(element).hex }
</script>

<style scoped>
.team-detail {
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding-bottom: 24px;
}
.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 18px;
  margin: 12px 0 18px;
  border-radius: 16px;
  background: linear-gradient(160deg, rgba(20, 28, 52, 0.9), rgba(10, 14, 30, 0.86));
  backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.45);
}
.back {
  padding: 8px 16px;
  border-radius: 10px;
  border: 1px solid rgba(160, 200, 255, 0.35);
  background: rgba(80, 130, 220, 0.16);
  color: #dce7ff;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.back:hover { background: rgba(80, 130, 220, 0.34); }
.brand { display: flex; align-items: baseline; gap: 10px; }
.logo { font-size: 18px; font-weight: 700; letter-spacing: 3px; color: #e9eefb; }
.sub { font-size: 11px; letter-spacing: 2px; color: #8fa2c7; }
.crumb { font-size: 13px; color: var(--accent); font-weight: 600; }

/* ===== 队伍概览 ===== */
.team-hero {
  position: relative;
  overflow: hidden;
  padding: 22px 26px 20px;
  border-radius: 18px;
  background: linear-gradient(135deg, color-mix(in srgb, var(--accent) 22%, #101832), rgba(12, 18, 38, 0.95));
  border: 1px solid color-mix(in srgb, var(--accent) 42%, transparent);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.36);
}
.team-hero::after {
  content: '';
  position: absolute;
  right: -60px; top: -80px;
  width: 260px; height: 260px;
  border-radius: 50%;
  background: radial-gradient(circle, color-mix(in srgb, var(--accent) 26%, transparent), transparent 70%);
  pointer-events: none;
}
.hero-title { display: flex; align-items: center; flex-wrap: wrap; gap: 12px; position: relative; z-index: 1; }
.hero-title h1 { margin: 0; font-size: 27px; letter-spacing: 2px; color: #f2f6ff; }
.reaction-tag {
  padding: 4px 12px; border-radius: 999px; font-size: 12px; font-weight: 700;
  color: #0b1020; background: var(--accent); letter-spacing: 1px;
}
.core { font-size: 13px; color: #cbd8f2; letter-spacing: 1px; }
.hero-tip { position: relative; z-index: 1; margin: 14px 0 12px; font-size: 13px; line-height: 1.8; color: #dbe5fa; }
.resonance {
  position: relative; z-index: 1; display: inline-flex; align-items: center; gap: 8px;
  padding: 7px 14px; border-radius: 10px; font-size: 12px; color: #f6c35b;
  background: rgba(246, 195, 91, 0.09); border: 1px solid rgba(246, 195, 91, 0.22);
}
.resonance span { font-size: 14px; }

/* ===== 通用区块 ===== */
.sec { margin-top: 26px; }
.sec-head { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; flex-wrap: wrap; }
.sec-head h2 { margin: 0; font-size: 18px; color: #eaf0ff; letter-spacing: 1px; }
.sec-tag {
  padding: 3px 10px; border-radius: 7px; font-size: 11px; font-weight: 700; letter-spacing: 1px;
  color: #0b1020; background: var(--accent);
}
.sec-tag.c-gold { background: #f6c35b; }
.sec-tag.c-purple { background: #a781e0; }
.sec-tag.c-green { background: #6fd6c0; }
.sec-tag.c-sky { background: #4ec6f0; }
.sec-tag.c-red { background: #ff7a59; }
.sec-count { font-size: 12px; color: #8fa2c7; margin-left: auto; }

/* ===== 成员卡片 ===== */
.member-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
.member-card {
  position: relative; overflow: hidden; cursor: pointer; text-align: center;
  padding: 14px 10px 16px; border-radius: 16px;
  background: linear-gradient(165deg, rgba(24, 33, 60, 0.9), rgba(12, 18, 38, 0.92));
  border: 1px solid rgba(160, 195, 255, 0.16);
  color: #dfe8fb; transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
}
.member-card:hover { transform: translateY(-4px); border-color: var(--elc); }
.member-card.active {
  border-color: var(--accent);
  box-shadow: 0 10px 30px color-mix(in srgb, var(--accent) 22%, transparent), inset 0 0 0 1px color-mix(in srgb, var(--accent) 35%, transparent);
  transform: translateY(-4px);
}
.idx { position: absolute; left: 10px; top: 9px; font-size: 11px; letter-spacing: 1px; color: #6a7ea6; }
.portrait {
  position: relative; width: 92px; height: 92px; margin: 6px auto 10px; border-radius: 14px;
  overflow: hidden; background: linear-gradient(160deg, color-mix(in srgb, var(--elc) 30%, #16203c), #0c1226);
  border: 1px solid color-mix(in srgb, var(--elc) 45%, transparent);
}
.portrait img { width: 100%; height: 100%; object-fit: cover; display: block; }
.portrait .ph { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; font-size: 34px; color: #dfe8fb; }
.ele-dot {
  position: absolute; right: 6px; bottom: 6px; width: 12px; height: 12px; border-radius: 50%;
  border: 2px solid rgba(10, 14, 30, 0.8); box-shadow: 0 0 8px currentColor;
}
.mc-name { font-size: 16px; font-weight: 700; color: #f2f6ff; letter-spacing: 1px; }
.mc-role { margin-top: 5px; font-size: 11px; color: #9fb0d8; line-height: 1.5; min-height: 32px; }
.mc-bar { display: block; height: 3px; width: 0; margin: 8px auto 0; border-radius: 999px; background: var(--accent); transition: width 0.25s ease; }
.member-card.active .mc-bar { width: 46px; }
.switcher { display: flex; align-items: center; justify-content: center; gap: 18px; margin-top: 16px; }
.switcher button {
  padding: 7px 16px; border-radius: 9px; font-size: 12px; cursor: pointer;
  border: 1px solid rgba(160, 195, 255, 0.28); background: rgba(80, 130, 220, 0.12); color: #dce7ff;
}
.switcher button:hover:not(:disabled) { background: rgba(80, 130, 220, 0.3); }
.switcher button:disabled { opacity: 0.35; cursor: not-allowed; }
.switch-label { font-size: 12px; color: #8fa2c7; letter-spacing: 1px; }

/* ===== 当前角色 ===== */
.pane { margin-top: 26px; }
.pane-enter-active, .pane-leave-active { transition: opacity 0.22s ease, transform 0.22s ease; }
.pane-enter-from { opacity: 0; transform: translateY(14px); }
.pane-leave-to { opacity: 0; transform: translateY(-8px); }
.char-hero {
  display: flex; gap: 22px; padding: 20px 24px; border-radius: 18px;
  background: linear-gradient(150deg, rgba(24, 33, 60, 0.92), rgba(11, 16, 34, 0.94));
  border: 1px solid color-mix(in srgb, var(--accent) 32%, transparent);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.32);
}
.char-portrait {
  position: relative; flex: 0 0 150px; width: 150px; height: 176px; border-radius: 14px; overflow: hidden;
  background: linear-gradient(165deg, color-mix(in srgb, var(--accent) 26%, #16203c), #0c1226);
  border: 1px solid color-mix(in srgb, var(--accent) 40%, transparent);
}
.char-portrait img { width: 100%; height: 100%; object-fit: cover; display: block; }
.char-portrait .ph { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; font-size: 62px; color: #e9eefb; }
.char-info { flex: 1; min-width: 0; }
.char-title { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.char-title h2 { margin: 0; font-size: 25px; color: #f2f6ff; letter-spacing: 2px; }
.char-title .ele-dot { position: static; width: 13px; height: 13px; border: none; }
.stars { font-size: 13px; letter-spacing: 1px; color: #f6c35b; }
.stars.sm { font-size: 11px; }
.stars.r4 { color: #a781e0; }
.stars.r3 { color: #6fb8f0; }
.ele-tag { padding: 2px 9px; border-radius: 999px; font-size: 11px; color: #bcd0f5; background: rgba(120, 160, 230, 0.14); }
.role-badge {
  display: inline-block; margin: 10px 0 0; padding: 4px 12px; border-radius: 8px;
  font-size: 12px; font-weight: 700; color: #0b1020; background: var(--accent);
}
.duty { margin: 12px 0 0; font-size: 13px; line-height: 1.7; color: #dbe5fa; }
.duty .k, .quick .k, .art-main .k, .my-steps .k {
  display: inline-block; margin-right: 10px; padding: 2px 8px; border-radius: 6px;
  font-size: 11px; color: var(--accent); background: color-mix(in srgb, var(--accent) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--accent) 26%, transparent);
}
.char-summary { margin: 8px 0 0; font-size: 12px; line-height: 1.7; color: #9fb0d8; }
.quick { display: grid; grid-template-columns: 1fr 1fr; gap: 10px 18px; margin-top: 14px; }
.quick > div { font-size: 12px; line-height: 1.6; }
.quick .v { color: #dbe5fa; }

.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.two-col .sec { margin-top: 20px; }
.panel-list { display: grid; gap: 9px; }
.panel-row {
  padding: 11px 14px; border-radius: 11px;
  background: rgba(246, 195, 91, 0.06); border: 1px solid rgba(246, 195, 91, 0.18);
}
.pk { display: block; font-size: 11px; color: #9fb0d8; letter-spacing: 0.5px; }
.pv { display: inline-block; margin-top: 4px; font-size: 17px; font-weight: 700; color: #f6c35b; letter-spacing: 0.5px; }
.phint { display: block; margin-top: 3px; font-size: 11px; color: #8092b6; line-height: 1.5; }
.notice { margin: 10px 0 0; font-size: 11px; color: #7f92b8; line-height: 1.6; }

.weapon-block { padding: 14px 16px; border-radius: 13px; background: rgba(167, 129, 224, 0.07); border: 1px solid rgba(167, 129, 224, 0.22); }
.w-head { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.w-name { font-size: 16px; font-weight: 700; color: #f2f6ff; }
.w-reason { margin-top: 6px; font-size: 12px; color: #cbb6ee; }
.w-meta { margin-top: 6px; font-size: 11.5px; color: #9fb0d8; }
.w90 { margin-top: 10px; padding: 9px 11px; border-radius: 10px; background: rgba(246, 195, 91, 0.08); border: 1px solid rgba(246, 195, 91, 0.24); }
.w90-line { display: flex; align-items: baseline; flex-wrap: wrap; gap: 6px; font-size: 11.5px; line-height: 1.8; }
.w90-line + .w90-line { margin-top: 2px; }
.w90-k { color: #8fa2c7; flex-shrink: 0; }
.w90-line b { color: #f6c35b; font-size: 16px; font-weight: 700; }
.w90-line b.sub { color: #6fd6c0; font-size: 13px; }
.w90-gain { color: #8092b6; }
.w90-badge { display: inline-block; padding: 1px 7px; border-radius: 999px; font-size: 10px; font-weight: 700; color: #0b1020; background: #f6c35b; }
.w-desc { margin: 9px 0 0; font-size: 11.5px; line-height: 1.65; color: #9fb0d8; }
.alt-weapon { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-top: 9px; padding: 9px 12px; border-radius: 10px; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(160, 195, 255, 0.12); font-size: 11.5px; }
.alt-name { font-weight: 700; color: #dbe5fa; }
.alt-reason { color: #9fb0d8; }
.alt-stat { margin-left: auto; color: #6fd6c0; }

.art-block { display: flex; gap: 18px; padding: 16px; border-radius: 14px; background: rgba(111, 214, 192, 0.06); border: 1px solid rgba(111, 214, 192, 0.2); }
.art-img { flex: 0 0 116px; width: 116px; height: 116px; border-radius: 12px; overflow: hidden; background: linear-gradient(160deg, color-mix(in srgb, var(--ac) 32%, #16203c), #0c1226); border: 1px solid color-mix(in srgb, var(--ac) 45%, transparent); }
.art-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
.art-img .ph { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; font-size: 44px; color: #e9eefb; }
.art-text { flex: 1; min-width: 0; }
.art-text h3 { margin: 2px 0 12px; font-size: 16px; color: #f2f6ff; }
.art-text h3 small { font-size: 11px; font-weight: 400; color: #8fa2c7; }
.art-line { display: flex; align-items: flex-start; gap: 9px; font-size: 12px; line-height: 1.7; color: #c9d7f0; margin-bottom: 7px; }
.art-line.empty { color: #7f92b8; }
.badge { flex: 0 0 auto; padding: 1px 8px; border-radius: 6px; font-size: 10px; font-weight: 700; color: #0b1020; background: #6fd6c0; }
.art-main { margin-top: 10px; padding-top: 10px; border-top: 1px dashed rgba(180, 205, 255, 0.18); font-size: 12px; color: #dbe5fa; line-height: 1.7; }

.rotation { display: grid; gap: 8px; }
.rot-step { display: flex; align-items: center; gap: 12px; padding: 11px 14px; border-radius: 10px; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(160, 195, 255, 0.12); font-size: 12.5px; color: #a9badb; line-height: 1.6; }
.rot-step.mine { background: color-mix(in srgb, var(--accent) 12%, transparent); border-color: color-mix(in srgb, var(--accent) 42%, transparent); color: #f2f6ff; }
.rot-num { flex: 0 0 auto; font-size: 11px; font-weight: 700; letter-spacing: 1px; color: #6a7ea6; }
.rot-step.mine .rot-num { color: var(--accent); }
.rot-text { flex: 1; }
.mine-tag, .owner-tag { flex: 0 0 auto; padding: 2px 9px; border-radius: 999px; font-size: 10px; }
.mine-tag { color: #0b1020; background: var(--accent); font-weight: 700; }
.owner-tag { color: #8fa2c7; background: rgba(160, 195, 255, 0.1); }

.guide-sec .notes { margin: 0; padding: 0; list-style: none; display: grid; gap: 9px; }
.guide-sec .notes li { position: relative; padding: 10px 14px 10px 32px; border-radius: 10px; background: rgba(255, 122, 89, 0.06); border: 1px solid rgba(255, 122, 89, 0.16); font-size: 12.5px; line-height: 1.7; color: #dbe5fa; }
.guide-sec .notes li::before { content: '▸'; position: absolute; left: 14px; top: 10px; color: var(--accent); font-weight: 700; }
.my-steps { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 14px; }
.my-steps .step-chip { padding: 5px 11px; border-radius: 8px; font-size: 11.5px; color: #eaf0ff; background: color-mix(in srgb, var(--accent) 14%, transparent); border: 1px solid color-mix(in srgb, var(--accent) 32%, transparent); }
.foot { margin-top: 32px; text-align: center; font-size: 11.5px; letter-spacing: 1px; color: #6a7ea6; }

@media (max-width: 900px) {
  .member-row { grid-template-columns: repeat(2, 1fr); }
  .two-col { grid-template-columns: 1fr; }
  .char-hero { flex-direction: column; }
  .char-portrait { flex: none; width: 130px; height: 150px; }
  .quick { grid-template-columns: 1fr; }
}
</style>

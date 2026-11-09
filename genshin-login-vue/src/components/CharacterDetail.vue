<template>
  <div class="detail">
    <header class="topbar">
      <button class="back" @click="$emit('back')">← 返回首页</button>
      <div class="brand">
        <span class="logo">角色详情</span>
        <span class="sub">Character Archive</span>
      </div>
      <span class="crumb">{{ name }}</span>
    </header>

    <div v-if="loading" class="state">正在整理养成资料…</div>

    <template v-else-if="detail && detail.character">
      <!-- ===== 角色概览 ===== -->
      <section class="hero-card">
        <img v-if="charImg(detail.character.name)" class="hero-avatar" :src="charImg(detail.character.name)" :alt="detail.character.name" />
        <div class="hero-info">
          <div class="hero-title">
            <span class="ele-dot" :style="{ background: eleColor(detail.character.element) }" v-html="eleSvg(detail.character.element)"></span>
            <h1>{{ detail.character.name }}</h1>
            <span class="stars" :class="'r' + detail.character.rarity">{{ star(detail.character.rarity) }}</span>
            <span class="ele-tag">{{ detail.character.element }}元素</span>
          </div>
          <p class="role">定位：{{ detail.character.role }}</p>
          <p class="summary">{{ detail.character.summary }}</p>
          <div class="quick">
            <div><span class="k">天赋优先级</span><span class="v">{{ detail.character.talents }}</span></div>
            <div><span class="k">推荐圣遗物</span><span class="v">{{ detail.character.artifacts }}</span></div>
            <div><span class="k">主词条</span><span class="v">{{ detail.character.mainStats }}</span></div>
          </div>
        </div>
      </section>

      <!-- ===== 养成消耗总览 ===== -->
      <section v-if="detail.material" class="sec">
        <div class="sec-head">
          <span class="sec-tag c-green">养成</span>
          <h2>升级与突破消耗</h2>
          <span class="sec-count">1 → 90 级</span>
        </div>
        <div class="stat-grid">
          <div class="stat">
            <span class="num">{{ detail.material.summary.books }}</span>
            <span class="lbl">大英雄的经验（本）</span>
          </div>
          <div class="stat">
            <span class="num">{{ wan(detail.material.summary.moraTotal) }}</span>
            <span class="lbl">摩拉合计（万）</span>
          </div>
          <div class="stat">
            <span class="num">{{ wan(detail.material.summary.moraLevel) }}</span>
            <span class="lbl">升级摩拉（万）</span>
          </div>
          <div class="stat">
            <span class="num">{{ wan(detail.material.summary.moraAscension) }}</span>
            <span class="lbl">突破摩拉（万）</span>
          </div>
        </div>
        <p class="notice">提示：{{ detail.notice || MATERIAL_NOTICE }}</p>
      </section>

      <!-- ===== 突破材料汇总 ===== -->
      <section v-if="summaryGroups.length" class="sec">
        <div class="sec-head">
          <span class="sec-tag c-gold">材料</span>
          <h2>全部突破材料汇总</h2>
          <span class="sec-count">{{ summaryGroups.length }} 类</span>
        </div>
        <div class="mat-groups">
          <div v-for="g in summaryGroups" :key="g.category" class="mat-group">
            <h3>{{ g.category }}</h3>
            <div v-for="it in g.items" :key="it.name" class="mat-item">
              <span class="mn">{{ it.name }}</span>
              <b>× {{ it.count }}</b>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== 逐阶段突破 ===== -->
      <section v-if="stagesWithItems.length" class="sec">
        <div class="sec-head">
          <span class="sec-tag c-sky">阶段</span>
          <h2>逐阶段突破消耗</h2>
          <span class="sec-count">{{ stagesWithItems.length }} 次突破</span>
        </div>
        <div class="stages">
          <div v-for="s in stagesWithItems" :key="s.stage" class="stage">
            <div class="stage-head">
              <span class="lv">突破至 {{ s.level }} 级</span>
              <span class="mora">摩拉 {{ fmt(s.mora) }}</span>
            </div>
            <div class="chips">
              <span v-for="it in s.items" :key="it.name" class="chip">{{ it.name }} ×{{ it.count }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== 武器推荐与养成 ===== -->
      <section class="sec">
        <div class="sec-head">
          <span class="sec-tag c-purple">武器</span>
          <h2>武器推荐与养成</h2>
          <span class="sec-count">{{ detail.weapons.length }} 把</span>
        </div>
        <div v-if="!detail.weapons.length" class="empty">暂无该角色的武器推荐数据</div>
        <div v-for="w in detail.weapons" :key="w.name" class="weapon-block">
          <div class="w-head">
            <span class="w-name">{{ w.name }}</span>
            <span class="stars" :class="'r' + (w.rarity || 5)">{{ star(w.rarity || 5) }}</span>
            <span v-if="w.reason" class="reason">{{ w.reason }}</span>
          </div>
          <div v-if="w.weapon" class="w-info">
            <span class="w-meta">{{ w.weapon.type }} · {{ w.weapon.stat }}</span>
            <p>{{ w.weapon.desc }}</p>
            <div v-if="w.weapon.users && w.weapon.users.length" class="users">
              <span class="k">适配角色</span>
              <span v-for="u in w.weapon.users" :key="u" class="chip sm">{{ u }}</span>
            </div>
          </div>
          <div v-if="w.material" class="w-mat">
            <div class="w-mat-head">
              <span class="k">精锻用魔矿</span><b>× {{ w.material.summary.ore }}</b>
              <span class="k">摩拉合计</span><b>{{ wan(w.material.summary.moraTotal) }} 万</b>
            </div>
            <div class="chips">
              <span v-for="it in stageZero(w.material)" :key="it.name" class="chip">{{ it.name }} ×{{ it.count }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== 相关队伍推荐 ===== -->
      <section class="sec">
        <div class="sec-head">
          <span class="sec-tag c-red">配队</span>
          <h2>相关队伍推荐</h2>
          <span class="sec-count">{{ detail.teams.length }} 套</span>
        </div>
        <div v-if="!detail.teams.length" class="empty">暂无包含该角色的队伍推荐</div>
        <div v-for="t in detail.teams" :key="t.name" class="team-block">
          <div class="t-head"><b>{{ t.name }}</b><span class="core">{{ t.core }}</span></div>
          <div class="members">
            <span v-for="m in t.members" :key="m.name" class="member" :class="{ me: m.name === name }">{{ m.name }}</span>
          </div>
          <p class="tip">{{ t.tip }}</p>
        </div>
      </section>
    </template>

    <div v-else class="state">没有找到「{{ name }}」的养成资料</div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { NATIONS, svgFull } from '../data/nations.js'
import { ELEMENT_NATION, CHARACTERS, CHAR_WEAPONS, WEAPONS, TEAMS } from '../data/homeData.js'
import { CHARACTER_MATERIALS, WEAPON_MATERIALS, MATERIAL_NOTICE } from '../data/materialsData.js'
import { charImg } from '../data/imageMap.js'

const props = defineProps({
  name: { type: String, required: true }
})
defineEmits(['back'])

const API = '/api'
const loading = ref(true)
const detail = ref(null)

// 后端接口不可用时的本地聚合，形状与 CharacterDetailVO 完全一致
function localDetail(name) {
  const recommends = (CHAR_WEAPONS.find((p) => p.character === name)?.best || []).map((b) => ({
    name: b.name,
    rarity: b.rarity,
    reason: b.reason,
    weapon: WEAPONS.find((w) => w.name === b.name) || null,
    material: WEAPON_MATERIALS[b.name] || null
  }))
  return {
    character: CHARACTERS.find((c) => c.name === name) || null,
    material: CHARACTER_MATERIALS[name] || null,
    weapons: recommends,
    teams: TEAMS.filter((t) => (t.members || []).some((m) => m.name === name)),
    notice: MATERIAL_NOTICE
  }
}

async function load() {
  loading.value = true
  let data = null
  try {
    const res = await fetch(`${API}/home/characters/detail?name=${encodeURIComponent(props.name)}`)
    if (res.ok) {
      const json = await res.json()
      if (json && json.code === 200 && json.data && json.data.character) {
        data = json.data
      }
    }
  } catch (e) {
    // 后端未启动或接口异常，使用本地数据
  }
  detail.value = data || localDetail(props.name)
  loading.value = false
}

onMounted(load)
watch(() => props.name, load)

// 突破材料按类别分组（只看 stage=0 汇总，跳过升级消耗）
const summaryGroups = computed(() => {
  const items = detail.value?.material?.items || []
  const groups = []
  const map = new Map()
  for (const it of items) {
    if (it.stage !== 0 || it.category === '升级消耗') continue
    if (!map.has(it.category)) {
      const g = { category: it.category, items: [] }
      map.set(it.category, g)
      groups.push(g)
    }
    map.get(it.category).items.push(it)
  }
  return groups
})

// 逐阶段明细：把 items 按 stage 分桶，配合 stages 里的等级与摩拉
const stagesWithItems = computed(() => {
  const mat = detail.value?.material
  if (!mat) return []
  const map = new Map()
  for (const it of mat.items || []) {
    if (!it.stage || it.stage === 0) continue
    if (!map.has(it.stage)) map.set(it.stage, [])
    map.get(it.stage).push(it)
  }
  const meta = mat.stages || []
  return Array.from(map.entries())
    .map(([stage, items]) => {
      const m = meta.find((x) => x.stage === stage) || meta[stage - 1] || {}
      const moraItem = items.find((i) => i.category === '摩拉')
      return {
        stage,
        level: m.level || stage * 20,
        mora: m.mora || (moraItem ? moraItem.count : 0),
        items: items.filter((i) => i.category !== '摩拉')
      }
    })
    .sort((a, b) => a.stage - b.stage)
})

function stageZero(mat) {
  return (mat?.items || []).filter((i) => i.stage === 0 && i.category !== '升级消耗')
}
function wan(n) {
  return ((Number(n) || 0) / 10000).toFixed(1)
}
function fmt(n) {
  return (Number(n) || 0).toLocaleString('zh-CN')
}
function star(n) {
  return '★'.repeat(Number(n) || 0)
}
function eleNation(element) {
  return NATIONS.find((n) => n.name === ELEMENT_NATION[element]) || NATIONS[0]
}
function eleColor(element) {
  return eleNation(element).hex
}
function eleSvg(element) {
  return svgFull(eleNation(element).svg)
}
</script>

<style scoped>
.detail {
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding-bottom: 20px;
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
  background: linear-gradient(160deg, rgba(20, 28, 52, 0.86), rgba(10, 14, 30, 0.8));
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
.back:hover {
  background: rgba(80, 130, 220, 0.34);
}
.brand {
  display: flex;
  align-items: baseline;
  gap: 10px;
}
.logo {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 3px;
  color: #e9eefb;
}
.sub {
  font-size: 11px;
  letter-spacing: 2px;
  color: #8fa2c7;
}
.crumb {
  font-size: 13px;
  color: #6fd6c0;
}
.state {
  padding: 60px 20px;
  text-align: center;
  color: #9fb0d8;
  font-size: 14px;
}

.hero-card {
  display: flex;
  gap: 22px;
  padding: 24px;
  border-radius: 20px;
  background: linear-gradient(150deg, rgba(24, 34, 62, 0.82), rgba(10, 14, 30, 0.74));
  border: 1px solid rgba(180, 205, 255, 0.16);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.45);
}
.hero-avatar {
  width: 132px;
  height: 132px;
  object-fit: cover;
  border-radius: 18px;
  border: 1px solid rgba(180, 205, 255, 0.24);
  background: rgba(255, 255, 255, 0.06);
  flex-shrink: 0;
}
.hero-info {
  flex: 1;
  min-width: 0;
}
.hero-title {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}
.hero-title h1 {
  font-size: 30px;
  letter-spacing: 2px;
  color: #f2f6ff;
}
.ele-dot {
  display: inline-flex;
  width: 22px;
  height: 22px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #0b1020;
}
.ele-dot :deep(svg) {
  width: 14px;
  height: 14px;
}
.ele-tag {
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  color: #b8c6e4;
  background: rgba(255, 255, 255, 0.08);
}
.stars {
  color: #f6c35b;
  letter-spacing: 2px;
  font-size: 14px;
}
.stars.r4 {
  color: #a781e0;
}
.stars.r3 {
  color: #6fd6c0;
}
.role {
  margin-top: 10px;
  font-size: 13px;
  color: #9fb0d8;
}
.summary {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.8;
  color: #cbd7ef;
}
.quick {
  margin-top: 16px;
  display: grid;
  gap: 8px;
}
.quick > div {
  display: flex;
  gap: 10px;
  font-size: 12px;
  line-height: 1.6;
}
.quick .k,
.k {
  color: #7f92b8;
  flex-shrink: 0;
}
.quick .v {
  color: #dce7ff;
}

.sec {
  margin-top: 22px;
}
.sec-head {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}
.sec-head h2 {
  font-size: 17px;
  font-weight: 600;
  color: #eef3ff;
}
.sec-tag {
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 11px;
  letter-spacing: 1px;
}
.c-green { background: rgba(111, 214, 192, 0.18); color: #6fd6c0; }
.c-gold { background: rgba(246, 195, 91, 0.18); color: #f6c35b; }
.c-sky { background: rgba(78, 198, 240, 0.18); color: #4ec6f0; }
.c-purple { background: rgba(167, 129, 224, 0.18); color: #a781e0; }
.c-red { background: rgba(255, 122, 89, 0.18); color: #ff7a59; }
.sec-count {
  font-size: 12px;
  color: #8fa2c7;
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
}
.stat {
  padding: 16px;
  border-radius: 14px;
  background: rgba(16, 24, 46, 0.72);
  border: 1px solid rgba(180, 205, 255, 0.14);
  text-align: center;
}
.stat .num {
  display: block;
  font-size: 24px;
  font-weight: 700;
  color: #6fd6c0;
}
.stat .lbl {
  display: block;
  margin-top: 6px;
  font-size: 12px;
  color: #9fb0d8;
}
.notice {
  margin-top: 12px;
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 12px;
  line-height: 1.7;
  color: #e2c48a;
  background: rgba(246, 195, 91, 0.09);
  border: 1px solid rgba(246, 195, 91, 0.24);
}

.mat-groups {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 12px;
}
.mat-group {
  padding: 14px 16px;
  border-radius: 14px;
  background: rgba(16, 24, 46, 0.72);
  border: 1px solid rgba(180, 205, 255, 0.14);
}
.mat-group h3 {
  font-size: 13px;
  font-weight: 600;
  color: #4ec6f0;
  padding-bottom: 8px;
  margin-bottom: 6px;
  border-bottom: 1px solid rgba(180, 205, 255, 0.12);
}
.mat-item {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 4px 0;
  font-size: 12px;
}
.mn { color: #cbd7ef; }
.mat-item b { color: #f6c35b; font-weight: 600; flex-shrink: 0; }

.stages {
  display: grid;
  gap: 10px;
}
.stage {
  padding: 12px 16px;
  border-radius: 12px;
  background: rgba(16, 24, 46, 0.66);
  border: 1px solid rgba(180, 205, 255, 0.12);
}
.stage-head {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  font-size: 13px;
  margin-bottom: 8px;
}
.lv { color: #dce7ff; font-weight: 600; }
.mora { color: #f6c35b; }
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.chip {
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 11px;
  color: #cbd7ef;
  background: rgba(120, 160, 230, 0.14);
  border: 1px solid rgba(180, 205, 255, 0.14);
}
.chip.sm { padding: 2px 8px; font-size: 10px; }

.weapon-block,
.team-block {
  margin-bottom: 12px;
  padding: 16px 18px;
  border-radius: 14px;
  background: rgba(16, 24, 46, 0.72);
  border: 1px solid rgba(180, 205, 255, 0.14);
}
.w-head {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
.w-name { font-size: 16px; font-weight: 600; color: #f2f6ff; }
.reason { font-size: 12px; color: #9fb0d8; }
.w-info { margin-top: 10px; font-size: 12px; line-height: 1.7; color: #cbd7ef; }
.w-meta { color: #a781e0; }
.w-info p { margin-top: 4px; }
.users { margin-top: 8px; display: flex; align-items: center; flex-wrap: wrap; gap: 6px; }
.w-mat {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed rgba(180, 205, 255, 0.2);
}
.w-mat-head {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 12px;
}
.w-mat-head b { color: #f6c35b; margin-right: 12px; }

.t-head { display: flex; align-items: center; gap: 10px; font-size: 14px; color: #f2f6ff; }
.core { font-size: 12px; color: #ff7a59; }
.members { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
.member {
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 12px;
  color: #cbd7ef;
  background: rgba(120, 160, 230, 0.12);
}
.member.me {
  color: #0b1020;
  background: #6fd6c0;
  font-weight: 600;
}
.tip { margin-top: 10px; font-size: 12px; line-height: 1.7; color: #9fb0d8; }
.empty {
  padding: 24px;
  text-align: center;
  font-size: 13px;
  color: #8fa2c7;
  border-radius: 12px;
  background: rgba(16, 24, 46, 0.5);
}
@media (max-width: 640px) {
  .hero-card { flex-direction: column; align-items: center; }
  .hero-avatar { width: 100px; height: 100px; }
  .crumb { display: none; }
}
</style>

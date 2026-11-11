<template>
  <section class="sec tm-sec">
    <div class="sec-head">
      <span class="sec-tag c-indigo">模块六</span>
      <h2>角色天赋 · 命之座</h2>
      <span class="sec-count">{{ roster.length }} 位角色 · {{ talentTotal }} 项天赋 / {{ constTotal }} 条命座</span>
      <span class="tm-source" :class="{ on: live }">{{ live ? '后台实时数据' : '本地兜底数据' }}</span>
      <button class="tm-reload" type="button" :disabled="reloading" @click="loadLive" title="重新读取后台管理系统的最新数据">
        {{ reloading ? '同步中…' : '⟳ 刷新数据' }}
      </button>
      <div class="view-toggle">
        <button :class="{ active: mode === 'detail' }" @click="mode = 'detail'">角色详情</button>
        <button :class="{ active: mode === 'all' }" @click="mode = 'all'">全部一览</button>
      </div>
    </div>

    <!-- 筛选栏 -->
    <div class="tm-toolbar">
      <div class="tm-search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
        </svg>
        <input v-model="q" type="text" placeholder="搜索角色名，例如：胡桃 / 旅行者" />
        <button v-if="q" class="tm-clear" @click="q = ''">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 5l14 14M19 5 5 19" />
          </svg>
        </button>
      </div>
      <div class="tm-ele">
        <button v-for="e in elements" :key="e" :class="{ active: ele === e }" :style="e !== '全部' ? { '--ec': ELE_COLOR[e] } : {}" @click="ele = e">
          <i v-if="e !== '全部'" class="tm-dot" :style="{ background: ELE_COLOR[e] }"></i>{{ e }}
        </button>
      </div>
      <span class="tm-hit">匹配 {{ filtered.length }} 位</span>
    </div>

    <p class="tm-notice"><span>✦</span> {{ TALENT_NOTICE }}</p>

    <!-- ========== 角色详情模式 ========== -->
    <template v-if="mode === 'detail'">
      <div class="tm-picker">
        <button v-for="c in filtered" :key="c.name" class="tm-pick"
                :class="{ on: c.name === active }" :style="{ '--ec': ELE_COLOR[c.element] }"
                :title="c.name" @click="active = c.name">
          <img v-if="charImg(c.name)" :src="charImg(c.name)" :alt="c.name" loading="lazy" />
          <span v-else class="tm-ph">{{ c.name.slice(0, 1) }}</span>
          <span class="tm-pick-name">{{ c.name }}</span>
        </button>
        <div v-if="!filtered.length" class="tm-none">没有匹配的角色，换个关键词或元素试试</div>
      </div>

      <div v-if="activeChar" class="tm-detail" :style="{ '--ec': ELE_COLOR[activeChar.element] }">
        <!-- 角色概览 -->
        <div class="td-hero">
          <div class="td-portrait">
            <img v-if="charImg(activeChar.name)" :src="charImg(activeChar.name)" :alt="activeChar.name" />
            <span v-else class="tm-ph big">{{ activeChar.name.slice(0, 1) }}</span>
            <i class="td-ele" :style="{ background: ELE_COLOR[activeChar.element] }"></i>
          </div>
          <div class="td-info">
            <div class="td-title">
              <h3>{{ activeChar.name }}</h3>
              <span class="td-stars" :class="'r' + activeChar.rarity">{{ '★'.repeat(activeChar.rarity) }}</span>
              <span class="td-ele-tag" :style="{ '--ec': ELE_COLOR[activeChar.element] }">{{ activeChar.element }}元素</span>
            </div>
            <p class="td-role">{{ activeChar.role || '旅行者' }} <span class="td-sep">·</span> {{ activeChar.summary || '点击查看该角色的天赋与命之座详情' }}</p>
            <div class="td-quick">
              <div><span class="k">天赋升级顺序</span><span class="v">{{ talentMeta?.priority || '—' }}</span></div>
              <div><span class="k">推荐圣遗物</span><span class="v">{{ activeChar.artifacts || '—' }}</span></div>
            </div>
          </div>
          <div class="td-stat">
            <div class="big">{{ talents.length }}<small>项天赋</small></div>
            <div class="big">{{ constellations.length }}<small>条命座</small></div>
          </div>
        </div>

        <!-- 天赋详情 -->
        <div class="td-group">
          <div class="td-group-head">
            <span class="td-gtag">天赋详情</span>
            <h4>主动天赋与升级优先级</h4>
            <span class="sec-count">{{ talents.length }} 项 · 数字越小越优先升级</span>
          </div>
          <div class="td-grid">
            <div v-if="!talents.length" class="tm-none">该角色暂无可显示的天赋（可能已在后台隐藏或未录入）</div>
            <article v-for="t in talents" :key="t.talentType + '-' + t.talentName + '-' + t.sortOrder" class="tal-card" :class="'p' + t.priority">
              <div class="tal-top">
                <span class="tal-type">{{ t.talentType }}</span>
                <span class="tal-prio" :class="'p' + t.priority">优先 {{ t.priority }}</span>
              </div>
              <h5 v-if="t.talentName && t.talentName !== t.talentType" class="tal-name">{{ t.talentName }}</h5>
              <p class="tal-desc">{{ t.description }}</p>
              <div class="tal-foot">
                <span>推荐等级</span>
                <b>Lv.{{ t.recommendedLevel }}</b>
                <div class="tal-bar"><i :style="{ width: (t.recommendedLevel / 10 * 100) + '%' }"></i></div>
              </div>
            </article>
          </div>
        </div>

        <!-- 命之座详情 -->
        <div class="td-group">
          <div class="td-group-head">
            <span class="td-gtag con">命之座详情</span>
            <h4>{{ constMeta?.setName || '命之座' }} · 1 ~ 6 命</h4>
            <span class="sec-count">{{ constellations.length }} 条 · 逐命效果</span>
          </div>
          <div class="con-grid">
            <div v-if="!constellations.length" class="tm-none">该角色暂无可显示的命之座（可能已在后台隐藏或未录入）</div>
            <article v-for="c in constellations" :key="c.level + '-' + c.sortOrder" class="con-card" :class="'lv' + c.level">
              <div class="con-badge"><span>{{ c.level }}</span><i>命</i></div>
              <div class="con-body">
                <h5>{{ c.name }}</h5>
                <p>{{ c.description }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </template>

    <!-- ========== 全部一览模式 ========== -->
    <template v-else>
      <div class="tm-all-head">
        <span class="sec-count">共 {{ filtered.length }} 位角色，点击展开查看该角色完整天赋与命之座</span>
        <button class="tm-fold-all" @click="toggleAll">{{ expanded.size >= filtered.length ? '全部收起 ▲' : '全部展开 ▼' }}</button>
      </div>
      <div class="tm-all">
        <article v-for="c in filtered" :key="c.name" class="all-card" :class="{ open: expanded.has(c.name) }"
                 :style="{ '--ec': ELE_COLOR[c.element] }">
          <button class="all-head" @click="toggle(c.name)">
            <img v-if="charImg(c.name)" :src="charImg(c.name)" :alt="c.name" loading="lazy" />
            <span v-else class="tm-ph">{{ c.name.slice(0, 1) }}</span>
            <span class="all-name">{{ c.name }}</span>
            <span class="all-stars" :class="'r' + c.rarity">{{ '★'.repeat(c.rarity) }}</span>
            <span class="all-ele" :style="{ '--ec': ELE_COLOR[c.element] }">{{ c.element }}</span>
            <span class="all-meta">3 项天赋 · 6 条命座</span>
            <span class="all-prio">{{ CHAR_TALENTS[c.name]?.priority || '—' }}</span>
            <span class="all-arrow">{{ expanded.has(c.name) ? '▲' : '▼' }}</span>
          </button>
          <div v-if="expanded.has(c.name)" class="all-body">
            <div class="all-sub">
              <span class="all-sub-tag">天赋</span>
              <div class="all-sub-list">
                <div v-for="t in listOf(CHAR_TALENTS[c.name]?.list)" :key="t.talentType + '-' + t.talentName + '-' + t.sortOrder" class="all-item">
                  <b>{{ t.talentType }}</b><span>{{ t.description }}</span>
                  <em>优先{{ t.priority }} · Lv.{{ t.recommendedLevel }}</em>
                </div>
              </div>
            </div>
            <div class="all-sub">
              <span class="all-sub-tag con">命座</span>
              <div class="all-sub-list">
                <div v-for="k in listOf(CHAR_CONSTELLATIONS[c.name]?.list)" :key="k.level + '-' + k.sortOrder" class="all-item">
                  <b>{{ k.name }}</b><span>{{ k.description }}</span>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div v-if="!filtered.length" class="tm-none">没有匹配的角色</div>
      </div>
    </template>
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { CHARACTERS } from '../data/homeData.js'
import { charImg } from '../data/imageMap.js'
import {
  CHAR_TALENTS as FALLBACK_TALENTS,
  CHAR_CONSTELLATIONS as FALLBACK_CONSTELLATIONS,
  TALENT_NOTICE as FALLBACK_NOTICE
} from '../data/charTalents.js'

const props = defineProps({
  // 首页后端返回的实时角色列表；不传时使用本地兜底数据
  characters: { type: Array, default: null }
})

// 数据源：优先读取后台管理系统维护的数据库（/api/home/char-talents），
// 后端不可用或尚未录入时回退到本地兜底 JS 数据，保证页面始终可用。
const CHAR_TALENTS = ref(FALLBACK_TALENTS)
const CHAR_CONSTELLATIONS = ref(FALLBACK_CONSTELLATIONS)
const TALENT_NOTICE = ref(FALLBACK_NOTICE)
const live = ref(false)
const reloading = ref(false)

const ELE_COLOR = {
  '火': '#ff7a59', '水': '#4ec6f0', '雷': '#a781e0', '冰': '#7fd8e8',
  '风': '#6fd6c0', '岩': '#f6c35b', '草': '#8fd36f'
}
const elements = ['全部', '火', '水', '雷', '冰', '风', '岩', '草']

const roster = computed(() => (props.characters && props.characters.length ? props.characters : CHARACTERS))
const talentTotal = computed(() => Object.values(CHAR_TALENTS.value).reduce((s, v) => s + (v.list || []).length, 0))
const constTotal = computed(() => Object.values(CHAR_CONSTELLATIONS.value).reduce((s, v) => s + (v.list || []).length, 0))

const q = ref('')
const ele = ref('全部')
const mode = ref('detail')
const active = ref('胡桃')
const expanded = ref(new Set())

const filtered = computed(() => {
  const kw = q.value.trim()
  return roster.value.filter(c => {
    if (ele.value !== '全部' && c.element !== ele.value) return false
    if (kw && !(c.name || '').includes(kw)) return false
    return true
  })
})

// 筛选后若当前角色不在结果中，自动切到第一位，详情区不留空
watch(filtered, (list) => {
  if (list.length && !list.some(c => c.name === active.value)) active.value = list[0].name
})

const activeChar = computed(() => roster.value.find(c => c.name === active.value) || null)
const talentMeta = computed(() => CHAR_TALENTS.value[active.value] || null)
const constMeta = computed(() => CHAR_CONSTELLATIONS.value[active.value] || null)
const talents = computed(() => listOf(talentMeta.value?.list))
const constellations = computed(() => listOf(constMeta.value?.list))

function listOf(arr) {
  return [...(arr || [])].sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))
}
function toggle(name) {
  const s = new Set(expanded.value)
  s.has(name) ? s.delete(name) : s.add(name)
  expanded.value = s
}
function toggleAll() {
  expanded.value = expanded.value.size >= filtered.value.length
    ? new Set()
    : new Set(filtered.value.map(c => c.name))
}

/**
 * 从后台接口加载最新的天赋 / 命座数据。
 * 后台管理系统对 t_character_talent / t_character_constellation 的增删改查，
 * 在返回首页或点击「刷新数据」后即可在这里生效。
 */
async function loadLive() {
  reloading.value = true
  try {
    const res = await fetch('/api/home/char-talents', { credentials: 'same-origin' })
    const json = await res.json()
    const d = json && json.code === 200 ? json.data : null
    if (!d) return
    const ts = Array.isArray(d.talents) ? d.talents : []
    const cs = Array.isArray(d.constellations) ? d.constellations : []
    // 两张表都完全没有数据时视为尚未初始化，继续用本地兜底
    if (!ts.length && !cs.length) return

    const prio = d.priorities || {}
    const known = new Set(Array.isArray(d.characters) ? d.characters : [])
    const tmap = {}
    const cmap = {}

    for (const t of ts) {
      const n = t.characterName
      if (!n) continue
      if (!tmap[n]) tmap[n] = { priority: prio[n] || '', source: 'db', list: [] }
      tmap[n].list.push({
        characterName: n,
        talentType: t.talentType || '固有天赋',
        talentName: t.talentName || '天赋',
        description: t.description || '',
        priority: t.priority ?? 3,
        recommendedLevel: t.recommendedLevel ?? 8,
        sortOrder: t.sortOrder ?? 0
      })
    }
    for (const c of cs) {
      const n = c.characterName
      if (!n) continue
      if (!cmap[n]) cmap[n] = { setName: c.setName || '', list: [] }
      if (c.setName && !cmap[n].setName) cmap[n].setName = c.setName
      cmap[n].list.push({
        characterName: n,
        setName: c.setName || cmap[n].setName || '',
        level: c.constLevel ?? c.level ?? 0,
        name: c.name || ('第 ' + (c.constLevel ?? 0) + ' 命'),
        description: c.description || '',
        sortOrder: c.sortOrder ?? 0
      })
    }

    // 数据库中出现过的角色（含全部隐藏）以数据库为准，缺条目即表示隐藏；
    // 从未录入的角色才用本地兜底补齐，避免后台新增角色后首页出现空白。
    for (const n of Object.keys(FALLBACK_TALENTS)) {
      if (known.has(n)) {
        if (!tmap[n]) tmap[n] = { priority: prio[n] || '', source: 'db', list: [] }
        if (!cmap[n]) cmap[n] = { setName: '', list: [] }
      } else {
        if (!tmap[n]) tmap[n] = FALLBACK_TALENTS[n]
        if (!cmap[n]) cmap[n] = FALLBACK_CONSTELLATIONS[n] || { setName: '', list: [] }
      }
    }

    CHAR_TALENTS.value = tmap
    CHAR_CONSTELLATIONS.value = cmap
    live.value = true
  } catch (e) {
    // 后端不可用时保持本地兜底数据，页面不受影响
  } finally {
    reloading.value = false
  }
}

onMounted(loadLive)
</script>

<style scoped>
/* ===== 与首页一致的区块基础样式（scoped 不继承，需在组件内重定义） ===== */
.sec { max-width: 1180px; margin: 40px auto 0; }
.sec-head { display: flex; align-items: center; gap: 12px; margin-bottom: 18px; flex-wrap: wrap; }
.sec-head h2 { font-size: 21px; font-weight: 700; letter-spacing: 2px; color: #e9eefb; }
.sec-tag { padding: 5px 12px; border-radius: 8px; font-size: 12px; font-weight: 700; color: #06121f; letter-spacing: 1px; }
.sec-count { font-size: 12px; color: #8295bd; letter-spacing: 1px; }
.view-toggle {
  margin-left: auto; display: flex; gap: 4px; padding: 3px;
  border-radius: 10px; background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.view-toggle button {
  border: none; border-radius: 8px; padding: 5px 14px; font-size: 12px;
  letter-spacing: 1px; color: #9fb0d8; background: transparent;
  cursor: pointer; font-family: inherit; transition: 0.2s;
}
.view-toggle button.active { color: #06121f; background: linear-gradient(95deg, #8aa4f8, #6fd6c0); font-weight: 700; }

.c-indigo { background: #8aa4f8; }

/* 数据来源徽章与手动刷新 */
.tm-source {
  font-size: 11px; letter-spacing: 1px; padding: 4px 10px; border-radius: 20px;
  color: #8fa2c8; border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.04);
}
.tm-source.on {
  color: #9fe4c4; border-color: rgba(111, 214, 192, 0.45);
  background: rgba(111, 214, 192, 0.10);
}
.tm-reload {
  padding: 4px 11px; border-radius: 8px; font-size: 11px; letter-spacing: 1px;
  color: #c3d0f5; border: 1px solid rgba(138, 164, 248, 0.42);
  background: rgba(138, 164, 248, 0.10); cursor: pointer; font-family: inherit;
  transition: 0.2s;
}
.tm-reload:hover:not(:disabled) { background: rgba(138, 164, 248, 0.22); }
.tm-reload:disabled { opacity: 0.6; cursor: wait; }

/* ===== 筛选栏 ===== */
.tm-toolbar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 14px;
}
.tm-search {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 0 1 280px;
  padding: 8px 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);
}
.tm-search svg { width: 16px; height: 16px; flex: none; color: #8295bd; }
.tm-search input {
  flex: 1;
  min-width: 0;
  border: none;
  outline: none;
  background: transparent;
  color: #e9eefb;
  font-family: inherit;
  font-size: 13px;
}
.tm-search input::placeholder { color: #6c7ea6; }
.tm-clear {
  border: none; background: transparent; cursor: pointer; padding: 2px;
  color: #8295bd; display: flex;
}
.tm-clear svg { width: 14px; height: 14px; }
.tm-ele { display: flex; flex-wrap: wrap; gap: 5px; }
.tm-ele button {
  display: inline-flex; align-items: center; gap: 5px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  color: #9fb0d8; font-family: inherit; font-size: 12px;
  padding: 6px 12px; border-radius: 9px; cursor: pointer; transition: 0.2s;
}
.tm-ele button:hover { color: #fff; border-color: rgba(138, 164, 248, 0.5); }
.tm-ele button.active {
  color: #06121f; font-weight: 700; border-color: transparent;
  background: linear-gradient(95deg, #8aa4f8, #6fd6c0);
}
.tm-dot { width: 7px; height: 7px; border-radius: 50%; }
.tm-hit { margin-left: auto; font-size: 12px; color: #8295bd; letter-spacing: 1px; }
.tm-notice {
  margin: 0 0 18px; padding: 10px 14px;
  border-radius: 10px; font-size: 12px; line-height: 1.7; color: #9fb0d8;
  background: rgba(138, 164, 248, 0.08);
  border: 1px solid rgba(138, 164, 248, 0.22);
}
.tm-notice span { color: #8aa4f8; margin-right: 4px; }
.tm-none { padding: 26px; text-align: center; color: #8295bd; font-size: 13px; width: 100%; }
.tm-ph {
  display: inline-flex; align-items: center; justify-content: center;
  width: 34px; height: 34px; border-radius: 50%; flex: none;
  background: rgba(255, 255, 255, 0.12); color: #cdd8f0; font-size: 14px;
}
.tm-ph.big { width: 100%; height: 100%; border-radius: 14px; font-size: 28px; }

/* ===== 角色选择器 ===== */
.tm-picker {
  display: flex; flex-wrap: wrap; gap: 8px;
  max-height: 176px; overflow-y: auto; padding: 12px;
  border-radius: 14px; margin-bottom: 18px;
  background: rgba(12, 17, 34, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.tm-pick {
  display: flex; align-items: center; gap: 7px;
  padding: 5px 10px 5px 5px; border-radius: 10px; cursor: pointer;
  font-family: inherit; font-size: 12px; color: #b8c6e4;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: 0.18s;
}
.tm-pick img { width: 30px; height: 30px; border-radius: 50%; object-fit: cover; flex: none; }
.tm-pick:hover { transform: translateY(-2px); border-color: var(--ec, #8aa4f8); }
.tm-pick.on {
  color: #fff; font-weight: 700;
  border-color: var(--ec, #8aa4f8);
  background: color-mix(in srgb, var(--ec, #8aa4f8) 22%, rgba(12, 17, 34, 0.9));
  box-shadow: 0 4px 14px color-mix(in srgb, var(--ec, #8aa4f8) 30%, transparent);
}
.tm-pick-name { white-space: nowrap; }

/* ===== 详情区 ===== */
.tm-detail {
  border-radius: 18px; padding: 20px;
  background: linear-gradient(155deg, rgba(26, 36, 64, 0.82), rgba(12, 17, 34, 0.88));
  border: 1px solid rgba(255, 255, 255, 0.13);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}
.td-hero { display: flex; align-items: center; gap: 20px; padding-bottom: 18px; border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
.td-portrait {
  position: relative; width: 88px; height: 88px; flex: none; border-radius: 16px; overflow: hidden;
  background: color-mix(in srgb, var(--ec) 18%, rgba(12, 17, 34, 0.9));
  border: 2px solid color-mix(in srgb, var(--ec) 55%, transparent);
}
.td-portrait img { width: 100%; height: 100%; object-fit: cover; }
.td-ele { position: absolute; right: 4px; bottom: 4px; width: 14px; height: 14px; border-radius: 50%; border: 2px solid rgba(12, 17, 34, 0.85); }
.td-info { flex: 1; min-width: 0; }
.td-title { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.td-title h3 { font-size: 24px; font-weight: 700; letter-spacing: 2px; color: #e9eefb; }
.td-stars { font-size: 14px; letter-spacing: 1px; }
.td-stars.r5 { color: #f6c35b; }
.td-stars.r4 { color: #a781e0; }
.td-ele-tag {
  font-size: 11px; padding: 3px 9px; border-radius: 8px; color: var(--ec);
  background: color-mix(in srgb, var(--ec) 16%, transparent);
  border: 1px solid color-mix(in srgb, var(--ec) 38%, transparent);
}
.td-role { margin-top: 8px; font-size: 12px; color: #9fb0d8; line-height: 1.6; }
.td-sep { margin: 0 4px; color: #6c7ea6; }
.td-quick { display: flex; gap: 22px; flex-wrap: wrap; margin-top: 12px; }
.td-quick > div { display: flex; flex-direction: column; gap: 4px; }
.td-quick .k { font-size: 11px; color: #6c7ea6; letter-spacing: 1px; }
.td-quick .v { font-size: 12px; color: #d5e0f6; }
.td-stat { display: flex; flex-direction: column; gap: 12px; flex: none; text-align: right; }
.td-stat .big { font-size: 28px; font-weight: 800; color: var(--ec); line-height: 1; }
.td-stat .big small { font-size: 11px; font-weight: 400; color: #9fb0d8; margin-left: 6px; }

.td-group { margin-top: 22px; }
.td-group-head { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; flex-wrap: wrap; }
.td-group-head h4 { font-size: 16px; font-weight: 700; letter-spacing: 1px; color: #e9eefb; }
.td-gtag {
  font-size: 12px; font-weight: 800; letter-spacing: 1px; color: #06121f;
  padding: 5px 11px; border-radius: 8px; background: #8aa4f8;
}
.td-gtag.con { background: #f6c35b; }

/* 天赋卡 */
.td-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
.tal-card {
  display: flex; flex-direction: column; gap: 10px; padding: 16px;
  border-radius: 14px; border: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(165deg, rgba(138, 164, 248, 0.09), rgba(12, 17, 34, 0.75));
  transition: 0.2s;
}
.tal-card:hover { transform: translateY(-3px); border-color: rgba(138, 164, 248, 0.55); }
.tal-card.p1 { background: linear-gradient(165deg, rgba(246, 195, 91, 0.14), rgba(12, 17, 34, 0.78)); border-color: rgba(246, 195, 91, 0.35); }
.tal-top { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.tal-type { font-size: 13px; font-weight: 700; letter-spacing: 1px; color: #e9eefb; }
.tal-prio { font-size: 11px; padding: 3px 9px; border-radius: 20px; white-space: nowrap; }
.tal-prio.p1 { color: #06121f; background: #f6c35b; font-weight: 800; }
.tal-prio.p2 { color: #cdd8f0; background: rgba(138, 164, 248, 0.25); border: 1px solid rgba(138, 164, 248, 0.4); }
.tal-prio.p3 { color: #9fb0d8; background: rgba(255, 255, 255, 0.07); border: 1px solid rgba(255, 255, 255, 0.14); }
.tal-name { font-size: 13px; color: #f6c35b; }
.tal-desc { flex: 1; margin: 0; font-size: 12px; line-height: 1.8; color: #b8c6e4; }
.tal-foot { display: flex; align-items: center; gap: 6px; font-size: 11px; color: #8295bd; }
.tal-foot b { color: #6fd6c0; font-size: 13px; }
.tal-bar { flex: 1; height: 5px; border-radius: 6px; background: rgba(255, 255, 255, 0.09); overflow: hidden; margin-left: 4px; }
.tal-bar i { display: block; height: 100%; border-radius: 6px; background: linear-gradient(90deg, #8aa4f8, #6fd6c0); }

/* 命座卡 */
.con-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
.con-card {
  display: flex; align-items: flex-start; gap: 12px; padding: 14px;
  border-radius: 14px; border: 1px solid rgba(255, 255, 255, 0.11);
  background: linear-gradient(150deg, rgba(246, 195, 91, 0.08), rgba(12, 17, 34, 0.72));
  transition: 0.2s;
}
.con-card:hover { transform: translateY(-3px); border-color: rgba(246, 195, 91, 0.45); }
.con-card.lv6 { background: linear-gradient(150deg, rgba(255, 122, 89, 0.16), rgba(12, 17, 34, 0.78)); border-color: rgba(255, 122, 89, 0.4); }
.con-badge {
  flex: none; width: 42px; height: 42px; border-radius: 50%;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  background: radial-gradient(circle at 35% 30%, rgba(246, 195, 91, 0.35), rgba(246, 195, 91, 0.08));
  border: 1px solid rgba(246, 195, 91, 0.5); color: #f6c35b;
}
.con-badge span { font-size: 18px; font-weight: 800; line-height: 1; }
.con-badge i { font-size: 9px; font-style: normal; opacity: 0.85; }
.con-card.lv6 .con-badge { background: radial-gradient(circle at 35% 30%, rgba(255, 122, 89, 0.4), rgba(255, 122, 89, 0.08)); border-color: rgba(255, 122, 89, 0.6); color: #ff9a7a; }
.con-body { flex: 1; min-width: 0; }
.con-body h5 { margin: 2px 0 6px; font-size: 13px; font-weight: 700; color: #e9eefb; }
.con-body p { margin: 0; font-size: 12px; line-height: 1.75; color: #b8c6e4; }

/* ===== 全部一览 ===== */
.tm-all-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 12px; flex-wrap: wrap; }
.tm-fold-all {
  border: 1px solid rgba(138, 164, 248, 0.4); background: rgba(138, 164, 248, 0.12);
  color: #b9c9f8; font-family: inherit; font-size: 12px; padding: 6px 14px;
  border-radius: 9px; cursor: pointer; transition: 0.2s;
}
.tm-fold-all:hover { background: rgba(138, 164, 248, 0.25); color: #fff; }
.tm-all { display: flex; flex-direction: column; gap: 8px; }
.all-card {
  border-radius: 12px; overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(12, 17, 34, 0.6);
  transition: 0.2s;
}
.all-card.open { border-color: color-mix(in srgb, var(--ec) 50%, transparent); background: rgba(18, 26, 48, 0.85); }
.all-head {
  display: flex; align-items: center; gap: 10px; width: 100%;
  padding: 9px 14px; border: none; background: transparent; cursor: pointer;
  font-family: inherit; text-align: left; color: #d5e0f6;
}
.all-head:hover { background: rgba(255, 255, 255, 0.04); }
.all-head img { width: 34px; height: 34px; border-radius: 50%; object-fit: cover; flex: none; }
.all-name { font-size: 14px; font-weight: 700; letter-spacing: 1px; white-space: nowrap; }
.all-stars { font-size: 11px; }
.all-stars.r5 { color: #f6c35b; }
.all-stars.r4 { color: #a781e0; }
.all-ele { font-size: 11px; padding: 2px 8px; border-radius: 7px; color: var(--ec); background: color-mix(in srgb, var(--ec) 16%, transparent); }
.all-meta { font-size: 11px; color: #6c7ea6; }
.all-prio { margin-left: auto; font-size: 11px; color: #9fb0d8; }
.all-arrow { font-size: 10px; color: #8295bd; flex: none; }
.all-body { padding: 4px 16px 16px; border-top: 1px solid rgba(255, 255, 255, 0.08); }
.all-sub { display: flex; gap: 12px; padding-top: 12px; }
.all-sub-tag {
  flex: none; height: fit-content; font-size: 11px; font-weight: 800; letter-spacing: 1px;
  color: #06121f; background: #8aa4f8; padding: 4px 9px; border-radius: 7px;
}
.all-sub-tag.con { background: #f6c35b; }
.all-sub-list { flex: 1; display: flex; flex-direction: column; gap: 6px; min-width: 0; }
.all-item { display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap; font-size: 12px; line-height: 1.6; }
.all-item b { color: #e9eefb; white-space: nowrap; min-width: 62px; }
.all-item span { flex: 1; min-width: 180px; color: #b8c6e4; }
.all-item em { font-style: normal; font-size: 11px; color: #6fd6c0; white-space: nowrap; }

/* ===== 响应式 ===== */
@media (max-width: 900px) {
  .td-grid, .con-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .td-hero { flex-wrap: wrap; }
  .td-stat { flex-direction: row; text-align: left; }
}
@media (max-width: 620px) {
  .td-grid, .con-grid { grid-template-columns: 1fr; }
  .tm-hit { margin-left: 0; }
  .all-prio, .all-meta { display: none; }
  .td-title h3 { font-size: 20px; }
}
</style>

<template>
  <div class="home">
    <!-- ===== 顶部导航 ===== -->
    <header class="topbar">
      <div class="brand">
        <div class="logo">原神</div>
        <div class="sub">Teyvat Adventure Handbook</div>
      </div>
      <div class="user">
        <div class="avatar">{{ (username || '旅').slice(0, 1) }}</div>
        <span class="uname">欢迎回来，{{ username || '旅行者' }}</span>
        <button class="logout" @click="logout">退出登录</button>
      </div>
    </header>

    <!-- ===== 搜索区 ===== -->
    <section class="hero">
      <h1 class="title">提瓦特冒险手册</h1>
      <p class="slogan">角色养成 · 武器选择 · 阵容搭配，一站式查询</p>
      <div class="searchbar">
        <svg class="s-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <input
          v-model="keyword"
          type="text"
          placeholder="搜索角色 / 武器 / 配队，例如：胡桃、护摩之杖、蒸发队"
        />
        <button v-if="keyword" class="clear" @click="keyword = ''">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 5l14 14M19 5 5 19" />
          </svg>
        </button>
      </div>
    </section>

    <!-- ===== 搜索结果 ===== -->
    <section v-if="keyword" class="sec">
      <div class="sec-head">
        <span class="sec-tag c-sky">搜索</span>
        <h2>「{{ keyword }}」的搜索结果</h2>
        <span class="sec-count">共 {{ searchTotal }} 条</span>
      </div>

      <div v-if="searchTotal === 0" class="empty">
        <div class="empty-icon">?</div>
        <p>没有找到相关内容，换个关键词试试吧（例如：胡桃 / 钟离 / 永冻）</p>
      </div>

      <template v-else>
        <div v-if="hitChars.length" class="grid chars">
          <div v-for="c in hitChars" :key="'sc' + c.id" class="card char-card" @click="todo('角色详情')">
            <div class="char-top">
              <span class="ele-dot" :style="{ background: eleColor(c.element) }" v-html="eleSvg(c.element)"></span>
              <span class="char-name">{{ c.name }}</span>
              <span class="role">{{ c.role }}</span>
            </div>
            <div class="row"><span class="k">养成</span><span class="v">{{ c.artifacts }} · {{ c.talents }}</span></div>
          </div>
        </div>
        <div v-if="hitWeapons.length" class="grid weapons">
          <div v-for="w in hitWeapons" :key="'sw' + w.name" class="card weapon-card" @click="todo('武器详情')">
            <div class="w-top"><span class="w-name">{{ w.name }}</span><span class="stars" :class="'r' + w.rarity">{{ star(w.rarity) }}</span></div>
            <div class="row"><span class="k">{{ w.type }}</span><span class="v">{{ w.stat }}</span></div>
          </div>
        </div>
        <div v-if="hitTeams.length" class="grid teams">
          <div v-for="t in hitTeams" :key="'st' + t.name" class="card team-card" @click="todo('配队详情')">
            <div class="t-top"><span class="t-name">{{ t.name }}</span><span class="t-core">{{ t.core }}</span></div>
            <div class="t-members">
              <span v-for="m in t.members" :key="m.name" class="member">
                <i class="ele-dot sm" :style="{ background: eleColor(m.element) }"></i>{{ m.name }}
              </span>
            </div>
          </div>
        </div>
      </template>
    </section>

    <!-- ===== 四大功能模块 ===== -->
    <template v-else>
      <!-- 模块 1：角色养成攻略 -->
      <section class="sec">
        <div class="sec-head">
          <span class="sec-tag c-green">模块一</span>
          <h2>角色养成攻略</h2>
          <span class="sec-count">{{ chars.length }} 位角色</span>
        </div>
        <div class="grid chars">
          <div v-for="c in chars" :key="c.id" class="card char-card" @click="todo('角色养成攻略 · ' + c.name)">
            <div class="char-top">
              <span class="ele-dot" :style="{ background: eleColor(c.element) }" v-html="eleSvg(c.element)"></span>
              <span class="char-name">{{ c.name }}</span>
              <span class="role">{{ c.role }}</span>
            </div>
            <div class="stars" :class="'r' + c.rarity">{{ star(c.rarity) }}</div>
            <div class="row"><span class="k">天赋</span><span class="v">{{ c.talents }}</span></div>
            <div class="row"><span class="k">圣遗物</span><span class="v">{{ c.artifacts }}</span></div>
            <div class="row"><span class="k">主词条</span><span class="v">{{ c.mainStats }}</span></div>
            <p class="summary">{{ c.summary }}</p>
          </div>
        </div>
      </section>

      <!-- 模块 2：角色武器推荐 -->
      <section class="sec">
        <div class="sec-head">
          <span class="sec-tag c-gold">模块二</span>
          <h2>角色武器推荐</h2>
          <span class="sec-count">{{ charWeapons.length }} 条推荐</span>
        </div>
        <div class="grid pair">
          <div v-for="p in charWeapons" :key="p.character" class="card pair-card" @click="todo('武器推荐 · ' + p.character)">
            <div class="pair-char">
              <span class="ele-dot" :style="{ background: eleColor(p.element) }" v-html="eleSvg(p.element)"></span>
              <span class="char-name">{{ p.character }}</span>
            </div>
            <div class="pair-list">
              <div v-for="w in p.best" :key="w.name" class="pair-item">
                <div class="p-head">
                  <span class="w-name">{{ w.name }}</span>
                  <span class="stars" :class="'r' + w.rarity">{{ star(w.rarity) }}</span>
                </div>
                <p class="p-reason">{{ w.reason }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 模块 3：武器养成攻略 -->
      <section class="sec">
        <div class="sec-head">
          <span class="sec-tag c-purple">模块三</span>
          <h2>武器养成攻略</h2>
          <span class="sec-count">{{ weapons.length }} 件武器</span>
        </div>
        <div class="grid weapons">
          <div v-for="w in weapons" :key="w.name" class="card weapon-card" @click="todo('武器养成 · ' + w.name)">
            <div class="w-top">
              <span class="w-name">{{ w.name }}</span>
              <span class="stars" :class="'r' + w.rarity">{{ star(w.rarity) }}</span>
            </div>
            <div class="w-meta">{{ w.type }} · {{ w.stat }}</div>
            <p class="summary">{{ w.desc }}</p>
            <div class="users">
              <span class="k">适配角色</span>
              <span v-for="u in w.users" :key="u" class="chip">{{ u }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 模块 4：角色队伍推荐 -->
      <section class="sec">
        <div class="sec-head">
          <span class="sec-tag c-red">模块四</span>
          <h2>角色队伍推荐</h2>
          <span class="sec-count">{{ teams.length }} 套阵容</span>
        </div>
        <div class="grid teams">
          <div v-for="t in teams" :key="t.name" class="card team-card" @click="todo('配队详情 · ' + t.name)">
            <div class="t-top">
              <span class="t-name">{{ t.name }}</span>
              <span class="t-core">{{ t.core }}</span>
            </div>
            <div class="t-members">
              <span v-for="m in t.members" :key="m.name" class="member">
                <i class="ele-dot sm" :style="{ background: eleColor(m.element) }"></i>{{ m.name }}
              </span>
            </div>
            <p class="summary">{{ t.tip }}</p>
          </div>
        </div>
      </section>

      <footer class="foot">
        当前为本地演示数据 · 后端接口已预留（/api/home/*）· 点击卡片可查看模块入口
      </footer>
    </template>

    <!-- ===== 轻提示 ===== -->
    <transition name="fade">
      <div v-if="toastMsg" class="toast">{{ toastMsg }}</div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { NATIONS, svgFull } from '../data/nations.js'
import {
  ELEMENT_NATION,
  CHARACTERS,
  CHAR_WEAPONS,
  WEAPONS,
  TEAMS
} from '../data/homeData.js'

defineProps({
  username: { type: String, default: '' }
})
const emit = defineEmits(['goto'])

// 后端接口前缀（开发环境由 vite.config.js 代理到 http://localhost:8081）
const API = '/api'

// ---------------- 数据（本地演示，后端接口预留） ----------------
const chars = ref(CHARACTERS)
const charWeapons = ref(CHAR_WEAPONS)
const weapons = ref(WEAPONS)
const teams = ref(TEAMS)

// 预留的后端接口加载器：后端实现 /api/home/* 后，返回 code=200 即自动使用接口数据；
// 后端未实现（404/500/连接失败）时静默回退到本地演示数据，页面不受影响。
async function loadFromBackend(path, fallback) {
  try {
    const res = await fetch(API + path)
    if (res.ok) {
      const data = await res.json()
      if (data && data.code === 200 && Array.isArray(data.data) && data.data.length) {
        return data.data
      }
    }
  } catch (e) {
    /* 后端接口尚未上线，使用本地演示数据 */
  }
  return fallback
}

onMounted(async () => {
  // 以下四个接口后端暂未实现，预留契约见 src/data/homeData.js 顶部注释
  chars.value = await loadFromBackend('/home/characters', CHARACTERS)
  charWeapons.value = await loadFromBackend('/home/char-weapons', CHAR_WEAPONS)
  weapons.value = await loadFromBackend('/home/weapons', WEAPONS)
  teams.value = await loadFromBackend('/home/teams', TEAMS)
})

// ---------------- 搜索 ----------------
const keyword = ref('')

// 后端搜索结果：null 表示未拿到（后端未上线/出错），此时回退到本地过滤
const searchResults = ref(null)
let searchTimer = null

function match(text, kw) {
  return String(text || '').toLowerCase().includes(kw)
}

// 后端搜索：GET /api/home/search?keyword=xxx
// 返回 [{ category: 'character'|'weapon'|'team', data: {...} }]
// 拿到 code=200 且 data 是数组就以接口结果为准（空数组也是有效结果）；
// 请求失败则 searchResults 置 null，自动回退到本地演示数据过滤。
watch(keyword, (val) => {
  const kw = String(val || '').trim()
  clearTimeout(searchTimer)
  if (!kw) {
    searchResults.value = null
    return
  }
  searchTimer = setTimeout(async () => {
    try {
      const res = await fetch(`${API}/home/search?keyword=${encodeURIComponent(kw)}`)
      if (res.ok) {
        const data = await res.json()
        if (data && data.code === 200 && Array.isArray(data.data)) {
          searchResults.value = data.data
          return
        }
      }
    } catch (e) {
      /* 后端接口不可用，使用本地演示数据 */
    }
    searchResults.value = null
  }, 250)
})

// 按 category 取出某一类结果；未拿到后端结果时返回 null，交给本地过滤
function pickFromBackend(category) {
  const list = searchResults.value
  if (!list) return null
  return list.filter((r) => r.category === category).map((r) => r.data)
}

const hitChars = computed(() => {
  const kw = keyword.value.trim().toLowerCase()
  if (!kw) return []
  const remote = pickFromBackend('character')
  if (remote) return remote
  return chars.value.filter(
    (c) =>
      match(c.name, kw) ||
      match(c.role, kw) ||
      match(c.element, kw) ||
      match(c.artifacts, kw) ||
      match(c.summary, kw)
  )
})

const hitWeapons = computed(() => {
  const kw = keyword.value.trim().toLowerCase()
  if (!kw) return []
  const remote = pickFromBackend('weapon')
  if (remote) return remote
  return weapons.value.filter(
    (w) =>
      match(w.name, kw) ||
      match(w.type, kw) ||
      match(w.stat, kw) ||
      match(w.desc, kw) ||
      w.users.some((u) => match(u, kw))
  )
})

const hitTeams = computed(() => {
  const kw = keyword.value.trim().toLowerCase()
  if (!kw) return []
  const remote = pickFromBackend('team')
  if (remote) return remote
  return teams.value.filter(
    (t) =>
      match(t.name, kw) ||
      match(t.core, kw) ||
      match(t.tip, kw) ||
      t.members.some((m) => match(m.name, kw) || match(m.element, kw))
  )
})

const searchTotal = computed(() => hitChars.value.length + hitWeapons.value.length + hitTeams.value.length)

// ---------------- 工具函数 ----------------
function eleNation(element) {
  return NATIONS.find((n) => n.name === ELEMENT_NATION[element]) || NATIONS[0]
}
function eleColor(element) {
  return eleNation(element).hex
}
function eleSvg(element) {
  return svgFull(eleNation(element).svg)
}
function star(n) {
  return '★'.repeat(n)
}

// ---------------- 交互 ----------------
let toastTimer = null
const toastMsg = ref('')

function todo(name) {
  toastMsg.value = `「${name}」页面开发中，敬请期待 ~`
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => (toastMsg.value = ''), 2200)
}

function logout() {
  emit('goto', 'login')
}
</script>

<style scoped>
/* ===== 页面容器：接管滚动 ===== */
.home {
  position: relative;
  z-index: 5;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 0 clamp(14px, 4vw, 48px) 46px;
  scrollbar-width: thin;
  scrollbar-color: rgba(120, 170, 255, 0.35) transparent;
}
.home::-webkit-scrollbar {
  width: 8px;
}
.home::-webkit-scrollbar-thumb {
  background: rgba(120, 170, 255, 0.3);
  border-radius: 8px;
}

/* ===== 顶部导航 ===== */
.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  margin: 12px -10px 0;
  border-radius: 18px;
  background: linear-gradient(160deg, rgba(20, 28, 52, 0.72), rgba(10, 14, 30, 0.62));
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.18);
}
.topbar .logo {
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 5px;
  background: linear-gradient(90deg, #6fd6c0, #4ec6f0, #a781e0, #ff7a59);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.topbar .sub {
  font-size: 10px;
  letter-spacing: 3px;
  color: #9fb0d8;
  text-transform: uppercase;
  margin-top: 2px;
}
.user {
  display: flex;
  align-items: center;
  gap: 12px;
}
.avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-weight: 700;
  color: #06121f;
  background: linear-gradient(95deg, #4ec6f0, #6fd6c0);
  box-shadow: 0 4px 16px rgba(78, 198, 240, 0.4);
}
.uname {
  font-size: 14px;
  color: #c7d4f0;
}
.logout {
  padding: 8px 16px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.06);
  color: #bccbe8;
  font-size: 13px;
  cursor: pointer;
  transition: 0.2s;
}
.logout:hover {
  color: #fff;
  border-color: rgba(255, 122, 89, 0.6);
  background: rgba(255, 122, 89, 0.14);
}

/* ===== 搜索区 ===== */
.hero {
  text-align: center;
  margin: 44px auto 8px;
  max-width: 720px;
}
.hero .title {
  font-size: clamp(28px, 5vw, 44px);
  font-weight: 800;
  letter-spacing: 8px;
  background: linear-gradient(90deg, #6fd6c0, #4ec6f0, #a781e0, #ff7a59);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 40px rgba(120, 180, 255, 0.25);
}
.hero .slogan {
  margin-top: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  color: #9fb0d8;
}
.searchbar {
  position: relative;
  margin: 30px auto 6px;
  max-width: 640px;
}
.searchbar .s-icon {
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: #9fb0d8;
}
.searchbar input {
  width: 100%;
  padding: 16px 52px 16px 50px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  color: #eef3ff;
  font-size: 15px;
  outline: none;
  transition: 0.25s;
}
.searchbar input::placeholder {
  color: #8aa0c9;
}
.searchbar input:focus {
  border-color: #4ec6f0;
  background: rgba(78, 198, 240, 0.1);
  box-shadow: 0 0 0 3px rgba(78, 198, 240, 0.18);
}
.searchbar .clear {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: #bccbe8;
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: 0.2s;
}
.searchbar .clear svg {
  width: 14px;
  height: 14px;
}
.searchbar .clear:hover {
  background: rgba(255, 122, 89, 0.3);
  color: #fff;
}

/* ===== 区块 ===== */
.sec {
  max-width: 1180px;
  margin: 40px auto 0;
}
.sec-head {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}
.sec-head h2 {
  font-size: 21px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #e9eefb;
}
.sec-tag {
  padding: 5px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  color: #06121f;
  letter-spacing: 1px;
}
.c-green { background: #6fd6c0; }
.c-sky { background: #4ec6f0; }
.c-gold { background: #f6c35b; }
.c-purple { background: #a781e0; }
.c-red { background: #ff7a59; }
.sec-count {
  font-size: 12px;
  color: #8295bd;
  letter-spacing: 1px;
}

/* ===== 卡片网格 ===== */
.grid {
  display: grid;
  gap: 16px;
}
.grid.chars,
.grid.weapons,
.grid.pair {
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
}
.grid.teams {
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
}

.card {
  border-radius: 18px;
  padding: 20px;
  background: linear-gradient(160deg, rgba(20, 28, 52, 0.72), rgba(10, 14, 30, 0.62));
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 16px 44px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.18);
  cursor: pointer;
  transition: transform 0.22s, box-shadow 0.22s, border-color 0.22s;
  animation: rise 0.5s ease both;
}
.card:hover {
  transform: translateY(-4px);
  border-color: rgba(78, 198, 240, 0.45);
  box-shadow: 0 22px 56px rgba(0, 0, 0, 0.5), 0 0 24px rgba(78, 198, 240, 0.12);
}
@keyframes rise {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: none; }
}

/* 角色卡 */
.char-top, .pair-char {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}
.ele-dot {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  flex: none;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12), 0 0 14px rgba(255, 255, 255, 0.08);
}
.ele-dot :deep(svg) {
  width: 17px;
  height: 17px;
  color: #0b1020;
}
.ele-dot.sm {
  width: 12px;
  height: 12px;
  display: inline-block;
  border-radius: 50%;
}
.char-name {
  font-size: 18px;
  font-weight: 700;
  color: #eef3ff;
}
.role {
  margin-left: auto;
  font-size: 12px;
  color: #8fd0ff;
  border: 1px solid rgba(143, 208, 255, 0.35);
  padding: 3px 10px;
  border-radius: 8px;
  white-space: nowrap;
}
.row {
  display: flex;
  gap: 10px;
  font-size: 13px;
  line-height: 1.6;
  margin-bottom: 8px;
}
.row .k {
  flex: none;
  color: #8295bd;
  letter-spacing: 1px;
}
.row .k::after {
  content: '·';
  margin-left: 6px;
  color: rgba(130, 149, 189, 0.5);
}
.row .v {
  color: #c7d4f0;
}
.summary {
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.7;
  color: #9fb0d8;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 10px;
}
.stars {
  font-size: 13px;
  letter-spacing: 2px;
  margin-bottom: 10px;
}
.stars.r5 { color: #f6c35b; }
.stars.r4 { color: #a781e0; }

/* 角色武器推荐卡 */
.pair-card .pair-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.pair-item {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.04);
}
.p-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.p-head .stars {
  margin-bottom: 0;
  font-size: 12px;
}
.p-reason {
  margin-top: 6px;
  font-size: 12px;
  color: #9fb0d8;
  line-height: 1.6;
}

/* 武器卡 */
.w-top, .t-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 8px;
}
.w-top .stars {
  margin-bottom: 0;
  font-size: 12px;
}
.w-name {
  font-size: 17px;
  font-weight: 700;
  color: #eef3ff;
}
.w-meta {
  font-size: 12px;
  color: #8fd0ff;
  margin-bottom: 10px;
  letter-spacing: 1px;
}
.users {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.users .k {
  font-size: 12px;
  color: #8295bd;
}
.chip {
  font-size: 12px;
  color: #c7d4f0;
  border: 1px solid rgba(199, 212, 240, 0.25);
  border-radius: 8px;
  padding: 2px 10px;
  background: rgba(255, 255, 255, 0.05);
}

/* 配队卡 */
.t-name {
  font-size: 17px;
  font-weight: 700;
  color: #eef3ff;
}
.t-core {
  font-size: 12px;
  color: #8fd0ff;
  white-space: nowrap;
}
.t-members {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 0;
}
.member {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 13px;
  color: #c7d4f0;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  padding: 5px 12px;
  background: rgba(255, 255, 255, 0.05);
}

/* 搜索空态 */
.empty {
  text-align: center;
  padding: 60px 0;
  color: #8295bd;
  font-size: 14px;
}
.empty-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 16px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 28px;
  color: #4ec6f0;
  border: 1px dashed rgba(78, 198, 240, 0.45);
  background: rgba(78, 198, 240, 0.07);
}

/* 页脚 */
.foot {
  text-align: center;
  margin-top: 44px;
  font-size: 12px;
  letter-spacing: 1px;
  color: #6a7ea6;
}

/* Toast 轻提示 */
.toast {
  position: fixed;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
  z-index: 99;
  padding: 12px 26px;
  border-radius: 12px;
  font-size: 14px;
  color: #eef3ff;
  background: linear-gradient(160deg, rgba(20, 28, 52, 0.92), rgba(10, 14, 30, 0.88));
  border: 1px solid rgba(78, 198, 240, 0.45);
  box-shadow: 0 14px 44px rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  pointer-events: none;
}
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* 响应式：小屏 */
@media (max-width: 640px) {
  .uname { display: none; }
  .topbar .sub { display: none; }
}
</style>

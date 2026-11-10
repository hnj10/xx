<template>
  <div class="home">
    <CharacterDetail v-if="detailName" :name="detailName" @back="detailName = ''" />
    <TeamDetail v-else-if="detailTeam" :team="detailTeam" @back="closeTeam" />
    <WeaponRecommendDetail
      v-else-if="detailWeaponChar"
      :name="detailWeaponChar"
      :weapons="weapons"
      :char-weapons="charWeapons"
      :characters="chars"
      @back="closeWeaponChar"
    />
    <template v-else>
    <!-- ===== 顶部导航 ===== -->
    <header class="topbar">
      <div class="brand">
        <div class="logo">原神</div>
        <div class="sub">Teyvat Adventure Handbook</div>
      </div>
      <div class="user">
        <div class="avatar">{{ (username || '旅').slice(0, 1) }}</div>
        <span class="uname">欢迎回来，{{ username || '旅行者' }}</span>
        <button class="admin-entry" title="维护首页展示的角色与武器数据" @click="$emit('goto', 'admin-login')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M12 2 4 5v6c0 5 3.4 9.3 8 11 4.6-1.7 8-6 8-11V5l-8-3Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          后台管理系统
        </button>
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

      <!-- ===== 模块导航：点击模块名切换展示 ===== -->
      <nav v-if="!keyword" class="module-nav">
        <button
          v-for="m in modules"
          :key="m.key"
          class="module-tab"
          :class="{ active: activeModule === m.key }"
          @click="activeModule = m.key"
        >
          <span class="module-dot" :style="{ background: m.color }"></span>
          <span class="module-label">{{ m.name }}</span>
          <span class="module-count">{{ m.count }}</span>
        </button>
      </nav>
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
              <img v-if="charImg(c.name)" class="char-avatar" :src="charImg(c.name)" :alt="c.name" />
              <span class="ele-dot" :style="{ background: eleColor(c.element) }" v-html="eleSvg(c.element)"></span>
              <span class="char-name">{{ c.name }}</span>
              <span class="role">{{ c.role }}</span>
            </div>
            <div class="row"><span class="k">养成</span><span class="v"><img v-if="artifactImg(c.artifacts)" class="art-icon" :src="artifactImg(c.artifacts)" :alt="c.artifacts" />{{ c.artifacts }} · {{ c.talents }}</span></div>
          </div>
        </div>
        <div v-if="hitWeapons.length" class="grid weapons">
          <div v-for="w in hitWeapons" :key="'sw' + w.name" class="card weapon-card" @click="todo('武器详情')">
            <div class="w-top"><span class="w-name">{{ w.name }}</span><span class="stars" :class="'r' + w.rarity">{{ star(w.rarity) }}</span></div>
            <div class="row"><span class="k">{{ w.type }}</span><span class="v">{{ w.stat }}</span></div>
            <div v-if="w.atk90" class="row"><span class="k">90级数值</span><span class="v">基础攻击力 {{ w.atk90 }}（+{{ w.atk90 - w.atk1 }}）· {{ w.subStat }} +{{ w.subValue }}</span></div>
          </div>
        </div>
        <div v-if="hitTeams.length" class="grid teams">
          <div v-for="t in hitTeams" :key="'st' + t.name" class="card team-card" @click="openTeam(t)">
            <div class="t-top"><span class="t-name">{{ t.name }}</span><span class="t-core">{{ t.core }}</span></div>
            <div class="t-members">
              <span v-for="m in t.members" :key="m.name" class="member">
                <i class="ele-dot sm" :style="{ background: eleColor(m.element) }"></i>{{ m.name }}
              </span>
            </div>
          </div>
        </div>
        <div v-if="hitArtifacts.length" class="grid artifacts">
          <div v-for="a in hitArtifacts" :key="'sa' + (a.id || a.name)" class="card artifact-card"
               :style="{ '--tint': a.themeColor || '#6f8fe0' }">
            <div class="art-head">
              <img class="art-figure" :src="a.image" :alt="a.name" loading="lazy" />
              <div class="art-title">
                <span class="art-name">{{ a.name }}</span>
                <span class="art-stars" :class="'r' + a.rarity">{{ star(a.rarity) }}</span>
              </div>
            </div>
            <div class="art-effect">
              <div class="eff-row"><span class="eff-label">2 件套</span><p>{{ a.twoPiece }}</p></div>
              <div class="eff-row"><span class="eff-label four">4 件套</span><p>{{ a.fourPiece }}</p></div>
            </div>
          </div>
        </div>
      </template>
    </section>

    <!-- ===== 四大功能模块 ===== -->
    <template v-else>
      <!-- 模块 1：角色养成攻略 -->
      <section v-if="activeModule === 'all' || activeModule === 'characters'" class="sec">
        <div class="sec-head">
          <span class="sec-tag c-green">模块一</span>
          <h2>角色养成攻略</h2>
          <span class="sec-count">{{ chars.length }} 位角色</span>
          <div v-if="charGroups.length" class="view-toggle">
            <button :class="{ active: charGrouped }" @click="charGrouped = true">按元素</button>
            <button :class="{ active: !charGrouped }" @click="charGrouped = false">平铺</button>
          </div>
        </div>

        <!-- 旅行者 · 七元素共鸣：七种元素形态各自独立养成，点击进入角色详情 -->
        <div v-if="travelers.length" class="traveler-strip">
          <div class="ts-head">
            <span class="ts-badge">主角</span>
            <div class="ts-titles">
              <h3>旅行者 · 七元素共鸣</h3>
              <p>同一位主角与七种元素共鸣后的七套独立养成方案、武器推荐与配队，点击卡片查看详情</p>
            </div>
            <span class="ts-count">{{ travelers.length }} / 7</span>
          </div>
          <div class="ts-grid">
            <button v-for="t in travelers" :key="t.name" class="ts-card"
                    :style="{ '--tint': eleColor(t.element) }" @click="openDetail(t.name)">
              <img v-if="charImg(t.name)" class="ts-avatar" :src="charImg(t.name)" :alt="t.name" />
              <span class="ele-dot ts-dot" :style="{ background: eleColor(t.element) }" v-html="eleSvg(t.element)"></span>
              <span class="ts-name">{{ t.name }}</span>
              <span class="ts-role">{{ t.role }}</span>
              <span class="ts-art">{{ t.artifacts }}</span>
              <span class="ts-go">查看详情 →</span>
            </button>
          </div>
        </div>

        <!-- 分组视图：按元素分栏 -->
        <template v-if="charGrouped && charGroups.length">
          <div v-for="g in charGroups" :key="'cg' + g.name" class="group-block">
            <div class="group-head">
              <span class="ele-dot" :style="{ background: eleColor(g.name) }" v-html="eleSvg(g.name)"></span>
              <span class="group-name">{{ g.name }}元素</span>
              <span class="group-count">{{ g.count }} 位</span>
            </div>
            <div class="grid chars">
              <div v-for="c in g.items" :key="c.id" class="card char-card" @click="openDetail(c.name)">
                <div class="char-top">
                  <img v-if="charImg(c.name)" class="char-avatar" :src="charImg(c.name)" :alt="c.name" />
                  <span class="ele-dot" :style="{ background: eleColor(c.element) }" v-html="eleSvg(c.element)"></span>
                  <span class="char-name">{{ c.name }}</span>
                  <span class="role">{{ c.role }}</span>
                </div>
                <div class="stars" :class="'r' + c.rarity">{{ star(c.rarity) }}</div>
                <div class="row"><span class="k">天赋</span><span class="v">{{ c.talents }}</span></div>
                <div class="row"><span class="k">圣遗物</span><span class="v"><img v-if="artifactImg(c.artifacts)" class="art-icon" :src="artifactImg(c.artifacts)" :alt="c.artifacts" />{{ c.artifacts }}</span></div>
                <div class="row"><span class="k">主词条</span><span class="v">{{ c.mainStats }}</span></div>
                <div class="row mat-row"><span class="k">养成消耗</span><span class="v">{{ charMatLine(c.name) }}</span></div>
                <div class="row weapon-line"><span class="k">推荐武器</span><span class="v">{{ charWeaponLine(c.name) }}</span></div>
                <p class="summary">{{ c.summary }}</p>
                <div class="detail-link">查看角色详情 →</div>
              </div>
            </div>
          </div>
        </template>

        <!-- 平铺视图 -->
        <div v-else class="grid chars">
          <div v-for="c in chars" :key="c.id" class="card char-card" @click="openDetail(c.name)">
            <div class="char-top">
              <img v-if="charImg(c.name)" class="char-avatar" :src="charImg(c.name)" :alt="c.name" />
              <span class="ele-dot" :style="{ background: eleColor(c.element) }" v-html="eleSvg(c.element)"></span>
              <span class="char-name">{{ c.name }}</span>
              <span class="role">{{ c.role }}</span>
            </div>
            <div class="stars" :class="'r' + c.rarity">{{ star(c.rarity) }}</div>
            <div class="row"><span class="k">天赋</span><span class="v">{{ c.talents }}</span></div>
            <div class="row"><span class="k">圣遗物</span><span class="v"><img v-if="artifactImg(c.artifacts)" class="art-icon" :src="artifactImg(c.artifacts)" :alt="c.artifacts" />{{ c.artifacts }}</span></div>
            <div class="row"><span class="k">主词条</span><span class="v">{{ c.mainStats }}</span></div>
            <div class="row mat-row"><span class="k">养成消耗</span><span class="v">{{ charMatLine(c.name) }}</span></div>
            <div class="row weapon-line"><span class="k">推荐武器</span><span class="v">{{ charWeaponLine(c.name) }}</span></div>
            <p class="summary">{{ c.summary }}</p>
            <div class="detail-link">查看角色详情 →</div>
          </div>
        </div>
      </section>

      <!-- 模块 2：角色武器推荐 -->
      <section v-if="activeModule === 'all' || activeModule === 'charWeapons'" class="sec">
        <div class="sec-head">
          <span class="sec-tag c-gold">模块二</span>
          <h2>角色武器推荐</h2>
          <span class="sec-count">{{ charWeapons.length }} 条推荐</span>
        </div>
        <div class="grid pair">
          <div v-for="p in shownCharWeapons" :key="p.character" class="card pair-card" title="点击查看该角色全部可用武器与适配度" @click="openWeaponChar(p.character)">
            <div class="pair-char">
              <img v-if="charImg(p.character)" class="char-avatar" :src="charImg(p.character)" :alt="p.character" />
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
                <div v-if="w.atk90" class="p-stats">
                  <div><span class="w90-badge">90级</span> 基础攻击力 <b class="atk">{{ w.atk90 }}</b><span class="p-gain">（1级 {{ w.atk1 }} → 提升 +{{ w.atk90 - w.atk1 }}）</span></div>
                  <div>副词条提升 <b>{{ w.subStat }} +{{ w.subValue }}</b></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 模块 3：武器养成攻略 -->
      <section v-if="activeModule === 'all' || activeModule === 'weapons'" class="sec">
        <div class="sec-head">
          <span class="sec-tag c-purple">模块三</span>
          <h2>武器养成攻略</h2>
          <span class="sec-count">{{ weapons.length }} 件武器</span>
          <div v-if="weaponGroups.length" class="view-toggle">
            <button :class="{ active: weaponGrouped }" @click="weaponGrouped = true">按类型</button>
            <button :class="{ active: !weaponGrouped }" @click="weaponGrouped = false">平铺</button>
          </div>
        </div>

        <!-- 分组视图：按类型分栏 -->
        <template v-if="weaponGrouped && weaponGroups.length">
          <div v-for="g in weaponGroups" :key="'wg' + g.name" class="group-block">
            <div class="group-head">
              <span class="group-name">{{ g.name }}</span>
              <span class="group-count">{{ g.count }} 件</span>
            </div>
            <div class="grid weapons">
              <div v-for="w in g.items" :key="w.name" class="card weapon-card" @click="todo('武器养成 · ' + w.name)">
                <div class="w-top">
                  <span class="w-name">{{ w.name }}</span>
                  <span class="stars" :class="'r' + w.rarity">{{ star(w.rarity) }}</span>
                </div>
                <div class="w-meta">{{ w.type }} · {{ w.stat }}</div>
                <div v-if="w.atk90" class="w90">
                  <div class="w90-line">
                    <span class="w90-badge">90级</span><span class="w90-k">基础攻击力</span><b>{{ w.atk90 }}</b>
                    <span class="w90-gain">1级 {{ w.atk1 }} → 提升 +{{ w.atk90 - w.atk1 }}</span>
                  </div>
                  <div class="w90-line"><span class="w90-k">副词条提升</span><b class="sub">{{ w.subStat }} +{{ w.subValue }}</b></div>
                </div>
                <div class="row mat-row"><span class="k">突破材料</span><span class="v">{{ weaponMatLine(w.name) }}</span></div>
                <p class="summary">{{ w.desc }}</p>
                <div class="users">
                  <span class="k">适配角色</span>
                  <span v-for="u in w.users" :key="u" class="chip">{{ u }}</span>
                </div>
              </div>
            </div>
          </div>
        </template>

        <!-- 平铺视图 -->
        <div v-else class="grid weapons">
          <div v-for="w in weapons" :key="w.name" class="card weapon-card" @click="todo('武器养成 · ' + w.name)">
            <div class="w-top">
              <span class="w-name">{{ w.name }}</span>
              <span class="stars" :class="'r' + w.rarity">{{ star(w.rarity) }}</span>
            </div>
            <div class="w-meta">{{ w.type }} · {{ w.stat }}</div>
            <div v-if="w.atk90" class="w90">
              <div class="w90-line">
                <span class="w90-badge">90级</span><span class="w90-k">基础攻击力</span><b>{{ w.atk90 }}</b>
                <span class="w90-gain">1级 {{ w.atk1 }} → 提升 +{{ w.atk90 - w.atk1 }}</span>
              </div>
              <div class="w90-line"><span class="w90-k">副词条提升</span><b class="sub">{{ w.subStat }} +{{ w.subValue }}</b></div>
            </div>
            <div class="row mat-row"><span class="k">突破材料</span><span class="v">{{ weaponMatLine(w.name) }}</span></div>
            <p class="summary">{{ w.desc }}</p>
            <div class="users">
              <span class="k">适配角色</span>
              <span v-for="u in w.users" :key="u" class="chip">{{ u }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 模块 4：角色队伍推荐 -->
      <section v-if="activeModule === 'all' || activeModule === 'teams'" class="sec">
        <div class="sec-head">
          <span class="sec-tag c-red">模块四</span>
          <h2>角色队伍推荐</h2>
          <span class="sec-count">{{ teams.length }} 套阵容</span>
        </div>
        <div class="grid teams">
          <div v-for="t in teams" :key="t.name" class="card team-card" @click="openTeam(t)">
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
            <div class="detail-link">查看队伍详情 · {{ (t.members || []).length }} 位角色 →</div>
          </div>
        </div>
      </section>

      <!-- 模块 5：圣遗物套装一览 -->
      <section v-if="activeModule === 'all' || activeModule === 'artifacts'" class="sec">
        <div class="sec-head">
          <span class="sec-tag c-gold">模块五</span>
          <h2>圣遗物套装一览</h2>
          <span class="sec-count">{{ artifactSets.length }} 套圣遗物</span>
          <div class="view-toggle">
            <button :class="{ active: artifactRarity === 0 }" @click="artifactRarity = 0">全部</button>
            <button :class="{ active: artifactRarity === 5 }" @click="artifactRarity = 5">5★</button>
            <button :class="{ active: artifactRarity === 4 }" @click="artifactRarity = 4">4★</button>
            <button :class="{ active: artifactRarity === 3 }" @click="artifactRarity = 3">3★</button>
          </div>
        </div>
        <div class="grid artifacts">
          <div v-for="a in shownArtifactSets" :key="a.id || a.name" class="card artifact-card"
               :style="{ '--tint': a.themeColor || '#6f8fe0' }">
            <div class="art-head">
              <img class="art-figure" :src="a.image" :alt="a.name" loading="lazy" />
              <div class="art-title">
                <span class="art-name">{{ a.name }}</span>
                <span class="art-stars" :class="'r' + a.rarity">{{ star(a.rarity) }}</span>
              </div>
            </div>
            <div class="art-meta">
              <span class="art-chip">{{ a.element }}</span>
              <span class="art-chip region">{{ a.region }}</span>
              <span class="art-chip flavor">{{ a.flavor }}</span>
            </div>
            <div class="art-effect">
              <div class="eff-row">
                <span class="eff-label">2 件套</span>
                <p>{{ a.twoPiece }}</p>
              </div>
              <div class="eff-row">
                <span class="eff-label four">4 件套</span>
                <p>{{ a.fourPiece }}</p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!shownArtifactSets.length" class="empty">
          <div class="empty-icon">◇</div>
          <p>该星级暂无圣遗物套装</p>
        </div>
      </section>

      <footer class="foot">
        数据由后台管理系统维护 · 角色 / 武器 / 队伍 / 圣遗物实时读取（/api/home/*）· 点击角色卡片进入角色详情
      </footer>
    </template>
    </template>

    <!-- ===== 轻提示 ===== -->
    <transition name="fade">
      <div v-if="toastMsg" class="toast">{{ toastMsg }}</div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { NATIONS, svgFull } from '../data/nations.js'
import { charImg, artifactImg } from '../data/imageMap.js'
import CharacterDetail from './CharacterDetail.vue'
import TeamDetail from './TeamDetail.vue'
import WeaponRecommendDetail from './WeaponRecommendDetail.vue'
import {
  ELEMENT_NATION,
  CHARACTERS,
  CHAR_WEAPONS,
  WEAPONS,
  TEAMS
} from '../data/homeData.js'
import { CHARACTER_MATERIALS, WEAPON_MATERIALS } from '../data/materialsData.js'
import { ARTIFACT_SETS } from '../data/artifactSets.js'

defineProps({
  username: { type: String, default: '' }
})
const emit = defineEmits(['goto'])

// 后端接口前缀（开发环境由 vite.config.js 代理到 http://192.168.68.4:8081）
const API = '/api'

// 角色详情：非空时整个首页切换为详情页（保留首页状态，返回时无需重新拉数据）
const detailName = ref('')
function openDetail(name) {
  detailName.value = name
}

// 队伍详情：点击队伍卡片进入独立界面，展示 4 位成员及其在本队的养成攻略
const detailTeam = ref(null)
let savedTeamScroll = 0
function openTeam(t) {
  savedTeamScroll = document.querySelector('.home')?.scrollTop || 0
  detailTeam.value = t
  nextTick(() => document.querySelector('.home')?.scrollTo({ top: 0 }))
}
function closeTeam() {
  const pos = savedTeamScroll
  detailTeam.value = null
  nextTick(() => document.querySelector('.home')?.scrollTo({ top: pos }))
}

// 武器推荐详情：点击角色卡进入独立界面，展示该角色全部可用武器、适配度与五星/四星分区
const detailWeaponChar = ref('')
let savedWeaponScroll = 0
function openWeaponChar(name) {
  savedWeaponScroll = document.querySelector('.home')?.scrollTop || 0
  detailWeaponChar.value = name
  nextTick(() => document.querySelector('.home')?.scrollTo({ top: 0 }))
}
function closeWeaponChar() {
  const pos = savedWeaponScroll
  detailWeaponChar.value = ''
  nextTick(() => document.querySelector('.home')?.scrollTo({ top: pos }))
}

// ---------------- 养成材料摘要（首页卡片） ----------------
// 与详情页一样采用「接口优先、本地兜底」：先从 materialsData.js 生成摘要，
// 后端 /home/materials/summary 可用时再覆盖，接口挂了页面也不缺数据。
function localSummary(map) {
  const out = {}
  for (const [name, mat] of Object.entries(map)) {
    const seen = new Set()
    const highlights = []
    for (const it of mat.items || []) {
      if (it.stage !== 0 || it.category === '升级消耗') continue
      if (!seen.has(it.category)) {
        seen.add(it.category)
        highlights.push(it.name)
      }
      if (highlights.length >= 3) break
    }
    out[name] = { ...(mat.summary || {}), highlights }
  }
  return out
}
const charMats = ref(localSummary(CHARACTER_MATERIALS))
const weaponMats = ref(localSummary(WEAPON_MATERIALS))

function fmtWan(n) {
  return ((Number(n) || 0) / 10000).toFixed(1)
}
function charMatLine(name) {
  const s = charMats.value[name]
  if (!s) return ''
  const main = (s.highlights || []).slice(0, 2).join(' / ')
  return `经验书 ${s.books} · 摩拉 ${fmtWan(s.moraTotal)}万${main ? ' · ' + main : ''}`
}
function weaponMatLine(name) {
  const s = weaponMats.value[name]
  if (!s) return ''
  const main = (s.highlights || []).slice(0, 2).join(' / ')
  return `精锻矿 ${s.ore} · 摩拉 ${fmtWan(s.moraTotal)}万${main ? ' · ' + main : ''}`
}

// ---------------- 数据（本地演示，后端接口预留） ----------------
const chars = ref(CHARACTERS)
// 旅行者七元素形态：随后端数据动态变化，后台改名/增删后自动跟随
const travelers = computed(() => (chars.value || []).filter(c => (c.name || '').includes('旅行者')))
const charWeapons = ref(CHAR_WEAPONS)
const weapons = ref(WEAPONS)
const teams = ref(TEAMS)
const artifactSets = ref(ARTIFACT_SETS)
const artifactRarity = ref(0)
const shownArtifactSets = computed(() => {
  if (!artifactRarity.value) return artifactSets.value
  return artifactSets.value.filter(a => Number(a.rarity) === artifactRarity.value)
})

// ---------------- 分级分类数据 ----------------
// 后端分类接口返回 [{ name, count, items:[...] }]；为空数组表示后端未提供分类能力
const charGroups = ref([])
const weaponGroups = ref([])

// 视图切换：true 按分类（元素/类型）分组展示，false 平铺列表
const charGrouped = ref(true)
const weaponGrouped = ref(true)

// ---------------- 模块导航 ----------------
// activeModule 取值：'all' 展示全部；其余对应模块 key，仅展示该模块
const activeModule = ref('all')
// 武器 90 级数值：以武器养成数据为唯一口径，保证角色养成 / 武器推荐 / 武器养成三处一致
const WEAPON_ALIAS = { '狼末': '狼的末路', '西风弓': '西风猎弓' }
const weapon90Map = computed(() => {
  const m = {}
  for (const w of weapons.value) if (w && w.name) m[w.name] = w
  for (const [alias, real] of Object.entries(WEAPON_ALIAS)) if (m[real]) m[alias] = m[real]
  return m
})
// 角色武器推荐：后端已返回数值时优先，否则按武器名从武器养成数据补齐（本地兜底数据的场景）
const shownCharWeapons = computed(() => (charWeapons.value || []).map(p => ({
  ...p,
  best: (p.best || []).map(b => {
    const w = weapon90Map.value[b.name] || {}
    return {
      ...b,
      atk1: b.atk1 ?? w.atk1,
      atk90: b.atk90 ?? w.atk90,
      subStat: b.subStat ?? w.subStat,
      subValue: b.subValue ?? w.subValue
    }
  })
})))
function charWeaponLine(name) {
  const p = (charWeapons.value || []).find(x => x.character === name)
  const b = p && p.best && p.best[0]
  if (!b) return '暂无推荐武器'
  const w = weapon90Map.value[b.name]
  if (!w || !w.atk90) return `${b.name} · 90级数值待补充`
  return `${b.name} · 90级基础攻击力 ${w.atk90}（1级 ${w.atk1}，提升 +${w.atk90 - w.atk1}） · 副词条 ${w.subStat} +${w.subValue}`
}

const modules = computed(() => [
  { key: 'all', name: '全部', color: '#4ec6f0', count: chars.value.length + charWeapons.value.length + weapons.value.length + teams.value.length + artifactSets.value.length },
  { key: 'characters', name: '角色养成', color: '#6fd6c0', count: chars.value.length },
  { key: 'charWeapons', name: '武器推荐', color: '#f6c35b', count: charWeapons.value.length },
  { key: 'weapons', name: '武器养成', color: '#a781e0', count: weapons.value.length },
  { key: 'teams', name: '队伍推荐', color: '#ff7a59', count: teams.value.length },
  { key: 'artifacts', name: '圣遗物', color: '#d9a45b', count: artifactSets.value.length }
])

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
  // 接口优先，失败时回退到本地 homeData.js（契约见该文件顶部注释）
  chars.value = await loadFromBackend('/home/characters', CHARACTERS)
  charWeapons.value = await loadFromBackend('/home/char-weapons', CHAR_WEAPONS)
  weapons.value = await loadFromBackend('/home/weapons', WEAPONS)
  teams.value = await loadFromBackend('/home/teams', TEAMS)
  // 圣遗物套装：后台管理系统维护，接口优先，挂了回退到本地兜底数据
  artifactSets.value = await loadFromBackend('/home/artifact-sets', ARTIFACT_SETS)

  // 分级分类接口
  charGroups.value = await loadFromBackend('/home/characters/elements', [])
  weaponGroups.value = await loadFromBackend('/home/weapons/types', [])

  // 养成材料摘要：接口可用就覆盖本地生成的摘要
  try {
    const res = await fetch(API + '/home/materials/summary')
    if (res.ok) {
      const json = await res.json()
      if (json && json.code === 200 && json.data) {
        if (json.data.characters && Object.keys(json.data.characters).length) {
          charMats.value = json.data.characters
        }
        if (json.data.weapons && Object.keys(json.data.weapons).length) {
          weaponMats.value = json.data.weapons
        }
      }
    }
  } catch (e) {
    // 后端材料接口不可用，沿用本地摘要
  }
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

// 圣遗物搜索：后端 search 接口不含此分类，始终用本地数据过滤，保证新模块可被搜索到
const hitArtifacts = computed(() => {
  const kw = keyword.value.trim().toLowerCase()
  if (!kw) return []
  return artifactSets.value.filter(a =>
    match(a.name, kw) || match(a.element, kw) || match(a.region, kw) ||
    match(a.flavor, kw) || match(a.twoPiece, kw) || match(a.fourPiece, kw)
  )
})

const searchTotal = computed(() => hitChars.value.length + hitWeapons.value.length + hitTeams.value.length + hitArtifacts.value.length)

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

/* ===== 养成材料摘要 / 角色详情入口 ===== */
.mat-row {
  margin-top: 2px;
  padding-top: 8px;
  border-top: 1px dashed rgba(180, 205, 255, 0.18);
}
.mat-row .v {
  color: #f6c35b;
  font-size: 11px;
  line-height: 1.6;
}
.detail-link {
  margin-top: 10px;
  text-align: right;
  font-size: 11px;
  letter-spacing: 1px;
  color: #4ec6f0;
}
.char-card {
  cursor: pointer;
}
.team-card {
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease;
}
.team-card:hover {
  transform: translateY(-3px);
  border-color: rgba(255, 122, 89, 0.45);
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
.admin-entry {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: 1px solid rgba(111, 214, 192, 0.45);
  border-radius: 10px;
  background: rgba(111, 214, 192, 0.12);
  color: #8fe6d4;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}
.admin-entry svg { width: 14px; height: 14px; flex: none; }
.admin-entry:hover {
  color: #06121f;
  border-color: #6fd6c0;
  background: linear-gradient(95deg, #6fd6c0, #4ec6f0);
  box-shadow: 0 8px 22px rgba(111, 214, 192, 0.3);
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

/* ===== 模块导航栏 ===== */
.module-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 22px auto 0;
}
.module-tab {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 18px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  color: #bccbe8;
  font-size: 14px;
  cursor: pointer;
  transition: 0.22s;
}
.module-tab:hover {
  color: #fff;
  border-color: rgba(78, 198, 240, 0.45);
  background: rgba(78, 198, 240, 0.12);
  transform: translateY(-2px);
}
.module-tab.active {
  color: #06121f;
  font-weight: 700;
  background: linear-gradient(95deg, #4ec6f0, #6fd6c0);
  border-color: transparent;
  box-shadow: 0 8px 24px rgba(78, 198, 240, 0.35);
}
.module-tab.active .module-count {
  color: rgba(6, 18, 31, 0.75);
  border-color: rgba(6, 18, 31, 0.3);
}
.module-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex: none;
  box-shadow: 0 0 8px currentColor;
}
.module-label {
  letter-spacing: 1px;
}
.module-count {
  font-size: 11px;
  color: #8295bd;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 20px;
  padding: 1px 8px;
  line-height: 1.4;
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

/* ===== 视图切换 ===== */
.view-toggle {
  margin-left: auto;
  display: flex;
  gap: 4px;
  padding: 3px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.view-toggle button {
  border: none;
  border-radius: 8px;
  padding: 5px 14px;
  font-size: 12px;
  letter-spacing: 1px;
  color: #9fb0d8;
  background: transparent;
  cursor: pointer;
  transition: 0.2s;
}
.view-toggle button.active {
  color: #06121f;
  background: linear-gradient(95deg, #4ec6f0, #6fd6c0);
  font-weight: 700;
}

/* ===== 旅行者 · 七元素共鸣 ===== */
.traveler-strip {
  margin: 0 0 28px;
  padding: 18px 20px 20px;
  border-radius: 18px;
  background: linear-gradient(150deg, rgba(26, 36, 64, 0.82), rgba(12, 17, 34, 0.78));
  border: 1px solid rgba(255, 255, 255, 0.13);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.32), inset 0 1px 0 rgba(255, 255, 255, 0.12);
}
.ts-head { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; }
.ts-badge {
  flex: none;
  padding: 7px 12px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #06121f;
  background: linear-gradient(95deg, #f6c35b, #ff9a3c);
}
.ts-titles h3 { font-size: 17px; font-weight: 700; letter-spacing: 1px; color: #e9eefb; }
.ts-titles p { margin-top: 4px; font-size: 12px; color: #8295bd; line-height: 1.5; }
.ts-count {
  margin-left: auto;
  flex: none;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #f6c35b;
}
.ts-grid { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 10px; }
.ts-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 14px 8px 12px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(165deg, color-mix(in srgb, var(--tint) 20%, rgba(16, 22, 42, 0.9)), rgba(12, 17, 34, 0.92));
  color: #e9eefb;
  font-family: inherit;
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}
.ts-card:hover {
  transform: translateY(-4px);
  border-color: var(--tint);
  box-shadow: 0 10px 26px color-mix(in srgb, var(--tint) 28%, transparent);
}
.ts-avatar {
  width: 62px; height: 62px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.25);
}
.ts-dot { width: 20px; height: 20px; }
.ts-name { font-size: 13px; font-weight: 700; letter-spacing: 1px; }
.ts-role { font-size: 11px; color: #9fb0d8; }
.ts-art { font-size: 10px; color: #7f92b8; text-align: center; line-height: 1.4; }
.ts-go { margin-top: 2px; font-size: 10px; color: var(--tint); letter-spacing: 1px; }
@media (max-width: 1080px) { .ts-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
@media (max-width: 620px) { .ts-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }

/* ===== 分组视图 ===== */
.group-block {
  margin-bottom: 26px;
}
.group-head {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.group-head .ele-dot {
  width: 24px;
  height: 24px;
}
.group-head :deep(svg) {
  width: 14px;
  height: 14px;
}
.group-name {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #e9eefb;
}
.group-count {
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
.grid.artifacts {
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
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
/* 角色立绘头像：放在名字位置 */
.char-avatar {
  width: 52px;
  height: 52px;
  flex: none;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  border: 2px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0 0 16px rgba(120, 180, 255, 0.35), 0 4px 12px rgba(0, 0, 0, 0.4);
  background: rgba(255, 255, 255, 0.06);
}
/* 圣遗物小图标：出现在圣遗物文字前 */
.art-icon {
  width: 20px;
  height: 20px;
  flex: none;
  border-radius: 6px;
  object-fit: cover;
  vertical-align: -4px;
  margin-right: 6px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
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

/* 角色武器推荐卡（点击进入该角色的武器适配详情） */
.pair-card:hover {
  border-color: rgba(246, 195, 91, 0.55);
  box-shadow: 0 22px 56px rgba(0, 0, 0, 0.5), 0 0 24px rgba(246, 195, 91, 0.14);
}
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

/* ===== 圣遗物套装卡（模块五 / 搜索结果） ===== */
.artifact-card {
  --tint: #6f8fe0;
  padding: 0;
  overflow: hidden;
  cursor: default;
  border-color: color-mix(in srgb, var(--tint) 40%, transparent);
  background: linear-gradient(165deg,
      color-mix(in srgb, var(--tint) 16%, rgba(20, 28, 52, 0.86)),
      rgba(9, 13, 28, 0.9));
}
.artifact-card:hover {
  transform: translateY(-4px);
  border-color: color-mix(in srgb, var(--tint) 75%, transparent);
  box-shadow: 0 22px 56px rgba(0, 0, 0, 0.5),
              0 0 26px color-mix(in srgb, var(--tint) 26%, transparent);
}
.art-head {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 18px 12px;
}
.art-figure {
  width: 74px;
  height: 74px;
  flex: 0 0 74px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid color-mix(in srgb, var(--tint) 65%, transparent);
  box-shadow: 0 6px 20px color-mix(in srgb, var(--tint) 30%, transparent);
  background: rgba(8, 11, 24, 0.6);
}
.art-title { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
.art-name {
  font-size: 17px;
  font-weight: 700;
  color: #f3f6ff;
  line-height: 1.35;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}
.art-stars { font-size: 13px; letter-spacing: 2px; color: #f6c35b; }
.art-stars.r5 { color: #f6c35b; }
.art-stars.r4 { color: #b79be8; }
.art-stars.r3 { color: #8fb6d8; }
.art-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 0 18px 12px;
}
.art-chip {
  font-size: 11px;
  padding: 3px 10px;
  border-radius: 999px;
  color: #eaf1ff;
  background: color-mix(in srgb, var(--tint) 32%, rgba(255, 255, 255, 0.06));
  border: 1px solid color-mix(in srgb, var(--tint) 45%, transparent);
  white-space: nowrap;
}
.art-chip.region { color: #b9c8e8; background: rgba(255, 255, 255, 0.05); border-color: rgba(180, 205, 255, 0.18); }
.art-chip.flavor { color: #f6c35b; background: rgba(246, 195, 91, 0.1); border-color: rgba(246, 195, 91, 0.28); }
.art-effect {
  border-top: 1px solid rgba(180, 205, 255, 0.12);
  padding: 12px 18px 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.eff-row { display: flex; gap: 10px; align-items: flex-start; }
.eff-label {
  flex: 0 0 52px;
  font-size: 11px;
  line-height: 1.6;
  text-align: center;
  padding: 2px 4px;
  border-radius: 6px;
  color: #06121f;
  font-weight: 700;
  background: color-mix(in srgb, var(--tint) 78%, #ffffff);
}
.eff-label.four { background: color-mix(in srgb, var(--tint) 55%, #f6c35b); }
.eff-row p {
  margin: 0;
  flex: 1;
  font-size: 12px;
  line-height: 1.7;
  color: #cdd9f2;
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

/* ===== 武器 90 级基础攻击力 / 副词条提升 ===== */
.w90 {
  margin-top: 9px;
  padding: 9px 11px;
  border-radius: 10px;
  background: rgba(246, 195, 91, 0.08);
  border: 1px solid rgba(246, 195, 91, 0.24);
}
.w90-line {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 6px;
  font-size: 11.5px;
  line-height: 1.75;
}
.w90-line + .w90-line { margin-top: 2px; }
.w90-k { color: #8fa2c7; flex-shrink: 0; }
.w90-line b { color: #f6c35b; font-size: 15px; font-weight: 700; letter-spacing: 0.5px; }
.w90-line b.sub { color: #6fd6c0; font-size: 13px; }
.w90-gain { color: #8092b6; }
.w90-badge {
  display: inline-block;
  padding: 1px 7px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #0b1020;
  background: #f6c35b;
}
.p-stats {
  margin-top: 7px;
  padding: 8px 10px;
  border-radius: 9px;
  background: rgba(111, 214, 192, 0.08);
  border: 1px solid rgba(111, 214, 192, 0.2);
  display: grid;
  gap: 3px;
  font-size: 11.5px;
  line-height: 1.6;
  color: #9fb0d8;
}
.p-stats b { color: #6fd6c0; font-weight: 700; font-size: 13px; }
.p-stats b.atk { color: #f6c35b; font-size: 14px; }
.p-stats .p-gain { color: #8092b6; }
.weapon-line .v { color: #d8e3fa; font-size: 11.5px; line-height: 1.6; }

</style>

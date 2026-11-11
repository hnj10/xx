<template>
  <div ref="scroller" class="admin" @scroll.passive="onScroll">
    <!-- ===== 顶栏 ===== -->
    <header class="topbar">
      <div class="brand">
        <div class="logo">后台管理系统</div>
        <div class="sub">Genshin Data Console · 首页数据维护</div>
      </div>
      <div class="tools">
        <span class="who">管理员：{{ username || '—' }}</span>
        <button class="ghost" @click="$emit('goto', 'home')">返回首页</button>
        <button class="ghost danger" @click="logout">退出登录</button>
      </div>
    </header>

    <main class="panel">
      <!-- ===== 模块切换 ===== -->
      <div class="tabs">
        <button v-for="t in tabDefs" :key="t.key"
                :class="{ active: tab === t.key, 'tab-paired': !!t.group }" @click="switchTab(t.key)">
          {{ t.label }} <em>{{ datasets[t.key].length }}</em>
        </button>
        <button class="refresh" @click="loadAll">刷新数据</button>
      </div>

      <!-- ===== 搜索 / 新增 ===== -->
      <div class="toolbar">
        <input v-model="keyword" type="text" :placeholder="current.placeholder" />
        <span class="count">共 {{ filtered.length }} 条</span>
        <span class="scroll-hint">↓ 向下滚动可一直看到最后一条</span>
        <button class="add" @click="openAdd">+ 新增{{ current.short }}</button>
        <span class="tip">保存成功后，返回首页即可看到更新后的数据</span>
      </div>

      <p v-if="loadError" class="banner error">{{ loadError }}</p>
      <p v-if="loading" class="banner">正在加载数据…</p>
      <p v-if="toast" class="banner success">{{ toast }}</p>

      <!-- ===== 数据表格（列由配置驱动） ===== -->
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th v-for="c in current.columns" :key="c.key">{{ c.label }}</th>
              <th class="op-col">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in filtered" :key="row.id">
              <td v-for="c in current.columns" :key="c.key"
                  :class="cellClass(c)">
                <!-- 状态列：彩色标签 -->
                <span v-if="c.type === 'status'" class="tag" :class="row[c.key] === 1 ? 'on' : 'off'">
                  {{ row[c.key] === 1 ? '显示' : '隐藏' }}
                </span>
                <!-- 圣遗物图标列 -->
                <img v-else-if="c.type === 'image'" class="cell-img" :src="row[c.key]" :alt="row.name" />
                <!-- 星级 -->
                <span v-else-if="c.type === 'rarity'">{{ row[c.key] }}★</span>
                <!-- 普通文本 -->
                <template v-else>{{ display(row, c) }}</template>
              </td>
              <td class="op-col">
                <button class="edit" @click="openEdit(row)">编辑</button>
                <button class="del" @click="remove(row)">删除</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="!loading && !filtered.length" class="empty">没有匹配的数据，换个关键词试试</div>
      </div>

      <!-- ===== 全量列表提示 ===== -->
      <div v-if="!loading && filtered.length" class="list-end">
        已显示全部 {{ filtered.length }} 条{{ current.short }}数据，无需翻页
      </div>
    </main>

    <button v-if="showTop" class="to-top" type="button" @click="toTop" title="回到第一条">↑ 回到顶部</button>

    <!-- ===== 编辑 / 新增弹窗 ===== -->
    <div v-if="editing" class="mask" @click.self="editing = null">
      <div class="modal">
        <div class="modal-head">
          <h3>{{ isAdd ? '新增' : '编辑' }}{{ current.short }} · {{ isAdd ? '' : (form.name || form.characterName || form.weaponName || '') }}</h3>
          <button class="close" @click="editing = null">×</button>
        </div>
        <div class="form-grid">
          <label v-for="f in current.fields" :key="f.key" :class="{ full: f.multiline }">
            <span>{{ f.label }}</span>
            <textarea v-if="f.multiline" v-model="form[f.key]" rows="3"></textarea>
            <select v-else-if="f.options" v-model="form[f.key]">
              <option v-for="o in f.options" :key="o.value" :value="o.value">{{ o.label }}</option>
            </select>
            <input v-else v-model="form[f.key]" :type="f.type || 'text'" />
            <small v-if="f.hint">{{ f.hint }}</small>
          </label>
        </div>
        <p v-if="saveError" class="banner error">{{ saveError }}</p>
        <div class="modal-actions">
          <button class="ghost" @click="editing = null">取消</button>
          <button class="primary" :disabled="saving" @click="save">{{ saving ? '保存中…' : '保存修改' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'

defineProps({
  username: { type: String, default: '' }
})
const emit = defineEmits(['goto', 'logout'])

const API = '/api'

const scroller = ref(null)
const showTop = ref(false)
const tab = ref('characters')
const keyword = ref('')
const loading = ref(false)
const loadError = ref('')
const toast = ref('')

const editing = ref(null)
const isAdd = ref(false)
const form = ref({})
const saving = ref(false)
const saveError = ref('')
// 连续编辑时清掉上一条提示的定时器，避免新提示被旧定时器提前关闭
let toastTimer = null

// ---------------- 字段配置 ----------------
function opts(arr) {
  return arr.map(v => ({ value: v, label: v }))
}
const RARITY_OPTIONS = [5, 4, 3, 2, 1].map(v => ({ value: v, label: v + ' 星' }))
const STATUS_OPTIONS = [{ value: 1, label: '显示' }, { value: 0, label: '隐藏' }]
const ELEMENT_OPTIONS = opts(['风', '岩', '雷', '草', '水', '火', '冰', '物理', '攻击', '精通', '充能', '生命', '防御', '暴击', '治疗', '辅助', '战技', '抗性', '纳塔', '生命之契'])
const WEAPON_TYPE_OPTIONS = opts(['单手剑', '双手剑', '长柄武器', '法器', '弓'])
const num = (key, label, extra = {}) => ({ key, label, type: 'number', ...extra })
const txt = (key, label, extra = {}) => ({ key, label, ...extra })
const area = (key, label) => ({ key, label, multiline: true })

const CHARACTER_FIELDS = [
  txt('name', '角色名', { hint: '角色名被「武器推荐 / 队伍 / 养成材料」按名称关联，改名后这些关联展示可能变化' }),
  txt('element', '元素', { options: opts(['风', '岩', '雷', '草', '水', '火', '冰']) }),
  txt('rarity', '星级', { options: RARITY_OPTIONS }),
  txt('roleName', '定位'),
  area('talents', '天赋升级顺序'),
  txt('artifacts', '圣遗物推荐'),
  txt('mainStats', '主词条推荐'),
  area('summary', '一句话攻略'),
  num('sortOrder', '排序值（小的在前）'),
  txt('status', '首页显示状态', { options: STATUS_OPTIONS })
]

const WEAPON_FIELDS = [
  txt('name', '武器名', { hint: '武器名被「角色武器推荐 / 适配角色 / 养成材料」按名称关联，改名后这些关联展示可能变化' }),
  txt('rarity', '星级', { options: RARITY_OPTIONS }),
  txt('type', '武器类型', { options: WEAPON_TYPE_OPTIONS }),
  txt('stat', '副属性'),
  num('atk1', '1 级基础攻击力（白值）'),
  num('atk90', '90 级基础攻击力（白值）', { hint: '数值口径见 springBootTest/sql/weapon_90_stats.sql' }),
  txt('subStat', '副词条名称（90级）'),
  txt('subValue', '副词条 90 级提升值', { hint: '带单位，如 44.1%、66.2%、198' }),
  area('description', '武器效果描述'),
  num('sortOrder', '排序值（小的在前）'),
  txt('status', '首页显示状态', { options: STATUS_OPTIONS })
]

const CHAR_WEAPON_FIELDS = [
  txt('characterName', '角色名'),
  txt('element', '角色元素', { options: ELEMENT_OPTIONS }),
  txt('weaponName', '推荐武器名'),
  txt('rarity', '武器星级', { options: RARITY_OPTIONS }),
  txt('reason', '推荐理由', { multiline: true }),
  num('sortOrder', '推荐优先级（小的更推荐）')
]

const TEAM_FIELDS = [
  txt('name', '队伍名'),
  txt('core', '核心机制'),
  area('tip', '输出手法 / 要点'),
  txt('m1Name', '位置 1 · 角色'), txt('m1Element', '位置 1 · 元素', { options: ELEMENT_OPTIONS }),
  txt('m2Name', '位置 2 · 角色'), txt('m2Element', '位置 2 · 元素', { options: ELEMENT_OPTIONS }),
  txt('m3Name', '位置 3 · 角色'), txt('m3Element', '位置 3 · 元素', { options: ELEMENT_OPTIONS }),
  txt('m4Name', '位置 4 · 角色'), txt('m4Element', '位置 4 · 元素', { options: ELEMENT_OPTIONS }),
  num('sortOrder', '排序值（小的在前）'),
  txt('status', '首页显示状态', { options: STATUS_OPTIONS })
]

const ARTIFACT_FIELDS = [
  txt('name', '套装名'),
  txt('rarity', '稀有度', { options: RARITY_OPTIONS }),
  txt('element', '主题标签', { hint: '元素 / 定位，如 火、攻击、精通、充能' }),
  txt('region', '获取区域'),
  area('twoPiece', '2 件套效果'),
  area('fourPiece', '4 件套效果'),
  txt('flavor', '定位提示 / 备注'),
  txt('image', '图标路径', { hint: 'public 目录下的路径，如 /artifacts/xxx.png' }),
  txt('themeColor', '卡片主题色', { hint: '十六进制色值，如 #e0604a' }),
  num('sortOrder', '排序值（小的在前）'),
  txt('status', '首页显示状态', { options: STATUS_OPTIONS })
]

// ---------------- Tab 配置驱动 ----------------
const CHAR_TALENT_FIELDS = [
  txt('characterName', '角色名', { hint: '需与「角色养成」中的角色名一致，首页按名称匹配' }),
  txt('talentType', '天赋类型', { options: opts(['普通攻击', '元素战技', '元素爆发', '固有天赋', '其它']) }),
  txt('talentName', '天赋名称'),
  area('description', '天赋效果描述'),
  num('priority', '升级优先级（1 最高）', { default: 3, hint: '首页显示「优先 N」徽章，建议填 1~3' }),
  num('recommendedLevel', '推荐等级', { default: 8, hint: '首页显示 Lv.x 进度条，建议填 1~15' }),
  num('sortOrder', '展示顺序（小的在前）', { default: 0 }),
  txt('status', '首页显示状态', { options: STATUS_OPTIONS })
]

const CHAR_CONSTELLATION_FIELDS = [
  txt('characterName', '角色名', { hint: '需与「角色养成」中的角色名一致，首页按名称匹配' }),
  txt('setName', '命座套名', { hint: '可留空；留空时首页标题显示「命之座」' }),
  num('constLevel', '第几命（1~6）', { default: 1 }),
  txt('name', '命座名称'),
  area('description', '命座效果描述'),
  num('sortOrder', '展示顺序（小的在前）', { default: 0 }),
  txt('status', '首页显示状态', { options: STATUS_OPTIONS })
]

const CHAR_SUBSTAT_FIELDS = [
  txt('characterName', '角色名', { hint: '需与「角色养成」中的角色名一致，首页按名称匹配' }),
  txt('statName', '副词条名称', { hint: '如 暴击率 / 暴击伤害 / 生命值% / 元素充能效率' }),
  txt('tier', '优先级档位', { options: opts(['核心', '重要', '可用', '低收益']), default: '可用' }),
  area('reason', '收益依据', { hint: '说明该词条为何适合这个角色' }),
  num('sortOrder', '展示顺序（小的在前）', { default: 0 }),
  txt('status', '首页显示状态', { options: STATUS_OPTIONS })
]

const CHAR_PANEL_FIELDS = [
  txt('characterName', '角色名', { hint: '需与「角色养成」中的角色名一致，首页按名称匹配' }),
  txt('statLabel', '面板词条名', { hint: '如 生命值 / 暴击率 / 元素充能效率 / 治疗加成' }),
  txt('targetValue', '毕业目标值', { hint: '如 3.0 万+ / 70%+ / 900~1000' }),
  area('note', '说明', { hint: '为什么这个数值重要、如何达成' }),
  num('sortOrder', '展示顺序（小的在前）', { default: 0 }),
  txt('status', '首页显示状态', { options: STATUS_OPTIONS })
]

const tabDefs = [
  { key: 'characters', label: '角色养成' },
  { key: 'weapons', label: '武器养成' },
  { key: 'charWeapons', label: '武器推荐' },
  { key: 'teams', label: '队伍推荐' },
  { key: 'artifactSets', label: '圣遗物套装' },
  { key: 'charTalents', label: '天赋详情', group: 'talent' },
  { key: 'charConstellations', label: '命之座详情', group: 'talent' },
  { key: 'charSubstats', label: '副词条优先级', group: 'build' },
  { key: 'charPanels', label: '毕业面板', group: 'build' }
]

const CONFIG = {
  characters: {
    short: '角色', path: '/characters',
    placeholder: '搜索角色名 / 元素 / 定位 / 圣遗物…',
    searchKeys: ['name', 'element', 'roleName', 'talents', 'artifacts', 'mainStats', 'summary'],
    fields: CHARACTER_FIELDS,
    columns: [
      { key: 'id', label: 'ID', dim: true },
      { key: 'name', label: '角色名', name: true },
      { key: 'element', label: '元素' },
      { key: 'rarity', label: '星级', type: 'rarity' },
      { key: 'roleName', label: '定位', clip: true },
      { key: 'artifacts', label: '圣遗物', clip: true },
      { key: 'mainStats', label: '主词条', clip: true },
      { key: 'status', label: '状态', type: 'status' },
      { key: 'sortOrder', label: '排序', dim: true }
    ]
  },
  weapons: {
    short: '武器', path: '/weapons',
    placeholder: '搜索武器名 / 类型 / 副属性 / 效果…',
    searchKeys: ['name', 'type', 'stat', 'subStat', 'subValue', 'description'],
    fields: WEAPON_FIELDS,
    columns: [
      { key: 'id', label: 'ID', dim: true },
      { key: 'name', label: '武器名', name: true },
      { key: 'rarity', label: '星级', type: 'rarity' },
      { key: 'type', label: '类型' },
      { key: 'stat', label: '副属性', clip: true },
      { key: 'atk90', label: '90级攻击', dim: true },
      { key: 'subValue', label: '副词条提升', clip: true },
      { key: 'description', label: '效果描述', clip: true, wide: true },
      { key: 'status', label: '状态', type: 'status' },
      { key: 'sortOrder', label: '排序', dim: true }
    ]
  },
  charWeapons: {
    short: '武器推荐', path: '/char-weapons',
    placeholder: '搜索角色名 / 武器名 / 推荐理由…',
    searchKeys: ['characterName', 'element', 'weaponName', 'reason'],
    fields: CHAR_WEAPON_FIELDS,
    columns: [
      { key: 'id', label: 'ID', dim: true },
      { key: 'characterName', label: '角色名', name: true },
      { key: 'element', label: '元素' },
      { key: 'weaponName', label: '推荐武器', name: true },
      { key: 'rarity', label: '星级', type: 'rarity' },
      { key: 'w90', label: '90级数值（关联武器养成）', clip: true, wide: true },
      { key: 'reason', label: '推荐理由', clip: true, wide: true },
      { key: 'sortOrder', label: '优先级', dim: true }
    ]
  },
  teams: {
    short: '队伍', path: '/teams',
    placeholder: '搜索队伍名 / 核心机制 / 成员…',
    searchKeys: ['name', 'core', 'tip', 'm1Name', 'm2Name', 'm3Name', 'm4Name'],
    fields: TEAM_FIELDS,
    columns: [
      { key: 'id', label: 'ID', dim: true },
      { key: 'name', label: '队伍名', name: true },
      { key: 'core', label: '核心机制', clip: true },
      { key: 'm1Name', label: '位置1' },
      { key: 'm2Name', label: '位置2' },
      { key: 'm3Name', label: '位置3' },
      { key: 'm4Name', label: '位置4' },
      { key: 'status', label: '状态', type: 'status' },
      { key: 'sortOrder', label: '排序', dim: true }
    ]
  },
  artifactSets: {
    short: '圣遗物', path: '/artifact-sets',
    placeholder: '搜索套装名 / 标签 / 区域 / 套装效果…',
    searchKeys: ['name', 'element', 'region', 'flavor', 'twoPiece', 'fourPiece'],
    fields: ARTIFACT_FIELDS,
    columns: [
      { key: 'id', label: 'ID', dim: true },
      { key: 'image', label: '图标', type: 'image' },
      { key: 'name', label: '套装名', name: true },
      { key: 'rarity', label: '稀有度', type: 'rarity' },
      { key: 'element', label: '标签' },
      { key: 'region', label: '区域' },
      { key: 'twoPiece', label: '2 件套效果', clip: true, wide: true },
      { key: 'fourPiece', label: '4 件套效果', clip: true, wide: true },
      { key: 'status', label: '状态', type: 'status' },
      { key: 'sortOrder', label: '排序', dim: true }
    ]
  },
  charTalents: {
    short: '天赋', path: '/char-talents',
    placeholder: '搜索角色名 / 天赋类型 / 天赋名 / 效果描述…',
    searchKeys: ['characterName', 'talentType', 'talentName', 'description'],
    fields: CHAR_TALENT_FIELDS,
    columns: [
      { key: 'id', label: 'ID', dim: true },
      { key: 'characterName', label: '角色名', name: true },
      { key: 'talentType', label: '天赋类型' },
      { key: 'talentName', label: '天赋名称', name: true },
      { key: 'priority', label: '优先级', dim: true },
      { key: 'recommendedLevel', label: '推荐等级', dim: true },
      { key: 'description', label: '效果描述', clip: true, wide: true },
      { key: 'sortOrder', label: '顺序', dim: true },
      { key: 'status', label: '状态', type: 'status' }
    ]
  },
  charConstellations: {
    short: '命座', path: '/char-constellations',
    placeholder: '搜索角色名 / 命座套名 / 命座名 / 效果描述…',
    searchKeys: ['characterName', 'setName', 'name', 'description'],
    fields: CHAR_CONSTELLATION_FIELDS,
    columns: [
      { key: 'id', label: 'ID', dim: true },
      { key: 'characterName', label: '角色名', name: true },
      { key: 'constLevel', label: '命数', dim: true },
      { key: 'name', label: '命座名称', name: true },
      { key: 'setName', label: '命座套名', clip: true },
      { key: 'description', label: '效果描述', clip: true, wide: true },
      { key: 'sortOrder', label: '顺序', dim: true },
      { key: 'status', label: '状态', type: 'status' }
    ]
  },
  charSubstats: {
    short: '副词条', path: '/char-substats',
    placeholder: '搜索角色名 / 副词条名 / 档位 / 收益依据…',
    searchKeys: ['characterName', 'statName', 'tier', 'reason'],
    fields: CHAR_SUBSTAT_FIELDS,
    columns: [
      { key: 'id', label: 'ID', dim: true },
      { key: 'characterName', label: '角色名', name: true },
      { key: 'statName', label: '副词条', name: true },
      { key: 'tier', label: '档位' },
      { key: 'reason', label: '收益依据', clip: true, wide: true },
      { key: 'sortOrder', label: '顺序', dim: true },
      { key: 'status', label: '状态', type: 'status' }
    ]
  },
  charPanels: {
    short: '毕业面板', path: '/char-panels',
    placeholder: '搜索角色名 / 词条名 / 目标值 / 说明…',
    searchKeys: ['characterName', 'statLabel', 'targetValue', 'note'],
    fields: CHAR_PANEL_FIELDS,
    columns: [
      { key: 'id', label: 'ID', dim: true },
      { key: 'characterName', label: '角色名', name: true },
      { key: 'statLabel', label: '面板词条', name: true },
      { key: 'targetValue', label: '毕业目标值' },
      { key: 'note', label: '说明', clip: true, wide: true },
      { key: 'sortOrder', label: '顺序', dim: true },
      { key: 'status', label: '状态', type: 'status' }
    ]
  }
}

const datasets = ref({
  characters: [], weapons: [], charWeapons: [], teams: [], artifactSets: [],
  charTalents: [], charConstellations: [], charSubstats: [], charPanels: []
})

const current = computed(() => CONFIG[tab.value])
const currentList = computed(() => datasets.value[tab.value] || [])

const filtered = computed(() => {
  const kw = String(keyword.value || '').trim().toLowerCase()
  if (!kw) return currentList.value
  return currentList.value.filter(row => current.value.searchKeys.some(k =>
    String(row[k] ?? '').toLowerCase().includes(kw)))
})

function cellClass(c) {
  return { dim: c.dim, name: c.name, clip: c.clip, wide: c.wide }
}
function display(row, c) {
  if (c.key === 'w90') {
    const w = (datasets.value.weapons || []).find(x => x.name === row.weaponName)
    if (!w || !w.atk90) return '—'
    const gain = (Number(w.atk90) || 0) - (Number(w.atk1) || 0)
    return `90级 ${w.atk90}（1级 ${w.atk1 ?? '—'}，+${gain}）· ${w.subStat || '副词条'} +${w.subValue || ''}`
  }
  const v = row[c.key]
  return v === null || v === undefined ? '' : v
}

// ---------------- 滚动 ----------------
function onScroll(e) {
  showTop.value = e.target.scrollTop > 400
}
function toTop() {
  scroller.value?.scrollTo({ top: 0, behavior: 'smooth' })
}
function switchTab(key) {
  tab.value = key
  keyword.value = ''
  toTop()
}
watch(keyword, () => toTop())

// ---------------- 请求 ----------------
async function request(path, options = {}) {
  const res = await fetch(API + path, { credentials: 'same-origin', ...options })
  return res.json()
}
function goLogin() {
  emit('goto', 'admin-login')
}

async function loadAll() {
  loading.value = true
  loadError.value = ''
  const keys = tabDefs.map(t => t.key)
  try {
    const results = await Promise.all(keys.map(k => request('/admin' + CONFIG[k].path)))
    if (results.some(r => r && r.code === 401)) {
      goLogin()
      return
    }
    keys.forEach((k, i) => {
      const r = results[i]
      if (r && r.code === 200 && Array.isArray(r.data)) datasets.value[k] = r.data
      else if (!loadError.value) loadError.value = (r && r.message) || (CONFIG[k].short + '数据加载失败')
    })
  } catch (e) {
    loadError.value = '连接服务器失败，请确认后端已启动'
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  try {
    const s = await request('/admin/session')
    if (s.code !== 200) {
      goLogin()
      return
    }
  } catch (e) {
    /* 交由 loadAll 统一报错 */
  }
  loadAll()
})

function openEdit(row) {
  const draft = {}
  for (const f of current.value.fields) draft[f.key] = row[f.key] ?? ''
  form.value = draft
  isAdd.value = false
  saveError.value = ''
  editing.value = row
}
function openAdd() {
  const draft = {}
  for (const f of current.value.fields) {
    draft[f.key] = f.options ? f.options[0].value : (f.type === 'number' ? (f.default ?? 0) : '')
  }
  if (current.value.fields.some(f => f.key === 'status')) draft.status = 1
  if (current.value.fields.some(f => f.key === 'rarity')) draft.rarity = 5
  form.value = draft
  isAdd.value = true
  saveError.value = ''
  editing.value = {}
}

async function save() {
  saveError.value = ''
  const nameKey = current.value.fields.find(f => f.key === 'name' || f.key === 'characterName')?.key
  if (nameKey && !String(form.value[nameKey] || '').trim()) {
    saveError.value = '名称不能为空'
    return
  }
  const payload = {}
  for (const f of current.value.fields) {
    let v = form.value[f.key]
    if (f.type === 'number' || f.key === 'rarity' || f.key === 'status') {
      v = (v === '' || v === null || v === undefined) ? null : Number(v)
    }
    payload[f.key] = v
  }
  saving.value = true
  try {
    const base = '/admin' + current.value.path
    const path = isAdd.value ? base : `${base}/${editing.value.id}`
    const data = await request(path, {
      method: isAdd.value ? 'POST' : 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    if (data.code === 200) {
      editing.value = null
      clearTimeout(toastTimer)
      toast.value = isAdd.value ? '已新增，返回首页即可看到最新数据' : '已保存，返回首页即可看到最新数据'
      toastTimer = setTimeout(() => { toast.value = '' }, 4000)
      await loadAll()
    } else if (data.code === 401) {
      goLogin()
    } else {
      saveError.value = data.message || '保存失败'
    }
  } catch (e) {
    saveError.value = '连接服务器失败，修改未保存'
  } finally {
    saving.value = false
  }
}

async function remove(row) {
  const label = row.characterName
    ? `${row.characterName} · ${row.talentName || row.name || ('第 ' + row.constLevel + ' 命')}`
    : (row.name || row.weaponName || ('ID ' + row.id))
  if (!window.confirm(`确定删除「${label}」吗？此操作不可撤销。`)) return
  try {
    const data = await request(`/admin${current.value.path}/${row.id}`, { method: 'DELETE' })
    if (data.code === 200) {
      clearTimeout(toastTimer)
      toast.value = '已删除'
      toastTimer = setTimeout(() => { toast.value = '' }, 3000)
      await loadAll()
    } else if (data.code === 401) {
      goLogin()
    } else {
      loadError.value = data.message || '删除失败'
    }
  } catch (e) {
    loadError.value = '连接服务器失败，删除未完成'
  }
}

async function logout() {
  try {
    await request('/admin/logout', { method: 'POST' })
  } catch (e) {
    /* 即使请求失败也回到登录页 */
  }
  emit('logout')
  emit('goto', 'login')
}
</script>

<style scoped>
.admin {
  position: relative;
  z-index: 5;
  /* 全局 body 锁了 overflow:hidden、#app 只有一屏高，
     后台页必须自己作为滚动容器才能从第 1 条拉到最后一条 */
  height: 100%;
  width: 100%;
  min-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: rgba(111, 143, 224, 0.6) rgba(255, 255, 255, 0.05);
  padding: 0 24px 40px;
  color: #e9eefb;
  background: rgba(5, 9, 20, 0.82);
  box-sizing: border-box;
}
.admin::-webkit-scrollbar { width: 10px; }
.admin::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.04); }
.admin::-webkit-scrollbar-thumb {
  background: rgba(111, 143, 224, 0.55);
  border: 2px solid rgba(5, 9, 20, 0.8);
  border-radius: 6px;
}
.admin::-webkit-scrollbar-thumb:hover { background: rgba(111, 143, 224, 0.85); }
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 4px;
  border-bottom: 1px solid rgba(180, 205, 255, 0.14);
}
.logo {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 2px;
  background: linear-gradient(90deg, #f6c35b, #a781e0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.sub { margin-top: 4px; font-size: 11px; letter-spacing: 1.5px; color: #7f93b8; }
.tools { display: flex; align-items: center; gap: 10px; }
.who { font-size: 13px; color: #a9b9d8; margin-right: 6px; }
.panel {
  margin: 22px auto 0;
  max-width: 1560px;
  padding: 20px 22px 16px;
  border-radius: 18px;
  background: rgba(16, 24, 44, 0.72);
  border: 1px solid rgba(180, 205, 255, 0.14);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
}
.tabs { display: flex; align-items: center; gap: 8px; border-bottom: 1px solid rgba(180, 205, 255, 0.12); padding-bottom: 14px; flex-wrap: wrap; }
.tabs button {
  padding: 9px 16px;
  border-radius: 10px;
  border: 1px solid rgba(180, 205, 255, 0.2);
  background: transparent;
  color: #b8c6e4;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;
}
.tabs button:hover { background: rgba(180, 205, 255, 0.1); }
/* 「天赋详情 / 命之座详情」同属模块六，用淡蓝边框在视觉上成组 */
.tabs button.tab-paired:not(.active) { border-color: rgba(138, 164, 248, 0.5); color: #bccbf3; }
.tabs button.active {
  color: #0a1224;
  border-color: transparent;
  background: linear-gradient(95deg, #6fd6c0, #4ec6f0);
  font-weight: 600;
}
.tabs em { font-style: normal; opacity: 0.75; margin-left: 6px; font-size: 12px; }
.tabs .refresh { margin-left: auto; }
.toolbar { display: flex; align-items: center; gap: 14px; padding: 16px 0 12px; flex-wrap: wrap; }
.toolbar input {
  width: min(340px, 100%);
  padding: 10px 14px;
  border-radius: 9px;
  border: 1px solid rgba(180, 205, 255, 0.2);
  background: rgba(6, 12, 28, 0.6);
  color: #eaf1ff;
  font-size: 13px;
  outline: none;
}
.toolbar input::placeholder { color: #63759a; }
.toolbar input:focus { border-color: #6f8fe0; }
.toolbar .add {
  padding: 9px 16px;
  border-radius: 9px;
  border: 1px solid rgba(111, 214, 192, 0.5);
  background: rgba(111, 214, 192, 0.14);
  color: #a5f0dd;
  font-size: 13px;
  cursor: pointer;
}
.toolbar .add:hover { background: rgba(111, 214, 192, 0.3); }
.count { font-size: 13px; color: #9fb0d0; }
.tip { margin-left: auto; font-size: 12px; color: #7f93b8; }
.banner { margin: 6px 0; padding: 9px 14px; border-radius: 8px; font-size: 12px; background: rgba(180, 205, 255, 0.1); color: #b8c6e4; }
.banner.error { background: rgba(220, 80, 80, 0.14); color: #ffc9c9; border: 1px solid rgba(220, 80, 80, 0.3); }
.banner.success { background: rgba(111, 214, 192, 0.14); color: #a5f0dd; border: 1px solid rgba(111, 214, 192, 0.3); }
.table-wrap {
  border: 1px solid rgba(180, 205, 255, 0.1);
  border-radius: 12px;
}
table { width: 100%; border-collapse: collapse; font-size: 13px; min-width: 900px; }
th {
  position: sticky;
  top: 0;
  z-index: 2;
  text-align: left;
  padding: 12px 12px;
  background: rgba(10, 16, 34, 0.96);
  color: #8fa2c7;
  font-weight: 600;
  white-space: nowrap;
  border-bottom: 1px solid rgba(180, 205, 255, 0.14);
}
td { padding: 11px 12px; border-bottom: 1px solid rgba(180, 205, 255, 0.07); color: #d3def3; vertical-align: middle; }
tbody tr:hover { background: rgba(111, 143, 224, 0.08); }
td.name { color: #f6c35b; font-weight: 600; white-space: nowrap; }
td.dim { color: #7f93b8; }
td.clip { max-width: 220px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
td.clip.wide { max-width: 320px; }
td.op-col, th.op-col { white-space: nowrap; }
.cell-img { width: 34px; height: 34px; border-radius: 50%; object-fit: cover; border: 1px solid rgba(180,205,255,0.25); }
.tag { display: inline-block; padding: 3px 9px; border-radius: 6px; font-size: 11px; }
.tag.on { background: rgba(111, 214, 192, 0.16); color: #8fe6d4; }
.tag.off { background: rgba(220, 120, 120, 0.16); color: #f0a9a9; }
button.edit, button.del {
  padding: 6px 12px;
  border-radius: 7px;
  font-size: 12px;
  cursor: pointer;
}
button.edit {
  border: 1px solid rgba(111, 143, 224, 0.5);
  background: rgba(111, 143, 224, 0.14);
  color: #cddaff;
}
button.edit:hover { background: rgba(111, 143, 224, 0.32); }
button.del {
  margin-left: 6px;
  border: 1px solid rgba(220, 120, 120, 0.4);
  background: rgba(220, 120, 120, 0.1);
  color: #f0a9a9;
}
button.del:hover { background: rgba(220, 120, 120, 0.26); }
.empty { padding: 48px; text-align: center; color: #7f93b8; font-size: 13px; }
.list-end { padding: 16px 4px 2px; text-align: center; font-size: 12px; color: #7f93b8; }
.scroll-hint { font-size: 12px; color: #8fe6d4; }
.to-top {
  position: fixed;
  right: 28px;
  bottom: 28px;
  z-index: 15;
  padding: 10px 16px;
  border-radius: 999px;
  border: 1px solid rgba(111, 143, 224, 0.55);
  background: rgba(22, 32, 58, 0.94);
  color: #cddaff;
  font-size: 13px;
  cursor: pointer;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.45);
}
.to-top:hover { background: rgba(111, 143, 224, 0.32); }
.ghost {
  padding: 8px 16px;
  border-radius: 9px;
  border: 1px solid rgba(180, 205, 255, 0.24);
  background: rgba(180, 205, 255, 0.06);
  color: #c7d4f0;
  font-size: 13px;
  cursor: pointer;
}
.ghost:hover { background: rgba(180, 205, 255, 0.14); }
.ghost.danger:hover { background: rgba(220, 80, 80, 0.16); color: #ffc9c9; }
.mask {
  position: fixed;
  inset: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(3, 6, 14, 0.72);
  backdrop-filter: blur(4px);
}
.modal {
  width: min(760px, 96vw);
  max-height: 88vh;
  overflow-y: auto;
  padding: 24px 26px;
  border-radius: 18px;
  background: linear-gradient(160deg, rgba(22, 30, 54, 0.98), rgba(11, 16, 32, 0.98));
  border: 1px solid rgba(180, 205, 255, 0.2);
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.6);
}
.modal-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
.modal h3 { margin: 0; font-size: 18px; font-weight: 600; color: #f6c35b; }
.close { border: none; background: transparent; color: #8fa2c7; font-size: 26px; cursor: pointer; line-height: 1; }
.close:hover { color: #fff; }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.form-grid label { display: flex; flex-direction: column; gap: 7px; }
.form-grid label.full { grid-column: 1 / -1; }
.form-grid span { font-size: 12px; color: #9fb0d0; }
.form-grid small { font-size: 11px; line-height: 1.6; color: #d8a86a; }
.form-grid input,
.form-grid select,
.form-grid textarea {
  width: 100%;
  box-sizing: border-box;
  padding: 9px 12px;
  border-radius: 8px;
  border: 1px solid rgba(180, 205, 255, 0.2);
  background: rgba(6, 12, 28, 0.7);
  color: #eaf1ff;
  font-size: 13px;
  outline: none;
  font-family: inherit;
  resize: vertical;
}
.form-grid input:focus,
.form-grid select:focus,
.form-grid textarea:focus { border-color: #6f8fe0; }
.modal-actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 22px; }
.modal-actions .primary {
  padding: 9px 24px;
  border-radius: 9px;
  border: none;
  background: linear-gradient(95deg, #6fd6c0, #4ec6f0);
  color: #06121f;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
}
.modal-actions .primary:disabled { opacity: 0.6; cursor: wait; }
@media (max-width: 980px) {
  .table-wrap { overflow-x: auto; }
}
@media (max-width: 720px) {
  .admin { padding: 0 12px 30px; }
  .form-grid { grid-template-columns: 1fr; }
  .tip { display: none; }
  .topbar { flex-wrap: wrap; }
}
</style>

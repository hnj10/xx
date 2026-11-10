<template>
  <div class="wrd">
    <header class="topbar">
      <button class="back" @click="$emit('back')">← 返回武器推荐</button>
      <div class="brand">
        <span class="logo">武器适配详情</span>
        <span class="sub">Weapon Compatibility</span>
      </div>
      <span class="crumb">{{ name }}</span>
    </header>

    <!-- ===== 角色概览 ===== -->
    <section class="hero" :style="{ '--elc': eleColor(fit.element) }">
      <div class="portrait">
        <img v-if="charImg(name)" :src="charImg(name)" :alt="name" />
        <span v-else class="ph">{{ name.slice(0, 1) }}</span>
        <i class="ele-dot"></i>
      </div>
      <div class="info">
        <div class="title">
          <h1>{{ name }}</h1>
          <span class="stars" :class="'r' + fit.rarity">{{ star(fit.rarity) }}</span>
          <span class="ele-tag">{{ fit.element }}元素</span>
        </div>
        <p class="role-line">{{ fit.role || '旅行者' }} <span class="sep">·</span> 可用武器类型 <b>{{ fit.weaponType }}</b></p>
        <p class="summary">{{ fit.summary || '点击查看该角色全部可用武器与适配度。' }}</p>
        <div class="quick">
          <div><span class="k">天赋优先级</span><span class="v">{{ fit.talents || '—' }}</span></div>
          <div><span class="k">圣遗物主词条</span><span class="v">{{ fit.mainStats || '—' }}</span></div>
        </div>
      </div>
      <div class="hero-stat">
        <div class="big">{{ fit.total }}<small>把可用武器</small></div>
        <div class="hs-row"><span>最高适配度</span><b>{{ fit.topFit }}%</b></div>
        <div class="hs-row"><span>首选武器</span><b class="gold">{{ fit.primary || '—' }}</b></div>
        <div class="hs-row"><span>五星 / 四星 / 三星</span><b>{{ fit.groups.five.length }} / {{ fit.groups.four.length }} / {{ fit.groups.three.length }}</b></div>
      </div>
    </section>

    <!-- ===== 排序说明 ===== -->
    <div class="hint-bar">
      <span class="hint-icon">✦</span>
      <span>每个分区内按 <b>适配度由高到低</b> 排列；五星与四星分区展示，三星武器归入「过渡选择」。</span>
    </div>

    <!-- ===== 五星 / 四星 / 三星 ===== -->
    <section v-for="g in sections" :key="g.key" class="sec" :class="'sec-' + g.key">
      <div class="sec-head">
        <span class="sec-tag" :class="g.tagClass">{{ g.label }}</span>
        <h2>{{ g.title }}</h2>
        <span class="sec-count">{{ g.list.length }} 把 · {{ g.sub }}</span>
        <button v-if="g.collapsible" class="fold" @click="showThree = !showThree">
          {{ showThree ? '收起 ▲' : '展开全部 ▼' }}
        </button>
      </div>

      <div v-if="!g.collapsible || showThree" class="wgrid">
        <article
          v-for="w in g.list"
          :key="w.name"
          class="wcard"
          :class="{ 'is-top': w.rank <= 3, 'is-primary': w.isPrimary, 'is-secondary': w.isSecondary }"
        >
          <div class="rank" :class="'rk' + (w.rank <= 3 ? w.rank : 0)">{{ String(w.rank).padStart(2, '0') }}</div>
          <div class="wc-head">
            <span class="wname">{{ w.name }}</span>
            <span class="stars" :class="'r' + w.rarity">{{ star(w.rarity) }}</span>
          </div>

          <div class="fit-row">
            <span class="tier" :class="'t' + w.tier">{{ w.tier }} · {{ w.tierLabel }}</span>
            <b class="fitnum">{{ w.fit }}<small>%</small></b>
          </div>
          <div class="bar"><i :class="'t' + w.tier" :style="{ width: w.fit + '%' }"></i></div>

          <p class="reason">{{ w.reason }}</p>

          <div class="wstats">
            <div v-if="w.atk90">
              <span class="k">90级基础攻击力</span>
              <b class="v atk">{{ w.atk90 }}</b>
              <small v-if="w.atk1">（1级 {{ w.atk1 }} → 提升 +{{ w.atk90 - w.atk1 }}）</small>
            </div>
            <div>
              <span class="k">副词条提升</span>
              <b class="v">{{ w.subStat }} +{{ w.subValue }}</b>
            </div>
          </div>
          <p v-if="w.desc" class="desc">{{ w.desc }}</p>
          <div v-if="w.tags.length" class="tags">
            <span v-for="t in w.tags" :key="t" :class="{ gold: t === '首选推荐', blue: t === '次选推荐' }">{{ t }}</span>
          </div>
        </article>
      </div>
      <div v-else class="fold-note">点击「展开全部」查看 {{ g.list.length }} 把三星过渡武器</div>
    </section>

    <p class="notice">
      适配度由「角色推荐武器命中 + 副词条与定位/主词条契合 + 被动描述与元素及输出方式契合 + 90级白值 + 星级基准」综合计算，
      用于同一角色内部横向对比，不代表跨角色强度。五星不等于一定比四星更契合：专武与副词条对得上的四星，评分可能高于不契合的五星。
      数值随后台武器养成 / 武器推荐数据自动更新。
    </p>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { NATIONS } from '../data/nations.js'
import { ELEMENT_NATION } from '../data/homeData.js'
import { charImg } from '../data/imageMap.js'
import { buildWeaponFit } from '../data/weaponFit.js'

const props = defineProps({
  name: { type: String, required: true },
  weapons: { type: Array, default: () => [] },
  charWeapons: { type: Array, default: () => [] },
  characters: { type: Array, default: () => [] }
})
defineEmits(['back'])

const showThree = ref(false)

const fit = computed(() => buildWeaponFit(props.name, props.weapons, props.charWeapons, props.characters))

const sections = computed(() => [
  {
    key: 'five', label: '★★★★★', tagClass: 'gold', title: '五星武器推荐',
    sub: '按适配度由高到低 · 优先级最高', list: fit.value.groups.five, collapsible: false
  },
  {
    key: 'four', label: '★★★★', tagClass: 'purple', title: '四星武器推荐',
    sub: '按适配度由高到低 · 平民/纪行优选', list: fit.value.groups.four, collapsible: false
  },
  {
    key: 'three', label: '★★★', tagClass: 'gray', title: '三星过渡选择',
    sub: '前期过渡 · 默认收起', list: fit.value.groups.three, collapsible: true
  }
])

function star(n) { return '★'.repeat(Number(n) || 0) }
function eleColor(element) {
  const n = NATIONS.find(x => x.name === ELEMENT_NATION[element]) || NATIONS[0]
  return n.hex
}
</script>

<style scoped>
.wrd { width: 100%; max-width: 1180px; margin: 0 auto; padding-bottom: 30px; }

.topbar {
  position: sticky; top: 0; z-index: 20;
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 12px 18px; margin: 12px 0 18px;
  border-radius: 16px;
  background: linear-gradient(160deg, rgba(20, 28, 52, 0.92), rgba(10, 14, 30, 0.88));
  backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.45);
}
.back {
  padding: 8px 16px; border-radius: 10px;
  border: 1px solid rgba(160, 200, 255, 0.35);
  background: rgba(80, 130, 220, 0.16); color: #dce7ff;
  font-size: 13px; cursor: pointer; transition: all 0.2s ease;
}
.back:hover { background: rgba(80, 130, 220, 0.34); }
.brand { display: flex; align-items: baseline; gap: 10px; }
.logo { font-size: 18px; font-weight: 700; letter-spacing: 3px; color: #e9eefb; }
.sub { font-size: 11px; letter-spacing: 2px; color: #8fa2c7; }
.crumb { font-size: 13px; color: #f6c35b; font-weight: 600; }

/* ===== 角色概览 ===== */
.hero {
  display: grid; grid-template-columns: 150px 1fr 250px; gap: 22px; align-items: center;
  padding: 22px 26px; margin-bottom: 16px;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(30, 42, 74, 0.86), rgba(12, 18, 36, 0.9));
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.35);
  position: relative; overflow: hidden;
}
.hero::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(circle at 12% 30%, var(--elc), transparent 46%);
  opacity: 0.22; pointer-events: none;
}
.portrait { position: relative; width: 140px; height: 140px; border-radius: 18px; overflow: hidden; border: 1px solid rgba(255,255,255,0.18); }
.portrait img { width: 100%; height: 100%; object-fit: cover; display: block; }
.portrait .ph { display: flex; width: 100%; height: 100%; align-items: center; justify-content: center; font-size: 46px; background: rgba(255,255,255,0.08); }
.ele-dot { position: absolute; right: 8px; bottom: 8px; width: 14px; height: 14px; border-radius: 50%; background: var(--elc); box-shadow: 0 0 12px var(--elc); border: 2px solid rgba(255,255,255,0.75); }
.info { position: relative; min-width: 0; }
.title { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.title h1 { margin: 0; font-size: 28px; color: #eef3ff; letter-spacing: 1px; }
.stars { font-size: 14px; letter-spacing: 1px; }
.stars.r5 { color: #f6c35b; } .stars.r4 { color: #b79bf0; } .stars.r3 { color: #8fa2c7; }
.ele-tag { font-size: 11px; padding: 3px 9px; border-radius: 20px; border: 1px solid var(--elc); color: var(--elc); }
.role-line { margin: 9px 0 6px; font-size: 13px; color: #cbd7f2; }
.role-line b { color: #f6c35b; }
.sep { margin: 0 6px; color: #6d7fa6; }
.summary { margin: 0 0 12px; font-size: 12.5px; color: #9fb0d8; line-height: 1.7; }
.quick { display: flex; flex-direction: column; gap: 6px; }
.quick > div, .hs-row { display: flex; align-items: baseline; gap: 10px; font-size: 12px; }
.quick .k { flex: 0 0 92px; color: #7d8fb8; }
.quick .v { color: #dbe6ff; }
.hero-stat { position: relative; padding: 16px; border-radius: 16px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); }
.big { font-size: 34px; font-weight: 700; color: #f6c35b; line-height: 1.1; margin-bottom: 12px; }
.big small { display: block; font-size: 11px; font-weight: 400; color: #9fb0d8; margin-top: 4px; letter-spacing: 1px; }
.hs-row { justify-content: space-between; padding: 5px 0; border-top: 1px solid rgba(255,255,255,0.07); color: #9fb0d8; }
.hs-row b { color: #e7eeff; }
.hs-row b.gold { color: #f6c35b; }

/* ===== 提示条 ===== */
.hint-bar {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 16px; margin-bottom: 20px;
  border-radius: 12px; font-size: 12.5px; color: #a9bce4;
  background: rgba(80, 130, 220, 0.1); border: 1px solid rgba(120, 165, 240, 0.22);
}
.hint-bar b { color: #f6c35b; }
.hint-icon { color: #f6c35b; }

/* ===== 分区 ===== */
.sec { margin-bottom: 26px; }
.sec-head { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; flex-wrap: wrap; }
.sec-head h2 { margin: 0; font-size: 19px; color: #e9eefb; letter-spacing: 1px; }
.sec-tag { font-size: 11px; letter-spacing: 1px; padding: 4px 10px; border-radius: 8px; font-weight: 600; }
.sec-tag.gold { color: #f6c35b; background: rgba(246,195,91,0.14); border: 1px solid rgba(246,195,91,0.3); }
.sec-tag.purple { color: #b79bf0; background: rgba(167,129,224,0.14); border: 1px solid rgba(167,129,224,0.3); }
.sec-tag.gray { color: #9fb0d8; background: rgba(159,176,216,0.12); border: 1px solid rgba(159,176,216,0.25); }
.sec-count { font-size: 12px; color: #8fa2c7; }
.fold { margin-left: auto; padding: 6px 12px; font-size: 12px; cursor: pointer; border-radius: 8px; border: 1px solid rgba(160,200,255,0.3); background: rgba(80,130,220,0.14); color: #dce7ff; }
.fold:hover { background: rgba(80,130,220,0.3); }
.fold-note { padding: 26px; text-align: center; font-size: 12.5px; color: #8fa2c7; border: 1px dashed rgba(255,255,255,0.16); border-radius: 14px; background: rgba(255,255,255,0.025); }

.wgrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
.wcard {
  position: relative; padding: 16px 18px 14px 52px;
  border-radius: 16px;
  background: linear-gradient(160deg, rgba(28, 38, 66, 0.8), rgba(14, 20, 38, 0.86));
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
  transition: transform 0.2s ease, border-color 0.2s ease;
}
.wcard:hover { transform: translateY(-2px); border-color: rgba(160,200,255,0.35); }
.wcard.is-primary { border-color: rgba(246,195,91,0.5); box-shadow: 0 8px 28px rgba(246,195,91,0.12); }
.wcard.is-secondary { border-color: rgba(167,129,224,0.4); }
.rank { position: absolute; left: 14px; top: 16px; font-size: 18px; font-weight: 700; color: #6d7fa6; font-variant-numeric: tabular-nums; }
.rank.rk1 { color: #f6c35b; } .rank.rk2 { color: #d8e2f8; } .rank.rk3 { color: #d5a06a; }
.wc-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.wname { font-size: 16px; font-weight: 600; color: #eef3ff; }
.fit-row { display: flex; align-items: center; justify-content: space-between; margin-top: 12px; }
.tier { font-size: 11px; padding: 3px 9px; border-radius: 20px; font-weight: 600; }
.tier.tS { color: #f6c35b; background: rgba(246,195,91,0.16); }
.tier.tA { color: #8fe0c0; background: rgba(111,214,192,0.14); }
.tier.tB { color: #8fb8f0; background: rgba(120,165,240,0.14); }
.tier.tC { color: #a9bce4; background: rgba(159,176,216,0.12); }
.tier.tD { color: #8b96ae; background: rgba(139,150,174,0.12); }
.fitnum { font-size: 25px; font-weight: 700; color: #f6c35b; line-height: 1; }
.fitnum small { font-size: 12px; margin-left: 2px; color: #c9b477; }
.bar { height: 6px; border-radius: 6px; background: rgba(255,255,255,0.09); overflow: hidden; margin-top: 8px; }
.bar i { display: block; height: 100%; border-radius: 6px; transition: width 0.4s ease; }
.bar i.tS { background: linear-gradient(90deg, #d8a13f, #f6c35b); }
.bar i.tA { background: linear-gradient(90deg, #4fa98f, #8fe0c0); }
.bar i.tB { background: linear-gradient(90deg, #4f7fc0, #8fb8f0); }
.bar i.tC, .bar i.tD { background: linear-gradient(90deg, #5a6784, #9fb0d8); }
.reason { margin: 12px 0 10px; font-size: 12.5px; line-height: 1.7; color: #c3d0ee; }
.wstats { display: flex; flex-direction: column; gap: 5px; padding: 10px 12px; border-radius: 10px; background: rgba(255,255,255,0.045); }
.wstats > div { display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap; font-size: 11.5px; }
.wstats .k { color: #7d8fb8; flex: 0 0 auto; }
.wstats .v { color: #e7eeff; font-weight: 600; }
.wstats .v.atk { color: #f6c35b; }
.wstats small { color: #8fa2c7; }
.desc { margin: 10px 0 0; font-size: 11.5px; line-height: 1.65; color: #8fa2c7; }
.tags { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 10px; }
.tags span { font-size: 10.5px; padding: 2px 8px; border-radius: 6px; color: #a9bce4; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.1); }
.tags span.gold { color: #f6c35b; background: rgba(246,195,91,0.14); border-color: rgba(246,195,91,0.3); }
.tags span.blue { color: #b79bf0; background: rgba(167,129,224,0.14); border-color: rgba(167,129,224,0.3); }
.notice { margin: 8px 0 0; padding: 16px 18px; border-radius: 14px; font-size: 11.5px; line-height: 1.8; color: #8fa2c7; background: rgba(255,255,255,0.035); border: 1px solid rgba(255,255,255,0.08); }

@media (max-width: 860px) {
  .hero { grid-template-columns: 110px 1fr; }
  .portrait { width: 105px; height: 105px; }
  .hero-stat { grid-column: 1 / -1; }
  .wgrid { grid-template-columns: 1fr; }
}
</style>

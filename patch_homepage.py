# -*- coding: utf-8 -*-
"""首页新增「旅行者 · 七元素共鸣」展示区（模板 + computed + 样式），幂等"""
import io, os

p = r'C:\Users\20285\IdeaProjects\xx\genshin-login-vue\src\components\HomePage.vue'
src = io.open(p, encoding='utf-8').read().replace('\r\n', '\n')

MARK = '旅行者 · 七元素共鸣'
if MARK in src:
    print('  [skip] 展示区已存在')
else:
    # ---------- 1) 模板 ----------
    anchor = """          <span class="sec-count">{{ chars.length }} 位角色</span>
          <div v-if="charGroups.length" class="view-toggle">
            <button :class="{ active: charGrouped }" @click="charGrouped = true">按元素</button>
            <button :class="{ active: !charGrouped }" @click="charGrouped = false">平铺</button>
          </div>
        </div>

        <!-- 分组视图：按元素分栏 -->"""
    block = """          <span class="sec-count">{{ chars.length }} 位角色</span>
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

        <!-- 分组视图：按元素分栏 -->"""
    if anchor not in src: raise RuntimeError('模板锚点未找到')
    src = src.replace(anchor, block, 1)

    # ---------- 2) computed ----------
    anchor2 = """const chars = ref(CHARACTERS)
const charWeapons = ref(CHAR_WEAPONS)"""
    block2 = """const chars = ref(CHARACTERS)
// 旅行者七元素形态：随后端数据动态变化，后台改名/增删后自动跟随
const travelers = computed(() => (chars.value || []).filter(c => (c.name || '').includes('旅行者')))
const charWeapons = ref(CHAR_WEAPONS)"""
    if anchor2 not in src: raise RuntimeError('computed 锚点未找到')
    src = src.replace(anchor2, block2, 1)

    # ---------- 3) 样式 ----------
    anchor3 = '/* ===== 分组视图 ===== */'
    css = """/* ===== 旅行者 · 七元素共鸣 ===== */
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

"""
    if anchor3 not in src: raise RuntimeError('CSS 锚点未找到')
    src = src.replace(anchor3, css + anchor3, 1)
    io.open(p, 'w', encoding='utf-8', newline='\n').write(src)
    print('  [ok] 旅行者七元素展示区已加入 HomePage.vue')

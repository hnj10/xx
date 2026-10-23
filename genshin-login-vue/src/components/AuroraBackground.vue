<template>
  <!-- 七国极光背景 -->
  <div class="aurora"></div>
  <div class="vignette"></div>

  <!-- 漂浮的七元素符文 -->
  <div class="runes">
    <div
      v-for="(r, i) in runes"
      :key="i"
      class="rune"
      :style="r.style"
      v-html="r.markup"
    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { NATIONS, svgFull } from '../data/nations.js'

const runes = ref([])

NATIONS.forEach((n) => {
  for (let k = 0; k < 2; k++) {
    const size = 36 + Math.random() * 46
    runes.value.push({
      style: {
        width: size + 'px',
        height: size + 'px',
        left: Math.random() * 92 + '%',
        top: Math.random() * 92 + '%',
        color: n.hex,
        animationDuration: 7 + Math.random() * 7 + 's',
        animationDelay: -Math.random() * 8 + 's'
      },
      markup: svgFull(n.svg)
    })
  }
})
</script>

<style scoped>
.aurora {
  position: fixed;
  inset: 0;
  overflow: hidden;
  z-index: 0;
}
.aurora::before {
  content: '';
  position: absolute;
  inset: -30%;
  background:
    radial-gradient(38% 38% at 12% 18%, rgba(111, 214, 192, 0.55), transparent 60%),
    radial-gradient(40% 40% at 85% 12%, rgba(246, 195, 91, 0.50), transparent 60%),
    radial-gradient(42% 42% at 78% 80%, rgba(167, 129, 224, 0.55), transparent 62%),
    radial-gradient(40% 40% at 20% 82%, rgba(95, 208, 138, 0.50), transparent 60%),
    radial-gradient(45% 45% at 50% 50%, rgba(78, 198, 240, 0.45), transparent 65%),
    radial-gradient(38% 38% at 65% 40%, rgba(255, 122, 89, 0.45), transparent 60%),
    radial-gradient(42% 42% at 35% 55%, rgba(191, 230, 242, 0.50), transparent 62%);
  filter: blur(40px);
  animation: drift 22s ease-in-out infinite alternate;
}
@keyframes drift {
  0% { transform: translate(0, 0) scale(1) rotate(0deg); }
  50% { transform: translate(2%, -2%) scale(1.08) rotate(4deg); }
  100% { transform: translate(-2%, 2%) scale(1.04) rotate(-3deg); }
}
.vignette {
  position: fixed;
  inset: 0;
  z-index: 1;
  background: radial-gradient(120% 120% at 50% 45%, transparent 45%, rgba(3, 5, 12, 0.85) 100%);
  pointer-events: none;
}

.runes {
  position: fixed;
  inset: 0;
  z-index: 2;
  pointer-events: none;
}
.rune {
  position: absolute;
  opacity: 0.85;
  filter: drop-shadow(0 0 12px currentColor);
  animation: float 9s ease-in-out infinite;
}
.rune :deep(svg) {
  width: 100%;
  height: 100%;
}
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-26px) rotate(12deg); }
}
</style>

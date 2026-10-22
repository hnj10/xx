<template>
  <AuroraBackground />

  <transition name="fade" mode="out-in">
    <LoginCard v-if="view === 'login'" key="login" @goto="view = $event" />
    <RegisterCard v-else key="register" @goto="view = $event" />
  </transition>
</template>

<script setup>
import { ref } from 'vue'
import AuroraBackground from './components/AuroraBackground.vue'
import LoginCard from './components/LoginCard.vue'
import RegisterCard from './components/RegisterCard.vue'

const view = ref('login')
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(16px) scale(0.98);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-16px) scale(0.98);
}
</style>

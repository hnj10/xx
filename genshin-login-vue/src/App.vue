<template>
  <AuroraBackground />

  <transition name="fade" mode="out-in">
    <HomePage
      v-if="view === 'home'"
      key="home"
      :username="loginUser"
      @goto="view = $event"
    />
    <LoginCard
      v-else-if="view === 'login'"
      key="login"
      @goto="view = $event"
      @login="loginUser = $event"
    />
    <RegisterCard v-else key="register" @goto="view = $event" />
  </transition>
</template>

<script setup>
import { ref } from 'vue'
import AuroraBackground from './components/AuroraBackground.vue'
import LoginCard from './components/LoginCard.vue'
import RegisterCard from './components/RegisterCard.vue'
import HomePage from './components/HomePage.vue'

const view = ref('login')
// 登录成功后由 LoginCard 通过 login 事件传入的用户名
const loginUser = ref('')
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

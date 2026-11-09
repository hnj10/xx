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
    <RegisterCard v-else-if="view === 'register'" key="register" @goto="view = $event" />
    <AdminLogin
      v-else-if="view === 'admin-login'"
      key="admin-login"
      @goto="view = $event"
      @admin-login="adminUser = $event"
    />
    <AdminDashboard
      v-else-if="view === 'admin'"
      key="admin"
      :username="adminUser"
      @goto="view = $event"
      @logout="adminUser = ''"
    />
    <!-- 兜底：任何未知视图都回落到登录页，绝不误入注册页 -->
    <LoginCard
      v-else
      key="login-fallback"
      @goto="view = $event"
      @login="loginUser = $event"
    />
  </transition>
</template>

<script setup>
import { ref, watch } from 'vue'
import AuroraBackground from './components/AuroraBackground.vue'
import LoginCard from './components/LoginCard.vue'
import RegisterCard from './components/RegisterCard.vue'
import HomePage from './components/HomePage.vue'
import AdminLogin from './components/AdminLogin.vue'
import AdminDashboard from './components/AdminDashboard.vue'

// 视图：login 普通登录 / register 注册 / home 首页 / admin-login 后台登录 / admin 后台管理
const ADMIN_VIEWS = ['admin', 'admin-login']
// 后台页刷新后仍停留在后台（后端 session 由 AdminDashboard 自行校验）
const savedView = sessionStorage.getItem('xx_view')
const view = ref(ADMIN_VIEWS.includes(savedView) ? savedView : 'login')
// 登录成功后由 LoginCard 通过 login 事件传入的用户名
const loginUser = ref('')
// 后台登录成功后由 AdminLogin 通过 admin-login 事件传入的管理员账号
const adminUser = ref(sessionStorage.getItem('xx_admin_user') || '')

watch(view, (v) => {
  if (ADMIN_VIEWS.includes(v)) sessionStorage.setItem('xx_view', v)
  else sessionStorage.removeItem('xx_view')
})
watch(adminUser, (u) => {
  if (u) sessionStorage.setItem('xx_admin_user', u)
  else sessionStorage.removeItem('xx_admin_user')
})
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

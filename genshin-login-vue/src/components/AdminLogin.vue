<!--
  临时占位组件：仓库中原本缺少本文件，但 App.vue 已引用它。
  仅用于让页面能正常渲染，后台管理登录逻辑尚未实现。
  实现正式功能时直接替换本文件即可。
-->
<template>
  <div class="card">
    <div class="brand">
      <div class="logo">后台管理</div>
      <div class="sub">Admin Console</div>
    </div>
    <p class="hint">后台管理登录尚未实现，这里是一个临时占位页，用于保证应用可以正常启动与渲染。</p>
    <div class="actions">
      <button class="btn primary" @click="$emit('goto', 'home')">返回首页</button>
      <button class="btn" @click="$emit('goto', 'login')">返回登录</button>
    </div>
  </div>
</template>

<script setup>
defineEmits(['goto', 'admin-login'])
</script>

<style scoped>
.card {
  position: relative;
  z-index: 3;
  width: min(420px, 90vw);
  padding: 40px 36px;
  border-radius: 20px;
  background: rgba(12, 18, 34, 0.72);
  border: 1px solid rgba(180, 205, 255, 0.18);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(18px);
  text-align: center;
  color: #e9eefb;
}
.brand { margin-bottom: 24px; }
.logo {
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 4px;
  background: linear-gradient(90deg, #f6c35b, #a781e0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.sub { margin-top: 8px; font-size: 12px; letter-spacing: 2px; color: #8fa2c7; }
.hint { font-size: 14px; line-height: 1.8; color: #b8c6e4; }
.actions { display: flex; gap: 12px; justify-content: center; margin-top: 28px; }
.btn {
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid rgba(180, 205, 255, 0.28);
  background: transparent;
  color: #dce7ff;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn:hover { background: rgba(180, 205, 255, 0.12); }
.btn.primary {
  border-color: transparent;
  background: linear-gradient(90deg, #6f8fe0, #a781e0);
  color: #fff;
}
.btn.primary:hover { filter: brightness(1.12); }
</style>

<template>
  <div class="admin-login">
    <div class="card">
      <div class="badge">ADMIN</div>
      <div class="brand">
        <div class="logo">后台管理系统</div>
        <div class="sub">Genshin Data Console</div>
      </div>
      <p class="intro">仅限管理员登录，用于维护首页展示的角色与武器数据。</p>

      <form @submit.prevent="submit">
        <div class="field">
          <label for="admin-user">管理员账号</label>
          <input
            id="admin-user"
            v-model="username"
            type="text"
            placeholder="请输入管理员账号"
            autocomplete="username"
          />
        </div>

        <div class="field">
          <label for="admin-pwd">密码</label>
          <div class="pwd-wrap">
            <input
              id="admin-pwd"
              v-model="password"
              :type="showPwd ? 'text' : 'password'"
              placeholder="请输入密码"
              autocomplete="current-password"
            />
            <button type="button" class="eye" @click="showPwd = !showPwd">
              {{ showPwd ? '隐藏' : '显示' }}
            </button>
          </div>
        </div>

        <p v-if="error" class="error">{{ error }}</p>

        <button class="btn primary" type="submit" :disabled="loading">
          {{ loading ? '正在验证…' : '登录后台' }}
        </button>
      </form>

      <!-- 后台登录页刻意不提供注册入口 -->
      <div class="foot">
        <span class="link" @click="$emit('goto', 'home')">← 返回首页</span>
        <span class="sep">·</span>
        <span class="link" @click="$emit('goto', 'login')">普通用户登录</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['goto', 'admin-login'])

const API = '/api'
const username = ref('')
const password = ref('')
const showPwd = ref(false)
const loading = ref(false)
const error = ref('')

async function submit() {
  error.value = ''
  if (!username.value.trim() || !password.value) {
    error.value = '请输入账号和密码'
    return
  }
  loading.value = true
  try {
    const res = await fetch(API + '/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify({ username: username.value.trim(), password: password.value })
    })
    const data = await res.json()
    if (data.code === 200) {
      emit('admin-login', data.data?.username || username.value.trim())
      emit('goto', 'admin')
    } else {
      error.value = data.message || '登录失败，请稍后再试'
    }
  } catch (e) {
    error.value = '连接服务器失败，请确认后端已启动'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.admin-login {
  position: relative;
  z-index: 5;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 16px;
}
.card {
  position: relative;
  width: min(92vw, 420px);
  padding: 42px 36px 30px;
  border-radius: 22px;
  background: linear-gradient(160deg, rgba(20, 28, 52, 0.86), rgba(10, 14, 30, 0.82));
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.16);
  color: #e9eefb;
  animation: rise 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}
@keyframes rise {
  from { opacity: 0; transform: translateY(26px) scale(0.97); }
  to { opacity: 1; transform: none; }
}
.badge {
  position: absolute;
  top: 18px;
  right: 20px;
  font-size: 10px;
  letter-spacing: 2px;
  color: #f6c35b;
  border: 1px solid rgba(246, 195, 91, 0.45);
  border-radius: 6px;
  padding: 3px 8px;
}
.brand { text-align: center; margin-bottom: 14px; }
.logo {
  font-size: 27px;
  font-weight: 700;
  letter-spacing: 3px;
  background: linear-gradient(90deg, #f6c35b, #a781e0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.sub { margin-top: 8px; font-size: 11px; letter-spacing: 2px; color: #8fa2c7; }
.intro {
  font-size: 13px;
  line-height: 1.8;
  color: #a9b9d8;
  text-align: center;
  margin: 0 0 26px;
}
.field { margin-bottom: 18px; }
.field label {
  display: block;
  font-size: 12px;
  color: #9fb0d0;
  margin-bottom: 8px;
  letter-spacing: 0.5px;
}
.field input {
  width: 100%;
  box-sizing: border-box;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid rgba(180, 205, 255, 0.2);
  background: rgba(6, 12, 28, 0.6);
  color: #eaf1ff;
  font-size: 14px;
  outline: none;
  transition: 0.2s;
}
.field input::placeholder { color: #63759a; }
.field input:focus {
  border-color: #6f8fe0;
  box-shadow: 0 0 0 3px rgba(111, 143, 224, 0.16);
}
.pwd-wrap { position: relative; }
.pwd-wrap input { padding-right: 62px; }
.eye {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  color: #8fa2c7;
  font-size: 12px;
  cursor: pointer;
  padding: 6px;
}
.eye:hover { color: #dce7ff; }
.error {
  margin: 0 0 14px;
  padding: 9px 12px;
  border-radius: 8px;
  font-size: 12px;
  color: #ffc9c9;
  background: rgba(220, 80, 80, 0.14);
  border: 1px solid rgba(220, 80, 80, 0.3);
}
.btn {
  width: 100%;
  padding: 13px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: 0.2s;
}
.btn.primary {
  color: #0a1224;
  background: linear-gradient(95deg, #f6c35b, #a781e0);
  box-shadow: 0 8px 24px rgba(167, 129, 224, 0.28);
}
.btn.primary:hover:not(:disabled) { filter: brightness(1.1); transform: translateY(-1px); }
.btn:disabled { opacity: 0.6; cursor: wait; }
.foot {
  margin-top: 22px;
  text-align: center;
  font-size: 12px;
  color: #7d8fb2;
}
.link { color: #8fe6d4; cursor: pointer; }
.link:hover { text-decoration: underline; }
.sep { margin: 0 10px; }
</style>

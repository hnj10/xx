<template>
  <div class="card">
    <div class="brand">
      <div class="logo">原神</div>
      <div class="sub">Join the World of Teyvat</div>
    </div>

    <div class="field">
      <input
        v-model="user"
        type="text"
        placeholder="旅行者账号 / 邮箱"
        autocomplete="username"
      />
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
      </svg>
    </div>

    <div class="field">
      <input
        v-model="pwd"
        :type="showPwd ? 'text' : 'password'"
        placeholder="设置密码"
        autocomplete="new-password"
      />
      <svg
        class="icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        @click="showPwd = !showPwd"
      >
        <template v-if="showPwd">
          <path d="M3 3l18 18" />
          <path d="M10.6 10.6a3 3 0 0 0 4.2 4.2" />
          <path d="M9.9 5.2A9.5 9.5 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 4" />
          <path d="M6.1 6.1A17 17 0 0 0 2 12s3.5 7 10 7a9.6 9.6 0 0 0 3.5-.6" />
        </template>
        <template v-else>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </template>
      </svg>
    </div>

    <div class="field">
      <input
        v-model="pwd2"
        :type="showPwd ? 'text' : 'password'"
        placeholder="确认密码"
        autocomplete="new-password"
      />
    </div>

    <!-- 选择所属国度 -->
    <div class="select-nation">
      <div class="label">选择你的初始国度</div>
      <div class="nation-pick">
        <button
          v-for="n in NATIONS"
          :key="n.name"
          type="button"
          class="pick"
          :class="{ active: nation === n.name }"
          :title="n.name"
          @click="nation = n.name"
        >
          <span class="pick-dot" :style="{ background: n.hex }" v-html="svgFull(n.svg)"></span>
          <span class="pick-name">{{ n.name }}</span>
        </button>
      </div>
    </div>

    <div class="row">
      <label>
        <input type="checkbox" v-model="agree" />
        我已阅读并同意《提瓦特旅行者协议》
      </label>
    </div>

    <button class="btn" @click="register">{{ btnText }}</button>

    <div class="foot">
      已经是旅行者？<span class="link" @click="$emit('goto', 'login')">返回登录</span>
    </div>

    <!-- 七国元素图标条 -->
    <div class="nations">
      <div class="n" v-for="n in NATIONS" :key="n.name" :title="n.name">
        <div class="dot" :style="{ background: n.hex }" v-html="svgFull(n.svg)"></div>
        <div class="nm">{{ n.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { NATIONS, svgFull } from '../data/nations.js'

const emit = defineEmits(['goto'])

// 后端接口前缀（开发环境由 vite.config.js 代理到 http://localhost:8081）
const API = '/api'

const user = ref('')
const pwd = ref('')
const pwd2 = ref('')
const showPwd = ref(false)
const nation = ref('')
const agree = ref(false)
const btnText = ref('注册并进入提瓦特')

async function register() {
  if (!user.value.trim()) {
    alert('请输入旅行者账号')
    return
  }
  if (pwd.value.length < 6) {
    alert('密码至少需要 6 位')
    return
  }
  if (pwd.value !== pwd2.value) {
    alert('两次输入的密码不一致')
    return
  }
  if (!nation.value) {
    alert('请选择你的初始国度')
    return
  }
  if (!agree.value) {
    alert('请先同意《提瓦特旅行者协议》')
    return
  }
  btnText.value = '正在传送…'
  try {
    const res = await fetch(API + '/user/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: user.value.trim(),
        password: pwd.value,
        nation: nation.value
      })
    })
    const data = await res.json()
    if (data.code === 200) {
      alert('欢迎加入提瓦特，' + user.value.trim() + '！即将前往登录')
      // 注册成功，跳转到登录页
      emit('goto', 'login')
    } else {
      alert('注册失败：' + data.message)
    }
  } catch (err) {
    console.error(err)
    alert('连接服务器失败，请确认后端已启动（http://localhost:8081）')
  } finally {
    btnText.value = '注册并进入提瓦特'
  }
}
</script>

<style scoped>
.card {
  position: relative;
  z-index: 5;
  width: min(94vw, 420px);
  padding: 34px 34px 30px;
  border-radius: 22px;
  background: linear-gradient(160deg, rgba(20, 28, 52, 0.72), rgba(10, 14, 30, 0.62));
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.18);
  animation: rise 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}
@keyframes rise {
  from { opacity: 0; transform: translateY(30px) scale(0.96); }
  to { opacity: 1; transform: none; }
}

.brand {
  text-align: center;
  margin-bottom: 22px;
}
.brand .logo {
  font-size: 34px;
  font-weight: 800;
  letter-spacing: 6px;
  background: linear-gradient(90deg, #6fd6c0, #4ec6f0, #a781e0, #ff7a59);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 30px rgba(120, 180, 255, 0.25);
}
.brand .sub {
  margin-top: 6px;
  font-size: 12px;
  letter-spacing: 4px;
  color: #9fb0d8;
  text-transform: uppercase;
}

.field {
  position: relative;
  margin-bottom: 16px;
}
.field input {
  width: 100%;
  padding: 13px 44px 13px 16px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.06);
  color: #eef3ff;
  font-size: 15px;
  outline: none;
  transition: 0.25s;
}
.field input::placeholder {
  color: #8aa0c9;
}
.field input:focus {
  border-color: #4ec6f0;
  background: rgba(78, 198, 240, 0.1);
  box-shadow: 0 0 0 3px rgba(78, 198, 240, 0.18);
}
.field .icon {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: #9fb0d8;
  cursor: pointer;
  opacity: 0.8;
}
.field .icon:hover {
  opacity: 1;
  color: #fff;
}

.select-nation {
  margin-bottom: 16px;
}
.select-nation .label {
  font-size: 13px;
  color: #bccbe8;
  margin-bottom: 10px;
}
.nation-pick {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
}
.pick {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 8px 2px;
  border: 1px solid transparent;
  border-radius: 12px;
  background: transparent;
  cursor: pointer;
  transition: 0.2s;
}
.pick:hover {
  background: rgba(255, 255, 255, 0.06);
}
.pick.active {
  border-color: rgba(255, 255, 255, 0.45);
  background: rgba(78, 198, 240, 0.14);
  box-shadow: 0 0 0 2px rgba(78, 198, 240, 0.25);
}
.pick-dot {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12);
}
.pick-dot :deep(svg) {
  width: 16px;
  height: 16px;
  color: #0b1020;
}
.pick-name {
  font-size: 10px;
  color: #9fb0d8;
  letter-spacing: 1px;
}

.row {
  display: flex;
  align-items: flex-start;
  margin: 4px 2px 18px;
  font-size: 12px;
}
.row label {
  display: flex;
  align-items: flex-start;
  gap: 7px;
  color: #bccbe8;
  cursor: pointer;
  line-height: 1.5;
}
.row input[type='checkbox'] {
  accent-color: #4ec6f0;
  width: 15px;
  height: 15px;
  margin-top: 2px;
}

.btn {
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #06121f;
  background: linear-gradient(95deg, #4ec6f0, #bfe6f2 55%, #6fd6c0);
  box-shadow: 0 10px 30px rgba(78, 198, 240, 0.35);
  transition: 0.2s;
}
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 38px rgba(78, 198, 240, 0.5);
}
.btn:active {
  transform: translateY(0);
}

.foot {
  margin-top: 18px;
  text-align: center;
  font-size: 12px;
  color: #8295bd;
}
.foot span {
  color: #c7d4f0;
}
.foot .link {
  cursor: pointer;
}
.foot .link:hover {
  text-decoration: underline;
}

.nations {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.nations .n {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  flex: 1;
}
.nations .dot {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  transition: 0.25s;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12);
}
.nations .dot:hover {
  transform: scale(1.18);
}
.nations .dot :deep(svg) {
  width: 16px;
  height: 16px;
  color: #0b1020;
}
.nations .nm {
  font-size: 10px;
  color: #9fb0d8;
  letter-spacing: 1px;
}
</style>

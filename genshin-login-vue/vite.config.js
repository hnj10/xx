import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 代理请求由 Vite 服务端发起，指向本机回环地址最稳；
// 原写死的 192.168.68.4 是旧网络环境的 IP，当前本机为 192.168.1.18，已失效。
const LAN_IP = '127.0.0.1'

export default defineConfig({
  plugins: [vue()],
  server: {
    // 监听所有网卡：局域网访问 http://192.168.68.4:5173，本机 localhost 也仍可用
    host: '0.0.0.0',
    port: 5173,
    open: true,
    proxy: {
      // 将 /api 请求代理到本机 Spring Boot 后端（dev 端口 8081）
      '/api': {
        target: `http://${LAN_IP}:8081`,
        changeOrigin: true
      }
    }
  }
})

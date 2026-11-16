import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 代理请求指向本机局域网 IP（以太网 192.168.68.4），前后端统一使用该地址。
const LAN_IP = '192.168.68.4'

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

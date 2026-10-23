import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    open: true,
    proxy: {
      // 将 /api 请求代理到本地 Spring Boot 后端（dev 端口 8081）
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true
      }
    }
  }
})

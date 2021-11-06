import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "components": path.resolve(__dirname, "src/components"),
      "api": path.resolve(__dirname, "src/api")
    }
  },
  server: {
    cors: true,
    rejectUnauthorized:false,
    proxy: {
      '/hock': {
        target: 'https://heenyeqwxq.login.aliyunidaas.com',
        rewrite: (path) => path.replace(/^\/hock/, ''),
        secure: false,
        changeOrigin: true
      }
    }
  },
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ]
})

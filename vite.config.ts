import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [vue()],
  server: {
    port: 8888, //启动端口
    hmr: {
      host: '127.0.0.1',
      port: 8888
    },
    // 设置代理
    proxy: {
      // 代理前端‘/api’开头的请求
      '/api': {
        target: 'http://127.0.0.1:8080', //后端地址
        changeOrigin: true, //允许跨域
        //ws: true,  //允许websocket代理
        //secure: false, //如果是https接口，需要配置这个参数
        //rewrite: (path: string) => path.replace(/^\/api/, '') //去掉请求路径中的‘/api’前缀。如果后端接口也是‘/api’开头则不用配置
      }
    }
  }
})

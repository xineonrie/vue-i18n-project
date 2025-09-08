import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { qrcode } from 'vite-plugin-qrcode'



// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    qrcode(),
    vueJsx(),
    vueDevTools(),
  ],
  server:{
    host: '0.0.0.0', 
    port: 5173
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_BASE_URL),
    'process.env.VITE_ACCESS_API_KEY': JSON.stringify(process.env.VITE_ACCESS_API_KEY),
    'process.env.VITE_IMAGE_BASE_URL': JSON.stringify(process.env.VITE_IMAGE_BASE_URL),
  },
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as process from "@headlessui/vue/dist/utils/env.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL),
    'process.env.VITE_TMDB_ACCESS_API_KEY': JSON.stringify(process.env.VITE_TMDB_ACCESS_API_KEY)
  },
})

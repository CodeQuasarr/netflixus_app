import {defineConfig} from 'vite'
import {fileURLToPath, URL} from "node:url";
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import * as path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), svgLoader()],
    resolve: {
        alias: {
            // '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@': path.resolve(__dirname, './src')
        },
    },
    define: {
        'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL),
        'process.env.VITE_TMDB_ACCESS_API_KEY': JSON.stringify(process.env.VITE_TMDB_ACCESS_API_KEY)
    },
    server: {
        port: 3000,
        open: true,
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:8080',
        //         changeOrigin: true,
        //         rewrite: (path) => path.replace(/^\/api/, '')
        //     }
        // }
    }
})

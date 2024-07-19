// vite.config.ts
import { defineConfig } from "file:///C:/Users/dwayn/Documents/project/netflixus_app/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/dwayn/Documents/project/netflixus_app/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import svgLoader from "file:///C:/Users/dwayn/Documents/project/netflixus_app/node_modules/vite-svg-loader/index.js";
import * as path from "node:path";
var __vite_injected_original_dirname = "C:\\Users\\dwayn\\Documents\\project\\netflixus_app";
var vite_config_default = defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('./src', import.meta.url)),
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  define: {
    "process.env.VITE_API_URL": JSON.stringify(process.env.VITE_API_URL),
    "process.env.VITE_TMDB_ACCESS_API_KEY": JSON.stringify(process.env.VITE_TMDB_ACCESS_API_KEY)
  },
  server: {
    port: 3e3,
    open: true
    // proxy: {
    //     '/api': {
    //         target: 'http://localhost:8080',
    //         changeOrigin: true,
    //         rewrite: (path) => path.replace(/^\/api/, '')
    //     }
    // }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxkd2F5blxcXFxEb2N1bWVudHNcXFxccHJvamVjdFxcXFxuZXRmbGl4dXNfYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxkd2F5blxcXFxEb2N1bWVudHNcXFxccHJvamVjdFxcXFxuZXRmbGl4dXNfYXBwXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9kd2F5bi9Eb2N1bWVudHMvcHJvamVjdC9uZXRmbGl4dXNfYXBwL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHtkZWZpbmVDb25maWd9IGZyb20gJ3ZpdGUnXG5pbXBvcnQge2ZpbGVVUkxUb1BhdGgsIFVSTH0gZnJvbSBcIm5vZGU6dXJsXCI7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBzdmdMb2FkZXIgZnJvbSAndml0ZS1zdmctbG9hZGVyJ1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwibm9kZTpwYXRoXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFt2dWUoKSwgc3ZnTG9hZGVyKCldLFxuICAgIHJlc29sdmU6IHtcbiAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgIC8vICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgZGVmaW5lOiB7XG4gICAgICAgICdwcm9jZXNzLmVudi5WSVRFX0FQSV9VUkwnOiBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5WSVRFX0FQSV9VUkwpLFxuICAgICAgICAncHJvY2Vzcy5lbnYuVklURV9UTURCX0FDQ0VTU19BUElfS0VZJzogSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYuVklURV9UTURCX0FDQ0VTU19BUElfS0VZKVxuICAgIH0sXG4gICAgc2VydmVyOiB7XG4gICAgICAgIHBvcnQ6IDMwMDAsXG4gICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgIC8vIHByb3h5OiB7XG4gICAgICAgIC8vICAgICAnL2FwaSc6IHtcbiAgICAgICAgLy8gICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0OjgwODAnLFxuICAgICAgICAvLyAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgLy8gICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgJycpXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3VSxTQUFRLG9CQUFtQjtBQUVuVyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxlQUFlO0FBQ3RCLFlBQVksVUFBVTtBQUp0QixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztBQUFBLEVBQzVCLFNBQVM7QUFBQSxJQUNMLE9BQU87QUFBQTtBQUFBLE1BRUgsS0FBVSxhQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN4QztBQUFBLEVBQ0o7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNKLDRCQUE0QixLQUFLLFVBQVUsUUFBUSxJQUFJLFlBQVk7QUFBQSxJQUNuRSx3Q0FBd0MsS0FBSyxVQUFVLFFBQVEsSUFBSSx3QkFBd0I7QUFBQSxFQUMvRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFRVjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

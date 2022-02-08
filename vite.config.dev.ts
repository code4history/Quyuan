import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'dev_public',
  build: {
    sourcemap: true,
    rollupOptions: {
      input: ["index.html", "leaflet.html"],
    }
  },
  plugins: []
})

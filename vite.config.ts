import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: 'terser',
    sourcemap: true,
    lib: {
      entry: 'src/index.ts',
      formats: ['umd'],
      name: 'Quyuen',
      fileName: () => 'quyuen.min.js'
    },
    rollupOptions: {
    }
  },
  plugins: []
})

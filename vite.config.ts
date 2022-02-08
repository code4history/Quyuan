import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: 'terser',
    sourcemap: true,
    outDir: 'umd',
    lib: {
      entry: 'src/index.ts',
      formats: ['umd'],
      name: 'Quyuan',
      fileName: () => 'quyuan.min.js'
    },
    rollupOptions: {
    }
  },
  plugins: []
})

import { defineConfig } from 'vite'
import dts from 'vite-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    minify: 'terser',
    sourcemap: true,
    lib: {
      entry: 'src/index.ts',
      //formats: ['es'],
      name: 'Quyuen',
      fileName: (format) => `quyuen.${format}.js`
    },
    rollupOptions: {
      //external: /^lit/
    }
  },
  plugins: [dts()]
})

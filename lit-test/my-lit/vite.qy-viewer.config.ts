import { defineConfig } from 'vite'
import dts from 'vite-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    minify: 'terser',
    sourcemap: true,
    lib: {
      entry: 'src/qy-viewer.ts',
      //formats: ['es'],
      name: 'QyViewer',
      fileName: (format) => `qy-viewer.${format}.js`
    },
    rollupOptions: {
      //external: /^lit/
    }
  },
  plugins: [dts()]
})

import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'src/qy-viewer.ts',
      //formats: ['es'],
      name: 'QyViewer',
      fileName: (format) => `qy-viewer.${format}.js`
    },
    rollupOptions: {
      //external: /^lit/
    }
  }
})

import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    /*lib: {
      entry: 'src/my-element.ts',
      formats: ['es']
    },*/
    rollupOptions: {
      external: /^lit/,
      input: {
        "qy-viewer": 'src/qy-viewer.ts',
        "qy-swiper": 'src/qy-swiper.ts'
      }
    }
  }
})

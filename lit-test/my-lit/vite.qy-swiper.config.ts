import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'src/qy-swiper.ts',
      //formats: ['es'],
      name: 'QySwiper',
      fileName: (format) => `qy-swiper.${format}.js`
    },
    rollupOptions: {
      //external: /^lit/
    }
  }
})

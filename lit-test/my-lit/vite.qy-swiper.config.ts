import { defineConfig } from 'vite'
import dts from 'vite-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    minify: 'terser',
    sourcemap: true,
    lib: {
      entry: 'src/qy-swiper.ts',
      //formats: ['es'],
      name: 'QySwiper',
      fileName: (format) => `qy-swiper.${format}.js`
    },
    rollupOptions: {
      //external: /^lit/
    }
  },
  plugins: [dts()]
})

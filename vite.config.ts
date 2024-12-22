import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs', 'umd'],
      name: 'quyuan'
    },
    rollupOptions: {
      external: ['lit']
    }
  },
  plugins: [dts()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
});
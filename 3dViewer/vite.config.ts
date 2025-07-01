import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: './', 
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      'three/examples/jsm': 'three/examples/jsm'
    }
  },
  css: {
    postcss: './postcss.config.js'  // この行を追加
  },
  server: {
    port: 3000
  }
});
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import { readFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));
const isPackageBuild = process.env.BUILD_MODE === 'package';

export default defineConfig({
  base: './',
  build: isPackageBuild ? {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs', 'umd'],
      name: 'quyuan',
      fileName: (format) => {
        switch(format) {
          case 'es':
            return 'quyuan.js';
          case 'cjs':
            return 'quyuan.cjs';
          case 'umd':
            return 'quyuan.umd.cjs';
        }
      }
    },
    rollupOptions: {
      external: ['lit']
    }
  } : {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        leaflet: resolve(__dirname, 'leaflet.html'),
        openlayers: resolve(__dirname, 'openlayers.html'),
        maplibre: resolve(__dirname, 'maplibre.html')
      },
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]'
      }
    }
  },
  plugins: [dts()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  define: {
    'import.meta.env.APP_VERSION': JSON.stringify(packageJson.version)
  }
});
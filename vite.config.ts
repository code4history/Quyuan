import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import { readFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));
const isPackageBuild = process.env.BUILD_MODE === 'package';

// Plugin to remove .ts extensions from imports
const removeTsExtensions = () => {
  return {
    name: 'remove-ts-extensions',
    transform(code, id) {
      if (id.endsWith('.ts') || id.endsWith('.tsx')) {
        // Replace imports with .ts extensions
        return code.replace(
          /from\s+['"](\.\/[^'"]+)\.ts['"]/g,
          'from "$1"'
        );
      }
      return code;
    }
  };
};

export default defineConfig({
  base: './',
  build: isPackageBuild ? {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs', 'umd'],
      name: 'Quyuan',  // UMD global variable name
      fileName: (format) => {
        const baseName = 'quyuan';  // C4H naming convention (no prefix)
        switch(format) {
          case 'es':
            return `${baseName}.js`;
          case 'cjs':
            return `${baseName}.cjs`;
          case 'umd':
            return `${baseName}.umd.js`;
          default:
            return `${baseName}.js`;
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
  plugins: [
    removeTsExtensions(),
    dts({
      outDir: 'dist',
      exclude: ['tests', 'node_modules'],
      rollupTypes: false,  // Avoid type definition merging errors
      skipDiagnostics: true,
      tsconfigPath: './tsconfig.json',
      logLevel: 'silent',
      insertTypesEntry: true,
      staticImport: true,
      beforeWriteFile: (filePath, content) => {
        // Remove .ts extensions from imports in d.ts files
        const fixedContent = content
          .replace(/from ['"](\.[^'"]+)\.ts['"]/g, 'from "$1"')
          .replace(/import\(["'](\.[^'"]+)\.ts["']\)/g, 'import("$1")');
        return {
          filePath,
          content: fixedContent
        };
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  define: {
    'import.meta.env.APP_VERSION': JSON.stringify(packageJson.version)
  }
});
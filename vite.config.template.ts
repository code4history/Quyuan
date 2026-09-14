import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

// template entry（@c4h/quyuan/template）専用の build 設定。
// root 側の vite.config.ts は一切変更せず、template は別 config で逐次 build する
// （Weiwudi の entry ごとの設定分離 build を踏襲）。
// root build が先に dist を空にしてから、本 config が emptyOutDir: false で追記する。
export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: false, // root build の成果物（quyuan.js / quyuan.umd.js / d.ts 群）を消さない
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/template.ts'),
      formats: ['es'], // template entry は ES import（exports["./template"].import）専用
      fileName: () => 'template.js'
    },
    rollupOptions: {
      output: {
        exports: 'named'
      }
    }
  },
  plugins: [
    dts({
      include: ['src/template.ts', 'src/utils/qy-template-extractor.ts'],
      outDir: 'dist',
      rollupTypes: false,
      skipDiagnostics: true,
      tsconfigPath: './tsconfig.json',
      logLevel: 'silent',
      staticImport: true,
      beforeWriteFile: (filePath, content) => {
        // Remove .ts extensions from imports in d.ts files（root config と同一）
        const fixedContent = content
          .replace(/from ['"](\.[^'"]+)\.ts['"]/g, 'from "$1"')
          .replace(/import\(["'](\.[^'"]+)\.ts["']\)/g, 'import("$1")');
        return {
          filePath,
          content: fixedContent
        };
      }
    })
  ]
});

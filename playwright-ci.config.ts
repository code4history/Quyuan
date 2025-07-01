import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  testMatch: '**/smoke.spec.ts',  // スモークテストのみ実行
  fullyParallel: true,
  forbidOnly: true,
  retries: 0,  // CI環境ではリトライなし（高速化）
  workers: 1,
  reporter: 'list',  // シンプルなレポーター
  timeout: 15000,  // グローバルタイムアウトを15秒に短縮
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'off',  // トレースを無効化（高速化）
    screenshot: 'only-on-failure',
    video: 'off',  // ビデオを無効化（高速化）
    actionTimeout: 5000,  // アクションタイムアウトを5秒に
  },
  // CI環境ではChromiumのみを使用（高速化のため）
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        headless: true  // CI環境では常にヘッドレス
      },
    },
  ],
  webServer: {
    command: 'pnpm run dev',  // npmよりpnpmの方が高速
    port: 5173,
    reuseExistingServer: true,
    timeout: 30000,  // サーバー起動タイムアウト
  },
});
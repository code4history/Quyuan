import { test, expect } from '@playwright/test';

test.describe('Smoke Tests', () => {
  test('should load leaflet demo page', async ({ page }) => {
    await page.goto('/leaflet.html');
    
    // Check if map is loaded
    await expect(page.locator('#map')).toBeVisible();
    
    // Check if markers are added (wait max 5 seconds)
    await page.waitForSelector('.leaflet-marker-icon', { timeout: 5000 });
    
    const markerCount = await page.locator('.leaflet-marker-icon').count();
    expect(markerCount).toBeGreaterThan(0);
  });

  test('should render qy-swiper in popup', async ({ page }) => {
    await page.goto('/leaflet.html');
    
    // Wait for map and markers
    await page.waitForSelector('.leaflet-marker-icon', { timeout: 5000 });
    
    // Click first marker
    await page.locator('.leaflet-marker-icon').first().click();
    
    // Check if popup opens
    await expect(page.locator('.leaflet-popup-content')).toBeVisible();
    
    // Check if qy-swiper exists
    const swiperExists = await page.locator('.leaflet-popup-content qy-swiper').count() > 0;
    expect(swiperExists).toBe(true);
  });
});
import { test, expect } from '@playwright/test';

test.describe('Quyuan E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/e2e-test.html');
  });

  test('should load Quyuan library', async ({ page }) => {
    // Check if Quyuan is available on window
    const hasQuyuan = await page.evaluate(() => {
      return typeof window.Quyuan !== 'undefined';
    });
    expect(hasQuyuan).toBe(true);
  });

  test('should have templateExtractor function', async ({ page }) => {
    const hasTemplateExtractor = await page.evaluate(() => {
      return typeof window.Quyuan?.templateExtractor === 'function';
    });
    expect(hasTemplateExtractor).toBe(true);
  });

  test('should process GeoJSON with templates', async ({ page }) => {
    const result = await page.evaluate(() => {
      const geojson = {
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          properties: {
            name: 'Test Feature',
            description: 'Test Description'
          },
          geometry: {
            type: 'Point',
            coordinates: [0, 0]
          }
        }]
      };
      
      const templates = {
        html: '<h1>{{ name }}</h1><p>{{ description }}</p>'
      };
      
      return window.Quyuan.templateExtractor({ geojson, templates });
    });
    
    expect(result).toBeDefined();
    expect(result.features[0].result.html).toContain('<h1>Test Feature</h1>');
    expect(result.features[0].result.html).toContain('<p>Test Description</p>');
  });

  test('should render qy-viewer component', async ({ page }) => {
    await page.evaluate(() => {
      const viewer = document.createElement('qy-viewer');
      viewer.setAttribute('urls', JSON.stringify(['/assets/test.jpg']));
      document.getElementById('viewer-container').appendChild(viewer);
    });
    
    // Wait for custom element to be defined
    await page.waitForFunction(() => customElements.get('qy-viewer'));
    
    const viewer = await page.locator('qy-viewer');
    await expect(viewer).toBeVisible();
  });
});
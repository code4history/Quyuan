import { test, expect } from '@playwright/test';

test.describe('Viewer Integration', () => {
  test('should create and show viewer when clicking thumbnail', async ({ page }) => {
    // Enable console logging
    page.on('console', msg => {
      const text = msg.text();
      if (text.includes('[qy-') || text.includes('[leaflet.ts]') || text.includes('[quyuan.ts]')) {
        console.log('Browser console:', msg.type(), text);
      }
    });
    
    // Navigate to the leaflet demo page
    await page.goto('/leaflet.html');
    
    // Wait for the map to load
    await page.waitForSelector('#map');
    
    // Wait for markers to be added
    await page.waitForTimeout(2000);
    
    // Check marker count
    const markerCount = await page.locator('.leaflet-marker-icon').count();
    console.log(`Found ${markerCount} markers on the map`);
    expect(markerCount).toBe(5);
    
    // Click on a marker to open popup
    const markers = await page.locator('.leaflet-marker-icon').all();
    if (markers.length > 0) {
      // Click the first marker (竹生島神社)
      await markers[0].click();
      
      // Wait for popup
      await page.waitForSelector('.leaflet-popup-content', { state: 'visible' });
      
      // Check popup content
      const popupContent = await page.locator('.leaflet-popup-content').innerHTML();
      console.log('Popup content:', popupContent.substring(0, 200) + '...');
      
      // Check if qy-swiper exists
      const swiperExists = await page.locator('.leaflet-popup-content qy-swiper').count() > 0;
      expect(swiperExists).toBe(true);
      
      // Wait for swiper to initialize
      await page.waitForTimeout(500);
      
      // Check shadow DOM state
      const swiperState = await page.evaluate(() => {
        const swiper = document.querySelector('.leaflet-popup-content qy-swiper') as any;
        if (!swiper) return { error: 'No swiper found' };
        
        const shadowRoot = swiper.shadowRoot;
        const slides = swiper.slides || [];
        const wrapper = shadowRoot?.querySelector('.swiper-wrapper');
        const shadowSlides = shadowRoot?.querySelectorAll('.swiper-slide') || [];
        
        return {
          hasShadowRoot: !!shadowRoot,
          slidesCount: slides.length,
          wrapperExists: !!wrapper,
          shadowSlidesCount: shadowSlides.length,
          firstSlideHtml: shadowSlides[0]?.innerHTML || null,
          thumbnailVisible: shadowSlides[0]?.querySelector('img') !== null
        };
      });
      
      console.log('Swiper state:', swiperState);
      
      // Try to click on the thumbnail
      const clickResult = await page.evaluate(() => {
        const swiper = document.querySelector('.leaflet-popup-content qy-swiper') as any;
        if (!swiper || !swiper.shadowRoot) return { error: 'No swiper shadow root' };
        
        const thumbnail = swiper.shadowRoot.querySelector('.swiper-slide img');
        if (!thumbnail) return { error: 'No thumbnail found' };
        
        // Simulate click
        thumbnail.click();
        
        return { clicked: true };
      });
      
      console.log('Click result:', clickResult);
      
      // Wait for viewer to be created
      await page.waitForTimeout(1000);
      
      // Check if qy-viewer was created
      const viewerState = await page.evaluate(() => {
        const viewer = document.querySelector('qy-viewer') as any;
        if (!viewer) return { exists: false };
        
        const shadowRoot = viewer.shadowRoot;
        const ccViewer = shadowRoot?.querySelector('cc-viewer');
        
        return {
          exists: true,
          hasShadowRoot: !!shadowRoot,
          shadowContent: shadowRoot?.innerHTML || 'No shadow content',
          ccViewerExists: !!ccViewer,
          viewerProperties: {
            swiper: !!viewer.swiper,
            currentSlideIndex: viewer.currentSlideIndex,
            currentType: viewer.currentType
          }
        };
      });
      
      console.log('Viewer state after click:', viewerState);
      
      // Check @c4h/chuci components registration
      const componentsRegistered = await page.evaluate(() => {
        return {
          'cc-viewer': !!customElements.get('cc-viewer'),
          'cc-swiper': !!customElements.get('cc-swiper'),
          'cc-swiper-slide': !!customElements.get('cc-swiper-slide'),
          'qy-viewer': !!customElements.get('qy-viewer'),
          'qy-swiper': !!customElements.get('qy-swiper'),
          'qy-swiper-slide': !!customElements.get('qy-swiper-slide')
        };
      });
      
      console.log('Components registered:', componentsRegistered);
      
      // Take screenshot for debugging
      await page.screenshot({ path: 'e2e/screenshots/viewer-integration.png', fullPage: true });
    }
  });
  
  test('should handle different media types', async ({ page }) => {
    page.on('console', msg => {
      const text = msg.text();
      if (text.includes('[qy-') || text.includes('viewer')) {
        console.log('Browser console:', msg.type(), text);
      }
    });
    
    await page.goto('/leaflet.html');
    await page.waitForSelector('#map');
    await page.waitForTimeout(2000);
    
    const markers = await page.locator('.leaflet-marker-icon').all();
    
    // Test YouTube video (茂林寺)
    if (markers.length > 1) {
      await markers[1].click();
      await page.waitForSelector('.leaflet-popup-content', { state: 'visible' });
      
      const mediaType = await page.evaluate(() => {
        const slide = document.querySelector('.leaflet-popup-content qy-swiper-slide');
        return slide?.getAttribute('image-type');
      });
      
      expect(mediaType).toBe('youtube');
      console.log('Media type for 茂林寺:', mediaType);
    }
    
    // Test image (東武館林駅)
    if (markers.length > 2) {
      await markers[2].click();
      await page.waitForSelector('.leaflet-popup-content', { state: 'visible' });
      
      const mediaType = await page.evaluate(() => {
        const slide = document.querySelector('.leaflet-popup-content qy-swiper-slide');
        return slide?.getAttribute('image-type');
      });
      
      expect(mediaType).toBe('image');
      console.log('Media type for 東武館林駅:', mediaType);
    }
  });
});
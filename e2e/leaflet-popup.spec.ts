import { test, expect } from '@playwright/test';

test.describe('Leaflet Popup with qy-swiper', () => {
  test('should display qy-swiper in popup', async ({ page }) => {
    // Navigate to the leaflet demo page
    await page.goto('/leaflet.html');
    
    // Wait for the map to load
    await page.waitForSelector('#map');
    
    // Wait for markers to be added
    await page.waitForTimeout(2000);
    
    // Get all markers on the map
    const markers = await page.locator('.leaflet-marker-icon').all();
    console.log(`Found ${markers.length} markers`);
    
    // Click the first marker
    if (markers.length > 0) {
      await markers[0].click();
      
      // Wait for popup to appear
      await page.waitForSelector('.leaflet-popup-content', { state: 'visible' });
      
      // Check if qy-swiper exists in the popup
      const swiperExists = await page.locator('.leaflet-popup-content qy-swiper').count() > 0;
      expect(swiperExists).toBe(true);
      
      // Get qy-swiper element details
      const swiperInfo = await page.evaluate(() => {
        const swiper = document.querySelector('.leaflet-popup-content qy-swiper');
        if (!swiper) return null;
        
        return {
          tagName: swiper.tagName,
          hasSlides: swiper.querySelectorAll('qy-swiper-slide').length > 0,
          slideCount: swiper.querySelectorAll('qy-swiper-slide').length,
          hasShadowRoot: !!swiper.shadowRoot,
          shadowContent: swiper.shadowRoot ? swiper.shadowRoot.innerHTML : null,
          attributes: Array.from(swiper.attributes).map(attr => ({
            name: attr.name,
            value: attr.value
          }))
        };
      });
      
      console.log('Swiper info:', swiperInfo);
      
      // Get slide details
      const slideInfo = await page.evaluate(() => {
        const slides = document.querySelectorAll('.leaflet-popup-content qy-swiper-slide');
        return Array.from(slides).map(slide => ({
          tagName: slide.tagName,
          attributes: Array.from(slide.attributes).map(attr => ({
            name: attr.name,
            value: attr.value
          })),
          hasShadowRoot: !!slide.shadowRoot
        }));
      });
      
      console.log('Slides info:', slideInfo);
      
      // Check Shadow DOM content
      const shadowDomContent = await page.evaluate(() => {
        const swiper = document.querySelector('.leaflet-popup-content qy-swiper');
        if (!swiper || !swiper.shadowRoot) return null;
        
        const wrapper = swiper.shadowRoot.querySelector('.swiper-wrapper');
        return {
          wrapperExists: !!wrapper,
          wrapperChildCount: wrapper ? wrapper.children.length : 0,
          wrapperContent: wrapper ? wrapper.innerHTML : null
        };
      });
      
      console.log('Shadow DOM content:', shadowDomContent);
      
      // Check if slides are added to shadow DOM
      const slideAddedToShadow = await page.evaluate(() => {
        const swiper = document.querySelector('.leaflet-popup-content qy-swiper') as any;
        if (!swiper) return { error: 'No swiper found' };
        
        // Check slides property
        const slidesInfo = {
          hasSlides: 'slides' in swiper,
          slidesArray: swiper.slides || [],
          slidesLength: swiper.slides ? swiper.slides.length : 0
        };
        
        // Check if slides are initialized
        if (swiper.shadowRoot) {
          const shadowSlides = swiper.shadowRoot.querySelectorAll('.swiper-slide');
          slidesInfo['shadowSlidesCount'] = shadowSlides.length;
          slidesInfo['firstSlideContent'] = shadowSlides[0]?.innerHTML || null;
        }
        
        return slidesInfo;
      });
      
      console.log('Slides added to shadow:', slideAddedToShadow);
      
      // Take a screenshot for debugging
      await page.screenshot({ path: 'e2e/screenshots/leaflet-popup.png', fullPage: true });
      
      // Check if slides are properly initialized
      const slidesInitialized = await page.evaluate(() => {
        const swiper = document.querySelector('.leaflet-popup-content qy-swiper') as any;
        if (!swiper) return false;
        
        // Check if swiper has slides property
        return {
          hasSlides: 'slides' in swiper,
          slideCount: swiper.slides ? swiper.slides.length : 0,
          swiperInitialized: swiper.shadowRoot?.querySelector('.swiper-initialized') !== null
        };
      });
      
      console.log('Slides initialized:', slidesInitialized);
    }
  });
  
  test('should handle click on qy-swiper-slide', async ({ page }) => {
    // Enable console logging
    page.on('console', msg => console.log('Browser console:', msg.type(), msg.text()));
    
    await page.goto('/leaflet.html');
    await page.waitForSelector('#map');
    await page.waitForTimeout(2000);
    
    const markers = await page.locator('.leaflet-marker-icon').all();
    if (markers.length > 0) {
      await markers[0].click();
      await page.waitForSelector('.leaflet-popup-content', { state: 'visible' });
      
      // Try to click on a slide thumbnail
      const slideSelector = '.leaflet-popup-content qy-swiper-slide';
      const slideExists = await page.locator(slideSelector).count() > 0;
      
      if (slideExists) {
        // Get the shadow root content before clicking
        const beforeClick = await page.evaluate(() => {
          const viewer = document.querySelector('qy-viewer');
          return {
            viewerExists: !!viewer,
            viewerVisible: viewer ? window.getComputedStyle(viewer).display !== 'none' : false
          };
        });
        
        console.log('Before click:', beforeClick);
        
        // Click the slide
        await page.locator(slideSelector).first().click();
        await page.waitForTimeout(1000);
        
        // Check if qy-viewer was created
        const afterClick = await page.evaluate(() => {
          const viewer = document.querySelector('qy-viewer');
          return {
            viewerExists: !!viewer,
            viewerVisible: viewer ? window.getComputedStyle(viewer).display !== 'none' : false,
            viewerShadowRoot: viewer ? !!viewer.shadowRoot : false
          };
        });
        
        console.log('After click:', afterClick);
        
        // Take a screenshot after clicking
        await page.screenshot({ path: 'e2e/screenshots/leaflet-popup-after-click.png', fullPage: true });
      }
    }
  });
});
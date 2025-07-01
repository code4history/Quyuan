import { describe, it, expect, beforeEach, vi } from 'vitest';
import './qy-viewer';
import { QyViewer } from './qy-viewer';
// import { QySwiper } from '../swiper/qy-swiper-base';

describe('QyViewer Navigation', () => {
  let viewer: QyViewer;
  let mockSwiper: any;

  beforeEach(() => {
    viewer = document.createElement('qy-viewer') as QyViewer;
    document.body.appendChild(viewer);

    // Create mock swiper with slides
    mockSwiper = {
      slides: [
        { imageUrl: 'image1.jpg', imageType: 'image' },
        { imageUrl: 'video1.mp4', imageType: 'video' },
        { imageUrl: 'model.obj', imageType: '3dmodel' }
      ],
      slider: {
        slideTo: vi.fn()
      }
    };
  });

  it('should handle navigation between different media types', async () => {
    await viewer.updateComplete;
    
    // Set up viewer with swiper reference
    viewer.swiper = mockSwiper;
    viewer.currentSlideIndex = 0;
    viewer.open('image1.jpg', 'image');
    
    // Navigate to next slide
    const navigateNextEvent = new CustomEvent('navigate-next', { bubbles: true });
    viewer.dispatchEvent(navigateNextEvent);
    
    expect(viewer.currentSlideIndex).toBe(1);
    expect(viewer.currentType).toBe('video');
  });

  it('should not navigate beyond bounds', async () => {
    await viewer.updateComplete;
    
    viewer.swiper = mockSwiper;
    viewer.currentSlideIndex = 2; // Last slide
    viewer.open('model.obj', '3dmodel');
    
    // Try to navigate next (should not change)
    const navigateNextEvent = new CustomEvent('navigate-next', { bubbles: true });
    viewer.dispatchEvent(navigateNextEvent);
    
    expect(viewer.currentSlideIndex).toBe(2);
    
    // Navigate to first slide
    viewer.currentSlideIndex = 0;
    
    // Try to navigate previous (should not change)
    const navigatePrevEvent = new CustomEvent('navigate-prev', { bubbles: true });
    viewer.dispatchEvent(navigatePrevEvent);
    
    expect(viewer.currentSlideIndex).toBe(0);
  });

  it('should update swiper position when navigating', async () => {
    await viewer.updateComplete;
    
    viewer.swiper = mockSwiper;
    viewer.currentSlideIndex = 0;
    viewer.open('image1.jpg', 'image');
    
    // Navigate to next
    const navigateNextEvent = new CustomEvent('navigate-next', { bubbles: true });
    viewer.dispatchEvent(navigateNextEvent);
    
    expect(mockSwiper.slider.slideTo).toHaveBeenCalledWith(1);
  });

  it('should handle all viewer types', async () => {
    await viewer.updateComplete;
    
    const viewerTypes = [
      'qy-viewer-image',
      'qy-viewer-panorama',
      'qy-viewer-youtube',
      'qy-viewer-video',
      'qy-viewer-3dmodel',
      'qy-viewer-gaussian'
    ];
    
    viewerTypes.forEach(type => {
      const element = viewer.shadowRoot?.querySelector(type);
      expect(element).toBeDefined();
    });
  });
});
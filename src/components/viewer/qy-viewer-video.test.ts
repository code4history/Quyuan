import { describe, it, expect, beforeEach } from 'vitest';
import './qy-viewer-video';
import { QyViewerVideo } from './qy-viewer-video';

describe('QyViewerVideo', () => {
  let element: QyViewerVideo;

  beforeEach(() => {
    element = document.createElement('qy-viewer-video') as QyViewerVideo;
    document.body.appendChild(element);
  });

  it('should be defined', () => {
    expect(element).toBeDefined();
    expect(element).toBeInstanceOf(QyViewerVideo);
  });

  it('should have correct tag name', () => {
    expect(element.tagName.toLowerCase()).toBe('qy-viewer-video');
  });

  it('should be hidden by default', async () => {
    await element.updateComplete;
    expect(element.shadowRoot?.querySelector('.backdrop')).toBeDefined();
    const backdrop = element.shadowRoot?.querySelector('.backdrop') as HTMLElement;
    expect(backdrop.style.visibility).toBe('hidden');
  });

  it('should show when open is called', async () => {
    element.open('test-video.mp4');
    await element.updateComplete;
    
    const backdrop = element.shadowRoot?.querySelector('.backdrop') as HTMLElement;
    expect(backdrop.style.visibility).toBe('visible');
    
    const video = element.shadowRoot?.querySelector('video') as HTMLVideoElement;
    expect(video).toBeDefined();
    expect(video.src).toContain('test-video.mp4');
  });

  it('should hide when close is called', async () => {
    element.open('test-video.mp4');
    await element.updateComplete;
    
    element.close();
    await element.updateComplete;
    
    const backdrop = element.shadowRoot?.querySelector('.backdrop') as HTMLElement;
    expect(backdrop.style.visibility).toBe('hidden');
  });

  it('should have navigation buttons', async () => {
    await element.updateComplete;
    const prevButton = element.shadowRoot?.querySelector('.nav-button.prev');
    const nextButton = element.shadowRoot?.querySelector('.nav-button.next');
    
    expect(prevButton).toBeDefined();
    expect(nextButton).toBeDefined();
  });

  it('should dispatch navigation events', async () => {
    await element.updateComplete;
    
    let prevEventFired = false;
    let nextEventFired = false;
    
    element.addEventListener('navigate-prev', () => {
      prevEventFired = true;
    });
    
    element.addEventListener('navigate-next', () => {
      nextEventFired = true;
    });
    
    const prevButton = element.shadowRoot?.querySelector('.nav-button.prev') as HTMLElement;
    const nextButton = element.shadowRoot?.querySelector('.nav-button.next') as HTMLElement;
    
    prevButton.click();
    expect(prevEventFired).toBe(true);
    
    nextButton.click();
    expect(nextEventFired).toBe(true);
  });
});
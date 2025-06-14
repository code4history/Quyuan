import { describe, it, expect, beforeEach } from 'vitest';
import './qy-viewer-3dmodel';
import { QyViewer3DModel } from './qy-viewer-3dmodel';

describe('QyViewer3DModel', () => {
  let element: QyViewer3DModel;

  beforeEach(() => {
    element = document.createElement('qy-viewer-3dmodel') as QyViewer3DModel;
    document.body.appendChild(element);
  });

  it('should be defined', () => {
    expect(element).toBeDefined();
    expect(element).toBeInstanceOf(QyViewer3DModel);
  });

  it('should have correct tag name', () => {
    expect(element.tagName.toLowerCase()).toBe('qy-viewer-3dmodel');
  });

  it('should be hidden by default', async () => {
    await element.updateComplete;
    const backdrop = element.shadowRoot?.querySelector('.backdrop') as HTMLElement;
    expect(backdrop.style.visibility).toBe('hidden');
  });

  it('should parse model URL correctly', async () => {
    const modelUrl = 'model.obj|material.mtl';
    element.open(modelUrl);
    await element.updateComplete;
    
    const backdrop = element.shadowRoot?.querySelector('.backdrop') as HTMLElement;
    expect(backdrop.style.visibility).toBe('visible');
    
    const container = element.shadowRoot?.querySelector('.model-container');
    expect(container).toBeDefined();
  });

  it('should handle model URL without material', async () => {
    const modelUrl = 'model.obj';
    element.open(modelUrl);
    await element.updateComplete;
    
    const backdrop = element.shadowRoot?.querySelector('.backdrop') as HTMLElement;
    expect(backdrop.style.visibility).toBe('visible');
  });

  it('should show loading state', async () => {
    element.open('model.obj');
    await element.updateComplete;
    
    const loading = element.shadowRoot?.querySelector('.loading');
    expect(loading).toBeDefined();
    expect(loading?.textContent).toContain('読み込み中');
  });

  it('should have navigation functionality', async () => {
    await element.updateComplete;
    
    const prevButton = element.shadowRoot?.querySelector('.nav-button.prev');
    const nextButton = element.shadowRoot?.querySelector('.nav-button.next');
    
    expect(prevButton).toBeDefined();
    expect(nextButton).toBeDefined();
  });
});
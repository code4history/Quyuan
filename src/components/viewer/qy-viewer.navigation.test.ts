import { describe, it, expect, beforeEach, vi } from 'vitest';
import type { CcViewer, MediaItem } from '@c4h/chuci';
import './qy-viewer';
import { QyViewer } from './qy-viewer';

const waitForUpdate = () => new Promise(resolve => setTimeout(resolve, 120));

const items: MediaItem[] = [
  { url: 'image1.jpg', type: 'image', thumbnailUrl: '', caption: 'image', fitToContainer: false, debugMode: false },
  { url: 'video1.mp4', type: 'video', thumbnailUrl: '', caption: 'video', fitToContainer: false, debugMode: false },
  { url: 'model.obj', type: '3dmodel', thumbnailUrl: '', caption: 'model', fitToContainer: false, debugMode: false }
];

describe('QyViewer navigation compatibility', () => {
  let viewer: QyViewer;
  let ccViewer: CcViewer;

  beforeEach(async () => {
    viewer = document.createElement('qy-viewer') as QyViewer;
    document.body.appendChild(viewer);
    await waitForUpdate();
    ccViewer = viewer.shadowRoot!.querySelector('qy-viewer-inner') as CcViewer;
  });

  it('forwards items, index and loop options to the inner cc-viewer', async () => {
    const open = vi.spyOn(ccViewer, 'open').mockImplementation(() => {});
    vi.spyOn(ccViewer, 'index', 'get').mockReturnValue(1);

    await viewer.open(items, 1, { loop: true });

    expect(open).toHaveBeenCalledWith(items, 1, { loop: true });
    expect(viewer.currentSlideIndex).toBe(1);
    expect(viewer.currentType).toBe('video');
    expect(viewer.getAttribute('currentslideindex')).toBe('1');
    expect(viewer.getAttribute('currenttype')).toBe('video');
  });

  it('reflects the inner viewer index after Chuci normalizes the requested index', async () => {
    vi.spyOn(ccViewer, 'open').mockImplementation(() => {});
    vi.spyOn(ccViewer, 'index', 'get').mockReturnValue(2);
    const sixItems = [...items, ...items];

    await viewer.open(sixItems, 8, { loop: true });

    expect(ccViewer.open).toHaveBeenCalledWith(sixItems, 8, { loop: true });
    expect(viewer.currentSlideIndex).toBe(2);
    expect(viewer.currentType).toBe('3dmodel');
    expect(viewer.getAttribute('currentslideindex')).toBe('2');
    expect(viewer.getAttribute('currenttype')).toBe('3dmodel');
  });

  it('reflects composed Chuci navigation events in compatibility attributes', async () => {
    vi.spyOn(ccViewer, 'open').mockImplementation(() => {});
    await viewer.open(items, 0, { loop: true });
    ccViewer.dispatchEvent(new CustomEvent('cc-viewer-index-change', {
      detail: { index: 2 },
      bubbles: true,
      composed: true
    }));

    expect(viewer.currentSlideIndex).toBe(2);
    expect(viewer.currentType).toBe('3dmodel');
    expect(viewer.getAttribute('currentslideindex')).toBe('2');
    expect(viewer.getAttribute('currenttype')).toBe('3dmodel');
  });

  it('clears currenttype when the inner viewer closes and keeps the z-index bridge', () => {
    viewer.currentType = 'image';
    ccViewer.dispatchEvent(new CustomEvent('cc-viewer-close', {
      bubbles: true,
      composed: true
    }));

    expect(viewer.currentType).toBe('');
    expect(viewer.hasAttribute('currenttype')).toBe(false);
    expect(viewer.shadowRoot!.textContent).toContain('--cc-viewer-z-index: var(--qy-viewer-z-index)');
  });
});

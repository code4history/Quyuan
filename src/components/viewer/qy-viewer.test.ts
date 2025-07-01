import { describe, it, expect } from 'vitest';
import { QyViewer } from './qy-viewer';

describe('QyViewer', () => {
  it('should be defined', () => {
    const element = document.createElement('qy-viewer') as QyViewer;
    expect(element).toBeDefined();
  });
});
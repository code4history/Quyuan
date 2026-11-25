import { test, expect, type Locator, type Page } from '@playwright/test';

const mediaTypes = ['image', 'panorama', 'youtube', 'video', '3dmodel', 'gaussian'] as const;

function innerViewer(page: Page) {
  return page.locator('qy-viewer cc-viewer');
}

async function waitForViewerReady(page: Page, mediaLabel: string) {
  const viewer = innerViewer(page);
  await expect(viewer.locator('.backdrop')).toBeVisible({ timeout: 15_000 });
  await expect(viewer.locator('.spinner')).toBeHidden({ timeout: 90_000 });
  await expect(
    viewer.locator('.viewer-error'),
    `${mediaLabel} を読み込めませんでした。外部メディアを使う項目ではネットワーク不調の可能性があります。viewer-error の本文と失敗したリクエストを確認してください。`,
  ).toBeHidden();
  await expect(viewer.locator('.renderer-host')).toBeVisible();
}

async function openAllMedia(page: Page, index: number) {
  await page.evaluate((slideIndex) => {
    const swiper = document.querySelector('#all-media') as any;
    swiper.goTo(slideIndex, { animate: false });
    void swiper.openViewer(slideIndex);
  }, index);
  await waitForViewerReady(page, mediaTypes[index]);
}

async function closeViewer(page: Page) {
  await innerViewer(page).evaluate((viewer: any) => viewer.close());
  await expect(innerViewer(page).locator('.backdrop')).toBeHidden();
}

async function waitForSlideAlignment(swiper: Locator, selectedIndex: number) {
  await expect.poll(() => swiper.evaluate((element, index) => {
    const root = (element as any).shadowRoot as ShadowRoot;
    const viewport = root.querySelector('#viewport');
    const panels = Array.from(root.querySelectorAll('.cc-slide')) as HTMLElement[];
    const selected = panels.find((panel) => panel.dataset.index === String(index));
    if (!viewport || !selected) return false;

    const viewportBox = viewport.getBoundingClientRect();
    const selectedBox = selected.getBoundingClientRect();
    const tolerance = 1;
    const selectedIsAligned =
      Math.abs(selectedBox.left - viewportBox.left) <= tolerance &&
      Math.abs(selectedBox.right - viewportBox.right) <= tolerance;
    const neighborsAreHidden = panels
      .filter((panel) => panel !== selected)
      .every((panel) => {
        const box = panel.getBoundingClientRect();
        return box.right <= viewportBox.left + tolerance || box.left >= viewportBox.right - tolerance;
      });
    return selectedIsAligned && neighborsAreHidden;
  }, selectedIndex)).toBe(true);
}

async function indexedDbThumbnailCount(page: Page): Promise<number> {
  return page.evaluate(() => new Promise<number>((resolve, reject) => {
    const request = indexedDB.open('chuci-thumbnails');
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction('thumbnails', 'readonly');
      const count = transaction.objectStore('thumbnails').count();
      count.onsuccess = () => {
        const result = count.result;
        db.close();
        resolve(result);
      };
      count.onerror = () => reject(count.error);
    };
  }));
}

test.describe('viewer renewal', () => {
  test.describe.configure({ mode: 'serial' });
  test.beforeEach(({ browserName }) => {
    test.skip(browserName !== 'chromium', 'renewal e2e は Chromium 専用');
  });

  test('swipe in leaflet popup changes slide and map center stays the same', async ({ page }) => {
    await page.goto('/renewal-demo.html');
    const markerIcon = page.locator('#leaflet-map .leaflet-marker-icon');
    await expect(markerIcon).toBeVisible();
    await expect.poll(() => markerIcon.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true);
    await markerIcon.click();
    const swiper = page.locator('.leaflet-popup-content qy-swiper');
    await expect(swiper.locator('.cc-slide')).toHaveCount(2);
    await page.waitForTimeout(500);
    const before = await page.evaluate(() => {
      const center = (window as any).renewalDemo.map.getCenter();
      return { lat: center.lat, lng: center.lng };
    });
    const viewport = swiper.locator('#viewport');
    const box = await viewport.boundingBox();
    expect(box).not.toBeNull();
    await page.mouse.move(box!.x + box!.width * 0.8, box!.y + box!.height / 2);
    await page.mouse.down();
    await page.mouse.move(box!.x + box!.width * 0.2, box!.y + box!.height / 2, { steps: 12 });
    await page.mouse.up();

    await expect.poll(() => swiper.evaluate((element: any) => element.index)).toBe(1);
    await waitForSlideAlignment(swiper, 1);
    const after = await page.evaluate(() => {
      const center = (window as any).renewalDemo.map.getCenter();
      return { lat: center.lat, lng: center.lng };
    });
    expect(after.lat).toBeCloseTo(before.lat, 10);
    expect(after.lng).toBeCloseTo(before.lng, 10);
    await expect(innerViewer(page)).toHaveCount(0);
    await page.screenshot({ path: 'e2e/screenshots/renewal-after-leaflet-popup.png', fullPage: true });
  });

  test('click opens viewer; next in viewer moves slider behind; close resumes autoplay', async ({ page }) => {
    await page.goto('/renewal-demo.html');
    const swiper = page.locator('#autoplay-slider');
    await expect(swiper.locator('.cc-slide')).toHaveCount(2);
    await swiper.locator('.cc-slide[data-index="0"] img').click();
    await waitForViewerReady(page, 'image');
    await innerViewer(page).locator('.nav-next').click();
    await expect.poll(() => swiper.evaluate((element: any) => element.index)).toBe(1);
    await expect(page.locator('qy-viewer')).toHaveAttribute('currentslideindex', '1');
    await expect(page.locator('qy-viewer')).toHaveAttribute('currenttype', 'image');
    await closeViewer(page);

    await expect.poll(
      () => swiper.evaluate((element: any) => element.index),
      { timeout: 7_000 },
    ).toBe(0);
  });

  test('all six media types open with black background and the same spinner element', async ({ page }) => {
    test.setTimeout(240_000);
    await page.goto('/renewal-demo.html');
    for (const [index, type] of mediaTypes.entries()) {
      await test.step(type, async () => {
        await openAllMedia(page, index);
        await expect(page.locator('qy-viewer')).toHaveAttribute('currenttype', type);
        await expect(innerViewer(page).locator('.backdrop')).toHaveCSS('background-color', 'rgb(0, 0, 0)');
        const spinnerIdentity = await page.evaluate(() => {
          const spinner = (document.querySelector('qy-viewer') as any)
            ?.shadowRoot?.querySelector('cc-viewer')?.shadowRoot?.querySelector('.spinner');
          const state = window as any;
          if (!spinner) return 'missing';
          if (!state.renewalSpinner) state.renewalSpinner = spinner;
          return state.renewalSpinner === spinner ? 'same' : 'different';
        });
        expect(spinnerIdentity).toBe('same');
        await page.screenshot({ path: `e2e/screenshots/renewal-after-${type}.png` });
        await closeViewer(page);
      });
    }
  });

  test('caption bar hides on drag and returns on tap', async ({ page }) => {
    await page.goto('/renewal-demo.html');
    await openAllMedia(page, 0);
    const viewer = innerViewer(page);
    const caption = viewer.locator('.caption');
    await expect(caption).toBeVisible();
    const content = viewer.locator('.renderer-host');
    const box = await content.boundingBox();
    expect(box).not.toBeNull();
    await page.mouse.move(box!.x + box!.width / 2, box!.y + box!.height / 2);
    await page.mouse.down();
    await page.mouse.move(box!.x + box!.width / 2 + 90, box!.y + box!.height / 2, { steps: 8 });
    await page.mouse.up();
    await expect(caption).toBeHidden();

    await content.click({ position: { x: box!.width / 2, y: box!.height / 2 } });
    await expect(caption).toBeVisible();
  });

  test('opens and closes 3D viewer 30 times without context loss', async ({ page }) => {
    test.setTimeout(120_000);
    const consoleErrors: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text());
    });
    await page.goto('/e2e-test.html');
    await page.evaluate(async () => {
      const viewer = document.createElement('qy-viewer') as any;
      viewer.id = 'context-stress-viewer';
      document.body.append(viewer);
      await viewer.updateComplete;
      const ccViewer = viewer.shadowRoot?.querySelector('cc-viewer') as any;
      (window as any).visibleContextLosses = 0;
      ccViewer.shadowRoot.addEventListener('webglcontextlost', () => {
        const backdrop = ccViewer.shadowRoot.querySelector('.backdrop');
        if (backdrop && !backdrop.hidden) (window as any).visibleContextLosses += 1;
      }, true);
    });
    const item = {
      url: 'data:text/plain,v%20-1%20-1%200%0Av%201%20-1%200%0Av%200%201%200%0Af%201%202%203',
      type: '3dmodel',
      thumbnailUrl: '',
      caption: 'context stress',
      fitToContainer: false,
      debugMode: false,
    };
    for (let iteration = 0; iteration < 30; iteration += 1) {
      await page.evaluate(async (mediaItem) => {
        await (document.querySelector('#context-stress-viewer') as any).open([mediaItem], 0, { loop: false });
      }, item);
      await waitForViewerReady(page, 'local data OBJ');
      await expect(innerViewer(page).locator('canvas')).toBeVisible();
      await closeViewer(page);
    }
    expect(await page.evaluate(() => (window as any).visibleContextLosses)).toBe(0);
    expect(consoleErrors, `30 回の開閉中に console.error が出ました:\n${consoleErrors.join('\n')}`).toEqual([]);

    await test.step('intentional context loss is observed on the visible canvas', async () => {
      await page.evaluate(async (mediaItem) => {
        await (document.querySelector('#context-stress-viewer') as any).open([mediaItem], 0, { loop: false });
      }, item);
      await waitForViewerReady(page, 'intentional context loss');
      await page.evaluate(() => {
        const viewer = document.querySelector('#context-stress-viewer') as any;
        const canvas = viewer.shadowRoot?.querySelector('cc-viewer')?.shadowRoot?.querySelector('canvas') as HTMLCanvasElement;
        const gl = canvas.getContext('webgl2') ?? canvas.getContext('webgl');
        const extension = gl?.getExtension('WEBGL_lose_context');
        if (!extension) throw new Error('WEBGL_lose_context is unavailable');
        extension.loseContext();
      });
      await expect.poll(() => page.evaluate(() => (window as any).visibleContextLosses)).toBe(1);
      await closeViewer(page);
    });
  });

  test('thumbnail honors cross-origin CORS and reuses an allowed result from IndexedDB after reload', async ({ page }) => {
    const createSwiper = (id: string, imageUrl: string) => page.evaluate(({ id: swiperId, imageUrl: url }) => {
      document.querySelector(`#${swiperId}`)?.remove();
      const swiper = document.createElement('qy-swiper') as any;
      swiper.id = swiperId;
      swiper.style.cssText = 'display:block;width:320px;height:240px';
      const slide = document.createElement('qy-swiper-slide');
      slide.setAttribute('image-url', url);
      slide.setAttribute('image-type', 'image');
      slide.setAttribute('caption', 'generated thumbnail');
      swiper.append(slide);
      document.body.append(swiper);
    }, { id, imageUrl });
    const allowedUrl = 'http://cors-allowed.test/thumbnail.jpg';
    let sourceRequestsAfterReload = 0;
    let reuseFromCache = false;
    await page.route(allowedUrl, (route) => {
      if (reuseFromCache) {
        sourceRequestsAfterReload += 1;
        return route.abort();
      }
      return route.fulfill({
        path: 'public/assets/chikubushima.jpg',
        contentType: 'image/jpeg',
        headers: { 'access-control-allow-origin': '*' },
      });
    });

    await page.goto('/e2e-test.html');
    await createSwiper('cache-swiper', allowedUrl);
    const generated = page.locator('#cache-swiper .viewer');
    await expect.poll(() => generated.getAttribute('src')).toMatch(/^blob:/);
    expect(await indexedDbThumbnailCount(page)).toBe(1);

    reuseFromCache = true;
    await page.reload();
    await createSwiper('cache-swiper', allowedUrl);
    await expect.poll(() => generated.getAttribute('src')).toMatch(/^blob:/);
    expect(sourceRequestsAfterReload).toBe(0);
    expect(await indexedDbThumbnailCount(page)).toBe(1);

    const deniedUrl = 'http://cors-denied.test/thumbnail.jpg';
    let deniedRequests = 0;
    await page.route(deniedUrl, (route) => {
      deniedRequests += 1;
      return route.fulfill({
        path: 'public/assets/chikubushima.jpg',
        contentType: 'image/jpeg',
        headers: { 'access-control-allow-origin': 'http://not-the-editor.invalid' },
      });
    });
    await createSwiper('cache-denied', deniedUrl);
    const denied = page.locator('#cache-denied .viewer');
    const iconSource = await denied.getAttribute('src');
    expect(iconSource).toMatch(/^data:image\//);
    await expect.poll(() => deniedRequests).toBe(1);
    await expect.poll(() => page.locator('#cache-denied').evaluate((element: any) => element.pendingThumbnails.size)).toBe(0);
    await expect(denied).toHaveAttribute('src', iconSource!);
    expect(await indexedDbThumbnailCount(page)).toBe(1);
  });

  test('gaussian camera-position changes the initial view', async ({ page }) => {
    test.setTimeout(180_000);
    await page.setViewportSize({ width: 160, height: 90 });
    const createSwiper = (cameraPosition?: string) => page.evaluate((position) => {
      const swiper = document.createElement('qy-swiper') as any;
      swiper.id = 'gaussian-swiper';
      swiper.style.cssText = 'display:block;width:160px;height:90px';
      const slide = document.createElement('qy-swiper-slide');
      slide.setAttribute('image-url', 'https://t.tilemap.jp/3ddata/okuman.splat');
      slide.setAttribute('image-type', 'gaussian');
      slide.setAttribute('thumbnail-url', '/assets/jizo.png');
      slide.setAttribute('caption', 'camera comparison');
      if (position) slide.setAttribute('camera-position', position);
      swiper.append(slide);
      document.body.append(swiper);
    }, cameraPosition);
    const openGaussian = async () => {
      await page.evaluate(async () => {
        await (document.querySelector('#gaussian-swiper') as any).openViewer(0);
      });
      await waitForViewerReady(page, 'https://t.tilemap.jp/3ddata/okuman.splat');
      await expect(innerViewer(page).locator('canvas')).toBeVisible();
      return page.evaluate(() => new Promise<string>((resolve, reject) => {
        requestAnimationFrame(() => {
          const canvas = (document.querySelector('qy-viewer') as any)
            ?.shadowRoot?.querySelector('cc-viewer')?.shadowRoot?.querySelector('canvas');
          if (!canvas) {
            reject(new Error('Gaussian canvas not found'));
            return;
          }
          resolve(canvas.toDataURL('image/png'));
        });
      }));
    };

    await page.goto('/e2e-test.html');
    await createSwiper();
    const defaultView = await openGaussian();
    await closeViewer(page);
    await page.reload();
    await createSwiper('8,4,8');
    const customView = await openGaussian();
    expect(defaultView).not.toBe(customView);
  });
});

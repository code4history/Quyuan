import { test, expect, type Page } from '@playwright/test';

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

  test('swipe in leaflet popup changes slide and map center stays the same', async ({ page }) => {
    await page.goto('/renewal-demo.html');
    await expect(page.locator('#leaflet-map .leaflet-marker-icon')).toBeVisible();
    await page.locator('#leaflet-map .leaflet-marker-icon').click();
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
    await page.evaluate(() => {
      const viewer = document.createElement('qy-viewer') as any;
      viewer.id = 'context-stress-viewer';
      document.body.append(viewer);
      (window as any).visibleContextLosses = 0;
      document.addEventListener('webglcontextlost', () => {
        const backdrop = viewer.shadowRoot?.querySelector('cc-viewer')?.shadowRoot?.querySelector('.backdrop');
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
  });

  test('thumbnail generated for slide without thumbnail-url and reused from IndexedDB after reload', async ({ page }) => {
    await page.goto('/e2e-test.html');
    const createSwiper = () => page.evaluate(() => {
      document.querySelector('#cache-swiper')?.remove();
      const swiper = document.createElement('qy-swiper') as any;
      swiper.id = 'cache-swiper';
      swiper.style.cssText = 'display:block;width:320px;height:240px';
      const slide = document.createElement('qy-swiper-slide');
      slide.setAttribute('image-url', '/assets/chikubushima.jpg?thumbnail-e2e=1');
      slide.setAttribute('image-type', 'image');
      slide.setAttribute('caption', 'generated thumbnail');
      swiper.append(slide);
      document.body.append(swiper);
    });
    await createSwiper();
    const generated = page.locator('#cache-swiper .viewer');
    await expect.poll(() => generated.getAttribute('src')).toMatch(/^blob:/);
    expect(await indexedDbThumbnailCount(page)).toBe(1);

    let sourceRequestsAfterReload = 0;
    await page.route('**/assets/chikubushima.jpg?thumbnail-e2e=1', (route) => {
      sourceRequestsAfterReload += 1;
      return route.abort();
    });
    await page.reload();
    await createSwiper();
    await expect.poll(() => generated.getAttribute('src')).toMatch(/^blob:/);
    expect(sourceRequestsAfterReload).toBe(0);
    expect(await indexedDbThumbnailCount(page)).toBe(1);
  });

  test('gaussian camera-position changes the initial view', async ({ page }) => {
    test.setTimeout(180_000);
    await page.setViewportSize({ width: 160, height: 90 });
    await page.goto('/e2e-test.html');
    const createViewer = () => page.evaluate(() => {
      const viewer = document.createElement('qy-viewer') as any;
      viewer.id = 'gaussian-viewer';
      document.body.append(viewer);
    });
    await createViewer();
    const openGaussian = async (cameraPosition?: string) => {
      await page.evaluate(async (position) => {
        const item = {
          url: 'https://t.tilemap.jp/3ddata/okuman.splat',
          type: 'gaussian',
          thumbnailUrl: '',
          caption: 'camera comparison',
          fitToContainer: false,
          debugMode: false,
          ...(position ? { cameraPosition: position } : {}),
        };
        await (document.querySelector('#gaussian-viewer') as any).open([item], 0, { loop: false });
      }, cameraPosition);
      await waitForViewerReady(page, 'https://t.tilemap.jp/3ddata/okuman.splat');
      await expect(innerViewer(page).locator('canvas')).toBeVisible();
      return page.evaluate(() => new Promise<string>((resolve, reject) => {
        requestAnimationFrame(() => {
          const canvas = (document.querySelector('#gaussian-viewer') as any)
            ?.shadowRoot?.querySelector('cc-viewer')?.shadowRoot?.querySelector('canvas');
          if (!canvas) {
            reject(new Error('Gaussian canvas not found'));
            return;
          }
          resolve(canvas.toDataURL('image/png'));
        });
      }));
    };

    const defaultView = await openGaussian();
    await closeViewer(page);
    await page.reload();
    await createViewer();
    const customView = await openGaussian('8,4,8');
    expect(defaultView).not.toBe(customView);
  });
});

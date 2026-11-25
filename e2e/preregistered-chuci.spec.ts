import { readFileSync } from 'node:fs';
import { gunzipSync } from 'node:zlib';
import { expect, test } from '@playwright/test';

// Exact UMD from Chuci commit 07d6cf5, dist/chuci.umd.js. Stored compressed
// so a shallow Quyuan CI checkout can exercise the real registration order.
const legacyChuci = gunzipSync(readFileSync(new URL('./fixtures/chuci-07d6cf5.umd.js.gz', import.meta.url)));

test('qy-swiper opens, navigates and closes with the legacy Chuci UMD registered first', async ({ page }) => {
  await page.route('**/legacy-chuci.js', (route) => route.fulfill({
    contentType: 'application/javascript',
    body: legacyChuci,
  }));
  await page.route('**/preregistered-chuci', (route) => route.fulfill({
    contentType: 'text/html',
    body: `<!doctype html>
      <script src="/legacy-chuci.js"></script>
      <script>
        window.legacyViewer = customElements.get('cc-viewer');
        window.legacySwiper = customElements.get('cc-swiper');
      </script>
      <script type="module" src="/src/index.ts"></script>
      <qy-swiper style="width:320px;height:240px">
        <qy-swiper-slide image-url="/assets/jizo.png" thumbnail-url="/assets/jizo.png"></qy-swiper-slide>
        <qy-swiper-slide image-url="/assets/jizo.png" thumbnail-url="/assets/jizo.png"></qy-swiper-slide>
      </qy-swiper>`,
  }));
  await page.goto('/preregistered-chuci');
  expect(await page.evaluate(() => {
    const legacy = window as Window & { legacyViewer?: CustomElementConstructor; legacySwiper?: CustomElementConstructor };
    return Boolean(legacy.legacyViewer && legacy.legacySwiper &&
      legacy.legacyViewer === customElements.get('cc-viewer') &&
      legacy.legacySwiper === customElements.get('cc-swiper'));
  })).toBe(true);
  await page.addStyleTag({ content: 'qy-viewer { --qy-viewer-z-index: 2048 }' });
  await page.locator('qy-swiper .cc-slide[data-index="0"] img').click();
  const wrapper = page.locator('qy-viewer');
  const backdrop = wrapper.locator('.backdrop');
  await expect(backdrop).toBeVisible({ timeout: 3000 });
  await expect(backdrop).toHaveCSS('z-index', '2048');
  await expect(wrapper).toHaveAttribute('currenttype', 'image');
  await wrapper.locator('.nav-next').click();
  await expect(wrapper).toHaveAttribute('currentslideindex', '1');
  const swiper = page.locator('qy-swiper');
  await expect.poll(() => swiper.evaluate((node) => (node as HTMLElement & { index: number }).index)).toBe(1);
  await wrapper.locator('.nav-prev').click();
  await expect(wrapper).toHaveAttribute('currentslideindex', '0');
  await wrapper.locator('.nav-close').click();
  await expect(backdrop).toBeHidden();
  await expect(wrapper).not.toHaveAttribute('currenttype', /.+/);
});

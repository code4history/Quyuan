import { expect, test } from '@playwright/test';

for (const scenario of ['previous', 'unpainted right swipe', 'reverse drag', 'interrupted swipe'] as const) {
  test(`carousel keeps a continuous viewport during ${scenario}`, async ({ page }) => {
    await page.goto('/e2e-test.html');
    const results = await page.evaluate(async (action) => {
      const swiper = document.createElement('qy-swiper');
      swiper.style.cssText = 'width:300px;height:200px';
      const count = action === 'previous' || action === 'interrupted swipe' ? 3 : 2;
      for (let i = 0; i < count; i++) {
        const slide = document.createElement('qy-swiper-slide');
        slide.setAttribute('image-url', '/assets/jizo.png');
        slide.setAttribute('thumbnail-url', '/assets/jizo.png');
        swiper.append(slide);
      }
      document.body.append(swiper);
      await Promise.resolve();
      const viewport = swiper.shadowRoot!.querySelector<HTMLElement>('#viewport')!;
      const panels = [...viewport.querySelectorAll<HTMLElement>('.cc-slide')];
      const frame = () => new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
      const positions = () => {
        const left = viewport.getBoundingClientRect().left;
        return panels.map((panel) => panel.getBoundingClientRect().left - left);
      };
      const pointer = (type: string, x: number) =>
        viewport.dispatchEvent(new PointerEvent(type, { pointerId: 1, clientX: x, bubbles: true }));
      await frame();
      await frame();

      let from = 0;
      let to = count - 1;
      let beforeCommit: number[] | undefined;
      if (action === 'previous') {
        viewport.querySelector<HTMLButtonElement>('#previous')!.click();
      } else if (action === 'interrupted swipe') {
        pointer('pointerdown', 250);
        pointer('pointermove', 175);
        pointer('pointerup', 175);
        // Start the second swipe while the first is still moving and its old
        // panel is visible at the edge, but the new source occupies the center.
        const deadline = performance.now() + 1500;
        while (positions()[1] > 140 && performance.now() < deadline) await frame();
        from = 1;
        to = 2;
        pointer('pointerdown', 250);
        pointer('pointermove', 200);
        await frame();
        beforeCommit = positions();
        pointer('pointermove', 170);
        pointer('pointerup', 170);
      } else {
        pointer('pointerdown', 140);
        if (action === 'reverse drag') {
          pointer('pointermove', 60);
          await frame();
          beforeCommit = positions();
        }
        pointer('pointermove', 220);
        pointer('pointerup', 220);
      }

      const atCommit = positions();
      const samples = [atCommit];
      const until = performance.now() + 300;
      do {
        await frame();
        samples.push(positions());
      } while (performance.now() < until);

      return { index: (swiper as HTMLElement & { index: number }).index, from, to, beforeCommit, samples };
    }, scenario);

    expect(results.index).toBe(results.to);
    const [first] = results.samples;
    if (scenario === 'unpainted right swipe') expect(first[results.to]).toBeLessThanOrEqual(-299);
    results.beforeCommit?.forEach((x, i) => {
      if (Math.abs(x) < 299) expect(Math.abs(first[i] - x)).toBeLessThan(5);
    });
    for (const positions of results.samples) {
      const centered = positions.flatMap((x, i) => x < 149.5 && x > -149.5 ? [i] : []);
      // The two panels may meet at exactly the center pixel.
      expect(centered.every((index) => index === results.from || index === results.to)).toBe(true);
      // Adjacent panels must cover the entire viewport throughout the move.
      let covered = 0;
      for (const x of positions.toSorted((a, b) => a - b)) {
        if (x + 300 <= covered || x >= 300) continue;
        expect(x).toBeLessThanOrEqual(covered + 1);
        if (covered > 0) expect(x).toBeGreaterThanOrEqual(covered - 1);
        covered = x + 300;
      }
      expect(covered).toBeGreaterThanOrEqual(299);
    }
    expect(Math.abs(results.samples.at(-1)![results.to])).toBeLessThan(1);
  });
}

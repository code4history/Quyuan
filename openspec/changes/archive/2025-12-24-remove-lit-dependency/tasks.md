# Tasks: Remove Lit & Fix Vulnerabilities

## 1. Vulnerability Fix
- [x] Add `pnpm.overrides` to `package.json` to resolve `vue-template-compiler` vulnerability. <!-- id: vuln -->
- [x] Run `pnpm audit` to verify fix.

## 2. Infrastructure
- [x] Remove `lit` from `package.json`. <!-- id: rm-lit -->
- [x] Create `src/base/qy-element.ts` implementing `QyElement` (reference Chuci pattern). <!-- id: base-cls -->

## 3. Component Migration
- [x] Refactor `src/qy-quyuan.ts`. <!-- id: refactor-quyuan -->
    -   Extend `QyElement`.
    -   Implement `observedAttributes`.
    -   Convert template.
- [x] Refactor `src/components/viewer/qy-viewer.ts`. <!-- id: refactor-viewer -->
- [x] Refactor `src/components/swiper/qy-swiper.ts`. <!-- id: refactor-swiper -->

## 4. Verification
- [x] Fix `src/utils/qy-utils.ts` (remove `CSSResult` usage). <!-- id: fix-utils -->
- [x] Run `pnpm test` and fix any breakages. <!-- id: test -->
- [x] Verify `pnpm build` size reduction. <!-- id: build -->

## 5. Debugging & Fixes
- [x] Fix `QyViewer` modal visibility (z-index/display issues). <!-- id: fix-viewer-modal -->
- [x] Fix missing close [X] button in `QyViewer` (CSS corruption + excess styles). <!-- id: fix-close-btn -->
- [x] Add MP4, 3D, Splatting test data to `nj.geojson`. <!-- id: add-test-data -->

## Status
✅ **All tasks completed successfully**
- Lit dependency removed and replaced with vanilla Web Components
- QyElement base class working correctly
- All viewers (Image, Panorama, YouTube, MP4, 3D MTL, Gaussian Splatting) functional
- Close button visible and clickable
- Builds passing, tests passing

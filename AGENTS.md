# Repository Guidelines

## Core Operating Principles

These principles govern how an AI coding agent should operate in this repository, regardless of which tool (Claude Code, Codex, or others) is used.

1. **Response Language Discipline**: Follow this repository's working-language convention when responding to the user (for this repository, Japanese), and keep responses polite and concise. This rule governs the language the agent uses when *talking with the user* — it is a separate axis from the language this document itself is written in (English, see "Documentation Language" below), and separate from the bilingual (English/Japanese) convention that applies to README and Wiki pages.
2. **Respect for Existing Behavior**: Do not invent your own implementation or make unsupported leaps of inference. Prioritize faithfully reproducing and porting the logic of the existing implementation — the migration source, the specification, or prior commits — over introducing a novel design.
3. **Root-Cause Analysis**: When a problem or bug occurs, do not keep patching based on guesses. Always compare against the existing implementation or specification and investigate the root cause thoroughly before applying a fix.
4. **The Human Gate Is Sovereign**: Never decide on your own that it is fine to move on to the next step without an explicit response from the user to a question or confirmation request. The agent privately concluding that something is fine is not a substitute for the user confirming it — the user must obtain that assurance for themselves. Whether to proceed to the next step is always the user's exclusive prerogative. Proceeding without a response usurps that prerogative and must be treated as the equivalent of a coup — a grave violation, never a minor process slip.

### Documentation Language

This document (`AGENTS.md`) itself is written in English, independent of principle 1 above.

## Operational Rules & History

- Repository-specific operating rules for AI coding agents are recorded under `docs/superpowers/rules/`.
- A translated index of this repository's pre-2026 development history (proposals and records originally written in the OpenSpec workflow) is available at `docs/history/openspec-legacy-index.md`, with original documents preserved under `docs/history/openspec-legacy/`.

## Project Structure & Module Organization

Template-extraction and web-component logic lives in `src/` (`qy-quyuan.ts`, `index.ts`, `base/qy-element.ts`, `components/swiper/`, `components/viewer/`, `utils/qy-template-extractor.ts`, `utils/qy-utils.ts`). Some unit tests are colocated with their component (`src/components/viewer/qy-viewer.test.ts`), others live in `tests/` (`tests/components/swiper/qy-swiper.test.ts`, `tests/setup.ts`). Playwright end-to-end specs live in `e2e/` (`smoke.spec.ts`, `quyuan.spec.ts`, `leaflet-popup.spec.ts`, `viewer-integration.spec.ts`). `demo/` and `public/` (including sample assets under `public/assets/`) host the Vite demo playground.

## Build, Test, and Development Commands

`pnpm dev` starts the Vite dev server. `pnpm build` runs `pnpm typecheck` then a production bundle (`BUILD_MODE=package vite build`); `pnpm build:demo` and `pnpm deploy` build the demo site. `pnpm typecheck` runs `tsc --noEmit --allowImportingTsExtensions`. `pnpm test` (`vitest run`) and `pnpm test:watch` run the unit suite; `pnpm coverage` adds V8 coverage. `pnpm test:e2e`, `pnpm test:e2e:ui`, and `pnpm test:e2e:ci` run the Playwright suite in `e2e/`. `pnpm lint` runs ESLint over `src`/`tests`.

## Architecture Overview

### Project Purpose
Quyuan (屈原) is a GeoJSON template engine with multimedia viewer components for web maps. It processes GeoJSON features through Nunjucks templates to generate dynamic HTML content (popups, markers) and integrates with Leaflet, OpenLayers, and MapLibre GL.

### Core Architecture

1. **Template Processing Pipeline**
   - `QyTemplateExtractor` (src/utils/qy-template-extractor.ts) is the core engine
   - Processes templates with Nunjucks, using GeoJSON feature properties as template variables
   - Supports multiple template keys (e.g., `icon` for markers, `html` for popups)
   - Returns enhanced GeoJSON with results stored in `feature.result` object

2. **Web Components Structure**
   - All components extend Lit's `LitElement` with TypeScript decorators
   - Components use Shadow DOM for style encapsulation
   - Event communication pattern: child components dispatch custom events to parents
   - Main components:
     - `qy-viewer`: Controller component that manages different media types
     - `qy-swiper`: Touch-enabled carousel container using Swiper.js
     - `qy-viewer-image`: Image viewer using Viewer.js
     - `qy-viewer-panorama`: 360° panorama viewer using A-Frame
     - `qy-viewer-youtube`: YouTube video embedding

3. **Build Configuration**
   - Dual-mode Vite configuration:
     - Library mode: Builds ES, CJS, and UMD modules with TypeScript declarations
     - Demo mode: Builds multiple HTML entry points for GitHub Pages
   - TypeScript path aliases: `@/*` maps to `src/*`
   - External dependencies: lit, nunjucks, swiper, viewerjs, aframe

4. **Integration Pattern**
   ```typescript
   // Process GeoJSON with templates
   const result = Quyuan.templateExtractor({ geojson, templates });

   // Each feature gets enhanced with result object
   // feature.result.icon - processed marker icon path
   // feature.result.html - processed popup HTML
   ```

### Key Implementation Details

- **Template Processing**: Uses standard Nunjucks syntax with feature properties as variables
- **Media Detection**: Viewer components automatically detect media type from URLs
- **Component Registration**: Web components auto-register when imported via side effects
- **Style Isolation**: Each component defines styles in a separate `*-styles.ts` file using Lit's `css` template literal
- **Testing**: Vitest with JSDOM for Web Components, includes DOM cleanup and async element update testing

## Coding Style & Naming Conventions

TypeScript with `strict: true` in `tsconfig.json` and the `@/*` path alias mapped to `src/*`. ESLint is configured via `eslint.config.mjs` (`@typescript-eslint` rules); Prettier formatting is enforced via `.prettierrc`. Run `pnpm lint` before committing.

## Testing Guidelines

Vitest with JSDOM is the unit test runner (`pnpm test`); tests are colocated with components or placed under `tests/`, mirroring the component/utility being exercised. Playwright end-to-end specs in `e2e/` exercise the built viewer components against Leaflet/OpenLayers/MapLibre integration pages (`leaflet.html`, `openlayers.html`, `maplibre.html`, `test-media.html`). `pnpm prepublishOnly` runs lint, typecheck, test, and build together as the release gate.

## Commit & Pull Request Guidelines

Recent `git log` shows a mix of `fix:`/`docs:`-prefixed Conventional Commits and task-ID-prefixed messages (e.g. `m15-t1:`, `c2-m4-t3:`) tied to this project's internal task tracking. Keep commits scoped to one concern; when a message is not part of a tracked task, prefer a Conventional Commits prefix. Pull requests should describe the affected viewer/template behavior and confirm lint, typecheck, unit tests, and (when relevant) e2e tests pass locally before requesting review.

## Release & Configuration Tips

`pnpm prepublishOnly` is the release gate (lint + typecheck + test + build). CI pins a specific pnpm version in `release.yml` to avoid version-resolution failures. Keep secrets and sample media out of the repository beyond what is already tracked under `public/assets/`.

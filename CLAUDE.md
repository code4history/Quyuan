# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

```bash
# Development
npm run dev          # Start development server at http://localhost:5173

# Building
npm run build        # Build library package (outputs to dist/)
npm run deploy       # Build for deployment (includes HTML demos)

# Testing
npm test             # Run tests once
npm run test:watch   # Run tests in watch mode
npm run coverage     # Run tests with coverage report
npm run test -- path/to/file.test.ts  # Run specific test file
```

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
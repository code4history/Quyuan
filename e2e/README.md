# E2E Test Strategy for Quyuan

## Overview
This directory contains end-to-end tests for the Quyuan library using Playwright.

## Test Structure
- `quyuan.spec.ts` - Core library functionality tests
- Additional test files can be added for specific features

## Running Tests

### Local Development
```bash
# Run all E2E tests
npm run test:e2e

# Run tests with UI mode for debugging
npm run test:e2e:ui

# Run specific test file
npx playwright test e2e/quyuan.spec.ts
```

### CI Environment
```bash
# Run tests with CI configuration (Chromium only)
npm run test:e2e:ci
```

## Test Coverage
1. Library loading and initialization
2. Template extraction functionality
3. Web component rendering (qy-viewer)
4. Integration with map libraries (Leaflet, OpenLayers, MapLibre)

## Writing New Tests
1. Create new `.spec.ts` files in the `e2e` directory
2. Use the test page at `/e2e-test.html` for isolated testing
3. For map integration tests, use the specific demo pages (`/leaflet.html`, etc.)

## Browser Support
- Chromium (primary, used in CI)
- Firefox
- WebKit/Safari
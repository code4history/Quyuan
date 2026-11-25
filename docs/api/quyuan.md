# Quyuan API Reference

Web Components provided by `@c4h/quyuan`, thumbnail generation through Chuci,
and integration examples with map libraries.

## Entry points

`@c4h/quyuan` exposes two entry points:

| Entry point | Import | Notes |
|---|---|---|
| `@c4h/quyuan` | `import { Quyuan } from '@c4h/quyuan'` | Registers the Web Components and bundles `@c4h/chuci`. |
| `@c4h/quyuan/template` | `import { Quyuan } from '@c4h/quyuan/template'` | Template engine only. Does not import `@c4h/chuci` and does not register UI components. |

`@c4h/chuci` `^2.0.0` is an optional peer dependency of `@c4h/quyuan`. pnpm
installs optional peers automatically, but npm does not — add `@c4h/chuci`
explicitly when using the UI components with npm.

The UI uses Chuci's own carousel and viewers. It does not use Swiper.js,
viewer.js, gsplat, or A-Frame. three.js is bundled, and Spark is loaded on
demand for Gaussian rendering and thumbnails.

## Web Components

### `<qy-swiper>`

Displays multimedia content in a carousel. Set a height with CSS. Two or more
slides loop and snap one item at a time. Autoplay advances every 5 seconds,
pauses while this carousel's viewer is open, and resumes at the viewer's last
selected item after it closes.

**Attributes:**

- `has-thumb`: Show the thumbnail gallery instead of the dot indicator.
- `autoplay`: Enable automatic advancement.
- `style`: CSS style; a height is recommended.

**Inherited properties and methods:**

- `index` (number): Current zero-based slide index.
- `items` (`MediaItem[]`) and `slides` (`Element[]`): Current media items and slide elements.
- `loop` (boolean): Whether the carousel currently loops.
- `goTo(index: number, opts?: { animate?: boolean })`: Move to a slide.
- `openViewer(index: number): Promise<void>`: Open `qy-viewer` at a zero-based slide index.
- `pauseAutoplay()` / `resumeAutoplay()`: Control the autoplay timer.

**Events:**

- `cc-swiper-index-change`: Fired after the slide index changes or `goTo` is called.
  - `detail.index`: Current zero-based slide index.

### `<qy-swiper-slide>`

Defines one slide. Quyuan preserves these attributes from its existing popup
templates and passes them to Chuci.

| Attribute | Meaning |
|---|---|
| `image-url` | URL of the full media (required). |
| `image-type` | `image`, `panorama`, `youtube`, `video`, `3dmodel`, or `gaussian` (required). Unknown values are treated as `image`. |
| `thumbnail-url` | Explicit thumbnail URL. It takes precedence over cached and generated thumbnails. |
| `caption` | Caption shown in the carousel and viewer. |
| `material-url` | MTL material URL for a `3dmodel`. |
| `camera-position` | Initial camera position as `"x,y,z"` for `3dmodel` and `gaussian`. |
| `camera-target` | Initial camera target as `"x,y,z"` for `3dmodel` and `gaussian`. |
| `show-texture` | Set to `"false"` to hide a 3D model's texture; any other value shows it. The setting is honored when the viewer opens. |
| `fit-to-container` | Boolean attribute. Fit the whole 3D model in the container. Explicit camera position/target values take precedence. |
| `debug-mode` | Boolean attribute. Show the shared debug panel; 3D media include view and loading values. |

`fit-to-container` and `debug-mode` are true when present, including when their
value is empty. Gaussian camera attributes and 3D model texture/fit attributes
are applied to the rendered view.

The `youtube` type extracts a video ID from an HTTP or HTTPS URL on `youtube.com`,
`youtu.be`, or `youtube-nocookie.com` and converts it to an HTTPS embed URL.
If no valid ID can be extracted, the viewer shows its shared error panel and the
automatic thumbnail remains a media-type icon.

### `<qy-viewer>`

The fullscreen viewer automatically opened by `qy-swiper`. It wraps Chuci's
viewer implementation shipped with Quyuan, including on pages that have already
registered an older Chuci bundle. Media-specific viewer elements are outside the public API.

**Compatibility attributes and properties:**

- `currentslideindex` / `currentSlideIndex`: Current zero-based item index.
- `currenttype` / `currentType`: Current media type. The attribute is removed when the viewer closes.

Applications normally read these state values rather than set them.

**Methods:**

- `open(items: MediaItem[], index: number, opts?: { loop?: boolean }): Promise<void>`: Open a media list at a zero-based index.
- `close()`: Close the viewer.

**Events from the wrapped viewer:**

- `cc-viewer-index-change`: Fired when the viewer moves to another item.
  - `detail.index`: Current zero-based item index.
- `cc-viewer-close`: Fired when the viewer closes.

These events bubble and cross shadow DOM boundaries. Left and Right Arrow keys
navigate, and Escape closes the viewer. Viewer navigation uses buttons and the
keyboard rather than swipe gestures.

## Migrating to 2.0

### HTML-only use

Existing `qy-swiper` and `qy-swiper-slide` markup needs no API changes. Review
the shared appearance and dependency/deployment changes inherited from Chuci:
Swiper.js, viewer.js, gsplat, and A-Frame are gone; three.js is bundled. With
the ESM build, keep every file in `dist/` together so the separate Spark chunk
can load on demand. The UMD/CDN build contains Spark instead of loading a
separate chunk. The template-only entry point is unaffected.

Review attributes that previously did not affect rendering. Gaussian
`camera-position` and `camera-target`, and 3D model `show-texture` and
`fit-to-container`, now work. `fit-to-container` is a boolean attribute, so
`fit-to-container="false"` still enables fitting. Remove the attribute to
disable it.

### Direct JavaScript viewer control

Convert the old URL/type/attributes form to `MediaItem[]` plus an initial index.
The carousel method now takes only the index:

```javascript
// Before
const swiper = document.querySelector('qy-swiper');
const viewer = document.querySelector('qy-viewer');
viewer.setSwiper(swiper);
viewer.open('photo.jpg', 'image', { caption: 'A photo' });
viewer.setCurrentSlideIndex(0);
await swiper.openViewer('photo.jpg', 'image', 0);

// After
const items = [
  { url: 'photo.jpg', type: 'image', caption: 'A photo' },
  { url: 'next.jpg', type: 'image', caption: 'Next photo' }
];
await viewer.open(items, 0, { loop: true });
await swiper.openViewer(0);
```

`setSwiper` and `setCurrentSlideIndex` have been removed. A viewer opened with
`swiper.openViewer(index)` needs no separate `setSwiper` call. Track direct
viewer navigation with `cc-viewer-index-change` and its `detail.index` instead
of `setCurrentSlideIndex`:

```javascript
document.addEventListener('cc-viewer-index-change', (event) => {
  console.log(event.detail.index);
});
```

Use the single `qy-viewer`; the former media-specific Chuci `cc-viewer-*`
elements are no longer available.

## Viewer and Carousel Controls

| Input | 2D image | 3D model / Gaussian | 360° panorama |
|---|---|---|---|
| One-finger drag / left-mouse drag | Pan | Rotate around the target | Look around in the grab direction |
| Mouse wheel / pinch | Zoom around the pointer or fingers | Move closer or farther | Change the field of view |
| Two-finger drag / right-mouse drag | Pan | Pan parallel to the view | No action |
| Double-click / double-tap | Reset the initial view | Reset the initial camera | Reset the initial direction |

Every viewer has a black background, shared loading/error feedback, a close
button at the top right, and navigation buttons at the sides. The optional
debug panel appears at the top left.

## Caption and Indicator Rules

### Carousel

- The caption bar occupies space below the media rather than covering it.
- The caption is one line with overflow ellipsis; indicators are on the right.
- Two or more slides show the bar, even when the caption is empty. One slide shows it only with a caption.
- Two through eight slides show clickable dots. More than eight show `n / N`.
- `has-thumb` replaces dots or the counter with the thumbnail gallery.

### Viewer

- The caption wraps instead of being truncated. More than eight items use `n / N` instead of dots.
- The bar is shown when the viewer opens and after navigation.
- For overlaid viewer controls, content interaction hides the bar; without further interaction it also hides after 3 seconds. A tap without dragging or mouse movement shows it again. Navigation and close buttons fade but remain usable.
- Video viewers reserve space for the bar so it does not cover native playback controls.

## Thumbnail Generation API

An explicit `thumbnail-url` takes precedence, followed by cached results from IndexedDB
(`chuci-thumbnails`). The carousel generates missing thumbnails one at a time for the
current slide and its immediate neighbors. Other slides become eligible as you navigate.
The cache key and fetch use the same absolute source and material URLs, resolved against
the document's base URL.

Thumbnail generation limits each fetched response to 64 MiB, including OBJ, MTL, and
texture responses. Over-limit sources keep the media-type icon and are never stored in
IndexedDB. If fetching a YouTube thumbnail fails because of CORS or a similar error,
the carousel can use the public image URL directly when a video ID is available.
Other failures leave the media-type icon in place. Failures are remembered for the
page lifetime.

Authoring tools can call the same API directly from `@c4h/chuci`; Quyuan does
not re-export it.

```typescript
generateThumbnail(
  item: MediaItem,
  opts?: { maxSize?: number; signal?: AbortSignal }
): Promise<Blob>
```

`readMediaItem` accepts a `qy-swiper-slide` as well as a `cc-swiper-slide`.
`maxSize` limits the longest side and defaults to 256 pixels. The following
example's `storeBlob` callback is supplied by the authoring tool and returns
the stored image URL.

```javascript
import { generateThumbnail, readMediaItem } from '@c4h/chuci';

async function appendSlideWithThumbnail(swiper, slide, storeBlob, signal) {
  const blob = await generateThumbnail(readMediaItem(slide), {
    maxSize: 256,
    signal
  });
  const storedUrl = await storeBlob(blob);
  slide.setAttribute('thumbnail-url', storedUrl);
  swiper.append(slide); // Set the URL before inserting the slide.
}

const controller = new AbortController();
await appendSlideWithThumbnail(swiper, slide, storeBlob, controller.signal);
// To cancel an unfinished operation: controller.abort();
```

- `image` and `video` produce WebP. `panorama`, `3dmodel`, and `gaussian` produce PNG. `youtube` returns the public YouTube thumbnail Blob as fetched, without resizing it to `maxSize`; a URL without an extractable YouTube video ID rejects.
- Gaussian thumbnails use a 720 CSS-pixel reference height for the field of view, keeping the same framing at a given aspect ratio across `maxSize` values.
- Video thumbnails use the frame at 0.5 seconds, or the nearest available earlier frame for shorter videos.
- This browser API is not available in Node-only environments. Image and video generation requires `OffscreenCanvas` (images also require `createImageBitmap`). Panorama, 3D model, and Gaussian generation requires WebGL 2. YouTube thumbnail retrieval requires neither `OffscreenCanvas` nor WebGL.
- The media server must permit CORS whenever media pixels are fetched or copied to a canvas, including cross-origin images, video frames, textures, models, splats, and YouTube's public thumbnail.
- Gaussian generation loads Spark on demand.

## Content Security Policy

If the host page sets a CSP, add the source expressions needed by the features you use.

- Gaussian (Spark) uses `'wasm-unsafe-eval'` in `script-src` and `blob:` in `worker-src`. If creating the Blob worker throws, Spark tries a `data:` worker. Allow `data:` in `worker-src` only if you need that fallback.
- Automatic thumbnails use `blob:` for generated images and `data:` for media-type icons in `img-src`. The panorama and model texture decoders also use Blob images. Video thumbnail generation uses `blob:` in `media-src`. The carousel also uses `data:` image masks for its navigation arrows.
- YouTube playback uses `frame-src https://www.youtube.com https://www.youtube-nocookie.com`. For YouTube thumbnails, allow `https://i.ytimg.com` in `connect-src` for the fetch and in `img-src` for the direct-image fallback.
- Allow the origins that serve the package and its lazy-loaded chunks in `script-src`, fetched media in `connect-src`, and directly loaded images and video in `img-src` and `media-src` respectively. Use the actual source scheme for any `blob:` or `data:` media you supply.
- The components insert inline `<style>` blocks in their shadow roots. Permit those blocks in `style-src-elem` (or `style-src` if it governs style elements), for example by allowing hashes that match the bundled style text.
- Quyuan uses Nunjucks to compile template strings in the browser. Browser-side template rendering requires `'unsafe-eval'` in `script-src`, including with the `@c4h/quyuan/template` entry point. This applies when you use the template engine.

## Styling

```css
qy-swiper {
  --cc-slider-theme-color: #007aff;
  --cc-slider-navigation-color: #007aff;
}

qy-viewer {
  --qy-viewer-z-index: 1000;
}
```

## Integration with Map Libraries

The `Quyuan.templateExtractor` result can be used with any map library.
Below are examples for Leaflet, OpenLayers, and MapLibre GL.

### Leaflet

```javascript
import L from 'leaflet';

const map = L.map('map').setView([35.6, 139.7], 13);

result.features.forEach(feature => {
  if (feature.geometry) {
    L.marker(feature.geometry.coordinates.slice().reverse(), {
      icon: L.icon({
        iconUrl: feature.result.icon,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
      })
    })
    .bindPopup(feature.result.html)
    .addTo(map);
  }
});
```

### OpenLayers

```javascript
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { Style, Icon } from 'ol/style';
import { fromLonLat } from 'ol/proj';
import Overlay from 'ol/Overlay';

result.features.forEach(feature => {
  if (feature.geometry) {
    const point = new Feature({
      geometry: new Point(fromLonLat(feature.geometry.coordinates))
    });

    point.setStyle(new Style({
      image: new Icon({
        src: feature.result.icon,
        scale: 0.5
      })
    }));

    vectorSource.addFeature(point);

    // Popup configuration
    point.set('popupContent', feature.result.html);
  }
});
```

### MapLibre GL

```javascript
import maplibregl from 'maplibre-gl';

const map = new maplibregl.Map({
  container: 'map',
  style: 'https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json',
  center: [139.7, 35.6],
  zoom: 13
});

result.features.forEach(feature => {
  if (feature.geometry) {
    const popup = new maplibregl.Popup()
      .setHTML(feature.result.html);

    const el = document.createElement('div');
    el.style.backgroundImage = `url(${feature.result.icon})`;
    el.style.width = '32px';
    el.style.height = '32px';
    el.style.backgroundSize = 'contain';
    el.style.cursor = 'pointer';

    new maplibregl.Marker(el)
      .setLngLat(feature.geometry.coordinates)
      .setPopup(popup)
      .addTo(map);
  }
});
```

## See also

- [API index](README.md) — install / quick start / ecosystem
- [Main README](../../README.md) — install / quick start / ecosystem

<!-- SECTION 1: Header (badges, title) -->
<h1 align="center">Quyuan</h1>

<p align="center">
  <a href="https://github.com/code4history/Quyuan/actions/workflows/ci.yml"><img src="https://github.com/code4history/Quyuan/actions/workflows/ci.yml/badge.svg" alt="CI" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/npm/l/@c4h/quyuan" alt="License" /></a>
</p>

<!-- SECTION 2: Elevator Pitch -->
## About Quyuan

Quyuan is a GeoJSON template engine with an integrated multimedia viewer.
It processes GeoJSON features through Nunjucks templates to generate marker
icons and popup HTML, and provides Web Components (`qy-swiper` /
`qy-swiper-slide` / `qy-viewer`) for displaying images, panoramas, YouTube and
MP4 videos, 3D models, and Gaussian splats inside popups.
The project is named after
[Qu Yuan (屈原)](https://en.wikipedia.org/wiki/Qu_Yuan), a Chinese poet and
politician from the 4th century BC.

Quyuan is open-source under the MIT License.

<!-- SECTION 3: Language switch link -->
**[Read this document in Japanese / 日本語で読む](README.ja.md)**

<!-- SECTION 4: Key Features -->
## Key Features

- GeoJSON template engine using Nunjucks syntax (per-feature processing)
- Multiple template keys (marker icons, popup HTML, etc.) with results stored in each feature
- Web Components-based multimedia viewer (`qy-swiper` / `qy-swiper-slide` / `qy-viewer`)
- Supported media: images, 360-degree panoramas, YouTube videos, MP4 videos, 3D models (OBJ/MTL), Gaussian Splatting
- Chuci's self-contained carousel and unified viewer, with automatic thumbnails cached in IndexedDB
- Works with Leaflet, OpenLayers, and MapLibre GL (integration examples in `docs/api/`)

## Security

Templates are compiled to code by Nunjucks and run with access to the data you pass in. **Quyuan is not a sandbox.** Nunjucks is not a sandbox either: the checks Quyuan applies while a template renders close the known routes to arbitrary JavaScript, but they do not make a template from an untrusted author safe to evaluate. Use templates only from authors you trust, and never build templates from end-user input.

<!-- SECTION 5: Quick Start -->
## Quick Start

<!-- release-pinned:start -->
> **Current release: `1.1.1`**. This block is the only place in
> this repository that carries a release version; everything outside it is
> written against the 1.0 release.
> npm: [`@c4h/quyuan`](https://www.npmjs.com/package/@c4h/quyuan)
> [![npm](https://img.shields.io/npm/v/@c4h/quyuan)](https://www.npmjs.com/package/@c4h/quyuan)

### Install

```bash
# pnpm (recommended)
pnpm add @c4h/quyuan

# npm
npm install @c4h/quyuan
```

### Minimal usage

```javascript
import { Quyuan } from '@c4h/quyuan';

const geojson = {
  type: "FeatureCollection",
  features: [{
    type: "Feature",
    properties: {
      name: "Sample Location",
      type: "cultural",
      images: [
        { path: "image1.jpg", type: "image", description: "Sample image" },
        { path: "pano1.jpg", type: "panorama", description: "360-degree image" }
      ]
    },
    geometry: { type: "Point", coordinates: [139.7, 35.6] }
  }]
};

const templates = {
  icon: "{% if type == 'cultural' %}cultural.png{% else %}default.png{% endif %}",
  html: `
    <div class="popup-content">
      <h3>{{ name }}</h3>
      <qy-swiper style="height:200px;">
        {% for image in images %}
          <qy-swiper-slide
            image-url="{{ image.path }}"
            image-type="{{ image.type }}"
            caption="{{ image.description }}">
          </qy-swiper-slide>
        {% endfor %}
      </qy-swiper>
    </div>
  `
};

const result = Quyuan.templateExtractor({ geojson, templates });
// Processing results are stored in each feature's result object
```

### Template-only usage (no UI components)

If you only need the GeoJSON template engine and do not use the Web Components
(`qy-swiper` / `qy-viewer`), import the template-only entry point:

```javascript
import { Quyuan } from '@c4h/quyuan/template';

// No UI components are registered; @c4h/chuci is not required.
const result = Quyuan.templateExtractor({ geojson, templates });
```

The template entry does not import `@c4h/chuci`. Use it when you want to avoid
pulling in the multimedia viewer dependencies.

> **UI usage (root import) and the optional peer dependency**: the root entry
> (`@c4h/quyuan`) registers the Web Components and bundles `@c4h/chuci`.
> `@c4h/chuci` is declared as an optional peer dependency. pnpm installs optional
> peers automatically, but npm does not — if you use the UI components with npm,
> add `@c4h/chuci` explicitly:
>
> ```bash
> npm install @c4h/chuci
> ```

### CDN (jsDelivr)

```html
<script src="https://cdn.jsdelivr.net/npm/@c4h/quyuan@1.1.1/dist/quyuan.umd.js"></script>
```

### API reference

- **API signatures** (release-dependent): see [`docs/api/`](docs/api/)

### Development

#### Setup
Clone the repository and install dependencies.

```bash
git clone https://github.com/code4history/Quyuan.git
cd Quyuan
pnpm install
```

#### Development Server

```bash
pnpm run dev
```

Demo: <https://code4history.dev/Quyuan/>

#### Build

```bash
pnpm run build
```

#### Test

```bash
pnpm test           # Run tests
pnpm run test:e2e   # Run E2E tests
```
<!-- release-pinned:end -->

<!-- SECTION 6: Prerequisites -->
## Prerequisites

> Runtime requirements (release-dependent).

- Development: Node.js and pnpm.
- All components: a browser with Web Components support (Custom Elements and Shadow DOM).
- Panorama, 3D model, and Gaussian viewing/thumbnails: WebGL 2.
- Image and video thumbnail generation: `OffscreenCanvas`; image generation also uses `createImageBitmap`.
- YouTube thumbnail retrieval: `fetch`; neither `OffscreenCanvas` nor WebGL is required.
- Persistent thumbnail caching: IndexedDB. If unavailable, browsing and in-memory thumbnails still work.

<!-- SECTION 7: Peer Dependencies -->
## Content Security Policy

If the host page sets a CSP, add the source expressions needed by the features you use.

- Gaussian (Spark) uses `'wasm-unsafe-eval'` in `script-src` and `blob:` in `worker-src`. If creating the Blob worker throws, Spark tries a `data:` worker. Allow `data:` in `worker-src` only if you need that fallback.
- Automatic thumbnails use `blob:` for generated images and `data:` for media-type icons in `img-src`. The panorama and model texture decoders also use Blob images. Video thumbnail generation uses `blob:` in `media-src`. The carousel also uses `data:` image masks for its navigation arrows.
- YouTube playback uses `frame-src https://www.youtube.com https://www.youtube-nocookie.com`. For YouTube thumbnails, allow `https://i.ytimg.com` in `connect-src` for the fetch and in `img-src` for the direct-image fallback.
- Allow the origins that serve the package and its lazy-loaded chunks in `script-src`, fetched media in `connect-src`, and directly loaded images and video in `img-src` and `media-src` respectively. Use the actual source scheme for any `blob:` or `data:` media you supply.
- The components insert inline `<style>` blocks in their shadow roots. Permit those blocks in `style-src-elem` (or `style-src` if it governs style elements), for example by allowing hashes that match the bundled style text.
- Quyuan uses Nunjucks to compile template strings in the browser. Browser-side template rendering requires `'unsafe-eval'` in `script-src`, including with the `@c4h/quyuan/template` entry point. This applies when you use the template engine.

## Multimedia dependency

The UI entry uses `@c4h/chuci` `^2.0.0` as an optional peer dependency and
bundles it in the distributed UI build. Chuci's carousel and viewers do not use
Swiper.js, viewer.js, gsplat, or A-Frame; they bundle three.js. The ESM build
loads a separate Spark chunk on demand for Gaussian splats, so keep all `dist/`
files together. The UMD/CDN build contains Spark. The template-only entry does
not require Chuci. To use the UI component types (`QyViewer`, `QySwiper`, or the
`qy-*` entries in `HTMLElementTagNameMap`), install `@c4h/chuci` as well;
`QySwiper` inherits Chuci's component types.

<!-- SECTION 8: Ecosystem / Related Repositories -->
## Ecosystem

Quyuan is part of the Maplat ecosystem by [Code for History](https://github.com/code4history).
See the full ecosystem map (8 repositories + product/corporate sites):

📖 **Ecosystem Map** — *(the diagram is currently kept in a private planning
repository; the Sister repositories table below is the public substitute)*

### Sister repositories

| Repository | License | npm | Role |
|---|---|---|---|
| [Maplat](https://github.com/code4history/Maplat) | Apache 2.0 | `@maplat/ui` | Main viewer |
| [MaplatCore](https://github.com/code4history/MaplatCore) | Apache 2.0 | `@maplat/core` | Core library |
| [MaplatTin](https://github.com/code4history/MaplatTin) | Apache 2.0 | `@maplat/tin` | TIN conversion |
| [MaplatTransform](https://github.com/code4history/MaplatTransform) | Apache 2.0 | `@maplat/transform` | Coordinate transform |
| [MaplatEditor](https://github.com/code4history/MaplatEditor) | Apache 2.0 | — | Data authoring tool (desktop) |
| [Chuci](https://github.com/code4history/Chuci) | MIT | `@c4h/chuci` | Multimedia swiper & viewer Web Components |
| [Quyuan](https://github.com/code4history/Quyuan) | MIT | `@c4h/quyuan` | GeoJSON template engine + multimedia viewer Web Components |
| [Weiwudi](https://github.com/code4history/Weiwudi) | MIT | `@c4h/weiwudi` | Service Worker for tile cache |

> MaplatEditor is the data authoring tool used to create the maps and POIs
> that the viewers above render. The Maplat ecosystem is end-to-end:
> author with MaplatEditor, serve with any of the viewer libraries.

<!-- SECTION 9: Nayuta links -->
<!-- MIT-licensed repositories (Weiwudi / Quyuan / Chuci) carry no Nayuta link. -->

<!-- SECTION 10: License -->
## License

MIT License — see [LICENSE](LICENSE).

```
Copyright (c) 2021-2026 Code for History

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

<!-- SECTION 11: Contributors / Sponsors (optional) -->
## Contributors

- Kohei Otsuka ([@kochizufan](https://github.com/kochizufan))
- Code for History

## Contributing

- Report bugs or request features in [Issues](https://github.com/code4history/Quyuan/issues)
- Pull requests are welcome
- Questions and discussions in [Discussions](https://github.com/code4history/Quyuan/discussions)

### How to Contribute

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Create a Pull Request

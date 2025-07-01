# Quyuan (屈原)

GeoJSON template engine with integrated multimedia viewer

English | [日本語](README.ja.md)

The project is named after [Qu Yuan (屈原)](https://en.wikipedia.org/wiki/Qu_Yuan), a Chinese poet and politician from the 4th century BC.

## Purpose

A template library that generates markers for GeoJSON and HTML to display in popups when clicked, based on attributes in the GeoJSON properties.

It also provides a slider viewer for displaying multimedia content (images, panoramas, videos) within popups as a common use case.

## Features

### Template Engine Functionality
- Template syntax using [Nunjucks](https://mozilla.github.io/nunjucks/)
- Template processing for each GeoJSON feature with properties as root
- Multiple template key definitions (marker icons, popup HTML, etc.)
- Processing results stored in each feature's result object

### Multimedia Viewer Functionality
- Web Components-based viewer implementation
- Thumbnail display with swiper and integration with various viewers
- Supported formats:
  - Images
  - 360-degree panoramic images
  - YouTube videos
- Formats in development:
  - Textured 3D polygon models
  - 3D Gaussian Splatting

## Installation

```bash
npm install @c4h/quyuan
```

or

```bash
pnpm add @c4h/quyuan
```

## Usage

### Demo

- https://code4history.dev/Quyuan/

### Basic Template Processing

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
    geometry: {
      type: "Point",
      coordinates: [139.7, 35.6]
    }
  }]
};

const templates = {
  // Template for icon selection
  icon: "{% if type == 'cultural' %}cultural.png{% else %}default.png{% endif %}",
  
  // Template for popup HTML generation
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

### Integration with Map Libraries

#### Leaflet

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

#### OpenLayers

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

#### MapLibre GL

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

## Web Components

Quyuan provides the following Web Components:

### `<qy-swiper>`
Component for displaying multimedia content in a slider

Attributes:
- `style`: CSS style (height specification recommended)

### `<qy-swiper-slide>`
Component defining each slide within the slider

Attributes:
- `image-url`: Image/video URL
- `image-type`: Media type ("image", "panorama", "youtube")
- `caption`: Caption string
- `thumbnail-url`: Thumbnail image URL (uses image-url if omitted)

### `<qy-viewer>`
Fullscreen viewer component (automatically called from qy-swiper)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

Works on modern browsers that support Web Components.

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build
pnpm run build

# Run tests
pnpm test

# Run E2E tests
pnpm run test:e2e
```

## License

MIT License

Copyright (c) 2024 Code for History

## Developers

- Kohei Otsuka ([@kochizufan](https://github.com/kochizufan))
- Code for History

## Contributing

We welcome your contributions!

- Report bugs or request features in [Issues](https://github.com/code4history/Quyuan/issues)
- Pull requests are welcome
- Questions and discussions in [Discussions](https://github.com/code4history/Quyuan/discussions)

### How to Contribute

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Create a Pull Request

## Related Projects

- [Chuci (楚辞)](https://github.com/code4history/Chuci) - Multimedia viewer components separated from Quyuan
- [Maplat](https://github.com/code4history/Maplat) - Historical map platform
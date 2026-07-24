# Quyuan API Reference

Web Components provided by `@c4h/quyuan` and integration examples with map libraries.

## Web Components

Quyuan provides the following Web Components:

### `<qy-swiper>`

Component for displaying multimedia content in a slider.

Attributes:
- `style`: CSS style (height specification recommended)

### `<qy-swiper-slide>`

Component defining each slide within the slider.

Attributes:
- `image-url`: Image/video URL
- `image-type`: Media type ("image", "panorama", "youtube")
- `caption`: Caption string
- `thumbnail-url`: Thumbnail image URL (uses image-url if omitted)

### `<qy-viewer>`

Fullscreen viewer component (automatically called from qy-swiper).

---

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

---

## See also

- [API index](README.md) — install / quick start / ecosystem
- [Main README](../README.md) — install / quick start / ecosystem

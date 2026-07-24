# Quyuan API リファレンス

`@c4h/quyuan` が提供する Web Components と、マップライブラリとの統合例。

## Web Components

Quyuan は以下の Web Components を提供しています:

### `<qy-swiper>`

マルチメディアコンテンツのスライダー表示を行うコンポーネント。

属性:
- `style`: CSS スタイル（高さ指定推奨）

### `<qy-swiper-slide>`

スライダー内の各スライドを定義するコンポーネント。

属性:
- `image-url`: 画像/動画の URL
- `image-type`: メディアタイプ（"image", "panorama", "youtube"）
- `caption`: キャプション文字列
- `thumbnail-url`: サムネイル画像 URL（省略時は image-url を使用）

### `<qy-viewer>`

フルスクリーンビューアコンポーネント（qy-swiper から自動的に呼び出される）。

---

## 地図ライブラリとの統合

`Quyuan.templateExtractor` の結果は任意のマップライブラリで使用できます。
以下に Leaflet・OpenLayers・MapLibre GL の例を示します。

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

    // ポップアップの設定
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

## 関連

- [API インデックス](README.ja.md) — インストール / クイックスタート / エコシステム
- [メイン README](../README.ja.md) — インストール / クイックスタート / エコシステム

# Quyuan (屈原)

GeoJSONテンプレートエンジンと統合マルチメディアビューアー

プロジェクト名は、紀元前4世紀の中国の詩人・政治家である[屈原 (Quyuan)](https://zh.wikipedia.org/wiki/%E5%B1%88%E5%8E%9F)から名付けられています。

## 目的

GeoJSONのマーカー、そしてそれをクリックした際のポップアップ内に表示するHTMLなどを、GeoJSONのproperties中の属性から生成するテンプレートライブラリです。

またポップアップ内でのマルチメディアコンテンツ（画像、パノラマ、動画）の表示を行うスライダービューアも、よくあるユースケースとして提供しています。

## 特徴

### テンプレートエンジン機能
- [Nunjucks](https://mozilla.github.io/nunjucks/)文法によるテンプレート記述
- GeoJSONのfeatureごとにpropertiesをルートとしてテンプレート処理
- 複数キーでのテンプレート定義（マーカーアイコン、ポップアップHTML等）
- 処理結果は各featureのresultオブジェクトに格納

### マルチメディアビューア機能
- Web Componentsベースのビューア実装
- スワイパーによるサムネイル表示と各種ビューアの連携
- 対応フォーマット：
  - 画像
  - 360度全球画像
  - YouTube動画
- 開発中の対応フォーマット：
  - テクスチャ付き3Dポリゴンモデル
  - 3Dガウシアンスプラッティング

## インストール

```bash
npm install quyuan
```

## 使用方法

### デモ

- https://code4history.dev/Quyuan/

### テンプレート処理の基本

```
import Quyuan from 'quyuan';

const geojson = {
  features: [{
    properties: {
      type: "cultural",
      images: [
        { path: "image1.jpg", type: "image" },
        { path: "pano1.jpg", type: "panorama" }
      ]
    }
  }]
};

const templates = {
  // アイコン選択用テンプレート
  icon: "{% if type == 'cultural' %}cultural.png{% else %}default.png{% endif %}",
  
  // ポップアップHTML生成用テンプレート
  html: `
    <qy-swiper style="height:200px;">
      {% for image in images %}
        <qy-swiper-slide 
          imageUrl="{{ image.path }}"
          imageType="{{ image.type }}">
        </qy-swiper-slide>
      {% endfor %}
    </qy-swiper>
  `
};

const result = Quyuan.templateExtractor({ geojson, templates });
```

### 地図ライブラリとの統合

#### Leaflet

```
import L from 'leaflet';

data.features.forEach(feature => {
  L.marker(feature.geometry.coordinates.reverse(), {
    icon: L.icon({
      iconUrl: feature.result.icon,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    })
  })
  .bindPopup(feature.result.html)
  .addTo(map);
});
```

#### OpenLayers

```
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { Style, Icon } from 'ol/style';

data.features.forEach(feature => {
  const point = new Feature({
    geometry: new Point(fromLonLat(feature.geometry.coordinates))
  });

  point.setStyle(new Style({
    image: new Icon({
      src: feature.result.icon,
      scale: 0.5
    })
  }));

  const element = createPopupContent(feature.result.html);
  const overlay = new Overlay({
    element: element,
    positioning: 'bottom-center',
    offset: [0, -20]
  });

  map.addOverlay(overlay);
});
```

#### MapLibre GL

※divを用いたマーカーの作り方の例を示しています。マーカー画像を使った方法はデモで提供しています。
```
import maplibregl from 'maplibre-gl';

data.features.forEach(feature => {
  const popup = new maplibregl.Popup()
    .setHTML(feature.result.html);

  const el = document.createElement('div');
  el.style.backgroundImage = `url(${feature.result.icon})`;
  el.style.width = '32px';
  el.style.height = '32px';
  el.style.backgroundSize = 'contain';

  new maplibregl.Marker(el)
    .setLngLat(feature.geometry.coordinates)
    .setPopup(popup)
    .addTo(map);
});
```

## ライセンス
MIT License

Copyright (c) 2024 Code for History

## 開発者

- Kohei Otsuka
- Code for History

あなたの貢献をお待ちしています！イシューやプルリクエストは大歓迎です。
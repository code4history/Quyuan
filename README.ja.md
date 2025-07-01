# Quyuan (屈原)

GeoJSONテンプレートエンジンと統合マルチメディアビューアー

[English](README.md) | 日本語

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
npm install @c4h/quyuan
```

または

```bash
pnpm add @c4h/quyuan
```

## 使用方法

### デモ

- https://code4history.dev/Quyuan/

### テンプレート処理の基本

```javascript
import { Quyuan } from '@c4h/quyuan';

const geojson = {
  type: "FeatureCollection",
  features: [{
    type: "Feature",
    properties: {
      name: "サンプル地点",
      type: "cultural",
      images: [
        { path: "image1.jpg", type: "image", description: "サンプル画像" },
        { path: "pano1.jpg", type: "panorama", description: "360度画像" }
      ]
    },
    geometry: {
      type: "Point",
      coordinates: [139.7, 35.6]
    }
  }]
};

const templates = {
  // アイコン選択用テンプレート
  icon: "{% if type == 'cultural' %}cultural.png{% else %}default.png{% endif %}",
  
  // ポップアップHTML生成用テンプレート
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
// 各featureのresultオブジェクトに処理結果が格納されます
```

### 地図ライブラリとの統合

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

    // ポップアップの設定
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

Quyuanは以下のWeb Componentsを提供しています：

### `<qy-swiper>`
マルチメディアコンテンツのスライダー表示を行うコンポーネント

属性：
- `style`: CSSスタイル（高さ指定推奨）

### `<qy-swiper-slide>`
スライダー内の各スライドを定義するコンポーネント

属性：
- `image-url`: 画像/動画のURL
- `image-type`: メディアタイプ（"image", "panorama", "youtube"）
- `caption`: キャプション文字列
- `thumbnail-url`: サムネイル画像URL（省略時はimage-urlを使用）

### `<qy-viewer>`
フルスクリーンビューアーコンポーネント（qy-swiperから自動的に呼び出される）

## ブラウザサポート

- Chrome/Edge 最新版
- Firefox 最新版
- Safari 最新版

Web Componentsをサポートする現代的なブラウザで動作します。

## 開発

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm run dev

# ビルド
pnpm run build

# テストの実行
pnpm test

# E2Eテストの実行
pnpm run test:e2e
```

## ライセンス

MIT License

Copyright (c) 2024 Code for History

## 開発者

- Kohei Otsuka ([@kochizufan](https://github.com/kochizufan))
- Code for History

## 貢献

あなたの貢献をお待ちしています！

- バグ報告や機能リクエストは[Issues](https://github.com/code4history/Quyuan/issues)へ
- プルリクエストは大歓迎です
- 質問や議論は[Discussions](https://github.com/code4history/Quyuan/discussions)へ

### 開発に参加する

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 関連プロジェクト

- [Chuci (楚辞)](https://github.com/code4history/Chuci) - Quyuanから分離されたマルチメディアビューアコンポーネント
- [Maplat](https://github.com/code4history/Maplat) - 歴史地図プラットフォーム
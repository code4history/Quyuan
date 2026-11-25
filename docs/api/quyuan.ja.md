# Quyuan API リファレンス

`@c4h/quyuan` が提供する Web Components、Chuci 経由のサムネイル生成、
地図ライブラリとの統合例。

## エントリポイント

`@c4h/quyuan` は 2 つのエントリポイントを公開しています。

| エントリポイント | import | 備考 |
|---|---|---|
| `@c4h/quyuan` | `import { Quyuan } from '@c4h/quyuan'` | Web Components を登録し、`@c4h/chuci` を同梱します。 |
| `@c4h/quyuan/template` | `import { Quyuan } from '@c4h/quyuan/template'` | テンプレートエンジンのみ。`@c4h/chuci` を import せず、UI コンポーネントも登録しません。 |

`@c4h/chuci` `^2.0.0` は `@c4h/quyuan` の optional peer dependency です。
pnpm は optional peer を自動インストールしますが、npm は自動インストール
しません。npm で UI コンポーネントを使う場合は `@c4h/chuci` を明示的に
追加してください。

UI は Chuci 自身のカルーセルとビューアを使い、Swiper.js・viewer.js・gsplat・
A-Frame は使いません。three.js を同梱し、Gaussian の描画とサムネイルでは
Spark を必要時に読み込みます。

## Web Components

### `<qy-swiper>`

マルチメディアを表示するカルーセルです。CSS で高さを指定してください。
2 件以上でループし、1 件ずつスナップします。自動送りは 5 秒間隔で、
このカルーセルのビューアを開いている間は停止し、閉じるとビューアで最後に
選んだ項目から再開します。

**属性:**

- `has-thumb`: 点の列の代わりにサムネイルギャラリーを表示。
- `autoplay`: 自動送りを有効化。
- `style`: CSS スタイル（高さ指定推奨）。

**継承するプロパティ・メソッド:**

- `index`（number）: 現在の 0 始まりのスライド番号。
- `items`（`MediaItem[]`）・`slides`（`Element[]`）: 現在のメディア項目とスライド要素。
- `loop`（boolean）: 現在ループするかどうか。
- `goTo(index: number, opts?: { animate?: boolean })`: 指定したスライドへ移動。
- `openViewer(index: number): Promise<void>`: 0 始まりのスライド番号で `qy-viewer` を開く。
- `pauseAutoplay()`・`resumeAutoplay()`: 自動送りのタイマーを制御。

**イベント:**

- `cc-swiper-index-change`: スライド番号の変更後、または `goTo` の呼び出し後に発火。
  - `detail.index`: 現在の 0 始まりのスライド番号。

### `<qy-swiper-slide>`

1 件のスライドを定義します。既存のポップアップテンプレートの属性を保ち、
Chuci へ渡します。

| 属性 | 意味 |
|---|---|
| `image-url` | 元メディアの URL（必須）。 |
| `image-type` | `image`・`panorama`・`youtube`・`video`・`3dmodel`・`gaussian`（必須）。不明な値は `image` として扱う。 |
| `thumbnail-url` | 明示するサムネイル URL。保存済み・生成済みのサムネイルより優先。 |
| `caption` | カルーセルとビューアに表示するキャプション。 |
| `material-url` | `3dmodel` の MTL マテリアル URL。 |
| `camera-position` | `3dmodel`・`gaussian` の初期カメラ位置（`"x,y,z"`）。 |
| `camera-target` | `3dmodel`・`gaussian` の初期注視点（`"x,y,z"`）。 |
| `show-texture` | `"false"` で 3D モデルのテクスチャを隠し、それ以外では表示。ビューアを開いたときにも設定を反映。 |
| `fit-to-container` | 真偽属性。3D モデル全体を領域に収める。明示したカメラ位置・注視点を優先。 |
| `debug-mode` | 真偽属性。共通のデバッグ欄を表示。3D メディアでは視点・読み込み状態なども表示。 |

`fit-to-container` と `debug-mode` は、値が空でも属性が存在すれば有効です。
Gaussian のカメラ属性と 3D モデルのテクスチャ・自動フィット属性は、実際の
表示へ反映されます。

### `<qy-viewer>`

`qy-swiper` から自動で開く全画面ビューアです。Chuci の単一の `cc-viewer` を
包んでおり、メディア別のビューア要素は公開 API ではありません。

**互換のための属性・プロパティ:**

- `currentslideindex`・`currentSlideIndex`: 現在の 0 始まりの項目番号。
- `currenttype`・`currentType`: 現在のメディアタイプ。ビューアを閉じると属性を削除。

通常、アプリケーションはこれらの状態を設定するのではなく読み取ります。

**メソッド:**

- `open(items: MediaItem[], index: number, opts?: { loop?: boolean }): Promise<void>`: メディア一覧を 0 始まりの番号で開く。
- `close()`: ビューアを閉じる。

**内部ビューアからのイベント:**

- `cc-viewer-index-change`: ビューアが別の項目へ移ったときに発火。
  - `detail.index`: 現在の 0 始まりの項目番号。
- `cc-viewer-close`: ビューアを閉じたときに発火。

これらのイベントはバブルし、Shadow DOM の境界も越えます。左右矢印キーで
前後へ移動し、Escape で閉じます。スワイプによる前後移動はなく、ボタンと
キーボードを使います。

## カルーセルとビューアの操作

| 操作 | 2D 画像 | 3D モデル・Gaussian | 360° パノラマ |
|---|---|---|---|
| 1 本指ドラッグ・左ドラッグ | 移動 | 注視点の周りを回転 | 掴んで動かす向きに見回す |
| ホイール・ピンチ | カーソル・指の位置を中心に拡大縮小 | 寄る・引く | 視野角を変更 |
| 2 本指ドラッグ・右ドラッグ | 移動 | 画面に平行に移動 | 操作なし |
| ダブルクリック・ダブルタップ | 初期表示に戻る | 初期カメラに戻る | 初期の向きに戻る |

すべてのビューアで背景を黒とし、読み込み中・エラー表示を共通化しています。
閉じるボタンは右上、前後ボタンは左右にあり、`debug-mode` の欄は左上です。

## キャプションとインジケーターの規則

### カルーセル

- キャプションの帯はメディアに重ねず、下に場所を取ります。
- キャプションは 1 行で、はみ出した部分を省略記号にします。インジケーターは右側です。
- 2 件以上では、キャプションが空でも帯を表示します。1 件だけの場合は、キャプションがあるときだけ表示します。
- 2〜8 件は押せる点の列、8 件を超える場合は `n / N` を表示します。
- `has-thumb` の場合は、点の列・数字の代わりにサムネイルギャラリーを使います。

### ビューア

- キャプションは省略せずに折り返します。8 件を超える場合は点の列の代わりに `n / N` を使います。
- 開いたときと前後へ移ったときに帯を表示します。
- コンテンツに重ねる操作帯では、コンテンツへの操作で帯を隠します。操作がない場合も 3 秒後に隠します。ドラッグを伴わないタップまたはマウスの移動で再表示します。前後・閉じるボタンは薄くなりますが操作できます。
- 動画ビューアでは、帯がブラウザ標準の再生操作に重ならないよう場所を確保します。

## サムネイル生成 API

`thumbnail-url` がないスライドは Chuci の IndexedDB キャッシュ
（`chuci-thumbnails`）を使い、必要に応じて一時的に種類のアイコンを表示し、
不足分を裏で生成します。現在のスライドを優先し、1 件ずつ生成します。
失敗時はアイコンのままとし、失敗はページの寿命の間だけ記憶します。

作成ツールからは `@c4h/chuci` が公開する同じ API を直接呼べます。
Quyuan はこの API を再エクスポートしません。

```typescript
generateThumbnail(
  item: MediaItem,
  opts?: { maxSize?: number; signal?: AbortSignal }
): Promise<Blob>
```

`readMediaItem` は `cc-swiper-slide` と同じく `qy-swiper-slide` も受け付けます。
`maxSize` は長辺の上限で、既定は 256 ピクセルです。次の例の `storeBlob` は
作成ツールが用意する関数で、Blob を保存して画像の URL を返します。

```javascript
import { generateThumbnail, readMediaItem } from '@c4h/chuci';

async function createAndStoreThumbnail(slide, storeBlob) {
  const controller = new AbortController();
  const blob = await generateThumbnail(readMediaItem(slide), {
    maxSize: 256,
    signal: controller.signal
  });
  const storedUrl = await storeBlob(blob);
  slide.setAttribute('thumbnail-url', storedUrl);
}
```

- `image`・`video` は WebP、`panorama`・`3dmodel`・`gaussian` は PNG を出力します。`youtube` は公開サムネイルの Blob を返します。
- 動画は 0.5 秒の位置を使い、短い動画ではその直前の利用可能なコマを使います。
- Node だけの環境ではなくブラウザ用 API です。パノラマ・3D モデル・Gaussian は WebGL が必要です。
- 別サイトの画像・動画フレーム・テクスチャ・モデル・スプラット・YouTube の公開サムネイルなど、メディアのピクセルを fetch または canvas へ取り出す場合は配信元の CORS 許可が必要です。
- Gaussian の生成では Spark を必要時に読み込みます。

## スタイリング

```css
qy-swiper {
  --cc-slider-theme-color: #007aff;
  --cc-slider-navigation-color: #007aff;
}

qy-viewer {
  --qy-viewer-z-index: 1000;
}
```

## 地図ライブラリとの統合

`Quyuan.templateExtractor` の結果は任意の地図ライブラリで使用できます。
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

## 関連

- [API インデックス](README.ja.md) — インストール / クイックスタート / エコシステム
- [メイン README](../README.ja.md) — インストール / クイックスタート / エコシステム

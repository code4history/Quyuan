<!-- SECTION 1: Header (badges, title) -->
<h1 align="center">Quyuan</h1>

<p align="center">
  <a href="https://github.com/code4history/Quyuan/actions/workflows/ci.yml"><img src="https://github.com/code4history/Quyuan/actions/workflows/ci.yml/badge.svg" alt="CI" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/npm/l/@c4h/quyuan" alt="License" /></a>
</p>

<!-- SECTION 2: Elevator Pitch -->
## Quyuan について

Quyuan は GeoJSON テンプレートエンジンと統合マルチメディアビューアです。
GeoJSON の feature を Nunjucks テンプレートで処理し、マーカーアイコンとポップアップ HTML を生成します。また、画像・パノラマ・YouTube / MP4 動画・3D モデル・Gaussian スプラットをポップアップ内で表示する Web Components（`qy-swiper` / `qy-swiper-slide` / `qy-viewer`）を提供します。
プロジェクト名は、紀元前4世紀の中国の詩人・政治家である
[屈原 (Qu Yuan)](https://en.wikipedia.org/wiki/Qu_Yuan) に由来しています。

Quyuan は MIT License のオープンソースソフトウェアです。

<!-- SECTION 3: Language switch link -->
**[英語版はこちら / Read this document in English](README.md)**

<!-- SECTION 4: Key Features -->
## 主な特徴

- Nunjucks 文法による GeoJSON テンプレートエンジン（feature ごとに処理）
- 複数キーのテンプレート定義（マーカーアイコン・ポップアップ HTML 等）・結果は各 feature に格納
- Web Components ベースのマルチメディアビューア（`qy-swiper` / `qy-swiper-slide` / `qy-viewer`）
- 対応メディア: 画像・360度全球画像・YouTube 動画・MP4 動画・3D モデル（OBJ/MTL）・Gaussian Splatting
- Chuci による自前実装のカルーセルと統一ビューア、IndexedDB に保存する自動サムネイル
- Leaflet・OpenLayers・MapLibre GL と連携（統合例は `docs/api/` を参照）

## セキュリティ

テンプレートは Nunjucks がコードとしてコンパイルし、渡したデータにアクセスできます。**Quyuan はサンドボックスではありません。** Nunjucks もサンドボックスではなく、Quyuan が描画時に行う確認は任意の JavaScript に至る既知の経路を塞ぐものですが、信頼できない書き手のテンプレートを安全に評価できるようにするものではありません。テンプレートは信頼できる書き手のものだけを使い、利用者の入力からテンプレートを作らないでください。

<!-- SECTION 5: Quick Start -->
## クイックスタート

<!-- release-pinned:start -->
> **現在のリリース: `1.1.1`**。このブロックは本リポジトリで唯一
> リリース版数を持つ場所です。ブロックの外はすべて 1.0 正式版を前提に
> 書かれています。
> npm: [`@c4h/quyuan`](https://www.npmjs.com/package/@c4h/quyuan)
> [![npm](https://img.shields.io/npm/v/@c4h/quyuan)](https://www.npmjs.com/package/@c4h/quyuan)

### インストール

```bash
# pnpm（推奨）
pnpm add @c4h/quyuan

# npm
npm install @c4h/quyuan
```

### 最小利用例

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
// 各 feature の result オブジェクトに処理結果が格納されます
```

### テンプレートのみの利用（UI コンポーネントなし）

GeoJSON テンプレートエンジンだけを使い、Web Components（`qy-swiper` / `qy-viewer`）を
使わない場合は、テンプレート専用の入口を import してください。

```javascript
import { Quyuan } from '@c4h/quyuan/template';

// UI コンポーネントは登録されません。@c4h/chuci は不要です。
const result = Quyuan.templateExtractor({ geojson, templates });
```

テンプレート入口は `@c4h/chuci` を import しません。マルチメディアビューアの依存を
取り込みたくない場合に使用します。

> **UI を使う場合（root import）と optional peer dependency**: root 入口
> （`@c4h/quyuan`）は Web Components を登録し、`@c4h/chuci` を同梱します。
> `@c4h/chuci` は optional peer dependency として宣言されています。pnpm は
> optional peer を自動インストールしますが、npm は自動インストールしません。
> npm で UI コンポーネントを使う場合は `@c4h/chuci` を明示的に追加してください。
>
> ```bash
> npm install @c4h/chuci
> ```

### CDN（jsDelivr）

```html
<script src="https://cdn.jsdelivr.net/npm/@c4h/quyuan@1.1.1/dist/quyuan.umd.js"></script>
```

### API リファレンス

- **API シグネチャ**（リリース依存）: [`docs/api/`](docs/api/) を参照

### 開発

#### 準備
リポジトリをクローンし、依存関係をインストールします。

```bash
git clone https://github.com/code4history/Quyuan.git
cd Quyuan
pnpm install
```

#### 開発サーバー

```bash
pnpm run dev
```

デモ: <https://code4history.dev/Quyuan/>

#### ビルド

```bash
pnpm run build
```

#### テスト

```bash
pnpm test           # テストの実行
pnpm run test:e2e   # E2E テストの実行
```
<!-- release-pinned:end -->

<!-- SECTION 6: Prerequisites -->
## 動作環境

> ランタイム要件（特定リリースに紐づく）。

- 開発時: Node.js と pnpm。
- 全コンポーネント: Web Components（Custom Elements・Shadow DOM）をサポートするブラウザ。
- パノラマ・3D モデル・Gaussian の表示とサムネイル生成: WebGL 2。
- 画像・動画のサムネイル生成: `OffscreenCanvas`。画像では `createImageBitmap` も使用。
- YouTube のサムネイル取得: `fetch`。`OffscreenCanvas`・WebGL は不要。
- サムネイルの永続キャッシュ: IndexedDB。利用できない場合も、閲覧とメモリ内サムネイルは動作。

<!-- SECTION 7: Peer Dependencies -->
## Content Security Policy

ホストページに CSP を設定する場合は、使う機能に応じて次の許可を追加してください。

- Gaussian（Spark）には `script-src` の `'wasm-unsafe-eval'` と `worker-src` の `blob:` が必要です。Blob の Worker 作成時に例外が起きると、Spark は `data:` の Worker を試します。このフォールバックを使う場合は `worker-src` に `data:` も許可してください。
- サムネイルの自動生成では、`img-src` の `blob:` を生成した画像に、`data:` を種類のアイコンに使います。パノラマやモデルのテクスチャを読み込む際にも Blob 画像を使います。動画サムネイルの生成には `media-src` の `blob:` が必要です。 カルーセルの前後ボタンも `img-src` の `data:` を使います。
- YouTube の再生には `frame-src https://www.youtube.com https://www.youtube-nocookie.com` が必要です。YouTube の公開サムネイルを取得するため `connect-src` に、画像として直接表示するフォールバックのため `img-src` に `https://i.ytimg.com` を許可してください。
- パッケージと遅延読み込みチャンクの配信元は `script-src`、fetch するメディアの配信元は `connect-src` に許可してください。直接表示する画像・動画の配信元はそれぞれ `img-src`・`media-src` に許可してください。`blob:` や `data:` のメディアを指定する場合も、実際に使うスキームを許可してください。
- コンポーネントは Shadow DOM にインラインの `<style>` を挿入します。`style-src-elem`（指定しない場合は `style-src`）で、配布物中のスタイル本文に対応するハッシュを指定するなどして、このスタイルを許可してください。
- Quyuan はブラウザでテンプレート文字列をコンパイルする際に Nunjucks を使います。テンプレートエンジンをブラウザで使う場合は、`@c4h/quyuan/template` を含め、`script-src` に `'unsafe-eval'` が必要です。

## マルチメディア依存

UI 入口は `@c4h/chuci` `^2.0.0` を optional peer dependency とし、配布する UI
ビルドに同梱します。Chuci のカルーセルとビューアは Swiper.js・viewer.js・
gsplat・A-Frame を使わず、three.js を同梱します。ESM ビルドでは Gaussian
スプラット用の Spark を別チャンクとして必要時に読み込むため、`dist/` の全ファイルを
一緒に配置してください。UMD・CDN ビルドは Spark を内包しています。
テンプレート専用入口では Chuci は不要です。UI コンポーネントの型
（`QyViewer`・`QySwiper`・`HTMLElementTagNameMap` の `qy-*` エントリ）を使う場合は
`@c4h/chuci` もインストールしてください。`QySwiper` は Chuci のコンポーネント型を
継承しています。

<!-- SECTION 8: Ecosystem / Related Repositories -->
## エコシステム

Quyuan は [Code for History](https://github.com/code4history) が運営する
Maplat エコシステムの一部です。全容は下記エコシステム図を参照してください。

📖 **エコシステム図** — *（図は現在外部非公開の計画リポジトリにあります。
公開ビューアからは下記の姉妹リポジトリ表で代替します）*

### 姉妹リポジトリ

| リポジトリ | ライセンス | npm | 役割 |
|---|---|---|---|
| [Maplat](https://github.com/code4history/Maplat) | Apache 2.0 | `@maplat/ui` | メインビューア |
| [MaplatCore](https://github.com/code4history/MaplatCore) | Apache 2.0 | `@maplat/core` | コアライブラリ |
| [MaplatTin](https://github.com/code4history/MaplatTin) | Apache 2.0 | `@maplat/tin` | TIN 変換 |
| [MaplatTransform](https://github.com/code4history/MaplatTransform) | Apache 2.0 | `@maplat/transform` | 座標変換 |
| [MaplatEditor](https://github.com/code4history/MaplatEditor) | Apache 2.0 | — | データ作成ツール（デスクトップ） |
| [Chuci](https://github.com/code4history/Chuci) | MIT | `@c4h/chuci` | マルチメディアスワイパー/ビューア Web Components |
| [Quyuan](https://github.com/code4history/Quyuan) | MIT | `@c4h/quyuan` | GeoJSON テンプレートエンジン＋マルチメディアビューア Web Components |
| [Weiwudi](https://github.com/code4history/Weiwudi) | MIT | `@c4h/weiwudi` | タイルキャッシュ用 Service Worker |

> MaplatEditor は上記ビューアライブラリが描画する地図・POI を作成する
> データ作成ツールです。Maplat エコシステムはエンドツーエンド:
> MaplatEditor で作成し、いずれかのビューアライブラリで公開、という流れになります。

<!-- SECTION 9: Nayuta links -->
<!-- MIT ライセンスのリポジトリ（Weiwudi / Quyuan / Chuci）へは那由多社リンクを置きません。 -->

<!-- SECTION 10: License -->
## License

MIT License — 詳細は [LICENSE](LICENSE) を参照。

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

- バグ報告や機能リクエストは [Issues](https://github.com/code4history/Quyuan/issues) へ
- プルリクエストを歓迎します
- 質問や議論は [Discussions](https://github.com/code4history/Quyuan/discussions) へ

### 開発に参加する

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

<!-- SECTION 1: Header (badges, title) -->
<h1 align="center">Quyuan</h1>

<p align="center">
  <a href="https://github.com/code4history/Quyuan/actions/workflows/ci.yml"><img src="https://github.com/code4history/Quyuan/actions/workflows/ci.yml/badge.svg" alt="CI" /></a>
  <a href="https://www.npmjs.com/package/@c4h/quyuan"><img src="https://img.shields.io/npm/v/@c4h/quyuan" alt="npm version" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/npm/l/@c4h/quyuan" alt="License" /></a>
</p>

<!-- SECTION 2: Elevator Pitch -->
## Quyuan について

Quyuan は GeoJSON テンプレートエンジンと統合マルチメディアビューアです。
GeoJSON の feature を Nunjucks テンプレートで処理し、マーカーアイコンとポップアップ HTML を生成します。また、画像・パノラマ・動画をポップアップ内で表示する Web Components（`qy-swiper` / `qy-swiper-slide` / `qy-viewer`）を提供します。
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
- 対応メディア: 画像・360度全球画像・YouTube 動画・MP4 動画・3D モデル (MTL)・Gaussian Splatting
- Leaflet・OpenLayers・MapLibre GL と連携（統合例は `docs/api/` を参照）

<!-- SECTION 5: Quick Start -->
## クイックスタート

> 特定リリースに紐づく情報（ADR-0012）。下記のバージョン `1.0.0-rc1` は現在の
> リリース値です。リリースごとに更新してください。

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

### CDN（jsDelivr）

```html
<script src="https://cdn.jsdelivr.net/npm/@c4h/quyuan@1.0.0-rc1/dist/quyuan.umd.js"></script>
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

<!-- SECTION 6: Prerequisites -->
## 動作環境

> ランタイム要件（ADR-0012: 特定リリースに紐づく）。

- Node.js と pnpm（開発時）
- ブラウザ: Chrome / Edge / Firefox / Safari（最新版）・Web Components サポート必須

<!-- SECTION 7: Peer Dependencies -->
<!-- Quyuan には peer dependency はありません。本節は省略します。 -->

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
<!-- MIT ライセンスのリポジトリ（Weiwudi / Quyuan / Chuci）へは那由多社リンクを置きません（ADR-0012）。 -->

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

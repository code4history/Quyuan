# Changelog

このプロジェクトの主な変更を記録します。版数は [Semantic Versioning](https://semver.org/) に従います。

## [Unreleased]

### 日本語

#### 2.0 の破壊的変更
- `@c4h/chuci` の optional peer 依存を `^2.0.0` へ更新し、自前のカルーセルと統一ビューアへ追随した。`qy-viewer.open(url, type, attributes)` は `open(items, index, { loop })` に、`qy-swiper.openViewer(imageUrl, imageType, slideIndex)` は `openViewer(index)` に変更した。Chuci のメディア別 `cc-viewer-*` 要素・`setSwiper`・`setCurrentSlideIndex`・`cc-swiper.slider` はなくなり、`qy-swiper` のスライド変更イベントは `slidechange` ではなく `cc-swiper-index-change`（`detail.index`）を使う。`qy-swiper`・`qy-swiper-slide`・`qy-viewer` のタグ、スライド属性、`currenttype`・`currentslideindex`、CSS 変数は維持する。
- カルーセルと画像・360 度ビューアを Chuci の実装へ替え、Gaussian の描画を Spark へ移した。Swiper・viewer.js・gsplat・A-Frame を使わず、three.js を同梱し、Spark は必要時に読み込む。

#### 2.0 の追加
- `thumbnail-url` がない `qy-swiper-slide` で、Chuci の IndexedDB キャッシュと自動サムネイル生成を使うようにした。作成ツールは `@c4h/chuci` の `generateThumbnail` と `readMediaItem` を `qy-swiper-slide` にも使える。

#### 2.0 の修正
- 旧 Chuci が先に登録されたページでも `qy-swiper` からビューアを開けるようにした。DOM から外したスライダーでは監視と自動送りを解除する。
- Chuci 2.0 へ追随し、Gaussian の `camera-position`・`camera-target`、3D メッシュの `show-texture`・`fit-to-container` が実際の表示へ反映されない問題を修正。
- 1.1.1 の「既知の問題」にあった、Chuci の `realIndex` のずれによる閉じた後の画像のずれを解消。2.0 では Swiper を外したため、不具合の対象だった仕組み自体がなくなる。

### English

#### 2.0 breaking changes
- Updated the optional `@c4h/chuci` peer dependency to `^2.0.0` and adopted its own carousel and unified viewer. Replaced `qy-viewer.open(url, type, attributes)` with `open(items, index, { loop })`, and `qy-swiper.openViewer(imageUrl, imageType, slideIndex)` with `openViewer(index)`. Chuci's media-specific `cc-viewer-*` elements, `setSwiper`, `setCurrentSlideIndex`, and `cc-swiper.slider` are gone. `qy-swiper` now emits `cc-swiper-index-change` (`detail.index`) rather than `slidechange`. The `qy-swiper`, `qy-swiper-slide`, and `qy-viewer` tags, slide attributes, `currenttype` and `currentslideindex`, and CSS variables remain compatible.
- Replaced the carousel and image/panorama viewers with Chuci's implementations and moved Gaussian rendering to Spark. Removed Swiper, viewer.js, gsplat, and A-Frame; three.js is bundled and Spark loads on demand.

#### 2.0 added
- Added Chuci's IndexedDB cache and automatic thumbnail generation to `qy-swiper-slide` elements without `thumbnail-url`. Authoring tools can use `@c4h/chuci`'s `generateThumbnail` and `readMediaItem` with `qy-swiper-slide` too.

#### 2.0 fixed
- The Quyuan viewer opens from `qy-swiper` even when an older Chuci bundle registered its elements first. Removing a carousel now stops its observers and autoplay.
- Followed Chuci 2.0 to apply Gaussian `camera-position` and `camera-target`, and 3D model `show-texture` and `fit-to-container`, to the rendered view.
- Resolved the Chuci `realIndex` drift listed under "Known issues" in 1.1.1, which could show a different image after closing the viewer. In 2.0, removing Swiper removes the mechanism that contained the bug.

## [1.1.1] - 2026-11-02

1.1.1-rc.1 と同じ内容の正式版です（版番号と、内部依存の指定を RC から正式版（^1.0.2）へ戻したことだけが違います）。変更点は 1.1.1-rc.1 までの各項を参照してください。

### 既知の問題
- `@c4h/chuci` の既知の問題の影響を受けます。`cc-swiper` を「前へ」で 1 回戻したあと `cc-viewer` で画像を送ると、閉じたときに別の画像が表示されます。Chuci の修正は次の月次リリースで入ります。

## [1.1.1-rc.1] - 2026-10-26

### Changed
- 同梱する `@c4h/chuci` を Chuci の RC へ追随（Chuci の是正が Quyuan の利用者に届く）。コードは変えません。

### Documentation
- README に「セキュリティ」の節を足した。テンプレートはコードとして実行され、Quyuan も Nunjucks もサンドボックスではないため、信頼できる書き手のテンプレートだけを使うことを明記した

### Fixed
- `qy-swiper`・`qy-viewer` が本番でデバッグ用のログ（`console.log`）を出していたのをやめた（スライダーとビューアを開くたびにコンソールへ出ていた）。描画の時点でスライドが 0 枚のときに出ていた警告も、正常な流れでも出るため外した
- npm パッケージに試験のソースと試験の型定義（`*.test.ts`・`*.test.d.ts`）が入っていたのを外した

### Security
- テンプレートの評価で、`constructor`・`__proto__` などのプロパティや、`valueOf` のように `Object.prototype` から継承した名前の filter・test を辿って任意の JavaScript を実行できた、既知の経路を塞いだ。テンプレートを描画している間だけ、`constructor`・`__proto__`・`prototype`・`call`・`apply`・`bind` などの名前の読み出しは空（undefined）になり、`Function`・`Object`・`Reflect` の値は読み出しも呼び出しもできず、filter・test・global は Nunjucks に登録されたものだけを引く。最上位の名前は、テンプレートで設定したもの・データの属性・Nunjucks の global だけを引き、`{% set __proto__ = … %}` のようにそれらの名前へ代入するテンプレートは評価しない。それらを使うテンプレートは評価の誤りになる。同じプロセスで Nunjucks を直接使う他の利用者には影響しない。これで経路がすべて塞がったとは言えない。Nunjucks はサンドボックスではないため、信頼できない人が書いたテンプレートを評価しない前提は変わらない
- テンプレートの名前（変数・filter・test・`set` の対象など）がエスケープされずに Nunjucks の生成する JavaScript へ入り、`{{ 1 is "…" }}` や `{% set "…" = 1 %}` のように名前の位置へ文字列を置くと任意の JavaScript を実行できた経路を塞いだ。名前に使える文字を、英数字・`_`・`$` と ASCII 以外の文字・結合文字・数字・記号（`名称`・`緯度・経度`・`面積（㎡）` など）に限り、それ以外の ASCII 記号・空白・制御文字を含む名前や、代入先が単純な名前でないテンプレート（`{% set x.y = 1 %}` など）は描画の前に評価の誤りにする。呼び出すメンバーの文字列キーでは、バックスラッシュと改行を断る。`a["住所 詳細"]` のような文字列キーの参照はこれまでどおり使える

## [1.1.0] - 2026-10-05

1.1.0-rc.2 と同じ内容の正式版です。版番号と、依存 `@c4h/chuci` の指定を RC から正式版（`^1.0.1`）へ戻したことだけが違います。変更点は 1.1.0-rc.2 までの各項を参照してください。

## [1.1.0-rc.2] - 2026-10-01

### Fixed
- `qy-swiper` のサムネイル付き表示で、サムネイルをクリックするたびに `TypeError: Cannot read properties of undefined (reading 'swiper')` が出る不具合を修正（継承元の `@c4h/chuci` 1.0.1-rc.2 へ追随。code4history/Chuci#5）
- デモ `test-media.html` で `qy-swiper` のサムネイルが有効になっていなかった（属性名を `hasThumb` と書いていた。正しくは `has-thumb`）不具合を修正

## [1.1.0-rc.1] - 2026-09-28

### Added
- `@c4h/chuci` に依存しない `@c4h/quyuan/template` エントリを追加

### Changed
- `@c4h/chuci` を任意の peer 依存（optional peer）へ移し、1.0.1-rc.1 へ追随。既存エントリの UI 自動登録は維持
- 依存関係を更新

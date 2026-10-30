# Changelog

このプロジェクトの主な変更を記録します。版数は [Semantic Versioning](https://semver.org/) に従います。

## [Unreleased]

### Changed
- 同梱する `@c4h/chuci` を Chuci の RC へ追随（Chuci の是正が Quyuan の利用者に届く）。コードは変えません。

### Fixed
- `qy-swiper`・`qy-viewer` が本番でデバッグ用のログ（`console.log`）を出していたのをやめた（スライダーとビューアを開くたびにコンソールへ出ていた）。描画の時点でスライドが 0 枚のときに出ていた警告も、正常な流れでも出るため外した

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

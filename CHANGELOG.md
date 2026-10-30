# Changelog

このプロジェクトの主な変更を記録します。版数は [Semantic Versioning](https://semver.org/) に従います。

## [Unreleased]

### Changed
- 同梱する `@c4h/chuci` を Chuci の RC へ追随（Chuci の是正が Quyuan の利用者に届く）。コードは変えません。

### Fixed
- `qy-swiper`・`qy-viewer` が本番でデバッグ用のログ（`console.log`）を出していたのをやめた（スライダーとビューアを開くたびにコンソールへ出ていた）。描画の時点でスライドが 0 枚のときに出ていた警告も、正常な流れでも出るため外した

### Security
- テンプレートの評価で `constructor`・`__proto__` などのプロパティを辿って任意の JavaScript を実行できた経路を断った。この制限はテンプレートを描画している間だけ効き、同じプロセスで Nunjucks を直接使う他の利用者には影響しない。テンプレートの中では `constructor`・`__proto__`・`prototype`・`call`・`apply`・`bind` などの名前の読み出しが空（undefined）になり、それを呼び出すテンプレートは評価の誤りになる。Nunjucks 自体はサンドボックスではないため、信頼できない人が書いたテンプレートを評価しない前提は変わらない

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

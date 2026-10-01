# Changelog

このプロジェクトの主な変更を記録します。版数は [Semantic Versioning](https://semver.org/) に従います。

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

# Quyuan openspec 時代の開発履歴索引

> 本ファイルは openspec ワークフロー（〜2026年）時代に作成された開発提案・記録を、那由多開発サイクル形式の履歴として集約した索引です。
> 原文は `docs/history/openspec-legacy/<change-id>/` 配下にそのまま保存されています（内容は変更していません）。
> 那由多開発サイクルについては `docs/superpowers/`（存在する場合）を参照してください。
>
> 「推定時期」は、各 change の `proposal.md` に対して `git log --follow --diff-filter=A -1` を実行して得た**作成日**（そのファイルが最初にリポジトリへ追加されたコミットの日付）を記載しています。archive 化の際にディレクトリ名へ日付プレフィックスが付与される・リネームされるケースがあるため、ディレクトリ単位ではなくファイル単位で `--follow` を適用し、archive 日ではなく作成日を実測しています。

## 開発提案一覧（openspec/changes、archive済み + 未archive、計2件）

| change-id | 由来 | 推定時期 | 目的 | 実装状況 | 現在の扱い | 原文 |
|---|---|---|---|---|---|---|
| 2025-12-23-standardize-quyuan-chuci | archive済み | 2025-12-24（469881a） | Vite 6・Vitest 3・ESLint 9（Flat Config）による堅牢でモダンな開発環境を整備し、リポジトリ構造・ビルド成果物・CI/CDワークフローを標準化する。 | 完了 | 完了・削除対象 | [原文](openspec-legacy/2025-12-23-standardize-quyuan-chuci/) |
| 2025-12-24-remove-lit-dependency | archive済み | 2025-12-24（49a4573） | `lit` 依存を軽量なvanilla Web Component基底クラスへ置き換えバンドルサイズを削減、`vue-template-compiler` の脆弱性（CVE-2024-6783）も同時に解消する。 | 完了 | 完了・削除対象 | [原文](openspec-legacy/2025-12-24-remove-lit-dependency/) |

## 当時のプロジェクト概要（参考・陳腐化済み）

| 項目 | 推定時期 | 目的 | 現状との乖離 | 原文 |
|---|---|---|---|---|
| project.md | 2025-12-24（469881a） | openspecワークフロー導入時点でのQuyuanプロジェクト概要・規約を記述したもの。 | 那由多開発サイクル移行（本索引作成）により、開発プロセス・ドキュメント体系は本ファイル群へ置き換わっている。参考情報として保存。 | [原文](openspec-legacy/_project-snapshot/project.md) |
| specs/repo-standards/spec.md | 2025-12-24（469881a） | リポジトリ構造・ビルド標準化に関する仕様（standardize-quyuan-chuci由来）。 | 完了済み変更の仕様記録として保存。 | [原文](openspec-legacy/_project-snapshot/specs/repo-standards/spec.md) |
| specs/vulnerability-fix/spec.md | 2025-12-24（49a4573） | `vue-template-compiler` 脆弱性修正に関する仕様（remove-lit-dependency由来）。 | 完了済み変更の仕様記録として保存。 | [原文](openspec-legacy/_project-snapshot/specs/vulnerability-fix/spec.md) |
| specs/dev-env/spec.md | 2025-12-24（469881a） | 開発環境（Vite 6/Vitest 3/ESLint 9）に関する仕様（standardize-quyuan-chuci由来）。 | 完了済み変更の仕様記録として保存。 | [原文](openspec-legacy/_project-snapshot/specs/dev-env/spec.md) |
| specs/ci-cd/spec.md | 2025-12-24（469881a） | CI/CDワークフローに関する仕様（standardize-quyuan-chuci由来）。 | 完了済み変更の仕様記録として保存。 | [原文](openspec-legacy/_project-snapshot/specs/ci-cd/spec.md) |
| specs/dependency-free/spec.md | 2025-12-24（49a4573） | `lit` 依存除去（vanilla Web Component化）に関する仕様（remove-lit-dependency由来）。 | 完了済み変更の仕様記録として保存。 | [原文](openspec-legacy/_project-snapshot/specs/dependency-free/spec.md) |

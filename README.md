# 南の国からどげんかせんといかん Ver.0.1

個人開発Webゲーム5作品の公式ポータル。既存ゲームのコードや公開先は変更しません。

## 手元で確認

Node.js 22以上とPython 3を使用します。外部パッケージのインストールは不要です。

1. このフォルダーで `npm run build` を実行。
2. `npm run dev` を実行。
3. ブラウザーで http://localhost:4173/ を開く。

生成先は `dist/` です。ページはJavaScriptなしでも閲覧できます。

## 情報の編集

- ゲーム情報：`data/games.json`。一覧と専用ページの両方に反映します。
- 更新情報：`data/news.json`。上から表示するので、新しいお知らせを先頭に追加。
- 画像の保存先：`public/assets/`。
- 見た目：`public/assets/style.css`。
- ページ生成：`scripts/build.mjs`。

ゲーム情報の項目：

| 項目 | 内容 |
| --- | --- |
| id | URLに使う半角英数字とハイフン。既存作品では変更しない |
| title | 正式タイトル |
| description | 一覧用の短い紹介 |
| genre | 正式ジャンル（現在は未登録） |
| url | 正式な外部ゲームURL。未登録はnull。http/https以外は無効 |
| image | メイン画像。例：assets/factor-main.webp。未登録はnull |
| logo | 正式ロゴの画像パス。未登録はnull |
| overview | ゲーム概要。未登録はnull |
| features | 特徴の文章の配列。未登録は空配列 |
| howToPlay | 遊び方の手順の文章の配列。未登録は空配列 |
| screenshots | 画像パスの配列。未登録は空配列 |
| accent / symbol | 仮ビジュアルの色と記号 |

画像パスは `assets/` から始めます。正式な画像は縦横比16:9前後を推奨します。情報を追加した後は再ビルドします。新作はgames.jsonに同じ形式の項目を追加するだけで一覧・詳細ページが生成されます。

仮画像は装飾用の図形で、実際のゲーム画面・正式ロゴではありません。未確認のルールやジャンルは記載していません。

## GitHub Pagesで公開

1. ポータル専用の新しいGitHubリポジトリを作成（既存ゲーム用リポジトリは使わない）。
2. このフォルダーのソースをmainブランチへ登録。distは自動生成のため登録不要。
3. リポジトリの Settings → Pages → Build and deployment → Source を GitHub Actions に設定。
4. mainへpushすると `.github/workflows/pages.yml` がビルド・公開。必要ならActions画面から手動実行。
5. ワークフローに表示される公開URLで確認。

ルート相対パスを使わず、ページ階層に応じた相対リンクを生成するため、`https://ユーザー名.github.io/リポジトリ名/` のサブパスにも対応します。リポジトリ名の変更時にbase設定は不要です。

## 現状

トップ＋5詳細ページ、正式PLAYリンク、レスポンシブCSS、公開設定を実装済み。正式紹介文・ジャンル・ロゴ・スクリーンショットは未登録です。公開先リポジトリは未作成です。

# 南の国からどげんかせんといかん Ver.0.7

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
| beginnerTip | 初心者向け案内。省略・null・空文字・空白のみの場合は欄を非表示 |
| catchphrase | 正式キャッチコピー |
| logoWebp | 任意の表示用WebP。未登録ならlogoの原本PNGを表示 |
| logoWidth / logoHeight | ロゴ原本の幅・高さ |
| logoTone | 暗いロゴはlight、明るいロゴはdarkの台紙を指定 |
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

ロゴは既存ゲームの原本PNGを改変せず使用しています。Tropical Midnight背景はVer.0.2を維持しています。EV×auctionの詳細URLは既存リンク保護のため games/ex-auction/ を維持しています。

## GitHub Pagesで公開

1. ポータル専用の新しいGitHubリポジトリを作成（既存ゲーム用リポジトリは使わない）。
2. このフォルダーのソースをmainブランチへ登録。distは自動生成のため登録不要。
3. リポジトリの Settings → Pages → Build and deployment → Source を GitHub Actions に設定。
4. mainへpushすると `.github/workflows/pages.yml` がビルド・公開。必要ならActions画面から手動実行。
5. ワークフローに表示される公開URLで確認。

ルート相対パスを使わず、ページ階層に応じた相対リンクを生成するため、`https://ユーザー名.github.io/リポジトリ名/` のサブパスにも対応します。リポジトリ名の変更時にbase設定は不要です。

## 現状

トップ＋5詳細ページ、正式PLAYリンク、レスポンシブCSS、公開設定を実装済み。正式紹介文・ジャンル・キャッチコピー・ロゴ・特徴・遊び方を登録済みです。スクリーンショットは未登録です。公開先：https://asumax1128.github.io/minami-portal/

## Ver.0.3 正式ロゴの出典

すべて目視確認し、原本のバイト列を変更せずコピーしています。色・形・縦横比は画像内で変更していません。青みのあるシルバーグレーの台紙はCSSの指定です。

| 登録ファイル（public/assets/logos/） | 元リポジトリ・パス | 元コミット |
| --- | --- | --- |
| factor-factor.png | asumax1128/factorfactor：ui-next/logo-official.png | dd9a7dc5d617e3199da32d31091e518fcb95f679 |
| kyouen.png | asumax1128/kyoen：title.png | 07df99910e129c8557593b3da5fd44588e1806b4 |
| proof-bluff.png | asumax1128/proof-bluff：title.png | acd3aa6d3ca1fc723d940c1ffc4a2336f568a305 |
| ev-auction.png | asumax1128/evauction：title.png | 637f3104f3e29960bd6b9f5135f27291d733fdcc |
| read-crowd.png | asumax1128/crowd-reader：title.png | 8fc44ecb5605dbb1b0d9a6c2897542a68a3cc30a |

ロゴは遅延読み込みし、原本の表示比率をCSSのobject-fit: containで維持しています。公開ゲームサイトへの接続制限により現在版のスクリーンショットを取得できなかったため、screenshotsは空配列のままです。架空のゲーム画面は使用していません。

## Ver.0.4 PLAY EXPERIENCE

ゲーム情報のaccentをカード上端・作品番号・見出し横の線・PLAYの枠と淡い光へ反映。正式ロゴ・背景・PLAY URL・詳細URL・自動公開設定は維持しています。スマホのPLAYと詳細は48px以上の操作領域、間隔12px以上を確保。詳細はPLAYをロゴより先に配置し、特徴は箇条書き、遊び方は番号付きです。追従式PLAYはありません。スクリーンショット未登録時は短い案内だけを表示します。

## Ver.0.5 FINAL POLISH

FACTOR×FACTORとEV×auctionのみ、同寸法・RGBA完全一致のロスレスWebPを表示用に追加。原本PNGへの参照はlogoに保持し、pictureでWebP対応時にlogoWebpを選択します。非対応時はPNG、logoWebp未登録の作品も従来のPNGです。取得失敗時の代替テキストとPLAY導線を維持し、追加JavaScriptは使用していません。

| 作品 | PNG | WebP | 削減率 |
| --- | ---: | ---: | ---: |
| FACTOR×FACTOR | 2,373,722 bytes | 1,671,656 bytes | 29.58% |
| EV×auction | 442,039 bytes | 325,310 bytes | 26.41% |

双方とも復号後RGBAの差分は0画素（完全透明部分を含む）。原本の色・透明部分・輪郭・寸法は変更していません。ビルド時は登録ロゴ／logoWebpのファイル存在と、登録ロゴの正の寸法を検査します。ロゴ未登録は許容します。


## Ver.0.6 GAME GALLERY

5作品の詳細ページに3枚ずつの正式スクリーンショットを掲載。画像とキャプションはdata/games.jsonのscreenshots配列で一元管理します。各項目はsrc（表示用WebP）、original（添付JPEG原本）、width・height（表示用画像の寸法）、captionです。未登録・空配列の場合は準備中の案内になります。

原本はpublic/assets/screenshots/の作品別フォルダにIMG_0437.jpg〜IMG_0451.jpgとして保存。添付はすべてJPEGで受領したため、当初PNG指定の番号も実際の形式に合わせています。原本はバイト単位で受領ファイルと一致します。表示用は全体を保持して幅1200px以内に縮小し、WebP品質92で保存。画像を押すと原寸JPEGを別タブで開けます。

ギャラリーはブラウザー標準の横スクロールとスナップを使い、タッチスワイプ、左右ボタン、左右矢印・Home・Endキーに対応。現在位置とキャプションを表示し、動きを減らす設定では即時切り替えます。画像枠の高さを予約して読み込みによるずれを抑えます。JavaScriptが無効でも横スクロールで全画像を閲覧できます。新しい外部ライブラリは追加していません。


## Ver.0.7 GAME DISCOVERY

トップページのゲーム一覧にカテゴリ絞り込みと特徴タグを追加しました。既存のカードを絞り込み、並び順・PLAY・詳細リンクは維持します。

カテゴリの表示名・補足・識別子はdata/discovery.jsonで管理。各作品の関連付けはdata/games.jsonのcategories配列、特徴タグは別のtags配列で管理します。categories・tagsは任意項目で、未登録の作品は全作品表示で閲覧できます。既存のidと詳細URLは変更しません。

初期状態は全作品。カテゴリは1つだけ選択でき、再選択で解除、すべて表示でリセットします。件数を読み上げ可能な表示にし、URL・保存データ・スクロール位置は変更しません。ページ再読み込みで初期状態に戻ります。JavaScriptが無効ならカテゴリ操作を隠して全作品とリンクを表示します。

スマホのカテゴリは2列×2段、タップ領域48px以上。標準buttonとaria-pressedを使用し、キーボード・フォーカス枠に対応します。新しいアニメーションや外部ライブラリは追加していません。

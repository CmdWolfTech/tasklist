---
title: "ブログ"
---

ブログ記事の一覧ページです。

## フロントマターのひな形

ブログ記事ではヒーロー画像とメタデータ用サムネイルが共通のルールで決定されます。画像の優先順位は `images` > `image` > コンテンツ内の最初の画像 > サイト既定です。必要に応じて各記事、または `cascade` で一括設定してください。

```yaml
---
title: "サンプル"
date: 2025-05-26
# 一覧全体へ適用したい場合は cascade に設定します。
cascade:
  images:
    - /img/sample-cover.png
image:
  src: /img/sample-cover.png
  alt: "代替テキスト"
  caption: "キャプション (任意)"
---
```

サムネイルだけ共有したい場合は `cascade.images` の指定だけで対応できます。ヒーロー画像や `alt` テキストを細かく制御したい場合は、各記事の Front Matter で `image`（文字列または `src` を含むオブジェクト形式）も設定してください。

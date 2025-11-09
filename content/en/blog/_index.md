---
title: "Blog"
---

This is the list of blog posts.

## Front Matter template

Blog posts share the same logic for selecting hero and thumbnail images. The lookup order is `images` > `image` > first image found in the content > site default. Define either field per post or via `cascade` to reuse values across entries.

```yaml
---
title: "Sample"
date: 2025-05-26
# Apply defaults to every post when necessary.
cascade:
  images:
    - /img/sample-cover.png
image:
  src: /img/sample-cover.png
  alt: "Alternative text"
  caption: "Optional caption"
---
```

Setting `cascade.images` alone is enough when you just need a shared thumbnail. Add `image` (string or object with a `src` value) when you also want to drive the hero image or provide per-post `alt` text.

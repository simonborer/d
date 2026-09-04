# Hugo content port

Port the five articles linked from `simonborer.com` from the sibling Hugo repository into this Eleventy site. Preserve the public URLs so the existing links stop returning 404 responses.

## Scope

| Public URL | Hugo source | Eleventy source |
| --- | --- | --- |
| `/intro-to-aria/` | `../decentinternet/content/post/intro-to-aria/index.md` | `intro-to-aria.md` |
| `/emojis/` | `../decentinternet/content/post/emojis/index.md` | `emojis.md` |
| `/accessible-content/` | `../decentinternet/content/post/accessible-content/index.md` | `accessible-content.md` |
| `/accessibility-and-visibility/` | `../decentinternet/content/post/accessibility-and-visibility/index.md` | `accessibility-and-visibility.md` |
| `/where-to-start/` | `../decentinternet/content/post/where-to-start/index.md` | `where-to-start.md` |

Do not port generated files from `../decentinternet/public/` or `../decentinternet/resources/`. Do not port other Hugo articles in this change.

## Implementation

1. Preserve the dependency-upgrade work already present in this working tree. Never push.
2. Configure Eleventy to process Markdown with Nunjucks by returning `markdownTemplateEngine: "njk"` from `eleventy.config.js`.
3. Create the five root-level Markdown files listed above. Give each one an explicit `permalink` ending in `/index.html` and use `layout: layout.njk`; these articles do not need slide versions.
4. Map Hugo front matter as follows:
   - Preserve `title`, `date`, and `tags`.
   - Convert `atf` into a plain-text `description`; remove embedded markup without losing its meaning.
   - Map `featuredImage` to the existing `feature.src` and `feature.alt` fields.
   - Set `readingTime: true`, `btt: true`, and `tag: "♿ Decent accessibility ♿"`.
   - Use these `learningLevel` values: `where-to-start`, `emojis`, and `accessible-content` are `1`; `intro-to-aria` and `accessibility-and-visibility` are `2`.
   - Use chronological, newest-first `homeOrder` values: `intro-to-aria` 6, `emojis` 7, `accessible-content` 8, `accessibility-and-visibility` 9, and `where-to-start` 10.
5. Copy original image sources into `images/<slug>/`. Copy JPG, PNG, and GIF originals; omit the Hugo-generated WebP duplicates because Eleventy Image generates current formats.
6. Convert each Hugo `figure` shortcode to semantic `<figure>` markup using the existing Eleventy `image` shortcode and a `<figcaption>` where the source supplies a caption. Preserve alt text and attribution. Pass `automobile.gif` through as a normal image so its animation is not flattened by image conversion.
7. Convert each Hugo `extlink` shortcode to the existing paired Nunjucks `ext` shortcode. Convert internal links to root-relative URLs such as `/intro-to-aria/`.
8. Preserve the article structure and prose. Do not silently modernize old claims. Fix obvious transcription errors and invalid HTML, then list potentially outdated accessibility advice or dead external references in the completion report for a separate editorial pass.
9. Keep headings semantic. Long articles should receive a `toc` matching their level-two headings, with explicit and unique heading IDs. Do not add a heading-ID dependency solely for this port.
10. Preserve useful fallbacks around third-party embeds. Load the CodePen embed script at most once on the visibility article.

## Acceptance criteria

- `npm ci` and `npm run build` succeed under Node 22.
- The five `_site/<slug>/index.html` files exist.
- The generated route inventory contains all pre-port routes plus exactly these five article routes; no accidental `/slides/` variants are added for them.
- `rg '\{\{<|\{\{</'` finds no Hugo shortcode syntax in the new sources.
- Every local image and internal link referenced by the five generated articles resolves to a generated file or route.
- Each meaningful image has useful alt text; decorative images use `alt=""`.
- The five articles appear after the existing cards on the homepage in the specified order.
- Existing homepage card order, existing reading-time output, feed generation, sitemap generation, and the CSS reset remain intact.
- Do not retain generated `_site` or newly generated `img` artifacts in the final diff. Retain source images and any intentionally updated tracked JavaScript bundles.
- Run `git diff --check` and report the commands and results. Do not commit or push.

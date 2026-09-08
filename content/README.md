# Editing the website

All public-facing content lives in this folder. The files under `app/` only render it.

## Home

Edit `home.json` to change the name, tagline, portrait, biography, current-work summary, updates, selected publications, CV preview, or external links shown on the home page. The three-part biography lives in `bioEssay`; the visually separated short research summary lives in `currentWork`.

To add a news item, insert a new object at the top of the `updates` array:

```json
{"date": "2026.09.08", "title": "Update title", "summary": "One-sentence description.", "href": "/optional-link/"}
```

The `href` may point to a note, another page, or an external website. Remove `href` if the update should not be clickable.

The home page shows the first five updates. Additional items remain in the same list and can be viewed by scrolling inside the Updates area; no extra configuration is needed.

Each repeated item is one JSON object. Keep commas between objects and do not add a comma after the final object in a list.

## CV and Experience

Edit `cv.json` to change the profile, contact links, education, research experience, methods, awards, or research-output summary.

## Research

Edit `pages/research.md`. Markdown headings beginning with `##` create project sections. Links use `[label](https://example.com)`.

## Publications

Edit `pages/publications.md`. Keep `**Xi Peng**` around the author name to preserve bold emphasis.

## Notes

Each file in `notes/` is one note. Create a new `.md` file with this front matter:

```md
---
title: Note title
date: 2026-MM-DD
description: One-sentence summary
---

Write the note here.
```

The filename becomes the URL slug. Use short lowercase words separated by hyphens.

## Check changes

Run `npm run build` before verifying or publishing the site. A JSON punctuation error or invalid page will stop the build and show the relevant filename.

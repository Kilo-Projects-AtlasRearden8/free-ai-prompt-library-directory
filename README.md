# Freebies

Free prompt libraries and starter prompts for writing, reselling, bookkeeping, and daily life. Every entry includes a use case, an example prompt, and steps. No account needed — open `index.html` in any browser and start using them.

Brought to you by **Asdale Dynamics, LLC**, beginner-friendly AI education: plain English, step by step, never condescending.

## What's inside

| Category | Prompts |
| --- | --- |
| Writing | Blog introduction, customer email reply, KDP book blurb |
| Reselling | eBay listing title & description, Amazon bullet points, sold-price research |
| Bookkeeping | Categorize transactions, invoice follow-up email, monthly plain-English summary |
| Daily Life | Pantry meal plan, gift ideas, packing list, low-energy task starter (ADHD-friendly) |
| Healthcare (education only) | Shift preparation checklist, plain-language patient education |
| Fun | FFXIV gathering & crafting plan, chess opening study plan |

Healthcare prompts are organizational aids only — never medical advice. See the disclaimers on those cards.

## How to run

No build step, no install, no server required:

1. Open `index.html` in your browser (double-click, or drag it into a window).
2. Use the search box to filter prompts, or click a category chip.
3. Click **Copy** on any example prompt to paste it into your free AI chat.

It works offline once loaded and works the same when served by any static host (GitHub Pages, etc.):

```sh
python3 -m http.server
# then open http://localhost:8000
```

## Files

- `index.html` — the site
- `css/style.css` — styles
- `js/prompts.js` — prompt data (mirrors `prompts/*.md`)
- `js/app.js` — client-side search and rendering
- `prompts/*.md` — source of truth for each prompt category
- `LICENSE` — MIT License
- `README.md` — this file
- `STATUS.md` — build, run, and verification notes

## Credit

Created and published by **Asdale Dynamics, LLC** (Indiana, formed October 2026), by Dylan Asdale — registered nurse turned AI author of *The Massive AI Manual*. Part of the hub at https://dylanasdale.github.io.

## License

MIT License. Copyright (c) 2026 Asdale Dynamics, LLC. See `LICENSE`.

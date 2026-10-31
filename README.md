# Freebies

Free prompt libraries and starter prompts for writing, reselling, bookkeeping, and daily life — plus budgeting, paperwork, and simple marketing help. Every entry includes a **use case**, an **example prompt**, and **steps**. No account needed — open `index.html` in any browser and start using them.

Brought to you by **Asdale Dynamics, LLC**, beginner-friendly AI education: plain English, step by step, never condescending.

## What's inside

| Category | Prompts |
| --- | --- |
| Writing | Blog introduction, customer email reply, KDP book blurb |
| Reselling | eBay listing title & description, Amazon bullet points, sold-price research |
| Bookkeeping | Categorize transactions, invoice follow-up email, monthly plain-English summary |
| Daily Life | Pantry meal plan, gift ideas, packing list, low-energy task starter, budget from a bank statement, organize digital paperwork |
| Marketing | Simple marketing email |
| Healthcare (education only) | Shift preparation checklist, plain-language patient education |
| Fun | FFXIV gathering & crafting plan, chess opening study plan |

**17 prompts, 7 categories.** (Healthcare cards carry education-only disclaimers — these are organizational aids, never medical advice.)

## How to run

No build step, no install, no server required:

1. Open `index.html` in your browser (double-click, or drag it into a window).
2. Type in the search box to filter prompts, or click a category chip.
   - Press **/** to focus the search box; press **Escape** to clear it.
3. Click **Copy** on any example prompt to paste it into your free AI chat.
4. Click **View markdown source** on a card to see the original Markdown file.

It works offline once loaded and works the same when served by any static host (GitHub Pages, etc.):

```sh
python3 -m http.server   # then open http://localhost:8000
```

## How a prompt entry works

Each card is a reusable starter prompt — replace the `{{PLACEHOLDER}}` values with your own details, paste it into any free AI chat, then adjust the result to your voice. No personal data, account numbers, customer names, or payment details should ever be pasted into a public AI chat.

## Files

- `index.html` — the site
- `css/style.css` — styles
- `js/prompts.js` — prompt data used by the site (mirrors `prompts/*.md`)
- `js/app.js` — client-side search, filtering, rendering, copy-to-clipboard
- `prompts/*.md` — source of truth for each prompt category
- `tests/search.test.mjs` — reproducible test for prompt data and search logic
- `LICENSE` — MIT License
- `README.md` — this file
- `STATUS.md` — build, run, and verification notes

## Credit

Created and published by **Asdale Dynamics, LLC** (Indiana, formed October 2026), by Dylan Asdale — registered nurse turned AI author of *The Massive AI Manual*. Part of the hub at https://dylanasdale.github.io, explaining AI "like a friend would."

## License

MIT License. Copyright (c) 2026 Asdale Dynamics, LLC. See `LICENSE`.

# STATUS

## What was built

A static "Freebies" directory site of free prompt libraries and starter prompts, credited to **Asdale Dynamics, LLC**.

- `index.html` — single-page site: header (credit line), search box, category filter chips, prompt card grid, footer
- `css/style.css` — warm, polished, responsive styles (no framework)
- `js/prompts.js` — runtime prompt data (20 prompts, 7 categories), mirrors `prompts/*.md`; exposes `window.FREEBIES`
- `js/app.js` — client-side search, category filtering, rendering, copy-to-clipboard, clear search, keyboard shortcuts (`/` focus, `Escape` clear), "View markdown source" links
- `prompts/*.md` — source of truth for each category
- `tests/search.test.mjs` — committed, reproducible test for prompt data + search logic (`node tests/search.test.mjs`)
- `README.md`, `LICENSE` (MIT, Copyright (c) 2026 Asdale Dynamics, LLC), `STATUS.md`

Categories (20 prompts): Writing (3), Reselling (3), Bookkeeping (3), Daily Life (6: meal plan, gift ideas, packing list, low-energy task starter, budget from a bank statement, organize digital paperwork), Marketing (1: simple marketing email), Healthcare/education-only (2), Fun (2: FFXIV, chess).

Each card shows: category badge, title (use case), example prompt in a copyable code block, numbered steps, "View markdown source" link to the `.md` file, and education-only disclaimers on healthcare cards. No account needed; works by opening `index.html` directly or via any static server; no build step; client-side only; nothing is sent to any server.

## How to run

```sh
# Option 1: open directly (works offline once loaded)
open index.html

# Option 2: serve locally
python3 -m http.server   # then open http://localhost:8000
```

## Verification results

- `node --check js/app.js` — OK
- `node --check` of `js/prompts.js` as ESM — OK
- `tests/search.test.mjs` — ALL TESTS PASSED: 20 prompts across 7 categories (Writing 3, Reselling 3, Bookkeeping 3, Daily Life 6, Marketing 1, Healthcare 2, Fun 2); search/filter logic verified ("email"→4, "chess"→1, "invoice"→2, "budget"→2, "paperwork"→1, "marketing"→2, none→0); every prompt has title/useCase/examplePrompt/steps/source; healthcare cards have disclaimers
- `index.html` tag balance (python html.parser) — OK
- `python3 -m http.server` on port 18081 — index.html, css/style.css, js/prompts.js, js/app.js all HTTP 200
- Headless Google Chrome (`--dump-dom`) — all 20 cards rendered by client-side JS; all 20 expected prompt titles present in the DOM; search input, clear button, and all 20 "View markdown source" links present
- Secret/sensitive-data scan (API keys, passwords, emails, phone numbers) across README, LICENSE, index.html, js, css, prompts, tests — none found

## Known gaps

- Prompt content is maintained in two places (`prompts/*.md` source and `js/prompts.js` runtime data); no build step generates one from the other, so edits must be mirrored manually. Documented here so future editors know to sync both.
- No automated test framework; `tests/search.test.mjs` is a standalone node script run manually.
- FFXIV and chess prompts reference in-game data not verified against live game sources.
- Healthcare prompts carry education-only disclaimers; they are not medical advice and never replace clinical judgment.
- Search is substring matching over title, use case, prompt text, steps, tags, and category — no stemming or fuzzy matching.
- No CI/CD workflows (`.github/workflows` intentionally not added).

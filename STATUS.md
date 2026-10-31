# STATUS

## What was built

A static "Freebies" directory site of free prompt libraries and starter prompts, credited to **Asdale Dynamics, LLC**.

- `index.html` — single-page site: header, search bar, category filter chips, prompt card grid, footer
- `css/style.css` — warm, polished, responsive styles (no framework)
- `js/prompts.js` — runtime prompt data (17 prompts, 6 categories), mirrors `prompts/*.md`
- `js/app.js` — client-side search, category filtering, rendering, and copy-to-clipboard buttons
- `prompts/*.md` — source of truth for each category: writing, reselling, bookkeeping, daily life, healthcare (education only), fun extras (FFXIV, chess)
- `README.md`, `LICENSE` (MIT, Copyright (c) 2026 Asdale Dynamics, LLC), `STATUS.md`

Each prompt card shows: category badge, title (use case), example prompt in a copyable code block, numbered steps, source file, and education-only disclaimers on healthcare cards. No account needed; works by opening `index.html` directly or via any static server; no build step; client-side only.

## How to run

```sh
# Option 1: open directly
open index.html

# Option 2: serve locally
python3 -m http.server   # then open http://localhost:8000
```

## Verification results

- `node --check js/app.js` — OK
- `node --check` of `js/prompts.js` as ESM — OK
- `index.html` tag balance (python html.parser) — OK
- `python3 -m http.server` on port 18080 — index.html, css/style.css, js/prompts.js, js/app.js all HTTP 200
- Headless Google Chrome (`--dump-dom`) — all 17 cards rendered by client-side JS; all 17 expected prompt titles present in the DOM; search input and copy buttons present
- Search/filter logic unit test against the prompt data — all pass: total 17; Writing 3, Reselling 3, Bookkeeping 3, Daily Life 4, Healthcare 2, Fun 2; query "email" → 3, "chess" → 1, "invoice" → 1, "zzznone" → 0
- Secret/sensitive-data scan (API keys, passwords, emails, phone numbers) — none found in any file

## Known gaps

- Prompt content is maintained in two places (`prompts/*.md` source and `js/prompts.js` runtime data); no build step generates one from the other, so edits must be mirrored manually.
- No automated test framework; verification above consists of one-off node/python/chrome checks.
- FFXIV and chess prompts reference in-game data not verified against live game sources.
- Healthcare prompts carry education-only disclaimers; they are not medical advice and never replace clinical judgment.
- Search is substring matching over title, use case, prompt text, steps, tags, and category — no stemming or fuzzy matching.

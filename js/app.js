(() => {
  "use strict";

  const PROMPTS_DATA = [];
  const CATEGORIES_DATA = [];

  // Load prompts.js (exports via a small inline module shim for browsers without
  // module support in mind; prompts.js sets window.FREEBIES when loaded as a
  // classic script). Fallback: fetch nothing — data is inlined at build time.
  window.addEventListener("load", () => {
    const data = window.FREEBIES || { prompts: [], categories: [] };
    init(data.prompts, data.categories);
  });

  function init(prompts, categories) {
    const searchInput = document.getElementById("search");
    const filtersEl = document.getElementById("filters");
    const gridEl = document.getElementById("grid");
    const countEl = document.getElementById("count");
    let activeCategory = null;

    buildFilters(categories);
    render(prompts, filtersEl, gridEl, countEl, null);

    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase();
      render(prompts, filtersEl, gridEl, countEl, activeCategory, q);
    });

    filtersEl.addEventListener("click", (e) => {
      const chip = e.target.closest("[data-category]");
      if (!chip) return;
      const cat = chip.dataset.category;
      activeCategory = cat === activeCategory ? null : cat;
      updateChips(filtersEl, activeCategory);
      render(prompts, filtersEl, gridEl, countEl, activeCategory, searchInput.value.toLowerCase());
    });
  }

  function buildFilters(categories) {
    const filtersEl = document.getElementById("filters");
    const all = document.createElement("button");
    all.type = "button";
    all.className = "chip active";
    all.dataset.category = "";
    all.textContent = "All";
    filtersEl.appendChild(all);

    categories.forEach((cat) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "chip";
      chip.dataset.category = cat;
      chip.textContent = cat;
      filtersEl.appendChild(chip);
    });
  }

  function updateChips(filtersEl, active) {
    [...filtersEl.children].forEach((chip) => {
      chip.classList.toggle("active", chip.dataset.category === active);
    });
  }

  function matchesPrompt(prompt, category, query) {
    if (category && prompt.category !== category) return false;
    if (!query) return true;
    const haystack = [
      prompt.title,
      prompt.useCase,
      prompt.examplePrompt,
      prompt.category,
      ...prompt.tags,
      ...prompt.steps,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(query);
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function render(prompts, filtersEl, gridEl, countEl, category, query) {
    const filtered = prompts.filter((p) => matchesPrompt(p, category, query));
    countEl.textContent =
      filtered.length === 1
        ? "1 prompt"
        : `${filtered.length} prompts`;

    gridEl.innerHTML = "";
    if (filtered.length === 0) {
      gridEl.innerHTML =
        '<p class="empty">No prompts match your search. Try different words or clear the filters.</p>';
      return;
    }

    filtered.forEach((prompt) => {
      const card = document.createElement("article");
      card.className = "card";
      card.dataset.category = prompt.category;

      let disclaimerHtml = "";
      if (prompt.disclaimer) {
        disclaimerHtml = `<p class="disclaimer">${escapeHtml(prompt.disclaimer)}</p>`;
      }

      const stepsHtml = prompt.steps
        .map((step) => `<li>${escapeHtml(step)}</li>`)
        .join("");

      card.innerHTML = `
        <span class="badge">${escapeHtml(prompt.category)}</span>
        <h3>${escapeHtml(prompt.title)}</h3>
        <p class="use-case">${escapeHtml(prompt.useCase)}</p>
        <div class="prompt-block">
          <p class="prompt-label">Example prompt</p>
          <pre><code>${escapeHtml(prompt.examplePrompt)}</code></p>
          <button class="copy" type="button" data-copy="${escapeHtml(
            prompt.examplePrompt
          )}" aria-label="Copy example prompt">Copy</button>
        </div>
        <div class="steps-block">
          <p class="steps-label">Steps</p>
          <ol>${stepsHtml}</ol>
        </div>
        <p class="source">Source: ${escapeHtml(prompt.source)}</p>
        ${disclaimerHtml}
      `;
      gridEl.appendChild(card);
    });
  }

  document.addEventListener("click", (e) => {
    const copyBtn = e.target.closest(".copy");
    if (!copyBtn) return;
    const text = copyBtn.getAttribute("data-copy");
    navigator.clipboard
      .writeText(text)
      .then(() => {
        const previous = copyBtn.textContent;
        copyBtn.textContent = "Copied!";
        setTimeout(() => {
          copyBtn.textContent = previous;
        }, 1500);
      })
      .catch(() => {
        copyBtn.textContent = "Couldn't copy";
      });
  });
})();

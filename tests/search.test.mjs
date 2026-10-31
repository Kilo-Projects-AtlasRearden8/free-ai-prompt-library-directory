// Reproducible test for the Freebies prompt data and search logic.
// Run with: node tests/search.test.mjs

import { PROMPTS, CATEGORIES } from "../js/prompts.js";

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

let failures = 0;
function assert(cond, msg) {
  if (!cond) {
    failures += 1;
    console.log("FAIL:", msg);
  } else {
    console.log("pass:", msg);
  }
}

const expected = {
  Writing: 3,
  Reselling: 3,
  Bookkeeping: 3,
  "Daily Life": 6, // meal plan, gift ideas, packing list, low-energy starter, budget, paperwork
  Marketing: 1,
  Healthcare: 2,
  Fun: 2,
};

assert(Array.isArray(PROMPTS), "PROMPTS is an array");
assert(Array.isArray(CATEGORIES), "CATEGORIES is an array");
assert(Object.keys(expected).length === CATEGORIES.length, `category count matches (${CATEGORIES.length})`);

let total = 0;
for (const [cat, count] of Object.entries(expected)) {
  const actual = PROMPTS.filter((p) => p.category === cat).length;
  assert(actual === count, `${cat}: ${count} prompts (got ${actual})`);
  total += count;
}
assert(PROMPTS.length === total, `total prompts: ${total} (got ${PROMPTS.length})`);

assert(PROMPTS.filter((p) => matchesPrompt(p, null, "email")).length === 4, `search "email": 4`);
assert(PROMPTS.filter((p) => matchesPrompt(p, null, "chess")).length === 1, `search "chess": 1`);
assert(PROMPTS.filter((p) => matchesPrompt(p, null, "invoice")).length === 2, `search "invoice": 2`);
assert(PROMPTS.filter((p) => matchesPrompt(p, null, "budget")).length === 2, `search "budget": 2`);
assert(PROMPTS.filter((p) => matchesPrompt(p, null, "paperwork")).length === 1, `search "paperwork": 1`);
assert(PROMPTS.filter((p) => matchesPrompt(p, null, "marketing")).length === 2, `search "marketing": 2`);
assert(PROMPTS.filter((p) => matchesPrompt(p, null, "zzznone")).length === 0, `search "zzznone": 0`);

PROMPTS.forEach((p) => {
  assert(typeof p.title === "string" && p.title, `${p.id}: title`);
  assert(typeof p.useCase === "string" && p.useCase, `${p.id}: useCase`);
  assert(typeof p.examplePrompt === "string" && p.examplePrompt, `${p.id}: examplePrompt`);
  assert(Array.isArray(p.steps) && p.steps.length > 0, `${p.id}: steps`);
  assert(typeof p.source === "string" && p.source, `${p.id}: source`);
  if (p.category === "Healthcare") assert(p.disclaimer, `${p.id}: disclaimer`);
});

console.log(failures === 0 ? "\nALL TESTS PASSED" : `\n${failures} FAILURES`);
process.exit(failures === 0 ? 0 : 1);

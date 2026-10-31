// Freebies prompt library data for Asdale Dynamics, LLC.
// Source of truth: the markdown files under prompts/. This file mirrors them
// so the static site can run client-side with no build step and no server.
const PROMPTS = [
  {
    id: "writing-blog-intro",
    category: "Writing",
    title: "Write a friendly blog introduction",
    useCase:
      "You need the opening of a blog post that sounds like a helpful friend, not a textbook. Good for beginner-friendly AI education content.",
    examplePrompt:
      'Write a warm, plain-English introduction (3 to 4 short paragraphs) for a blog post about "{{TOPIC}}". The audience is beginners who might feel overwhelmed. Speak like a friend explaining something over coffee: no jargon, no buzzwords, no condescension. End with one sentence that tells the reader what they\'ll learn. If you use a term that isn\'t everyday language, explain it in parentheses the first time.',
    steps: [
      'Replace {{TOPIC}} with your topic (for example, "using AI to draft emails at work").',
      "Paste the prompt into any free AI chat (no account needed).",
      "Read the draft out loud. If a sentence sounds stiff, ask for a simpler rewrite.",
      "Add one personal example or story from your own experience.",
      "Copy the result into your blog editor and add your own headline.",
    ],
    tags: ["writing", "blog", "beginners"],
    source: "prompts/writing.md",
  },
  {
    id: "writing-customer-email",
    category: "Writing",
    title: "Reply to a customer or client email",
    useCase:
      "You need to answer a customer quickly and politely, without sounding robotic or overly formal.",
    examplePrompt:
      "Write a short, friendly email reply to a customer who {{SITUATION}}. Keep it to 3 or 4 short sentences. Tone: warm and helpful, like a small business owner writing to a neighbor. Do not use phrases like \"please be advised\" or \"per my last email.\" Include a clear next step or offer to help further.",
    steps: [
      'Replace {{SITUATION}} with the situation (for example, "asked for a refund on a digital guide they already downloaded").',
      "Paste into any free AI chat.",
      "Check names and order details yourself — never paste real customer names, addresses, or payment info into a public AI chat.",
      "Adjust the tone so it sounds like you, then send.",
    ],
    tags: ["writing", "email", "customer-service"],
    source: "prompts/writing.md",
  },
  {
    id: "writing-kdp-blurb",
    category: "Writing",
    title: "Write a KDP book blurb",
    useCase:
      "You're publishing on Amazon Kindle Direct Publishing and need a back-cover blurb that hooks readers.",
    examplePrompt:
      'Write a Kindle book blurb for "{{BOOK_TITLE}}", a {{GENRE}} book for {{AUDIENCE}}. Structure: a one-line hook, two short paragraphs about the problem and the promise, and one sentence that tells the reader what to do next. Tone: plain English, warm, no hype. Keep the whole blurb under 150 words. Do not mention AI.',
    steps: [
      'Fill in {{BOOK_TITLE}}, {{GENRE}}, and {{AUDIENCE}}.',
      "Paste into any free AI chat and generate 2 or 3 variations.",
      "Pick the one that sounds most like your voice, then paste it into your KDP description.",
      "Ask a friend to read it and say whether they'd buy the book based on the blurb alone.",
    ],
    tags: ["writing", "kdp", "publishing", "book-blurb"],
    source: "prompts/writing.md",
  },
  {
    id: "reselling-ebay-listing",
    category: "Reselling",
    title: "eBay listing title and description",
    useCase:
      "You're listing an item on eBay and want a search-friendly title plus an honest, clear description.",
    examplePrompt:
      'Write an eBay listing title (max 80 characters) and a short item description for "{{ITEM}}". Condition: {{CONDITION}}. Include: what the item is, brand and model if known, condition and any flaws, and what ships in the box. Tone: honest and plain-spoken, like you\'re describing it to a friend. Do not make claims you can\'t verify. End with shipping and return basics.',
    steps: [
      'Replace {{ITEM}} with what you\'re selling (for example, "Nintendo Switch OLED, white").',
      'Replace {{CONDITION}} with the real condition (for example, "pre-owned, works great, light scratches on the screen").',
      "Paste into any free AI chat.",
      "Add your own photos and real shipping cost before listing.",
      "Never include personal addresses or phone numbers in the prompt or listing.",
    ],
    tags: ["reselling", "ebay", "listing"],
    source: "prompts/reselling.md",
  },
  {
    id: "reselling-amazon-bullets",
    category: "Reselling",
    title: "Amazon product bullet points",
    useCase:
      "You need benefit-led bullet points for an Amazon product listing.",
    examplePrompt:
      "Write five Amazon-style bullet points for {{PRODUCT}}, a {{CATEGORY}} sold on Amazon. Each bullet: one line, benefit first, feature second. Audience: {{AUDIENCE}}. Tone: clear and confident, no hype, no false claims. Avoid prohibited claims (no medical cures, no \"guaranteed\" results). Use plain language an eighth-grader could understand.",
    steps: [
      "Fill in {{PRODUCT}}, {{CATEGORY}}, and {{AUDIENCE}}.",
      "Paste into any free AI chat.",
      "Check Amazon's category rules for restricted claims before publishing.",
      "Paste the bullets into your Amazon listing and add your own photos.",
    ],
    tags: ["reselling", "amazon", "listing"],
    source: "prompts/reselling.md",
  },
  {
    id: "reselling-price-research",
    category: "Reselling",
    title: "Research comparable sold prices",
    useCase:
      "You want to price an item competitively before listing it for resale.",
    examplePrompt:
      "I'm reselling {{ITEM}} in {{CONDITION}} condition. Help me plan pricing research: where to look for comparable sold listings (eBay sold items, Amazon, Facebook Marketplace), what details to note (condition, photos, shipping cost, how long it took to sell), and how to set a starting price vs. a firm price. Keep it practical and step by step.",
    steps: [
      "Replace {{ITEM}} and {{CONDITION}} with your item.",
      "Paste into any free AI chat.",
      "Follow the steps yourself: search sold listings, not active listings.",
      "Record prices in a spreadsheet so you can see what actually sells.",
    ],
    tags: ["reselling", "pricing", "research"],
    source: "prompts/reselling.md",
  },
  {
    id: "bookkeeping-categorize",
    category: "Bookkeeping",
    title: "Categorize bank transactions",
    useCase:
      "You have a spreadsheet or CSV of bank transactions and want to sort them into expense categories.",
    examplePrompt:
      "Here is a list of bank transactions for a small business. For each one, suggest an expense category (for example: Supplies, Shipping, Software, Marketing, Postage, Meals, Utilities, Other). Return a table with three columns: Date, Description, Suggested Category. Flag anything unclear as \"Review.\" Do not invent amounts or dates.\n{{TRANSACTIONS}}",
    steps: [
      "Export your bank transactions as CSV or copy a few rows into {{TRANSACTIONS}}.",
      "Remove or mask anything personal (names, account numbers, customer details) before pasting.",
      "Paste into any free AI chat.",
      "Review the \"Review\" rows yourself and assign categories.",
      "Copy the table into your spreadsheet or bookkeeping software.",
    ],
    tags: ["bookkeeping", "transactions", "small-business"],
    source: "prompts/bookkeeping.md",
    note:
      "Organizational aid only, not accounting advice. Consult a bookkeeper or tax professional for your books.",
  },
  {
    id: "bookkeeping-invoice-followup",
    category: "Bookkeeping",
    title: "Write an invoice follow-up email",
    useCase: "A client hasn't paid an invoice and you need a polite reminder.",
    examplePrompt:
      "Write a friendly follow-up email to a client whose invoice {{INVOICE_NUMBER}} for ${{AMOUNT}} is {{DAYS}} days overdue. Tone: warm but clear, like a small business owner writing to a client they want to keep working with. Include: the invoice number and amount, how to pay, and an offer to discuss if there's a problem. Keep it under 150 words. Do not accuse or threaten.",
    steps: [
      "Fill in {{INVOICE_NUMBER}}, {{AMOUNT}}, and {{DAYS}}.",
      "Paste into any free AI chat.",
      "Add your payment link or address and attach the invoice PDF.",
      "Send from your own email and note the date you followed up.",
    ],
    tags: ["bookkeeping", "invoicing", "email"],
    source: "prompts/bookkeeping.md",
  },
  {
    id: "bookkeeping-monthly-summary",
    category: "Bookkeeping",
    title: "Monthly bookkeeping summary in plain English",
    useCase:
      "You want to turn last month's income and expenses into a plain-English summary you can actually understand.",
    examplePrompt:
      "Here is my small business's income and expense summary for {{MONTH}}. Write a plain-English summary (4 to 6 short sentences): total income, total expenses, the biggest expense categories, and whether I made or lost money. No accounting jargon. If something looks unusual, flag it gently as a question for my bookkeeper.\n{{SUMMARY_DATA}}",
    steps: [
      "Fill in {{MONTH}} and paste your totals into {{SUMMARY_DATA}}.",
      "Mask customer names and account numbers before pasting.",
      "Paste into any free AI chat.",
      "Use the summary to plan next month's spending; share it with your bookkeeper or tax pro.",
    ],
    tags: ["bookkeeping", "summary", "small-business"],
    source: "prompts/bookkeeping.md",
  },
  {
    id: "daily-life-meal-plan",
    category: "Daily Life",
    title: "Meal plan from what's already in your pantry",
    useCase:
      "You have random ingredients and need dinner ideas without going to the store.",
    examplePrompt:
      "I have these ingredients on hand: {{INGREDIENTS}}. I eat {{DIET}} and have about {{TIME}} minutes to cook. Suggest 3 simple dinners using mostly what I have, plus a short grocery list of anything missing (5 items max). Keep steps to 5 or fewer per recipe. Tone: encouraging, low pressure.",
    steps: [
      "List what's actually in your fridge and pantry in {{INGREDIENTS}}.",
      "Note any diet needs and how much time you have.",
      "Paste into any free AI chat.",
      "Pick one recipe and cook it; cross off ingredients as you use them.",
    ],
    tags: ["daily-life", "meals", "adhd-friendly"],
    source: "prompts/daily-life.md",
  },
  {
    id: "daily-life-gift-ideas",
    category: "Daily Life",
    title: "Gift ideas for someone hard to shop for",
    useCase: "You need present ideas for a person, occasion, and budget.",
    examplePrompt:
      "Suggest 5 gift ideas for {{RECIPIENT}} for {{OCCASION}}. Budget: around ${{BUDGET}}. They like {{INTERESTS}} and they live in {{LOCATION}}. Mix of physical gifts, experiences, and one handmade or low-cost idea. For each idea: one sentence on why it fits and where to look for it. No accounts or memberships required.",
    steps: [
      "Fill in recipient, occasion, budget, interests, and location.",
      "Paste into any free AI chat.",
      "Pick one idea, order or make it, and you're done.",
    ],
    tags: ["daily-life", "gifts"],
    source: "prompts/daily-life.md",
  },
  {
    id: "daily-life-packing-list",
    category: "Daily Life",
    title: "Packing list for a trip",
    useCase: "You're traveling and don't want to forget essentials — or overpack.",
    examplePrompt:
      "Create a packing list for a {{DURATION}}-day trip to {{DESTINATION}} in {{SEASON}}. Activities: {{ACTIVITIES}}. Group items into: clothes, toiletries, electronics/documents, and extras. Include a \"if you forget it\" section (things you can buy there). Keep it short enough to screenshot.",
    steps: [
      "Fill in duration, destination, season, and activities.",
      "Paste into any free AI chat and screenshot the result.",
      "Check each item off as you pack it.",
    ],
    tags: ["daily-life", "travel", "packing"],
    source: "prompts/daily-life.md",
  },
  {
    id: "daily-life-low-energy-starter",
    category: "Daily Life",
    title: "Low-energy task starter (ADHD-friendly)",
    useCase:
      "You're stuck and need the tiniest possible first step to start a task.",
    examplePrompt:
      "I need to start {{TASK}} but I'm low on energy today. Break it into 5 steps so small they feel almost silly (each under 5 minutes). The first step must take under 2 minutes. Tone: gentle and encouraging, never shaming. End with one sentence of permission to stop after the first step.",
    steps: [
      "Name the task you're avoiding in {{TASK}}.",
      "Paste into any free AI chat.",
      "Do step one only. Stop if you need to — that still counts.",
    ],
    tags: ["daily-life", "adhd-friendly", "productivity"],
    source: "prompts/daily-life.md",
  },
  {
    id: "healthcare-shift-checklist",
    category: "Healthcare",
    title: "Shift preparation checklist",
    useCase:
      "A nurse or healthcare worker wants a gentle way to organize tasks before and during a shift.",
    examplePrompt:
      "Create a short shift-preparation checklist for a healthcare worker starting a {{SHIFT_LENGTH}}-hour {{SHIFT_TYPE}} shift. Include: before you clock in, first 30 minutes on the unit, mid-shift reset, and end-of-shift handoff basics. Keep each item to one line. Tone: calm and practical, not adding stress. Note: this is a general organizational aid, not clinical guidance.",
    steps: [
      "Fill in shift length and type.",
      "Paste into any free AI chat.",
      "Adapt it to your unit's real workflow; follow your facility's policies first.",
    ],
    tags: ["healthcare", "nursing", "checklist"],
    source: "prompts/healthcare.md",
    disclaimer:
      "Education and productivity tool only — never medical advice, never a substitute for clinical judgment, never for patient care decisions. Do not enter real patient names, IDs, or health information into a public AI chat.",
  },
  {
    id: "healthcare-plain-language",
    category: "Healthcare",
    title: "Plain-language patient education (education only)",
    useCase:
      "You want to practice explaining a common health topic in plain English before speaking with a patient — communication practice only.",
    examplePrompt:
      'Explain "{{TOPIC}}" in plain English for an adult with no medical background. Use short sentences, everyday words, and an analogy if it helps. Include: what it is, what to watch for, and when to call a clinician. End with: "This is general health information, not medical advice. Ask your care team about your specific situation." Do not give dosing instructions or diagnoses.',
    steps: [
      'Replace {{TOPIC}} with a general topic (for example, "high blood pressure" or "staying hydrated").',
      "Paste into any free AI chat.",
      "Review with a clinician before sharing anything with a patient; never use this as medical guidance.",
    ],
    tags: ["healthcare", "patient-education"],
    source: "prompts/healthcare.md",
    disclaimer:
      "Education and productivity tool only — never medical advice, never a substitute for clinical judgment, never for patient care decisions. Do not enter real patient names, IDs, or health information into a public AI chat.",
  },
  {
    id: "fun-ffxiv-gathering",
    category: "Fun",
    title: "FFXIV gathering and crafting plan",
    useCase:
      "You're playing Final Fantasy XIV and want a plan for gathering materials or leveling a craft.",
    examplePrompt:
      "I'm playing Final Fantasy XIV and want to gather {{ITEM}} for {{CRAFT/USE}}. My character is level {{LEVEL}} {{CLASS/JOB}}. Suggest a beginner-friendly gathering route: which zones to check, what to look for, and any gear or consumables that help. Keep it short and spoiler-light. If you're not sure about in-game details, say so rather than guessing.",
    steps: [
      "Replace item, level, and class/job.",
      "Paste into any free AI chat.",
      "Verify against an FFXIV database site before spending in-game time.",
    ],
    tags: ["fun", "ffxiv", "gaming"],
    source: "prompts/fun-extras.md",
  },
  {
    id: "fun-chess-opening",
    category: "Fun",
    title: "Chess opening study plan",
    useCase:
      "You want to learn a chess opening without memorizing 40 moves.",
    examplePrompt:
      "I'm a {{RATING}}-rated chess player wanting to learn the {{OPENING}} as {{WHITE/BLACK}}. Suggest a study plan: the first 4-6 moves to memorize, the main ideas (not just move order), one common mistake to avoid, and two free online resources to practice. Keep it under 250 words.",
    steps: [
      "Fill in your approximate rating, opening, and color.",
      "Paste into any free AI chat.",
      "Practice the first few moves on a free chess site before playing them in a real game.",
    ],
    tags: ["fun", "chess"],
    source: "prompts/fun-extras.md",
  },
];

// Unique categories, in display order (core categories first).
const CATEGORIES = [
  "Writing",
  "Reselling",
  "Bookkeeping",
  "Daily Life",
  "Healthcare",
  "Fun",
];

export { PROMPTS, CATEGORIES };

// Expose for classic-script consumers (app.js) when loaded as a module.
if (typeof window !== "undefined") {
  window.FREEBIES = { prompts: PROMPTS, categories: CATEGORIES };
}

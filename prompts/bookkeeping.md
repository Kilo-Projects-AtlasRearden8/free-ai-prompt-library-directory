# Bookkeeping Prompts

Starter prompts for small-business bookkeeping admin: sorting transactions, chasing invoices, and monthly summaries. These are organizational aids, not accounting advice — consult a bookkeeper or tax professional for your books.

---

## Categorize bank transactions

**Use case:** You have a spreadsheet or CSV of bank transactions and want to sort them into expense categories.

**Example prompt:**
```
Here is a list of bank transactions for a small business. For each one, suggest an expense category (for example: Supplies, Shipping, Software, Marketing, Postage, Meals, Utilities, Other). Return a table with three columns: Date, Description, Suggested Category. Flag anything unclear as "Review." Do not invent amounts or dates.
{{TRANSACTIONS}}
```

**Steps:**
1. Export your bank transactions as CSV or copy a few rows into `{{TRANSACTIONS}}`.
2. Remove or mask anything personal (names, account numbers, customer details) before pasting.
3. Paste into any free AI chat.
4. Review the "Review" rows yourself and assign categories.
5. Copy the table into your spreadsheet or bookkeeping software.

---

## Write an invoice follow-up email

**Use case:** A client hasn't paid an invoice and you need a polite reminder.

**Example prompt:**
```
Write a friendly follow-up email to a client whose invoice {{INVOICE_NUMBER}} for ${{AMOUNT}} is {{DAYS}} days overdue. Tone: warm but clear, like a small business owner writing to a client they want to keep working with. Include: the invoice number and amount, how to pay, and an offer to discuss if there's a problem. Keep it under 150 words. Do not accuse or threaten.
```

**Steps:**
1. Fill in `{{INVOICE_NUMBER}}`, `{{AMOUNT}}`, and `{{DAYS}}`.
2. Paste into any free AI chat.
3. Add your payment link or address and attach the invoice PDF.
4. Send from your own email and note the date you followed up.

---

## Monthly bookkeeping summary in plain English

**Use case:** You want to turn last month's income and expenses into a plain-English summary you can actually understand.

**Example prompt:**
```
Here is my small business's income and expense summary for {{MONTH}}. Write a plain-English summary (4 to 6 short sentences): total income, total expenses, the biggest expense categories, and whether I made or lost money. No accounting jargon. If something looks unusual, flag it gently as a question for my bookkeeper.
{{SUMMARY_DATA}}
```

**Steps:**
1. Fill in `{{MONTH}}` and paste your totals into `{{SUMMARY_DATA}}`.
2. Mask customer names and account numbers before pasting.
3. Paste into any free AI chat.
4. Use the summary to plan next month's spending; share it with your bookkeeper or tax pro.

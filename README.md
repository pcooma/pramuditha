# Pramuditha Coomasaru — Consultancy Website

A bilingual (English / සිංහල) website for **Pramuditha Coomasaru**, a Business Analysis & Market Expansion consultant serving entrepreneurs, SME owners and growing businesses in Sri Lanka.

🌐 **Live site:** https://pcooma.com/

## Services featured
- Business Analysis & Process Automation
- Market Expansion & Distribution
- Sales & Data Analytics
- Feasibility & Business Planning

## Features
- **Bilingual** — English by default with a one-click Sinhala toggle (choice saved in the browser).
- **WhatsApp contact** — direct button plus a short form that opens WhatsApp with the visitor's message pre-filled. No backend required.
- **Responsive** — works on mobile, tablet and desktop.
- **Zero dependencies** — plain HTML, CSS and JavaScript. Fonts loaded from Google Fonts (incl. Noto Sans Sinhala).

## Files
| File | Purpose |
|------|---------|
| `index.html` | Page structure and content |
| `styles.css` | Clean corporate (navy / white / gold) styling |
| `script.js` | Language toggle, mobile nav, WhatsApp integration |

## Editing content
All visible text lives in the `I18N` object in `script.js`, keyed by `data-i18n` attributes in `index.html`. Edit the English (`en`) and Sinhala (`si`) strings there to change copy.

To change the WhatsApp number, edit `WA_NUMBER` at the top of `script.js`.

## Hosting
Served via GitHub Pages from the `main` branch root. Any static host (Netlify, Cloudflare Pages, etc.) works too — just serve the folder.

---
*Placeholder monogram is used for the profile image; replace with a professional photo when available.*

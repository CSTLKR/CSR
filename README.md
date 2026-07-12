# CryptoStalker (CSR)

Official website for **CryptoStalker (CSR)** — a fair-launch, community-driven token on the Solana blockchain. Static site hosted on GitHub Pages.

🔗 **Live site:** https://cstlkr.github.io/CSR/

## Structure

| File | Page |
|---|---|
| `index.html` | Landing page — links to all sections, socials, and the "Buy" button |
| `about.html` | Project idea, private community perks, CSR token overview |
| `tokenomics.html` | Supply, allocation, and distribution details |
| `whitepaper.html` | Full whitepaper — blockchain details, tokenomics, roadmap |
| `roadmap.html` | Development roadmap by quarter |
| `favicon.png` / `favicon.ico` | Site icon, used in browser tabs and Google search results |
| `robots.txt` | Crawler rules for search engines |
| `sitemap.xml` | Page list submitted to Google Search Console |
| `google0e1cc6bdd34e658a.html` | Google Search Console site-ownership verification file |

## Tech

Plain HTML/CSS/JS — no build step, no dependencies. Each page is self-contained with inline `<style>`.

## Local preview

Just open `index.html` in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

Hosted via **GitHub Pages** from this repository. Pushing to the default branch updates the live site automatically within a couple of minutes.

## SEO checklist

- [x] Unique `<title>` and `<meta name="description">` per page
- [x] `<h1>` present on every page
- [x] `sitemap.xml` submitted in Google Search Console
- [x] `robots.txt` allows crawling
- [x] Site favicon served from this repo (not a third-party host)
- [ ] Backlinks from crypto listing sites / community channels

## Links

- Twitter/X: https://x.com/CSRcoinOfficial
- Telegram: https://t.me/CRYPTOSTLKR
- TikTok: https://www.tiktok.com/@cryptostalker_csr
- Instagram: https://www.instagram.com/cryptostalker_csr/

# KDrama Companion — Website

A responsive, static promotional site for the **KDrama Companion** Android app.

## Run locally

Open `index.html` in a browser, or use a static file server:

```sh
python -m http.server 8080
```

Visit http://localhost:8080.

## Deploy

The site uses plain HTML, CSS, and JavaScript with no build process or required API keys. It can be hosted on **GitHub Pages**, Cloudflare Pages, Netlify, or any static host.

For GitHub Pages: Repository → Settings → Pages → Deploy from a branch → `main` → `/ (root)`.

## What is included

- Responsive cinematic hero with a CSS-drawn mobile app preview inspired by actual app screenshots
- Feature descriptions for discovery, episode tracking, watchlists, favorites, viewing insights, offline use, backups, and PDF export
- Friends showcase: invitations, recommendations, shared activity, watchlist comparisons, taste compatibility, and privacy settings
- Real screenshot preview of the watchlist, with illustrated insights sample panel
- FAQ, mobile navigation, metadata, accessibility considerations, favicon, and footer
- Google Play **search** links as a safe placeholder until the exact live listing URL is confirmed

## Before announcing the site

1. Replace all Google Play search URLs in `index.html` with the app's **verified direct listing URL**.
2. The actual Android screenshots now appear in the hero, watchlist section and a swipeable gallery. Other illustrative panels still use CSS and do not reproduce real title posters.
3. Add an accurate, publicly hosted privacy policy link after verifying its location.
4. Replace the contact link with the desired support address or support page.
5. Optionally add a custom domain in GitHub Pages.

### Screenshot suggestions

All nine supplied screenshots are included in `assets/` and displayed in the horizontal screenshot gallery. The homepage and watchlist sections also feature real screenshots. The Google account address displayed belongs to the developer's public contact account. For future optimization, convert screenshots to WebP/AVIF and preserve descriptive alt text.

## Credits

Title information in the mobile app is sourced from TMDB; the website notes that TMDB does not endorse or certify the app. Streaming availability is region-dependent.

## License

All rights reserved to the project owner.


## Friends refresh — November 2026

The Friends section reflects functionality checked against the Android app source. Its comparison panel is an illustration, not an actual screenshot or real user data. Existing screenshots predate Friends and can be refreshed when current screenshots are supplied.

All friend-sharing categories are disabled by default. Recommendations do not automatically alter the recipient's watchlist.

The Google Play link is still a search-page placeholder until production is approved. Custom-domain and Android App Links verification are separate future tasks.

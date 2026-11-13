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
- Illustrated watchlist and insights sample panels
- FAQ, mobile navigation, metadata, accessibility considerations, favicon, and footer
- Google Play **search** links as a safe placeholder until the exact live listing URL is confirmed

## Before announcing the site

1. Replace all Google Play search URLs in `index.html` with the app's **verified direct listing URL**.
2. Replace the illustrative previews with supplied optimized screenshots if you want a screenshot-led design. The sample title artwork in the hero and cards is generated with CSS and isn't intended to reproduce real title posters.
3. Add an accurate, publicly hosted privacy policy link after verifying its location.
4. Replace the contact link with the desired support address or support page.
5. Optionally add a custom domain in GitHub Pages.

### Screenshot suggestions

The supplied screenshots show Home, Spotlight, Search, Discover filters, My List, Profile, Viewing Insights, Streaming Preferences, and Backup & Export. For a later iteration, use cropped screenshots converted to WebP/AVIF with meaningful alt text. Avoid publishing screenshots that reveal account email addresses.

## Credits

Title information in the mobile app is sourced from TMDB; the website notes that TMDB does not endorse or certify the app. Streaming availability is region-dependent.

## License

All rights reserved to the project owner.

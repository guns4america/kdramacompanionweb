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
- Verified production Google Play listing links (`com.guns4america.kdrama`)

## Before announcing the site

1. Google Play buttons point to the production listing at `https://play.google.com/store/apps/details?id=com.guns4america.kdrama`.
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

The Google Play links now point directly to the production listing. Custom-domain and Android App Links verification are separate future tasks.

## November 2026 feature refresh

The website now highlights expanded streaming-service discovery, grouped provider preferences, and Google-account synchronization of streaming selections. It also explains that Friends can suggest a non-binding watch priority (Next, Soon, Later) and that recipients can opt in, per friend, to automatically add recommendations to Plan to Watch without recommendation notifications.

The privacy-first claim remains: sharing watchlists, ratings, reviews, and favorite people starts off by default. Automatic recommendation saving is a separate, explicit per-friend option. The site uses an illustrative streaming-preferences panel; the existing nine screenshots remain unchanged until replacement screenshots are supplied.

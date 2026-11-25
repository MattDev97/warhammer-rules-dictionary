# Warhammer 40,000 — 11th Edition Rules Dictionary

A mobile-friendly, unofficial fan reference with 252 terms in 14 categories. Plain HTML, CSS and JavaScript; no dependencies or backend.

## Deploy to GitHub Pages

1. Create a GitHub repository (public for free GitHub Pages).
2. Upload the **contents** of this folder to the repository root, including `index.html`, `app.js`, `styles.css` and `data/`. Commit to `main`.
3. Open Settings → Pages → Build and deployment. Select **Deploy from a branch**, `main`, `/ (root)` and Save.
4. GitHub will show the published URL in Pages settings: `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.

Alternatively, run from this folder:

```sh
git init -b main
git add .
git commit -m "Initial rules dictionary"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

## Local use

Open `index.html` directly, or run `python3 -m http.server 8000` and visit http://localhost:8000. All definitions are local; source links need internet. Hosted pages are not guaranteed to reload offline.

## Editing

Edit `data/rules.json`, then run `node scripts/build-data.mjs` to regenerate the browser data. Commit both files. `styles.css` controls the layout; `app.js` handles navigation, search, favorites and shareable term links. Favorites stay in browser local storage.

## Sources

The existing dictionary content is retained, with rule references to the June 2026 Core Rules and Wahapedia. This packaging update does not re-verify rules. See the app for source links. Unofficial fan project, not affiliated with Games Workshop. Warhammer and related names belong to their respective owners. No official artwork or rulebook PDF is included.

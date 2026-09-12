# 2nd Rossendale Scout Group & Band

Vite + React + TypeScript version of the 2nd Rossendale website, designed for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Vite writes the deployable site to `dist/`.

## GitHub Pages deployment

1. Create a GitHub repository and push this project to the `main` branch.
2. Open **Settings → Pages** in GitHub.
3. Set **Source** to **GitHub Actions**.
4. Push to `main`. The included `.github/workflows/deploy-pages.yml` builds and deploys the site automatically.

Routing uses `react-router-dom` (`BrowserRouter`) with clean URLs such as `/beavers` and `/band`. The build copies `index.html` to `404.html` so GitHub Pages serves the app for deep links. The Vite `base` is `/`, which suits a user/organisation Pages site (`*.github.io`) or a custom domain; change it if deploying under a repository sub-path.

## Maintenance / holding page

Setting `VITE_MAINTENANCE=true` at build time renders `src/pages/Maintenance.tsx` instead of the site. Locally, copy `.env.example` to `.env.local` and flip the value. In production, the workflow reads the repository variable `MAINTENANCE_MODE` (**Settings → Secrets and variables → Actions → Variables**); set it to `true` and re-run the deploy to show the holding page, or `false`/unset to go live.

## Logo

The header currently uses a `LOGO` placeholder in `src/components/Layout.tsx`. Replace it later with an `<img>` referencing an asset placed in `public/`, for example `/logo.svg`.

## Main content

- `src/main.tsx` — router and route definitions
- `src/components/Layout.tsx` — shared header, navigation and footer
- `src/pages/Home.tsx` — homepage
- `src/pages/SectionPage.tsx` — shared Beavers/Cubs/Scouts page component
- `src/pages/Band.tsx` — band page
- `src/pages/Contact.tsx` — contact page
- `src/styles.css` — site styling and `#7413dc` brand colour

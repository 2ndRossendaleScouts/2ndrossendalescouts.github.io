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

The Vite `base` is set to `./`, so the build works both on a project Pages URL such as `username.github.io/repository/` and with a custom domain.

## Logo

The header currently uses a `LOGO` placeholder in `src/components/Layout.tsx`. Replace it later with an `<img>` referencing an asset placed in `public/`, for example `/logo.svg`.

## Main content

- `src/components/Layout.tsx` — shared header, navigation and footer
- `src/pages/Home.tsx` — homepage
- `src/pages/SectionPage.tsx` — shared Beavers/Cubs/Scouts page component
- `src/pages/Band.tsx` — band page
- `src/pages/Contact.tsx` — contact page
- `src/styles.css` — site styling and `#7413dc` brand colour

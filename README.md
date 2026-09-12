# 2nd Rossendale Scout Group & Band — GitHub Pages

Static multi-page site for GitHub Pages.

## Pages
- `index.html` — Home
- `beavers.html` — Beavers
- `cubs.html` — Cubs
- `scouts.html` — Scouts
- `band.html` — Band
- `contact.html` — Contact

## Brand colour
The primary brand colour is `#7413dc`, defined as `--brand` near the top of `styles.css`.

## Replacing the logo
The header currently contains a `.logo-placeholder` element. When your logo is ready, replace:

```html
<span class="logo-placeholder">LOGO</span>
```

with something like:

```html
<img src="assets/logo.png" alt="2nd Rossendale Scout Group and Band" width="52" height="52">
```

Create an `assets` directory and add the image there.

## GitHub Pages
Upload these files to the repository root, then enable GitHub Pages in **Settings → Pages**, using the main branch and root directory.

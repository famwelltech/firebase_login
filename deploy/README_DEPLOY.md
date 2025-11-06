# Deploying famwell_web (Create React App) to HostArmada cPanel

This app is built with CRA (react-scripts). Deploy by uploading the production `build/` output and adding an `.htaccess` rewrite for SPA routes.

## 1) Build locally

```powershell
# from project root
npm install
npm run build
```

The `build/` folder will contain `index.html`, `static/`, etc.

## 2) Upload via cPanel File Manager

Choose ONE of the following placements:

- Root domain (https://yourdomain.com)
  - Upload the CONTENTS of `build/` into `public_html/`.
  - Rename `deploy/htaccess-spa.txt` to `.htaccess` and place it in `public_html/`.

- Subfolder (https://yourdomain.com/famwell)
  - Create `public_html/famwell/` and upload the CONTENTS of `build/` there.
  - Put `.htaccess` inside `public_html/famwell/`.
  - If deploying to a subpath, either set `basename` on `BrowserRouter` or set `"homepage"` in `package.json` to the final URL and rebuild.

- Subdomain (https://app.yourdomain.com)
  - Create a subdomain in cPanel; it will have a document root such as `public_html/app/`.
  - Upload the CONTENTS of `build/` there and add `.htaccess`.

## 3) Routing options for subdirectories

- Recommended: `BrowserRouter` with `basename` (e.g., `/famwell`) so links resolve under a subpath.
- Alternative: add `"homepage": "https://yourdomain.com/famwell"` in `package.json`, then `npm run build` to rewrite asset paths.
- Fallback: switch to `HashRouter` if you cannot add `.htaccess`.

## 4) .htaccess

Use the template at `deploy/htaccess-spa.txt`. Upload as `.htaccess` to the same folder that contains `index.html`.

## 5) Verify

- Open the site root and a deep link like `/services` directly (no 404).
- If deployed under a subfolder and routes 404, ensure `.htaccess` is in that subfolder and `basename`/`homepage` is configured.

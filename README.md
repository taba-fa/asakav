# Asakaw corporate homepage prototype (HTML + Tailwind CSS)

A static, RTL Persian homepage prototype inspired by premium engineering and infrastructure websites: bold editorial typography, spacious layouts, large-number metrics, image-led industry content, and a curated news grid. The direction takes inspiration from the visual principles of Jacobs while keeping Asakaw's own brand, content, and palette.

## Preview locally

1. Unzip this folder.
2. Open `index.html` in a modern browser, or run a small local server from this folder:
   - Python: `python -m http.server 8000`
   - Then open `http://localhost:8000`.
3. Tailwind Play CDN and Google Fonts are used for quick prototyping, so an internet connection is required for those external resources.

## Publish with GitHub Pages

1. Create a **public** GitHub repository and upload the contents of this folder (the `index.html` file must be at the repository root).
2. Open **Settings → Pages**.
3. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. GitHub Pages will publish the site; its URL appears in the Pages panel.

## Images and video

The page has remote fallbacks for the hero, About, industry and news images so it can be previewed without your original asset directory. For a self-contained version, copy your existing images into `images/` using the filenames below.

- `about.jpg`, `hero-1.webp`
- `project-jam.jpg`, `project-steel.jpg`, `project-power.jpg`, `project-oil.jpg`
- `client-mobarakeh-logo.jfif`, `client-jam-logo.jfif`, `client-gas-logo.jfif`, `client-tavanir-logo.jfif`, `client-lavan-logo.jfif`, `client-rail-logo.jfif`
- `credential-consult.jpg`, `credential-contract.jpg`, `credential-hse.jpg`

To use a background video, place an MP4 at `videos/industrial-hero.mp4`. The hero retains its image fallback if this file is missing.

## Notes

- This is a **front-end prototype**. Contact links open email/phone apps; it does not have server-side form handling or a CMS.
- The interactive industry selector, animated statistics, moving client logos, certificate preview modal, and clickable Iran project map use plain JavaScript.
- The page is Persian and RTL. Navigation anchors work on GitHub Pages without a backend.
- Some images use the official `asa-eng.com` website or Unsplash as preview fallbacks. Replace these with approved, locally hosted brand assets before production.

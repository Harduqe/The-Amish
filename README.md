# Lancaster Amish — Responsible Tourism Guide

A bilingual (English/Spanish) educational guide to Lancaster County, Pennsylvania. The site is a static Vite, React and TypeScript application.

## Run locally

```sh
npm ci
npm run dev
```

Available checks and production commands:

```sh
npm run typecheck
npm run lint
npm run build
npm run preview
```

The production build is written to `dist/`. There is no separate test script.

## Optional educational video

The final video has not yet been supplied. The video section remains useful without it: visitors can read the bilingual narration, subtitle summaries and transcript, along with production suggestions.

When the media is ready, set these optional variables in a local `.env.local` file or the Vercel project settings:

- `VITE_EDUCATIONAL_VIDEO_URL`: direct HTTPS URL to a public MP4 file.
- `VITE_EDUCATIONAL_VIDEO_CAPTIONS_EN`: direct HTTPS URL to an English WebVTT (`.vtt`) captions file.

Leave the values empty until the media is available. These `VITE_*` values are included in the browser bundle; never put secrets or credentials in them. See `.env.example` for the blank template. If the media cannot be loaded, the transcript remains available.

## Optional Street View panorama

The region viewer displays Google Street View panoramas for selected public visitor locations when `VITE_GOOGLE_MAPS_EMBED_API_KEY` is configured in `.env.local` or the deployment environment. Enable the Maps Embed API and restrict the browser-visible key to the Embed API and the site's allowed HTTP referrers. This key is included in the browser bundle and must not be treated as a secret. Without it, the viewer shows a bilingual setup message and no map. Street View shows captured imagery, not a live feed; panorama coverage and capture dates can vary.

## Vercel Preview settings

Connect the GitHub repository and use the project root containing this `package.json`:

- Framework preset: **Vite**
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`

The page uses in-page hash navigation and does not need `vercel.json` or rewrite rules. Add the optional video variables only after the final public media URLs are available. A Preview deployment still needs to be opened and checked in Vercel before it can be considered verified.

## Content and sources

English and Spanish site content is maintained in `src/content.ts`; page sections are composed in `src/components/`. Source links are provided in the guide. Open questions about figures, local practices, image credits and transport claims are tracked in `todo.md`.

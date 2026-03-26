# CursorToys Website

Marketing and docs site for CursorToys, built with Next.js (App Router) and optimized for Vercel deployment.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

- `npm run dev` - start development server
- `npm run build` - production build
- `npm run start` - serve production build
- `npm run lint` - run ESLint

## Main routes

- `/` - landing page
- `/features` - feature breakdown
- `/docs` - quick start docs and deeplink test
- `/changelog` - product release highlights

## Deeplink CTA

The main call to action uses the Cursor deeplink protocol:

`cursor://anysphere.cursor-deeplink/...`

Browsers may prompt for permission to open custom protocols.

## Deploy to Vercel

When importing this repository in Vercel:

1. Set **Root Directory** to `web`.
2. Use the default Next.js framework settings.
3. Build command: `npm run build`.
4. Output directory: `.next`.

Then deploy.

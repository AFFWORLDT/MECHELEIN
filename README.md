# Mechelein Technical Services website

One-page marketing site for Mechelein Technical Services (MTS), a technical services company in Dubai.
Built with Next.js (App Router) and exported as a static site.

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/
```

The build in `out/` needs no server, so it can be hosted on any static host
(Vercel, Netlify, cPanel, S3). On Vercel no settings are needed.

## Where things are

- `lib/content.ts`: every heading, paragraph, service, FAQ answer and photo path.
  Edit copy here, not in the components.
- `components/`: one component per part of the page. `SiteNav`, `RequestForm`, `ActionBar` and
  `Motion` are client components (menu, form, phone button, animations); the rest render at build time.
- `app/globals.css`: the whole stylesheet.
- `public/assets/`: the client's logo (cut into the MTS mark and the wordmark) and the photographs.

## Before going live

- Set `FORM_TO` in `lib/content.ts` to MTS's real email. The form has no backend: it opens the
  visitor's email app with the request filled in. Swap in a form service if you want submissions
  sent directly.
- The photographs are Unsplash stand-ins. Replace them in `public/assets/img/` with MTS's own
  site photos, keeping the same file names.

# Mechelein Technical Services website

Website for Mechelein Technical Services (MTS), a technical services company in Dubai.
Built with Next.js (App Router) and exported as a static site: 30 pages, every one prerendered.

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/
```

The build in `out/` needs no server, so it can be hosted on any static host
(Vercel, Netlify, cPanel, S3). Each page is a folder (`/about/` is `out/about/index.html`),
so direct visits and refreshes work everywhere.

## Pages

| Section | Pages |
| --- | --- |
| Core | Home, About, How we work, FAQ, Contact, Privacy, Terms |
| Services | Overview + AC & HVAC, Electrical, Plumbing, MEP installation, Interior fit-out, Building maintenance |
| Sectors | Overview + Residential, Commercial, Industrial |
| Guides | Overview + 11 practical guides for Dubai property owners |

## Where things are

- `lib/site.ts`: site name, domain, navigation, the request email (`FORM_TO`) and the business's structured data.
- `lib/content.ts`: home page copy, the process steps, About points and general FAQs.
- `lib/services.ts`, `lib/sectors.ts`, `lib/guides.ts`: one entry per page. Add an entry and the page,
  its links and its sitemap entry are created on the next build.
- `components/`: one component per part of the page. `SiteNav`, `RequestForm`, `ActionBar` and
  `Motion` are client components (menu, form, phone button, animations); the rest render at build time.
- `app/`: the routes. `app/sitemap.ts` and `app/robots.ts` generate `sitemap.xml` and `robots.txt`.
- `app/globals.css`: the whole stylesheet.
- `public/assets/`: the client's logo (cut into the MTS mark and the wordmark) and the photographs.

## SEO

- Every page has its own title, description, canonical link and social preview (`lib/seo.ts`).
- Structured data: the business on every page, plus breadcrumbs, services, FAQs and articles where they apply.
- `sitemap.xml` lists every page; `robots.txt` points to it.

## Before going live

- **Set the domain.** Build with `NEXT_PUBLIC_SITE_URL` set to the live address, for example
  `NEXT_PUBLIC_SITE_URL=https://www.yourdomain.ae npm run build` (or add it as an environment variable on
  Vercel). Canonical links, the sitemap and social previews use it.
- Set `FORM_TO` in `lib/site.ts` to MTS's real email. The form has no backend: it opens the
  visitor's email app with the request filled in. Swap in a form service if you want submissions
  sent directly.
- Have the privacy policy and terms (`app/privacy`, `app/terms`) reviewed.
- The photographs are Unsplash stand-ins. Replace them in `public/assets/img/` with MTS's own
  site photos, keeping the same file names.
- After launch, submit the sitemap in Google Search Console and set up a Google Business Profile.

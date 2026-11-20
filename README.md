# DailyDudh website

Public website for **dailydudh.in**: English (`/`), Hindi (`/hi`), Marathi (`/mr`), plus a privacy page in each.
Fully static: `next build` writes plain HTML to `out/`, hosted on Netlify. The app itself lives at `app.dailydudh.in`
(separate repo).

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # → out/
npm start          # serve out/ locally to check the real build
```

## Edit

| What | Where |
|---|---|
| Email, WhatsApp number, app link, dates (privacy, sitemap) | `src/config/site.ts` |
| All text, per language | `src/content/en.ts`, `hi.ts`, `mr.ts` (same shape; TypeScript flags a missing field) |
| Page layout / sections | `src/components/home.tsx` |
| Phone + bill illustration | `src/components/mocks.tsx` (drawn in code, no real data) |
| Colours, fonts | `src/app/globals.css` |

## SEO

Already built in, nothing to do per page:
- Title and description per language (`meta` in `src/content/*.ts`), canonical URL, `hreflang` links between
  English/Hindi/Marathi (+ `x-default`), `Content-Language` headers (`netlify.toml`).
- Social previews (WhatsApp, Facebook, X): `public/og/{en,hi,mr}.jpg` are screenshots of each language's hero
  (top of the page at 1440 px wide, cropped to 1200 × 630, JPEG under 300 KB so WhatsApp shows them).
  Retake them after changing the hero.
- Structured data (JSON-LD): Organization, WebSite, SoftwareApplication and FAQPage (`src/components/structured-data.tsx`).
- `sitemap.xml` (with language alternates; bump `SITE.contentUpdated` after content changes) and `robots.txt`.

**One-time, after the site is live:**
1. **Google Search Console** → Add property → *Domain* `dailydudh.in` → copy the TXT record → Cloudflare DNS → add it
   (TXT, name `@`) → Verify. Then *Sitemaps* → submit `https://dailydudh.in/sitemap.xml`.
2. **Bing Webmaster Tools** → *Import from Google Search Console* (one click) — also covers Clarity's Bing link.
3. Check a share preview: paste `https://dailydudh.in` into WhatsApp, or use the Facebook Sharing Debugger.

## Analytics (Microsoft Clarity)

Set `NEXT_PUBLIC_CLARITY_PROJECT_ID` in Netlify (Site configuration → Environment variables) and redeploy; without it
nothing loads. Disclosed in the privacy policy. Use a separate Clarity project from the app (`app.dailydudh.in`).

## Deploy (Netlify)

1. Push this folder to its own GitHub repo.
2. Netlify → Add new site → import the repo. Build settings come from `netlify.toml` (`npm run build`, publish `out`, Node 22).
3. Domain: add `dailydudh.in` and `www.dailydudh.in` (www redirects to the main domain). Netlify issues HTTPS.

## Before going public

- Create the mailbox in `SITE.email` (currently hello@dailydudh.in) or change it.
- Set `SITE.whatsapp` if you want a WhatsApp button (hidden while empty).
- `SITE.appUrl` points to app.dailydudh.in. Make sure it's live, or point it at the test site for now.
- The privacy policy is a plain-language draft that matches what the app stores. Have it reviewed before onboarding
  businesses outside friends and family.

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
| Email, WhatsApp number, app link, privacy date | `src/config/site.ts` |
| All text, per language | `src/content/en.ts`, `hi.ts`, `mr.ts` (same shape; TypeScript flags a missing field) |
| Page layout / sections | `src/components/home.tsx` |
| Phone + bill illustration | `src/components/mocks.tsx` (drawn in code, no real data) |
| Colours, fonts | `src/app/globals.css` |

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

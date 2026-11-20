import { href, LOCALE_LABEL, LOCALES, SITE, type Locale } from "@/config/site";
import type { Content } from "@/content";
import { Logo } from "./header";

export function Footer({ locale, t }: { locale: Locale; t: Content }) {
  return (
    <footer className="border-t border-line bg-white px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-muted">{t.footer.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <a href={href(locale, "privacy")} className="text-muted hover:text-ink">
            {t.footer.privacy}
          </a>
          <a href={`mailto:${SITE.email}`} className="text-muted hover:text-ink">
            {SITE.email}
          </a>
          <a href={SITE.appUrl} className="text-muted hover:text-ink">
            {t.nav.openApp}
          </a>
        </div>
        <div className="flex gap-2 text-sm">
          {LOCALES.map((l) => (
            <a key={l} href={href(l)} hrefLang={l} lang={l} className={l === locale ? "font-semibold text-ink" : "text-muted hover:text-ink"}>
              {LOCALE_LABEL[l]}
            </a>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-muted">
        © {new Date().getFullYear()} {SITE.name}. {t.footer.rights}
      </p>
    </footer>
  );
}

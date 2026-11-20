import type { Metadata } from "next";
import { CONTENT } from "@/content";
import { href, LOCALES, SITE, type Locale } from "./site";

/** Title, description, canonical URL, language alternates (hreflang) and social preview for a page. */
export function pageMetadata(locale: Locale, page: "home" | "privacy"): Metadata {
  const t = CONTENT[locale];
  const title = page === "home" ? t.meta.title : `${t.privacy.title} · ${SITE.name}`;
  const languages = Object.fromEntries(LOCALES.map((l) => [`${l}-IN`, href(l, page)]));
  return {
    title,
    description: t.meta.description,
    alternates: { canonical: href(locale, page), languages: { ...languages, "x-default": href("en", page) } },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      title,
      description: t.meta.description,
      url: href(locale, page),
      locale: `${locale}_IN`,
    },
  };
}

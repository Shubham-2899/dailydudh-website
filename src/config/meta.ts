import type { Metadata } from "next";
import { CONTENT } from "@/content";
import { href, LOCALE_TAG, LOCALES, SITE, type Locale } from "./site";

/** Language versions of a page, for hreflang (metadata) and the sitemap. English is also the default. */
export function languageAlternates(page: "home" | "privacy", absolute = false): Record<string, string> {
  const url = (l: Locale) => (absolute ? SITE.url : "") + href(l, page);
  return { ...Object.fromEntries(LOCALES.map((l) => [LOCALE_TAG[l], url(l)])), "x-default": url("en") };
}

/** Title, description, canonical URL, hreflang alternates and social previews (WhatsApp, Facebook, X) for a page. */
export function pageMetadata(locale: Locale, page: "home" | "privacy"): Metadata {
  const t = CONTENT[locale];
  const title = page === "home" ? t.meta.title : `${t.privacy.title} · ${SITE.name}`;
  const image = { url: `/og/${locale}.jpg`, width: 1200, height: 630, type: "image/jpeg", alt: t.meta.ogAlt };
  const description = page === "home" ? t.meta.description : t.privacy.intro;
  return {
    title,
    description,
    alternates: { canonical: href(locale, page), languages: languageAlternates(page) },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      title,
      description,
      url: href(locale, page),
      locale: LOCALE_TAG[locale].replace("-", "_"),
      alternateLocale: LOCALES.filter((l) => l !== locale).map((l) => LOCALE_TAG[l].replace("-", "_")),
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
    robots: { index: true, follow: true },
    category: "business",
  };
}

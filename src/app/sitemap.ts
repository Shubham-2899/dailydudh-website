import type { MetadataRoute } from "next";
import { languageAlternates } from "@/config/meta";
import { href, LOCALES, SITE } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return (["home", "privacy"] as const).flatMap((page) =>
    LOCALES.map((l) => ({
      url: SITE.url + href(l, page),
      lastModified: page === "privacy" ? SITE.privacyUpdated : SITE.contentUpdated,
      changeFrequency: "monthly" as const,
      priority: page === "home" ? 1 : 0.3,
      alternates: { languages: languageAlternates(page, true) },
    })),
  );
}

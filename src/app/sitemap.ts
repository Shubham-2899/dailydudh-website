import type { MetadataRoute } from "next";
import { href, LOCALES, SITE } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return (["home", "privacy"] as const).flatMap((page) =>
    LOCALES.map((l) => ({
      url: SITE.url + href(l, page),
      alternates: { languages: Object.fromEntries(LOCALES.map((x) => [x, SITE.url + href(x, page)])) },
    })),
  );
}

import { href, LOCALE_TAG, SITE, type Locale } from "@/config/site";
import { CONTENT } from "@/content";

/**
 * schema.org data for search engines (JSON-LD): who we are, the site, the app, and the FAQ — in the page's language.
 * Only facts that are true today (no prices, ratings or reviews).
 */
export function StructuredData({ locale }: { locale: Locale }) {
  const t = CONTENT[locale];
  const pageUrl = SITE.url + href(locale);
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#org`,
        name: SITE.name,
        url: SITE.url,
        logo: `${SITE.url}/logo.svg`,
        email: SITE.email,
        areaServed: "IN",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        name: SITE.name,
        url: SITE.url,
        inLanguage: ["en-IN", "hi-IN", "mr-IN"],
        publisher: { "@id": `${SITE.url}/#org` },
      },
      {
        "@type": "SoftwareApplication",
        name: SITE.name,
        url: SITE.appUrl,
        description: t.meta.description,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Android, iOS, Web",
        inLanguage: ["en", "hi", "mr"],
        featureList: t.features.items.map((f) => f.title),
        publisher: { "@id": `${SITE.url}/#org` },
      },
      {
        "@type": "FAQPage",
        url: pageUrl,
        inLanguage: LOCALE_TAG[locale],
        mainEntity: t.faq.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };
  // JSON.stringify output is safe here; "<" is escaped so content can never close the script tag.
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

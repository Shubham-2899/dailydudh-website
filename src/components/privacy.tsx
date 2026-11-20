import { ArrowLeft } from "lucide-react";
import { href, SITE, type Locale } from "@/config/site";
import { CONTENT } from "@/content";
import { Footer } from "./footer";
import { Header } from "./header";

export function Privacy({ locale }: { locale: Locale }) {
  const t = CONTENT[locale];
  const updated = new Date(SITE.privacyUpdated).toLocaleDateString(locale === "en" ? "en-IN" : `${locale}-IN`, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div lang={locale}>
      <Header locale={locale} t={t} page="privacy" />
      <main className="px-4 py-14 sm:px-6 sm:py-20">
        <article className="mx-auto max-w-3xl rounded-3xl bg-white p-7 shadow-sm ring-1 ring-line sm:p-12">
          <a href={href(locale)} className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline">
            <ArrowLeft className="size-4" /> {t.privacy.back}
          </a>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">{t.privacy.title}</h1>
          <p className="mt-2 text-sm text-muted">
            {t.privacy.updated}: {updated}
          </p>
          <p className="mt-6 text-lg text-muted">{t.privacy.intro}</p>
          {t.privacy.sections.map((s) => (
            <section key={s.title} className="mt-9">
              <h2 className="text-xl font-bold">{s.title}</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-muted marker:text-brand">
                {s.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </section>
          ))}
        </article>
      </main>
      <Footer locale={locale} t={t} />
    </div>
  );
}

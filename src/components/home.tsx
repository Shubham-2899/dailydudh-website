import {
  ArrowRight,
  BellRing,
  Check,
  ChevronDown,
  CloudOff,
  Mail,
  MessageCircle,
  QrCode,
  ReceiptText,
  Route,
  Store,
  Truck,
  Users,
  Wallet,
} from "lucide-react";
import { SITE, type Locale } from "@/config/site";
import { CONTENT } from "@/content";
import { Footer } from "./footer";
import { Header } from "./header";
import { HeroMock } from "./mocks";
import { StructuredData } from "./structured-data";

const FEATURE_ICONS = [Route, CloudOff, BellRing, ReceiptText, QrCode, Wallet];

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`px-4 py-20 sm:px-6 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Heading({ title, subtitle, center = true }: { title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted">{subtitle}</p>}
    </div>
  );
}

export function Home({ locale }: { locale: Locale }) {
  const t = CONTENT[locale];
  const mail = `mailto:${SITE.email}?subject=${encodeURIComponent(t.cta.mailSubject)}`;

  return (
    <div lang={locale}>
      <StructuredData locale={locale} />
      <Header locale={locale} t={t} />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-4 pt-10 pb-20 sm:px-6 sm:pt-16 lg:pb-28">
          <div className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-gradient-to-b from-brand-soft via-paper to-paper" />
          <div className="absolute top-20 -left-24 -z-10 size-72 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-brand shadow-sm ring-1 ring-brand/15">
                <Truck className="size-4" /> {t.hero.eyebrow}
              </p>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                {t.hero.title} <span className="bg-gradient-to-r from-brand to-sky-500 bg-clip-text text-transparent">{t.hero.highlight}</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">{t.hero.subtitle}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={mail}
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-brand px-7 text-base font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-dark"
                >
                  {t.hero.primary} <ArrowRight className="size-4" />
                </a>
                <a
                  href="#how"
                  className="inline-flex h-13 items-center justify-center rounded-full bg-white px-7 text-base font-semibold ring-1 ring-line transition hover:ring-brand/40"
                >
                  {t.hero.secondary}
                </a>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-muted">
                {t.hero.badges.map((b) => (
                  <li key={b} className="flex items-center gap-1.5">
                    <Check className="size-4 text-good" /> {b}
                  </li>
                ))}
              </ul>
            </div>
            <HeroMock t={t.mock} />
          </div>
        </section>

        {/* Features */}
        <Section id="features" className="bg-white">
          <Heading title={t.features.title} subtitle={t.features.subtitle} />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.items.map((f, i) => {
              const Icon = FEATURE_ICONS[i];
              return (
                <div key={f.title} className="group rounded-3xl border border-line bg-paper/60 p-7 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-xl hover:shadow-brand/5">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-brand text-white shadow-md shadow-brand/25">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
                  <p className="mt-2 text-muted">{f.body}</p>
                </div>
              );
            })}
          </div>
        </Section>

        {/* Who sees what */}
        <Section>
          <Heading title={t.team.title} subtitle={t.team.subtitle} />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              { ...t.team.owner, Icon: Store, tone: "bg-brand text-white", card: "bg-ink text-white", muted: "text-slate-300" },
              { ...t.team.helper, Icon: Truck, tone: "bg-brand-soft text-brand", card: "bg-white ring-1 ring-line", muted: "text-muted" },
              { ...t.team.customer, Icon: Users, tone: "bg-emerald-50 text-good", card: "bg-white ring-1 ring-line", muted: "text-muted" },
            ].map(({ title, points, Icon, tone, card, muted }) => (
              <div key={title} className={`rounded-3xl p-7 ${card}`}>
                <span className={`flex size-12 items-center justify-center rounded-2xl ${tone}`}>
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <ul className="mt-4 space-y-3">
                  {points.map((p) => (
                    <li key={p} className={`flex gap-2.5 ${muted}`}>
                      <Check className="mt-1 size-4 shrink-0 text-good" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* How it works */}
        <Section id="how" className="bg-white">
          <Heading title={t.how.title} subtitle={t.how.subtitle} />
          <ol className="relative mt-14 grid gap-8 md:grid-cols-4 md:gap-6">
            <div className="absolute top-6 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-brand/10 via-brand/40 to-brand/10 md:block" aria-hidden />
            {t.how.steps.map((s, i) => (
              <li key={s.title} className="relative text-center">
                <span className="relative mx-auto flex size-12 items-center justify-center rounded-full bg-brand text-lg font-extrabold text-white ring-8 ring-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Languages */}
        <Section>
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand to-brand-dark px-6 py-14 text-white sm:px-14">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{t.languages.title}</h2>
                <p className="mt-4 text-lg text-blue-100">{t.languages.subtitle}</p>
              </div>
              <div className="space-y-3">
                {[
                  { lang: "hi", text: "आज की डिलीवरी", label: "हिन्दी" },
                  { lang: "mr", text: "आजची डिलिव्हरी", label: "मराठी" },
                  { lang: "en", text: "Today's delivery", label: "English" },
                ].map((x) => (
                  <div key={x.lang} lang={x.lang} className="flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4 ring-1 ring-white/15 backdrop-blur">
                    <span className="text-xl font-bold sm:text-2xl">{x.text}</span>
                    <span className="rounded-full bg-white/15 px-3 py-1 text-sm">{x.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq" className="bg-white">
          <Heading title={t.faq.title} />
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-line rounded-3xl border border-line bg-paper/50">
            {t.faq.items.map((f) => (
              <details key={f.q} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
                  {f.q}
                  <ChevronDown className="chev size-5 shrink-0 text-muted transition-transform" />
                </summary>
                <p className="mt-3 text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact">
          <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-center text-white sm:px-14">
            <div className="absolute -top-24 -right-24 size-72 rounded-full bg-brand/40 blur-3xl" aria-hidden />
            <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-sky-500/20 blur-3xl" aria-hidden />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{t.cta.title}</h2>
              <p className="mt-4 text-lg text-slate-300">{t.cta.body}</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a href={mail} className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white px-7 font-semibold text-ink transition hover:bg-brand-soft">
                  <Mail className="size-5" /> {t.cta.email}
                </a>
                {SITE.whatsapp && (
                  <a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 font-semibold text-ink transition hover:brightness-95"
                  >
                    <MessageCircle className="size-5" /> {t.cta.whatsapp}
                  </a>
                )}
              </div>
              <p className="mt-5 text-sm text-slate-400">{SITE.email}</p>
            </div>
          </div>
        </Section>
      </main>

      <Footer locale={locale} t={t} />
    </div>
  );
}

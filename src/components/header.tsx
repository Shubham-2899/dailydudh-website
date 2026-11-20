"use client";

import { Globe, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { href, LOCALE_LABEL, LOCALES, SITE, type Locale } from "@/config/site";
import type { Content } from "@/content";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <img src="/logo.svg" alt="" width={36} height={36} className="size-9 rounded-xl" />
      <span className="text-lg font-extrabold tracking-tight">{SITE.name}</span>
    </span>
  );
}

function LanguageLinks({ locale, page, onPick }: { locale: Locale; page: "home" | "privacy"; onPick?: () => void }) {
  return (
    <>
      {LOCALES.map((l) => (
        <a
          key={l}
          href={href(l, page)}
          hrefLang={l}
          lang={l}
          onClick={onPick}
          aria-current={l === locale ? "true" : undefined}
          className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
            l === locale ? "bg-ink text-white" : "text-muted hover:bg-brand-soft hover:text-brand"
          }`}
        >
          {LOCALE_LABEL[l]}
        </a>
      ))}
    </>
  );
}

export function Header({ locale, t, page = "home" }: { locale: Locale; t: Content; page?: "home" | "privacy" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: href(locale, "home", "#features"), label: t.nav.features },
    { href: href(locale, "home", "#how"), label: t.nav.how },
    { href: href(locale, "home", "#faq"), label: t.nav.faq },
    { href: href(locale, "home", "#contact"), label: t.nav.contact },
  ];

  return (
    <header className={`sticky top-0 z-40 transition-all ${scrolled || open ? "border-b border-line bg-white/85 backdrop-blur-lg" : "bg-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href={href(locale)} aria-label={SITE.name}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-0.5 rounded-full border border-line bg-white p-1 md:flex" aria-label={t.nav.language}>
            <LanguageLinks locale={locale} page={page} />
          </div>
          <a
            href={SITE.appUrl}
            className="hidden h-10 items-center rounded-full bg-brand px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark sm:inline-flex"
          >
            {t.nav.openApp}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-white lg:hidden"
            aria-expanded={open}
            aria-label={t.nav.menu}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-4 pt-2 pb-5 lg:hidden">
          <nav className="flex flex-col" aria-label="Main">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-base font-medium hover:bg-paper">
                {l.label}
              </a>
            ))}
          </nav>
          <p className="mt-3 flex items-center gap-2 px-3 text-xs font-semibold tracking-wide text-muted uppercase">
            <Globe className="size-3.5" /> {t.nav.language}
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5 px-2">
            <LanguageLinks locale={locale} page={page} onPick={() => setOpen(false)} />
          </div>
          <a href={SITE.appUrl} className="mt-4 flex h-12 items-center justify-center rounded-full bg-brand font-semibold text-white">
            {t.nav.openApp}
          </a>
        </div>
      )}
    </header>
  );
}

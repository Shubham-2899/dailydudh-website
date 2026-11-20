// Everything you may need to change in one place.
export const SITE = {
  name: "DailyDudh",
  url: "https://dailydudh.in",
  /** The app itself. Until production is live this can point at the test site. */
  appUrl: "https://app.dailydudh.in",
  /** Contact email shown on the site. Make sure this mailbox exists before publishing. */
  email: "hello@dailydudh.in",
  /** WhatsApp number for "Chat with us" (digits with country code, e.g. "919876543210"). Leave empty to hide. */
  whatsapp: "",
  privacyUpdated: "2026-11-20",
} as const;

export const LOCALES = ["en", "hi", "mr"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_LABEL: Record<Locale, string> = { en: "English", hi: "हिन्दी", mr: "मराठी" };

/** URL of a page in a language. English lives at the root, others under /hi and /mr. */
export function href(locale: Locale, page: "home" | "privacy" = "home", hash = ""): string {
  const base = locale === "en" ? "" : `/${locale}`;
  const path = page === "privacy" ? `${base}/privacy` : base || "/";
  return path + hash;
}

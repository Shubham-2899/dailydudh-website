export type Content = {
  meta: { title: string; description: string; ogAlt: string };
  nav: { features: string; how: string; faq: string; contact: string; openApp: string; menu: string; language: string };
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    primary: string;
    secondary: string;
    badges: string[];
  };
  mock: {
    today: string;
    tomorrow: string;
    delivered: string;
    markDelivered: string;
    houses: { code: string; place: string; qty: string; product: string }[];
    billTitle: string;
    billMonth: string;
    billTotal: string;
    payUpi: string;
    offline: string;
  };
  features: { title: string; subtitle: string; items: { title: string; body: string }[] };
  team: {
    title: string;
    subtitle: string;
    owner: { title: string; points: string[] };
    helper: { title: string; points: string[] };
    customer: { title: string; points: string[] };
  };
  how: { title: string; subtitle: string; steps: { title: string; body: string }[] };
  languages: { title: string; subtitle: string; sample: string };
  faq: { title: string; items: { q: string; a: string }[] };
  cta: { title: string; body: string; email: string; whatsapp: string; mailSubject: string };
  footer: { tagline: string; privacy: string; rights: string };
  privacy: {
    title: string;
    /** Search result snippet, 120–155 characters. */
    metaDescription: string;
    updated: string;
    intro: string;
    sections: { title: string; body: string[] }[];
    back: string;
  };
};

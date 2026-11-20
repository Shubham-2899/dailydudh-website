import { SITE } from "@/config/site";
import type { Content } from "./types";

export const en: Content = {
  meta: {
    title: "DailyDudh: Milk Delivery & Billing App for Milkmen and Dairies",
    description:
      "Milk delivery app for milkmen: an offline delivery list for helpers, monthly bills on WhatsApp and UPI payments. In Hindi, Marathi and English.",
    ogAlt: "DailyDudh app: daily milk delivery list and a monthly bill with UPI QR code",
  },
  nav: { features: "Features", how: "How it works", faq: "Questions", contact: "Contact", openApp: "Open app", menu: "Menu", language: "Language" },
  hero: {
    eyebrow: "For milk suppliers and dairies",
    title: "Daily milk delivery and monthly bills,",
    highlight: "without the notebook.",
    subtitle:
      "Your helpers get a simple delivery list that works even without internet. At month end, DailyDudh turns every delivery into a bill your customers can pay by UPI.",
    primary: "Get early access",
    secondary: "See how it works",
    badges: ["Works offline", "हिन्दी · मराठी · English", "Android & iPhone"],
  },
  mock: {
    today: "Today",
    tomorrow: "Tomorrow",
    delivered: "18 of 42 delivered",
    markDelivered: "Mark delivered",
    houses: [
      { code: "A101", place: "Green Park A-101", qty: "1 L", product: "Cow milk" },
      { code: "B204", place: "Green Park B-204", qty: "1.5 L", product: "Buffalo milk" },
      { code: "C302", place: "Shanti Nagar C-302", qty: "0.5 L", product: "Cow milk" },
    ],
    billTitle: "Bill · A101",
    billMonth: "October",
    billTotal: "Total due",
    payUpi: "Pay by UPI",
    offline: "Offline: ticks saved",
  },
  features: {
    title: "Everything a milk round needs",
    subtitle: "Built with milk suppliers for the way the work really happens: early mornings, stairwells without signal, and busy month ends.",
    items: [
      { title: "Delivery list in route order", body: "Helpers see houses in the order they walk, with today's quantity. One tap marks a house delivered." },
      { title: "Works without internet", body: "Ticks are saved on the phone and sent when the signal is back. Nothing is lost in a lift or a basement." },
      { title: "Changes in seconds", body: "Extra milk, skip a day or a holiday break? Change it once and your helpers get an alert on their phone." },
      { title: "Bills that add up", body: "Bills are made from actual deliveries and the rate on each day. Check them, finalize, done." },
      { title: "Send on WhatsApp, paid by UPI", body: "Each bill is a link with a UPI QR code. Customers pay from any UPI app, with nothing to install." },
      { title: "Know who still owes", body: "Payments, receipts and dues in one place, with a weekly reminder of what is left to collect." },
    ],
  },
  team: {
    title: "One app, the right view for everyone",
    subtitle: "Everyone sees what they need, and nothing they shouldn't.",
    owner: { title: "You, the owner", points: ["Customers, rates and routes", "Bills, payments and dues", "What to pick up for tomorrow"] },
    helper: { title: "Your helpers", points: ["Today's houses in route order", "Quantities only. No money, no phone numbers", "Works offline on any phone"] },
    customer: { title: "Your customers", points: ["Bill link on WhatsApp", "Pay by any UPI app", "Receipt for every payment"] },
  },
  how: {
    title: "Up and running in a day",
    subtitle: "We set it up with you. Your customers don't have to do anything.",
    steps: [
      { title: "Add your customers", body: "Import your list from Excel or add houses one by one, with their daily milk." },
      { title: "Deliver every morning", body: "Helpers mark each house on their phone. You see progress live." },
      { title: "Bills at month end", body: "Make all bills in one go, check them and send them on WhatsApp." },
      { title: "Collect payments", body: "Customers pay by UPI; you record payments and see who still owes." },
    ],
  },
  languages: {
    title: "Speaks your language",
    subtitle: "Delivery screens and customer messages in Hindi, Marathi and English. Everyone picks their own.",
    sample: "Today's delivery",
  },
  faq: {
    title: "Questions",
    items: [
      { q: "Do my customers need to install anything?", a: "No. They receive their bill as a WhatsApp link and pay with the UPI app they already use." },
      { q: "Does it work without internet?", a: "Yes, for deliveries. Helpers can keep marking houses without signal; everything is sent when the phone is back online." },
      { q: "Can my helpers see money or customers' phone numbers?", a: "No. Helpers only see houses, routes and quantities." },
      { q: "Which phones does it work on?", a: "Any Android phone or iPhone with a browser. Add it to the home screen and it works like an app." },
      { q: "Is my data private?", a: "Yes. Each business's data is kept separate. Only you and your team can see it." },
      { q: "How much does it cost?", a: "We are onboarding our first milk suppliers now. Write to us and we will set it up with you." },
    ],
  },
  cta: {
    title: "Running a milk round? Let's set it up together.",
    body: "Tell us how many houses and helpers you have, and we'll get you started.",
    email: "Email us",
    whatsapp: "Chat on WhatsApp",
    mailSubject: "DailyDudh early access",
  },
  footer: { tagline: "Milk delivery and billing, made simple.", privacy: "Privacy policy", rights: "All rights reserved." },
  privacy: {
    metaDescription: "How DailyDudh stores and protects data for milk suppliers, their helpers and customers: what we keep, who can see it, and your choices.",
    title: "Privacy policy",
    updated: "Last updated",
    intro:
      "DailyDudh is an app that milk suppliers (\"businesses\") use to manage deliveries, bills and payments. This page explains what information is stored, why, and your choices.",
    sections: [
      {
        title: "What we store",
        body: [
          "For each business: its name, address, phone numbers and UPI ID.",
          "For the business owner and helpers: name, mobile number and an encrypted PIN.",
          "For the business's customers: name, address, phone numbers, delivery quantities, bills and payments, as entered by the business.",
        ],
      },
      {
        title: "Why we store it",
        body: ["Only to run the service for the business: delivery lists, bills, receipts, reminders and phone alerts. We do not sell or rent this information, and we do not use it for advertising."],
      },
      {
        title: "Who can see it",
        body: [
          "Each business's data is kept separate. Only that business's owner and team can see it.",
          "Helpers see houses, routes and quantities, not money or customers' phone numbers.",
          "A customer can see their own bill and receipts through the private link sent to them.",
        ],
      },
      {
        title: "Payments",
        body: ["DailyDudh does not take or hold payments. Customers pay the business directly through their own UPI app."],
      },
      {
        title: "Storage and security",
        body: ["Data is stored on secure cloud servers with encrypted connections and regular backups. Logins use a PIN; access is limited by role."],
      },
      {
        title: "Analytics and cookies",
        body: [
          "We use Microsoft Clarity on this website and in the app to see how pages are used (taps, scrolling) so we can make them easier. Clarity sets cookies for this.",
          "In the app, all text on screen is hidden from these recordings, so names, phone numbers and amounts are never recorded. Customers' bill and receipt pages are not recorded at all.",
          "We do not use advertising cookies. The app also uses one cookie to keep you logged in.",
        ],
      },
      {
        title: "Your choices",
        body: [
          "Customers can ask their milk supplier to correct or remove their details.",
          `Businesses can ask us to export or delete their data by writing to ${SITE.email}.`,
        ],
      },
      { title: "Contact", body: [`Questions about privacy: ${SITE.email}`] },
    ],
    back: "Back to home",
  },
};

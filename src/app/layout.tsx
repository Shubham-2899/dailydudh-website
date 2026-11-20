import type { Metadata, Viewport } from "next";
import { Noto_Sans, Noto_Sans_Devanagari } from "next/font/google";
import { SITE } from "@/config/site";
import "./globals.css";

const latin = Noto_Sans({ variable: "--font-latin", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const deva = Noto_Sans_Devanagari({ variable: "--font-deva", subsets: ["devanagari"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
};

export const viewport: Viewport = { themeColor: "#1a63c4", width: "device-width", initialScale: 1 };

// The site is static, so <html lang> can't come from the URL on the server; this tiny script sets it
// before paint (/hi → hi, /mr → mr). Each page's content also carries its own lang attribute.
const setLang = `(function(){var p=location.pathname.split("/")[1];document.documentElement.lang=p==="hi"||p==="mr"?p:"en"})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${latin.variable} ${deva.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: setLang }} />
      </head>
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}

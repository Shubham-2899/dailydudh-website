import { Home } from "@/components/home";
import { pageMetadata } from "@/config/meta";
import type { Locale } from "@/config/site";

// English is at "/", these are "/hi" and "/mr". Any other path is a 404.
export const dynamicParams = false;
export function generateStaticParams() {
  return [{ lang: "hi" }, { lang: "mr" }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }) {
  return pageMetadata((await params).lang, "home");
}

export default async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
  return <Home locale={(await params).lang} />;
}

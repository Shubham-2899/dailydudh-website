import { Privacy } from "@/components/privacy";
import { pageMetadata } from "@/config/meta";
import type { Locale } from "@/config/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return [{ lang: "hi" }, { lang: "mr" }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }) {
  return pageMetadata((await params).lang, "privacy");
}

export default async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
  return <Privacy locale={(await params).lang} />;
}

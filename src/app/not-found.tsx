import { href } from "@/config/site";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-6xl font-extrabold text-brand">404</p>
      <p className="text-lg text-muted">This page doesn&apos;t exist.</p>
      <a href={href("en")} className="rounded-full bg-brand px-6 py-3 font-semibold text-white">
        DailyDudh home
      </a>
    </main>
  );
}

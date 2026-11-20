import { Check, ChevronRight, CloudOff, Ellipsis, LayoutGrid, MapPin, Milk, Truck, Users, Wallet } from "lucide-react";
import type { Content } from "@/content";

/** Decorative QR-like pattern (not a real code). */
function FakeQr({ className = "" }: { className?: string }) {
  const n = 21;
  const cells: [number, number][] = [];
  for (let y = 0; y < n; y++)
    for (let x = 0; x < n; x++) {
      const finder = (x < 7 && y < 7) || (x >= n - 7 && y < 7) || (x < 7 && y >= n - 7);
      if (finder) continue;
      if ((x * 7 + y * 13 + x * y) % 5 < 2) cells.push([x, y]);
    }
  const finder = (x: number, y: number) => (
    <g key={`${x}-${y}`}>
      <rect x={x} y={y} width={7} height={7} rx={1.2} fill="currentColor" />
      <rect x={x + 1} y={y + 1} width={5} height={5} rx={0.8} fill="white" />
      <rect x={x + 2} y={y + 2} width={3} height={3} rx={0.6} fill="currentColor" />
    </g>
  );
  return (
    <svg viewBox={`0 0 ${n} ${n}`} className={className} aria-hidden>
      {cells.map(([x, y]) => (
        <rect key={`${x}.${y}`} x={x} y={y} width={1} height={1} fill="currentColor" />
      ))}
      {finder(0, 0)}
      {finder(n - 7, 0)}
      {finder(0, n - 7)}
    </svg>
  );
}

/** Phone showing the delivery screen, a floating bill card and an "offline" chip. */
export function HeroMock({ t }: { t: Content["mock"] }) {
  const [first, ...rest] = t.houses;
  return (
    <div className="relative mx-auto w-[17rem] sm:w-[18.5rem]" aria-hidden>
      {/* glow */}
      <div className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-tr from-brand/25 via-sky-300/20 to-transparent blur-3xl" />

      {/* phone */}
      <div className="aspect-[9/19.5] rounded-[2.8rem] border border-slate-800 bg-slate-900 p-2.5 shadow-2xl shadow-brand/20">
        <div className="flex h-full flex-col overflow-hidden rounded-[2.3rem] bg-paper">
          <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[0.65rem] font-semibold text-ink">
            <span>6:12</span>
            <span className="h-4 w-16 rounded-full bg-slate-900" />
            <span>4G</span>
          </div>
          <div className="min-h-0 flex-1 space-y-3 overflow-hidden px-3.5 pt-2">
            <div className="flex rounded-full bg-slate-200/70 p-1 text-xs font-medium">
              <span className="flex-1 rounded-full bg-white py-1.5 text-center shadow-sm">{t.today}</span>
              <span className="flex-1 py-1.5 text-center text-muted">{t.tomorrow}</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted">{t.delivered}</p>
              <div className="mt-1.5 h-1.5 rounded-full bg-slate-200">
                <div className="h-1.5 w-[43%] rounded-full bg-good" />
              </div>
            </div>

            {/* open card */}
            <div className="rounded-2xl bg-white p-3.5 shadow-md ring-1 ring-brand/25">
              <p className="text-lg font-bold">{first.code}</p>
              <p className="flex items-center gap-1 text-xs text-muted">
                <MapPin className="size-3.5" /> {first.place}
              </p>
              <div className="mt-3 flex items-center justify-between border-t border-line pt-3">
                <span className="flex items-center gap-2 text-sm">
                  <span className="flex size-7 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Milk className="size-4" />
                  </span>
                  {first.product}
                </span>
                <span className="text-lg font-bold">{first.qty}</span>
              </div>
              <div className="mt-3 flex h-10 items-center justify-center gap-2 rounded-xl bg-brand text-sm font-semibold text-white">
                <Check className="size-4" /> {t.markDelivered}
              </div>
            </div>

            {rest.map((h) => (
              <div key={h.code} className="flex items-center justify-between rounded-2xl bg-white p-3.5 shadow-sm ring-1 ring-line">
                <div className="min-w-0">
                  <p className="font-bold">{h.code}</p>
                  <p className="truncate text-xs text-muted">
                    {h.qty} · {h.product}
                  </p>
                </div>
                <ChevronRight className="size-4 text-muted" />
              </div>
            ))}
          </div>
          {/* app bottom bar (icons only) + home indicator */}
          <div className="border-t border-line bg-white px-4 pt-2.5 pb-2">
            <div className="flex justify-between text-muted">
              <LayoutGrid className="size-[1.15rem]" />
              <Truck className="size-[1.15rem] text-brand" />
              <Users className="size-[1.15rem]" />
              <Wallet className="size-[1.15rem]" />
              <Ellipsis className="size-[1.15rem]" />
            </div>
            <div className="mx-auto mt-2.5 h-1 w-24 rounded-full bg-slate-900" />
          </div>
        </div>
      </div>

      {/* bill card: sits over the lower rows so the open card's quantity stays visible */}
      <div className="animate-float absolute top-[52%] -right-6 w-44 rounded-2xl bg-white p-3.5 shadow-xl ring-1 ring-line sm:-right-24">
        <p className="text-xs font-semibold text-muted">
          {t.billTitle} · {t.billMonth}
        </p>
        <p className="mt-1 text-[0.65rem] text-muted">{t.billTotal}</p>
        <p className="text-xl font-extrabold">₹1,860</p>
        <div className="mt-2 flex items-center gap-2">
          <FakeQr className="size-14 text-ink" />
          <span className="rounded-lg bg-brand px-2 py-1.5 text-[0.65rem] leading-tight font-semibold text-white">{t.payUpi}</span>
        </div>
      </div>

      {/* offline chip */}
      <div className="absolute bottom-[14%] -left-6 flex items-center gap-1.5 rounded-full bg-ink px-3 py-2 text-[0.7rem] font-medium text-white shadow-lg sm:-left-20">
        <CloudOff className="size-3.5" /> {t.offline}
      </div>
    </div>
  );
}

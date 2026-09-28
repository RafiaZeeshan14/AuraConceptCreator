import { verticalServicesRailItems } from "@/data/hero-effects";

export function VerticalServicesRail() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-[-296px] top-1/2 z-20 hidden w-[650px] -translate-y-1/2 -rotate-90 items-center justify-center gap-20 xl:flex"
    >
      {verticalServicesRailItems.map((service) => (
        <span
          key={service}
          className="shrink-0 text-[11px] font-medium uppercase tracking-[0.18em] text-cream/45"
        >
          {service}
        </span>
      ))}
    </div>
  );
}

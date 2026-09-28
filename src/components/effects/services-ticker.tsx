import { servicesTickerItems } from "@/data/hero-effects";

export function ServicesTicker() {
  const tickerItems = [...servicesTickerItems, ...servicesTickerItems];

  return (
    <section
      aria-label="Aura creative services"
      className="services-transition relative z-20 h-0 overflow-visible"
    >
      <div className="absolute top-0 -left-[6%] -right-[6%] rotate-[-1.5deg] overflow-hidden border-y border-cream/10 bg-wine py-4 sm:py-5 lg:rotate-[-2deg]">
        <div className="services-ticker flex w-max items-center">
          {tickerItems.map((service, index) => (
            <div
              key={`${service}-${index}`}
              aria-hidden={index >= servicesTickerItems.length}
              className="flex shrink-0 items-center"
            >
              <span className="px-8 text-[10px] font-semibold uppercase tracking-[0.25em] text-cream/65 sm:px-12 sm:text-xs">
                {service}
              </span>
              <span className="text-lg text-accent">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

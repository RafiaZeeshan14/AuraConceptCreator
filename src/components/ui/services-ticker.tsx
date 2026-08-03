const services = [
  "Brand strategy",
  "Creative direction",
  "Web experiences",
  "Digital products",
  "Motion design",
];

export function ServicesTicker() {
  const tickerItems = [...services, ...services];

  return (
    <div className="absolute -left-[6%] -right-[6%] bottom-7 z-20 rotate-[-2.5deg] overflow-hidden border-y border-cream/10 bg-[#3f090b]/35 py-4 backdrop-blur-md sm:bottom-8 lg:bottom-10 lg:rotate-[-3deg]">
      <div className="services-ticker flex w-max items-center">
        {tickerItems.map((service, index) => (
          <div
            key={`${service}-${index}`}
            aria-hidden={index >= services.length}
            className="flex shrink-0 items-center"
          >
            <span className="px-8 text-[10px] font-semibold uppercase tracking-[0.25em] text-cream/55 sm:px-12 sm:text-xs">
              {service}
            </span>
            <span className="text-lg text-accent">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

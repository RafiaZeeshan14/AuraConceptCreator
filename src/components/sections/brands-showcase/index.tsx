
import Image from "next/image";
import { cn } from "@/lib/utils";
import { brands, type Brand } from "@/data/brands";

function BrandLogo({ name, logo, width, height }: Brand) {
  return (
    <div className="brands-showcase__tile" aria-label={name}>
      <Image
        src={logo}
        alt={name}
        width={width}
        height={height}
        className="brands-showcase__logo-img"
        loading="lazy"
      />
    </div>
  );
}

/**
 * One scrolling belt of cards. The full list is rendered twice so the ±50%
 * keyframe loops seamlessly; `backward` reverses the travel direction.
 */
function BrandRow({
  items,
  backward = false,
}: {
  items: Brand[];
  backward?: boolean;
}) {
  return (
    <div className="brands-showcase__marquee">
      <div
        className={cn(
          "brands-showcase__track",
          backward && "brands-showcase__track--backward",
        )}
      >
        {[...items, ...items].map((brand, index) => (
          <BrandLogo key={`${brand.id}-${index}`} {...brand} />
        ))}
      </div>
    </div>
  );
}

export function BrandsShowcase() {
  // The two belts run opposite ways and must never read as the same sequence.
  // Rotating the list is not enough — the cyclic order stays identical, so both
  // rows eventually line up logo-for-logo. Interleaving the roster re-orders it
  // for real, so no two windows can ever match. Built during render from a
  // fixed source, so server and client markup always agree.
  const evens = brands.filter((_, index) => index % 2 === 0);
  const odds = brands.filter((_, index) => index % 2 === 1);
  const topOrder = brands;
  const bottomOrder = [...evens, ...odds];

  return (
    <section
      id="brands"
      className="brands-showcase relative overflow-hidden bg-cream text-wine"
    >
      <div className="mx-auto w-full max-w-[1600px] px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-20 lg:px-14 lg:pb-20 lg:pt-24">
        <div className="brands-showcase__intro pt-8 sm:pt-10">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-16">
            <h2 className="max-w-2xl text-[clamp(3.4rem,7vw,7rem)] font-medium leading-[0.82] tracking-[-0.075em]">
              Brands we
              <span className="block font-editorial italic text-accent">
                empower
              </span>
            </h2>

            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 shrink-0 bg-accent" />
                <span className="size-1.5 rounded-full bg-accent" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-wine/50 sm:text-[10px]">
                  Trusted by
                </span>
              </div>

              <h3 className="mt-6 text-[clamp(1.7rem,3vw,2.7rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-wine">
                Over 1,500 clients across industries
              </h3>

              <p className="mt-5 text-sm leading-7 text-wine/58 sm:text-[15px] sm:leading-8">
                From social media and video production to web, e-commerce and
                AI content. Discover why growing businesses choose Aura Concept
                Creator.
              </p>
            </div>
          </div>
        </div>

        <div
          className="brands-showcase__rows mt-12 space-y-1.5 sm:mt-14"
          aria-label="Selected brands"
        >
          <BrandRow items={topOrder} backward />
          <BrandRow items={bottomOrder} />
        </div>
      </div>
    </section>
  );
}

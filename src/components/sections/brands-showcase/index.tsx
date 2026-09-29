
import Image from "next/image";
import { loopedBrands, type Brand } from "@/data/brands";

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

export function BrandsShowcase() {
  return (
    <section
      id="brands"
      className="brands-showcase relative overflow-hidden bg-cream text-wine"
    >
      <div className="mx-auto w-full max-w-[1600px] px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
        <div className="brands-showcase__intro pt-8 text-center sm:pt-10">
          <h2 className="mx-auto max-w-3xl text-[clamp(3.4rem,7vw,7rem)] font-medium leading-[0.82] tracking-[-0.075em]">
            Brands we
            <span className="block font-editorial italic text-accent">
              empower
            </span>
          </h2>
        </div>

        <div
          className="brands-showcase__marquee mt-12 sm:mt-14"
          aria-label="Selected brands"
        >
          <div className="brands-showcase__track">
            {loopedBrands.map((brand, index) => (
              <BrandLogo key={`${brand.id}-${index}`} {...brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
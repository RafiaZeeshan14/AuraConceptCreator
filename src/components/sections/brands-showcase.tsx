const brands = [
  { name: "Fieldnote", detail: "DIGITAL", mark: "⌁" },
  { name: "Aster", detail: "STUDIO", mark: "✳" },
  { name: "Northline", detail: "OBJECTS", mark: "◒" },
  { name: "Forma", detail: "WORKS", mark: "▱" },
  { name: "Morrow", detail: "ATELIER", mark: "∞" },
  { name: "Common", detail: "GROUND", mark: "◌" },
];

const loopedBrands = [...brands, ...brands];

function BrandMark({ name, detail, mark }: (typeof brands)[number]) {
  return (
    <div className="brands-showcase__tile" aria-label={`${name} ${detail}`}>
      <span className="brands-showcase__mark" aria-hidden="true">
        {mark}
      </span>
      <span className="brands-showcase__name">{name}</span>
      <span className="brands-showcase__detail">{detail}</span>
    </div>
  );
}

export function BrandsShowcase() {
  return (
    <section id="brands" className="brands-showcase relative overflow-hidden bg-cream text-wine">
      <div className="mx-auto w-full max-w-[1600px] px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
        <div className="brands-showcase__intro grid gap-10 border-t border-wine/15 pt-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-12">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-wine/55 sm:text-[10px]">
              Trusted by visionaries
            </p>
            <h2 className="mt-6 max-w-xl text-[clamp(3.4rem,7vw,7rem)] font-medium leading-[0.82] tracking-[-0.075em]">
              Brands we
              <span className="block font-editorial italic text-accent">empower.</span>
            </h2>
          </div>

          <div className="brands-showcase__orbit" aria-hidden="true">
            <span className="brands-showcase__orbit-ring brands-showcase__orbit-ring--one" />
            <span className="brands-showcase__orbit-ring brands-showcase__orbit-ring--two" />
            <span className="brands-showcase__orbit-core">∞</span>
          </div>

          <div className="max-w-xs lg:justify-self-end">
            <p className="text-sm leading-7 text-wine/65 sm:text-base sm:leading-8">
              We collaborate with bold brands and ambitious minds to build experiences that leave a mark.
            </p>
            <a
              href="#work"
              className="mt-7 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-wine transition-colors hover:text-accent"
            >
              <span className="size-2 rounded-full bg-accent shadow-[0_0_14px_rgba(182,41,53,0.45)]" />
              View all projects <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="brands-showcase__marquee mt-12 sm:mt-14" aria-label="Selected brands">
          <div className="brands-showcase__track">
            {loopedBrands.map((brand, index) => (
              <BrandMark key={`${brand.name}-${index}`} {...brand} />
            ))}
          </div>
        </div>

        <div className="brands-showcase__footer mt-10 flex items-center justify-center gap-4 text-[9px] font-semibold uppercase tracking-[0.24em] text-wine/45 sm:mt-12">
          <span className="h-px w-16 bg-wine/20 sm:w-40" />
          And many more brands growing with us
          <span className="h-px w-16 bg-wine/20 sm:w-40" />
        </div>
      </div>
    </section>
  );
}

const brands = [
  { name: "Fieldnote", detail: "DIGITAL", mark: "⌁" },
  { name: "Aster", detail: "STUDIO", mark: "✳" },
  { name: "Northline", detail: "OBJECTS", mark: "◒" },
  { name: "Forma", detail: "WORKS", mark: "▱" },
  { name: "Morrow", detail: "ATELIER", mark: "∞" },
  { name: "Common", detail: "GROUND", mark: "◌" },
];

const loopedBrands = [...brands, ...brands];

function BrandMark({ name, mark }: (typeof brands)[number]) {
  return (
    <div className="brands-showcase__tile" aria-label={name}>
      <span className="brands-showcase__mark" aria-hidden="true">
        {mark}
      </span>
      <span className="brands-showcase__name">{name}</span>
    </div>
  );
}

export function BrandsShowcase() {
  return (
    <section id="brands" className="brands-showcase relative overflow-hidden bg-cream text-wine">
      <div className="mx-auto w-full max-w-[1600px] px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
        <div className="brands-showcase__intro  pt-8 text-center sm:pt-10">
          <h2 className="mx-auto max-w-3xl text-[clamp(3.4rem,7vw,7rem)] font-medium leading-[0.82] tracking-[-0.075em]">
            Brands we
            <span className="block font-editorial italic text-accent">empower</span>
          </h2>
        </div>

        <div className="brands-showcase__marquee mt-12 sm:mt-14" aria-label="Selected brands">
          <div className="brands-showcase__track">
            {loopedBrands.map((brand, index) => (
              <BrandMark key={`${brand.name}-${index}`} {...brand} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

import Link from "next/link";
import { HiArrowRight, HiOutlineArrowDown } from "react-icons/hi";

const capabilities = [
  {
    title: "Brand direction",
    copy: "Positioning, visual systems and stories that give growing brands a distinct point of view.",
  },
  {
    title: "Digital products",
    copy: "Useful, intuitive interfaces shaped around real people and meaningful business goals.",
  },
  {
    title: "Web experiences",
    copy: "High-impact websites that balance expressive motion, clarity and dependable performance.",
  },
  {
    title: "Creative technology",
    copy: "Thoughtful interactions and emerging tools used with purpose—not added for decoration.",
  },
];

const principles = [
  {
    number: "01",
    title: "Clarity first",
    copy: "Every decision should make the idea stronger and the experience easier to understand.",
  },
  {
    number: "02",
    title: "Built together",
    copy: "The best work comes from honest collaboration, shared context and sharp feedback.",
  },
  {
    number: "03",
    title: "Made to move",
    copy: "We create flexible systems that can evolve with the people and businesses behind them.",
  },
];

const motionWords = ["Strategy", "Design", "Technology", "Digital experiences"];

export function AboutPageContent() {
  return (
    <>
      <section className="about-hero relative isolate flex min-h-[88svh] overflow-hidden bg-wine px-5 pb-16 pt-36 text-cream sm:px-8 sm:pb-20 sm:pt-44 lg:px-14">
        <div aria-hidden="true" className="about-hero__grid absolute inset-0 -z-10" />
        <div
          aria-hidden="true"
          className="about-hero__halo absolute left-1/2 top-[48%] -z-10 -translate-x-1/2 -translate-y-1/2"
        />

        <div className="mx-auto flex w-full max-w-[1440px] flex-col justify-between">
          <div className="about-page-reveal about-delay-1 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.24em] text-cream/55 sm:text-[10px]">
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_14px_rgba(214,74,85,0.9)]" />
            About Aura Concept Creator
          </div>

          <div className="my-16 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <h1 className="about-page-reveal about-delay-2 max-w-6xl text-[clamp(3.5rem,9.6vw,9rem)] font-medium leading-[0.82] tracking-[-0.075em]">
              We shape ideas into{" "}
              <span className="about-impact font-editorial font-medium italic">impact.</span>
            </h1>
            <HiOutlineArrowDown className="about-page-reveal about-delay-3 hidden size-10 text-cream/45 lg:block" />
          </div>

          <div className="about-page-reveal about-delay-4 grid gap-8 border-t border-cream/15 pt-7 sm:grid-cols-[1fr_auto_auto] sm:items-end sm:gap-12">
            <p className="max-w-xl text-sm leading-7 text-cream/62 sm:text-base sm:leading-8">
              An independent creative agency partnering with ambitious teams to build brands,
              products and digital experiences people remember.
            </p>
            <div>
              <p className="text-3xl font-medium tracking-[-0.05em]">24+</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-cream/40">
                Experiences shaped
              </p>
            </div>
            <div>
              <p className="text-3xl font-medium tracking-[-0.05em]">4.9/5</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-cream/40">
                Partner rating
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="about-marquee overflow-hidden border-y border-wine/10 bg-accent py-4 text-cream">
        <div className="about-marquee__track flex w-max items-center">
          {[...motionWords, ...motionWords].map((word, index) => (
            <div
              key={`${word}-${index}`}
              aria-hidden={index >= motionWords.length}
              className="flex shrink-0 items-center"
            >
              <span className="px-8 text-[10px] font-semibold uppercase tracking-[0.24em] sm:px-12 sm:text-xs">
                {word}
              </span>
              <span className="text-sm text-cream/70">✦</span>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-cream px-5 py-24 text-wine sm:px-8 sm:py-32 lg:px-14 lg:py-40">
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 lg:grid-cols-[0.42fr_1fr] lg:gap-24">
          <p className="about-reveal text-[9px] font-semibold uppercase tracking-[0.24em] text-wine/45">
            Our story — 01
          </p>
          <div className="about-reveal">
            <h2 className="max-w-4xl text-[clamp(2.5rem,6vw,5.8rem)] font-medium leading-[0.92] tracking-[-0.06em]">
              Small by design. Big in{" "}
              <span className="font-editorial italic text-accent">ambition.</span>
            </h2>
            <div className="mt-10 grid gap-7 text-sm leading-7 text-wine/62 sm:grid-cols-2 sm:text-base sm:leading-8">
              <p>
                We built Aura around a simple belief: meaningful creative work happens when
                strategy, design and technology share the same table from day one.
              </p>
              <p>
                Our compact structure keeps collaboration direct, ideas focused and every
                detail connected to the bigger picture—from first thought to final launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-wine/10 bg-cream px-5 pb-24 text-wine sm:px-8 sm:pb-32 lg:px-14 lg:pb-40">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="about-reveal flex items-end justify-between border-b border-wine/15 pb-6">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-wine/45">
                What we do — 02
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
                Connected capabilities
              </h2>
            </div>
            <span className="hidden text-xs text-wine/40 sm:block">
              From direction to delivery
            </span>
          </div>

          <div className="grid md:grid-cols-2">
            {capabilities.map((capability, index) => (
              <article
                key={capability.title}
                className="about-capability about-reveal border-b border-wine/15 py-9 md:min-h-64 md:p-10"
              >
                <span className="text-[9px] font-semibold text-accent">0{index + 1}</span>
                <h3 className="mt-12 text-2xl font-medium tracking-[-0.04em] sm:text-3xl">
                  {capability.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-wine/58">
                  {capability.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#4b0c0f] px-5 py-24 text-cream sm:px-8 sm:py-32 lg:px-14">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="about-reveal grid gap-10 lg:grid-cols-[0.5fr_1fr]">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-cream/40">
                How we work — 03
              </p>
              <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
                Our principles
              </h2>
            </div>
            <div className="border-t border-cream/15">
              {principles.map(({ number, title, copy }) => (
                <div
                  key={number}
                  className="grid gap-4 border-b border-cream/15 py-8 sm:grid-cols-[56px_0.5fr_1fr] sm:items-start"
                >
                  <span className="text-[9px] font-semibold text-accent">{number}</span>
                  <h3 className="text-xl font-medium">{title}</h3>
                  <p className="max-w-lg text-sm leading-7 text-cream/55">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-accent px-5 py-24 text-cream sm:px-8 sm:py-32 lg:px-14">
        <div className="about-cta-orbit" aria-hidden="true" />
        <div className="about-reveal relative mx-auto flex w-full max-w-[1440px] flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
          <h2 className="max-w-4xl text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.88] tracking-[-0.065em]">
            Have an idea worth building?
          </h2>
          <Link
            href="/#contact"
            className="group inline-flex shrink-0 items-center gap-4 rounded-full bg-cream py-2 pr-7 pl-2 text-sm font-semibold text-wine"
          >
            <span className="grid size-11 place-items-center rounded-full bg-wine text-cream transition-transform duration-300 group-hover:translate-x-1">
              <HiArrowRight className="size-5" />
            </span>
            Start a project
          </Link>
        </div>
      </section>
    </>
  );
}

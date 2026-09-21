import Link from "next/link";
import {
  HiArrowRight,
  HiOutlineArrowDown,
  HiOutlineArrowRight,
} from "react-icons/hi";
import { SiteFooter } from "../site-footer";

// ─────────────────────────────────────────────
// CONTENT
// ─────────────────────────────────────────────

const principles = [
  {
    number: "01",
    title: "Clarity first",
    copy: "Every decision should make the idea stronger, the message clearer and the experience easier to understand.",
  },
  {
    number: "02",
    title: "Built together",
    copy: "The best work comes from honest collaboration, shared context and open communication.",
  },
  {
    number: "03",
    title: "Made to move",
    copy: "We create flexible ideas and systems that can evolve with the people and businesses behind them.",
  },
];

const milestones = [
  {
    number: "2021",
    label: "Where it started",
    copy: "Aura Concept Creator was founded with a simple purpose — helping local businesses understand the power of digital.",
  },
  {
    number: "1,500+",
    label: "Clients worked with",
    copy: "Businesses we've helped build their digital presence, strengthen their brands and connect with their audiences.",
  },
  {
    number: "30+",
    label: "Active clients",
    copy: "Brands currently trusting Aura with their social presence and digital growth.",
  },
];



export function AboutPageContent() {
  return (
    <>
      {/* ─────────────────────────────────────────────
          HERO
      ───────────────────────────────────────────── */}

      <section className="about-hero relative isolate flex min-h-[88svh] overflow-hidden bg-wine px-5 pb-16 pt-36 text-cream sm:px-8 sm:pb-20 sm:pt-44 lg:px-14">
        <div
          aria-hidden="true"
          className="about-hero__grid absolute inset-0 -z-10"
        />

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
              <span className="about-impact font-editorial font-medium italic">
                impact.
              </span>
            </h1>

            <HiOutlineArrowDown className="about-page-reveal about-delay-3 hidden size-10 text-cream/45 lg:block" />
          </div>

          <div className="about-page-reveal about-delay-4 grid gap-8 border-t border-cream/15 pt-7 sm:grid-cols-[1fr_auto_auto] sm:items-end sm:gap-12">
            <p className="max-w-xl text-sm leading-7 text-cream/62 sm:text-base sm:leading-8">
              An independent creative agency helping ambitious businesses
              build their digital presence, strengthen their brands and move
              forward with confidence.
            </p>

            <div>
              <p className="text-3xl font-medium tracking-[-0.05em]">
                1,500+
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-cream/40">
                Clients served
              </p>
            </div>

            <div>
              <p className="text-3xl font-medium tracking-[-0.05em]">
                2021
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-cream/40">
                Founded
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          OUR STORY
      ───────────────────────────────────────────── */}

      <section className="relative overflow-hidden bg-cream px-5 py-20 text-wine sm:px-8 sm:py-28 lg:px-14 lg:py-36">
        {/* subtle background rings */}
       

        
        <div className="mx-auto w-full max-w-[1440px]">

          {/* TOP LABEL */}
          <div className="about-reveal flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="h-px w-14 bg-accent sm:w-20" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-wine/45 sm:text-[10px]">
                Our Story — 01
              </p>
            </div>

           
          </div>

          {/* MAIN STORY */}
          <div className="mt-16 sm:mt-20 lg:mt-24">

            <h2 className="about-reveal max-w-[1200px] text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.88] tracking-[-0.07em]">
              From helping businesses{" "}
              <span className="font-editorial italic text-accent">
                understand digital
              </span>{" "}
              to helping them own it.
            </h2>

            {/* DIVIDER */}
            <div className="about-reveal mt-12 h-px w-full bg-wine/15 sm:mt-16" />

            {/* TEXT */}
            <div className="about-reveal mt-8 grid gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-[1fr_1fr_0.65fr] lg:gap-20">

              <p className="max-w-xl text-sm leading-7 text-wine/62 sm:text-base sm:leading-8">
                Founded in 2021, Aura Concept Creator was built with a simple
                purpose: to help local businesses understand the power of digital
                and take their businesses online with confidence.
              </p>

              <p className="max-w-xl text-sm leading-7 text-wine/62 sm:text-base sm:leading-8">
                Today, we have successfully worked with 1,500+ clients, helping
                businesses build their digital presence, strengthen their brands
                and connect with their audiences.
              </p>

              {/* SIDE STAT */}
              <div className="border-l border-accent pl-6 lg:justify-self-end lg:pl-8">
                <p className="text-[clamp(3rem,5vw,5rem)] font-medium leading-none tracking-[-0.07em]">
                  30+
                </p>

                <p className="mt-3 max-w-[150px] text-[9px] font-semibold uppercase tracking-[0.2em] text-wine/40">
                  Active clients currently trusting Aura
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM STATS */}
          <div className="about-reveal mt-20 grid border-y border-wine/15 sm:mt-28 sm:grid-cols-3">

            <div className="py-8 sm:py-10 sm:pr-10">
              <p className="text-[14px] font-semibold uppercase tracking-[0.2em] text-accent">
                Founded
              </p>

              <p className="mt-4 text-3xl font-medium tracking-[-0.05em] sm:text-4xl">
                2021
              </p>
            </div>

            <div className="border-t border-wine/15 py-8 sm:border-l sm:border-t-0 sm:px-10 sm:py-10">
              <p className="text-[14px] font-semibold uppercase tracking-[0.2em] text-accent">
                Clients served
              </p>

              <p className="mt-4 text-3xl font-medium tracking-[-0.05em] sm:text-4xl">
                1,500+
              </p>
            </div>

            <div className="border-t border-wine/15 py-8 sm:border-l sm:border-t-0 sm:pl-10 sm:py-10">
              <p className="text-[14px] font-semibold uppercase tracking-[0.2em] text-accent">
                Active partnerships
              </p>

              <p className="mt-4 text-3xl font-medium tracking-[-0.05em] sm:text-4xl">
                30+
              </p>
            </div>

          </div>
        </div>
      </section>



      {/* ─────────────────────────────────────────────
          OUR COMMITMENT
      ───────────────────────────────────────────── */}

      <section className="relative overflow-hidden bg-[#5b0d11] px-5 py-16 text-cream sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        {/* subtle background details */}
        <div
          aria-hidden="true"
          className="absolute right-[-140px] top-[-140px] size-[420px] rounded-full border border-cream/10"
        />

        <div
          aria-hidden="true"
          className="absolute right-[-70px] top-[-70px] size-[280px] rounded-full border border-cream/10"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-[-180px] left-[-120px] size-[360px] rounded-full border border-accent/10"
        />

        <div className="mx-auto w-full max-w-[1440px]">

          {/* Header */}
          <div className="about-reveal flex items-center justify-between pt-2">
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-cream/45 sm:text-[10px]">
              Our Commitment — 03
            </p>

            <span className="hidden text-[9px] uppercase tracking-[0.22em] text-cream/30 sm:block">
              How we show up
            </span>
          </div>

          {/* Main content */}
          <div className="mt-10 grid gap-10 lg:grid-cols-[0.25fr_1fr] lg:gap-20">

            {/* Left side */}
            <div className="about-reveal hidden lg:flex lg:flex-col">
              <div className="mt-1">
                <div className="mb-5 h-px w-14 bg-accent" />

                <p className="max-w-[190px] text-sm leading-7 text-cream/55">
                  We&apos;re not here to simply make things look good.
                  <br />
                  <br />
                  We&apos;re here to make them matter.
                </p>
              </div>
            </div>

            {/* Right side */}
            <div className="about-reveal">

              <h2 className="max-w-6xl text-[clamp(3rem,6.5vw,6.8rem)] font-medium leading-[0.9] tracking-[-0.065em]">
                Your business deserves
                <br />
                more than{" "}
                <span className="font-editorial italic text-accent">
                  just another post.
                </span>
              </h2>

              {/* Commitment points */}
              <div className="mt-10 border-t border-cream/15">

                {/* Point 01 */}
                <div className="grid gap-4 border-b border-cream/15 py-6 sm:grid-cols-[150px_1fr] sm:items-center">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-accent">
                    Purpose
                  </span>

                  <p className="max-w-3xl text-sm leading-7 text-cream/60 sm:text-base sm:leading-8">
                    Every piece of work starts with understanding what your business
                    actually needs.
                  </p>
                </div>

                {/* Point 02 */}
                <div className="grid gap-4 border-b border-cream/15 py-6 sm:grid-cols-[150px_1fr] sm:items-center">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-accent">
                    Consistency
                  </span>

                  <p className="max-w-3xl text-sm leading-7 text-cream/60 sm:text-base sm:leading-8">
                    Strong brands are built through consistency, not one-off
                    moments.
                  </p>
                </div>

                {/* Point 03 */}
                <div className="grid gap-4 border-b border-cream/15 py-6 sm:grid-cols-[150px_1fr] sm:items-center">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-accent">
                    Results
                  </span>

                  <p className="max-w-3xl text-sm leading-7 text-cream/60 sm:text-base sm:leading-8">
                    Creativity should ultimately create movement, awareness,
                    engagement, trust or growth.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          PRINCIPLES
      ───────────────────────────────────────────── */}

      <section className="relative overflow-hidden bg-cream px-5 py-24 text-wine sm:px-8 sm:py-32 lg:px-14 lg:py-40">
        <div className="mx-auto w-full max-w-[1440px]">

          {/* Section Header */}
          <div className="about-reveal mb-20 flex flex-col gap-6 border-b border-wine/15 pb-8 sm:mb-28 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-wine/45 sm:text-[10px]">
                Our Principles — 04
              </p>

              <h2 className="mt-5 max-w-xl text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.88] tracking-[-0.065em]">
                What keeps
                <span className="block font-editorial italic text-accent">
                  us moving.
                </span>
              </h2>
            </div>

            <p className="max-w-xs text-xs leading-6 text-wine/45 sm:text-sm sm:leading-7">
              The thinking behind every idea, every decision and every piece of
              work we put into the world.
            </p>
          </div>


          {/* Principles */}
          <div className="about-principles">

            {/* Principle 01 */}
            <article className="about-principle about-reveal group relative grid gap-8 border-b border-wine/15 py-10 sm:grid-cols-[100px_1fr_auto] sm:items-start sm:py-14">

              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-accent">
                  01
                </span>
                <span className="hidden h-px w-8 bg-accent/50 sm:block" />
              </div>

              <div>
                <h3 className="max-w-3xl text-[clamp(2rem,4vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.055em] transition-transform duration-500 group-hover:translate-x-2">
                  Clarity
                  <span className="font-editorial italic text-accent">
                    {" "}first.
                  </span>
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-wine/55 sm:text-base sm:leading-8">
                  Every decision should make the idea stronger, the message clearer
                  and the experience easier to understand.
                </p>
              </div>

              <span className="hidden text-[9px] font-semibold uppercase tracking-[0.2em] text-wine/30 sm:block">
                Foundation
              </span>

              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full"
              />
            </article>


            {/* Principle 02 */}
            <article className="about-principle about-reveal group relative grid gap-8 border-b border-wine/15 py-10 sm:grid-cols-[100px_1fr_auto] sm:items-start sm:py-14">

              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-accent">
                  02
                </span>
                <span className="hidden h-px w-8 bg-accent/50 sm:block" />
              </div>

              <div>
                <h3 className="max-w-3xl text-[clamp(2rem,4vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.055em] transition-transform duration-500 group-hover:translate-x-2">
                  Built
                  <span className="font-editorial italic text-accent">
                    {" "}together.
                  </span>
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-wine/55 sm:text-base sm:leading-8">
                  The best work comes from honest collaboration, shared context and
                  open communication from the very beginning.
                </p>
              </div>

              <span className="hidden text-[9px] font-semibold uppercase tracking-[0.2em] text-wine/30 sm:block">
                Collaboration
              </span>

              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full"
              />
            </article>


            {/* Principle 03 */}
            <article className="about-principle about-reveal group relative grid gap-8 border-b border-wine/15 py-10 sm:grid-cols-[100px_1fr_auto] sm:items-start sm:py-14">

              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-accent">
                  03
                </span>
                <span className="hidden h-px w-8 bg-accent/50 sm:block" />
              </div>

              <div>
                <h3 className="max-w-3xl text-[clamp(2rem,4vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.055em] transition-transform duration-500 group-hover:translate-x-2">
                  Made to
                  <span className="font-editorial italic text-accent">
                    {" "}move.
                  </span>
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-wine/55 sm:text-base sm:leading-8">
                  We create flexible ideas and systems that evolve with the people,
                  audiences and businesses behind them.
                </p>
              </div>

              <span className="hidden text-[9px] font-semibold uppercase tracking-[0.2em] text-wine/30 sm:block">
                Evolution
              </span>

              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full"
              />
            </article>

          </div>

        </div>
      </section>
      {/* ─────────────────────────────────────────────
          FINAL CTA
      ───────────────────────────────────────────── */}
      <SiteFooter />
    </>
  );
}
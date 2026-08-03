import type { CSSProperties } from "react";
import Link from "next/link";
import { HiArrowRight, HiOutlineExternalLink } from "react-icons/hi";

import { MagicRingsLayer } from "@/components/effects/magic-rings-layer";
import { FloatingInsightCard } from "@/components/ui/floating-insight-card";
import { HeroTag } from "@/components/ui/hero-tag";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { ServicesTicker } from "@/components/ui/services-ticker";
import { VerticalServicesRail } from "@/components/ui/vertical-services-rail";

const revealDelay = (delay: string) =>
  ({ "--reveal-delay": delay }) as CSSProperties;

export function Hero() {
  return (
    <section className="hero-surface relative isolate flex min-h-svh items-start overflow-hidden px-5 pb-36 pt-28 text-cream sm:items-center sm:px-8 sm:pb-28 sm:pt-36 lg:px-14 lg:pb-32 lg:pt-40">
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 z-0" />
      <MagicRingsLayer />
      <VerticalServicesRail />
      <ScrollIndicator />

      <div className="pointer-events-none absolute left-[8%] top-[20%] size-80 rounded-full bg-accent/15 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-[12%] right-[8%] size-96 rounded-full bg-cream/[0.07] blur-[150px]" />

      <div
        style={revealDelay("0s")}
        className="hero-reveal relative z-10 mx-auto flex min-h-[520px] w-full max-w-[1320px] items-center justify-center px-0 pt-12 pb-6 sm:min-h-[540px] sm:px-12 sm:py-12 lg:min-h-[520px] lg:px-20"
      >
        <FloatingInsightCard
          eyebrow="Creative impact"
          value="4.9/5"
          detail="Average partner rating across global launches."
          className="left-0 top-[18%]"
          delay={0.7}
        />
        <FloatingInsightCard
          eyebrow="Built to move"
          value="24+"
          detail="Distinctive digital experiences shipped."
          className="right-0 bottom-[15%]"
          delay={1.1}
        />

        <HeroTag className="hidden md:left-[2%] md:top-[30%] md:block lg:left-[14%] lg:top-[48%]" delay={0.9}>
          Agency
        </HeroTag>
        <HeroTag
          className="hidden md:top-[16%] md:right-[3%] md:block lg:top-[24%] lg:right-[13%]"
          delay={1.05}
          pointer="top-right"
        >
          Expert
        </HeroTag>
        <HeroTag
          className="hidden md:right-[5%] md:bottom-[8%] md:block lg:right-[16%] lg:bottom-[13%]"
          delay={1.2}
        >
          Innovative
        </HeroTag>

        <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
          <div
            style={revealDelay("0.12s")}
            className="hero-reveal mx-auto mb-5 flex min-h-[145px] w-full max-w-[390px] items-start justify-between md:hidden"
          >
            <FloatingInsightCard
              compact
              eyebrow="Creative impact"
              value="4.9/5"
              detail="Average partner rating across global launches."
              className="max-w-[150px]"
              delay={0.45}
            />
            <HeroTag flow className="mt-[88px]" delay={0.6} pointer="top-right">
              Expert
            </HeroTag>
          </div>

          <div
            style={revealDelay("0.15s")}
            className="hero-reveal mb-6 inline-flex max-w-full items-center gap-3 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-2 text-center text-[9px] font-semibold uppercase tracking-[0.18em] text-cream/65 shadow-[0_10px_40px_rgba(30,0,2,0.18)] backdrop-blur-xl sm:text-[10px] sm:tracking-[0.22em]"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Independent creative studio
          </div>

          <h1
            style={revealDelay("0.28s")}
            className="hero-reveal mx-auto text-balance text-[clamp(3rem,13vw,4.25rem)] font-medium leading-[0.9] tracking-[-0.06em] drop-shadow-[0_18px_45px_rgba(24,0,2,0.15)] sm:text-[clamp(3.25rem,8.1vw,6.5rem)] sm:leading-[0.86] sm:tracking-[-0.07em]"
          >
            <span className="block">Designing</span>
            <span className="mt-2 block sm:mt-3">
              Digital{" "}
              <span className="future-shimmer font-editorial relative inline-block text-[1.08em] font-medium italic tracking-[-0.035em]">
                futures
                <span
                  aria-hidden="true"
                  className="hero-line-reveal absolute -bottom-1 left-[8%] h-px w-[88%] origin-left bg-gradient-to-r from-transparent via-accent to-transparent"
                />
              </span>
            </span>
          </h1>

          <p
            style={revealDelay("0.58s")}
            className="hero-reveal mx-auto mt-6 max-w-[340px] text-balance text-[13px] leading-6 text-cream/68 sm:mt-7 sm:max-w-2xl sm:text-[15px] sm:leading-7"
          >
            We unite strategy, design and technology to turn ambitious ideas into memorable
            digital experiences built for what comes next.
          </p>

          <div
            style={revealDelay("0.68s")}
            className="hero-reveal mx-auto mt-6 flex min-h-[190px] w-full max-w-[390px] items-start justify-between md:hidden"
          >
            <HeroTag flow className="mt-5" delay={0.78}>
              Agency
            </HeroTag>
            <div className="flex w-[150px] flex-col items-center gap-5">
              <FloatingInsightCard
                compact
                eyebrow="Built to move"
                value="24+"
                detail="Distinctive digital experiences shipped."
                delay={0.82}
              />
              <HeroTag flow delay={0.92}>
                Innovative
              </HeroTag>
            </div>
          </div>

          <div
            style={revealDelay("0.76s")}
            className="hero-reveal mt-7 flex flex-col items-center justify-center gap-1 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3"
          >
            <Link
              href="#contact"
              className="group inline-flex w-full max-w-[280px] items-center gap-4 rounded-full border border-cream/45 bg-wine/20 p-1.5 pr-7 text-sm font-semibold text-cream shadow-[0_14px_45px_rgba(25,0,2,0.22)] backdrop-blur-md transition-colors hover:border-cream hover:bg-cream hover:text-wine sm:w-auto sm:max-w-none sm:text-base"
            >
              <span className="grid size-10 place-items-center rounded-full bg-accent text-cream transition-transform group-hover:translate-x-1">
                <HiArrowRight className="size-5" />
              </span>
              Start a project
            </Link>
            <Link
              href="#work"
              className="group inline-flex h-[52px] items-center gap-2 rounded-full px-5 text-sm font-semibold text-cream/75 transition-colors hover:text-cream sm:text-base"
            >
              Explore work
              <HiOutlineExternalLink className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div
            style={revealDelay("0.95s")}
            className="hero-reveal mt-5 flex flex-col items-center justify-center gap-2 text-center text-[10px] text-cream/45 sm:mt-6 sm:flex-row sm:gap-3 sm:text-xs"
          >
            <div className="flex -space-x-2" aria-hidden="true">
              {[
                "A",
                "N",
                "O",
              ].map((letter) => (
                <span
                  key={letter}
                  className="grid size-7 place-items-center rounded-full border border-wine bg-cream/10 text-[8px] font-semibold text-cream backdrop-blur-md"
                >
                  {letter}
                </span>
              ))}
            </div>
            <span className="max-w-[280px]">Trusted by ambitious founders and growing teams</span>
          </div>
        </div>
      </div>

      <ServicesTicker />
    </section>
  );
}

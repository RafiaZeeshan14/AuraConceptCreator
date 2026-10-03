"use client";

import Link from "next/link";
import { PortfolioHeroCardStack } from "@/components/effects";

export function PortfolioHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#5b0d13] px-5 pb-20 pt-36 text-cream sm:px-8 sm:pt-44 lg:px-14 lg:pb-24">
      {/* Background */}
      <div
        aria-hidden="true"
        className="about-hero__grid absolute inset-0 -z-10 opacity-30"
      />
      <div
        aria-hidden="true"
        className="about-hero__halo absolute left-1/2 top-[48%] -z-10 -translate-x-1/2 -translate-y-1/2"
      />

      <div className="mx-auto max-w-[1600px]">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          {/* LEFT — HERO CONTENT */}
          <div className="-translate-y-6 sm:-translate-y-8 lg:-translate-y-10">
            <div className="my-16 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <h1 className="about-page-reveal about-delay-2 max-w-6xl text-center text-[clamp(4.3rem,9.6vw,9rem)] font-medium leading-[0.82] tracking-[-0.075em] sm:text-left">
                Ideas
                <br />
                <span className="about-impact font-editorial font-medium italic text-accent">
                  made visible.
                </span>
              </h1>
            </div>

            <p className="about-page-reveal about-delay-3 mt-9 max-w-xl border-t border-cream/15 pt-7 text-sm leading-7 text-cream/65 sm:text-base sm:leading-8">
              A collection of brands, campaigns, digital experiences and stories
              we&apos;ve helped shape. Every project starts with an idea and ends
              with something people remember.
            </p>

            <div className="about-page-reveal about-delay-4 mt-8 flex flex-wrap gap-4 overflow-visible">
              {/* Explore our work */}
              <Link
                href="#work"
                className="inline-flex items-center justify-center rounded-full bg-[#f5efe8] px-7 py-3.5 text-sm font-semibold text-[#5d1011] shadow-[0_12px_25px_rgba(92,17,20,0.18)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Explore our work
                <span className="ml-2 leading-none">↓</span>
              </Link>

              {/* Start a project */}
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full border border-cream/30 bg-transparent px-7 py-3.5 text-sm font-semibold text-cream transition-colors duration-300 hover:bg-white/5"
              >
                Start a project
              </Link>
            </div>
          </div>

          {/* RIGHT — PORTFOLIO CARDS */}
          <PortfolioHeroCardStack />
        </div>
      </div>
    </section>
  );
}
"use client";

import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { useRevealOnScroll } from "@/components/effects";
import { services } from "@/data/services";

export function ServicesPreview() {
  const { ref: sectionRef, hasEntered } = useRevealOnScroll<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="services"
      className={`services-preview relative overflow-hidden bg-wine text-cream ${hasEntered ? "is-visible" : ""}`}
    >
      <div className="services-preview__sparkline" aria-hidden="true" />
      <div className="services-preview__orbit" aria-hidden="true" />
      <div className="mx-auto w-full max-w-[1600px] px-5 pt-8 pb-16 sm:px-8 sm:pt-12 sm:pb-20 lg:px-14 lg:pt-16 lg:pb-24">
        <div className="services-preview__header flex flex-col gap-7 pt-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-accent sm:text-[10px]">03 — What we do</p>
            <h2 className="mt-6 max-w-2xl text-[clamp(3.4rem,7vw,7rem)] font-medium leading-[0.82] tracking-[-0.075em]">
              Services that
              <span className="about-impact block font-editorial italic">are tailored.</span>
            </h2>
          </div>
          <div className="max-w-sm sm:text-right">
            <p className="text-sm leading-7 text-cream/62 sm:text-base sm:leading-8">
              From the first thought to the final launch, we bring the right disciplines around the idea.
            </p>
          </div>
        </div>

        <div className="services-preview__grid mt-14 sm:mt-16">
          {services.map(
            ({ number, title, intro, items, icon: Icon, portfolioCategory }) => (
              <Link
                key={title}
                href={`/portfolio?category=${portfolioCategory}`}
                aria-label={`See ${title} projects`}
                className="services-preview__card group/card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-inset"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-accent">{number}</span>
                  <span className="services-preview__icon"><Icon /></span>
                </div>
                <h3>
                  {title === "AI Content Creation" ? (
                    <>
                      AI Content
                      <br />
                      Creation
                    </>
                  ) : (
                    title
                  )}
                </h3>
                <p>{intro}</p>
                <ul>
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <span className="services-preview__arrow"><HiArrowUpRight /></span>
              </Link>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

"use client";

import {
  HiArrowUpRight,
} from "react-icons/hi2";
import { services } from "@/components/sections/services-data";

export function ServicesPageContent() {
  return (
    <main className="services-page min-h-svh overflow-hidden bg-cream text-wine">
      <section className="services-page__hero relative overflow-hidden bg-wine text-cream">
        <div className="services-page__hero-orbit" aria-hidden="true" />

        <div className="mx-auto flex min-h-[72svh] w-full max-w-[1600px] flex-col justify-between px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-14 lg:pt-44">
          <div className="flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.24em] text-cream/55 sm:text-[10px]">
            <span>Services — 06 ways to move forward</span>

            <span className="hidden sm:block">
              Aura Concept Creator
            </span>
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <h1 className="max-w-5xl text-[clamp(4rem,10vw,10rem)] font-medium leading-[0.79] tracking-[-0.085em]">
              Built for
              <span className="block font-editorial italic text-accent">
                what&apos;s next.
              </span>
            </h1>

            <div className="max-w-sm lg:justify-self-end">
              <p className="text-base leading-8 text-cream/65">
                Strategy, design, content and technology working together to
                give ambitious ideas a clear point of view.
              </p>

              <a
                href="#services-list"
                className="mt-8 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-cream"
              >
                Explore our services

                <span className="grid size-9 place-items-center rounded-full bg-accent">
                  <HiArrowUpRight className="size-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services-list" className="services-page__list relative">
        <div className="mx-auto w-full max-w-[1600px] px-5 py-16 sm:px-8 sm:py-24 lg:px-14 lg:py-32">
          <div className="mb-12 flex items-end justify-between border-t border-wine/15 pt-5">
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-wine/48 sm:text-[10px]">
              What we bring to the table
            </p>

            <span className="hidden text-[10px] uppercase tracking-[0.2em] text-wine/40 sm:block">
              Select a discipline
            </span>
          </div>

          <div className="services-page__cards">
            {services.map(
              ({
                number,
                title,
                intro,
                items,
                icon: Icon,
                forceTwoLines,
              }) => (
                <article
                  key={title}
                  className="services-page__card"
                >
                  <div className="services-page__card-top">
                    <span className="services-page__number">
                      {number}
                    </span>

                    <span className="services-page__card-icon">
                      <Icon />
                    </span>
                  </div>

                  <h2>
                    {forceTwoLines ? (
                      <>
                        AI Content
                        <br />
                        Creation
                      </>
                    ) : (
                      title
                    )}
                  </h2>

                  <p className="services-page__card-intro">
                    {intro}
                  </p>

                  <ul className="services-page__card-items">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    aria-label={`Start a conversation about ${title}`}
                    className="services-page__card-action"
                  >
                    <HiArrowUpRight />
                  </a>
                </article>
              ),
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
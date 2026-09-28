"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import {
  PointerParallaxLayer,
  RevealInline,
  RevealLine,
  textRevealContainerVariants,
} from "@/components/effects";

export function AboutPreview() {
  return (
    <section
      id="about"
      className="about-preview relative overflow-x-clip bg-cream pt-8 text-wine"
    >
      <div
        aria-hidden="true"
        className="about-preview__orb"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col px-5 pt-2 pb-16 sm:px-8 sm:pt-3 sm:pb-20 lg:px-14 lg:pt-4 lg:pb-24">

        {/* TOP LABEL */}
        <div className="about-preview__topline about-reveal flex items-center justify-between border-t border-wine/25 pt-5 text-[9px] font-semibold uppercase tracking-[0.24em] text-wine/45 sm:text-[10px]">
          <span>02 — Who we are</span>

          <span className="hidden sm:block">
            Independent creative agency
          </span>
        </div>

        {/* MAIN GRID */}
        <div className="mt-8 grid gap-10 sm:mt-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-start lg:gap-12">

          {/* LEFT SIDE */}
          <div className="order-2 w-full lg:order-1">

            {/* HEADING */}
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.45,
              }}
              className="about-preview__heading m-0 w-full max-w-[1050px] p-0 text-[clamp(3.2rem,6vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.065em]"
            >
              <span className="about-preview__desktop-lines hidden sm:block">
                <RevealLine>You bring the visions</RevealLine>
                <RevealLine>we give it an</RevealLine>
                <RevealLine className="font-editorial font-medium italic text-accent">Aura.</RevealLine>
              </span>

              <span className="about-preview__mobile-lines block text-[clamp(3.25rem,13vw,4.4rem)] font-semibold leading-[0.86] tracking-[-0.07em] sm:hidden">
                <RevealLine>You bring</RevealLine>
                <RevealLine>the visions</RevealLine>
                <RevealLine>we give it</RevealLine>
                <motion.span variants={textRevealContainerVariants} className="about-preview__line block font-editorial font-medium italic text-wine">
                  <RevealInline>an </RevealInline>
                  <RevealInline className="about-preview__mobile-aura about-impact">Aura</RevealInline>
                </motion.span>
              </span>
            </motion.h2>

            {/* PURPOSE */}
            <div className="about-reveal about-preview__purpose mt-6 grid max-w-[620px] grid-cols-[48px_1fr] items-center gap-6 sm:mt-8 sm:grid-cols-[56px_1fr] sm:gap-8">

              {/* PURPOSE MARKER */}
              <div
                aria-hidden="true"
                className="about-preview__purpose-marker relative"
              >
                <span className="about-preview__purpose-dot" />

                <span className="about-preview__purpose-label">
                  Our purpose
                </span>
              </div>

              {/* PURPOSE TEXT */}
              <p className="max-w-xl text-sm leading-7 text-wine/65 sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
                Aura Concept Creator is a full-service creative agency that
                brings strategy and creativity under one roof.
              </p>
            </div>

            <Link
              href="/about"
              className="about-preview__story-link group relative z-10 mt-8 inline-flex w-fit items-center gap-4 text-base font-semibold sm:text-lg"
            >
              <span className="grid size-14 place-items-center rounded-full bg-wine text-cream shadow-[0_12px_30px_rgba(93,16,17,0.2)] transition-transform duration-300 group-hover:translate-x-1 sm:size-16">
                <HiArrowRight className="size-6" />
              </span>
              Discover our story
              <span aria-hidden="true" className="about-preview__story-rule">
                <i />
              </span>
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <PointerParallaxLayer className="about-preview__story order-1 relative min-h-[280px] lg:order-2 lg:min-h-[520px]">

            {/* BACKGROUND NUMBER */}
            <span
              aria-hidden="true"
              className="about-preview__visual-number"
            >
              02
            </span>

            {/* ORBIT TEXT */}
            <svg
              aria-hidden="true"
              className="about-preview__orbit-copy"
              viewBox="0 0 240 240"
            >
              <defs>
                <path
                  id="about-preview-copy-path"
                  d="M120,120 m-106,0 a106,106 0 1,1 212,0 a106,106 0 1,1 -212,0"
                />
              </defs>

              <text>
                <textPath href="#about-preview-copy-path">
                  STRATEGY · DESIGN · TECHNOLOGY · IDEAS INTO IMPACT ·
                </textPath>
              </text>
            </svg>

            {/* MINI CARD */}
            <div className="about-preview__mini-card absolute w-[270px] rounded-[1.65rem] border border-cream/15 bg-wine/95 p-6 text-cream backdrop-blur-xl sm:w-[300px]">

              <div className="flex items-center justify-between">

                <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-cream/50">
                  About Aura
                </span>

                <span className="size-2 rounded-full bg-cream shadow-[0_0_14px_rgba(237,232,223,0.55)]" />

              </div>

              <div className="mt-8 flex items-end justify-between gap-4">

                <p className="max-w-[105px] text-xs leading-5 text-cream/65">
                  Small team. Sharp thinking. Work with meaning.
                </p>

                <span className="font-editorial text-2xl italic text-accent">
                  01→∞
                </span>

              </div>
            </div>

          </PointerParallaxLayer>
        </div>
      </div>
    </section>
  );
}
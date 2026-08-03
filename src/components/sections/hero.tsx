"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { HiArrowRight } from "react-icons/hi";

import MagicRings from "@/components/effects/magic-rings";
import { HeroTag } from "@/components/ui/hero-tag";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero-surface relative isolate flex min-h-svh items-center overflow-hidden px-5 pb-14 pt-32 text-cream sm:px-8 sm:pt-36 lg:px-14 lg:pb-20 lg:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-55 sm:opacity-70"
      >
        <MagicRings
          color="#EDE8DF"
          colorTwo="#D64A55"
          speed={0.72}
          ringCount={6}
          attenuation={8.5}
          lineThickness={2.1}
          baseRadius={0.22}
          radiusStep={0.1}
          scaleRate={0.14}
          opacity={0.88}
          blur={0}
          noiseAmount={0.035}
          rotation={-12}
          ringGap={1.5}
          fadeIn={0.72}
          fadeOut={0.62}
        />
      </div>
      <div className="pointer-events-none absolute left-[12%] top-[22%] size-72 rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[8%] right-[10%] size-80 rounded-full bg-cream/5 blur-[130px]" />

      <motion.div
        initial={{ y: 18 }}
        animate={{ y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 1.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto flex min-h-[470px] w-full max-w-[1080px] items-center justify-center px-5 py-16 sm:min-h-[500px] sm:px-12 lg:min-h-[460px] lg:px-20"
      >
        <HeroTag className="-left-1 top-[24%] sm:left-[2%] sm:top-[34%] lg:left-[3%] lg:top-[52%]" delay={0.9}>
          Agency
        </HeroTag>
        <HeroTag
          className="right-0 top-[10%] sm:right-[3%] sm:top-[16%] lg:right-[4%] lg:top-[24%]"
          delay={1.05}
          pointer="top-right"
        >
          Expert
        </HeroTag>
        <HeroTag
          className="bottom-[5%] right-0 sm:bottom-[8%] sm:right-[5%] lg:bottom-[15%] lg:right-[7%]"
          delay={1.2}
        >
          Innovative
        </HeroTag>

        <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
          <motion.p
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: reduceMotion ? 0 : 0.7 }}
            className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-cream/55 sm:text-xs lg:hidden"
          >
            Creative digital agency
          </motion.p>

          <motion.h1
            initial={{ y: 36 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-[clamp(3rem,9vw,6.15rem)] font-medium leading-[0.88] tracking-[-0.065em]"
          >
            <span className="block">Designing</span>
            <span className="mt-2 block sm:mt-3">
              Digital{" "}
              <span className="font-editorial text-[1.08em] font-medium italic tracking-[-0.035em] text-accent">
                futures
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 18 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.65, duration: reduceMotion ? 0 : 0.75 }}
            className="mx-auto mt-7 max-w-3xl text-balance text-[13px] leading-6 text-cream/75 sm:text-[15px] sm:leading-7"
          >
            Transforming ideas into reality. Crafting the digital future, one design at a time—
            shaping tomorrow, today with innovation and precision.
          </motion.p>

          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.82, duration: reduceMotion ? 0 : 0.7 }}
            className="mt-8 flex justify-center"
          >
            <Link
              href="#contact"
              className="group inline-flex items-center gap-4 rounded-full border border-cream/45 p-1.5 pr-7 text-sm font-semibold text-cream transition-colors hover:border-cream hover:bg-cream hover:text-wine sm:text-base"
            >
              <span className="grid size-10 place-items-center rounded-full bg-accent text-cream transition-transform group-hover:translate-x-1">
                <HiArrowRight className="size-5" />
              </span>
              Get Started
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

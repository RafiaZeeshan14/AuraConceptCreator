"use client";

import { useRef, type PointerEvent as ReactPointerEvent } from "react";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

import { ServicesTicker } from "@/components/ui/services-ticker";

const studioStats = [
  { label: "Digital launches", value: "24+" },
  { label: "Creative disciplines", value: "03" },
  { label: "One independent studio", value: "01" },
];

export function AboutPreview() {
  const storyRef = useRef<HTMLDivElement>(null);

  const handleStoryPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const story = storyRef.current;

    if (!story) return;

    const bounds = story.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    story.style.setProperty("--about-card-x", `${x * 14}px`);
    story.style.setProperty("--about-card-y", `${y * 12}px`);
    story.style.setProperty("--about-orbit-x", `${x * -8}px`);
    story.style.setProperty("--about-orbit-y", `${y * -7}px`);
  };

  const resetStoryPointer = () => {
    const story = storyRef.current;

    if (!story) return;

    story.style.setProperty("--about-card-x", "0px");
    story.style.setProperty("--about-card-y", "0px");
    story.style.setProperty("--about-orbit-x", "0px");
    story.style.setProperty("--about-orbit-y", "0px");
  };

  return (
    <section
      id="about"
      className="about-preview relative overflow-x-clip bg-cream text-wine"
    >
      <div aria-hidden="true" className="about-preview__orb" />
      <ServicesTicker />

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col px-5 pt-2 sm:px-8 sm:pt-3 lg:px-14 lg:pt-4">
        <div className="about-reveal flex items-center justify-between border-t border-wine/15 pt-5 text-[9px] font-semibold uppercase tracking-[0.24em] text-wine/45 sm:text-[10px]">
          <span>02 — About Aura</span>
          <span className="hidden sm:block">Independent creative studio</span>
        </div>

        <div className="mt-8 grid gap-10 sm:mt-10 lg:grid-cols-[1.22fr_0.78fr] lg:items-start lg:gap-12">
          <div>
            <h2 className="about-reveal about-preview__heading max-w-5xl text-[clamp(3.1rem,6.8vw,6.9rem)] font-medium leading-[0.9] tracking-[-0.065em]">
              <span className="about-preview__line block">Built for brands</span>
              <span className="about-preview__line block">that refuse to</span>
              <span className="about-preview__line block font-editorial font-medium italic text-accent">
                blend in.
              </span>
            </h2>

            <div className="about-reveal about-preview__purpose mt-6 grid max-w-[620px] grid-cols-[48px_1fr] gap-6 sm:mt-8 sm:grid-cols-[56px_1fr] sm:gap-8">
              <div aria-hidden="true" className="about-preview__purpose-marker relative">
                <span className="about-preview__purpose-dot" />
                <span className="about-preview__purpose-label">Our purpose</span>
              </div>
              <p className="max-w-xl text-sm leading-7 text-wine/65 sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
                Aura unites strategy, design and technology <br/> to turn ambitious ideas into clear, <br/>
                memorable digital experiences.
              </p>
            </div>
          </div>

          <div
            ref={storyRef}
            onPointerMove={handleStoryPointerMove}
            onPointerLeave={resetStoryPointer}
            className="about-preview__story relative min-h-[490px] lg:min-h-[520px]"
          >
            <span aria-hidden="true" className="about-preview__visual-number">
              02
            </span>

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

            <div className="about-preview__mini-card absolute w-[270px] rounded-[1.65rem] border border-cream/15 bg-wine/95 p-6 text-cream backdrop-blur-xl sm:w-[300px]">
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-cream/50">
                  Creative system
                </span>
                <span className="size-2 rounded-full bg-cream shadow-[0_0_14px_rgba(237,232,223,0.55)]" />
              </div>
              <div className="mt-8 flex items-end justify-between gap-4">
                <p className="max-w-[105px] text-xs leading-5 text-cream/65">
                  One studio. Many perspectives.
                </p>
                <span className="font-editorial text-2xl italic text-accent">01→∞</span>
              </div>
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
        </div>

        <div className="about-preview__stats about-reveal mt-14 grid sm:mt-16 sm:grid-cols-3">
          {studioStats.map((stat, index) => (
            <div
              key={stat.label}
              className="about-preview__stat relative border-t border-wine/20 py-8 sm:min-h-[220px] sm:px-7 sm:py-7 sm:first:pl-0 sm:last:pr-0"
            >
              <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.18em] text-wine/45">
                <span>{stat.label}</span>
                <span>0{index + 1}</span>
              </div>
              <strong className="about-preview__stat-value mt-5 block text-[clamp(5rem,11vw,10rem)] font-medium leading-[0.78] tracking-[-0.09em]">
                {stat.value}
              </strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

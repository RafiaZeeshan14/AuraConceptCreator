"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { HiArrowRight } from "react-icons/hi2";
import { BsPlayFill } from "react-icons/bs";
import { revealDelay, staggerDelay } from "@/components/effects";
import type { WorkProject } from "@/data/portfolio-data";
import { workOrnaments } from "@/data/portfolio-visuals";

interface WorkCardProps {
  project: WorkProject;
  index: number;
  onOpenVideo?: (project: WorkProject) => void;
}

export function WorkCard({ project, index, onOpenVideo }: WorkCardProps) {
  const number = String(index + 1).padStart(2, "0");

  const isVideo = Boolean(project.videoUrl);

  const openVideo = () => {
    if (isVideo) onOpenVideo?.(project);
  };

  const cardClasses = cn(
    "relative overflow-hidden rounded-[1.5rem] bg-wine",
    isVideo ? "block w-full cursor-pointer text-left" : "block",
  );

  const playIndicator = (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-cream/60 bg-black/30 text-cream backdrop-blur-sm transition-all duration-300",
        isVideo
          ? "size-16 hover:scale-110 sm:size-20"
          : "hidden",
      )}
    >
      <BsPlayFill className="ml-1 size-7 sm:size-8" />
    </span>
  );

  const cta = isVideo ? (
    <span
      aria-hidden="true"
      className="mt-3 flex w-full items-center justify-center gap-2 rounded-[10px] border border-cream/20 bg-black/40 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-cream transition-all duration-300 group-hover:bg-cream group-hover:text-wine"
    >
      <HiArrowRight className="size-3.5" />
      Watch Now
    </span>
  ) : (
    <button
      type="button"
      aria-label="View project"
      onClick={openVideo}
      className="mt-3 flex w-full items-center justify-center gap-2 rounded-[10px] border border-cream/20 bg-black/40 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-cream transition-all duration-300 hover:bg-cream hover:text-wine"
    >
      <HiArrowRight className="size-3.5" />
      View Project
    </button>
  );

  const cardBody = (
    <>
      {/* REEL THUMBNAIL — video background */}
      {isVideo && (
        <>
          {/* Video plays on hover (muted preview) */}
          <video
            src={project.videoUrl}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            muted
            playsInline
            loop
            preload="auto"
            poster={project.posterUrl}
          />
          {/* Static poster as base (visible before hover) */}
          {project.posterUrl && (
            <div className="absolute inset-0">
              <Image
                src={project.posterUrl}
                alt={project.title}
                fill
                className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>
          )}
          {/* Gradient overlays for text readability */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"
          />
        </>
      )}

      {/* Non-video: decorative background */}
      {!isVideo && (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(182,41,53,0.2),transparent_60%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-wine/90 to-wine"
          />
        </>
      )}

      {/* === CARD TOP: REEL INDICATOR + NUMBER === */}
      <div className="pointer-events-none relative z-10 flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <span className="flex size-2 rounded-full bg-accent">
            <span className="animate-pulse" />
          </span>
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cream/70">
            {isVideo ? "Reel" : "Project"}
          </span>
        </div>

        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cream/40">
          {number}
        </span>
      </div>

      {/* === CARD CENTER: PLAY INDICATOR (video only) === */}
      {playIndicator}

      {/* === CARD LOWER: TITLE + TAGS === */}
      <div className="pointer-events-none relative z-10 flex flex-col justify-end p-4 pb-5">
        <h3 className="text-base font-medium leading-snug tracking-[-0.02em] text-cream sm:text-lg sm:leading-[1.2]">
          {project.title}
        </h3>

        {project.tags && (
          <p className="mt-1.5 text-[10px] text-cream/55 sm:text-xs">
            {project.tags}
          </p>
        )}
      </div>

      {/* === CARD BOTTOM: DIVIDER + CTA === */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 z-10",
          isVideo && "pointer-events-none",
        )}
      >
        <div className="h-px bg-gradient-to-r from-transparent via-cream/10 to-transparent" />

        {cta}
      </div>

      {/* Decorative shapes for non-video cards */}
      {!isVideo && workOrnaments[project.visual]}
    </>
  );

  return (
    <div
      style={revealDelay(staggerDelay(index))}
      className="hero-reveal"
    >
      {isVideo ? (
        /* Whole card is the click target for video projects. */
        <button
          type="button"
          aria-label={`Play ${project.title}`}
          onClick={openVideo}
          className={cn(cardClasses, "group")}
          style={{ aspectRatio: "4 / 3" }}
        >
          {cardBody}
        </button>
      ) : (
        <div className={cn(cardClasses, "group")} style={{ aspectRatio: "4 / 3" }}>
          {cardBody}
        </div>
      )}
    </div>
  );
}

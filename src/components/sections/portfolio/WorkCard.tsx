"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { HiArrowRight } from "react-icons/hi2";
import { BsPlayFill } from "react-icons/bs";
import type { WorkProject } from "@/data/portfolio-data";
import { workOrnaments } from "@/data/portfolio-visuals";

const CARD_REVEAL_STEP = 0.06;
const CARD_REVEAL_MAX_INDEX = 5;

const revealDelay = (delay: string) =>
  ({ "--reveal-delay": delay }) as CSSProperties;

interface WorkCardProps {
  project: WorkProject;
  index: number;
  onOpenVideo?: (project: WorkProject) => void;
}

export function WorkCard({ project, index, onOpenVideo }: WorkCardProps) {
  const number = String(index + 1).padStart(2, "0");

  const revealDelaySeconds =
    Math.min(index, CARD_REVEAL_MAX_INDEX) * CARD_REVEAL_STEP;

  const isVideo = Boolean(project.videoUrl);

  const cardContent = (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[1.5rem] bg-wine",
        isVideo && "cursor-pointer",
      )}
      style={{
        aspectRatio: "4 / 3",
      }}
    >
      {/* REEL THUMBNAIL — video background */}
      {isVideo && (
        <>
          {/* Video plays on hover (muted preview) */}
          <video
            src={project.videoUrl}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            muted
            playsInline
            loop
            preload="auto"
            poster={project.posterUrl}
          />
          {/* Static poster as base (visible before hover) */}
          {project.posterUrl && (
            <div className="relative inset-0">
              <Image
                src={project.posterUrl}
                alt={project.title}
                fill
                className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                loading="lazy"
                sizes="100vw"
              />
            </div>
          )}
          {/* Gradient overlays for text readability */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"
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
      <div className="relative z-10 flex items-center justify-between p-4">
        {/* REEL badge */}
        <div className="flex items-center gap-2">
          <span className="flex size-2 rounded-full bg-accent">
            <span className="animate-pulse" />
          </span>
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cream/70">
            {isVideo ? "Reel" : "Project"}
          </span>
        </div>

        {/* Project number */}
        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cream/40">
          {number}
        </span>
      </div>

      {/* === CARD CENTER: PLAY BUTTON (only for video) === */}
      {isVideo && (
        <button
          type="button"
          aria-label={`Play ${project.title}`}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            onOpenVideo?.(project);
          }}
          className="absolute left-1/2 top-1/2 z-20 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-cream/60 bg-black/30 text-cream backdrop-blur-sm transition-all duration-300 hover:border-cream hover:bg-black/40 hover:scale-110 sm:size-20"
        >
          <BsPlayFill className="ml-1 size-7 sm:size-8" />
        </button>
      )}

      {/* === CARD LOWER: TITLE + TAGS === */}
      <div className="relative z-10 flex flex-col justify-end p-4 pb-5">
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
      <div className="absolute bottom-0 left-0 right-0 z-10">
        {/* Subtle divider line */}
        <div className="h-px bg-gradient-to-r from-transparent via-cream/10 to-transparent" />

        {/* CTA Button */}
        <button
          type="button"
          aria-label={isVideo ? `Watch ${project.title}` : "View project"}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            onOpenVideo?.(project);
          }}
          className={cn(
            "mt-3 flex w-full items-center justify-center gap-2 rounded-[10px] py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] transition-all duration-300",
            isVideo
              ? "border border-cream/20 bg-black/40 text-cream hover:bg-cream hover:text-wine"
              : "border border-cream/20 bg-black/40 text-cream hover:bg-cream hover:text-wine",
          )}
        >
          <HiArrowRight className="size-3.5" />
          {isVideo ? "Watch Now" : "View Project"}
        </button>
      </div>

      {/* Decorative shapes for non-video cards */}
      {!isVideo && workOrnaments[project.visual]}
    </div>
  );

  return (
    <div
      style={revealDelay(`${revealDelaySeconds}s`)}
      className={cn("hero-reveal group block")}
    >
      {cardContent}
    </div>
  );
}
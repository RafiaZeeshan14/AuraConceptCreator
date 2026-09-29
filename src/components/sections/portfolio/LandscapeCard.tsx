"use client";

import Image from "next/image";
import { BsPlayFill } from "react-icons/bs";
import { HiArrowUpRight } from "react-icons/hi2";
import { revealDelay, staggerDelay } from "@/components/effects";
import type { WorkProject } from "@/data/portfolio-data";

interface LandscapeCardProps {
  project: WorkProject;
  index: number;
  /** Top-left label. Falls back to the project's own eyebrow. */
  label?: string;
  /** Opens the video modal. */
  onOpenVideo?: (project: WorkProject) => void;
  /** Opens the live destination (used for non-video media). */
  onOpenLink?: (project: WorkProject) => void;
}

/**
 * Generic landscape (16:9) work card: thumbnail on top, warm cream information
 * panel below. Shared by every content type that wants the wide editorial
 * layout — DVC, Documentary, web case studies, etc.
 */
export function LandscapeCard({
  project,
  index,
  label,
  onOpenVideo,
  onOpenLink,
}: LandscapeCardProps) {
  const number = String(index + 1).padStart(2, "0");
  const artwork = project.posterUrl || project.thumbnailUrl;

  /** Duration is optional — the badge only renders when the data carries it. */
  const duration = (project as { duration?: string }).duration;

  const isPlayable = Boolean(project.videoUrl && onOpenVideo);
  const isLinked = Boolean(!isPlayable && project.liveUrl && onOpenLink);

  const activate = () => {
    if (isPlayable) {
      onOpenVideo?.(project);
      return;
    }

    if (isLinked) {
      onOpenLink?.(project);
    }
  };

  return (
    <div style={revealDelay(staggerDelay(index))} className="hero-reveal">
      {/* The whole card is the click target. */}
      <button
        type="button"
        aria-label={
          isPlayable ? `Play ${project.title}` : `Open ${project.title}`
        }
        disabled={!isPlayable && !isLinked}
        onClick={activate}
        className="group block w-full cursor-pointer overflow-hidden rounded-[1.25rem] border border-wine/10 bg-[#f7f3ec] text-left shadow-[0_1px_2px_rgba(93,16,17,0.04)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-wine/20 hover:shadow-[0_18px_40px_rgba(93,16,17,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/45 focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:cursor-default disabled:hover:translate-y-0 disabled:hover:shadow-[0_1px_2px_rgba(93,16,17,0.04)]"
      >
        {/* Media — fixed 16:9 so every card aligns */}
        <div className="relative aspect-video w-full overflow-hidden bg-wine/15">
          {artwork && (
            <Image
              src={artwork}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
          )}

          {/* Cinematic gradient overlay for label legibility */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/30"
          />

          {/* Top-left: accent dot + label */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-4 z-10 flex items-center gap-2 sm:left-5 sm:top-5"
          >
            <span className="size-1.5 rounded-full bg-accent" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-cream/85 sm:text-[10px]">
              {label || project.eyebrow}
            </span>
          </div>

          {/* Top-right: item number */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-4 z-10 text-[10px] font-semibold tracking-[0.2em] text-cream/60 sm:right-5 sm:top-5"
          >
            {number}
          </span>

          {/* Center: circular play button (video media only) */}
          {isPlayable && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/75 bg-white/10 text-white backdrop-blur-[2px] transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-white/20 sm:size-14"
            >
              <BsPlayFill className="ml-0.5 size-5 sm:size-6" />
            </span>
          )}

          {/* Bottom-right: duration badge (only when known) */}
          {duration && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-4 right-4 z-10 rounded-md bg-black/55 px-2 py-1 text-[9px] font-semibold tracking-[0.12em] text-cream/85 backdrop-blur-sm sm:bottom-5 sm:right-5"
            >
              {duration}
            </span>
          )}
        </div>

        {/* Information panel */}
        <div className="pointer-events-none flex items-center justify-between gap-4 bg-[#f7f3ec] px-4 py-4 sm:px-5 sm:py-5">
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-base font-medium leading-snug tracking-[-0.02em] text-wine sm:text-lg">
              {project.title}
            </h3>

            {(project.tags || project.summary) && (
              <p className="mt-1 truncate text-[10px] uppercase tracking-[0.16em] text-wine/45 sm:text-[11px]">
                {project.tags || project.summary}
              </p>
            )}
          </div>

          <span
            aria-hidden="true"
            className="grid size-9 shrink-0 place-items-center rounded-full bg-wine text-cream transition-transform duration-500 ease-out group-hover:rotate-45 sm:size-10"
          >
            <HiArrowUpRight className="size-4" />
          </span>
        </div>
      </button>
    </div>
  );
}

"use client";

import Image from "next/image";
import { BsPlayFill } from "react-icons/bs";
import { HiArrowUpRight } from "react-icons/hi2";
import { revealDelay, staggerDelay } from "@/components/effects";
import { cn } from "@/lib/utils";
import type { WorkProject } from "@/data/portfolio-data";

/** Media aspect handled by the card — drives the frame only. */
export type MediaCardOrientation = "landscape" | "portrait";

interface MediaCardProps {
  project: WorkProject;
  index: number;
  /** Top-left label. Falls back to the project's own eyebrow. */
  label?: string;
  /** `portrait` renders a 9:16 reel frame, `landscape` a 16:9 frame. */
  orientation?: MediaCardOrientation;
  /** Opens the video modal. */
  onOpenVideo?: (project: WorkProject) => void;
  /** Opens the live destination (used for non-video media). */
  onOpenLink?: (project: WorkProject) => void;
}

/**
 * Generic media work card: cinematic frame on top, warm cream information panel
 * below. One component covers every content type that uses this layout —
 * DVC and Documentary (landscape), Reels (portrait).
 */
export function MediaCard({
  project,
  index,
  label,
  orientation = "landscape",
  onOpenVideo,
  onOpenLink,
}: MediaCardProps) {
  const number = String(index + 1).padStart(2, "0");
  const artwork = project.posterUrl || project.thumbnailUrl;

  const isPortrait = orientation === "portrait";

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
        aria-label={isPlayable ? `Play ${project.title}` : `Open ${project.title}`}
        data-cursor-label={isPlayable ? "Play" : "Open"}
        disabled={!isPlayable && !isLinked}
        onClick={activate}
        className="group block w-full cursor-pointer overflow-hidden rounded-[1.25rem] border border-wine/10 bg-[#f7f3ec] text-left shadow-[0_1px_2px_rgba(93,16,17,0.04)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-wine/20 hover:shadow-[0_18px_40px_rgba(93,16,17,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/45 focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:cursor-default disabled:hover:translate-y-0 disabled:hover:shadow-[0_1px_2px_rgba(93,16,17,0.04)]"
      >
        {/* Media frame — fixed ratio so every card aligns */}
        <div
          className={cn(
            "relative w-full shrink-0 overflow-hidden bg-wine/15",
            isPortrait ? "aspect-[4/6]" : "aspect-video",
          )}
        >
          {artwork && (
            <Image
              src={artwork}
              alt={project.title}
              fill
              sizes={
                isPortrait
                  ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              }
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

          {/* Center: circular play button */}
          {isPlayable && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cream/75 bg-black/25 text-cream backdrop-blur-[2px] transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-black/40 sm:size-14"
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
            <h3
              className={cn(
                "truncate font-medium leading-snug tracking-[-0.02em] text-wine",
                isPortrait ? "text-[15px] sm:text-base" : "text-base sm:text-lg",
              )}
            >
              {project.title}
            </h3>

            {(project.tags || project.summary) && (
              <p
                className={cn(
                  "mt-1 truncate text-wine/45",
                  isPortrait
                    ? "text-[11px] sm:text-xs"
                    : "text-[10px] uppercase tracking-[0.16em] sm:text-[11px]",
                )}
              >
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

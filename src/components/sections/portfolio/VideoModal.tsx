
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight, HiXMark } from "react-icons/hi2";
import { BsPlayFill } from "react-icons/bs";

import { useBodyScrollLock, useModalNavigation } from "@/components/effects";
import { cn } from "@/lib/utils";
import { videoStreamUrl } from "@/data/portfolio-data";
import type { WorkProject } from "@/data/portfolio-data";

/** Media orientation the modal should lay out for. */
export type VideoModalOrientation = "portrait" | "landscape";

interface VideoModalProps {
  projects: WorkProject[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
  /** Defaults to the side-by-side portrait (reel) layout. */
  orientation?: VideoModalOrientation;
}

const pad = (value: number) => String(value).padStart(2, "0");

/**
 * Landscape media keeps a 16:9 frame inside the viewport height:
 * width = height x 16/9, so 58dvh tall becomes ~103dvh wide.
 */
const landscapeWidth = "w-[min(100%,86dvh,880px)]";

export function VideoModal({
  projects,
  index,
  onClose,
  onNavigate,
  orientation = "portrait",
}: VideoModalProps) {
  const total = projects.length;
  const project = projects[index];

  const isLandscape = orientation === "landscape";

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  /** Phones get the 720p rendition so playback starts on mobile data. */
  const [streamWidth] = useState<720 | 1080>(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches
      ? 720
      : 1080,
  );

  const goTo = useCallback(
    (nextIndex: number) => {
      if (total === 0) return;
      onNavigate((nextIndex + total) % total);
    },
    [onNavigate, total],
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const previous = useCallback(() => goTo(index - 1), [goTo, index]);

  useModalNavigation({ onClose, onNext: next, onPrevious: previous });
  useBodyScrollLock();

  const togglePlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  }, []);

  /* Autoplay can still be refused (low-power mode, data saver) — fall back to
     the custom play button instead of sitting on a stalled video. */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attempt = video.play();
    if (attempt) {
      attempt.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }, [project?.videoUrl]);

  if (!project) return null;

  const closeButton =
    "grid size-10 shrink-0 place-items-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-cream/60 hover:bg-cream/10 focus-visible:ring-2 focus-visible:ring-accent/60";

  const arrowButton =
    "grid size-10 shrink-0 place-items-center rounded-full border border-cream/20 text-cream/85 transition-colors hover:border-cream/60 hover:bg-cream/10 focus-visible:ring-2 focus-visible:ring-accent/60 sm:size-11";

  /* Compact variant for the landscape counter row, which is tight on phones. */
  const arrowButtonSm =
    "grid size-8 shrink-0 place-items-center rounded-full border border-cream/20 text-cream/85 transition-colors hover:border-cream/60 hover:bg-cream/10 focus-visible:ring-2 focus-visible:ring-accent/60 sm:size-10 lg:size-11";

  const progressTicks = (
    <span aria-hidden="true" className="flex items-center gap-1.5">
      {Array.from({ length: total }).map((_, tick) => (
        <span
          key={tick}
          className={cn(
            "h-1 w-2 rounded-full transition-colors duration-300",
            tick === index
              ? "bg-accent"
              : tick < index
                ? "bg-cream/45"
                : "bg-cream/20",
          )}
        />
      ))}
    </span>
  );

  /* ── Shared pieces ───────────────────────────── */

  const heading = (
    <>
      <span className="h-px w-12 shrink-0 bg-accent" />

      <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-cream/50 sm:text-[10px]">
        {project.eyebrow}
      </p>

      <h2
        className={cn(
          "mt-3 break-words font-medium leading-[1.12] tracking-[-0.035em] text-cream",
          isLandscape
            ? "text-[clamp(1.4rem,5vw,2rem)]"
            : "text-[clamp(1.4rem,5vw,1.8rem)] lg:mt-4 lg:text-[clamp(1.5rem,2.5vw,2.15rem)]",
        )}
      >
        {project.title}
      </h2>

      {project.description && (
        <p
          className={cn(
            "text-sm leading-6 text-cream/55",
            isLandscape
              ? "mt-2 line-clamp-2"
              : "mt-2 lg:mt-5 lg:leading-7",
          )}
        >
          {project.description}
        </p>
      )}
    </>
  );

  const media = (
    <video
      ref={videoRef}
      key={project.videoUrl}
      src={videoStreamUrl(project.videoUrl, streamWidth, project.videoCrop)}
      poster={project.posterUrl}
      className={cn(
        "absolute inset-0 h-full w-full",
        /* The landscape frame is height-capped, so contain keeps the whole
           video visible instead of cropping the sides. */
        isLandscape ? "object-contain" : "object-cover",
      )}
      autoPlay
      /* Mobile browsers (iOS Safari, Chrome Android) refuse to autoplay a
         video with audio — muted is required, and native controls still
         allow unmuting. */
      muted
      controls
      playsInline
      preload="auto"
      onPlay={() => setIsPlaying(true)}
      onPause={() => setIsPlaying(false)}
    />
  );

  const playOverlay = !isPlaying && (
    <button
      type="button"
      aria-label={`Play ${project.title}`}
      onClick={togglePlayback}
      className="absolute inset-0 z-10 grid place-items-center bg-black/10"
    >
      <span className="grid size-14 place-items-center rounded-full border border-cream/50 bg-black/35 text-cream backdrop-blur-sm transition-transform hover:scale-105 sm:size-16">
        <BsPlayFill className="ml-1 size-7" />
      </span>
    </button>
  );

  /* ── Landscape layout: heading → video → counter ── */

  if (isLandscape) {
    return (
      <div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black/55 p-3 backdrop-blur-2xl sm:p-6"
        onClick={onClose}
      >
        {/* Desktop side navigation */}
        <button
          type="button"
          aria-label="Previous project"
          onClick={(event) => {
            event.stopPropagation();
            previous();
          }}
          className={cn(
            arrowButton,
            "absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 lg:grid lg:size-14",
          )}
        >
          <HiChevronLeft className="size-6" />
        </button>

        <button
          type="button"
          aria-label="Next project"
          onClick={(event) => {
            event.stopPropagation();
            next();
          }}
          className={cn(
            arrowButton,
            "absolute right-3 top-1/2 z-20 hidden -translate-y-1/2 lg:grid lg:size-14",
          )}
        >
          <HiChevronRight className="size-6" />
        </button>

        {/* Main modal card */}
        <div
          className={cn(
            "relative flex w-full max-w-[360px] flex-col",
            "max-h-[94dvh] overflow-x-hidden overflow-y-auto overscroll-contain",
            "mobile-modal-scroll touch-pan-y",
            "rounded-[1.5rem] border border-cream/15",
            "bg-gradient-to-b from-white/[0.09] to-white/[0.03] p-5",
            "shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl",
            "sm:rounded-[2rem] sm:p-6",
            "lg:max-h-[90dvh] lg:max-w-[1080px] lg:gap-8 lg:overflow-hidden lg:p-8",
          )}
          onClick={(event) => event.stopPropagation()}
        >
          {/* Mobile drag handle */}
          <span
            aria-hidden="true"
            className="mx-auto mb-4 h-1 w-10 shrink-0 rounded-full bg-cream/25 lg:hidden"
          />

          {/* Close button */}
          <button
            type="button"
            aria-label="Close video"
            onClick={onClose}
            className={cn(
              closeButton,
              "absolute right-3 top-3 z-30 sm:right-5 sm:top-5",
            )}
          >
            <HiXMark className="size-4" />
          </button>

          {/* 1 — Heading, aligned with the media frame */}
          <div
            className={cn(
              "w-full shrink-0 pr-10 pt-1",
              landscapeWidth,
              "mx-auto",
            )}
          >
            {heading}
          </div>

          {/* 2 — Landscape media */}
          <div
            className={cn(
              "relative mx-auto mt-3 w-full shrink-0 sm:mt-5",
              landscapeWidth,
            )}
          >
            {/* Ambient glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 m-auto h-3/4 w-3/4 rounded-full bg-accent/10 blur-3xl"
            />

            <div
              className={cn(
                "relative isolate aspect-video w-full overflow-hidden",
                /* Hard height cap so the heading, media and counter all fit
                   inside the card on short viewports. */
                "max-h-[50dvh]",
                "rounded-[1.25rem] bg-black ring-1 ring-cream/15 sm:rounded-[1.5rem]",
              )}
            >
              {media}
              {playOverlay}
            </div>
          </div>

          {/* 3 — Counter and progress */}
          <div className="mt-5 flex w-full shrink-0 items-center justify-center gap-3 pb-2 sm:mt-6 sm:gap-6">
            <button
              type="button"
              aria-label="Previous project"
              onClick={previous}
              className={arrowButtonSm}
            >
              <HiChevronLeft className="size-4 sm:size-5" />
            </button>

            <div className="flex items-center gap-2.5 sm:gap-4">
              <span className="text-lg font-medium tabular-nums text-cream sm:text-2xl">
                {pad(index + 1)}
              </span>

              {progressTicks}

              <span className="text-xs tabular-nums text-cream/40 sm:text-sm">
                {pad(total)}
              </span>
            </div>

            <button
              type="button"
              aria-label="Next project"
              onClick={next}
              className={arrowButtonSm}
            >
              <HiChevronRight className="size-4 sm:size-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ── Portrait layout (unchanged) ─────────────── */

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black/55 p-3 backdrop-blur-2xl sm:p-6"
      onClick={onClose}
    >
      {/* Desktop side navigation */}
      <button
        type="button"
        aria-label="Previous project"
        onClick={(event) => {
          event.stopPropagation();
          previous();
        }}
        className={cn(
          arrowButton,
          "absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 lg:grid lg:size-14",
        )}
      >
        <HiChevronLeft className="size-6" />
      </button>

      <button
        type="button"
        aria-label="Next project"
        onClick={(event) => {
          event.stopPropagation();
          next();
        }}
        className={cn(
          arrowButton,
          "absolute right-3 top-1/2 z-20 hidden -translate-y-1/2 lg:grid lg:size-14",
        )}
      >
        <HiChevronRight className="size-6" />
      </button>

      {/* Main modal card */}
      <div
        className={cn(
          "relative flex max-h-[94dvh] w-full max-w-[360px]",
          "flex-col overflow-x-hidden overflow-y-auto overscroll-contain",
          "mobile-modal-scroll touch-pan-y",
          "rounded-[1.5rem] border border-cream/15",
          "bg-gradient-to-b from-white/[0.09] to-white/[0.03] p-5",
          "shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl",
          "sm:rounded-[2rem] sm:p-6",
          "lg:max-h-[90dvh] lg:max-w-[940px]",
          "lg:flex-row lg:items-center lg:justify-center lg:gap-16",
          "lg:overflow-hidden lg:p-8",
        )}
        onClick={(event) => event.stopPropagation()}
      >
        {/* Mobile drag handle */}
        <span
          aria-hidden="true"
          className="mx-auto mb-4 h-1 w-10 shrink-0 rounded-full bg-cream/25 lg:hidden"
        />

        {/* Close button */}
        <button
          type="button"
          aria-label="Close video"
          onClick={onClose}
          className={cn(
            closeButton,
            "absolute right-3 top-3 z-30 sm:right-5 sm:top-5",
          )}
        >
          <HiXMark className="size-4" />
        </button>

        {/* Project information */}
        <div className="flex w-full min-w-0 shrink-0 flex-col pr-10 pt-1 lg:max-w-[20rem] lg:pr-0 lg:pt-0">
          {heading}
        </div>

        {/* Portrait reel video */}
        <div className="relative mt-5 flex w-full shrink-0 justify-center lg:mt-0 lg:h-[min(76dvh,760px)] lg:w-[350px] lg:flex-none">
          {/* Ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 m-auto h-3/4 w-3/4 rounded-full bg-accent/10 blur-3xl"
          />

          {/* Fixed 9:16 reel frame */}
          <div className="relative isolate aspect-[9/16] h-auto w-full max-w-[340px] shrink-0 overflow-hidden rounded-[1.25rem] bg-black ring-1 ring-cream/15 sm:rounded-[1.5rem] lg:h-full lg:w-auto lg:max-w-full lg:aspect-[9/16]">
            {media}
            {playOverlay}
          </div>
        </div>

        {/* Desktop project counter */}
        <div className="hidden shrink-0 items-center lg:flex">
          <div className="flex flex-col items-center gap-4">
            <span className="text-3xl font-medium tabular-nums text-cream">
              {pad(index + 1)}
            </span>

            <span
              aria-hidden="true"
              className="flex flex-col items-center gap-1.5"
            >
              {Array.from({ length: total }).map((_, tick) => (
                <span
                  key={tick}
                  className={cn(
                    "w-px rounded-full transition-all duration-300",
                    tick === index ? "h-5 bg-accent" : "h-2.5 bg-cream/20",
                  )}
                />
              ))}
            </span>

            <span className="text-sm tabular-nums text-cream/40">
              {pad(total)}
            </span>
          </div>
        </div>

        {/* Mobile bottom navigation */}
        <div className="mt-5 flex w-full shrink-0 items-center justify-center gap-7 pb-1 lg:hidden">
          <button
            type="button"
            aria-label="Previous project"
            onClick={previous}
            className={arrowButton}
          >
            <HiChevronLeft className="size-5" />
          </button>

          <div className="flex flex-col items-center gap-2.5">
            <span className="flex items-baseline gap-1.5 text-sm tabular-nums">
              <span className="font-medium text-accent">
                {pad(index + 1)}
              </span>
              <span className="text-cream/40">/ {pad(total)}</span>
            </span>

            {progressTicks}
          </div>

          <button
            type="button"
            aria-label="Next project"
            onClick={next}
            className={arrowButton}
          >
            <HiChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

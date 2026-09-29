
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
  const hasLiveUrl = Boolean(project.liveUrl);

  // Website cards receive the new design; other cards stay unchanged.
  const isWebsite =
    !isVideo && hasLiveUrl && Boolean(project.thumbnailUrl);

  const activate = () => {
    if (isVideo) {
      onOpenVideo?.(project);
      return;
    }

    if (hasLiveUrl) {
      window.open(project.liveUrl, "_blank", "noopener,noreferrer");
    }
  };

  const isInteractive = isVideo || hasLiveUrl;

  const cardClasses = cn(
    "relative overflow-hidden rounded-[1.5rem]",
    isWebsite
      ? "border border-black/[0.08] bg-[#f0ede6] text-left shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.10]"
      : "bg-wine",
    isInteractive ? "block w-full cursor-pointer text-left" : "block",
  );

  const playIndicator = (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-cream/60 bg-black/30 text-cream backdrop-blur-sm transition-all duration-300",
        isVideo ? "size-16 hover:scale-110 sm:size-20" : "hidden",
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
  ) : hasLiveUrl ? (
    <span
      aria-hidden="true"
      className="mt-3 flex w-full items-center justify-center gap-2 rounded-[10px] border border-cream/20 bg-black/40 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-cream transition-all duration-300 group-hover:bg-cream group-hover:text-wine"
    >
      View Website
      <HiArrowRight className="size-3.5" />
    </span>
  ) : (
    <button
      type="button"
      aria-label="View project"
      onClick={activate}
      className="mt-3 flex w-full items-center justify-center gap-2 rounded-[10px] border border-cream/20 bg-black/40 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-cream transition-all duration-300 hover:bg-cream hover:text-wine"
    >
      <HiArrowRight className="size-3.5" />
      View Project
    </button>
  );

  // NEW: Clean browser-preview design for website projects only.
  const websiteCardBody = (
    <div className="flex h-full min-h-0 flex-col text-left">
      {/* Browser chrome */}
      <div className="flex h-10 shrink-0 items-center gap-1.5 bg-[#252525] px-3 sm:px-4">
        <span className="size-2 rounded-full bg-[#e47770]" />
        <span className="size-2 rounded-full bg-[#e7c16b]" />
        <span className="size-2 rounded-full bg-[#7cba89]" />

        <div className="ml-2 flex h-6 min-w-0 flex-1 items-center rounded-md bg-white/[0.09] px-2.5">
          <span className="truncate text-[9px] font-medium tracking-wide text-white/60">
            {project.liveUrl?.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          </span>
        </div>

        <span className="ml-1 text-xs text-white/40">↗</span>
      </div>

      {/* Website screenshot */}
      {/* WEBSITE THUMBNAIL PREVIEW */}
{project.thumbnailUrl && (
  <div className="group/preview relative aspect-[2.08/1] w-full overflow-hidden bg-[#e8e5df]">
    <Image
      src={project.thumbnailUrl}
      alt={`${project.title} website preview`}
      fill
      priority={index < 3}
      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
      className="object-contain object-top transition-transform duration-500 group-hover/preview:scale-[1.03]"
    />

    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"
    />
  </div>
)}

      {/* Project information */}
      <div className="flex shrink-0 items-start justify-between gap-3 px-4 py-4 sm:px-5 sm:py-5">
        <div className="min-w-0 flex-1">
          <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9b7775]">
            Website / {number}
          </p>

          <h3 className="text-lg font-medium leading-snug tracking-tight text-[#292321] transition-colors duration-300 group-hover:text-wine sm:text-xl">
            {project.title}
          </h3>

          {(project.summary || project.tags) && (
            <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-[#827a72] sm:text-sm">
              {project.summary || project.tags}
            </p>
          )}
        </div>

        <span
          aria-hidden="true"
          className="mt-1 grid size-9 shrink-0 place-items-center rounded-full border border-black/10 text-[#6e171d] transition-all duration-300 group-hover:border-wine group-hover:bg-wine group-hover:text-cream"
        >
          <HiArrowRight className="size-4 -rotate-45" />
        </span>
      </div>
    </div>
  );

  const cardBody = (
    <>
      {/* WEBSITE CARDS: new design */}
      {isWebsite ? (
        websiteCardBody
      ) : (
        <>
          {/* SITE THUMBNAIL — existing fallback */}
          {project.thumbnailUrl && (
            <div className="absolute inset-0">
              <Image
                src={project.thumbnailUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
              />
            </div>
          )}

          {/* REEL THUMBNAIL — unchanged */}
          {isVideo && (
            <>
              <video
                src={project.videoUrl}
                className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                muted
                playsInline
                loop
                preload="auto"
                poster={project.posterUrl}
              />

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

          {/* Non-video: existing decorative background */}
          {!isVideo && !project.thumbnailUrl && (
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

          {/* Existing top label */}
          <div className="pointer-events-none relative z-10 flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <span className="flex size-2 rounded-full bg-accent">
                <span className="animate-pulse" />
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cream/70">
                {isVideo ? "Reel" : hasLiveUrl ? "Website" : "Project"}
              </span>
            </div>

            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cream/40">
              {number}
            </span>
          </div>

          {playIndicator}

          {/* Existing title and tags */}
          <div className="pointer-events-none relative z-10 flex flex-col justify-end p-4 pb-5">
            <h3 className="text-base font-medium leading-snug tracking-[-0.02em] text-cream sm:text-lg sm:leading-[1.2]">
              {project.title}
            </h3>

        {(project.summary || project.tags) && (
          <p className="mt-1.5 text-[10px] text-cream/55 sm:text-xs">
            {project.summary || project.tags}
          </p>
        )}
          </div>

          {/* Existing CTA */}
          <div
            className={cn(
              "absolute bottom-0 left-0 right-0 z-10",
              isInteractive && "pointer-events-none",
            )}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-cream/10 to-transparent" />
            {cta}
          </div>

          {!isVideo && !project.thumbnailUrl &&
            workOrnaments[project.visual]}
        </>
      )}
    </>
  );

  return (
    <div
      style={revealDelay(staggerDelay(index))}
      className="hero-reveal"
    >
      {isInteractive ? (
        <button
          type="button"
          aria-label={
            isVideo ? `Play ${project.title}` : `Visit ${project.title}`
          }
          onClick={activate}
          className={cn(cardClasses, "group")}
          style={isWebsite ? undefined : { aspectRatio: "4 / 3" }}
        >
          {cardBody}
        </button>
      ) : (
        <div
          className={cn(cardClasses, "group")}
          style={{ aspectRatio: "4 / 3" }}
        >
          {cardBody}
        </div>
      )}
    </div>
  );
}
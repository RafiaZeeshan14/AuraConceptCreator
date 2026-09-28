"use client";

import Image from "next/image";
import { BsPlayFill } from "react-icons/bs";
import { revealDelay, staggerDelay } from "@/components/effects";
import type { WorkProject } from "@/data/portfolio-data";

interface ReelCardProps {
  project: WorkProject;
  index: number;
  onOpenVideo?: (project: WorkProject) => void;
}

export function ReelCard({ project, index, onOpenVideo }: ReelCardProps) {
  const hasPoster = Boolean(project.posterUrl);

  return (
    <div
      style={revealDelay(staggerDelay(index))}
      className="hero-reveal group block"
    >
      <article className="group relative overflow-hidden rounded-[1.5rem] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
        {/* Thumbnail - reel aspect ratio (2:3) */}
        <div className="relative aspect-[2/3] overflow-hidden bg-black/20">
          {/* Static poster - if available */}
          {hasPoster && project.posterUrl && (
            <div className="relative w-full h-full">
              <Image
                src={project.posterUrl}
                alt={project.title}
                fill
                priority
                className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>
          )}

          {/* Video hover preview - plays on hover */}
          {project.videoUrl && (
            <video
              src={project.videoUrl}
              poster={project.posterUrl || undefined}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-[1.02]"
              muted
              playsInline
              loop
              preload={hasPoster ? "none" : "metadata"}
            />
          )}

          {/* Fallback when no poster - video first frame or placeholder */}
          {!hasPoster && project.videoUrl && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-opacity duration-500 group-hover:opacity-0">
              <div className="text-cream/30 text-center px-4">
                <p className="text-xs font-medium">Loading preview...</p>
                <p className="text-[9px] mt-1">{project.title}</p>
              </div>
            </div>
          )}

          {/* Center play button - appears on hover with smooth animation */}
          <button
            type="button"
            aria-label={`Play ${project.title}`}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              onOpenVideo?.(project);
            }}
            className="absolute left-1/2 top-1/2 z-10 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-cream/60 bg-black/30 text-cream backdrop-blur-sm transition-all duration-300 ease-out hover:border-cream hover:bg-black/40 hover:scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 sm:size-16"
          >
            <BsPlayFill className="ml-1 size-6 sm:size-7 transition-transform group-hover:scale-110" />
          </button>

          {/* Reel badge - top left */}
          <div className="absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.2em] text-cream/80 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/70 group-hover:text-cream">
            <span className="flex size-1.5 rounded-full bg-accent animate-pulse" />
            <span>Reel</span>
          </div>

          {/* Subtle border glow on hover */}
          <div className="absolute inset-0 border-0 transition-all duration-500 group-hover:border group-hover:border-cream/20 rounded-[1.5rem] pointer-events-none" />
        </div>

        {/* Card content - transparent/blur background, reduced height */}
        <div className="absolute bottom-0 left-0 right-0 p-3 pb-4 backdrop-blur-xl bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/70 group-hover:via-black/30">
          <div className="space-y-1.5">
            {/* Title */}
            <h3 className="text-sm font-medium leading-snug tracking-[-0.02em] text-cream sm:text-base sm:leading-[1.2]">
              {project.title}
            </h3>

            {/* Tags */}
            {project.tags && (
              <p className="text-[10px] text-cream/60 sm:text-xs leading-relaxed">
                {project.tags}
              </p>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
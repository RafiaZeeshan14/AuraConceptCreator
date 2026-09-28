"use client";

import { useEscapeKey } from "@/components/effects";
import type { WorkProject } from "@/data/portfolio-data";

interface VideoModalProps {
  project: WorkProject;
  onClose: () => void;
}

export function VideoModal({ project, onClose }: VideoModalProps) {
  useEscapeKey(onClose);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#120507]/90 p-4 backdrop-blur-md sm:p-8"
      onClick={onClose}
    >
      {/* Modal content */}
      <div
        className="relative w-full max-w-[720px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle glow behind card */}
        <div
          aria-hidden="true"
          className="absolute -left-1/2 -right-1/2 top-0 h-[60%] w-full translate-y-1/3 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(182,41,53,0.22)_0%,rgba(182,41,53,0)_70%)] opacity-60 blur-3xl sm:opacity-80"
        />

        {/* Card */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-cream/10 bg-[#1a0a0c]/95 p-4 sm:p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(237,232,223,0.06)] backdrop-blur-2xl">
          {/* Close button — top-right */}
          <button
            type="button"
            aria-label="Close video"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 grid size-9 place-items-center rounded-full border border-cream/20 bg-[#120507]/70 text-cream transition-colors duration-200 hover:border-cream/50 hover:bg-wine/50 sm:right-6 sm:top-6 sm:size-10"
          >
            <span className="text-lg leading-none sm:text-xl">&times;</span>
          </button>

          {/* Video container */}
          <div className="relative mx-auto max-w-[800px] sm:max-w-[850px]">
            {/* Decorative vignette around video */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2 rounded-t-[1.75rem] bg-gradient-to-b from-cream/[0.04] to-transparent sm:rounded-t-[2rem]"
            />

            <video
              src={project.videoUrl}
              className="mx-auto max-h-[65vh] max-w-full rounded-[1.5rem] sm:max-h-[70vh] sm:rounded-[1.75rem]"
              autoPlay
              controls
              playsInline
            />
          </div>

          {/* Video info */}
          <div className="mt-7 text-center sm:mt-9">
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-cream/50">
              {project.eyebrow}
            </p>
            <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-cream sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-cream/50">{project.tags}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
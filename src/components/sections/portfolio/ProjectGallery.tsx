"use client";

import Image from "next/image";
import type { WorkProject } from "@/data/portfolio-data";

interface ProjectGalleryProps {
  project: WorkProject;
  onClose: () => void;
}

export function ProjectGallery({ project, onClose }: ProjectGalleryProps) {
  const images = project.galleryImages ?? [];

  return (
    <div className="mt-14">
      <div className="mb-6 flex items-center justify-between gap-4 border-t border-wine/15 pt-5">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-wine/45 sm:text-[10px]">
            {project.eyebrow}
          </p>
          <h3 className="mt-2 text-2xl font-medium tracking-[-0.04em] text-wine sm:text-3xl">
            {project.title}
          </h3>
          {(project.description || project.summary) && (
            <p className="mt-2 max-w-2xl text-sm leading-6 text-wine/55">
              {project.description || project.summary}
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="shrink-0 rounded-full border border-wine/20 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-wine/65 transition-colors hover:border-wine hover:bg-wine hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/45 sm:text-[10px]"
        >
          All projects
        </button>
      </div>

      <div className="grid gap-3 sm:gap-4">
        {images.map((src, index) => (
          <div
            key={src}
            className="relative aspect-video w-full overflow-hidden rounded-[1.25rem] bg-[#f7f3ec]"
          >
            <Image
              src={src}
              alt={`${project.title} — image ${index + 1}`}
              fill
              sizes="(max-width: 1440px) 100vw, 1440px"
              loading={index === 0 ? "eager" : "lazy"}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

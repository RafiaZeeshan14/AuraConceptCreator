"use client";

import Image from "next/image";
import { revealDelay, staggerDelay } from "@/components/effects";
import type { WorkProject } from "@/data/portfolio-data";

interface SocialMediaCardProps {
  project: WorkProject;
  index: number;
}

export function SocialMediaCard({
  project,
  index,
}: SocialMediaCardProps) {
  if (!project.thumbnailUrl) {
    throw new Error(`Social media project "${project.title}" has no screenshot.`);
  }

  return (
    <div
      style={revealDelay(staggerDelay(index))}
      className="hero-reveal overflow-hidden rounded-[1.25rem] border border-wine/10 bg-[#17191d] shadow-[0_12px_32px_rgba(93,16,17,0.10)]"
    >
      <div className="relative aspect-[9/19] w-full">
        <Image
          src={project.thumbnailUrl}
          alt={`${project.title} social media screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}

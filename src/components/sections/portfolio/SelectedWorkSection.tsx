"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type {
  VideoSubCategoryId,
  WorkProject,
  WorkCategoryId,
} from "@/data/portfolio-data";
import {
  videoSubCategories,
  videoSubCounts,
  videoSubKind,
  workCategories,
  workCounts,
  workProjects,
} from "@/data/portfolio-data";
import { WorkCard } from "./WorkCard";
import { ReelCard } from "./ReelCard";
import { MediaCard } from "./MediaCard";
import type { MediaCardOrientation } from "./MediaCard";
import { VideoModal } from "./VideoModal";

/**
 * Video Production sub-categories rendered with the shared media card.
 * Adding another content type here is enough — no new card component,
 * no layout code. `label` powers the top-left tag, `orientation` the frame.
 */
const mediaCardSubCategories: Partial<
  Record<VideoSubCategoryId, { label: string; orientation: MediaCardOrientation }>
> = {
  dvc: { label: "Video Production", orientation: "landscape" },
  documentary: { label: "Documentary", orientation: "landscape" },
  reels: { label: "Reels", orientation: "portrait" },
};

export function SelectedWorkSection() {
  const [activeCategory, setActiveCategory] = useState<WorkCategoryId>("all");
  const [activeSubCategory, setActiveSubCategory] =
    useState<VideoSubCategoryId>("dvc");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isVideoTab = activeCategory === "video";
  const isAIContent = activeCategory === "ai";

  /** Media card layout for the active sub-category, if it uses one. */
  const mediaCard = isVideoTab
    ? mediaCardSubCategories[activeSubCategory]
    : undefined;

  const categoryProjects =
    activeCategory === "all"
      ? workProjects
      : workProjects.filter((project) =>
          project.categories.includes(activeCategory),
        );

  // The DVC / Documentary / Reels facets only apply inside Video Production.
  const visibleProjects =
    activeCategory !== "video"
      ? categoryProjects
      : categoryProjects.filter(
          (project) =>
            project.videoUrl && videoSubKind(project) === activeSubCategory,
        );

  const openVideo = (project: WorkProject) => {
    setActiveIndex(
      visibleProjects.findIndex((item) => item.title === project.title),
    );
  };

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-cream px-5 py-24 sm:px-8 sm:py-32 lg:px-14 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Section heading */}
        <div className="about-reveal flex flex-col justify-between gap-6 border-t border-wine/15 pt-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-wine/45 sm:text-[10px]">
              Selected Projects — 03
            </p>
            <h2 className="mt-6 text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.06em]">
              Work we&apos;re
              <br />
              <span className="font-editorial italic text-accent">
                proud of.
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-wine/45 sm:text-right">
            A selection of projects across branding, digital, social media,
            campaigns and production.
          </p>
        </div>

        {/* Category tabs */}
        <div
          role="group"
          aria-label="Filter projects by category"
          className="mt-10 flex snap-x snap-mandatory items-center gap-2 overflow-x-auto border-y border-wine/15 py-4 [scrollbar-width:none] sm:mt-12 sm:flex-wrap sm:overflow-visible [&::-webkit-scrollbar]:hidden"
        >
          {workCategories.map((category) => {
            const isActive = category.id === activeCategory;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={isActive}
                className={cn(
                  "shrink-0 cursor-pointer snap-start rounded-full border px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#b62935]/45 focus-visible:ring-inset sm:text-[10px]",
                  isActive
                    ? "border-wine bg-wine text-cream"
                    : "border-wine/20 text-wine/55 hover:border-wine/45 hover:text-wine",
                )}
              >
                {category.label}
                <span
                  className={cn(
                    "ml-2 text-[9px] tracking-normal",
                    isActive ? "text-cream/55" : "text-wine/30",
                  )}
                >
                  {workCounts[category.id]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Video sub-tabs — centred, Video Production only */}
        {isVideoTab && (
          <div
            role="group"
            aria-label="Filter video work by format"
            className="mt-8 flex items-center justify-center gap-2"
          >
            {videoSubCategories.map((sub) => {
              const isActive = sub.id === activeSubCategory;
              const count = videoSubCounts[sub.id];

              return (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => {
                    setActiveSubCategory(sub.id);
                    setActiveIndex(null);
                  }}
                  aria-pressed={isActive}
                  className={cn(
                    "cursor-pointer rounded-full border px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#b62935]/45 focus-visible:ring-inset sm:px-5 sm:text-[10px]",
                    isActive
                      ? "border-wine bg-wine text-cream"
                      : "border-wine/20 text-wine/55 hover:border-wine/45 hover:text-wine",
                  )}
                >
                  {sub.label}
                  <span
                    className={cn(
                      "ml-2 text-[9px] tracking-normal",
                      isActive ? "text-cream/55" : "text-wine/30",
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Projects - filtered by the active category and sub-tab */}
        {visibleProjects.length === 0 ? (
          <p className="mt-14 border-t border-wine/15 pt-8 text-sm text-wine/45">
            New work in this category is on the way - tell us what you want to
            build.
          </p>
        ) : (
          <div
            key={`${activeCategory}-${isVideoTab ? activeSubCategory : ""}`}
            className={cn(
              "mt-14 grid gap-6",
              mediaCard
                ? mediaCard.orientation === "portrait"
                  ? /* Same grid as AI Content so both card sets share a footprint. */
                    "md:grid-cols-2 xl:grid-cols-3"
                  : "gap-7 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
                : isAIContent
                  ? "md:grid-cols-2 xl:grid-cols-3"
                  : "sm:gap-6 md:grid-cols-2 xl:grid-cols-3",
            )}
          >
            {visibleProjects.map((project, index) => {
              if (mediaCard) {
                return (
                  <MediaCard
                    key={project.title}
                    project={project}
                    index={index}
                    label={mediaCard.label}
                    orientation={mediaCard.orientation}
                    onOpenVideo={openVideo}
                  />
                );
              }

              return isAIContent ? (
                <ReelCard
                  key={project.title}
                  project={project}
                  index={index}
                  onOpenVideo={openVideo}
                />
              ) : (
                <WorkCard
                  key={project.title}
                  project={project}
                  index={index}
                  onOpenVideo={openVideo}
                />
              );
            })}
          </div>
        )}

        {/* Video Modal — layout follows the media orientation of the cards */}
        {activeIndex !== null && visibleProjects[activeIndex] && (
          <VideoModal
            projects={visibleProjects}
            index={activeIndex}
            onClose={() => setActiveIndex(null)}
            onNavigate={setActiveIndex}
            orientation={mediaCard?.orientation ?? "portrait"}
          />
        )}
      </div>
    </section>
  );
}
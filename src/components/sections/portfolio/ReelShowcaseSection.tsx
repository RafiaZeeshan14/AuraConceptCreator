"use client";

import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import type { WorkProject, WorkCategoryId } from "@/data/portfolio-data";
import { workCategories, workProjects } from "@/data/portfolio-data";
import { ReelCard } from "./ReelCard";
import { VideoModal } from "./VideoModal";

export function ReelShowcaseSection() {
  const [activeCategory, setActiveCategory] = useState<WorkCategoryId>("video");
  const [activeVideo, setActiveVideo] = useState<WorkProject | null>(null);

  // Reel categories for tabs
  const reelCategories = workCategories.filter(
    (c) => c.id === "video" || c.id === "ai"
  );

  // Memoized filtered projects
  const visibleProjects = useMemo(() => {
    const videoProjects = workProjects.filter((p) => p.videoUrl);

    if (activeCategory === "ai") {
      // AI Content: only projects with "ai" category
      return videoProjects.filter((p) => p.categories.includes("ai"));
    }

    if (activeCategory === "video") {
      // Video Production: only projects with "video" but NOT "ai"
      return videoProjects.filter(
        (p) => p.categories.includes("video") && !p.categories.includes("ai")
      );
    }

    // All (fallback): all video projects
    return videoProjects;
  }, [activeCategory]);

  // Compute counts for tabs
  const aiCount = useMemo(
    () => workProjects.filter((p) => p.videoUrl && p.categories.includes("ai")).length,
    []
  );
  const videoCount = useMemo(
    () =>
      workProjects.filter(
        (p) => p.videoUrl && p.categories.includes("video") && !p.categories.includes("ai")
      ).length,
    []
  );

  const getCount = (id: string) => {
    if (id === "ai") return aiCount;
    if (id === "video") return videoCount;
    return workProjects.filter((p) => p.videoUrl).length;
  };

  return (
    <section
      id="reels"
      className="relative overflow-hidden bg-cream px-5 py-24 sm:px-8 sm:py-32 lg:px-14 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Section heading */}
        <div className="about-reveal flex flex-col justify-between gap-6 border-t border-wine/15 pt-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-wine/45 sm:text-[10px]">
              Reel Showcase — {visibleProjects.length}
            </p>
            <h2 className="mt-6 text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.06em]">
              Reels & Video
              <br />
              <span className="font-editorial italic text-accent">
                work.
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-wine/45 sm:text-right">
            A curated collection of AI-generated reels, brand films, social
            content, and production work.
          </p>
        </div>

        {/* Category tabs - only video & ai */}
        <div
          role="group"
          aria-label="Filter reels by category"
          className="mt-10 flex snap-x snap-mandatory items-center gap-2 overflow-x-auto border-y border-wine/15 py-4 [scrollbar-width:none] sm:mt-12 sm:flex-wrap sm:overflow-visible [&::-webkit-scrollbar]:hidden"
        >
          {reelCategories.map((category) => {
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
                  {getCount(category.id)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Reels grid - 3 columns on desktop */}
        {visibleProjects.length === 0 ? (
          <p className="mt-14 border-t border-wine/15 pt-8 text-sm text-wine/45">
            New reels in this category are on the way.
          </p>
        ) : (
          <div
            key={activeCategory}
            className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {visibleProjects.map((project, index) => (
              <ReelCard
                key={project.title}
                project={project}
                index={index}
                onOpenVideo={setActiveVideo}
              />
            ))}
          </div>
        )}

        {/* Video Modal */}
        {activeVideo && (
          <VideoModal
            project={activeVideo}
            onClose={() => setActiveVideo(null)}
          />
        )}
      </div>
    </section>
  );
}
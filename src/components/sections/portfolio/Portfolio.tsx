"use client";

import type { WorkCategoryId } from "@/data/portfolio-data";
import { PortfolioHero } from "./PortfolioHero";
import { SelectedWorkSection } from "./SelectedWorkSection";

interface PortfolioProps {
  /** Category opened from a deep link, e.g. /portfolio?category=ai. */
  initialCategory?: string;
}

export function Portfolio({ initialCategory = "all" }: PortfolioProps) {
  return (
    <main className="overflow-hidden bg-cream text-wine">
      <PortfolioHero />
      <SelectedWorkSection initialCategory={initialCategory as WorkCategoryId} />
    </main>
  );
}

export default Portfolio;
"use client";

import { PortfolioHero } from "./PortfolioHero";
import { SelectedWorkSection } from "./SelectedWorkSection";

export function Portfolio() {
  return (
    <main className="overflow-hidden bg-cream text-wine">
      <PortfolioHero />
      <SelectedWorkSection />
    </main>
  );
}

export default Portfolio;
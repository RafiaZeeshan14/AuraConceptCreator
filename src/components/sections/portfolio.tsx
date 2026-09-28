"use client";

import { PortfolioHero } from "./portfolio/PortfolioHero";
import { SelectedWorkSection } from "./portfolio/SelectedWorkSection";

export default function Portfolio() {
  return (
    <main className="overflow-hidden bg-cream text-wine">
      <PortfolioHero />
      <SelectedWorkSection />
    </main>
  );
}
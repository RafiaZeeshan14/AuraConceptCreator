import type { Metadata } from "next";

import { AboutPageContent } from "@/components/sections/about-page-content";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Aura Concept Creator, an independent creative agency shaping distinctive brands and digital experiences.",
};

export default function AboutPage() {
  return (
    <main className="min-h-svh overflow-hidden">
      <SiteHeader />
      <AboutPageContent />
    </main>
  );
}

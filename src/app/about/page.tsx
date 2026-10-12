import { Metadata } from "next";

import { AboutPageContent } from "@/components/sections/about-page-content";
import { SiteHeader } from "@/components/site-header";
import { BreadcrumbStructuredData } from "@/components/seo/structured-data";

export const metadata: Metadata = {
  title: "About — Creative Agency in Karachi, Pakistan",
  description:
    "Learn about Aura Concept Creator, an independent creative agency in Karachi, Pakistan, shaping distinctive brands and digital experiences for ambitious businesses since 2021.",
  keywords: [
    "about aura concept creator",
    "creative agency karachi",
    "branding agency pakistan",
    "our story",
    "creative agency team",
    "brand identity pakistan",
    "digital agency karachi",
  ],
  alternates: {
    canonical: "https://auraconceptcreator.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />
      <main className="min-h-svh overflow-hidden">
        <SiteHeader />
        <AboutPageContent />
      </main>
    </>
  );
}

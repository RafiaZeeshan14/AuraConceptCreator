import { Metadata } from "next";

import { AboutPreview } from "@/components/sections/about-preview";
import { BrandsShowcase } from "@/components/sections/brands-showcase";
import { Hero } from "@/components/sections/hero";
import { WhyChooseAura } from "@/components/sections/why-choose-aura";
import { MeetTheTeam } from "@/components/sections/meet-the-team";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Testimonials } from "@/components/sections/testimonials";
import { ServicesPreview } from "@/components/sections/services-preview";
import { SpecializedServicePopup } from "@/components/sections/specialized-service-popup";
import { FaqSection } from "@/components/sections/faq-section";
import { FaqStructuredData, ServiceStructuredData } from "@/components/seo/structured-data";
import { ServicesTicker } from "@/components/effects";

export const metadata: Metadata = {
  title: "Creative Agency in Karachi, Pakistan",
  description:
    "Aura Concept Creator is a full-service creative agency in Karachi, Pakistan. We craft distinctive brands, social media presence, video content, and web experiences that drive results.",
  keywords: [
    "creative agency karachi",
    "branding agency pakistan",
    "social media management",
    "video production company",
    "web development company",
    "AI content creation",
    "digital marketing agency",
    "brand identity design",
    "content creation agency",
    "creative studio karachi",
  ],
  alternates: {
    canonical: "https://auraconceptcreator.com/",
  },
};

export default function Home() {
  return (
    <>
      <FaqStructuredData />
      <ServiceStructuredData />
      <main className="min-h-svh overflow-hidden">
        <SiteHeader />
        <Hero />
        <ServicesTicker />
        <BrandsShowcase />
        <AboutPreview />
        <ServicesPreview />
        <WhyChooseAura />
        <Testimonials />
        <MeetTheTeam />
        <FaqSection />
        <SiteFooter />
      </main>
      <SpecializedServicePopup />
    </>
  );
}

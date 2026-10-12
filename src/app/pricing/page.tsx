import { Metadata } from "next";

import { PricingPageContent } from "@/components/sections/pricing-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { BreadcrumbStructuredData, ServiceStructuredData } from "@/components/seo/structured-data";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing plans for social media management, web development, video production, performance marketing, and AI content creation. Custom packages available for every budget.",
  keywords: [
    "pricing",
    "social media management pricing pakistan",
    "web development pricing karachi",
    "video production pricing",
    "AI content creation pricing",
    "performance marketing packages",
    "marketing agency pricing",
    "creative agency pricing",
    "social media packages",
    "branding packages",
  ],
  alternates: {
    canonical: "https://auraconceptcreator.com/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { label: "Home", href: "/" },
          { label: "Pricing", href: "/pricing" },
        ]}
      />
      <ServiceStructuredData />
      <SiteHeader />
      <PricingPageContent />
      <SiteFooter />
    </>
  );
}

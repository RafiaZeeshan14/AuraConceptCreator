import type { Metadata } from "next";

import { PricingPageContent } from "@/components/sections/pricing-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing plans for social media management, strategic growth, and digital brand development.",
};

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <PricingPageContent />
      <SiteFooter />
    </>
  );
}

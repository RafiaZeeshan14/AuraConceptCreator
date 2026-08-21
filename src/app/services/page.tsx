import type { Metadata } from "next";

import { ServicesPageContent } from "@/components/sections/services-page-content";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Aura Concept Creator services across branding, creative, content, digital marketing, web and specialized production.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <ServicesPageContent />
      <SiteFooter />
    </>
  );
}

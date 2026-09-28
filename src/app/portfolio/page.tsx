import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Portfolio } from "@/components/sections/portfolio";



export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Aura Concept Creator's portfolio of creative campaigns, digital experiences, branding, and social media work.",
};

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader />
      <Portfolio />
      <SiteFooter />
    </>
  );
}
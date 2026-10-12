import { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Portfolio } from "@/components/sections/portfolio";
import { defaultWorkCategory, workCategories } from "@/data/portfolio-data";
import { BreadcrumbStructuredData } from "@/components/seo/structured-data";

export const metadata: Metadata = {
  title: "Portfolio — Our Work & Creative Projects",
  description:
    "Explore Aura Concept Creator's portfolio of creative campaigns, brand identities, social media content, video productions, and web experiences from our Karachi-based creative agency.",
  keywords: [
    "creative portfolio",
    "branding work",
    "social media content",
    "video production portfolio",
    "web design portfolio",
    "AI content examples",
    "creative campaigns karachi",
    "brand identity portfolio",
    "event coverage",
    "reels portfolio",
  ],
  alternates: {
    canonical: "https://auraconceptcreator.com/portfolio",
  },
};

const categoryIds = new Set<string>(workCategories.map(({ id }) => id));

export default async function PortfolioPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { category } = await searchParams;
  const requested = Array.isArray(category) ? category[0] : category;
  /* Anything unknown — including a stale ?category=all — opens the first tab. */
  const initialCategory =
    requested && categoryIds.has(requested) ? requested : defaultWorkCategory;

  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
        ]}
      />
      <SiteHeader />
      <Portfolio initialCategory={initialCategory} />
      <SiteFooter />
    </>
  );
}
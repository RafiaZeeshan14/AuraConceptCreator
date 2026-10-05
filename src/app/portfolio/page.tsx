import type { Metadata } from "next";

// import { CursorAura } from "@/components/effects";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Portfolio } from "@/components/sections/portfolio";
import { defaultWorkCategory, workCategories } from "@/data/portfolio-data";



export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Aura Concept Creator's portfolio of creative campaigns, digital experiences, branding, and social media work.",
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
      {/* Custom pointer effect — enable later by uncommenting both this line
          and the import above. */}
      {/* <CursorAura /> */}
      <SiteHeader />
      <Portfolio initialCategory={initialCategory} />
      <SiteFooter />
    </>
  );
}
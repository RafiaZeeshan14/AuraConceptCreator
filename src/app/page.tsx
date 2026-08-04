import { AboutPreview } from "@/components/sections/about-preview";
import { Hero } from "@/components/sections/hero";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <main className="min-h-svh overflow-hidden">
      <SiteHeader />
      <Hero />
      <AboutPreview />
    </main>
  );
}

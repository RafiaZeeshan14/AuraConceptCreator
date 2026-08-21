import { AboutPreview } from "@/components/sections/about-preview";
import { BrandsShowcase } from "@/components/sections/brands-showcase";
import { Hero } from "@/components/sections/hero";
import { WhyChooseAura } from "@/components/sections/why-choose-aura";
import { MeetTheTeam } from "@/components/sections/meet-the-team";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main className="min-h-svh overflow-hidden">
      <SiteHeader />
      <Hero />
      <AboutPreview />
       <BrandsShowcase />
      <WhyChooseAura />
      <Testimonials />
      <MeetTheTeam />
      <SiteFooter />
    </main>
  );
}

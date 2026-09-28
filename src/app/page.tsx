import { AboutPreview } from "@/components/sections/about-preview";
import { BrandsShowcase } from "@/components/sections/brands-showcase";
import { Hero } from "@/components/sections/hero";
import { WhyChooseAura } from "@/components/sections/why-choose-aura";
import { MeetTheTeam } from "@/components/sections/meet-the-team";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Testimonials } from "@/components/sections/testimonials";
import { ServicesPreview } from "@/components/sections/services-preview";
import { FaqSection } from "@/components/sections/faq-section";
import { ServicesTicker } from "@/components/effects";

export default function Home() {
  return (
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
  );
}

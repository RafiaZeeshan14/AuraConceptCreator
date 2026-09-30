import type { Metadata } from "next";

import { ContactPageContent } from "@/components/sections/contact-page";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Aura Concept Creator about branding, digital marketing, video production, web and AI content. Send us a brief and we'll reply within one business day.",
};

export default function ContactPage() {
  return (
    <main className="min-h-svh overflow-hidden">
      <SiteHeader />
      <ContactPageContent />
    </main>
  );
}

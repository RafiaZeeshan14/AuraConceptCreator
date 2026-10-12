import { Metadata } from "next";

import { ContactPageContent } from "@/components/sections/contact-page";
import { SiteHeader } from "@/components/site-header";
import { BreadcrumbStructuredData } from "@/components/seo/structured-data";

export const metadata: Metadata = {
  title: "Contact — Let's Start a Project",
  description:
    "Talk to Aura Concept Creator about branding, social media, video production, web development, and AI content creation. Send us a brief and we'll reply within one business day.",
  keywords: [
    "contact aura concept creator",
    "creative agency contact karachi",
    "branding agency contact pakistan",
    "social media management contact",
    "video production contact",
    "web development contact",
    "AI content creation contact",
    "creative agency email",
    "karachi creative agency",
  ],
  alternates: {
    canonical: "https://auraconceptcreator.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />
      <main className="min-h-svh overflow-hidden">
        <SiteHeader />
        <ContactPageContent />
      </main>
    </>
  );
}

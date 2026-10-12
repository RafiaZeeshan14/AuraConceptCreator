import {
  buildBreadcrumbStructuredData,
  buildLocalBusinessStructuredData,
  buildOrganizationStructuredData,
  buildWebsiteStructuredData,
  type BreadcrumbItem,
} from "@/lib/seo";
import { faqs } from "@/data/faq";
import { services } from "@/data/services";
import { COMPANY_DETAILS, SITE_URL } from "@/lib/seo";

function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function StructuredData() {
  return (
    <>
      <JsonLd data={buildOrganizationStructuredData()} />
      <JsonLd data={buildWebsiteStructuredData()} />
      <JsonLd data={buildLocalBusinessStructuredData()} />
    </>
  );
}

export function FaqStructuredData() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }}
    />
  );
}

export function BreadcrumbStructuredData({
  items,
}: {
  items: BreadcrumbItem[];
}) {
  return <JsonLd data={buildBreadcrumbStructuredData(items)} />;
}

export function ServiceStructuredData() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Services offered by Aura Concept Creator",
        itemListElement: services.map((service, index) => ({
          "@type": "Service",
          position: index + 1,
          name: service.title,
          description: service.intro,
          serviceType: service.title,
          category: service.portfolioCategory,
          provider: {
            "@type": "Organization",
            name: COMPANY_DETAILS.name,
            url: SITE_URL,
          },
        })),
      }}
    />
  );
}

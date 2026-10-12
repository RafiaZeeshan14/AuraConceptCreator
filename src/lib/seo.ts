export const SITE_NAME = "Aura Concept Creator";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://auraconceptcreator.com";

export const SITE_DESCRIPTION =
  "A digital creative agency crafting distinctive brands, social media presence, video content, and web experiences that move audiences.";

export const SITE_KEYWORDS: string[] = [
  "creative agency",
  "branding agency",
  "social media management",
  "social media agency",
  "video production",
  "video editing",
  "content creation",
  "web development",
  "e-commerce",
  "AI content creation",
  "AI video",
  "brand identity",
  "graphic design",
  "digital marketing",
  "performance marketing",
  "paid ads",
  "Meta ads",
  "Google Ads",
  "creative agency Pakistan",
  "branding agency Karachi",
  "social media management Pakistan",
  "video production company Pakistan",
  "web development company Pakistan",
  "AI content agency",
  "event coverage",
  "drone videography",
  "corporate events",
  "product launch",
  "brand film",
  "reels",
  "documentary",
  "DVC",
  "commercial shoot",
  "creative campaigns",
  "digital experiences",
  "brand strategy",
  "content strategy",
  "marketing agency",
  "digital agency",
  "creative studio",
];

export const COMPANY_DETAILS = {
  name: SITE_NAME,
  email: "auraconceptcreator@gmail.com",
  phone: "+92 319 6865993",
  phoneLink: "+923196865993",
  address: "Gulshan-e-Maymar, Shehryar Towers, Mezzanine Floor, Office No: 12",
  addressLocality: "Karachi",
  addressRegion: "Sindh",
  postalCode: "75500",
  addressCountry: "PK",
  founded: 2021,
  teamSize: 25,
  clientsServed: "1,500+",
} as const;

export const SOCIAL_PROFILES = {
  facebook: "https://www.facebook.com/share/1BzKV53d8A/",
  instagram: "https://www.instagram.com/aura.conceptcreator",
  linkedin: "https://www.linkedin.com/company/auraconceptcreator/",
  youtube: "https://youtube.com/@auraconceptcreator",
} as const;

export const LOGO_IMAGE = `${SITE_URL}/logo.png`;

export const SERVICES_SECTIONS = {
  branding: { name: "Branding & Creative Design" },
  social: { name: "Digital Marketing & Social Media" },
  video: { name: "Video Production & Editing" },
  web: { name: "Web & E-Commerce" },
  ai: { name: "AI Content Creation" },
  specialized: { name: "Specialized Services" },
};

export const defaultOpenGraph = {
  type: "website",
  locale: "en_US",
  url: SITE_URL,
  siteName: SITE_NAME,
};


export type BreadcrumbItem = { label: string; href: string };

export function buildBreadcrumbStructuredData(items: BreadcrumbItem[]) {
  const url = (href: string) =>
    href.startsWith("http") ? href : `${SITE_URL}${href}`;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: url(item.href),
    })),
  };
}

export const buildLocalBusinessStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: COMPANY_DETAILS.name,
  url: SITE_URL,
  email: COMPANY_DETAILS.email,
  telephone: COMPANY_DETAILS.phoneLink,
  logo: LOGO_IMAGE,
  image: LOGO_IMAGE,
  foundingDate: `${COMPANY_DETAILS.founded}-01-01`,
  numberOfEmployees: {
    "@type": "PropertyValue",
    value: COMPANY_DETAILS.teamSize,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY_DETAILS.address,
    addressLocality: COMPANY_DETAILS.addressLocality,
    addressRegion: COMPANY_DETAILS.addressRegion,
    postalCode: COMPANY_DETAILS.postalCode,
    addressCountry: COMPANY_DETAILS.addressCountry,
  },
  priceRange: "$$",
  currenciesAccepted: "PKR",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "10:00",
    },
  ],
  sameAs: Object.values(SOCIAL_PROFILES),
});

export const buildOrganizationStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_DETAILS.name,
  url: SITE_URL,
  email: COMPANY_DETAILS.email,
  telephone: COMPANY_DETAILS.phoneLink,
  logo: LOGO_IMAGE,
  image: LOGO_IMAGE,
  foundingDate: `${COMPANY_DETAILS.founded}-01-01`,
  sameAs: Object.values(SOCIAL_PROFILES),
  contactPoints: [
    {
      "@type": "ContactPoint",
      email: COMPANY_DETAILS.email,
      telephone: COMPANY_DETAILS.phoneLink,
      contactType: "customer service",
      availableLanguage: ["English"],
    },
  ],
  department: Object.entries(SERVICES_SECTIONS).map(([key, { name }]) => ({
    "@type": "Organization",
    name,
    url: `${SITE_URL}/portfolio?category=${key}`,
  })),
});

export const buildWebsiteStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: COMPANY_DETAILS.name,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "en-US",
  publisher: {
    "@type": "Organization",
    name: COMPANY_DETAILS.name,
    logo: LOGO_IMAGE,
  },
});

export const siteConfig = {
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  contact: COMPANY_DETAILS,
  social: SOCIAL_PROFILES,
};

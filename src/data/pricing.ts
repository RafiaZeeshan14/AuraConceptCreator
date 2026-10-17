import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlinePresentationChartLine,
  HiOutlineTrophy,
  HiOutlineUserGroup,
} from "react-icons/hi2";

export const plannerLabels = [
  "Ideas",
  "Strategy",
  "Creative",
  "Technology",
  "Impact",
] as const;

export const planTabs = [
  "Social Media Management",
  "Website Development",
  "Performance Marketing",
  "Production",
] as const;

export type PlanTab = (typeof planTabs)[number];

export interface PlanDetails {
  label: string;
  heading?: string;
  price?: string;
  suffix?: string;
  priceNote?: string;
  description?: string;
  features: readonly string[];
  badge?: string;
  /** Single line at the top of the card for what sets the package apart. */
  highlight?: string;
  /** Audiences or use cases shown as chips under the heading. */
  bestFor?: readonly string[];
  /** Label/value rows under the price, e.g. backend and delivery. */
  meta?: readonly { label: string; value: string }[];
  featured?: boolean;
}

interface PlanSet {
  eyebrow: string;
  title: readonly [string, string];
  intro: string;
  plans: readonly PlanDetails[];
  /** Bespoke package, rendered as its own landscape panel under the grid. */
  custom?: {
    title: string;
    heading: readonly [string, string];
    lead: string;
    /** Flat list of selectable items, rendered as chips. */
    requirements?: readonly string[];
    /** Grouped items with a short description under each title. */
    items?: readonly { title: string; description: string }[];
    /** Small heading above `items`. */
    listLabel?: string;
    meta?: readonly { label: string; value: string }[];
    note?: string;
    cta: string;
  };
  /** Terms or scope note shown under the plan grid. */
  note?: string;
}

/**
 * Offered alongside the Social Media Management packages — a fully bespoke
 * engagement shaped around one business's requirements.
 */
export const customPackage = {
  title: "Customized Package",
  heading: ["Let's build a package", "around your goals."],
  lead:
    "Let’s align a meeting to discuss your needs! Every business has different marketing needs, so we also offer fully customized social media packages. Simply let us know your requirements, such as:",
  requirements: [
    "Number of Social Media Posts",
    "Number of Reels",
    "Professional Photoshoot",
    "Video Production",
    "Website Design & Development",
    "Social Media Management",
    "Lead Generation",
    "Performance Marketing",
    "Branding Services",
    "Or Any Specific Service You Require",
  ],
  note:
    "Based on your requirements, we will create a custom package that best fits your business goals and budget.",
  cta: "Book a Meeting",
} as const;

/**
 * Website counterpart to `customPackage` — the fourth, fully bespoke website
 * engagement, shown as its own landscape panel rather than a plan card.
 */
export const customWebsitePackage = {
  title: "Package Four — Custom",
  heading: ["Choose the pages", "you actually need."],
  lead:
    "Build your package around your own scope — we only add what your website actually needs, and quote accordingly.",
  requirements: [
    "Choose the Pages You Need",
    "Custom UI/UX Design",
    "React Development",
    "Backend & Database",
    "API Integration",
    "Authentication & User Roles",
    "Admin Dashboard",
    "Custom Features & Functionality",
    "Animations & Interactions",
    "Third-Party Integrations",
    "Deployment & Support",
  ],
  meta: [
    { label: "Includes", value: "Add only what you need" },
    { label: "Delivery", value: "Based on Project Scope" },
  ],
  cta: "Discuss Your Project",
} as const;
/**
 * Performance counterpart — a bespoke paid-media plan, shown as its own
 * landscape panel below the three tiers.
 */
export const customPerformancePackage = {
  title: "Custom",
  heading: ["Built around", "your goals."],
  lead:
    "A tailored performance marketing plan designed for your unique business needs.",
  listLabel: "You can choose",
  items: [
    {
      title: "Platforms",
      description: "Meta Ads, Google Ads, TikTok Ads",
    },
    {
      title: "Campaign Objective",
      description: "Leads, Sales, Website Traffic, Brand Awareness",
    },
    {
      title: "Creative Requirements",
      description: "As per your needs",
    },
    {
      title: "Monthly Budget",
      description: "Flexible options",
    },
    {
      title: "Custom Strategy & Reporting",
      description: "Based on your goals",
    },
  ],
  cta: "Get a Custom Quote",
} as const;

/**
 * Production counterpart — a bespoke shoot package, shown as its own landscape
 * panel below the three coverage tiers.
 */
export const customProductionPackage = {
  title: "Custom Package",
  heading: ["Build your own", "production package."],
  lead:
    "Choose the services you need and create a package according to your project requirements.",
  requirements: [
    "Videographer",
    "Photographer",
    "Drone Operator",
    "No. of Reels / Videos",
    "Jib / Specialized Equipment",
    "Custom Revisions",
  ],
  cta: "Get a Custom Quote",
} as const;

export const servicePlans: Record<PlanTab, PlanSet> = {
  "Social Media Management": {
    eyebrow: "Social media management",
    title: ["From content to community,", "we grow your brand."],
    intro:
      "Strategic content, compelling visuals and consistent engagement to help your brand stand out and stay relevant across all major platforms.",
    plans: [
      {
        label: "Essential",
        price: "PKR 30,000",
        suffix: "/ month",
        description: "8 creative posts, 6 reels and 2 platforms managed.",
        features: [
          "Account Configuration",
          "8 Creative Post",
          "6 Reels/Animated Reels",
          "Follow Trending/Occasional Post",
          "Copy Writing",
          "Manage 2 Social Media Platforms",
          "1 Commercial Shoot (Monthly)",
          "Working on Engagement Growth",
        ],
        featured: false,
      },
      {
        label: "Growth",
        price: "PKR 50,000",
        suffix: "/ month",
        highlight: "Includes Paid Ad Management",
        features: [
          "Account Configuration",
          "10 Creative Post",
          "8 Reels/Animated Reels",
          "Follow Trending/Occasional Post",
          "Printing Designs",
          "Content Writing",
          "Copy Writing",
          "Manage 3 Social Media Platforms",
          "2 Commercial Shoot (Monthly)",
          "Paid Ad Management (depends on client budget)",
          "Working on Engagement Growth",
        ],
        featured: true,
      },
      {
        label: "Premium",
        price: "PKR 80,000",
        suffix: "/ month",
        description: "Our fullest monthly package, with a standard performance report.",
        features: [
          "Account Configuration",
          "10 Creative Post",
          "14 Reels/Animated Reels",
          "Follow Trending/Occasional Post",
          "Printing Designs",
          "Content Writing",
          "Copy Writing",
          "Manage 3 Social Media Platforms",
          "3 Commercial Shoot (Monthly)",
          "Paid Ad Management (depends on client budget)",
          "Working on Engagement Growth",
          "Standard Performance Report",
        ],
        featured: false,
      },
    ],
    custom: customPackage,
  },
  "Website Development": {
    eyebrow: "Website development",
    title: ["A sharper online presence,", "built to convert."],
    intro:
      "High-converting websites designed to turn attention into action with polished storytelling and seamless customer journeys.",
    plans: [
      {
        label: "Package One",
        heading: "Basic Single Page Website",
        bestFor: [
          "Landing Pages",
          "Personal/Portfolio Websites",
          "Product or Service Promotion",
          "Marketing Campaigns",
        ],
        priceNote: "Starting from",
        price: "Rs. 30,000 /-",
        features: [
          "1 Professional Website Page Template",
          "Modern Design",
          "Mobile & Desktop Friendly",
          "Contact Form",
          "Basic Animations",
          "Form Validation",
          "Website Setup & Launch",
        ],
        meta: [
          { label: "Backend", value: "Not included" },
          { label: "Delivery", value: "3–7 Working Days" },
        ],
        featured: false,
      },
      {
        label: "Package Two",
        heading: "Standard Multi Page Website",
        bestFor: [
          "Company Websites",
          "Business Websites",
          "Service Providers",
          "Small Portfolios",
        ],
        priceNote: "Starting from",
        price: "Rs. 50,000 /-",
        features: [
          "4–6 Website Pages",
          "Custom Professional Design",
          "Mobile & Desktop Friendly",
          "Contact & Enquiry Forms",
          "Third-Party Integrations",
          "Custom Animations",
          "Google-Friendly Website Structure",
          "Website Setup & Launch",
        ],
        meta: [
          { label: "Backend add-on", value: "PKR 20,000–40,000" },
          { label: "Delivery", value: "1–3 Weeks" },
        ],
        featured: true,
      },
      {
        label: "Package Three",
        heading: "Premium Web Application",
        bestFor: [
          "Large Business Websites",
          "Online Stores",
          "Booking Websites",
          "Customer Login Systems",
          "Dashboards & Custom Platforms",
        ],
        priceNote: "Starting from",
        price: "Rs. 70,000 /-",
        features: [
          "10+ Pages/Screens",
          "Complete Custom UI",
          "Mobile & Desktop Friendly",
          "Customer Login & Registration",
          "MongoDB Database",
          "Admin Dashboard",
          "User Management",
          "Online Forms & Data Management",
          "Advanced Features & Integrations",
          "Website Setup & Launch",
        ],
        meta: [{ label: "Delivery", value: "3–8+ Weeks" }],
        featured: false,
      },
    ],
    custom: customWebsitePackage,
    note:
      "Note: Any additional costs, including domain registration, hosting, premium plugins/themes, third-party subscriptions, licenses, or other paid services required for the website, will be charged separately. Pricing based on project requirements.",
  },
  "Performance Marketing": {
    eyebrow: "Performance marketing",
    title: ["Campaigns that create,", "measure and scale momentum."],
    intro:
      "Precision-driven performance strategies that keep acquisition efficient, measurable and focused on what moves your business.",
    plans: [
      {
        label: "1. Launch",
        badge: "Starter",
        price: "PKR 25,000",
        suffix: "/ month",
        description: "For small businesses starting with paid ads.",
        features: [
          "Meta Ads Management (Facebook & Instagram)",
          "Up to 2 active campaigns",
          "Up to 4 ad creatives",
          "Audience Research & Targeting",
          "Pixel & Conversion Tracking Review",
          "Monthly Performance Report",
        ],
        meta: [{ label: "Ad spend", value: "Billed separately" }],
        featured: false,
      },
      {
        label: "2. Growth",
        badge: "Popular",
        price: "PKR 45,000",
        suffix: "/ month",
        description: "For businesses looking to generate consistent leads and sales.",
        features: [
          "Meta Ads Management",
          "Up to 4 active campaigns",
          "Up to 8 ad creatives",
          "Retargeting Campaigns",
          "Pixel, Events & Conversion Tracking Setup",
          "A/B Testing & Audience Optimization",
          "Weekly Performance Monitoring",
          "Monthly Report & Strategy Call",
        ],
        meta: [{ label: "Ad spend", value: "Billed separately" }],
        featured: true,
      },
      {
        label: "3. Scale",
        badge: "Advanced",
        price: "PKR 65,000",
        suffix: "/ month",
        description: "For established brands aiming to scale campaigns and maximize conversions.",
        features: [
          "Meta Ads Management",
          "Google Ads Management",
          "Up to 6 active campaigns across platforms",
          "Up to 12 ad creatives",
          "Advanced Retargeting & Funnel Strategy",
          "Conversion Tracking & Analytics",
          "Continuous A/B Testing & Optimization",
          "Weekly Reports & Monthly Strategy Meeting",
        ],
        meta: [
          { label: "Ad spend", value: "Billed separately" },
          { label: "Google Ads", value: "Subject to account and campaign requirements" },
        ],
        featured: false,
      },
    ],
    custom: customPerformancePackage,
  },
  Production: {
    eyebrow: "Production",
    title: ["Content that looks premium,", "feels authentic and converts."],
    intro:
      "Creative production for campaigns, brand stories and social content that holds attention and creates demand.",
    plans: [
      /* Production packages — coverage based, priced per project. */
      {
        label: "01 · Basic",
        heading: "Essential Coverage",
        price: "PKR 40,000 /-",
        features: [
          "1 Teaser Video",
          "1 Highlight Video",
          "1 Video Camera",
          "1 Photography Camera",
          "Event Photography",
        ],
        meta: [{ label: "Revisions", value: "1 Revision" }],
        featured: false,
      },
      {
        label: "02 · Standard",
        heading: "Professional Coverage",
        badge: "Popular",
        price: "PKR 60,000 /-",
        features: [
          "1 Teaser Video",
          "1 Highlight Video",
          "3 Reels",
          "1 Video Camera",
          "1 Photography Camera",
          "1 Drone",
          "Event Photography",
        ],
        meta: [{ label: "Revisions", value: "3 Revisions" }],
        featured: true,
      },
      {
        label: "03 · Premium",
        heading: "Cinematic Coverage",
        price: "PKR 100,000 /-",
        features: [
          "1 Teaser Video",
          "1 Highlight Video",
          "5 Reels",
          "2 Video Cameras",
          "2 Photography Cameras",
          "1 Drone",
          "1 Jib Camera Setup",
          "Event Photography",
        ],
        meta: [{ label: "Revisions", value: "5 Revisions" }],
        featured: false,
      },
    ],
    custom: customProductionPackage,
  },
};

export const pricingReasons = [
  {
    title: "Result Driven",
    description: "Content that converts and helps your brand stand out.",
    icon: HiOutlineTrophy,
  },
  {
    title: "Dedicated Team",
    description: "Creative minds focused on your growth and success.",
    icon: HiOutlineUserGroup,
  },
  {
    title: "Data Backed",
    description: "Every decision is guided by performance metrics and insight.",
    icon: HiOutlinePresentationChartLine,
  },
  {
    title: "Flexible Plans",
    description: "Solutions that fit your goals, budget, and stage.",
    icon: HiOutlineAdjustmentsHorizontal,
  },
] as const;

export type ServicePlan = PlanSet;
export type PricingPlan = PlanDetails;
export type PricingReason = (typeof pricingReasons)[number];

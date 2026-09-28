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

export const servicePlans = {
  "Social Media Management": {
    eyebrow: "Social media management",
    title: ["From content to community,", "we grow your brand."],
    intro:
      "Strategic content, compelling visuals and consistent engagement to help your brand stand out and stay relevant across all major platforms.",
    plans: [
      {
        label: "Essential",
        price: "PKR 50,000",
        suffix: "/ month",
        description: "For growing brands getting started with social media.",
        features: [
          "12 Posts per Month",
          "Content Strategy",
          "Graphic Design",
          "Caption Writing",
          "Basic Community Management",
          "Monthly Performance Report",
        ],
        featured: false,
      },
      {
        label: "Growth",
        price: "PKR 80,000",
        suffix: "/ month",
        description: "For businesses ready to scale their online presence.",
        features: [
          "20 Posts per Month",
          "Content Strategy & Planning",
          "Custom Graphics & Reels",
          "Caption Writing & Hashtags",
          "Active Community Management",
          "Monthly Report + Insights",
          "Strategy Call (Monthly)",
        ],
        featured: true,
      },
      {
        label: "Premium",
        price: "PKR 120,000",
        suffix: "/ month",
        description: "For established brands that want maximum impact.",
        features: [
          "30+ Posts per Month",
          "Full Content Strategy",
          "Graphics, Reels & Motion Content",
          "Advanced Hashtag Strategy",
          "Dedicated Account Manager",
          "Detailed Analytics Report",
          "Monthly Strategy Session",
        ],
        featured: false,
      },
    ],
  },
  "Website Development": {
    eyebrow: "Website development",
    title: ["A sharper online presence,", "built to convert."],
    intro:
      "High-converting websites designed to turn attention into action with polished storytelling and seamless customer journeys.",
    plans: [
      {
        label: "Starter",
        price: "PKR 60,000",
        suffix: "/ month",
        description: "For growing brands that need a clear, credible digital presence.",
        features: [
          "Landing Page Design",
          "Responsive Development",
          "Basic SEO Setup",
          "Content Blocks",
          "Lead Capture Form",
          "Monthly Optimization",
        ],
        featured: false,
      },
      {
        label: "Scale",
        price: "PKR 95,000",
        suffix: "/ month",
        description: "For brands ready to grow beyond a one-page website.",
        features: [
          "Custom Website Design",
          "Full UX Strategy",
          "Advanced CMS Setup",
          "Conversion Focused Sections",
          "Analytics Integration",
          "Quarterly Growth Review",
        ],
        featured: true,
      },
      {
        label: "Premium",
        price: "PKR 150,000",
        suffix: "/ month",
        description: "For businesses that want premium digital experiences and funnels.",
        features: [
          "Full Website Build",
          "Motion & Micro-Interactions",
          "Conversion Funnel Design",
          "Priority Support",
          "Marketing Integration",
          "Ongoing Performance Optimization",
        ],
        featured: false,
      },
    ],
  },
  "Performance Marketing": {
    eyebrow: "Performance marketing",
    title: ["Campaigns that create,", "measure and scale momentum."],
    intro:
      "Precision-driven performance strategies that keep acquisition efficient, measurable and focused on what moves your business.",
    plans: [
      {
        label: "Launch",
        price: "PKR 55,000",
        suffix: "/ month",
        description: "For brands testing demand with focused digital campaigns.",
        features: [
          "Campaign Setup",
          "Audience Targeting",
          "Creative Testing",
          "Weekly Reporting",
          "Landing Page Review",
          "Ad Optimization",
        ],
        featured: false,
      },
      {
        label: "Growth",
        price: "PKR 90,000",
        suffix: "/ month",
        description: "For brands ready to scale spend and improve efficiency.",
        features: [
          "Multi-Channel Strategy",
          "Creative Iteration",
          "Advanced Funnel Tracking",
          "Conversion Analysis",
          "Budget Scaling Support",
          "Monthly Strategy Session",
        ],
        featured: true,
      },
      {
        label: "Scale",
        price: "PKR 140,000",
        suffix: "/ month",
        description: "For ambitious brands demanding stronger acquisition at scale.",
        features: [
          "Full Media Buying",
          "A/B Testing at Scale",
          "Performance Dashboard",
          "Creative Strategy Partner",
          "Market Expansion Planning",
          "Priority Account Support",
        ],
        featured: false,
      },
    ],
  },
  Production: {
    eyebrow: "Production",
    title: ["Content that looks premium,", "feels authentic and converts."],
    intro:
      "Creative production for campaigns, brand stories and social content that holds attention and creates demand.",
    plans: [
      {
        label: "Essentials",
        price: "PKR 45,000",
        suffix: "/ month",
        description: "For brands needing polished short-form production support.",
        features: [
          "2 Reels / Month",
          "Basic Editing",
          "Brand Visuals",
          "Motion Graphics",
          "Creative Direction",
          "Delivery Support",
        ],
        featured: false,
      },
      {
        label: "Pro",
        price: "PKR 85,000",
        suffix: "/ month",
        description: "For brands ready to produce regular high-impact creative assets.",
        features: [
          "4 Reels / Month",
          "Concept Development",
          "Full Production Support",
          "Editing & Post",
          "On-Brand Direction",
          "Monthly Content Review",
        ],
        featured: true,
      },
      {
        label: "Elite",
        price: "PKR 130,000",
        suffix: "/ month",
        description: "For brands wanting premium production at campaign scale.",
        features: [
          "8+ Deliverables",
          "Campaign Production",
          "Photography & Video",
          "Advanced Editing",
          "Creative Team Support",
          "Priority Scheduling",
        ],
        featured: false,
      },
    ],
  },
} as const;

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

export type ServicePlan = typeof servicePlans[keyof typeof servicePlans];
export type PricingPlan = (typeof servicePlans)[PlanTab]["plans"][number];
export type PricingReason = (typeof pricingReasons)[number];
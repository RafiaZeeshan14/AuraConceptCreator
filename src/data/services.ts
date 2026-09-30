import {
  HiOutlineChartBar,
  HiOutlineCube,
  HiOutlineFilm,
  HiOutlineGlobeAlt,
  HiOutlineLightBulb,
  HiOutlineMegaphone,
} from "react-icons/hi2";

import type { WorkFilter } from "./portfolio-data";

export const services = [
   {
    number: "01",
    title: "Branding & Creative Design",
    portfolioCategory: "branding" as WorkFilter,
    intro:
      "Creative visuals that capture attention and communicate your brand message across both digital and print platforms.",
    items: [
      "Social Media Design",
      "Print & Marketing Materials",
      "Packaging Design",
      "Print Design",
      "Presentation Design",
      "Motion Graphics",
    ],
    icon: HiOutlineCube,
  },
   {
    number: "02",
    title: "Digital Marketing & Social Media",
    portfolioCategory: "social" as WorkFilter,
    intro:
      "Grow your online presence with data-driven marketing strategies and engaging social media management.",
    items: [
      "Social Media Management",
      "Content Planning",
      "Content Calendar",
      "Facebook & Instagram Marketing",
      "LinkedIn Marketing",
      "Community Management",
      "Meta Ads",
      "Performance Reporting",
    ],
    icon: HiOutlineMegaphone,
  },
 
  {
    number: "03",
    title: "Video Production & Editing",
    portfolioCategory: "video" as WorkFilter,
    intro:
      "Professional content creation that tells your story through high-quality visuals and engaging videos.",
    items: [
      "Photography",
      "Videography",
      "Product Shoots",
      "Corporate Shoots",
      "Event Coverage",
      "Drone Videography",
      "Video Editing",
      "Reels & Short-form Content",
    ],
    icon: HiOutlineFilm,
  },
 
  {
    number: "04",
    title: "Web & E-Commerce",
    portfolioCategory: "web" as WorkFilter,
    intro:
      "Modern websites and e-commerce solutions designed for performance, user experience, and business growth.",
    items: [
      "Business Websites",
      "E-Commerce Stores",
      "Landing Pages",
      "UI/UX Design",
      "Website Maintenance",
      "SEO Optimization",
    ],
    icon: HiOutlineGlobeAlt,
  },
  {
    number: "05",
    title: "AI Content Creation",
    portfolioCategory: "ai" as WorkFilter,
    intro:
      "Create high-quality, on-brand content faster with AI-powered ideas, copy, visuals, and content workflows tailored to your audience.",
    items: [
      "AI Content Strategy",
      "Prompt Development",
      "AI Copywriting",
      "AI Image Generation",
      "AI Video Concepts",
      "Content Repurposing",
    ],
    icon: HiOutlineLightBulb,
    forceTwoLines: true,
  },
  {
    number: "06",
    title: "Specialized Services",
    portfolioCategory: "specialized" as WorkFilter,
    intro:
      "Tailored creative solutions designed for unique business requirements and large-scale projects.",
    items: [
      "Corporate Events",
      "Product Launches",
      "Exhibition Branding",
      "Live Streaming",
      "Corporate Photography",
      "Creative Campaigns",
      "Digital Signage",
      "Custom Solutions",
    ],
    icon: HiOutlineChartBar,
  },
];

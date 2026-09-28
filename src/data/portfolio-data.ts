// ─────────────────────────────────────────────
// PORTFOLIO DATA
// ─────────────────────────────────────────────
// All project content lives here — the Portfolio
// component only imports and renders this data.
// ─────────────────────────────────────────────

// Category definitions — mirrored by the filter tabs.
export const workCategories = [
  { id: "all", label: "All Work" },
  { id: "branding", label: "Branding & Creative" },
  { id: "social", label: "Social Media" },
  { id: "video", label: "Video Production" },
  { id: "web", label: "Web & E-Commerce" },
  { id: "ai", label: "AI Content" },
  { id: "specialized", label: "Specialized" },
] as const;

export type WorkCategoryId = (typeof workCategories)[number]["id"];
export type WorkFilter = Exclude<WorkCategoryId, "all">;

// Visual style identifiers used by project cards.
export type WorkVisual = "orbit" | "columns" | "rings" | "discs" | "video";

// Visual style configuration for each visual type
export interface WorkVisualStyle {
  surface: string;
  label: string;
  eyebrow: string;
  headline: string;
  accent: string;
  arrow: string;
}

// A single portfolio project.
export interface WorkProject {
  categories: WorkFilter[];
  visual: WorkVisual;
  eyebrow: string;
  headline: [string, string];
  title: string;
  tags: string;
  description?: string;
  videoUrl?: string;
  posterUrl?: string;
}

// ─────────────────────────────────────────────
// PROJECT LIST
// ─────────────────────────────────────────────

export const workProjects: WorkProject[] = [
  {
    categories: ["branding", "social"],
    visual: "orbit",
    eyebrow: "Social / Branding",
    headline: ["Building", "attention."],
    title: "Brand & Social Presence",
    tags: "Strategy · Creative · Social Media",
  },
  {
    categories: ["web", "branding"],
    visual: "columns",
    eyebrow: "Digital / Experience",
    headline: ["Designed", "to move."],
    title: "Digital Experience",
    tags: "UX · Design · Development",
  },
  {
    categories: ["branding", "video"],
    visual: "rings",
    eyebrow: "Campaign / Creative",
    headline: ["Stories", "people feel."],
    title: "Campaign & Creative Direction",
    tags: "Concept · Campaign · Production",
  },
  {
    categories: ["video"],
    visual: "discs",
    eyebrow: "Production / Visual",
    headline: ["Make it", "memorable."],
    title: "Photo & Video Production",
    tags: "Direction · Shoot · Edit",
  },
  {
    categories: ["social"],
    visual: "orbit",
    eyebrow: "Social / Content",
    headline: ["Always", "in the feed."],
    title: "Social Content Engine",
    tags: "Reels · Calendar · Community",
  },
  {
    categories: ["web"],
    visual: "columns",
    eyebrow: "Web / E-Commerce",
    headline: ["Built to", "convert."],
    title: "E-Commerce Storefront",
    tags: "Store · UI/UX · SEO",
  },
  {
    categories: ["branding"],
    visual: "discs",
    eyebrow: "Branding / Identity",
    headline: ["A brand", "you recall."],
    title: "Brand Identity System",
    tags: "Logo · Guidelines · Collateral",
  },
  {
    categories: ["specialized"],
    visual: "orbit",
    eyebrow: "Events / Specialized",
    headline: ["Presence", "offline too."],
    title: "Event & Exhibition Branding",
    tags: "Stands · Signage · Print",
  },
  {
    categories: ["video", "specialized"],
    visual: "columns",
    eyebrow: "Production / Launch",
    headline: ["Launched", "with impact."],
    title: "Product Launch Film",
    tags: "Direction · Shoot · Edit",
  },
  {
    categories: ["social", "specialized"],
    visual: "discs",
    eyebrow: "Performance / Social",
    headline: ["Reach that", "performs."],
    title: "Performance Campaign",
    tags: "Paid Social · Reporting · Growth",
  },
  // ── Video / Reel projects ──────────────────────
  {
    categories: ["video", "ai"],
    visual: "video",
    eyebrow: "AI Video / Reel",
    headline: ["Fuji Film,", "AI crafted."],
    title: "Fuji AI Reel",
    tags: "AI Video · Concept · Reel",
    description: "An AI-generated reel showcasing Fuji's aesthetic through generative visuals and cinematic storytelling.",
    videoUrl: "https://res.cloudinary.com/l92fw4gu/video/upload/v1790592134/FUJI_VIDEO_LOW.mp4",
    posterUrl: "https://res.cloudinary.com/l92fw4gu/video/upload/v1790592134/FUJI_VIDEO_LOW.jpg",
  },
  {
    categories: ["video", "social", "ai"],
    visual: "video",
    eyebrow: "Social / Brand Reel",
    headline: ["International", "Cat Day."],
    title: "Fasfars International Cats Day",
    tags: "Social Reel · Brand · Campaign",
    description: "An international Cat Day campaign reel created to celebrate feline love with engaging social-first visuals.",
    videoUrl: "https://res.cloudinary.com/l92fw4gu/video/upload/v1790167213/Fasfars_International_Cats_Day_low.mp4",
    posterUrl: "https://res.cloudinary.com/l92fw4gu/video/upload/v1790167213/Fasfars_International_Cats_Day_low.jpg",
  },
  {
    categories: ["video", "social", "ai"],
    visual: "video",
    eyebrow: "Launch / Brand Film",
    headline: ["Veerpak,", "unwrapped."],
    title: "Veerpak Brand Film",
    tags: "Brand Film · Launch · Edit",
    description: "A brand launch film for Veerpak showcasing the product story with bold visuals and clean editing.",
    videoUrl: "https://res.cloudinary.com/l92fw4gu/video/upload/v1790167201/Veerpak_low.mp4",
    posterUrl: "https://res.cloudinary.com/l92fw4gu/video/upload/v1790167201/Veerpak_low.jpg",
  },
  {
    categories: ["video", "social", "ai"],
    visual: "video",
    eyebrow: "Product / Reel",
    headline: ["Oats,", "reel style."],
    title: "Fasfars Oats Reel",
    tags: "Product Reel · Social · Edit",
    description: "A product-focused social reel for Fasfars Oats highlighting texture, taste, and everyday moments.",
    videoUrl: "https://res.cloudinary.com/l92fw4gu/video/upload/v1790167201/Fasfars_Oats_Reel_low.mp4",
    posterUrl: "https://res.cloudinary.com/l92fw4gu/video/upload/v1790167201/Fasfars_Oats_Reel_low.jpg",
  },
  {
    categories: ["video", "social", "ai"],
    visual: "video",
    eyebrow: "Social / Stitch Reel",
    headline: ["Sky high,", "stitch tight."],
    title: "Sky Stitch Reel 01",
    tags: "Stitch Reel · Social · Edit",
    description: "A fast-paced stitch-style reel crafted for social feeds with quick cuts and smooth transitions.",
    videoUrl: "https://res.cloudinary.com/l92fw4gu/video/upload/v1790167181/Sky_Stitch_Reel_1_Low.mp4",
    posterUrl: "https://res.cloudinary.com/l92fw4gu/video/upload/v1790167181/Sky_Stitch_Reel_1_Low.jpg",
  },
  {
    categories: ["video", "ai"],
    visual: "video",
    eyebrow: "AI / Evergreen Reel",
    headline: ["Content that", "lasts."],
    title: "Evergreen AI Reel",
    tags: "AI Video · Evergreen · Reel",
    description: "An evergreen AI-generated reel designed to stay relevant and drive engagement over time.",
    videoUrl: "https://res.cloudinary.com/l92fw4gu/video/upload/v1790167178/Evergreen_Reel_low.mp4",
    posterUrl: "https://res.cloudinary.com/l92fw4gu/video/upload/v1790167178/Evergreen_Reel_low.jpg",
  },
]

// ─────────────────────────────────────────────
// CATEGORY COUNTS
// ─────────────────────────────────────────────

export const workCounts = workCategories.reduce(
  (counts, { id }) => {
    counts[id] = id === "all" ? workProjects.length : workProjects.filter((p) => p.categories.includes(id)).length;
    return counts;
  },
  {} as Record<WorkCategoryId, number>,
);
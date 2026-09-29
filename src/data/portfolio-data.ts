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

/**
 * Card thumbnails are 3800px-wide multi-megabyte originals. `c_limit` scales
 * them down for card-sized display without cropping, keeping the payload
 * small while the card still renders a crisp image on hi-density screens.
 */
const thumbnail = (path: string) =>
  `https://res.cloudinary.com/l92fw4gu/image/upload/c_limit,w_900,q_auto/${path}`;

// Visual style identifiers used by project cards.
export type WorkVisual = "orbit" | "columns" | "rings" | "discs" | "video";

// Sub-facets shown only while the Video Production tab is active.
export const videoSubCategories = [
  { id: "dvc", label: "DVC" },
  { id: "documentary", label: "Documentary" },
  { id: "reels", label: "Reels" },
] as const;

export type VideoSubCategoryId = (typeof videoSubCategories)[number]["id"];

/** Poster frames are derived from the video itself (first frame). */
const videoPoster = (publicPath: string) =>
  `https://res.cloudinary.com/l92fw4gu/video/upload/so_0/${publicPath}.jpg`;

// A single portfolio project.
export interface WorkProject {
  categories: WorkFilter[];
  visual: WorkVisual;
  eyebrow: string;
  headline: [string, string];
  title: string;
  tags: string;
  /** Short one-liner shown under the title on the card (falls back to `tags`). */
  summary?: string;
  description?: string;
  videoUrl?: string;
  posterUrl?: string;
  /** Which Video Production sub-tab this project belongs to. */
  videoKind?: VideoSubCategoryId;
  /** Screenshot shown as the card artwork for web projects. */
  thumbnailUrl?: string;
  /** Live site opened when the card is clicked. */
  liveUrl?: string;
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
  // ── DVC (Video Production sub-facet) ───────────
  {
    categories: ["video"],
    visual: "video",
    videoKind: "dvc",
    eyebrow: "DVC / Men's Salon",
    headline: ["Dorado,", "redefined."],
    title: "Dorado Men's Salon DVC",
    tags: "DVC · Direction · Edit",
    videoUrl:
      "https://res.cloudinary.com/l92fw4gu/video/upload/v1790692978/Dorado_Men_salon_DVC.mp4",
    posterUrl: videoPoster("v1790692978/Dorado_Men_salon_DVC"),
  },
  {
    categories: ["video"],
    visual: "video",
    videoKind: "dvc",
    eyebrow: "DVC / Hospitality",
    headline: ["A stay worth", "shooting."],
    title: "Vicky Farmhouse DVC",
    tags: "DVC · Cinematography · Edit",
    videoUrl:
      "https://res.cloudinary.com/l92fw4gu/video/upload/v1790692972/Vicky_Farmhous_DVC.mp4",
    posterUrl: videoPoster("v1790692972/Vicky_Farmhous_DVC"),
  },
  {
    categories: ["video"],
    visual: "video",
    videoKind: "dvc",
    eyebrow: "DVC / Automotive",
    headline: ["Built for", "the road."],
    title: "Titan One DVC",
    tags: "DVC · Direction · Post",
    videoUrl:
      "https://res.cloudinary.com/l92fw4gu/video/upload/v1790692940/Titan_One_DVC.mp4",
    posterUrl: videoPoster("v1790692940/Titan_One_DVC"),
  },

  // ── Live client websites ───────────────────────
  {
    categories: ["web"],
    visual: "columns",
    eyebrow: "Web / Media Platform",
    headline: ["Stories that", "move."],
    title: "Westurn Media",
    tags: "Web Design · Development · CMS",
    summary: "Portfolio site for an event management company.",
    thumbnailUrl:
      thumbnail("v1790686611/westturn-media.png"),
    liveUrl: "https://westurn-media.vercel.app/",
  },
  {
    categories: ["web"],
    visual: "columns",
    eyebrow: "Web / E-Commerce",
    headline: ["Draped to", "fit."],
    title: "Autodrapes",
    tags: "Store · UI/UX · Development",
    summary: "Shopify store selling car sunshades for all models.",
    thumbnailUrl:
      thumbnail("v1790686606/autodrapes.png"),
    liveUrl: "https://autodrapes.com/",
  },
  {
    categories: ["web"],
    visual: "columns",
    eyebrow: "Web / Hospitality",
    headline: ["Stays worth", "booking."],
    title: "Vicky Farmhouse",
    tags: "Web Design · Booking Flow · SEO",
    summary: "Booking website for a countryside farmhouse.",
    thumbnailUrl:
      thumbnail("v1790686605/vickyfarmhouse.png"),
    liveUrl: "https://vickyfarmhouse.com/",
  },
  {
    categories: ["web"],
    visual: "columns",
    eyebrow: "Web / Communications",
    headline: ["Clear signal,", "sharper reach."],
    title: "Heights Communications",
    tags: "Web Design · Content · Development",
    summary: "Profile site for an event management company.",
    thumbnailUrl:
      thumbnail("v1790686608/heights-communications.png"),
    liveUrl: "https://heights-communications.com/",
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

// ─────────────────────────────────────────────
// VIDEO SUB-TAB COUNTS
// ─────────────────────────────────────────────

/**
 * Videos without an explicit `videoKind` belong to the Reels sub-tab, so the
 * existing production reels keep showing without needing a per-entry tag.
 */
export const videoSubKind = (project: WorkProject): VideoSubCategoryId =>
  project.videoKind ?? "reels";

export const videoSubCounts = videoSubCategories.reduce(
  (counts, { id }) => {
    counts[id] = workProjects.filter(
      (project) => project.videoUrl && videoSubKind(project) === id,
    ).length;

    return counts;
  },
  {} as Record<VideoSubCategoryId, number>,
);
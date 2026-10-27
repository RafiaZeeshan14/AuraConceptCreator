// ─────────────────────────────────────────────
// PORTFOLIO DATA
// ─────────────────────────────────────────────
// All project content lives here — the Portfolio
// component only imports and renders this data.
// ─────────────────────────────────────────────

// Category definitions — mirrored by the filter tabs.
export const workCategories = [
  { id: "branding", label: "Branding & Creative" },
  { id: "social", label: "Social Media" },
  { id: "video", label: "Video Production" },
  { id: "web", label: "Web & E-Commerce" },
  { id: "ai", label: "AI Content" },
  { id: "specialized", label: "Specialized" },
] as const;

export type WorkCategoryId = (typeof workCategories)[number]["id"];

/** Default tab when no category is requested. */
export const defaultWorkCategory: WorkCategoryId = "branding";

/** Kept as an alias — every category is a filter now that "All Work" is gone. */
export type WorkFilter = WorkCategoryId;

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

export type VideoSubKindId = VideoSubCategoryId | "ai";
/**
 * Poster frames are derived from the video itself. `offset` skips the first
 * frames — some uploads open on a black frame. `crop` trims baked-in
 * letterbox bars, given as Cloudinary "x,y,w,h".
 */
const videoPoster = (publicPath: string, offset = 0, crop?: string) =>
  `https://res.cloudinary.com/l92fw4gu/video/upload/so_${offset}${
    crop ? `,c_crop,${crop}` : ""
  }/${publicPath}.jpg`;

const VIDEO_CDN = "https://res.cloudinary.com/l92fw4gu/video/upload";

/**
 * The stored originals are 40–70 MB, which stalls playback on mobile data.
 * This asks Cloudinary for a lighter H.264 rendition instead — 720p on phones,
 * 1080p on desktop, both with adaptive quality.
 *
 * `crop` strips baked-in letterbox bars. It has to run *before* the width
 * scaling, otherwise the crop would be measured against the downscaled frame.
 */
export const videoStreamUrl = (
  url: string | undefined,
  width: 720 | 1080 = 1080,
  crop?: string,
) => {
  if (!url || !url.startsWith(`${VIDEO_CDN}/`)) return url;

  const [asset, ...rest] = url.slice(VIDEO_CDN.length + 1).split("/");
  const chain = [
    ...(crop ? [`c_crop,${crop}`] : []),
    `vc_h264,q_auto:eco,w_${width}`,
  ].join("/");

  return `${VIDEO_CDN}/${chain}/${[asset, ...rest].join("/")}`;
};

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
  /** YouTube video ID for videos hosted on YouTube instead of the video CDN. */
  youtubeVideoId?: string;
  posterUrl?: string;
  /**
   * Cloudinary crop ("x,y,w,h") that trims baked-in letterbox bars. Applied
   * to the video itself, not just the poster, so the modal plays full-bleed.
   */
  videoCrop?: string;
  /** Which Video Production sub-tab this project belongs to. */
  videoKind?: VideoSubKindId;
  /** Screenshot shown as the card artwork for web projects. */
  thumbnailUrl?: string;
  /** Render only the thumbnail, without the standard project-card artwork. */
  imageOnly?: boolean;
  /** Identifies a gallery that can be opened in the portfolio section. */
  gallerySlug?: string;
  /** Full-width project gallery images. */
  galleryImages?: string[];
  /** Live site opened when the card is clicked. */
  liveUrl?: string;
}

export const hasVideoSource = (
  project: Pick<WorkProject, "videoUrl" | "youtubeVideoId">,
) => Boolean(project.videoUrl || project.youtubeVideoId);

// ─────────────────────────────────────────────
// PROJECT LIST
// ─────────────────────────────────────────────

export const workProjects: WorkProject[] = [
  {
    categories: ["social"],
    visual: "orbit",
    eyebrow: "Social Media / Account Showcase",
    headline: ["Made to", "stand out."],
    title: "Sky Stitch Patches",
    tags: "Instagram Presence · Content · Community",
    description: "Social media presence and content showcase for Sky Stitch Patches.",
    thumbnailUrl:
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793112468/ss-patches.webp",
  },
  {
    categories: ["social"],
    visual: "orbit",
    eyebrow: "Social Media / Account Showcase",
    headline: ["A feed with", "flavour."],
    title: "AL-Jeddah",
    tags: "Instagram Presence · Content · Community",
    description: "Social media presence and content showcase for AL-Jeddah.",
    thumbnailUrl:
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793112461/ss-aljeddah.webp",
  },
  {
    categories: ["social"],
    visual: "orbit",
    eyebrow: "Social Media / Account Showcase",
    headline: ["A sharper", "digital presence."],
    title: "Dimitris",
    tags: "Instagram Presence · Content · Community",
    description: "Social media presence and content showcase for Dimitris.",
    thumbnailUrl:
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793112459/ss-dimitris.webp",
  },
  {
    categories: ["social"],
    visual: "orbit",
    eyebrow: "Social Media / Account Showcase",
    headline: ["Built for", "the scroll."],
    title: "Elite",
    tags: "Instagram Presence · Content · Community",
    description: "Social media presence and content showcase for Elite.",
    thumbnailUrl:
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793112478/ss-elite.webp",
  },
  {
    categories: ["social"],
    visual: "orbit",
    eyebrow: "Social Media / Account Showcase",
    headline: ["A feed that", "feels distinct."],
    title: "Corum",
    tags: "Instagram Presence · Content · Community",
    description: "Social media presence and content showcase for Corum.",
    thumbnailUrl:
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793112474/ss-corum.webp",
  },
  {
    categories: ["social"],
    visual: "orbit",
    eyebrow: "Social Media / Account Showcase",
    headline: ["Content with", "character."],
    title: "KAM",
    tags: "Instagram Presence · Content · Community",
    description: "Social media presence and content showcase for KAM.",
    thumbnailUrl:
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793112471/ss-kam.webp",
  },
  {
    categories: ["video"],
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
  // ── DVC (Video Production sub-facet) ───────────
  /*
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
    posterUrl: videoPoster(
      "v1790692978/Dorado_Men_salon_DVC",
      2,
      "x_0,y_99,w_1920,h_882",
    ),
  },
  */
  {
    categories: ["video"],
    visual: "video",
    videoKind: "dvc",
    eyebrow: "DVC / Hospitality",
    headline: ["A stay worth", "shooting."],
    title: "Vicky Farmhouse DVC",
    tags: "DVC · Cinematography · Edit",
    videoUrl:
      "https://res.cloudinary.com/dtzgqlr3/video/upload/v1793110176/Vicky_Farmhous_DVC.mp4",
    posterUrl:
      "https://res.cloudinary.com/dtzgqlr3/video/upload/v1793110176/Vicky_Farmhous_DVC.jpg",
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
      "https://res.cloudinary.com/dtzgqlr3/video/upload/v1793110168/Titan_One_DVC.mp4",
    posterUrl:
      "https://res.cloudinary.com/dtzgqlr3/video/upload/v1793110168/Titan_One_DVC.jpg",
  },
  {
    categories: ["video"],
    visual: "video",
    videoKind: "documentary",
    eyebrow: "Documentary / SOORTY",
    headline: ["Stories", "worth telling."],
    title: "Soorty Documentary",
    tags: "Documentary · Storytelling · Film",
    youtubeVideoId: "fqli3qon-R0",
    posterUrl: "https://i.ytimg.com/vi/fqli3qon-R0/hqdefault.jpg",
  },
  {
    categories: ["video"],
    visual: "video",
    videoKind: "documentary",
    eyebrow: "Documentary / Raja Umar Khattab",
    headline: ["A life of", "courage."],
    title: "Raja Umar Khattab Documentary",
    tags: "Documentary · Storytelling · Film",
    youtubeVideoId: "a0qYtduc6L0",
    posterUrl: "https://i.ytimg.com/vi/a0qYtduc6L0/hqdefault.jpg",
  },
  {
    categories: ["video"],
    visual: "video",
    videoKind: "documentary",
    eyebrow: "Documentary / DLFNE",
    headline: ["A story", "uncovered."],
    title: "DLFNE Documentary",
    tags: "Documentary · Storytelling · Film",
    youtubeVideoId: "Mjxj7Dww_1o",
    posterUrl: "https://i.ytimg.com/vi/Mjxj7Dww_1o/hqdefault.jpg",
  },

  // ── Specialized services ────────
  {
    categories: ["specialized"],
    visual: "video",
    eyebrow: "Specialized / Testimonials",
    headline: ["Real stories,", "told by real people."],
    title: "Shuhada Run Testimonials",
    tags: "Interview · Edit · Sound",
    summary:
      "A testimonial film built from athlete interviews, cut for social and paid distribution.",
    videoUrl:
      "https://res.cloudinary.com/dtzgqlr3/video/upload/v1793113274/Shuhada_Run_Testimonals.mp4",
    videoCrop: "x_0,y_99,w_1920,h_882",
    posterUrl:
      "https://res.cloudinary.com/dtzgqlr3/video/upload/so_1,c_crop,x_0,y_99,w_1920,h_882/v1793113274/Shuhada_Run_Testimonals.jpg",
  },
  {
    categories: ["specialized"],
    visual: "video",
    eyebrow: "Specialized / Highlights",
    headline: ["The race,", "in ninety seconds."],
    title: "Shuhada Run Highlights",
    tags: "Event · Highlights · Edit",
    summary:
      "Event highlight reel covering every race moment, split into social cuts.",
    videoUrl:
      "https://res.cloudinary.com/dtzgqlr3/video/upload/v1793113207/Shuhuda_Run_Highlgihts.mp4",
    videoCrop: "x_0,y_44,w_854,h_392",
    posterUrl:
      "https://res.cloudinary.com/dtzgqlr3/video/upload/so_1,c_crop,x_0,y_44,w_854,h_392/v1793113207/Shuhuda_Run_Highlgihts.jpg",
  },
  {
    categories: ["specialized"],
    visual: "video",
    eyebrow: "Specialized / Event",
    headline: ["An evening", "worth remembering."],
    title: "Toyota Sure Gala",
    tags: "Coverage · Editing · Motion",
    summary:
      "Event coverage film for Toyota's Sure Gala, delivered as a full recap cut.",
    videoUrl:
      "https://res.cloudinary.com/dtzgqlr3/video/upload/v1793113331/TOYOTA_SURE_GALA.mp4",
    videoCrop: "x_0,y_99,w_1920,h_881",
    posterUrl:
      "https://res.cloudinary.com/dtzgqlr3/video/upload/so_1,c_crop,x_0,y_99,w_1920,h_881/v1793113331/TOYOTA_SURE_GALA.jpg",
  },
  {
    categories: ["specialized"],
    visual: "video",
    eyebrow: "Specialized / Brand Film",
    headline: ["Omni,", "in motion."],
    title: "Omni karting Race Coverage",
    tags: "Concept · Filming · Edit",
    summary:
      "Brand film for Omni, built around product, people and the work between them.",
    videoUrl:
      "https://res.cloudinary.com/dtzgqlr3/video/upload/v1793113275/Omni_Karting_Race_Coverage.mp4",
    posterUrl:
      "https://res.cloudinary.com/dtzgqlr3/video/upload/so_1/v1793113275/Omni_Karting_Race_Coverage.jpg",
  },
  {
    categories: ["specialized"],
    visual: "video",
    eyebrow: "Specialized / Brand Film",
    headline: ["Service", "with honour."],
    title: "Shaheen Force Flag March Coverage ",
    tags: "Concept · Filming · Edit",
    summary:
      "Institutional brand film produced for KPO, from concept through final cut.",
    videoUrl:
      "https://res.cloudinary.com/dtzgqlr3/video/upload/v1793113286/Shaheen_Force_Flag_March.mp4",
    posterUrl:
      "https://res.cloudinary.com/dtzgqlr3/video/upload/so_1/v1793113286/Shaheen_Force_Flag_March.jpg",
  },
  {
    categories: ["specialized"],
    visual: "video",
    eyebrow: "Specialized / Campaign",
    headline: ["Cholistan,", "told fresh."],
    title: "Cholistan Rally Coverage",
    tags: "Concept · Filming · Edit",
    summary:
      "Campaign film for Cholistan, shot for digital-first viewing.",
    videoUrl:
      "https://res.cloudinary.com/dtzgqlr3/video/upload/v1793113276/Cholistan_Rally_Coverage.mp4",
    videoCrop: "x_0,y_44,w_854,h_392",
    posterUrl:
      "https://res.cloudinary.com/dtzgqlr3/video/upload/so_3,c_crop,x_0,y_44,w_854,h_392/v1793113276/Cholistan_Rally_Coverage.jpg",
  },

  // ── Reels (Video Production sub-facet) ────────
  {
    categories: ["video"],
    visual: "video",
    videoKind: "reels",
    eyebrow: "Social / Brand Reel",
    headline: ["Kaami,", "in motion."],
    title: "Kaami Reel",
    tags: "Concept · Filming · Editing",
    videoUrl:
      "https://res.cloudinary.com/dtzgqlr3/video/upload/v1793110693/Kaami.mp4",
    posterUrl:
      "https://res.cloudinary.com/dtzgqlr3/video/upload/so_6/v1793110693/Kaami.jpg",
  },
  {
    categories: ["video"],
    visual: "video",
    videoKind: "reels",
    eyebrow: "Social / Campaign",
    headline: ["Celebrate", "every woman."],
    title: "Women's Day HC",
    tags: "Concept · Filming · Editing",
    videoUrl:
      "https://res.cloudinary.com/dtzgqlr3/video/upload/v1793110733/Women_s_Day_HC.mp4",
    posterUrl:
      "https://res.cloudinary.com/dtzgqlr3/video/upload/v1793110733/Women_s_Day_HC.jpg",
  },
  {
    categories: ["video"],
    visual: "video",
    videoKind: "reels",
    eyebrow: "Social / Stitch Reel",
    headline: ["Sky high,", "stitch tight."],
    title: "Sky Stitch Reel",
    tags: "Concept · Filming · Editing",
    videoUrl:
      "https://res.cloudinary.com/dtzgqlr3/video/upload/v1793110776/Sky_Stitch.mp4",
    posterUrl:
      "https://res.cloudinary.com/dtzgqlr3/video/upload/v1793110776/Sky_Stitch.jpg",
  },
  {
    categories: ["video"],
    visual: "video",
    videoKind: "reels",
    eyebrow: "Social / Evergreen Reel",
    headline: ["Content that", "lasts."],
    title: "Evergreen Reel",
    tags: "Concept · Filming · Editing",
    videoUrl:
      "https://res.cloudinary.com/dtzgqlr3/video/upload/v1793110816/Evergreen.mp4",
    posterUrl:
      "https://res.cloudinary.com/dtzgqlr3/video/upload/so_1/v1793110816/Evergreen.jpg",
  },
  {
    categories: ["video"],
    visual: "video",
    videoKind: "reels",
    eyebrow: "Social / Food Reel",
    headline: ["Serve it", "street style."],
    title: "Food Chowk Reel",
    tags: "Concept · Filming · Editing",
    videoUrl:
      "https://res.cloudinary.com/dtzgqlr3/video/upload/v1793110850/Food_Chowk.mp4",
    posterUrl:
      "https://res.cloudinary.com/dtzgqlr3/video/upload/so_1/v1793110850/Food_Chowk.jpg",
  },
  {
    categories: ["video"],
    visual: "video",
    videoKind: "reels",
    eyebrow: "Social / Product Reel",
    headline: ["Draped to", "fit."],
    title: "Autodrapes Reel",
    tags: "Concept · Filming · Editing",
    videoUrl:
      "https://res.cloudinary.com/dtzgqlr3/video/upload/v1793110872/Auto_Drapes.mp4",
    posterUrl:
      "https://res.cloudinary.com/dtzgqlr3/video/upload/v1793110872/Auto_Drapes.jpg",
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
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793112940/westturn-media.webp",
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
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793112936/webautodrapes.webp",
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
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793112933/vickyfarmhouse.webp",
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
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793112930/heights-communications.webp",
    liveUrl: "https://heights-communications.com/",
  },
  {
    categories: ["branding"],
    visual: "columns",
    eyebrow: "Wellness / Brand Identity",
    headline: ["A brand", "that restores."],
    title: "Sweat & Shed",
    tags: "Wellness · Brand Identity · Visual Kit",
    description:
      "A visual identity kit for Sweat & Shed, a wellness brand built around feeling at home.",
    thumbnailUrl:
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793109290/01.png",
    imageOnly: true,
    gallerySlug: "sweat-and-shed",
    galleryImages: [
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793109290/01.png",
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793109290/02.png",
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793109291/03.png",
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793109292/04.png",
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793109295/05.png",
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793109296/06.png",
    ],
  },
  {
    categories: ["branding"],
    visual: "columns",
    eyebrow: "Restaurant / Brand Identity",
    headline: ["A brand", "you recall."],
    title: "AL-Jeddah",
    tags: "Restaurant · Brand Identity · Visual Kit",
    description:
      "A visual identity kit for AL-Jeddah, a restaurant brand.",
    thumbnailUrl:
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793108335/slide-01.png",
    imageOnly: true,
    gallerySlug: "al-jeddah",
    galleryImages: [
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793108335/slide-01.png",
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793108343/slide-02.png",
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793108344/slide-03.png",
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793108344/slide-04.png",
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793108345/slide-05.png",
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793108346/slide-06.png",
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793108347/slide-07.png",
    ],
  },
  {
    categories: ["branding"],
    visual: "columns",
    eyebrow: "Apparel / Brand Identity",
    headline: ["A brand", "with character."],
    title: "Sky Stitch Patches",
    tags: "Apparel · Brand Identity · Visual Kit",
    description:
      "A visual identity kit for Sky Stitch Patches, bringing its custom patches to life.",
    thumbnailUrl:
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793109665/ss-01.png",
    imageOnly: true,
    gallerySlug: "sky-stitch-patches",
    galleryImages: [
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793109665/ss-01.png",
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793109689/ss-02.png",
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793109690/ss-03.png",
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793109693/ss-04.png",
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793109712/ss-05.png",
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793109713/ss-06.png",
      "https://res.cloudinary.com/dtzgqlr3/image/upload/v1793109715/ss-07.png",
    ],
  },
  {
    categories: ["video"],
    visual: "columns",
    eyebrow: "Production / Launch",
    headline: ["Launched", "with impact."],
    title: "Product Launch Film",
    tags: "Direction · Shoot · Edit",
  },
  // ── Video / Reel projects ──────────────────────
  {
    categories: ["video", "ai"],
    visual: "video",
    videoKind: "ai",
    eyebrow: "AI Video / Reel",
    headline: ["Falcon House,", "AI crafted."],
    title: "Falcon House AI Reel",
    tags: "AI Video · Concept · Reel",
    description: "An AI-generated reel for Falcon House, crafted with cinematic visuals and storytelling.",
    videoUrl: "https://res.cloudinary.com/dtzgqlr3/video/upload/v1793114394/Falcon_House_AI_Reel_LOW.mp4",
    posterUrl: "https://res.cloudinary.com/dtzgqlr3/video/upload/so_1/v1793114394/Falcon_House_AI_Reel_LOW.jpg",
  },
  {
    categories: ["video", "ai"],
    visual: "video",
    videoKind: "ai",
    eyebrow: "Social / Brand Reel",
    headline: ["International", "Cat Day."],
    title: "Fasfars International Cats Day",
    tags: "Social Reel · Brand · Campaign",
    description: "An international Cat Day campaign reel created to celebrate feline love with engaging social-first visuals.",
    videoUrl: "https://res.cloudinary.com/dtzgqlr3/video/upload/v1793114387/Fasfars_International_Cats_Day_low.mp4",
    posterUrl: "https://res.cloudinary.com/dtzgqlr3/video/upload/so_1/v1793114387/Fasfars_International_Cats_Day_low.jpg",
  },
  {
    categories: ["video", "ai"],
    visual: "video",
    videoKind: "ai",
    eyebrow: "Launch / Brand Film",
    headline: ["Veerpak,", "unwrapped."],
    title: "Veerpak Brand Film",
    tags: "Brand Film · Launch · Edit",
    description: "A brand launch film for Veerpak showcasing the product story with bold visuals and clean editing.",
    videoUrl: "https://res.cloudinary.com/dtzgqlr3/video/upload/v1793114363/Veerpak_low.mp4",
    posterUrl: "https://res.cloudinary.com/dtzgqlr3/video/upload/so_1/v1793114363/Veerpak_low.jpg",
  },
  {
    categories: ["video", "ai"],
    visual: "video",
    videoKind: "ai",
    eyebrow: "Product / Reel",
    headline: ["Oats,", "reel style."],
    title: "Fasfars Oats Reel",
    tags: "Product Reel · Social · Edit",
    description: "A product-focused social reel for Fasfars Oats highlighting texture, taste, and everyday moments.",
    videoUrl: "https://res.cloudinary.com/dtzgqlr3/video/upload/v1793114398/Fasfars_Oats_Reel_low.mp4",
    posterUrl: "https://res.cloudinary.com/dtzgqlr3/video/upload/so_1/v1793114398/Fasfars_Oats_Reel_low.jpg",
  },
  {
    categories: ["video", "ai"],
    visual: "video",
    videoKind: "ai",
    eyebrow: "Social / Stitch Reel",
    headline: ["Sky high,", "stitch tight."],
    title: "Sky Stitch Reel 01",
    tags: "Stitch Reel · Social · Edit",
    description: "A fast-paced stitch-style reel crafted for social feeds with quick cuts and smooth transitions.",
    videoUrl: "https://res.cloudinary.com/dtzgqlr3/video/upload/v1793114405/Sky_Stitch_Reel_1_Low.mp4",
    posterUrl: "https://res.cloudinary.com/dtzgqlr3/video/upload/so_1/v1793114405/Sky_Stitch_Reel_1_Low.jpg",
  },
  {
    categories: ["video", "ai"],
    visual: "video",
    videoKind: "ai",
    eyebrow: "AI / Evergreen Reel",
    headline: ["Content that", "lasts."],
    title: "Evergreen AI Reel",
    tags: "AI Video · Evergreen · Reel",
    description: "An evergreen AI-generated reel designed to stay relevant and drive engagement over time.",
    videoUrl: "https://res.cloudinary.com/dtzgqlr3/video/upload/v1793114387/Evergreen_Reel_low.mp4",
    posterUrl: "https://res.cloudinary.com/dtzgqlr3/video/upload/so_1/v1793114387/Evergreen_Reel_low.jpg",
  },
]

// ─────────────────────────────────────────────
// CATEGORY COUNTS
// ─────────────────────────────────────────────

export const workCounts = workCategories.reduce(
  (counts, { id }) => {
    counts[id] = workProjects.filter((p) => p.categories.includes(id))
      .length;
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
 * AI reels are tagged `ai` and stay inside the AI Content category.
 */
export const videoSubKind = (project: WorkProject): VideoSubKindId =>
  project.videoKind ?? "reels";

export const videoSubCounts = videoSubCategories.reduce(
  (counts, { id }) => {
    counts[id] = workProjects.filter(
      (project) => hasVideoSource(project) && videoSubKind(project) === id,
    ).length;

    return counts;
  },
  {} as Record<VideoSubCategoryId, number>,
);
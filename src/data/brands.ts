const CLOUDINARY_IMAGE_BASE = "https://res.cloudinary.com/l92fw4gu/image/upload";

/**
 * `e_trim:transparency` strips the transparent padding baked into the source
 * PNGs, then `c_limit,h_300` normalises every mark to the same height without
 * ever cropping its content. Each logo keeps its true aspect ratio (recorded
 * in `width`/`height`) so the row renders at a uniform size with even gaps.
 */
const LOGO_TRANSFORM = "e_trim:transparency/c_limit,h_300,q_auto";

/** [id, displayName, versioned public path, intrinsic width, intrinsic height] */
const brandAssets = [
  ["zameenibaat", "Zameenibaat", "v1790606762/zameenibaat.png", 590, 300],
  ["vicky-farmhouse", "Vicky Farmhouse", "v1790606760/vickyfarmhouse.png", 426, 300],
  ["sweatshed", "Sweatshed", "v1790606759/sweatshed.png", 219, 300],
  ["kampadel", "Kampadel", "v1790606758/kampadel.png", 252, 300],
  ["kaami", "Kaami", "v1790606757/kaami.png", 421, 300],
  ["heights", "Heights", "v1790606755/heights.png", 877, 300],
  ["haq-builders", "Haq Builders", "v1790606754/haqbuilders.png", 677, 300],
  ["fox-valley", "Fox Valley", "v1790606753/foxvalley.png", 285, 300],
  ["food-chowk", "Food Chowk", "v1790606751/foodchowk.png", 824, 300],
  ["fasfars", "Fasfars", "v1790606750/fasfars.png", 366, 300],
  ["falcon-house", "Falcon House", "v1790606748/falconhouse.png", 1170, 300],
  ["elite", "Elite", "v1790606747/elite.png", 272, 300],
  ["east-city", "East City", "v1790606746/eastcity.png", 428, 300],
  ["dimitris", "Dimitris", "v1790606745/dimitris.png", 302, 300],
  ["corum", "Corum", "v1790606744/corum.png", 305, 300],
  ["choudhry-ahsan", "Choudhry Ahsan", "v1790606742/choudhryahsan.png", 217, 300],
  ["breeze-lamd", "Breeze Lamd", "v1790606741/breezlamd.png", 329, 300],
  ["bright-future", "Bright Future", "v1790606741/brightfuture.png", 1345, 300],
  ["bluewater", "Bluewater", "v1790606738/bluewater.png", 1184, 300],
  ["beauty-mark", "Beauty Mark", "v1790606737/beautymark.png", 763, 300],
  ["autodrapes", "Autodrapes", "v1790688827/autodrapes.png", 435, 300],
  ["amarat", "Amarat", "v1790606734/amarat.png", 199, 300],
  ["al-jeddah", "Al Jeddah", "v1790606734/aljeddah.png", 398, 300],
  ["ahadi", "Ahadi", "v1790606733/ahadi.png", 235, 300],
] as const;

export const brands = brandAssets.map(([id, name, path, width, height]) => ({
  id,
  name,
  logo: `${CLOUDINARY_IMAGE_BASE}/${LOGO_TRANSFORM}/${path}`,
  width,
  height,
}));

export const loopedBrands = [...brands, ...brands];

export type Brand = (typeof brands)[number];

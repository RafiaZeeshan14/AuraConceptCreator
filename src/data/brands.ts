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
  ["zameenibaat", "Zameenibaat", "v1790850207/zameenibaat.png", 590, 300],
  ["vicky-farmhouse", "Vicky Farmhouse", "v1790781342/vickyfarmhouselogo.png", 426, 300],
  ["sweatshed", "Sweatshed", "v1790849819/sweatshed.png", 219, 300],
  ["kampadel", "Kampadel", "v1790606758/kampadel.png", 252, 300],
  ["bahria-town", "Bahria Town", "v1792229902/BahriaTown.png", 251, 300],
  ["heights", "Heights", "v1790606755/heights.png", 877, 300],
  ["shangrila-city", "Shangrila City", "v1792229930/Shangrila_City.png", 250, 300],
  ["haq-builders", "Haq Builders", "v1790606754/haqbuilders.png", 677, 300],
  ["fox-valley", "Fox Valley", "v1790606753/foxvalley.png", 285, 300],
  ["hands", "Hands", "v1792229958/Hands.png", 174, 300],
  ["fasfars", "Fasfars", "v1790606750/fasfars.png", 366, 300],
  ["gfs", "GFS", "v1792229984/GFS.png", 491, 300],
  ["falcon-house", "Falcon House", "v1790606748/falconhouse.png", 1170, 300],
  ["unicef", "UNICEF", "v1792230006/Unicef.png", 1200, 300],
  ["east-city", "East City", "v1790606746/eastcity.png", 428, 300],
  ["isuzu", "ISUZU", "v1792230055/ISUZU.png", 666, 300],
  ["dimitris", "Dimitris", "v1790606745/dimitris.png", 302, 300],
  ["corum", "Corum", "v1790606744/corum.png", 305, 300],
  ["iba", "IBA", "v1792230090/IBA.png", 300, 300],
  ["choudhry-ahsan", "Choudhry Ahsan", "v1790606742/choudhryahsan.png", 217, 300],
  ["bright-future", "Bright Future", "v1790606741/brightfuture.png", 1345, 300],
  ["toyota", "Toyota", "v1792230113/TOYOTAA.png", 367, 300],
  ["autodrapes", "Autodrapes", "v1790688827/autodrapes.png", 435, 300],
  ["hamdard-university", "Hamdard University", "v1792230138/HamdardUniversity.png", 313, 300],
  ["al-jeddah", "Al Jeddah", "v1790850069/aljeddah.png", 398, 300],
  ["sindh-police", "Sindh Police", "v1792231055/kpo.png", 310, 300],
  ["hino", "Hino", "v1792230197/HIINO.png", 323, 300],
  ["omi-motorsport", "OMI Motorsport", "v1790851075/omni.png", 274, 300],
  ["born2run", "Born2Run Pakistan", "v1790851297/b2r.png", 849, 300],
  ["jns", "JNS Church of Christ", "v1790852780/Jns.png", 439, 300],
] as const;

export const brands = brandAssets.map(([id, name, path, width, height]) => ({
  id,
  name,
  logo: `${CLOUDINARY_IMAGE_BASE}/${LOGO_TRANSFORM}/${path}`,
  width,
  height,
}));

export type Brand = (typeof brands)[number];

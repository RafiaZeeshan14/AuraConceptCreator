export const heroInsightCards = [
  {
    id: "impact",
    eyebrow: "Creative impact",
    value: "4.9/5",
    detail: "Average partner rating across global launches.",
  },
  {
    id: "velocity",
    eyebrow: "Built to move",
    value: "24+",
    detail: "Distinctive digital experiences shipped.",
  },
] as const;

export const heroTags = [
  { id: "agency", label: "Agency" },
  { id: "expert", label: "Expert" },
  { id: "innovative", label: "Innovative" },
] as const;

export const heroAvatars = ["A", "N", "O"] as const;

export const heroCopy = {
  badge: "Independent creative agency ",
  headlineLead: "Designing",
  headlineAccent: "futures",
  description:
    "We unite strategy, design and technology to turn ambitious ideas into memorable digital experiences built for what comes next.",
  trustLine: "Trusted by ambitious founders and growing teams",
} as const;

export type HeroInsightCard = (typeof heroInsightCards)[number];
export type HeroTagData = (typeof heroTags)[number];

export const principles = [
  {
    number: "01",
    title: "Clarity",
    accent: "first.",
    tag: "Foundation",
    copy: "Every decision should make the idea stronger, the message clearer and the experience easier to understand.",
  },
  {
    number: "02",
    title: "Built",
    accent: "together.",
    tag: "Collaboration",
    copy: "The best work comes from honest collaboration, shared context and open communication from the very beginning.",
  },
  {
    number: "03",
    title: "Made to",
    accent: "move.",
    tag: "Evolution",
    copy: "We create flexible ideas and systems that evolve with the people, audiences and businesses behind them.",
  },
] as const;

export const commitments = [
  {
    label: "Purpose",
    copy: "Every piece of work starts with understanding what your business actually needs.",
  },
  {
    label: "Consistency",
    copy: "Strong brands are built through consistency, not one-off moments.",
  },
  {
    label: "Results",
    copy: "Creativity should ultimately create movement, awareness, engagement, trust or growth.",
  },
] as const;

export const heroStats = [
  { value: "1,500+", label: "Clients served" },
  { value: "2021", label: "Founded" },
] as const;

export const storyStats = [
  { label: "Founded", value: "2021" },
  { label: "Clients served", value: "1,500+" },
  { label: "Active partnerships", value: "30+" },
] as const;

export const milestones = [
  {
    number: "2021",
    label: "Where it started",
    copy: "Aura Concept Creator was founded with a simple purpose — helping local businesses understand the power of digital.",
  },
  {
    number: "1,500+",
    label: "Clients worked with",
    copy: "Businesses we've helped build their digital presence, strengthen their brands and connect with their audiences.",
  },
  {
    number: "30+",
    label: "Active clients",
    copy: "Brands currently trusting Aura with their social presence and digital growth.",
  },
] as const;

export type Principle = (typeof principles)[number];
export type Commitment = (typeof commitments)[number];
export type Milestone = (typeof milestones)[number];
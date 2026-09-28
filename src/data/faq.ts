export const faqs = [
  {
    question: "Do you offer custom packages?",
    answer: "Yes. Every business has different goals and requirements. We offer flexible and customized packages based on your needs, whether it is branding, social media management, website development, content production, or a complete marketing solution.",
  },
  {
    question: "What services does Aura Concept Creator provide?",
    answer: "We offer complete creative solutions including branding, graphic design, social media management, content production, website development, digital marketing, photography, videography, and corporate event coverage.",
  },
  {
    question: "Do you work with startups as well as established businesses?",
    answer: "Yes. Whether you are launching a new business or looking to refresh an existing brand, we create customized strategies that align with your goals and budget.",
  },
  {
    question: "Do you offer complete social media management?",
    answer: "Absolutely. We handle everything from content strategy and design to scheduling, publishing, community management, and performance reporting.",
  },
  {
    question: "Can you create a brand identity from scratch?",
    answer: "Yes. We can develop your complete brand identity, including logo design, color palette, typography, brand guidelines, and visual direction.",
  },
  {
    question: "Do you build websites?",
    answer: "Yes. We design and develop modern, responsive business websites, landing pages, and e-commerce stores tailored to your brand.",
  },
  {
    question: "How does your project process work?",
    answer: "Our process begins with a discovery meeting to understand your business and goals. From there, we develop your brand strategy, create content, review it with you, and publish it according to a planned content calendar.",
  },
  {
    question: "Do you work with clients outside Pakistan?",
    answer: "Yes. We work with businesses locally and internationally through online collaboration.",
  },
  {
    question: "Do you run paid advertising campaigns?",
    answer: "Yes. We manage Meta (Facebook and Instagram) advertising campaigns focused on increasing brand awareness, engagement, leads, and sales.",
  },
  {
    question: "How do I get started?",
    answer: "Simply contact us through our website, WhatsApp, email, or social media. We will schedule a consultation to understand your requirements and recommend the best solution for your business.",
  },
] as const;

export type FAQ = (typeof faqs)[number];
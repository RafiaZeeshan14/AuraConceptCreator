"use client";

import {
  HiArrowUpRight,
  HiOutlineChartBar,
  HiOutlineCube,
  HiOutlineFilm,
  HiOutlineGlobeAlt,
  HiOutlineLightBulb,
  HiOutlineMegaphone,
} from "react-icons/hi2";

const services = [
  {
    number: "01",
    title: "Branding & Strategy",
    intro: "Build a strong brand foundation with strategic planning, visual identity, and market positioning that helps your business stand out from the competition.",
    items: ["Brand Strategy", "Brand Identity", "Logo Design", "Brand Guidelines", "Marketing Strategy", "Creative Consulting"],
    icon: HiOutlineLightBulb,
  },
  {
    number: "02",
    title: "Creative & Design",
    intro: "Creative visuals that capture attention and communicate your brand message across both digital and print platforms.",
    items: ["Social Media Design", "Print & Marketing Materials", "Packaging Design", "Print Design", "Presentation Design", "Motion Graphics"],
    icon: HiOutlineCube,
  },
  {
    number: "03",
    title: "Content Production",
    intro: "Professional content creation that tells your story through high-quality visuals and engaging videos.",
    items: ["Photography", "Videography", "Product Shoots", "Corporate Shoots", "Event Coverage", "Drone Videography", "Video Editing", "Reels & Short-form Content"],
    icon: HiOutlineFilm,
  },
  {
    number: "04",
    title: "Digital Marketing & Social Media",
    intro: "Grow your online presence with data-driven marketing strategies and engaging social media management.",
    items: ["Social Media Management", "Content Planning", "Content Calendar", "Facebook & Instagram Marketing", "LinkedIn Marketing", "Community Management", "Meta Ads", "Performance Reporting"],
    icon: HiOutlineMegaphone,
  },
  {
    number: "05",
    title: "Web & E-Commerce",
    intro: "Modern websites and e-commerce solutions designed for performance, user experience, and business growth.",
    items: ["Business Websites", "E-Commerce Stores", "Landing Pages", "UI/UX Design", "Website Maintenance", "SEO Optimization"],
    icon: HiOutlineGlobeAlt,
  },
  {
    number: "06",
    title: "Specialized Services",
    intro: "Tailored creative solutions designed for unique business requirements and large-scale projects.",
    items: ["Corporate Events", "Product Launches", "Exhibition Branding", "Live Streaming", "Corporate Photography", "Creative Campaigns", "Digital Signage", "Custom Solutions"],
    icon: HiOutlineChartBar,
  },
];

export function ServicesPageContent() {
  return (
    <main className="services-page min-h-svh overflow-hidden bg-cream text-wine">
      <section className="services-page__hero relative overflow-hidden bg-wine text-cream">
        <div className="services-page__hero-orbit" aria-hidden="true" />
        <div className="mx-auto flex min-h-[72svh] w-full max-w-[1600px] flex-col justify-between px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-14 lg:pt-44">
          <div className="flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.24em] text-cream/55 sm:text-[10px]">
            <span>Services — 06 ways to move forward</span>
            <span className="hidden sm:block">Aura Concept Creator</span>
          </div>
          <div className="mt-20 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <h1 className="max-w-5xl text-[clamp(4rem,10vw,10rem)] font-medium leading-[0.79] tracking-[-0.085em]">
              Built for
              <span className="block font-editorial italic text-accent">what&apos;s next.</span>
            </h1>
            <div className="max-w-sm lg:justify-self-end">
              <p className="text-base leading-8 text-cream/65">
                Strategy, design, content and technology working together to give ambitious ideas a clear point of view.
              </p>
              <a href="#services-list" className="mt-8 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-cream">
                Explore our services
                <span className="grid size-9 place-items-center rounded-full bg-accent"><HiArrowUpRight className="size-4" /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services-list" className="services-page__list relative">
        <div className="mx-auto w-full max-w-[1600px] px-5 py-16 sm:px-8 sm:py-24 lg:px-14 lg:py-32">
          <div className="mb-12 flex items-end justify-between border-t border-wine/15 pt-5">
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-wine/48 sm:text-[10px]">What we bring to the table</p>
            <span className="hidden text-[10px] uppercase tracking-[0.2em] text-wine/40 sm:block">Select a discipline</span>
          </div>

          <div className="services-page__cards">
            {services.map(({ number, title, intro, items, icon: Icon }) => (
              <article key={title} className="services-page__card">
                <div className="services-page__card-top">
                  <span className="services-page__number">{number}</span>
                  <span className="services-page__card-icon"><Icon /></span>
                </div>
                <h2>{title}</h2>
                <p className="services-page__card-intro">{intro}</p>
                <ul className="services-page__card-items">
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <a href="#contact" aria-label={`Start a conversation about ${title}`} className="services-page__card-action">
                  <HiArrowUpRight />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
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
  { number: "01", title: "Branding & Strategy", copy: "Build a clear foundation with strategy, identity and positioning.", icon: HiOutlineLightBulb },
  { number: "02", title: "Creative & Design", copy: "Create visual systems that capture attention across every platform.", icon: HiOutlineCube },
  { number: "03", title: "Content Production", copy: "Tell your story through photography, video and engaging content.", icon: HiOutlineFilm },
  { number: "04", title: "Digital Marketing & Social Media", copy: "Grow your presence with data-led marketing and social strategy.", icon: HiOutlineMegaphone },
  { number: "05", title: "Web & E-Commerce", copy: "Build useful digital experiences designed for growth.", icon: HiOutlineGlobeAlt },
  { number: "06", title: "Specialized Services", copy: "Bring ambitious launches, events and unique ideas to life.", icon: HiOutlineChartBar },
];

export function ServicesPreview() {
  return (
    <section id="services" className="services-preview relative overflow-hidden bg-wine text-cream">
      <div className="services-preview__orbit" aria-hidden="true" />
      <div className="mx-auto w-full max-w-[1600px] px-5 pt-8 pb-16 sm:px-8 sm:pt-12 sm:pb-20 lg:px-14 lg:pt-16 lg:pb-24">
        <div className="services-preview__header flex flex-col gap-7 border-t border-cream/15 pt-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-accent sm:text-[10px]">03 — What we do</p>
            <h2 className="mt-6 max-w-2xl text-[clamp(3.4rem,7vw,7rem)] font-medium leading-[0.82] tracking-[-0.075em]">
              Services that
              <span className="block font-editorial italic text-accent">are tailored.</span>
            </h2>
          </div>
          <div className="max-w-sm sm:text-right">
            <p className="text-sm leading-7 text-cream/62 sm:text-base sm:leading-8">
              From the first thought to the final launch, we bring the right disciplines around the idea.
            </p>
            <Link href="/services" className="mt-6 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-cream hover:text-accent">
              Explore all services <span className="grid size-8 place-items-center rounded-full bg-accent"><HiArrowUpRight className="size-4" /></span>
            </Link>
          </div>
        </div>

        <div className="services-preview__grid mt-14 sm:mt-16">
          {services.map(({ number, title, copy, icon: Icon }) => (
            <Link href="/services" key={title} className="services-preview__card">
              <div className="flex items-start justify-between">
                <span className="text-[10px] font-semibold tracking-[0.18em] text-accent">{number}</span>
                <span className="services-preview__icon"><Icon /></span>
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <span className="services-preview__arrow"><HiArrowUpRight /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

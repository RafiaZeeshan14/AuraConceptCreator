import { HiStar } from "react-icons/hi2";
import { cn } from "@/lib/utils";
import { testimonials, type Testimonial } from "@/data/testimonials";

function TestimonialCard({ quote, name, role, initials }: Testimonial) {
  return (
    <article className="testimonials__card">
      <span className="testimonials__quote-mark" aria-hidden="true">“</span>
      <p className="testimonials__quote">{quote}</p>
      <div className="testimonials__card-footer">
        <div className="testimonials__avatar" aria-hidden="true">{initials}</div>
        <div>
          <h3>{name}</h3>
          <p>{role}</p>
          <div className="testimonials__stars" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, index) => <HiStar key={index} />)}
          </div>
        </div>
      </div>
    </article>
  );
}

/**
 * One vertical belt. The list is rendered twice and the belt travels exactly
 * half its own height, so the loop is seamless. Every card carries a bottom
 * margin, which keeps that half-height distance identical to the gap between
 * cards — otherwise the last card of one copy would butt against the first of
 * the next.
 */
function ScrollColumn({
  items,
  up = false,
}: {
  items: readonly Testimonial[];
  up?: boolean;
}) {
  return (
    <div className="testimonials__column">
      <div
        className={cn("testimonials__track", up && "testimonials__track--up")}
      >
        {[...items, ...items].map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.name}-${index}`} {...testimonial} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  // Both columns carry the full roster but in a different order, so the two
  // belts never show the same review at the same height.
  const columnOne = testimonials;
  const columnTwo = [testimonials[1], testimonials[2], testimonials[0]];

  return (
    <section className="testimonials relative overflow-hidden bg-wine text-cream">
      <div className="section-sparkline" aria-hidden="true" />
      <div className="testimonials__rings" aria-hidden="true" />
      <div className="mx-auto w-full max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">
        <div className="testimonials__layout">
          <div className="testimonials__intro">
            <p className="section-reveal text-[9px] font-semibold uppercase tracking-[0.24em] text-accent sm:text-[10px]">05 — Testimonials</p>
            <h2 className="section-reveal section-reveal--delay-1 mt-7 text-[clamp(4rem,6.5vw,6.8rem)] font-medium leading-[0.84] tracking-[-0.075em]">
              <span className="whitespace-nowrap">Voices of</span>
              <span className="about-impact block font-editorial italic">impact.</span>
            </h2>
            <p className="section-reveal section-reveal--delay-2 mt-8 max-w-xs text-sm leading-7 text-cream/65 sm:text-base sm:leading-8">
              Real stories from real partners who trusted us to bring their ideas to life and create measurable results.
            </p>
          </div>

          <div className="testimonials__content">
            <div className="testimonials__marquee">
              <ScrollColumn items={columnOne} />
              <ScrollColumn items={columnTwo} up />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

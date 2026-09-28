import { HiArrowRight, HiChevronLeft, HiChevronRight, HiStar } from "react-icons/hi2";
import { testimonials } from "@/data/testimonials";

function TestimonialCard({ quote, name, role, initials }: (typeof testimonials)[number]) {
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

export function Testimonials() {
  return (
    <section className="testimonials relative overflow-hidden bg-wine text-cream">
      <div className="section-sparkline" aria-hidden="true" />
      <div className="testimonials__rings" aria-hidden="true" />
      <div className="mx-auto w-full max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">
        <div className="testimonials__layout">
          <div className="testimonials__intro">
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-accent sm:text-[10px]">05 — Testimonials</p>
            <h2 className="mt-7 text-[clamp(4rem,6.5vw,6.8rem)] font-medium leading-[0.84] tracking-[-0.075em]">
              <span className="whitespace-nowrap">Voices of</span>
              <span className="about-impact block font-editorial italic">impact.</span>
            </h2>
            <p className="mt-8 max-w-xs text-sm leading-7 text-cream/65 sm:text-base sm:leading-8">
              Real stories from real partners who trusted us to bring their ideas to life and create measurable results.
            </p>
            <a href="#reviews" className="mt-9 inline-flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:text-accent">
              <span className="grid size-12 place-items-center rounded-full bg-accent shadow-[0_12px_28px_rgba(182,41,53,0.3)]"><HiArrowRight className="size-5" /></span>
              See all reviews
            </a>
          </div>

          <div className="testimonials__content">
            <div className="testimonials__controls" aria-hidden="true">
              <span><HiChevronLeft /></span>
              <i className="is-active" /><i /><i /><i />
              <span><HiChevronRight /></span>
            </div>
            <div className="testimonials__cards">
              {testimonials.map((testimonial) => <TestimonialCard key={testimonial.name} {...testimonial} />)}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
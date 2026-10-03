import Image from "next/image";
import { CountUpStat } from "@/components/effects";
import { whyChooseReasons } from "@/data/why-choose-aura";

export function WhyChooseAura() {
  return (
    <section className="why-choose-aura relative overflow-hidden bg-cream text-wine">
      <div
        className="why-choose-aura__background"
        aria-hidden="true"
      />

      <span
        className="why-choose-aura__visual-number"
        aria-hidden="true"
      >
        04
      </span>

      <div className="mx-auto w-full max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-20">
        <div className="relative min-h-[680px] lg:min-h-[700px]">

          {/* LEFT INTRO */}
          <div className="why-choose-aura__intro relative z-10 max-w-[500px]">
            <p className="section-reveal text-[9px] font-semibold uppercase tracking-[0.24em] text-wine/45 sm:text-[10px]">
              04 — Why choose Aura
            </p>

            <h2 className="section-reveal section-reveal--delay-1 mt-7 text-[clamp(3.4rem,6.5vw,6.8rem)] font-medium leading-[0.84] tracking-[-0.075em]">
              <span className="block">Why</span>
              <span className="block">choose</span>
              <span className="about-impact block font-editorial italic">
                Aura.
              </span>
            </h2>

            <span className="why-choose-aura__rule section-reveal section-reveal--delay-2 mt-8 block" />

            <p className="section-reveal section-reveal--delay-2 mt-7 max-w-xs text-sm leading-7 text-wine/65 sm:text-base sm:leading-8">
              We blend creativity, strategy and technology to deliver
              digital experiences that drive impact and build lasting
              connections.
            </p>

            </div>

          {/* CENTER ORBIT */}
          <div
            className="why-choose-aura__orbit"
            aria-hidden="true"
          >
            <span className="why-choose-aura__orbit-core">
              <Image
                src="/logo.png"
                alt=""
                width={1200}
                height={1920}
                className="why-choose-aura__logo"
              />
            </span>
          </div>

          {/* STAT CARDS */}
          <div className="why-choose-aura__reasons">
            {whyChooseReasons.map(
              ({ value, suffix, label, icon: Icon, position }) => (
                <article
                  key={label}
                  className={`why-choose-aura__card why-choose-aura__card--${position}`}
                >
                  {/* ICON */}
                  <span className="why-choose-aura__icon">
                    <Icon className="size-7" />
                  </span>

                  {/* STAT CONTENT */}
                  <div className="min-w-0">
                    <span className="why-choose-aura__card-rule" />

                    <h3 className="!mt-3 !mb-0 text-[2rem] font-medium leading-none tracking-[-0.04em] sm:text-[2.25rem]">
                      <CountUpStat value={value} suffix={suffix} />
                    </h3>

                    <p className="!mt-2 text-lg leading-5 text-wine/60 sm:text-[15px]">
                      {label}
                    </p>
                  </div>
                </article>
              ),
            )}
          </div>

          {/* SIDE NOTE */}
          <div
            className="why-choose-aura__side-note-frame"
            aria-hidden="true"
          >
            <span className="why-choose-aura__side-line why-choose-aura__side-line--top" />

            <p className="why-choose-aura__side-note">
              Strategy · Design · Technology
            </p>

            <span className="why-choose-aura__side-line why-choose-aura__side-line--bottom" />
          </div>
        </div>

        {/* FOOTER */}
        <div className="why-choose-aura__footer mt-14 flex items-center justify-center gap-4 text-[9px] font-semibold uppercase tracking-[0.24em] text-wine/50 sm:mt-20">
      
          Ideas with purpose. Design with impact.

     
        </div>
      </div>
    </section>
  );
}
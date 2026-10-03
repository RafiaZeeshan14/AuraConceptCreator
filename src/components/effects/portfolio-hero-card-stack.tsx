import { cn } from "@/lib/utils";
import { heroCreateItems } from "@/data/portfolio-visuals";

type HeroCardHeaderProps = {
  label: string;
  labelClassName: string;
  meta: React.ReactNode;
};

function HeroCardHeader({ label, labelClassName, meta }: HeroCardHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <span className={cn("text-[8px] font-semibold uppercase tracking-[0.24em]", labelClassName)}>
        {label}
      </span>
      {meta}
    </div>
  );
}

/**
 * Decorative fanned card stack used as the portfolio hero visual.
 * Purely presentational — no project data is read here.
 */
export function PortfolioHeroCardStack() {
  return (
    <div className="about-page-reveal about-delay-3 relative mx-auto h-[480px] w-full max-w-[620px] sm:h-[720px]">
      {/* Background orbit */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 size-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cream/10 sm:size-[470px]"
      />

      {/* CARD 01 — BACK */}
      <div className="absolute right-[3%] top-[2%] w-[62%] rotate-[5deg] rounded-[2px] border border-cream/10 bg-[#71151b] p-5 sm:top-[7%] sm:p-6">
        <HeroCardHeader
          label="Selected Work"
          labelClassName="text-cream/45"
          meta={<span className="text-[8px] tracking-[0.2em] text-accent">03</span>}
        />

        <div className="mt-7 flex aspect-[1.35/1] items-end overflow-hidden bg-[#8b2028] p-5">
          <div>
            <p className="text-[8px] uppercase tracking-[0.2em] text-cream/45">
              Digital / Campaign
            </p>

            <p className="mt-2 text-2xl font-medium tracking-[-0.04em] text-cream sm:text-3xl">
              Built for
              <br />
              attention.
            </p>
          </div>
        </div>
      </div>

      {/* CARD 02 — MAIN */}
      <div className="absolute left-[5%] top-[16%] z-20 w-[72%] -rotate-[3deg] border border-[#d9b9b3]/20 bg-[#f4eee7] p-5 text-[#5b0d13] sm:top-[16%] sm:p-7">
        <HeroCardHeader
          label="Featured Project"
          labelClassName="text-[#5b0d13]/45"
          meta={<span className="text-[8px] tracking-[0.2em] text-[#c72c39]">01</span>}
        />

        {/* Project visual */}
        <div className="relative mt-6 flex aspect-[1.25/1] items-center justify-center overflow-hidden bg-[#5b0d13]">
          <div
            aria-hidden="true"
            className="absolute inset-[12%] rounded-full border border-cream/10"
          />
          <div
            aria-hidden="true"
            className="absolute inset-[25%] rounded-full border border-cream/10"
          />
          <div className="relative text-center">
            <p className="text-[8px] uppercase tracking-[0.25em] text-cream/45">
              Brand / Digital
            </p>
            <h3 className="mt-3 text-4xl font-medium tracking-[-0.06em] text-cream sm:text-5xl">
              Ideas
              <br />
              <span className="font-editorial italic text-accent">
                with impact.
              </span>
            </h3>
          </div>
          <div className="absolute bottom-4 right-4 grid size-10 place-items-center rounded-full border border-cream/20 text-cream">
            <span className="text-lg">↗</span>
          </div>
        </div>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="text-lg font-medium tracking-[-0.03em]">
              Brand Experience
            </p>
            <p className="mt-1 text-xs text-[#5b0d13]/45">
              Strategy · Creative · Digital
            </p>
          </div>
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#c72c39]">
            View
          </span>
        </div>
      </div>

      {/* CARD 03 — FRONT / WHAT WE CREATE (tablet and up only) */}
      <div className="absolute bottom-[2%] right-[3%] z-30 hidden w-[55%] rotate-[4deg] border border-[#d9cfc6] bg-[#f4eee7] p-5 text-[#5b0d13] sm:block sm:p-6">
        <HeroCardHeader
          label="What we create"
          labelClassName="text-[#5b0d13]/45"
          meta={<span className="size-2 rounded-full bg-[#c72c39]" />}
        />

        <div className="mt-5 space-y-0">
          {heroCreateItems.map((item, index) => (
            <div
              key={item}
              className={
                index < heroCreateItems.length - 1
                  ? "border-b border-[#5b0d13]/10 py-3"
                  : "py-3"
              }
            >
              <p className="text-sm text-[#5b0d13]/90">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative dots */}
      <span
        aria-hidden="true"
        className="absolute left-[3%] top-[38%] size-2 rounded-full bg-accent"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-[8%] left-[18%] hidden size-1.5 rounded-full bg-cream/40 sm:block"
      />
    </div>
  );
}

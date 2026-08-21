import { HiArrowRight } from "react-icons/hi2";

const team = [
  
  {
    name: "Maya Chen",
    role: "Digital Director",
    detail: "Builds digital experiences people want to use.",
    tag: "Digital",
    image: "/manager.png",
  },
  {
    name: "Elias Brooks",
    role: "Experience Designer",
    detail: "Makes every interaction feel considered and human.",
    tag: "Experience",
    image: "/sc.png",
  },
  {
    name: "Sofia Reed",
    role: "Creative Technologist",
    detail: "Connects expressive design with useful technology.",
    tag: "Technology",
    image: "/ch.png",
  },
];

const loopedTeam = [...team, ...team];

export function MeetTheTeam() {
  return (
    <section className="meet-team relative overflow-hidden bg-cream text-wine">
      <div className="meet-team__grid" aria-hidden="true" />
      <div className="mx-auto w-full max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">
        <div className="meet-team__intro flex flex-col gap-6 border-t border-wine/15 pt-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-accent sm:text-[10px]">
              05 — Meet the team
            </p>
            <h2 className="mt-6 w-max max-w-full text-[clamp(3.4rem,7vw,7rem)] font-medium leading-[0.82] tracking-[-0.075em]">
              <span className="block whitespace-nowrap">People behind</span>
              <span className="block font-editorial italic text-accent">the work.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-wine/60 sm:text-right sm:text-base sm:leading-8">
            A small, curious team bringing strategy, craft and momentum to every collaboration.
          </p>
        </div>

        <div className="meet-team__carousel mt-14 sm:mt-16" aria-label="Aura team members">
          <div className="meet-team__track">
            {loopedTeam.map((member, index) => (
              <article
                className="meet-team__card"
                key={`${member.name}-${index}`}
                style={{ backgroundImage: `url(${member.image})` }}
              >
                <div className="meet-team__card-info">
                  <div>
                    <p className="meet-team__role">{member.role}</p>
                    <h3>{member.name}</h3>
                  </div>
                  <span className="meet-team__tag">{member.tag}</span>
                  <p className="meet-team__detail">{member.detail}</p>
                  <button type="button" className="meet-team__profile">
                    View profile <HiArrowRight />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="meet-team__footer mt-12 flex items-center justify-center gap-4 text-[9px] font-semibold uppercase tracking-[0.24em] text-wine/45 sm:mt-16">
          <span className="h-px w-16 bg-wine/20 sm:w-40" />
          One studio. Many perspectives.
          <span className="h-px w-16 bg-wine/20 sm:w-40" />
        </div>
      </div>
    </section>
  );
}

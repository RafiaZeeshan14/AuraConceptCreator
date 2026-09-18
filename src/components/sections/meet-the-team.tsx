import { TeamCarousel, type TeamMember } from "@/components/lightswind/team-carousel";

/**
 * Team members are defined here, on the server, and streamed to the
 * (client) carousel as plain serialisable data.
 *
 * `id` values must be unique — the carousel also de-duplicates colliding ids
 * as a safety net so React never sees two children with the same key.
 */
const team: TeamMember[] = [
  {
    id: "asma",
    name: "ASMA",
    role: "Digital Director",
    tag: "Digital",
    bio: "Builds digital experiences people want to use.",
    image: "/manager.png",
  },
  {
    id: "ALISHBA KHAN",
    name: "ALISHBA KHAN",
    role: "Experience Designer",
    tag: "Experience",
    bio: "Makes every interaction feel considered and human.",
    image: "/sc.png",
  },
  {
    id: "manaim-ahmed",
    name: "MANAIM AHMED",
    role: "Creative Technologist",
    tag: "Technology",
    bio: "Connects expressive design with useful technology.",
    image: "/ch.png",
  },
  {
    id: "sofia-reed",
    name: "Sofia Reed",
    role: "Creative Technologist",
    tag: "Technology",
    bio: "Connects expressive design with useful technology.",
    image: "/ch.png",
  },
];

export function MeetTheTeam() {
  const disciplines = Array.from(
    new Set(team.map((member) => member.tag).filter((tag): tag is string => Boolean(tag))),
  );

  return (
    <section
      id="team"
      aria-labelledby="meet-the-team-title"
      className="meet-team relative overflow-hidden bg-cream text-wine"
    >
      <div className="meet-team__grid" aria-hidden="true" />
      <div className="meet-team__orbit" aria-hidden="true" />

      <div className="mx-auto w-full max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">
        <div className="meet-team__intro flex flex-col gap-8 border-t border-wine/15 pt-5 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-accent sm:text-[10px]">
              06 — Meet the team
            </p>
            <h2
              id="meet-the-team-title"
              className="mt-6 w-max max-w-full text-[clamp(3.4rem,7vw,7rem)] font-medium leading-[0.82] tracking-[-0.075em]"
            >
              <span className="block whitespace-nowrap">People behind</span>
              <span className="block font-editorial italic text-accent">the work.</span>
            </h2>
          </div>

          <div className="max-w-sm lg:text-right">
            <p className="text-sm leading-7 text-wine/60 sm:text-base sm:leading-8">
              A small, curious team bringing strategy, craft and momentum to every
              collaboration.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-wine/45 lg:justify-end">
              <span className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                {team.length} specialists
              </span>
              <span className="h-3 w-px bg-wine/20" aria-hidden="true" />
              <span>{disciplines.join(" · ")}</span>
            </div>
          </div>
        </div>

        <TeamCarousel
          members={team}
          className="mt-14 sm:mt-16"
          ariaLabel="Aura Concept Creator team members"
          cardWidth={370}
          cardHeight={530}
          cardRadius={30}
          background="transparent"
          infoPosition="bottom"
          infoTextColor="var(--wine)"
          autoPlay={5000}
          pauseOnHover
          visibleCards={2}
          grayscaleEffect
        />
      </div>
    </section>
  );
}
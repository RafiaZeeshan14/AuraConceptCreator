"use client";

import Image from "next/image";
import { useIntroPhase } from "@/components/effects";

const logoLetters = [
  { src: "/loader-a.png", alt: "A", width: 365, height: 365 },
  { src: "/loader-u.png", alt: "U", width: 309, height: 361 },
  { src: "/loader-r.png", alt: "R", width: 309, height: 365 },
  { src: "/loader-a.png", alt: "A", width: 365, height: 365 },
];

export function IntroLoader() {
  const { phase, closeIntro, isVisible } = useIntroPhase();

  if (!isVisible) return null;

  return (
    <div
      role="status"
      aria-label="Aura Concept Creator is loading"
      className={`intro-loader ${phase === "exiting" ? "intro-loader--exiting" : ""}`}
    >
      <div aria-hidden="true" className="intro-loader__grid" />
      <div aria-hidden="true" className="intro-loader__glow">
        <span className="intro-loader__orbit-dot intro-loader__orbit-dot--one" />
        <span className="intro-loader__orbit-dot intro-loader__orbit-dot--two" />
      </div>

      <div aria-hidden="true" className="intro-loader__topline">
        <span>Independent creative studio</span>
        <span>Est. 2025&nbsp;&nbsp;·&nbsp;&nbsp;Worldwide</span>
      </div>

      <span aria-hidden="true" className="intro-loader__side-note intro-loader__side-note--left">
        Strategy&nbsp;&nbsp;·&nbsp;&nbsp;Design&nbsp;&nbsp;·&nbsp;&nbsp;Technology
      </span>
      <span aria-hidden="true" className="intro-loader__side-note intro-loader__side-note--right">
        Digital experiences / 01
      </span>

      <div className="intro-loader__content">
        <p className="intro-loader__kicker">
          <span aria-hidden="true" /> Building what comes next
        </p>

        <div className="intro-loader__wordmark" aria-hidden="true">
          {logoLetters.map((letter, index) => (
            <span className="intro-loader__letter" key={`${letter.alt}-${index}`}>
              <Image
                src={letter.src}
                alt=""
                width={letter.width}
                height={letter.height}
                priority
              />
            </span>
          ))}
        </div>

        <div className="intro-loader__concept" aria-hidden="true">
          <Image
            src="/loader-concept-creator.png"
            alt=""
            width={1413}
            height={157}
            priority
          />
        </div>

        <div className="intro-loader__progress" aria-hidden="true">
          <span />
        </div>
        <div aria-hidden="true" className="intro-loader__progress-meta">
          <span>Loading experience</span>
          <span>00&nbsp;&nbsp;—&nbsp;&nbsp;100</span>
        </div>
      </div>

      <span aria-hidden="true" className="intro-loader__index">
        01 — 25
      </span>
      <button type="button" onClick={closeIntro} className="intro-loader__skip">
        Skip intro
      </button>
    </div>
  );
}

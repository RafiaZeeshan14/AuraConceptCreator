"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const MIN_DISPLAY_DURATION = 1350;
const MAX_DISPLAY_DURATION = 2400;
const EXIT_DURATION = 480;

const logoLetters = [
  { src: "/loader-a.png", alt: "A", width: 365, height: 365 },
  { src: "/loader-u.png", alt: "U", width: 309, height: 361 },
  { src: "/loader-r.png", alt: "R", width: 309, height: 365 },
  { src: "/loader-a.png", alt: "A", width: 365, height: 365 },
];

export function IntroLoader() {
  const [phase, setPhase] = useState<"visible" | "exiting" | "hidden">("visible");

  const closeIntro = useCallback(() => {
    setPhase((current) => (current === "hidden" ? current : "exiting"));
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const startedAt = performance.now();
    let cancelled = false;
    let revealTimer: number | undefined;

    const windowReady =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            window.addEventListener("load", () => resolve(), { once: true });
          });

    const loaderImages = Array.from(
      document.querySelectorAll<HTMLImageElement>(".intro-loader img"),
    );
    const imagesReady = Promise.all(
      loaderImages.map((image) =>
        image.complete ? Promise.resolve() : image.decode().catch(() => undefined),
      ),
    );
    const fontsReady = document.fonts?.ready ?? Promise.resolve();

    Promise.all([windowReady, imagesReady, fontsReady]).then(() => {
      if (cancelled) return;

      const minimum = reduceMotion ? 0 : MIN_DISPLAY_DURATION;
      const remaining = Math.max(0, minimum - (performance.now() - startedAt));
      revealTimer = window.setTimeout(closeIntro, remaining);
    });

    const safetyTimer = window.setTimeout(closeIntro, MAX_DISPLAY_DURATION);

    return () => {
      cancelled = true;
      window.clearTimeout(safetyTimer);
      if (revealTimer !== undefined) window.clearTimeout(revealTimer);
    };
  }, [closeIntro]);

  useEffect(() => {
    if (phase !== "exiting") return;

    const hideTimer = window.setTimeout(() => {
      setPhase("hidden");
    }, EXIT_DURATION);

    return () => window.clearTimeout(hideTimer);
  }, [phase]);

  if (phase === "hidden") return null;

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

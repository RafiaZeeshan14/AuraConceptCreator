"use client";

import { useCallback, useEffect, useState } from "react";

const MIN_DISPLAY_DURATION = 1350;
const MAX_DISPLAY_DURATION = 2400;
const EXIT_DURATION = 480;

export type IntroPhase = "visible" | "exiting" | "hidden";

/**
 * Drives the intro overlay lifecycle: waits for the window, its images and
 * fonts, holds for a minimum display time, then cross-fades out. A safety
 * timer guarantees the overlay can never trap the user.
 */
export function useIntroPhase(): {
  phase: IntroPhase;
  closeIntro: () => void;
  isVisible: boolean;
} {
  const [phase, setPhase] = useState<IntroPhase>("visible");

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

  return { phase, closeIntro, isVisible: phase !== "hidden" };
}

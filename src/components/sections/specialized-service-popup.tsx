"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiArrowUpRight, HiOutlineSparkles, HiXMark } from "react-icons/hi2";

const DISMISSED_KEY = "aura-specialized-service-popup-dismissed";
const CLOSE_COUNT_KEY = "aura-specialized-service-popup-close-count";
const FIRST_APPEARANCE_DELAY = 8_000;
const SECOND_APPEARANCE_DELAY = 4_000;
const MAX_CLOSES = 2;

export function SpecializedServicePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const appearanceTimer = useRef<number | null>(null);

  useEffect(() => {
    if (window.sessionStorage.getItem(DISMISSED_KEY) === "true") return;

    const closeCount =
      Number(window.sessionStorage.getItem(CLOSE_COUNT_KEY)) || 0;
    const delay =
      closeCount === 1 ? SECOND_APPEARANCE_DELAY : FIRST_APPEARANCE_DELAY;

    appearanceTimer.current = window.setTimeout(
      () => setIsVisible(true),
      delay,
    );

    return () => {
      if (appearanceTimer.current !== null) {
        window.clearTimeout(appearanceTimer.current);
      }
    };
  }, []);

  if (!isVisible) return null;

  const clearAppearanceTimer = () => {
    if (appearanceTimer.current !== null) {
      window.clearTimeout(appearanceTimer.current);
      appearanceTimer.current = null;
    }
  };

  const closePopup = () => {
    const closeCount =
      Number(window.sessionStorage.getItem(CLOSE_COUNT_KEY)) || 0;
    const nextCloseCount = Math.min(closeCount + 1, MAX_CLOSES);
    window.sessionStorage.setItem(CLOSE_COUNT_KEY, String(nextCloseCount));
    clearAppearanceTimer();
    setIsVisible(false);

    if (nextCloseCount >= MAX_CLOSES) {
      window.sessionStorage.setItem(DISMISSED_KEY, "true");
      return;
    }

    appearanceTimer.current = window.setTimeout(
      () => setIsVisible(true),
      SECOND_APPEARANCE_DELAY,
    );
  };

  const dismissForSession = () => {
    window.sessionStorage.setItem(DISMISSED_KEY, "true");
    window.sessionStorage.setItem(CLOSE_COUNT_KEY, String(MAX_CLOSES));
    clearAppearanceTimer();
    setIsVisible(false);
  };

  return (
    <aside
      aria-label="Specialized creative services"
      className="specialized-service-popup fixed bottom-36 left-4 z-[60] w-[calc(100vw-2rem)] max-w-[22rem] overflow-hidden rounded-[1.5rem] border border-wine/15 bg-cream text-wine shadow-[0_22px_70px_rgba(38,8,10,0.28)] sm:bottom-6 sm:left-6"
    >
      <div className="relative p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-wine/50">
            <HiOutlineSparkles className="size-4 text-accent" />
            <span>For the one-of-a-kind ideas</span>
          </div>
          <button
            type="button"
            onClick={closePopup}
            aria-label="Close Specialized Services popup"
            className="-mr-2 -mt-2 grid size-9 shrink-0 place-items-center rounded-full text-wine/50 transition-colors hover:bg-wine/8 hover:text-wine focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
          >
            <HiXMark className="size-4" />
          </button>
        </div>

        <h2 className="mt-4 text-[1.7rem] font-medium leading-[0.98] tracking-[-0.055em]">
          Need something{" "}
          <span className="font-editorial ml-1.5 italic text-accent">
            special?
          </span>
        </h2>
        <p className="mt-2 max-w-[19rem] text-xs leading-5 text-wine/65">
          From standout events and product launches to custom creative campaigns,
          we bring ambitious, out-of-the-box ideas to life.
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {["Corporate Events", "Product Launches", "Creative Campaigns"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-wine/10 px-2.5 py-1 text-[9px] font-medium text-wine/65"
            >
              {item}
            </span>
          ))}
        </div>

        <Link
          href="/portfolio?category=specialized"
          onClick={dismissForSession}
          className="mt-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-wine transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
        >
          Explore specialized work
          <HiArrowUpRight className="size-4" />
        </Link>
      </div>
    </aside>
  );
}

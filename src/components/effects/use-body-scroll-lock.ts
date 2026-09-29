"use client";

import { useEffect } from "react";

/**
 * Locks background scrolling while a modal is open.
 *
 * `scrollbar-gutter: stable` on <html> normally reserves a gutter so content
 * does not shift when a scrollbar appears. While locked there is no scrollbar
 * to paint that gutter, which would expose the root background as a coloured
 * strip down the edge, so the gutter is collapsed for the duration and the
 * original inline styles are restored on cleanup.
 */
export function useBodyScrollLock(locked = true) {
  useEffect(() => {
    if (!locked) return;

    const { body, documentElement } = document;

    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;
    const previousGutter = documentElement.style.scrollbarGutter;

    body.style.overflow = "hidden";
    body.style.paddingRight = "";
    documentElement.style.scrollbarGutter = "auto";

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
      documentElement.style.scrollbarGutter = previousGutter;
    };
  }, [locked]);
}

import type { CSSProperties } from "react";

/**
 * Builds the inline `--reveal-delay` custom property consumed by the
 * `hero-reveal` / `about-reveal` CSS keyframes.
 */
export function revealDelay(delay: string): CSSProperties {
  return { "--reveal-delay": delay } as CSSProperties;
}

export const REVEAL_STEP_SECONDS = 0.06;
export const REVEAL_MAX_STAGGER_INDEX = 5;

/**
 * Returns a staggered `--reveal-delay` for a list item, clamped so late items
 * in long grids do not wait an unreasonable amount of time.
 */
export function staggerDelay(index: number, step = REVEAL_STEP_SECONDS): string {
  return `${Math.min(index, REVEAL_MAX_STAGGER_INDEX) * step}s`;
}

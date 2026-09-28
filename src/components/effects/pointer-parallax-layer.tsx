"use client";

import {
  useCallback,
  useRef,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";

type PointerParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Peak horizontal travel in px at the edge of the element. */
  cardX?: number;
  /** Peak vertical travel in px at the edge of the element. */
  cardY?: number;
  /** Peak horizontal orbit travel in px at the edge of the element. */
  orbitX?: number;
  /** Peak vertical orbit travel in px at the edge of the element. */
  orbitY?: number;
};

/**
 * Maps pointer position over the element onto the `--about-card-x/y` and
 * `--about-orbit-x/y` custom properties so CSS can drive a parallax layer.
 */
export function PointerParallaxLayer({
  children,
  className,
  cardX = 14,
  cardY = 12,
  orbitX = -8,
  orbitY = -7,
}: PointerParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const apply = useCallback(
    (x: number, y: number) => {
      const element = ref.current;

      if (!element) return;

      element.style.setProperty("--about-card-x", `${x * cardX}px`);
      element.style.setProperty("--about-card-y", `${y * cardY}px`);
      element.style.setProperty("--about-orbit-x", `${x * orbitX}px`);
      element.style.setProperty("--about-orbit-y", `${y * orbitY}px`);
    },
    [cardX, cardY, orbitX, orbitY],
  );

  const handlePointerMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      const element = ref.current;

      if (!element) return;

      const bounds = element.getBoundingClientRect();

      apply(
        (event.clientX - bounds.left) / bounds.width - 0.5,
        (event.clientY - bounds.top) / bounds.height - 0.5,
      );
    },
    [apply],
  );

  const handlePointerLeave = useCallback(() => apply(0, 0), [apply]);

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={className}
    >
      {children}
    </div>
  );
}

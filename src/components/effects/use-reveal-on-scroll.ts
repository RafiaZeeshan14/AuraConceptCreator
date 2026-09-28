"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

/**
 * Fires once when the element enters the viewport, then disconnects.
 * Returns a ref to attach to the target and a boolean that flips to true.
 */
export function useRevealOnScroll<T extends HTMLElement>(
  threshold = 0.08,
): { ref: RefObject<T | null>; hasEntered: boolean } {
  const ref = useRef<T>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || hasEntered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [hasEntered, threshold]);

  return { ref, hasEntered };
}

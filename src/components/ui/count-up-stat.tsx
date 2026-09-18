"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpStatProps {
  value: number;
  suffix: string;
}

export function CountUpStat({ value, suffix }: CountUpStatProps) {
  const [count, setCount] = useState(0);
  const statRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const stat = statRef.current;

    if (!stat) return;

    let frameId = 0;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      frameId = requestAnimationFrame(() => setCount(value));
      return () => cancelAnimationFrame(frameId);
    }

    let hasStarted = false;
    const duration = 1500;

    const animate = (startTime: number) => {
      const progress = Math.min((performance.now() - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(value * easedProgress));

      if (progress < 1) {
        frameId = requestAnimationFrame(() => animate(startTime));
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          hasStarted = true;
          frameId = requestAnimationFrame(() => animate(performance.now()));
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(stat);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [value]);

  return (
    <span ref={statRef}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

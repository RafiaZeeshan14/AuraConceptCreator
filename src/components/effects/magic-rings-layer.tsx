"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const MagicRings = dynamic(() => import("@/components/effects/magic-rings"), {
  ssr: false,
});

export function MagicRingsLayer() {
  const [canRenderWebGl, setCanRenderWebGl] = useState(false);

  useEffect(() => {
    const device = navigator as Navigator & {
      deviceMemory?: number;
      connection?: { saveData?: boolean };
    };
    const useLightweightFallback =
      window.matchMedia("(max-width: 767px), (prefers-reduced-motion: reduce)").matches ||
      device.hardwareConcurrency <= 4 ||
      (device.deviceMemory !== undefined && device.deviceMemory <= 4) ||
      device.connection?.saveData === true;

    if (useLightweightFallback) return;

    let idleCallback: number | undefined;
    let fallbackTimer: number | undefined;
    const bootTimer = window.setTimeout(() => {
      if (window.requestIdleCallback) {
        idleCallback = window.requestIdleCallback(
          () => setCanRenderWebGl(true),
          { timeout: 650 },
        );
      } else {
        fallbackTimer = window.setTimeout(() => setCanRenderWebGl(true), 150);
      }
    }, 120);

    return () => {
      window.clearTimeout(bootTimer);
      if (idleCallback) window.cancelIdleCallback(idleCallback);
      if (fallbackTimer) window.clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="magic-rings-stage pointer-events-none absolute inset-x-[-12%] top-[13%] z-0 h-[47%] sm:inset-[8%] sm:h-auto"
    >
      <div
        className={`rings-fallback absolute inset-0 transition-opacity duration-500 ${
          canRenderWebGl ? "opacity-0" : "opacity-50 sm:opacity-35"
        }`}
      />
      {canRenderWebGl ? (
        <div className="magic-rings-live absolute inset-0 opacity-65 sm:opacity-80">
          <MagicRings
            color="#EDE8DF"
            colorTwo="#D64A55"
            speed={0.72}
            ringCount={6}
            attenuation={8.5}
            lineThickness={2.1}
            baseRadius={0.22}
            radiusStep={0.1}
            scaleRate={0.14}
            opacity={0.88}
            noiseAmount={0}
            rotation={-12}
            ringGap={1.5}
            fadeIn={0.72}
            fadeOut={0.62}
            maxDpr={1}
            targetFps={30}
          />
        </div>
      ) : null}
    </div>
  );
}

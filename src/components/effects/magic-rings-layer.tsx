"use client";

import dynamic from "next/dynamic";

const MagicRings = dynamic(() => import("@/components/effects/magic-rings"), {
  ssr: false,
});

export function MagicRingsLayer() {
  return (
    <div
      aria-hidden="true"
      className="magic-rings-stage pointer-events-none absolute inset-x-[-12%] top-[13%] z-0 h-[47%] sm:inset-[8%] sm:h-auto"
    >
      <div className="magic-rings-live absolute inset-0 opacity-75 sm:opacity-80">
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
    </div>
  );
}

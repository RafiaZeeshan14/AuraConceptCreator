"use client";

import React from "react";
import type { WorkVisual, WorkVisualStyle } from "./portfolio-data";

export const workVisualStyles: Record<WorkVisual, WorkVisualStyle> = {
  orbit: {
    surface: "bg-[#5b0d13]",
    label: "absolute left-[10%] top-[12%] text-[8px] uppercase tracking-[0.3em] text-cream/40",
    eyebrow: "text-[9px] uppercase tracking-[0.25em] text-accent",
    headline: "text-cream",
    accent: "text-accent",
    arrow: "bg-cream text-wine",
  },
  columns: {
    surface: "border border-wine/10 bg-[#e9e1d5]",
    label: "absolute right-[10%] top-[12%] text-[8px] uppercase tracking-[0.3em] text-wine/40",
    eyebrow: "text-[9px] uppercase tracking-[0.25em] text-accent",
    headline: "text-wine",
    accent: "text-accent",
    arrow: "bg-wine text-cream",
  },
  rings: {
    surface: "bg-[#b52835]",
    label: "absolute left-[10%] top-[12%] text-[8px] uppercase tracking-[0.3em] text-cream/50",
    eyebrow: "text-[9px] uppercase tracking-[0.25em] text-cream/60",
    headline: "text-cream",
    accent: "",
    arrow: "bg-cream text-wine",
  },
  discs: {
    surface: "bg-wine",
    label: "absolute right-[10%] top-[12%] text-[8px] uppercase tracking-[0.3em] text-cream/40",
    eyebrow: "text-[9px] uppercase tracking-[0.25em] text-accent",
    headline: "text-cream",
    accent: "text-accent",
    arrow: "bg-cream text-wine",
  },
  video: {
    surface: "bg-[#1a1a2e]",
    label: "absolute left-[10%] top-[12%] text-[8px] uppercase tracking-[0.3em] text-cream/40",
    eyebrow: "text-[9px] uppercase tracking-[0.25em] text-accent",
    headline: "text-cream",
    accent: "text-accent",
    arrow: "bg-cream text-wine",
  },
};

export const workOrnaments: Record<WorkVisual, React.ReactNode> = {
  orbit: (
    <>
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-24 size-[420px] rounded-full border border-cream/10"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-12 right-12 size-24 rounded-full border border-accent/30"
      />
    </>
  ),
  columns: (
    <>
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-[8%] h-[65%] w-[22%] border-x border-t border-wine/10"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[10%] right-[18%] h-[45%] w-[18%] border border-accent/30"
      />
    </>
  ),
  rings: (
    <>
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 size-80 rounded-full border border-cream/20"
      />
      <div
        aria-hidden="true"
        className="absolute right-16 top-20 size-20 rounded-full bg-cream/10"
      />
    </>
  ),
  discs: (
    <div
      aria-hidden="true"
      className="absolute bottom-[10%] right-[10%] flex size-36 items-center justify-center rounded-full border border-cream/15"
    >
      <div className="size-20 rounded-full border border-accent/30" />
    </div>
  ),
  video: (
    <>
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -right-20 size-72 rounded-full border border-cream/8"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-16 right-16 size-4 rounded-full bg-accent/40"
      />
    </>
  ),
};

export const heroCreateItems = ["Brands", "Campaigns", "Digital Experiences", "Stories"];
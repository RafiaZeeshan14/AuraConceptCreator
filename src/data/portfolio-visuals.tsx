"use client";

import React from "react";
import type { WorkVisual } from "./portfolio-data";

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
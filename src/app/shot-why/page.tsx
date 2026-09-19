"use client";

import { useEffect } from "react";
import { WhyChooseAura } from "@/components/sections/why-choose-aura";

export default function ShotWhyPage() {
  useEffect(() => {
    function measureAll() {
      const out: Record<string, unknown> = {};
      const orbit = document.querySelector(".why-choose-aura__orbit");
      if (orbit) {
        const r = orbit.getBoundingClientRect();
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        out.viewport = { vw, vh, scrollX: window.pageXOffset, scrollY: window.pageYOffset };
        out.orbit = { top: Math.round(r.top), left: Math.round(r.left), bottom: Math.round(r.bottom), right: Math.round(r.right), width: Math.round(r.width), height: Math.round(r.height) };
        const positions: Record<string, unknown> = {};
        document.querySelectorAll(".why-choose-aura__card").forEach((card) => {
          const cr = card.getBoundingClientRect();
          const cls = (card as HTMLElement).className;
          let pos = "";
          const m = cls.match(/why-choose-aura__card--(\S+)/);
          if (m) pos = m[1];
          positions[pos] = { top: Math.round(cr.top), left: Math.round(cr.left), bottom: Math.round(cr.bottom), right: Math.round(cr.right), width: Math.round(cr.width), height: Math.round(cr.height) };
        });
        out.cards = positions;
      }
      fetch("/api/measure", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(out),
      }).catch(() => {});
    }
    measureAll();
    window.addEventListener("resize", measureAll);
    window.addEventListener("scroll", measureAll);
    const t = setInterval(measureAll, 500);
    return () => clearInterval(t);
  }, []);

  return <WhyChooseAura />;
}
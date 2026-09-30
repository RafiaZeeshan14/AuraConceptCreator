"use client";

import { useEffect, useRef } from "react";

/** Elements that make the cursor react. */
const INTERACTIVE = "a, button, [role='button'], input, textarea, select";
/** Elements that also reveal a label inside the ring. */
const LABELLED = "[data-cursor-label]";

const RING_BASE = 36;
const SCALE_HOVER = 1.7;
const SCALE_LABELLED = 2.5;

/**
 * Site-wide pointer effect: an inverted-blend cursor ring that lags behind a
 * crisp dot, wrapped in a soft brand bloom with a short trail, a contextual
 * label and a click ripple.
 *
 * Fine pointers only — touch devices and `prefers-reduced-motion` visitors keep
 * the native cursor, since the effect hides the real one.
 */
export function CursorAura() {
  const layerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const trailRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const root = document.documentElement;
    root.classList.add("cursor-aura");

    const layer = layerRef.current;

    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: pointer.x, y: pointer.y, scale: 1, scaleTarget: 1 };
    const dot = { x: pointer.x, y: pointer.y };
    const glow = { x: pointer.x, y: pointer.y };
    const trail = Array.from({ length: 3 }, () => ({
      x: pointer.x,
      y: pointer.y,
    }));

    let frame = 0;
    let running = false;
    let shown = false;
    let label = "";
    let dotHidden = false;

    const place = (
      element: HTMLElement | null,
      x: number,
      y: number,
      scale = 1,
    ) => {
      if (!element) return;
      element.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`;
    };

    const setLabel = (text: string) => {
      if (text === label) return;
      label = text;

      if (labelRef.current) {
        labelRef.current.textContent = text;
        labelRef.current.style.opacity = text ? "1" : "0";
      }
    };

    const setDotHidden = (hidden: boolean) => {
      if (hidden === dotHidden) return;
      dotHidden = hidden;

      if (dotRef.current) dotRef.current.style.opacity = hidden ? "0" : "1";
    };

    const render = () => {
      ring.scale += (ring.scaleTarget - ring.scale) * 0.18;

      place(glowRef.current, glow.x, glow.y);
      place(ringRef.current, ring.x, ring.y, ring.scale);
      place(dotRef.current, dot.x, dot.y);
      trail.forEach((point, index) => {
        place(trailRefs.current[index] ?? null, point.x, point.y);
      });

      const settled =
        Math.abs(pointer.x - ring.x) < 0.1 &&
        Math.abs(pointer.y - ring.y) < 0.1 &&
        Math.abs(ring.scaleTarget - ring.scale) < 0.002;

      if (settled) {
        running = false;
        return;
      }

      frame = requestAnimationFrame(step);
    };

    const step = () => {
      dot.x += (pointer.x - dot.x) * 0.45;
      dot.y += (pointer.y - dot.y) * 0.45;
      ring.x += (pointer.x - ring.x) * 0.16;
      ring.y += (pointer.y - ring.y) * 0.16;
      glow.x += (pointer.x - glow.x) * 0.07;
      glow.y += (pointer.y - glow.y) * 0.07;

      trail.forEach((point, index) => {
        const ease = 0.22 - index * 0.05;
        point.x += (pointer.x - point.x) * ease;
        point.y += (pointer.y - point.y) * ease;
      });

      render();
    };

    const wake = () => {
      if (running) return;
      running = true;
      frame = requestAnimationFrame(step);
    };

    const ripple = (x: number, y: number) => {
      if (!layer) return;

      const node = document.createElement("span");
      node.dataset.ripple = "true";
      node.className =
        "pointer-events-none absolute left-0 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cream/70 mix-blend-difference";
      node.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      node.animate(
        [
          { transform: `${node.style.transform} scale(1)`, opacity: 0.9 },
          { transform: `${node.style.transform} scale(14)`, opacity: 0 },
        ],
        { duration: 620, easing: "cubic-bezier(0.16, 1, 0.3, 1)" },
      ).finished.then(
        () => node.remove(),
        () => node.remove(),
      );

      layer.appendChild(node);
    };

    const handleMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;

      if (!shown) {
        shown = true;
        ring.x = pointer.x;
        ring.y = pointer.y;
        dot.x = pointer.x;
        dot.y = pointer.y;
        glow.x = pointer.x;
        glow.y = pointer.y;
        trail.forEach((point) => {
          point.x = pointer.x;
          point.y = pointer.y;
        });

        if (layer) layer.style.opacity = "1";
      }

      const target = event.target instanceof Element ? event.target : null;
      const labelled = target?.closest(LABELLED);

      if (labelled) {
        ring.scaleTarget = SCALE_LABELLED;
        setLabel(labelled.getAttribute("data-cursor-label") ?? "");
        setDotHidden(true);
      } else if (target?.closest(INTERACTIVE)) {
        ring.scaleTarget = SCALE_HOVER;
        setLabel("");
        setDotHidden(true);
      } else {
        ring.scaleTarget = 1;
        setLabel("");
        setDotHidden(false);
      }

      wake();
    };

    const handleDown = (event: PointerEvent) => {
      ripple(event.clientX, event.clientY);
    };

    const handleLeave = () => {
      shown = false;
      if (layer) layer.style.opacity = "0";
    };

    const handleEnter = () => {
      shown = true;
      if (layer) layer.style.opacity = "1";
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerdown", handleDown, { passive: true });
    document.addEventListener("pointerleave", handleLeave);
    document.addEventListener("pointerenter", handleEnter);
    window.addEventListener("blur", handleLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerdown", handleDown);
      document.removeEventListener("pointerleave", handleLeave);
      document.removeEventListener("pointerenter", handleEnter);
      window.removeEventListener("blur", handleLeave);
      root.classList.remove("cursor-aura");
      layer
        ?.querySelectorAll("[data-ripple]")
        .forEach((node) => node.remove());
    };
  }, []);

  return (
    <div
      ref={layerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9998] hidden overflow-hidden opacity-0 [@media(pointer:fine)]:block"
    >
      <div
        ref={glowRef}
        className="absolute left-0 top-0 size-[480px] rounded-full bg-[radial-gradient(circle,rgba(182,41,53,0.20),rgba(182,41,53,0.06)_45%,transparent_70%)] blur-2xl"
        style={{ transform: "translate3d(-100px,-100px,0) translate(-50%,-50%)" }}
      />

      {[0, 1, 2].map((index) => (
        <span
          key={index}
          ref={(node) => {
            trailRefs.current[index] = node;
          }}
          className="absolute left-0 top-0 rounded-full bg-cream mix-blend-difference"
          style={{
            width: 8 - index * 2,
            height: 8 - index * 2,
            opacity: 0.34 - index * 0.09,
            transform: "translate3d(-100px,-100px,0) translate(-50%,-50%)",
          }}
        />
      ))}

      <div
        ref={ringRef}
        className="absolute left-0 top-0 grid place-items-center rounded-full border border-white/85 mix-blend-difference"
        style={{
          width: RING_BASE,
          height: RING_BASE,
          transform: "translate3d(-100px,-100px,0) translate(-50%,-50%)",
        }}
      >
        <span
          ref={labelRef}
          className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white opacity-0"
          style={{ opacity: 0 }}
        />
      </div>

      <div
        ref={dotRef}
        className="absolute left-0 top-0 size-[5px] rounded-full bg-white mix-blend-difference"
        style={{ transform: "translate3d(-100px,-100px,0) translate(-50%,-50%)" }}
      />
    </div>
  );
}

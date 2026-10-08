"use client";

import { useEffect, useRef } from "react";

type GhostPose = "float" | "wave" | "curious" | "sleep";

const IDLE_POSES: GhostPose[] = ["wave", "curious", "sleep", "wave"];

export function CursorGhost() {
  const ghostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (!finePointer.matches || reducedMotion.matches) return;

    const ghost = ghostRef.current;
    if (!ghost) return;

    let idleTimer = 0;
    let poseTimer = 0;
    let poseIndex = 0;

    const setPose = (pose: GhostPose) => {
      ghost.dataset.pose = pose;
    };

    const startIdlePoses = () => {
      ghost.classList.remove("is-moving");
      ghost.classList.add("is-idle");
      poseIndex = 0;
      setPose(IDLE_POSES[poseIndex]);
      poseTimer = window.setInterval(() => {
        poseIndex = (poseIndex + 1) % IDLE_POSES.length;
        setPose(IDLE_POSES[poseIndex]);
      }, 2600);
    };

    const handleMove = (event: PointerEvent) => {
      ghost.style.left = `${event.clientX + 14}px`;
      ghost.style.top = `${event.clientY + 12}px`;
      ghost.classList.add("is-visible", "is-moving");
      ghost.classList.remove("is-idle");
      window.clearTimeout(idleTimer);
      window.clearInterval(poseTimer);
      setPose("float");
      idleTimer = window.setTimeout(startIdlePoses, 300);
    };

    const hide = () => ghost.classList.remove("is-visible");
    const show = () => ghost.classList.add("is-visible");

    window.addEventListener("pointermove", handleMove, { passive: true });
    document.addEventListener("pointerleave", hide);
    document.addEventListener("pointerenter", show);
    window.addEventListener("blur", hide);
    window.addEventListener("focus", show);

    return () => {
      window.clearTimeout(idleTimer);
      window.clearInterval(poseTimer);
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerleave", hide);
      document.removeEventListener("pointerenter", show);
      window.removeEventListener("blur", hide);
      window.removeEventListener("focus", show);
    };
  }, []);

  return (
    <div
      ref={ghostRef}
      aria-hidden="true"
      data-pose="float"
      className="cursor-ghost pointer-events-none fixed z-[9997] hidden [@media(pointer:fine)]:block"
    >
      <svg
        className="cursor-ghost__art"
        width="68"
        height="74"
        viewBox="0 0 76 82"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="cursor-ghost__body">
          <path
            className="cursor-ghost__left-arm"
            d="M17 43C8 42 5 35 9 29C11 26 14 28 16 31L20 37"
            fill="#FFF9F2"
            stroke="#5D1011"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="cursor-ghost__right-arm"
            d="M59 43C68 42 71 35 67 29C65 26 62 28 60 31L56 37"
            fill="#FFF9F2"
            stroke="#5D1011"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 69V37C15 19.3 25.3 8 38 8C50.7 8 61 19.3 61 37V69L54 64L47 70L39 64L31 70L23 64L15 69Z"
            fill="#FFF9F2"
            stroke="#5D1011"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M17 69L23 64L31 70L39 64L47 70L54 64L59 68"
            stroke="#E8CFC6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g className="cursor-ghost__face cursor-ghost__face--happy">
            <path d="M27 37C29 33 33 33 35 37M42 37C44 33 48 33 50 37" stroke="#5D1011" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M35 45C36 49 41 49 42 45" stroke="#5D1011" strokeWidth="2.4" strokeLinecap="round" />
            <ellipse cx="25" cy="42" rx="3.5" ry="2.2" fill="#E98B91" opacity=".6" />
            <ellipse cx="52" cy="42" rx="3.5" ry="2.2" fill="#E98B91" opacity=".6" />
          </g>
          <g className="cursor-ghost__face cursor-ghost__face--curious">
            <ellipse cx="31" cy="37" rx="3" ry="4" fill="#5D1011" />
            <ellipse cx="46" cy="37" rx="3" ry="4" fill="#5D1011" />
            <circle cx="32" cy="36" r="1" fill="#FFF9F2" />
            <circle cx="47" cy="36" r="1" fill="#FFF9F2" />
            <ellipse cx="39" cy="46" rx="2.5" ry="3" fill="#5D1011" />
            <path d="M25 44L21 43M53 44L57 43" stroke="#E98B91" strokeWidth="2" strokeLinecap="round" />
          </g>
          <g className="cursor-ghost__face cursor-ghost__face--sleep">
            <path d="M27 39C29 42 33 42 35 39M42 39C44 42 48 42 50 39" stroke="#5D1011" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M36 47C38 45 40 45 42 47" stroke="#5D1011" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="25" cy="44" rx="3.5" ry="2" fill="#E98B91" opacity=".55" />
            <ellipse cx="52" cy="44" rx="3.5" ry="2" fill="#E98B91" opacity=".55" />
          </g>
          <g className="cursor-ghost__zzz">
            <path d="M56 18L62 18L56 24L62 24M64 10L69 10L64 15L69 15" stroke="#B62935" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <path className="cursor-ghost__sparkle" d="M12 19V14M9.5 16.5H14.5M64 52V48M62 50H66" stroke="#B62935" strokeWidth="1.6" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

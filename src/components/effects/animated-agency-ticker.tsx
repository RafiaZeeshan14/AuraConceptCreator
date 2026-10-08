"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { BottomProjectTicker } from "./bottom-project-ticker";

type AnimationConditions = {
  mobile: boolean;
  tablet: boolean;
  reducedMotion: boolean;
};

export function AnimatedAgencyTicker() {
  const stageRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const carMotionRef = useRef<HTMLDivElement>(null);
  const flagClothRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const car = carRef.current;
    const carMotion = carMotionRef.current;
    const flagCloth = flagClothRef.current;

    if (!stage || !car || !carMotion || !flagCloth) return;

    const media = gsap.matchMedia();

    media.add(
      {
        mobile: "(max-width: 639px)",
        tablet: "(min-width: 640px) and (max-width: 1023px)",
        desktop: "(min-width: 1024px)",
        reducedMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const conditions = context.conditions as AnimationConditions;
        const puffs = gsap.utils.toArray<HTMLElement>(
          stage.querySelectorAll(".animated-agency-ticker__dust-puff"),
        );

        if (conditions.reducedMotion) {
          car.classList.add("is-static");
          return () => car.classList.remove("is-static");
        }

        car.classList.remove("is-static");
        const duration = conditions.mobile
          ? 10
          : conditions.tablet
            ? 15
            : 18;

        gsap.set(car, { x: () => -car.offsetWidth, y: 0 });
        gsap.set(carMotion, { y: 0 });
        gsap.set(flagCloth, { rotationY: 0, skewY: 0, scaleX: 1 });
        gsap.set(puffs, { autoAlpha: 0, x: 0, scale: 0.78 });

        const drive = gsap.timeline({
          repeat: -1,
          repeatDelay: 0.35,
        });

        drive.to(
          car,
          {
            x: () => window.innerWidth + car.offsetWidth,
            duration,
            ease: "none",
          },
          0,
        );

        const dustAnimations = puffs.map((puff, index) =>
          gsap.to(puff, {
            keyframes: [
              {
                autoAlpha: 0.38 - index * 0.06,
                x: -20,
                scale: 1,
                duration: 0.34,
                ease: "power1.out",
              },
              {
                autoAlpha: 0,
                x: -54 - index * 8,
                scale: 1.12,
                duration: 0.6,
                ease: "power1.in",
              },
            ],
            delay: index * 0.16,
            repeat: -1,
            repeatDelay: 0.06 + index * 0.08,
          }),
        );

        const suspension = gsap.to(carMotion, {
          y: -2.5,
          duration: 0.24,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        const wind = gsap.to(flagCloth, {
          rotationY: 5,
          skewY: 1.4,
          scaleX: 0.985,
          x: -2.5,
          duration: 0.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          transformOrigin: "18% 50%",
        });

        return () => {
          drive.kill();
          dustAnimations.forEach((animation) => animation.kill());
          suspension.kill();
          wind.kill();
        };
      },
    );

    return () => media.revert();
  }, []);

  return (
    <>
      <div
        ref={stageRef}
        aria-hidden="true"
        className="animated-agency-ticker__stage"
      >
        <div
          ref={carRef}
          className="animated-agency-ticker__car"
        >
          <div
            ref={carMotionRef}
            className="animated-agency-ticker__car-motion"
          >
            <div className="animated-agency-ticker__dust">
              {[0, 1, 2].map((index) => (
                <Image
                  key={index}
                  src="/dust.png"
                  alt=""
                  width={2172}
                  height={724}
                  unoptimized
                  priority={false}
                  className={`animated-agency-ticker__dust-puff animated-agency-ticker__dust-puff--${index + 1}`}
                />
              ))}
            </div>

            <Image
              src="/car-cat.png"
              alt=""
              width={1536}
              height={1024}
              unoptimized
              priority={false}
              className="animated-agency-ticker__car-image"
            />

            <div className="animated-agency-ticker__flag">
              <div className="animated-agency-ticker__flag-pole">
                <Image
                  src="/flagpole.png"
                  alt=""
                  width={1774}
                  height={887}
                  unoptimized
                  priority={false}
                />
              </div>
              <div
                ref={flagClothRef}
                className="animated-agency-ticker__flag-cloth"
              >
                <Image
                  src="/flagpole.png"
                  alt=""
                  width={1774}
                  height={887}
                  unoptimized
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomProjectTicker />
    </>
  );
}

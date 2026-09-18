"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type TouchEvent as ReactTouchEvent,
} from "react";
import { motion, useReducedMotion, type TargetAndTransition } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

import { cn } from "@/lib/utils";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  /** Short discipline label, e.g. "Digital". */
  tag?: string;
  /** Optional alt text override. Defaults to "<name>, <role>". */
  alt?: string;
}

export interface TeamCarouselProps {
  /**
   * Team members to display. Duplicate ids are tolerated: render keys are
   * de-duplicated internally so React never warns about repeated keys.
   */
  members: TeamMember[];
  /** Background color or gradient. */
  background?: string;
  /** Base card width in pixels (scaled down on narrow containers). */
  cardWidth?: number;
  /** Base card height in pixels (scaled down on narrow containers). */
  cardHeight?: number;
  /** Card border radius */
  cardRadius?: number;
  /** Enable/disable navigation arrows */
  showArrows?: boolean;
  /** Enable/disable dots indicator */
  showDots?: boolean;
  /** Enable/disable the "01 / 04" counter next to the active member */
  showCounter?: boolean;
  /** Enable/disable the auto-play progress bar */
  showProgress?: boolean;
  /** Enable/disable keyboard navigation (scoped to the carousel) */
  keyboardNavigation?: boolean;
  /** Enable/disable touch/swipe navigation */
  touchNavigation?: boolean;
  /** Animation duration in milliseconds */
  animationDuration?: number;
  /** Auto-play interval in milliseconds (0 to disable) */
  autoPlay?: number;
  /** Pause auto-play on hover/focus */
  pauseOnHover?: boolean;
  /** Number of visible cards on each side of the active card */
  visibleCards?: number;
  /** Scale factor for side cards */
  sideCardScale?: number;
  /** Opacity for side cards */
  sideCardOpacity?: number;
  /** Apply grayscale filter to side cards */
  grayscaleEffect?: boolean;
  /** Custom className for the container */
  className?: string;
  /** Custom className for cards */
  cardClassName?: string;
  /** Member info position */
  infoPosition?: "bottom" | "overlay" | "none";
  /** Info text color */
  infoTextColor?: string;
  /** Info background (used by the overlay variant) */
  infoBackground?: string;
  /** Accessible name for the carousel region */
  ariaLabel?: string;
  /** Scale cards down when the container is narrow (default: true) */
  responsive?: boolean;
  /** Callback when active member changes */
  onMemberChange?: (member: TeamMember, index: number) => void;
  /** Callback when card is clicked */
  onCardClick?: (member: TeamMember, index: number) => void;
  /** Initial active index */
  initialIndex?: number;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const pad = (value: number) => String(value).padStart(2, "0");

/**
 * Measuring the container has to happen before the first paint, otherwise a
 * narrow screen briefly shows the desktop composition. `useLayoutEffect` is a
 * no-op (and warns) during SSR, so fall back to `useEffect` on the server.
 */
const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

export function TeamCarousel({
  members,
  background,
  cardWidth = 280,
  cardHeight = 380,
  cardRadius = 20,
  showArrows = true,
  showDots = true,
  showCounter = true,
  showProgress = true,
  keyboardNavigation = true,
  touchNavigation = true,
  animationDuration = 800,
  autoPlay = 0,
  pauseOnHover = true,
  visibleCards = 2,
  sideCardScale = 0.9,
  sideCardOpacity = 0.8,
  grayscaleEffect = true,
  className,
  cardClassName,
  infoPosition = "bottom",
  infoTextColor,
  infoBackground = "transparent",
  ariaLabel = "Team members",
  responsive = true,
  onMemberChange,
  onCardClick,
  initialIndex = 0,
}: TeamCarouselProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const containerRef = useRef<HTMLDivElement>(null);

  const [containerWidth, setContainerWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(() => Math.max(initialIndex, 0));
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const indexRef = useRef(currentIndex);
  const touchStartRef = useRef<number | null>(null);
  const touchDeltaRef = useRef(0);

  /**
   * Normalise the members list once: every entry gets a stable, guaranteed
   * unique render key. This is what keeps React from ever reporting
   * "Encountered two children with the same key".
   */
  const items = useMemo(() => {
    const used = new Set<string>();

    return members.map((member, index) => {
      const base = member.id?.trim() || slugify(member.name) || `member-${index + 1}`;
      let key = base;
      let suffix = 2;

      while (used.has(key)) {
        key = `${base}-${suffix}`;
        suffix += 1;
      }

      used.add(key);

      return { member, key, index };
    });
  }, [members]);

  const total = items.length;

  // Refs keep the navigation callbacks stable so timers/listeners are never
  // re-created when unrelated state (hover, resize, swipe) changes.
  const itemsRef = useRef(items);
  const callbacksRef = useRef({ onMemberChange, onCardClick });

  useEffect(() => {
    itemsRef.current = items;
  }, [items]);

  useEffect(() => {
    callbacksRef.current = { onMemberChange, onCardClick };
  }, [onMemberChange, onCardClick]);

  /**
   * Responsive geometry. Card offsets are expressed as fractions of the card
   * width, so the whole composition can be scaled to fit the container instead
   * of being clipped on narrow screens.
   */
  const layout = useMemo(() => {
    const measured = containerWidth > 0;
    const sideCards =
      !responsive || !measured
        ? visibleCards
        : containerWidth < 720
          ? 0
          : containerWidth < 1100
            ? Math.min(1, visibleCards)
            : visibleCards;

    const scaleFor = (distance: number) =>
      clamp(sideCardScale - 0.108 * (distance - 1), 0.5, 1);
    const opacityFor = (distance: number) =>
      clamp(sideCardOpacity * (1 - 0.3 * (distance - 1)), 0.2, 1);

    // How much horizontal room the composition needs, measured in card
    // widths. Solving for the card width up front (instead of scaling the
    // offsets afterwards) guarantees the outer cards never overflow.
    const activeCardScale = 1.08;
    const requiredUnits = Math.max(
      sideCards > 0 ? 0.75 * sideCards + 0.5 * scaleFor(sideCards) : 0,
      0.5 * activeCardScale,
    );
    const scale =
      responsive && measured
        ? clamp(containerWidth / (2 * requiredUnits * cardWidth), 0.6, 1)
        : 1;

    const width = Math.round(cardWidth * scale);
    const offsetFor = (distance: number) => distance * width * 0.75;

    return {
      sideCards,
      offsetFor,
      scaleFor,
      opacityFor,
      width,
      height: Math.round(cardHeight * scale),
      stageHeight: Math.round(cardHeight * scale * activeCardScale) + 36,
    };
  }, [
    cardHeight,
    cardWidth,
    containerWidth,
    responsive,
    sideCardOpacity,
    sideCardScale,
    visibleCards,
  ]);

  /** Position of every card relative to the active one (null = off screen). */
  const positionedItems = useMemo(() => {
    if (total === 0) return [];

    return items.map((item) => {
      const diff = (item.index - currentIndex + total) % total;
      let side: number | null = null;

      if (diff === 0) side = 0;
      else if (diff <= layout.sideCards) side = diff;
      else if (diff >= total - layout.sideCards) side = diff - total;

      return { ...item, side };
    });
  }, [currentIndex, items, layout.sideCards, total]);

  const getVariant = useCallback(
    (side: number | null): TargetAndTransition => {
      const transition = {
        duration: prefersReducedMotion ? 0 : animationDuration / 1000,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      };
      const sideFilter = grayscaleEffect ? "grayscale(100%)" : "grayscale(0%)";

      if (side === null) {
        return {
          zIndex: 0,
          opacity: 0,
          scale: 0.8,
          x:
            direction >= 0
              ? layout.width * (layout.sideCards + 1.2)
              : -layout.width * (layout.sideCards + 1.2),
          filter: sideFilter,
          pointerEvents: "none",
          transition,
        };
      }

      if (side === 0) {
        return {
          zIndex: 10,
          opacity: 1,
          scale: 1.08,
          x: 0,
          filter: "grayscale(0%)",
          pointerEvents: "auto",
          transition,
        };
      }

      const distance = Math.abs(side);

      return {
        zIndex: 10 - distance,
        opacity: layout.opacityFor(distance),
        scale: layout.scaleFor(distance),
        x: Math.sign(side) * layout.offsetFor(distance),
        filter: sideFilter,
        pointerEvents: "auto",
        transition,
      };
    },
    [animationDuration, direction, grayscaleEffect, layout, prefersReducedMotion],
  );

  const select = useCallback((target: number) => {
    const list = itemsRef.current;
    if (list.length === 0) return;

    const next = ((target % list.length) + list.length) % list.length;
    if (next === indexRef.current) return;

    setDirection(next > indexRef.current ? 1 : -1);
    indexRef.current = next;
    setCurrentIndex(next);
    callbacksRef.current.onMemberChange?.(list[next].member, next);
  }, []);

  const step = useCallback((delta: number) => {
    const list = itemsRef.current;
    if (list.length < 2) return;

    const next = (indexRef.current + delta + list.length) % list.length;

    setDirection(delta >= 0 ? 1 : -1);
    indexRef.current = next;
    setCurrentIndex(next);
    callbacksRef.current.onMemberChange?.(list[next].member, next);
  }, []);

  // Measure the container with a ResizeObserver instead of window resize
  // listeners plus layout reads on every render.
  useIsomorphicLayoutEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const measure = () => {
      const next = node.clientWidth;
      setContainerWidth((prev) => (Math.abs(prev - next) > 1 ? next : prev));
    };

    measure();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", measure);
      return () => window.removeEventListener("resize", measure);
    }

    const observer = new ResizeObserver(measure);
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  // Keep the active index valid when the members list shrinks.
  useEffect(() => {
    if (total === 0 || indexRef.current < total) return;

    indexRef.current = total - 1;
    setCurrentIndex(total - 1);
  }, [total]);

  // Auto-play: a single interval, paused on hover/focus and disabled for
  // reduced-motion users. `step` is stable, so this never restarts on
  // unrelated re-renders.
  useEffect(() => {
    if (autoPlay <= 0 || isPaused || prefersReducedMotion || total < 2) return;

    const interval = window.setInterval(() => step(1), autoPlay);

    return () => window.clearInterval(interval);
  }, [autoPlay, isPaused, prefersReducedMotion, step, total]);

  // Keyboard support is scoped to the carousel instead of hijacking arrow keys
  // for the whole document.
  const handleKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLDivElement>) => {
      if (!keyboardNavigation) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        step(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        step(1);
      } else if (event.key === "Home") {
        event.preventDefault();
        select(0);
      } else if (event.key === "End") {
        event.preventDefault();
        select(itemsRef.current.length - 1);
      }
    },
    [keyboardNavigation, select, step],
  );

  // Swipe tracking lives in refs: a finger drag must not re-render the
  // carousel on every touchmove event.
  const handleTouchStart = useCallback(
    (event: ReactTouchEvent<HTMLDivElement>) => {
      if (!touchNavigation) return;

      touchStartRef.current = event.touches[0]?.clientX ?? null;
      touchDeltaRef.current = 0;
    },
    [touchNavigation],
  );

  const handleTouchMove = useCallback(
    (event: ReactTouchEvent<HTMLDivElement>) => {
      const start = touchStartRef.current;
      if (!touchNavigation || start === null) return;

      touchDeltaRef.current = (event.touches[0]?.clientX ?? start) - start;
    },
    [touchNavigation],
  );

  const handleTouchEnd = useCallback(() => {
    if (!touchNavigation) return;

    const delta = touchDeltaRef.current;
    touchStartRef.current = null;
    touchDeltaRef.current = 0;

    if (Math.abs(delta) < 50) return;

    step(delta > 0 ? -1 : 1);
  }, [step, touchNavigation]);

  const pause = useCallback(() => setIsPaused(true), []);
  const resume = useCallback(() => setIsPaused(false), []);

  const activeIndex = total > 0 ? Math.min(currentIndex, total - 1) : -1;
  const activeItem = activeIndex >= 0 ? items[activeIndex] : undefined;

  return (
    <div
      ref={containerRef}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={keyboardNavigation ? 0 : -1}
      onKeyDown={handleKeyDown}
      onMouseEnter={pauseOnHover ? pause : undefined}
      onMouseLeave={pauseOnHover ? resume : undefined}
      onFocusCapture={pauseOnHover ? pause : undefined}
      onBlurCapture={pauseOnHover ? resume : undefined}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={cn(
        "meet-team__carousel relative flex w-full flex-col items-center",
        className,
      )}
      style={{ background }}
    >
      {/* Card stage */}
      <div
        className="meet-team__stage relative z-10 flex w-full items-center justify-center"
        style={{ height: layout.stageHeight, perspective: "1200px" }}
      >
        {showArrows && total > 1 && (
          <>
            <motion.button
              type="button"
              onClick={() => step(-1)}
              whileTap={{ scale: 0.9 }}
              className="meet-team__arrow meet-team__arrow--prev"
              aria-label="Show previous team member"
            >
              <HiChevronLeft aria-hidden="true" />
            </motion.button>
            <motion.button
              type="button"
              onClick={() => step(1)}
              whileTap={{ scale: 0.9 }}
              className="meet-team__arrow meet-team__arrow--next"
              aria-label="Show next team member"
            >
              <HiChevronRight aria-hidden="true" />
            </motion.button>
          </>
        )}

        <div
          className="relative flex h-full w-full items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {positionedItems.map(({ member, key, index, side }) => {
            const isActive = side === 0;
            const isHidden = side === null;

            return (
              <motion.button
                key={key}
                type="button"
                aria-label={`${member.name} — ${member.role}`}
                aria-current={isActive ? "true" : undefined}
                aria-hidden={isHidden}
                tabIndex={isActive ? 0 : -1}
                className={cn("meet-team__card", cardClassName)}
                style={{
                  width: layout.width,
                  height: layout.height,
                  borderRadius: cardRadius,
                  top: "50%",
                  left: "50%",
                  marginLeft: -layout.width / 2,
                  marginTop: -layout.height / 2,
                  willChange: "transform, opacity",
                }}
                initial={false}
                animate={getVariant(side)}
                onClick={() => {
                  if (!isActive) select(index);
                  callbacksRef.current.onCardClick?.(member, index);
                }}
              >
                <Image
                  src={member.image}
                  alt={member.alt ?? `${member.name}, ${member.role} at Aura Concept Creator`}
                  fill
                  sizes={`${layout.width}px`}
                  className="object-cover"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />

                {infoPosition === "overlay" && (
                  <span
                    className="meet-team__overlay"
                    style={{
                      background:
                        infoBackground ||
                        "linear-gradient(transparent, rgba(20, 2, 3, 0.82))",
                      color: infoTextColor,
                    }}
                  >
                    <span className="meet-team__overlay-name">{member.name}</span>
                    <span className="meet-team__overlay-role">{member.role}</span>
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Active member details */}
      {infoPosition === "bottom" && activeItem && (
        <div className="meet-team__info" aria-live="polite">
          <motion.div
            key={activeItem.key}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
            className="meet-team__info-body"
          >
            {showCounter && (
              <p
                className="meet-team__counter"
                style={infoTextColor ? { color: infoTextColor } : undefined}
              >
                {pad(activeIndex + 1)}
                <span> / {pad(total)}</span>
              </p>
            )}

            <h3
              className="meet-team__name"
              style={infoTextColor ? { color: infoTextColor } : undefined}
            >
              {activeItem.member.name}
            </h3>

            <p
              className="meet-team__role"
              style={infoTextColor ? { color: infoTextColor } : undefined}
            >
              {activeItem.member.role}
            </p>

            {activeItem.member.tag && (
              <span className="meet-team__tag">{activeItem.member.tag}</span>
            )}

            {activeItem.member.bio && (
              <p className="meet-team__bio">{activeItem.member.bio}</p>
            )}
          </motion.div>
        </div>
      )}

      {/* Auto-play progress */}
      {showProgress && autoPlay > 0 && total > 1 && !prefersReducedMotion && (
        <div className="meet-team__progress" aria-hidden="true">
          <span
            key={activeIndex}
            style={{
              animationDuration: `${autoPlay}ms`,
              animationPlayState: isPaused ? "paused" : "running",
            }}
          />
        </div>
      )}

      {/* Dots */}
      {showDots && total > 1 && (
        <div className="meet-team__dots" role="group" aria-label="Choose a team member">
          {items.map((item, index) => (
            <button
              key={item.key}
              type="button"
              onClick={() => select(index)}
              aria-label={`Show ${item.member.name}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={cn("meet-team__dot", index === activeIndex && "is-active")}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TeamCarousel;

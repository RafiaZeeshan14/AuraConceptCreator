"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

type HeroTagProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  pointer?: "top-left" | "top-right";
};

export function HeroTag({
  children,
  className,
  delay = 0,
  pointer = "top-left",
}: HeroTagProps) {
  return (
    <motion.div
      initial={{ scale: 0.85 }}
      animate={{ scale: 1, y: [0, -5, 0] }}
      transition={{
        scale: { delay, duration: 0.5 },
        y: { delay: delay + 0.5, duration: 4, repeat: Infinity, ease: "easeInOut" },
      }}
      className={cn("absolute z-20", className)}
    >
      <span
        aria-hidden="true"
        className={cn(
          "absolute -top-3 size-0 border-y-[7px] border-y-transparent border-l-[15px] border-l-accent",
          pointer === "top-left" ? "-left-4 -rotate-45" : "-right-4 rotate-[225deg]",
        )}
      />
      <span className="block rounded-full border border-cream/45 bg-wine/20 px-6 py-2.5 text-sm font-medium text-cream shadow-[0_8px_30px_rgba(35,0,0,0.14)] backdrop-blur-sm">
        {children}
      </span>
    </motion.div>
  );
}

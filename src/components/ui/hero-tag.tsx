import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

type HeroTagProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  pointer?: "top-left" | "top-right";
  flow?: boolean;
};

export function HeroTag({
  children,
  className,
  delay = 0,
  pointer = "top-left",
  flow = false,
}: HeroTagProps) {
  const style = { "--float-delay": `${delay}s` } as CSSProperties;

  return (
    <div
      style={style}
      className={cn(
        "hero-tag-float",
        flow ? "relative z-20" : "absolute z-20",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "absolute -top-3 size-0 scale-75 border-y-[7px] border-y-transparent border-l-[15px] border-l-accent sm:scale-100",
          pointer === "top-left" ? "-left-4 -rotate-45" : "-right-4 rotate-[225deg]",
        )}
      />
      <span className="flex items-center gap-2 rounded-full border border-cream/35 bg-[#3a080a]/45 px-3 py-2 text-[10px] font-semibold text-cream shadow-[inset_0_1px_0_rgba(237,232,223,0.08),0_12px_40px_rgba(25,0,2,0.22)] backdrop-blur-xl sm:gap-2.5 sm:px-5 sm:py-2.5 sm:text-sm">
        <span className="size-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(214,74,85,0.9)]" />
        {children}
      </span>
    </div>
  );
}

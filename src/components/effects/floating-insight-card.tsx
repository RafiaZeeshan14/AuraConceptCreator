import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

type FloatingInsightCardProps = {
  eyebrow: string;
  value: string;
  detail: string;
  className?: string;
  delay?: number;
  compact?: boolean;
};

export function FloatingInsightCard({
  eyebrow,
  value,
  detail,
  className,
  delay = 0,
  compact = false,
}: FloatingInsightCardProps) {
  const style = { "--float-delay": `${delay}s` } as CSSProperties;

  return (
    <aside
      style={style}
      className={cn(
        "insight-card-float z-20 border border-cream/15 bg-cream/[0.06] text-left shadow-[0_24px_80px_rgba(25,0,2,0.24)] backdrop-blur-xl",
        compact
          ? "relative block w-full rounded-[18px] p-3"
          : "absolute hidden w-48 rounded-[22px] p-4 xl:block",
        className,
      )}
    >
      <div className={cn("flex items-center justify-between", compact ? "mb-3" : "mb-5")}>
        <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-cream/45">
          {eyebrow}
        </span>
        <span className="size-2 rounded-full bg-accent shadow-[0_0_16px_rgba(214,74,85,0.9)]" />
      </div>
      <p
        className={cn(
          "font-medium tracking-[-0.05em] text-cream",
          compact ? "text-xl" : "text-3xl",
        )}
      >
        {value}
      </p>
      <p
        className={cn(
          "mt-1 text-cream/55",
          compact ? "text-[10px] leading-4" : "text-xs leading-5",
        )}
      >
        {detail}
      </p>
    </aside>
  );
}

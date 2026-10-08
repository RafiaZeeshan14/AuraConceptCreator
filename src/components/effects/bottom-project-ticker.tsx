import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

const tickerItems = [
  "Have a project in mind?",
  "Let's make it happen.",
  "Get a quote",
] as const;

function TickerGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <span
      className="flex shrink-0 items-center gap-5 px-5 sm:gap-7 sm:px-8"
      aria-hidden={duplicate}
    >
      {tickerItems.map((item) => (
        <span
          key={item}
          className={
            item === "Get a quote"
              ? "inline-flex items-center gap-1.5 text-wine"
              : "text-wine/65"
          }
        >
          {item}
          {item === "Get a quote" && (
            <HiArrowUpRight aria-hidden="true" className="size-3.5 text-accent" />
          )}
        </span>
      ))}
    </span>
  );
}

export function BottomProjectTicker() {
  return (
    <Link
      href="/contact"
      aria-label="Have a project in mind? Get a quote"
      className="bottom-project-ticker fixed inset-x-0 bottom-0 z-[9980] flex h-[calc(3rem+env(safe-area-inset-bottom))] w-screen items-center overflow-hidden text-wine sm:h-[calc(3.25rem+env(safe-area-inset-bottom))]"
    >
      <span className="bottom-project-ticker__track flex w-max items-center py-3 text-[9px] font-semibold uppercase tracking-[0.15em] sm:py-3.5 sm:text-[10px] sm:tracking-[0.2em]">
        <TickerGroup />
        <TickerGroup duplicate />
      </span>
    </Link>
  );
}

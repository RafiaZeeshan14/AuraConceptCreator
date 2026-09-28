export function ScrollIndicator() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-7 top-[29%] z-20 hidden flex-col items-center xl:flex"
    >
      <div className="relative h-64 w-px bg-cream/25">
        <span className="scroll-indicator-dot absolute -left-0.5 top-0 size-1 rounded-full bg-accent shadow-[0_0_10px_rgba(214,74,85,0.85)]" />
        <span className="absolute -bottom-1 -left-[3.5px] size-2 rounded-full bg-cream shadow-[0_0_12px_rgba(237,232,223,0.55)]" />
      </div>
      <span className="mt-7 text-[10px] font-medium tracking-[0.12em] text-cream/55 [writing-mode:vertical-rl] rotate-180">
        Scroll Down
      </span>
    </div>
  );
}

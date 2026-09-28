"use client";

import { useEffect } from "react";

/** Invokes `onEscape` when the Escape key is pressed. */
export function useEscapeKey(onEscape: () => void, enabled = true) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onEscape();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onEscape, enabled]);
}

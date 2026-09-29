"use client";

import { useEffect } from "react";

type ModalNavigationHandlers = {
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
};

/**
 * Wires the standard modal key bindings: Escape to dismiss, arrow keys to
 * step through items. Bindings are skipped for a single-item list.
 */
export function useModalNavigation({
  onClose,
  onNext,
  onPrevious,
}: ModalNavigationHandlers) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "ArrowRight") onNext?.();
      if (event.key === "ArrowLeft") onPrevious?.();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrevious]);
}

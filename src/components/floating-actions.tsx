"use client";

import { FaWhatsapp } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi2";

import { contactDetails } from "@/data/contact-page";

/** wa.me needs the number in international form — digits only, no `+`. */
const whatsappNumber = contactDetails.phoneLink.replace(/\D/g, "");

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hi Aura Concept Creator! I'd like to discuss a project.",
)}`;

const scrollToTop = () => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
};

/**
 * Floating shortcuts shown on every page: back to top, with a WhatsApp chat
 * button pinned below it.
 */
export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-[calc(4.5rem+env(safe-area-inset-bottom))] z-[9990] flex flex-col items-center gap-3 sm:right-7 sm:bottom-[calc(5rem+env(safe-area-inset-bottom))]">
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="group grid size-11 cursor-pointer place-items-center rounded-full border border-wine/15 bg-cream text-wine shadow-[0_12px_30px_rgba(93,16,17,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-cream hover:shadow-[0_16px_34px_rgba(182,41,53,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:size-12"
      >
        <HiArrowUp className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
      </button>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group grid size-13 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_34px_rgba(37,211,102,0.34)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1eb356] hover:shadow-[0_18px_40px_rgba(37,211,102,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:size-14"
      >
        <FaWhatsapp className="size-7 transition-transform duration-300 group-hover:scale-110" />
      </a>
    </div>
  );
}
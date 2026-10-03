import { FaWhatsapp } from "react-icons/fa";

import { contactDetails } from "@/data/contact-page";

/** wa.me needs the number in international form — digits only, no `+`. */
const whatsappNumber = contactDetails.phoneLink.replace(/\D/g, "");

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hi Aura Concept Creator! I'd like to discuss a project.",
)}`;

/** Floating chat shortcut, shown on every page. */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed right-4 bottom-4 z-[9990] grid size-13 place-items-center rounded-full border border-wine/15 bg-cream text-wine shadow-[0_14px_34px_rgba(93,16,17,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-cream hover:shadow-[0_18px_40px_rgba(182,41,53,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:right-7 sm:bottom-7"
    >
      <FaWhatsapp className="size-6 transition-transform duration-300 group-hover:scale-110" />
    </a>
  );
}
import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

import { socialLinks } from "@/data/social";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/contact" },
];

const logoLetters = [
  { src: "/loader-a.png", alt: "A", width: 365, height: 365 },
  { src: "/loader-u.png", alt: "U", width: 309, height: 361 },
  { src: "/loader-r.png", alt: "R", width: 309, height: 365 },
  { src: "/loader-a.png", alt: "A", width: 365, height: 365 },
];

export function SiteFooter() {
  return (
    <footer className="site-footer relative overflow-hidden bg-wine text-cream">
      <div className="section-sparkline" aria-hidden="true" />
      <div className="site-footer__orb" aria-hidden="true" />
      <div className="mx-auto w-full max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="site-footer__topline flex items-center justify-between border-t border-cream/15 pt-5 text-[9px] font-semibold uppercase tracking-[0.24em] text-cream/45 sm:text-[10px]">
          <span>08 — Stay curious</span>
          <span className="hidden sm:block">Aura Concept Creator</span>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">Have something in mind?</p>
            <h2 className="mt-6 max-w-5xl text-[clamp(3.5rem,8vw,8.5rem)] font-medium leading-[0.82] tracking-[-0.08em]">
              Let&apos;s make
              <span className="block font-editorial italic text-accent">something meaningful.</span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-sm text-sm leading-7 text-cream/62 sm:text-base sm:leading-8">
              Bring us the rough idea, the ambitious question or the next big move. We&apos;ll bring the clarity and craft to make it real.
            </p>
            <a
              href="mailto:auraconceptcreator@gmail.com"
              className="site-footer__email group mt-8 inline-flex items-center gap-3 text-sm font-semibold sm:text-base"
            >
              auraconceptcreator@gmail.com
              <span className="grid size-9 place-items-center rounded-full bg-accent text-cream transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <HiArrowUpRight className="size-4" />
              </span>
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-10 border-t border-cream/15 pt-7 sm:grid-cols-[1fr_auto_auto] sm:items-end">
          <div>
           <Link
  href="/"
  className="site-footer__wordmark !inline-flex !items-center !gap-2 sm:!gap-3"
  aria-label="Aura Concept Creator home"
>
  {logoLetters.map((letter, index) => (
    <span
      className="site-footer__letter !flex !h-10 !w-auto !shrink-0 !items-center !justify-center sm:!h-12"
      key={`${letter.alt}-${index}`}
    >
      <Image
        src={letter.src}
        alt=""
        width={letter.width}
        height={letter.height}
        className="!block !h-full !w-auto !max-w-none object-contain"
      />
    </span>
  ))}
  <span
    className="site-footer__wordmark-dot"
    aria-hidden="true"
  >
    .
  </span>
</Link>
            <p className="mt-3 max-w-xs text-[10px] uppercase tracking-[0.18em] text-cream/38">
              Independent creative agency for brands that refuse to blend in.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-cream/58">
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition-colors hover:text-cream">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid size-9 place-items-center rounded-full border border-cream/20 text-cream/65 transition-colors hover:border-accent hover:text-cream"
            >
              <Icon className="size-4" />
            </Link>
          ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 text-[9px] uppercase tracking-[0.16em] text-cream/32 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Aura Concept Creator</span>
          <span>Made with intent, in every detail.</span>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { HiOutlineChevronDown, HiOutlineMenuAlt3, HiX } from "react-icons/hi";

import { BrandLogo } from "@/components/brand-logo";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

type NavigationItem = {
  label: string;
  href?: string;
  hasMenu?: boolean;
};

const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", hasMenu: true },
  { label: "Pricing", href: "/pricing" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
  // { label: "Careers", href: "/#careers" },
];

const socialLinks = [
  { label: "Facebook", href: "#facebook", icon: FaFacebookF },
  { label: "LinkedIn", href: "#linkedin", icon: FaLinkedinIn },
  { label: "Instagram", href: "#instagram", icon: FaInstagram },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 text-cream">
      <div className="relative z-20 mx-auto grid h-28 w-full max-w-[1680px] grid-cols-[auto_1fr_auto] items-center px-5 sm:px-8 lg:px-14">
        <div className="origin-left scale-[0.78] md:scale-100">
          <BrandLogo />
        </div>

        <nav aria-label="Desktop navigation" className="hidden items-center justify-center gap-8 lg:flex">
          {navigation.map((item) => (
            <div key={item.label} className="group relative py-5">
              {item.hasMenu ? (
                <button type="button" className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-cream/70 transition-colors hover:text-cream focus-visible:text-cream">
                  {item.label}
                  <HiOutlineChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
                </button>
              ) : (
                <Link href={item.href ?? "#"} className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-cream/70 transition-colors hover:text-cream focus-visible:text-cream">
                  {item.label}
                </Link>
              )}

              {item.hasMenu && (
                <div className="pointer-events-none invisible absolute left-1/2 top-full w-72 -translate-x-1/2 translate-y-2 rounded-2xl border border-cream/15 bg-wine/95 p-3 opacity-0 shadow-[0_24px_70px_rgba(20,0,2,0.35)] backdrop-blur-xl transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <p className="px-3 pb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-cream/40">
                    All services
                  </p>
                  {services.map((service) => (
                    <Link
                      key={service.number}
                      href={`/portfolio?category=${service.portfolioCategory}`}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-cream/75 transition-colors hover:bg-cream/10 hover:text-cream"
                    >
                      <span className="text-[9px] font-semibold text-accent">{service.number}</span>
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center justify-self-end">
          <div className="hidden items-center gap-2 md:flex">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="grid size-8 place-items-center text-cream/65 transition-all hover:-translate-y-0.5 hover:text-cream"
              >
                <Icon className="size-4" />
              </Link>
            ))}
            <Link
              href="#youtube"
              aria-label="YouTube"
              className="grid size-8 place-items-center text-cream/65 transition-all hover:-translate-y-0.5 hover:text-cream"
            >
              <FaYoutube className="size-5" />
            </Link>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="group flex h-12 cursor-pointer items-center gap-4 text-cream lg:hidden"
          >
            <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-cream/75 transition-colors group-hover:text-cream sm:block">
              {menuOpen ? "Close" : "Menu"}
            </span>
            <span className="grid size-11 place-items-center">
              {menuOpen ? (
                <HiX className="size-7" />
              ) : (
                <HiOutlineMenuAlt3 className="size-8 transition-transform group-hover:scale-x-110" />
              )}
            </span>
          </button>
        </div>
      </div>

      <button
        type="button"
        aria-label="Close navigation"
        onClick={() => setMenuOpen(false)}
        className={cn(
          "fixed inset-0 z-10 bg-[#260608]/35 backdrop-blur-[3px] transition-opacity duration-300",
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <nav
        aria-label="Main navigation"
        className={cn(
          "absolute top-[100px] right-4 z-30 w-[min(340px,calc(100vw-32px))] origin-top-right overflow-hidden rounded-[24px] border border-cream/20 bg-[linear-gradient(145deg,rgba(237,232,223,0.13),rgba(75,12,15,0.82))] shadow-[inset_0_1px_0_rgba(237,232,223,0.12),0_35px_100px_rgba(20,0,2,0.42)] backdrop-blur-3xl transition-[max-height,opacity,transform] duration-300 sm:right-8 lg:hidden",
          menuOpen
            ? "max-h-[540px] translate-y-0 scale-100 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-3 scale-95 opacity-0",
        )}
      >
        <div className="flex items-end justify-between border-b border-cream/10 px-5 pt-4 pb-3.5">
          <div>
            <p className="text-[8px] font-semibold uppercase tracking-[0.24em] text-cream/40">
              Navigation
            </p>
            <p className="mt-0.5 text-xs text-cream/70">Explore Aura</p>
          </div>
          <span className="size-1.5 rounded-full bg-accent shadow-[0_0_16px_rgba(214,74,85,0.85)]" />
        </div>

        <ul className="space-y-0.5 p-3.5">
          {navigation.map((item, index) => (
            <li key={item.label}>
              {item.hasMenu ? (
                <div>
                  <button
                    type="button"
                    onClick={() => setServicesOpen((current) => !current)}
                    aria-expanded={servicesOpen}
                    aria-controls="mobile-services"
                    className="group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-cream/80 transition-all hover:bg-cream/10 hover:pl-4 hover:text-cream"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-[8px] font-semibold text-cream/30">0{index + 1}</span>
                      <span className="text-[15px] font-medium tracking-[-0.02em]">{item.label}</span>
                    </span>
                    <HiOutlineChevronDown
                      className={cn(
                        "size-3.5 transition-transform duration-300",
                        servicesOpen && "rotate-180",
                      )}
                    />
                  </button>

                  {/* Service sub-list — same targets as the desktop dropdown. */}
                  <div
                    id="mobile-services"
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 ease-out",
                      servicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <ul className="overflow-hidden">
                      <li className="mt-1 space-y-0.5 border-l border-cream/12 pl-3">
                        {services.map((service) => (
                          <Link
                            key={service.number}
                            href={`/portfolio?category=${service.portfolioCategory}`}
                            onClick={() => {
                              setMenuOpen(false);
                              setServicesOpen(false);
                            }}
                            className="flex items-center gap-2.5 rounded-lg py-2 pr-2 text-[13px] text-cream/70 transition-colors hover:text-cream"
                          >
                            <span className="text-[8px] font-semibold text-accent">
                              {service.number}
                            </span>
                            {service.title}
                          </Link>
                        ))}
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href ?? "#"}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-cream/80 transition-all hover:bg-cream/10 hover:pl-4 hover:text-cream"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[8px] font-semibold text-cream/30">0{index + 1}</span>
                    <span className="text-[15px] font-medium tracking-[-0.02em]">{item.label}</span>
                  </span>
                  <span className="h-px w-0 bg-cream/60 transition-all duration-300 group-hover:w-6" />
                </Link>
              )}
            </li>
          ))}
          <li className="pt-1.5">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block cursor-pointer rounded-xl bg-cream px-3 py-3 text-center text-[13px] font-semibold text-wine shadow-[0_12px_35px_rgba(20,0,2,0.18)] transition-transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { HiOutlineChevronDown, HiOutlineMenuAlt3, HiOutlineSearch, HiX } from "react-icons/hi";

import { BrandLogo } from "@/components/brand-logo";
import { cn } from "@/lib/utils";

type NavigationItem = {
  label: string;
  href: string;
  hasMenu?: boolean;
};

const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Pages", href: "#pages", hasMenu: true },
  { label: "Blog", href: "#blog" },
];

const socialLinks = [
  { label: "Facebook", href: "#facebook", icon: FaFacebookF },
  { label: "LinkedIn", href: "#linkedin", icon: FaLinkedinIn },
  { label: "Instagram", href: "#instagram", icon: FaInstagram },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 text-cream">
      <div className="relative z-20 mx-auto grid h-28 w-full max-w-[1680px] grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8 lg:px-14">
        <div className="hidden items-center gap-5 justify-self-start md:flex">
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
          <span aria-hidden="true" className="mx-1 h-6 w-px bg-cream/15" />
          <Link
            href="#youtube"
            aria-label="YouTube"
            className="grid size-8 place-items-center text-cream/65 transition-all hover:-translate-y-0.5 hover:text-cream"
          >
            <FaYoutube className="size-5" />
          </Link>
        </div>

        <div className="col-start-1 row-start-1 origin-left scale-[0.78] justify-self-start md:col-start-2 md:scale-100 md:justify-self-center">
          <BrandLogo />
        </div>

        <div className="col-start-3 row-start-1 flex items-center justify-self-end">
          <button
            type="button"
            aria-label="Search"
            className="hidden size-11 place-items-center text-cream/80 transition-colors hover:text-cream sm:grid"
          >
            <HiOutlineSearch className="size-6" />
          </button>
          <span aria-hidden="true" className="mx-4 hidden h-7 w-px bg-cream/15 sm:block" />
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="group flex h-12 cursor-pointer items-center gap-4 text-cream"
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
          "absolute top-[108px] right-5 z-30 w-[min(420px,calc(100vw-40px))] origin-top-right overflow-hidden rounded-[30px] border border-cream/20 bg-[linear-gradient(145deg,rgba(237,232,223,0.13),rgba(75,12,15,0.82))] shadow-[inset_0_1px_0_rgba(237,232,223,0.12),0_35px_100px_rgba(20,0,2,0.42)] backdrop-blur-3xl transition-[max-height,opacity,transform] duration-300 sm:right-8 lg:right-14",
          menuOpen
            ? "max-h-[620px] translate-y-0 scale-100 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-3 scale-95 opacity-0",
        )}
      >
        <div className="flex items-end justify-between border-b border-cream/10 px-7 pt-6 pb-5">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-cream/40">
              Navigation
            </p>
            <p className="mt-1 text-sm text-cream/70">Explore Aura</p>
          </div>
          <span className="size-2 rounded-full bg-accent shadow-[0_0_16px_rgba(214,74,85,0.85)]" />
        </div>

        <ul className="space-y-1 p-5">
          {navigation.map((item, index) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="group flex cursor-pointer items-center justify-between rounded-2xl px-4 py-4 text-cream/80 transition-all hover:bg-cream/10 hover:pl-5 hover:text-cream"
              >
                <span className="flex items-center gap-4">
                  <span className="text-[9px] font-semibold text-cream/30">0{index + 1}</span>
                  <span className="text-base font-medium tracking-[-0.02em]">{item.label}</span>
                </span>
                {item.hasMenu ? (
                  <HiOutlineChevronDown className="size-4 transition-transform group-hover:translate-y-0.5" />
                ) : (
                  <span className="h-px w-0 bg-cream/60 transition-all duration-300 group-hover:w-6" />
                )}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block cursor-pointer rounded-2xl bg-cream px-4 py-4 text-center text-sm font-semibold text-wine shadow-[0_12px_35px_rgba(20,0,2,0.18)] transition-transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

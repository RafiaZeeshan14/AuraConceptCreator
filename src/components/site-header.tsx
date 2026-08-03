"use client";

import Link from "next/link";
import { useState } from "react";
import { HiOutlineChevronDown, HiOutlineMenuAlt3, HiX } from "react-icons/hi";

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

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 text-cream">
      <div className="mx-auto flex h-28 w-full max-w-[1540px] items-center justify-between px-5 sm:px-8 lg:px-14">
        <BrandLogo />

        <nav
          aria-label="Main navigation"
          className="hidden rounded-full border border-cream/15 bg-[#290a0c]/30 px-10 py-4 shadow-[inset_0_1px_0_rgba(237,232,223,0.07),0_12px_35px_rgba(28,0,2,0.14)] backdrop-blur-xl supports-[backdrop-filter]:bg-[#290a0c]/20 lg:block"
        >
          <ul className="flex items-center gap-12 xl:gap-16">
            {navigation.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="group flex items-center gap-2 text-[15px] font-medium text-cream/90 transition-colors hover:text-cream"
                >
                  {item.label}
                  {item.hasMenu ? (
                    <HiOutlineChevronDown className="size-4 transition-transform group-hover:translate-y-0.5" />
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-8 lg:flex">
          <Link
            href="#contact"
            className="rounded-full border border-cream/20 px-8 py-4 text-[15px] font-medium transition-colors hover:border-cream/50 hover:bg-cream hover:text-wine"
          >
            Contact Us
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="grid size-11 place-items-center rounded-full border border-cream/20 lg:hidden"
        >
          {menuOpen ? <HiX className="size-6" /> : <HiOutlineMenuAlt3 className="size-6" />}
        </button>
      </div>

      <nav
        aria-label="Mobile navigation"
        className={cn(
          "mx-5 overflow-hidden rounded-2xl border border-cream/15 bg-wine/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden",
          menuOpen ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <ul className="space-y-1 p-4">
          {navigation.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-cream/90 hover:bg-cream/10"
              >
                {item.label}
                {item.hasMenu ? <HiOutlineChevronDown className="size-4" /> : null}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block rounded-xl bg-cream px-4 py-3 text-center text-sm font-semibold text-wine"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

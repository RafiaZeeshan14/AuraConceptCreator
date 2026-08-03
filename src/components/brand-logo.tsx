import Image from "next/image";
import Link from "next/link";

export function BrandLogo() {
  return (
    <Link
      href="/"
      aria-label="Aura Concept Creator home"
      className="relative block h-16 w-44 shrink-0 overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
    >
      <Image
        src="/logo.png"
        alt="Aura Concept Creator"
        width={1200}
        height={1920}
        priority
        className="absolute -top-[157px] left-1/2 h-[336px] w-[210px] max-w-none -translate-x-1/2 mix-blend-screen"
      />
    </Link>
  );
}

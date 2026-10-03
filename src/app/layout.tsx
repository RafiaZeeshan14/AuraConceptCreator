import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";

import { FloatingActions } from "@/components/floating-actions";
import { IntroLoader } from "@/components/intro-loader";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const editorial = Cormorant_Garamond({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Aura Concept Creator",
    template: "%s | Aura Concept Creator",
  },
  description:
    "A digital creative agency crafting distinctive brands and digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${editorial.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <IntroLoader />
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}

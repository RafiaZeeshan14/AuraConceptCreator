import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";

import { FloatingActions } from "@/components/floating-actions";
import { IntroLoader } from "@/components/intro-loader";
import { CursorGhost } from "@/components/effects/cursor-ghost";
import { StructuredData } from "@/components/seo/structured-data";
import {
  COMPANY_DETAILS,
  defaultOpenGraph,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

import "./globals.css";
import { BottomProjectTicker } from "@/components/effects/bottom-project-ticker";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ede8df" },
    { media: "(prefers-color-scheme: dark)", color: "#5d1011" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [
    {
      name: COMPANY_DETAILS.name,
      url: SITE_URL,
    },
  ],
  creator: "@auraconceptcreator",
  publisher: COMPANY_DETAILS.name,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    ...defaultOpenGraph,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  category: "business",
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
      <head>
        <StructuredData />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://maps.google.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body className="flex min-h-full flex-col">
        <IntroLoader />
        {children}
        <CursorGhost />
        <BottomProjectTicker />

        {/* <AnimatedAgencyTicker /> */}
        <FloatingActions />
      </body>
    </html>
  );
}

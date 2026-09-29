import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://woodwarkwellness.com.au"),
  title: {
    default: "Woodwark Wellness | Day Retreat in the Whitsundays",
    template: "%s | Woodwark Wellness",
  },
  description: siteConfig.description,
  openGraph: {
    title: "Woodwark Wellness",
    description: siteConfig.description,
    locale: "en_AU",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f3efe5",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-AU">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

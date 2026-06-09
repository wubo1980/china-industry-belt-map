import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Playfair_Display } from "next/font/google";

import { Footer } from "@/src/components/layout/Footer";
import { Header } from "@/src/components/layout/Header";
import { siteName, siteUrl } from "@/src/data/site";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description:
    "Interactive map of China's manufacturing clusters for importers, procurement teams, and supply chain operators.",
  applicationName: siteName,
  keywords: [
    "China sourcing",
    "China industry belt map",
    "manufacturing clusters in China",
    "sourcing regions in China",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteName,
    description:
      "See where China's major manufacturing clusters sit and what each sourcing corridor means for importers.",
    siteName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description:
      "Interactive sourcing map for understanding China's major industrial corridors.",
  },
};

/**
 * Renders the application root layout with shared header and footer chrome.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-stone-50 text-zinc-900">
        <div className="flex min-h-full flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}

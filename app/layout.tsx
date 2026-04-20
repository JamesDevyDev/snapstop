import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

const BASE_URL = "https://snapstop.app"; // change to your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // ── Core ──────────────────────────────────────────────────────────────
  title: {
    default: "Snapstop – Free Online Photobooth",
    template: "%s | Snapstop",
  },
  description:
    "Create instant photo strips in your browser — no app, no uploads, no fuss. Pick a layout, strike a pose, download your strip. Free forever.",
  keywords: [
    "online photobooth",
    "free photo booth",
    "photo strip maker",
    "virtual photobooth",
    "wedding photobooth",
    "party photo booth",
    "browser photobooth",
    "no download photobooth",
  ],
  authors: [{ name: "Snapstop" }],
  creator: "Snapstop",
  publisher: "Snapstop",

  // ── Canonical ────────────────────────────────────────────────────────
  alternates: {
    canonical: "/",
  },

  // ── Open Graph ───────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Snapstop",
    title: "Snapstop – Free Online Photobooth",
    description:
      "Create instant photo strips in your browser — no app, no uploads, no fuss. Free forever.",
    images: [
      {
        url: "/assets/og-image.png", // ideally 1200×630px
        width: 1200,
        height: 630,
        alt: "Snapstop – Free Online Photobooth",
      },
    ],
    locale: "en_US",
  },

  // ── Icons ─────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/assets/icon.png" },
      { url: "/assets/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/assets/icon.png",
    shortcut: "/assets/icon.png",
  },

  // ── Robots ───────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Misc ─────────────────────────────────────────────────────────────
  category: "photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD structured data — helps Google show rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Snapstop",
              url: BASE_URL,
              description:
                "Free online photobooth — create instant photo strips in your browser.",
              applicationCategory: "PhotographyApplication",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Multiple photo strip layouts",
                "Countdown timer",
                "Photo filters",
                "Stickers and captions",
                "Custom background colors",
                "Instant PNG download",
                "Privacy-first — no uploads",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#eeecea] relative">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
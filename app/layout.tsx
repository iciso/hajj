import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Amiri } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-amiri",
})

export const metadata: Metadata = {
  title: "Interactive Hajj Guide | Complete Hajj Tamattu Rituals & Locations",
  description:
    "Comprehensive interactive guide to Hajj Tamattu rituals, locations, and requirements. Learn about Makkah, Mina, Arafat, and all essential Hajj practices with authentic Islamic sources.",
  keywords:
    "Hajj, Umrah, Makkah, Mina, Arafat, Muzdalifah, Tawaf, Jamarat, Islamic pilgrimage, Hajj guide, Hajj rituals, Hajj Tamattu, Islamic worship, Kaaba, Ihram",
  authors: [{ name: "Hajj Guide Team" }],
  creator: "Hajj Guide Team",
  publisher: "Hajj Guide",
  openGraph: {
    title: "Interactive Hajj Guide | Complete Hajj Tamattu Rituals & Locations",
    description:
      "Comprehensive interactive guide to Hajj Tamattu rituals, locations, and requirements. Learn about Makkah, Mina, Arafat, and all essential Hajj practices with authentic Islamic sources.",
    images: [
      {
        url: "/app-icon.png",
        width: 512,
        height: 512,
        alt: "Hajj Guide Logo - Interactive Hajj and Umrah Guide",
      },
    ],
    type: "website",
    siteName: "Interactive Hajj Guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interactive Hajj Guide | Complete Hajj Tamattu Rituals",
    description: "Comprehensive interactive guide to Hajj Tamattu rituals, locations, and requirements.",
    images: ["/app-icon.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/hajj-icon.png", type: "image/png" },
    ],
    apple: [{ url: "/app-icon.png", sizes: "512x512", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  themeColor: "#10b981",
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/app-icon.png" />
        <meta property="og:image" content="/app-icon.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content="Hajj Guide Logo - Interactive Hajj and Umrah Guide" />
        <meta name="twitter:image" content="/app-icon.png" />
      </head>
      <body className={`${inter.className} ${amiri.variable}`}>{children}</body>
    </html>
  )
}

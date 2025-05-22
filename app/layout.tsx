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
  title: "Interactive Hajj Guide",
  description: "Learn about the rituals and locations of Hajj through this interactive guide",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${amiri.variable}`}>{children}</body>
    </html>
  )
}

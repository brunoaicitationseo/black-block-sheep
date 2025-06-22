import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BlackBlockSheep - Easy Bitcoin Help for Beginners",
  description:
    "Grassroots Bitcoin education helping real people—moms, teens, and small businesses—start using Bitcoin safely with human guidance and practical support.",
  keywords:
    "Bitcoin education, Bitcoin wallet setup, Lightning Network, Bitcoin safety, self-custody, Bitcoin onboarding",
  authors: [{ name: "Mayra Silva" }],
  creator: "BlackBlockSheep",
  publisher: "BlackBlockSheep",
  openGraph: {
    title: "BlackBlockSheep - Easy Bitcoin Help for Beginners",
    description: "Real Bitcoin education, not trading hype. Learn to use Bitcoin safely with human support.",
    url: "https://www.blackblocksheep.com",
    siteName: "BlackBlockSheep",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlackBlockSheep - Easy Bitcoin Help for Beginners",
    description: "Real Bitcoin education, not trading hype. Learn to use Bitcoin safely with human support.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

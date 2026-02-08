import React from "react"
import type { Metadata, Viewport } from "next"
import { DM_Sans, Space_Mono } from "next/font/google"

import "./globals.css"

const _dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const _spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "Discover Music",
  description: "Discover new music from people around you",
}

export const viewport: Viewport = {
  themeColor: "#f5f0e8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_dmSans.variable} ${_spaceMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { GoogleAnalytics } from '@next/third-parties/google'  // add this

export const metadata: Metadata = {
  title: 'Tokata & Phanou Wedding',
  description: 'You are invited to celebrate with us',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;700&family=PT+Serif:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans w-full flex justify-center">
        <Providers>{children}</Providers>
        <GoogleAnalytics gaId="G-ZB4N7K542N" />  {/* replace with your ID */}
      </body>
    </html>
  )
}
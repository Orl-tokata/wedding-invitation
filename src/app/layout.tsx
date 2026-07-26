import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { GoogleAnalytics } from '@next/third-parties/google'  // add this

export const metadata: Metadata = {
  title: 'Tokata & Phanou Wedding Invitation',
  description: 'You are invited to celebrate with us',
  icons: {
    icon: [
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Tokata & Phanou',
  },
}

export const viewport: Viewport = {
  themeColor: '#918645',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{__html:`(function(){try{var l=localStorage.getItem('wedding-locale');if(l==='en'||l==='kh'||l==='ko'){document.documentElement.classList.add('locale-'+l);}}catch(e){}})();`}} />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;700&family=PT+Serif:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans w-full flex justify-center">
        <Providers>{children}</Providers>
        <GoogleAnalytics gaId="G-ZB4N7K542N" />  {/* replace with your ID */}
      </body>
    </html>
  )
}
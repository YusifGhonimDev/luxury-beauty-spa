import type React from "react"
import type { Metadata } from "next"
import { getMessages } from "next-intl/server"
import { NextIntlClientProvider } from "next-intl"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "@/app/globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FUAR Beauty Salon & Spa | Luxury Wellness",
  description: "Experience the pinnacle of wellness and style. Luxury beauty salon and spa services.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }]
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  const messages = await getMessages()
  const isArabic = locale === "ar"

  return (
    <html lang={locale} dir={isArabic ? "rtl" : "ltr"}>
      <head>
        <link rel="preload" href="/fonts/Cinzel-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/HONORSansArabicUI-L.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="/fonts/TheYearofTheCamel-Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link rel="preload" href="/fonts/shree-devanagari-714.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <style>{`
          @font-face {
            font-family: 'Cinzel';
            src: url('/fonts/Cinzel-Regular.ttf') format('truetype');
            font-weight: 400;
            font-style: normal;
          }
          @font-face {
            font-family: 'HONORSansArabicUI-L';
            src: url('/fonts/HONORSansArabicUI-L.ttf') format('truetype');
            font-weight: 400;
            font-style: normal;
          }
          @font-face {
            font-family: 'TheYearofTheCamel-Bold';
            src: url('/fonts/TheYearofTheCamel-Bold.ttf') format('truetype');
            font-weight: 700;
            font-style: normal;
          }
          @font-face {
            font-family: 'Shree Devanagari 714';
            src: url('/fonts/shree-devanagari-714.ttf') format('truetype');
            font-weight: 400;
            font-style: normal;
          }
        `}</style>
      </head>
      <body className={`font-sans antialiased ${isArabic ? "font-arabic-body" : ""}`}>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}

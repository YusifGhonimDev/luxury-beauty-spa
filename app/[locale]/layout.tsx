import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import localFont from "next/font/local";

const cinzel = localFont({
  src: "../fonts/Cinzel-Regular.ttf",
  variable: "--font-cinzel",
  display: "swap",
});

const shree = localFont({
  src: "../fonts/shree-devanagari-714.ttf",
  variable: "--font-shree",
  display: "swap",
});

const yearOfCamel = localFont({
  src: "../fonts/TheYearofTheCamel-Bold.otf",
  variable: "--font-year-camel",
  display: "swap",
});

const honorSans = localFont({
  src: "../fonts/HONORSansArabicUI-L.ttf",
  variable: "--font-honor-sans",
  display: "swap",
});

const fontVariables = `${cinzel.variable} ${shree.variable} ${yearOfCamel.variable} ${honorSans.variable}`;

export const metadata: Metadata = {
  title: "FUAR Beauty Salon & Spa | Luxury Wellness",
  description: "Experience the pinnacle of wellness and style.",
  icons: {
    icon: "/logo-white.svg",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();
  const isArabic = locale === "ar";

  return (
    <html lang={locale} dir={isArabic ? "rtl" : "ltr"}>
      <body
        className={`antialiased ${fontVariables} ${
          isArabic ? "font-arabic-body" : "font-sans"
        }`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}

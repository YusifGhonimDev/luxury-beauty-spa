"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"
import { useLocale } from "next-intl"

export default function Hero() {
  const t = useTranslations("hero")
  const locale = useLocale()
  const isArabic = locale === "ar"

  return (
    <section className="pt-20 pb-16 md:pb-24">
      <div
        className="relative h-screen md:h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url(/placeholder.svg?height=800&width=1600&query=luxury spa serenity wellness)",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4 max-w-2xl">
          <h1
            className={`text-5xl md:text-6xl font-bold text-white mb-6 leading-tight text-balance ${isArabic ? "font-arabic-title" : "font-serif"}`}
          >
            {t("title")}
          </h1>
          <p
            className={`text-lg md:text-xl text-white/90 font-light mb-8 text-balance ${isArabic ? "font-arabic-body" : ""}`}
          >
            {t("subtitle")}
          </p>
          <Link href={`/${locale}/services`}>
            <button className="px-8 py-3 bg-accent text-accent-foreground font-medium rounded-full hover:bg-opacity-90 transition-colors text-lg">
              {t("viewServices")}
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

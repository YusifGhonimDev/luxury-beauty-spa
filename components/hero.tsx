"use client";

import { useLocale, useTranslations } from "next-intl";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section>
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/hero.jpeg"
          alt="Hero background"
          fill
          priority
          quality={100}
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance ${
              isArabic ? "font-arabic-title" : "font-serif"
            }`}
          >
            {t("title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className={`text-lg md:text-2xl text-white/90 font-light mb-10 text-balance max-w-2xl mx-auto ${
              isArabic ? "font-arabic-body" : ""
            }`}
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href={`/${locale}/services`}>
              <button className="px-10 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25 text-lg">
                {t("viewServices")}
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

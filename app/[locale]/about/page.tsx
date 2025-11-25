"use client";

import { useLocale, useTranslations } from "next-intl";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  const t = useTranslations("about");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <main className="relative min-h-screen bg-background">
      <div className="fixed inset-0 z-0">
        <Image
          src="/about.jpeg"
          alt="Background pattern"
          fill
          className="object-cover object-center opacity-20"
          priority
          quality={100}
        />
      </div>

      <div className="relative z-10 pt-32 pb-20">
        <motion.div
          className="max-w-4xl mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className={`text-5xl font-bold text-primary mb-12 text-center ${
              isArabic ? "font-arabic-title" : "font-serif"
            }`}
          >
            {t("title")}
          </motion.h1>

          <motion.div variants={itemVariants}>
            <Card className="p-8 mb-8 bg-card/80 backdrop-blur-sm border-border shadow-lg">
              <h2
                className={`text-2xl font-bold text-accent mb-4 ${
                  isArabic ? "font-arabic-title" : "font-serif"
                }`}
              >
                {t("story")}
              </h2>
              <p
                className={`text-foreground/80 leading-relaxed ${
                  isArabic ? "font-arabic-body" : ""
                }`}
              >
                {t("storyText")}
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-8 mb-8 bg-card/80 backdrop-blur-sm border-border shadow-lg">
              <h2
                className={`text-2xl font-bold text-accent mb-4 ${
                  isArabic ? "font-arabic-title" : "font-serif"
                }`}
              >
                {t("philosophy")}
              </h2>
              <p
                className={`text-foreground/80 leading-relaxed ${
                  isArabic ? "font-arabic-body" : ""
                }`}
              >
                {t("philosophyText")}
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-border shadow-lg">
              <h2
                className={`text-2xl font-bold text-accent mb-4 ${
                  isArabic ? "font-arabic-title" : "font-serif"
                }`}
              >
                {t("whyChooseUs")}
              </h2>
              <ul className="space-y-3 text-foreground/80">
                {t.raw("reasons").map((reason: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className={isArabic ? "font-arabic-body" : ""}>
                      {reason}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}

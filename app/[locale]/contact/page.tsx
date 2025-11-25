"use client";

import { Mail, MapPin, MessageSquare, Phone, Send, User } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactPage() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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

  const inputClasses =
    "w-full pl-10 pr-4 py-3 border border-border rounded-xl bg-background/50 focus:bg-background text-foreground font-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200";

  return (
    <main className="min-h-screen bg-background text-foreground relative">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/contact.jpeg"
          alt="Contact background"
          fill
          className="object-cover opacity-20"
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

          {/* Info Cards */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border text-center hover:border-primary/50 transition-colors shadow-sm hover:shadow-md group">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
              </div>
              <h3
                className={`text-lg font-bold text-foreground mb-2 ${
                  isArabic ? "font-arabic-title" : "font-serif"
                }`}
              >
                {t("phone")}
              </h3>
              <p className="text-foreground/70 font-light">+966 50 123 4567</p>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border text-center hover:border-primary/50 transition-colors shadow-sm hover:shadow-md group">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
              </div>
              <h3
                className={`text-lg font-bold text-foreground mb-2 ${
                  isArabic ? "font-arabic-title" : "font-serif"
                }`}
              >
                {t("email")}
              </h3>
              <p className="text-foreground/70 font-light">
                hello@fuar-spa.com
              </p>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border text-center hover:border-primary/50 transition-colors shadow-sm hover:shadow-md group">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>
              <h3
                className={`text-lg font-bold text-foreground mb-2 ${
                  isArabic ? "font-arabic-title" : "font-serif"
                }`}
              >
                {t("location")}
              </h3>
              <p className="text-foreground/70 font-light">
                123 Wellness Ave, Luxury City
              </p>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="p-8 md:p-10 bg-card/90 backdrop-blur-md border-border shadow-xl rounded-2xl">
              <div className="text-center mb-8">
                <h2
                  className={`text-3xl font-bold text-foreground mb-2 ${
                    isArabic ? "font-arabic-title" : "font-serif"
                  }`}
                >
                  {t("getInTouch")}
                </h2>
                <p className="text-foreground/60 font-light">{t("subtitle")}</p>
              </div>

              <form className="space-y-6 max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80 ml-1">
                      {t("name")}
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 text-muted-foreground w-5 h-5" />
                      <input
                        type="text"
                        className={inputClasses}
                        placeholder={t("name")}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80 ml-1">
                      {t("emailLabel")}
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 text-muted-foreground w-5 h-5" />
                      <input
                        type="email"
                        className={inputClasses}
                        placeholder={t("emailPlaceholder")}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80 ml-1">
                    {t("message")}
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3.5 text-muted-foreground w-5 h-5" />
                    <textarea
                      className={`${inputClasses} min-h-[150px] resize-none`}
                      placeholder={t("messagePlaceholder")}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="cursor-pointer w-full md:w-auto md:min-w-[200px] px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all flex items-center justify-center gap-2 mx-auto"
                >
                  {t("sendMessage")} <Send size={18} />
                </button>
              </form>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}

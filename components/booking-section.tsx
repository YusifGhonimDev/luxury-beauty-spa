"use client";

import {
  ArrowRight,
  CalendarCheck,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function BookingSection() {
  const t = useTranslations("booking");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const handleWhatsAppBooking = () => {
    const message = "Hello FUAR, I would like to book an appointment...";
    const whatsappUrl = `https://wa.me/966501234567?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
    <section className="px-4 max-w-7xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2
            className={`text-4xl md:text-6xl font-bold mb-6 text-foreground ${
              isArabic ? "font-arabic-title" : "font-serif"
            }`}
          >
            {t("title")}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Fresha Booking Card */}
          <motion.div variants={itemVariants}>
            <a
              href="https://fresha.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <Card className="group h-full p-8 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />

                <div className="flex flex-col h-full relative z-10">
                  <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                    <CalendarCheck size={28} />
                  </div>

                  <h3
                    className={`text-2xl font-bold mb-3 text-foreground ${
                      isArabic ? "font-arabic-title" : "font-serif"
                    }`}
                  >
                    {t("freshaTitle")}
                  </h3>

                  <p className="text-foreground/60 font-light mb-8 grow">
                    {t("freshaDescription")}
                  </p>

                  <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    <span className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium group-hover:bg-primary/90 transition-colors shadow-md flex items-center gap-2">
                      {t("freshaButton")} <ExternalLink size={16} />
                    </span>
                  </div>
                </div>
              </Card>
            </a>
          </motion.div>

          {/* WhatsApp Booking Card */}
          <motion.div variants={itemVariants}>
            <button
              onClick={handleWhatsAppBooking}
              className="cursor-pointer w-full text-start h-full"
            >
              <Card className="group h-full p-8 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-emerald-500/10 transition-colors" />

                <div className="flex flex-col h-full relative z-10">
                  <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle size={28} />
                  </div>

                  <h3
                    className={`text-2xl font-bold mb-3 text-foreground ${
                      isArabic ? "font-arabic-title" : "font-serif"
                    }`}
                  >
                    {t("whatsappTitle")}
                  </h3>

                  <p className="text-foreground/60 font-light mb-8 flex-grow">
                    {t("whatsappDescription")}
                  </p>

                  <div className="flex items-center text-emerald-600 font-medium group-hover:gap-2 transition-all">
                    <span className="border-2 border-emerald-600 text-emerald-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-emerald-50 transition-colors flex items-center gap-2">
                      {t("whatsappButton")} <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Card>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLocale, useTranslations } from "next-intl";

import { useState } from "react";

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const t = useTranslations("services");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const services = [
    {
      id: 1,
      categoryKey: "categories.hair",
      items: [
        { nameKey: "items.haircut", duration: "60", price: "85" },
        { nameKey: "items.colorTreatment", duration: "120", price: "150" },
        { nameKey: "items.balayage", duration: "180", price: "250" },
        { nameKey: "items.keratin", duration: "90", price: "180" },
      ],
    },
    {
      id: 2,
      categoryKey: "categories.nails",
      items: [
        { nameKey: "items.manicure", duration: "45", price: "45" },
        { nameKey: "items.pedicure", duration: "60", price: "55" },
        { nameKey: "items.gelNails", duration: "75", price: "65" },
        { nameKey: "items.nailArt", duration: "90", price: "85" },
      ],
    },
    {
      id: 3,
      categoryKey: "categories.spa",
      items: [
        { nameKey: "items.swedishMassage", duration: "60", price: "120" },
        {
          nameKey: "items.deepTissueMassage",
          duration: "90",
          price: "160",
        },
        { nameKey: "items.facial", duration: "60", price: "110" },
        { nameKey: "items.bodyScrub", duration: "45", price: "85" },
      ],
    },
    {
      id: 4,
      categoryKey: "categories.treatments",
      items: [
        { nameKey: "items.antiAging", duration: "75", price: "140" },
        { nameKey: "items.hydraFacial", duration: "60", price: "155" },
        { nameKey: "items.chemicalPeel", duration: "45", price: "120" },
        {
          nameKey: "items.microdermabrasion",
          duration: "50",
          price: "130",
        },
      ],
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-4 text-foreground ${
            isArabic ? "font-arabic-title" : "font-serif"
          }`}
        >
          {t("title")}
        </h2>
        <p
          className={`text-lg text-foreground/70 font-light max-w-2xl mx-auto ${
            isArabic ? "font-arabic-body" : ""
          }`}
        >
          {t("description")}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`cursor-pointer px-6 py-3 font-light rounded-full transition-all text-sm md:text-base ${
              activeTab === index
                ? "bg-accent text-accent-foreground shadow-md"
                : "bg-card/50 text-foreground hover:bg-card/80 border border-border/50"
            }`}
          >
            {t(service.categoryKey)}
          </button>
        ))}
      </div>

      {/* Service Items Grid */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {services[activeTab].items.map((item, idx) => (
              <Card
                key={idx}
                className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-colors shadow-sm hover:shadow-md"
              >
                <CardHeader>
                  <CardTitle
                    className={`text-lg font-light ${
                      isArabic ? "font-arabic-body" : ""
                    }`}
                  >
                    {t(item.nameKey)}
                  </CardTitle>
                  <CardDescription
                    className={isArabic ? "font-arabic-body" : ""}
                  >
                    {`${item.duration} ${t("min")}`}
                  </CardDescription>
                  <CardAction>
                    <span className="text-accent font-semibold text-lg">
                      {`${item.price} ${t("sar")}`}
                    </span>
                  </CardAction>
                </CardHeader>
              </Card>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

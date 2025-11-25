"use client"

import { useState } from "react"
import { useLocale, useTranslations } from "next-intl"

export default function Services() {
  const [activeTab, setActiveTab] = useState(0)
  const t = useTranslations("services")
  const locale = useLocale()
  const isArabic = locale === "ar"

  const services = [
    {
      id: 1,
      categoryKey: "categories.hair",
      items: [
        { nameKey: "items.haircut", duration: "60 min", price: "$85" },
        { nameKey: "items.colorTreatment", duration: "120 min", price: "$150" },
        { nameKey: "items.balayage", duration: "180 min", price: "$250" },
        { nameKey: "items.keratin", duration: "90 min", price: "$180" },
      ],
    },
    {
      id: 2,
      categoryKey: "categories.nails",
      items: [
        { nameKey: "items.manicure", duration: "45 min", price: "$45" },
        { nameKey: "items.pedicure", duration: "60 min", price: "$55" },
        { nameKey: "items.gelNails", duration: "75 min", price: "$65" },
        { nameKey: "items.nailArt", duration: "90 min", price: "$85" },
      ],
    },
    {
      id: 3,
      categoryKey: "categories.spa",
      items: [
        { nameKey: "items.swedishMassage", duration: "60 min", price: "$120" },
        { nameKey: "items.deepTissueMassage", duration: "90 min", price: "$160" },
        { nameKey: "items.facial", duration: "60 min", price: "$110" },
        { nameKey: "items.bodyScrub", duration: "45 min", price: "$85" },
      ],
    },
    {
      id: 4,
      categoryKey: "categories.treatments",
      items: [
        { nameKey: "items.antiAging", duration: "75 min", price: "$140" },
        { nameKey: "items.hydraFacial", duration: "60 min", price: "$155" },
        { nameKey: "items.chemicalPeel", duration: "45 min", price: "$120" },
        { nameKey: "items.microdermabrasion", duration: "50 min", price: "$130" },
      ],
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-4 text-foreground ${isArabic ? "font-arabic-title" : "font-serif"}`}
        >
          {t("title")}
        </h2>
        <p className={`text-lg text-foreground/70 font-light max-w-2xl mx-auto ${isArabic ? "font-arabic-body" : ""}`}>
          {t("description")}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 font-light rounded-full transition-all text-sm md:text-base ${
              activeTab === index
                ? "bg-accent text-accent-foreground"
                : "bg-border/30 text-foreground hover:bg-border/50"
            }`}
          >
            {t(service.categoryKey)}
          </button>
        ))}
      </div>

      {/* Service Items Grid */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {services[activeTab].items.map((item, idx) => (
          <div key={idx} className="border-b border-border/30 pb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className={`text-lg font-light text-foreground ${isArabic ? "font-arabic-body" : ""}`}>
                {t(item.nameKey)}
              </h3>
              <span className="text-accent font-semibold">{item.price}</span>
            </div>
            <p className={`text-sm text-foreground/60 font-light ${isArabic ? "font-arabic-body" : ""}`}>
              {item.duration}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

"use client"

import { useTranslations } from "next-intl"

interface Step2Props {
  selectedDesign: string
  setSelectedDesign: (design: string) => void
  onNext: () => void
  onPrev: () => void
}

export default function GiftCardStep2({ selectedDesign, setSelectedDesign, onNext, onPrev }: Step2Props) {
  const t = useTranslations("giftCards")

  const designs = [
    {
      id: "minimalist",
      name: t("minimalistGold"),
      gradient: "from-amber-50 to-amber-100",
    },
    {
      id: "floral",
      name: t("floralSerenity"),
      gradient: "from-pink-50 via-purple-50 to-pink-100",
    },
    {
      id: "classic",
      name: t("classicBlack"),
      gradient: "from-gray-900 to-gray-800",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-light mb-6 text-foreground">{t("chooseDesign")}</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {designs.map((design) => (
            <button
              key={design.id}
              onClick={() => setSelectedDesign(design.id)}
              className={`p-6 rounded-lg border-2 transition-all ${
                selectedDesign === design.id ? "border-gold" : "border-border/30 hover:border-gold"
              }`}
            >
              <div className={`bg-gradient-to-br ${design.gradient} h-32 rounded-md mb-4`}></div>
              <p className="font-light text-foreground">{design.name}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onPrev}
          className="flex-1 px-6 py-3 border-2 border-gold text-gold font-medium rounded-full hover:bg-gold/10 transition-colors"
        >
          {t("back")}
        </button>
        <button
          onClick={onNext}
          className="flex-1 px-6 py-3 bg-gold text-charcoal font-medium rounded-full hover:bg-gold/90 transition-colors"
        >
          {t("nextStep")}
        </button>
      </div>
    </div>
  )
}

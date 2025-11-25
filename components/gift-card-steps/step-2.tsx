"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface Step2Props {
  selectedDesign: string;
  setSelectedDesign: (design: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function GiftCardStep2({
  selectedDesign,
  setSelectedDesign,
  onNext,
  onPrev,
}: Step2Props) {
  const t = useTranslations("giftCards");

  const designs = [
    {
      id: "minimalist",
      name: t("minimalistGold"),
      gradient: "from-[#FDFBF7] via-[#F5E6D3] to-[#E6C9A8]",
      textColor: "text-[#5C4D3C]",
    },
    {
      id: "floral",
      name: t("floralSerenity"),
      gradient: "from-[#FDF2F8] via-[#FCE7F3] to-[#FBCFE8]",
      textColor: "text-[#831843]",
    },
    {
      id: "classic",
      name: t("classicBlack"),
      gradient: "from-gray-900 via-gray-800 to-gray-900",
      textColor: "text-white",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div>
        <h3 className="text-2xl font-light mb-8 text-foreground text-center">
          {t("chooseDesign")}
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {designs.map((design) => {
            const isSelected = selectedDesign === design.id;
            return (
              <motion.button
                key={design.id}
                onClick={() => setSelectedDesign(design.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative group flex flex-col items-center p-4 rounded-2xl border-2 transition-all duration-300 ${
                  isSelected
                    ? "border-primary ring-2 ring-primary/20 bg-primary/5"
                    : "border-border hover:border-primary/50 bg-background"
                }`}
              >
                {/* Selection Checkmark */}
                {isSelected && (
                  <div className="absolute top-3 right-3 z-20 bg-primary text-primary-foreground rounded-full p-1 shadow-md">
                    <Check size={14} strokeWidth={3} />
                  </div>
                )}

                {/* Card Preview */}
                <div
                  className={`w-full aspect-[1.6/1] rounded-xl mb-4 shadow-md group-hover:shadow-lg transition-shadow bg-gradient-to-br ${design.gradient} relative overflow-hidden flex flex-col justify-between p-5`}
                >
                  {/* Decorative shine effect */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />

                  <div
                    className={`font-serif text-lg font-bold tracking-widest ${design.textColor}`}
                  >
                    FUAR
                  </div>

                  <div
                    className={`text-right ${design.textColor} opacity-80 text-sm font-light uppercase tracking-wider`}
                  >
                    Gift Card
                  </div>
                </div>

                <p
                  className={`font-medium transition-colors ${
                    isSelected ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {design.name}
                </p>
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="flex gap-4 pt-4 border-t border-border/50">
        <button
          onClick={onPrev}
          className="cursor-pointer flex-1 px-6 py-3 border border-border text-foreground/70 font-medium rounded-full hover:bg-accent/5 hover:text-foreground hover:border-primary/50 transition-all"
        >
          {t("back")}
        </button>
        <button
          onClick={onNext}
          className="cursor-pointer flex-1 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all"
        >
          {t("nextStep")}
        </button>
      </div>
    </motion.div>
  );
}

"use client";

import { Check, CreditCard } from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";

interface Step1Props {
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  onNext: () => void;
}

export default function GiftCardStep1({
  selectedValue,
  setSelectedValue,
  onNext,
}: Step1Props) {
  const t = useTranslations("giftCards");
  const tServices = useTranslations("services"); // To access generalized SAR translation if needed

  const values = ["50", "100", "200", "500"]; // Added 500 for a 4th option balance
  const [customValue, setCustomValue] = useState("");

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomValue(val);
    setSelectedValue(val);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div>
        <h3 className="text-2xl font-light mb-8 text-foreground text-center">
          {t("selectValue")}
        </h3>

        {/* Presets Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {values.map((value) => {
            const isSelected = selectedValue === value && customValue === "";
            return (
              <motion.button
                key={value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedValue(value);
                  setCustomValue("");
                }}
                className={`cursor-pointer relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300 aspect-square ${
                  isSelected
                    ? "border-primary bg-primary/5 text-primary shadow-md"
                    : "border-border bg-background hover:border-primary/50 text-foreground/70"
                }`}
              >
                {isSelected && (
                  <div className="absolute top-3 right-3 text-primary">
                    <Check size={16} strokeWidth={3} />
                  </div>
                )}
                <span className="text-3xl font-bold mb-1">{value}</span>
                <span className="text-sm font-medium uppercase tracking-wider opacity-80">
                  {tServices("sar")}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Custom Input Section */}
        <div className="relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-border/50"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-4 text-sm text-muted-foreground uppercase tracking-widest">
              {t("orEnterCustom")}
            </span>
          </div>
        </div>

        <div className="mt-6 relative max-w-sm mx-auto">
          <div className="relative">
            <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="number"
              placeholder="0.00"
              value={customValue}
              onChange={handleCustomChange}
              className={`w-full pl-12 pr-16 py-4 text-lg border-2 rounded-xl bg-background text-foreground font-light focus:outline-none focus:ring-0 transition-all ${
                customValue && selectedValue === customValue
                  ? "border-primary shadow-sm"
                  : "border-border focus:border-primary/50"
              }`}
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-sm font-bold text-muted-foreground">
              {tServices("sar")}
            </span>
          </div>
        </div>
      </div>

      <button
        disabled={!selectedValue}
        onClick={onNext}
        className="cursor-pointer w-full px-6 py-4 bg-primary text-primary-foreground font-medium text-lg rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed hover:disabled:shadow-none hover:disabled:bg-primary"
      >
        {t("nextStep")}
      </button>
    </motion.div>
  );
}

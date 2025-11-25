"use client";

import {
  ArrowLeft,
  ArrowRight,
  CreditCard,
  Gift,
  Mail,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface Step4Props {
  selectedValue: string;
  selectedDesign: string;
  recipientInfo: {
    name: string;
    email?: string;
    phone?: string;
    message: string;
    deliveryMethod: string;
  };
  isProcessing: boolean;
  onProceedToPayment: () => void;
  onPrev: () => void;
}

export default function GiftCardStep4({
  selectedValue,
  selectedDesign,
  recipientInfo,
  isProcessing,
  onProceedToPayment,
  onPrev,
}: Step4Props) {
  const t = useTranslations("giftCards");
  const tServices = useTranslations("services"); // For SAR

  const designConfig = {
    minimalist: {
      name: t("minimalistGold"),
      gradient: "from-[#FDFBF7] via-[#F5E6D3] to-[#E6C9A8]",
      textColor: "text-[#5C4D3C]",
    },
    floral: {
      name: t("floralSerenity"),
      gradient: "from-[#FDF2F8] via-[#FCE7F3] to-[#FBCFE8]",
      textColor: "text-[#831843]",
    },
    classic: {
      name: t("classicBlack"),
      gradient: "from-gray-900 via-gray-800 to-gray-900",
      textColor: "text-white",
    },
  };

  const selectedDesignConfig =
    designConfig[selectedDesign as keyof typeof designConfig];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <h3 className="text-2xl font-light mb-6 text-foreground text-center">
        {t("orderReview")}
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Column: Gift & Recipient Details */}
        <div className="space-y-6">
          {/* Gift Card Preview */}
          <div className="bg-background/50 border border-border rounded-2xl p-6 shadow-sm">
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
              <Gift size={16} /> {t("giftCardValue")}
            </h4>

            {/* Mini Card Visual */}
            <div
              className={`w-full aspect-[2/1] rounded-xl mb-4 shadow-inner bg-gradient-to-br ${
                selectedDesignConfig?.gradient || "bg-muted"
              } relative overflow-hidden flex flex-col justify-between p-5`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
              <div
                className={`font-serif text-lg font-bold tracking-widest ${selectedDesignConfig?.textColor}`}
              >
                FUAR
              </div>
              <div
                className={`text-right ${selectedDesignConfig?.textColor} text-2xl font-bold`}
              >
                {selectedValue}{" "}
                <span className="text-sm font-light">{tServices("sar")}</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">{t("design")}:</span>
              <span className="font-medium text-foreground">
                {selectedDesignConfig?.name}
              </span>
            </div>
          </div>

          {/* Recipient Info */}
          <div className="bg-background/50 border border-border rounded-2xl p-6 shadow-sm">
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
              <User size={16} /> {t("recipientDetails")}
            </h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-1.5 rounded-full text-primary">
                  <User size={14} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    {t("recipient")}
                  </p>
                  <p className="font-medium text-foreground">
                    {recipientInfo.name}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-1.5 rounded-full text-primary">
                  {recipientInfo.deliveryMethod === "email" ? (
                    <Mail size={14} />
                  ) : (
                    <Phone size={14} />
                  )}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    {t("deliveryTo")}
                  </p>
                  <p className="font-medium text-foreground">
                    {recipientInfo.deliveryMethod === "email"
                      ? recipientInfo.email
                      : recipientInfo.phone}
                  </p>
                </div>
              </div>

              {recipientInfo.message && (
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 p-1.5 rounded-full text-primary">
                    <MessageSquare size={14} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {t("message")}
                    </p>
                    <p className="font-light text-foreground/80 italic text-sm">
                      "{recipientInfo.message}"
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Payment Summary */}
        <div className="flex flex-col h-full">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 shadow-sm h-full flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-medium text-primary uppercase tracking-wider mb-6 flex items-center gap-2">
                <CreditCard size={16} /> {t("orderSummary")}
              </h4>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-foreground/80">
                  <span className="font-light">{t("subtotal")}</span>
                  <span>
                    {selectedValue} {tServices("sar")}
                  </span>
                </div>
                <div className="flex justify-between text-foreground/80">
                  <span className="font-light">{t("processingFee")}</span>
                  <span>0.00 {tServices("sar")}</span>
                </div>
                <div className="h-px bg-primary/10 my-2" />
                <div className="flex justify-between items-baseline">
                  <span className="font-semibold text-lg text-foreground">
                    {t("total")}
                  </span>
                  <span className="font-bold text-3xl text-primary">
                    {selectedValue}{" "}
                    <span className="text-sm font-medium">
                      {tServices("sar")}
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-6">
              <p className="text-xs text-center text-muted-foreground mb-4">
                {t("termsAgreement")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 pt-4 border-t border-border/50">
        <button
          onClick={onPrev}
          disabled={isProcessing}
          className="cursor-pointer flex-1 px-6 py-3 border border-border text-foreground/70 font-medium rounded-full hover:bg-accent/5 hover:text-foreground hover:border-primary/50 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <ArrowLeft size={18} /> {t("back")}
        </button>
        <button
          onClick={onProceedToPayment}
          disabled={isProcessing}
          className="cursor-pointer flex-[2] px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isProcessing ? (
            <>
              <svg
                className="animate-spin h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              {t("processing")}
            </>
          ) : (
            <>
              {t("proceedToPayment")} <ArrowRight size={18} />
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}

"use client";

import { Mail, MessageCircle, MessageSquare, Phone, User } from "lucide-react";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface Step3Props {
  recipientInfo: {
    name: string;
    email: string;
    phone: string;
    message: string;
    deliveryMethod: string;
  };
  setRecipientInfo: (info: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function GiftCardStep3({
  recipientInfo,
  setRecipientInfo,
  onNext,
  onPrev,
}: Step3Props) {
  const t = useTranslations("giftCards");

  const inputClasses =
    "w-full pl-10 pr-4 py-3 border border-border rounded-xl bg-background/50 focus:bg-background text-foreground font-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div>
        <h3 className="text-2xl font-light mb-6 text-foreground text-center">
          {t("recipientDetails")}
        </h3>

        <div className="space-y-6 mb-8">
          {/* Name Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/80 ml-1">
              {t("recipientName")}
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                value={recipientInfo.name}
                onChange={(e) =>
                  setRecipientInfo({ ...recipientInfo, name: e.target.value })
                }
                className={inputClasses}
                placeholder={t("recipientNamePlaceholder")}
              />
            </div>
          </div>

          {/* Delivery Method Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/80 ml-1">
              {t("deliveryMethod")}
            </label>
            <div className="grid grid-cols-2 gap-4">
              {["email", "whatsapp"].map((method) => {
                const isSelected = recipientInfo.deliveryMethod === method;
                return (
                  <div
                    key={method}
                    onClick={() =>
                      setRecipientInfo({
                        ...recipientInfo,
                        deliveryMethod: method,
                      })
                    }
                    className={`cursor-pointer flex flex-col items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 ${
                      isSelected
                        ? "border-primary bg-primary/5 text-primary shadow-sm"
                        : "border-border bg-background/50 text-muted-foreground hover:border-primary/50 hover:bg-background"
                    }`}
                  >
                    {method === "email" ? (
                      <Mail className={isSelected ? "text-primary" : ""} />
                    ) : (
                      <MessageCircle
                        className={isSelected ? "text-primary" : ""}
                      />
                    )}
                    <span className="font-medium capitalize text-sm">
                      {method === "email" ? t("email") : t("whatsapp")}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dynamic Contact Input */}
          <motion.div
            key={recipientInfo.deliveryMethod}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {recipientInfo.deliveryMethod === "email" ? (
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80 ml-1">
                  {t("recipientEmail")}
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 text-muted-foreground w-5 h-5" />
                  <input
                    type="email"
                    value={recipientInfo.email}
                    onChange={(e) =>
                      setRecipientInfo({
                        ...recipientInfo,
                        email: e.target.value,
                      })
                    }
                    className={inputClasses}
                    placeholder={t("recipientEmailPlaceholder")}
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80 ml-1">
                  {t("recipientPhone")}
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 text-muted-foreground w-5 h-5" />
                  <input
                    type="tel"
                    value={recipientInfo.phone}
                    onChange={(e) =>
                      setRecipientInfo({
                        ...recipientInfo,
                        phone: e.target.value,
                      })
                    }
                    className={inputClasses}
                    placeholder={t("recipientPhonePlaceholder")}
                  />
                </div>
              </div>
            )}
          </motion.div>

          {/* Message Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/80 ml-1">
              {t("personalMessage")}
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3.5 text-muted-foreground w-5 h-5" />
              <textarea
                value={recipientInfo.message}
                onChange={(e) =>
                  setRecipientInfo({
                    ...recipientInfo,
                    message: e.target.value,
                  })
                }
                className={`${inputClasses} min-h-[120px] resize-none`}
                placeholder={t("personalMessagePlaceholder")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
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
          {t("reviewOrder")}
        </button>
      </div>
    </motion.div>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import GiftCardStep1 from "./gift-card-steps/step-1";
import GiftCardStep2 from "./gift-card-steps/step-2";
import GiftCardStep3 from "./gift-card-steps/step-3";
import GiftCardStep4 from "./gift-card-steps/step-4";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function GiftCardWizard() {
  const t = useTranslations("giftCards");

  const [step, setStep] = useState(1);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedDesign, setSelectedDesign] = useState("minimalist");
  const [recipientInfo, setRecipientInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    deliveryMethod: "email",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleProceedToPayment = async () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
    }, 2000);
  };

  const variants = {
    enter: { opacity: 0, x: 20 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  if (showSuccess) {
    return (
      <section
        id="gift-cards"
        className="py-16 md:py-24 px-4 flex justify-center"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-full max-w-md"
        >
          <Card className="bg-card/95 backdrop-blur-sm border-border shadow-xl">
            <CardContent className="pt-12 pb-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <CardTitle className="text-3xl mb-4 text-foreground">
                {t("giftCardPurchased")}
              </CardTitle>
              <CardDescription className="text-lg mb-8">
                {t("purchaseSuccess")}
                {recipientInfo.email || recipientInfo.phone}
              </CardDescription>
              <button
                onClick={() => {
                  setShowSuccess(false);
                  setStep(1);
                  setSelectedValue("");
                  setSelectedDesign("minimalist");
                  setRecipientInfo({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                    deliveryMethod: "email",
                  });
                }}
                className="cursor-pointer px-8 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors shadow-md"
              >
                {t("purchaseAnother")}
              </button>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="gift-cards" className="py-16 md:py-24 px-4 max-w-4xl mx-auto">
      <Card className="bg-card/95 backdrop-blur-sm shadow-xl border-border overflow-hidden">
        <CardHeader className="text-center pb-8 pt-10">
          <CardTitle className="text-3xl md:text-5xl font-serif font-bold mb-4 text-foreground">
            {t("title")}
          </CardTitle>
          <CardDescription className="text-lg text-foreground/70 font-light max-w-2xl mx-auto">
            {t("subtitle")}
          </CardDescription>
        </CardHeader>

        {/* Step Indicator */}
        <div className="px-6 md:px-12 mb-8">
          <div className="flex justify-between max-w-xl mx-auto relative">
            {/* Connecting Line */}
            <div className="absolute top-5 left-0 w-full h-0.5 bg-border/50 z-0 hidden md:block" />

            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className="flex flex-col items-center z-10 relative bg-card px-2"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 border-2 ${
                    s === step
                      ? "bg-primary text-primary-foreground border-primary scale-110 shadow-md"
                      : s < step
                      ? "bg-primary/10 text-primary border-primary"
                      : "bg-background text-foreground/40 border-border"
                  }`}
                >
                  {s}
                </div>
                <div
                  className={`text-xs mt-2 font-medium transition-colors hidden md:block ${
                    s === step ? "text-primary" : "text-foreground/50"
                  }`}
                >
                  {s === 1 && t("step1")}
                  {s === 2 && t("step2")}
                  {s === 3 && t("step3")}
                  {s === 4 && t("step4")}
                </div>
              </div>
            ))}
          </div>
        </div>

        <CardContent className="p-6 md:p-12 pt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="max-w-2xl mx-auto">
                {step === 1 && (
                  <GiftCardStep1
                    selectedValue={selectedValue}
                    setSelectedValue={setSelectedValue}
                    onNext={handleNextStep}
                  />
                )}
                {step === 2 && (
                  <GiftCardStep2
                    selectedDesign={selectedDesign}
                    setSelectedDesign={setSelectedDesign}
                    onNext={handleNextStep}
                    onPrev={handlePrevStep}
                  />
                )}
                {step === 3 && (
                  <GiftCardStep3
                    recipientInfo={recipientInfo}
                    setRecipientInfo={setRecipientInfo}
                    onNext={handleNextStep}
                    onPrev={handlePrevStep}
                  />
                )}
                {step === 4 && (
                  <GiftCardStep4
                    selectedValue={selectedValue}
                    selectedDesign={selectedDesign}
                    recipientInfo={recipientInfo}
                    isProcessing={isProcessing}
                    onProceedToPayment={handleProceedToPayment}
                    onPrev={handlePrevStep}
                  />
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>
    </section>
  );
}

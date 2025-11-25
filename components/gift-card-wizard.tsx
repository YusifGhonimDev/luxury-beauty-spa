"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import GiftCardStep1 from "./gift-card-steps/step-1"
import GiftCardStep2 from "./gift-card-steps/step-2"
import GiftCardStep3 from "./gift-card-steps/step-3"
import GiftCardStep4 from "./gift-card-steps/step-4"

export default function GiftCardWizard() {
  const t = useTranslations("giftCards")

  const [step, setStep] = useState(1)
  const [selectedValue, setSelectedValue] = useState("")
  const [selectedDesign, setSelectedDesign] = useState("minimalist")
  const [recipientInfo, setRecipientInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    deliveryMethod: "email",
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
  }

  const handleProceedToPayment = async () => {
    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setShowSuccess(true)
    }, 2000)
  }

  if (showSuccess) {
    return (
      <section id="gift-cards" className="py-16 md:py-24 px-4 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 rounded-full mb-6">
            <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-4xl font-serif font-bold mb-4 text-foreground">{t("giftCardPurchased")}</h2>
          <p className="text-lg text-foreground/70 font-light mb-8">
            {t("purchaseSuccess")} {recipientInfo.email || recipientInfo.phone}
          </p>
          <button
            onClick={() => {
              setShowSuccess(false)
              setStep(1)
              setSelectedValue("")
              setSelectedDesign("minimalist")
              setRecipientInfo({ name: "", email: "", phone: "", message: "", deliveryMethod: "email" })
            }}
            className="px-8 py-3 bg-gold text-charcoal font-medium rounded-full hover:bg-gold/90 transition-colors"
          >
            {t("purchaseAnother")}
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="gift-cards" className="py-16 md:py-24 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">{t("title")}</h2>
        <p className="text-lg text-foreground/70 font-light max-w-2xl mx-auto">{t("subtitle")}</p>
      </div>

      {/* Step Indicator */}
      <div className="flex justify-between mb-12 max-w-2xl mx-auto">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex flex-col items-center flex-1">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                s === step
                  ? "bg-gold text-charcoal"
                  : s < step
                    ? "bg-gold/50 text-charcoal"
                    : "bg-border/30 text-foreground"
              }`}
            >
              {s}
            </div>
            <div className="text-xs mt-2 font-light text-foreground/60">
              {s === 1 && t("step1")}
              {s === 2 && t("step2")}
              {s === 3 && t("step3")}
              {s === 4 && t("step4")}
            </div>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="max-w-2xl mx-auto">
        {step === 1 && (
          <GiftCardStep1 selectedValue={selectedValue} setSelectedValue={setSelectedValue} onNext={handleNextStep} />
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
    </section>
  )
}

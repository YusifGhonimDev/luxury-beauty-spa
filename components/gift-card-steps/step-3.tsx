"use client"

import { useTranslations } from "next-intl"

interface Step3Props {
  recipientInfo: {
    name: string
    email: string
    phone: string
    message: string
    deliveryMethod: string
  }
  setRecipientInfo: (info: any) => void
  onNext: () => void
  onPrev: () => void
}

export default function GiftCardStep3({ recipientInfo, setRecipientInfo, onNext, onPrev }: Step3Props) {
  const t = useTranslations("giftCards")

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-light mb-6 text-foreground">{t("recipientDetails")}</h3>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-light text-foreground/70 mb-2">{t("recipientName")}</label>
            <input
              type="text"
              value={recipientInfo.name}
              onChange={(e) => setRecipientInfo({ ...recipientInfo, name: e.target.value })}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground font-light"
              placeholder={t("recipientNamePlaceholder")}
            />
          </div>

          <div>
            <label className="block text-sm font-light text-foreground/70 mb-2">{t("deliveryMethod")}</label>
            <div className="flex gap-4">
              {["email", "whatsapp"].map((method) => (
                <label key={method} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value={method}
                    checked={recipientInfo.deliveryMethod === method}
                    onChange={(e) =>
                      setRecipientInfo({
                        ...recipientInfo,
                        deliveryMethod: e.target.value,
                      })
                    }
                    className="w-4 h-4"
                  />
                  <span className="font-light text-foreground capitalize">
                    {method === "email" ? t("email") : t("whatsapp")}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {recipientInfo.deliveryMethod === "email" && (
            <div>
              <label className="block text-sm font-light text-foreground/70 mb-2">{t("recipientEmail")}</label>
              <input
                type="email"
                value={recipientInfo.email}
                onChange={(e) => setRecipientInfo({ ...recipientInfo, email: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground font-light"
                placeholder={t("recipientEmailPlaceholder")}
              />
            </div>
          )}

          {recipientInfo.deliveryMethod === "whatsapp" && (
            <div>
              <label className="block text-sm font-light text-foreground/70 mb-2">{t("recipientPhone")}</label>
              <input
                type="tel"
                value={recipientInfo.phone}
                onChange={(e) => setRecipientInfo({ ...recipientInfo, phone: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground font-light"
                placeholder={t("recipientPhonePlaceholder")}
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-light text-foreground/70 mb-2">{t("personalMessage")}</label>
            <textarea
              value={recipientInfo.message}
              onChange={(e) => setRecipientInfo({ ...recipientInfo, message: e.target.value })}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground font-light resize-none"
              placeholder={t("personalMessagePlaceholder")}
              rows={4}
            />
          </div>
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
          {t("reviewOrder")}
        </button>
      </div>
    </div>
  )
}

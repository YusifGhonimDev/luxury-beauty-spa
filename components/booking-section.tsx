"use client"

import { useTranslations } from "next-intl"

export default function BookingSection() {
  const t = useTranslations("booking")

  const handleWhatsAppBooking = () => {
    const message = "Hello FUAR, I would like to book an appointment..."
    const whatsappUrl = `https://wa.me/123456789?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">{t("title")}</h2>
        <p className="text-lg text-foreground/70 font-light max-w-2xl mx-auto">{t("subtitle")}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
        {/* Fresha Booking */}
        <a href="https://fresha.com" target="_blank" rel="noopener noreferrer" className="group">
          <div className="p-8 border-2 border-gold rounded-lg hover:bg-gold/5 transition-all cursor-pointer">
            <h3 className="text-xl font-light mb-2 text-foreground group-hover:text-gold transition-colors">
              {t("freshaTitle")}
            </h3>
            <p className="text-foreground/60 font-light text-sm mb-6">{t("freshaDescription")}</p>
            <button className="w-full px-6 py-3 bg-gold text-charcoal font-medium rounded-full hover:bg-gold/90 transition-colors">
              {t("freshaButton")}
            </button>
          </div>
        </a>

        {/* WhatsApp Booking */}
        <button onClick={handleWhatsAppBooking} className="group">
          <div className="p-8 border-2 border-border/30 rounded-lg hover:border-gold hover:bg-gold/5 transition-all">
            <h3 className="text-xl font-light mb-2 text-foreground group-hover:text-gold transition-colors">
              {t("whatsappTitle")}
            </h3>
            <p className="text-foreground/60 font-light text-sm mb-6">{t("whatsappDescription")}</p>
            <button className="w-full px-6 py-3 border-2 border-gold text-gold font-medium rounded-full hover:bg-gold/10 transition-colors">
              {t("whatsappButton")}
            </button>
          </div>
        </button>
      </div>
    </section>
  )
}

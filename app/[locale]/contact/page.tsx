"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"

export default function ContactPage() {
  const t = useTranslations("contact")
  const locale = useLocale()
  const isArabic = locale === "ar"

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1
            className={`text-5xl font-bold text-primary mb-8 text-center ${isArabic ? "font-arabic-title" : "font-serif"}`}
          >
            {t("title")}
          </h1>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-card border-border text-center">
              <div className="flex justify-center mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className={`text-lg font-bold text-accent mb-2 ${isArabic ? "font-arabic-title" : "font-serif"}`}>
                {t("phone")}
              </h3>
              <p className="text-foreground/80">+1 (555) 123-4567</p>
            </Card>

            <Card className="p-6 bg-card border-border text-center">
              <div className="flex justify-center mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className={`text-lg font-bold text-accent mb-2 ${isArabic ? "font-arabic-title" : "font-serif"}`}>
                {t("email")}
              </h3>
              <p className="text-foreground/80">hello@fuar-spa.com</p>
            </Card>

            <Card className="p-6 bg-card border-border text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className={`text-lg font-bold text-accent mb-2 ${isArabic ? "font-arabic-title" : "font-serif"}`}>
                {t("location")}
              </h3>
              <p className="text-foreground/80">123 Wellness Ave, Luxury City, LC 10001</p>
            </Card>
          </div>

          <Card className="p-8 bg-card border-border">
            <h2 className={`text-2xl font-bold text-accent mb-6 ${isArabic ? "font-arabic-title" : "font-serif"}`}>
              {t("getInTouch")}
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t("name")}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder={t("name")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t("emailLabel")}</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder={t("emailPlaceholder")}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t("message")}</label>
                <textarea
                  className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder={t("messagePlaceholder")}
                  rows={5}
                />
              </div>
              <button className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-opacity-90 transition-colors">
                {t("sendMessage")}
              </button>
            </form>
          </Card>
        </div>
      </div>
      <Footer />
    </main>
  )
}

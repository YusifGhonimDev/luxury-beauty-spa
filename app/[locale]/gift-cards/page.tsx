"use client"

import Navbar from "@/components/navbar"
import GiftCardWizard from "@/components/gift-card-wizard"
import Footer from "@/components/footer"

export default function GiftCardsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-20">
        <GiftCardWizard />
      </div>
      <Footer />
    </main>
  )
}

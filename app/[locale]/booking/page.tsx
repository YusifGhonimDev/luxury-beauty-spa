"use client"

import Navbar from "@/components/navbar"
import BookingSection from "@/components/booking-section"
import Footer from "@/components/footer"

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-20">
        <BookingSection />
      </div>
      <Footer />
    </main>
  )
}

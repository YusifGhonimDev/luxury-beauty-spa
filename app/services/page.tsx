"use client"

import Navbar from "@/components/navbar"
import Services from "@/components/services"
import Footer from "@/components/footer"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-20">
        <Services />
      </div>
      <Footer />
    </main>
  )
}

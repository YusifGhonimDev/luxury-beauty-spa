"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-serif font-bold text-primary mb-8 text-center">About FUAR Beauty Salon & Spa</h1>

          <Card className="p-8 mb-8 bg-card border-border">
            <h2 className="text-2xl font-serif font-bold text-accent mb-4">Our Story</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              FUAR Beauty Salon & Spa represents the pinnacle of luxury wellness and aesthetic excellence. Founded with
              a vision to create sanctuary spaces where beauty, wellness, and tranquility converge, we have established
              ourselves as a premier destination for discerning individuals seeking transformative beauty and spa
              experiences.
            </p>
          </Card>

          <Card className="p-8 mb-8 bg-card border-border">
            <h2 className="text-2xl font-serif font-bold text-accent mb-4">Our Philosophy</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              We believe that true beauty radiates from within. Our comprehensive approach combines cutting-edge
              treatments, time-honored techniques, and personalized care to ensure every client leaves feeling
              rejuvenated, confident, and radiant. Each service is designed with meticulous attention to detail and an
              unwavering commitment to excellence.
            </p>
          </Card>

          <Card className="p-8 bg-card border-border">
            <h2 className="text-2xl font-serif font-bold text-accent mb-4">Why Choose Us</h2>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Expert therapists and beauty professionals with years of experience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Premium products and state-of-the-art treatments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Serene, luxurious environment designed for ultimate relaxation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Personalized treatment plans tailored to individual needs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Commitment to sustainability and ethical practices</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
      <Footer />
    </main>
  )
}

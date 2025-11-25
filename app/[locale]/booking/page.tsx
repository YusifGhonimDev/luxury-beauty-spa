import BookingSection from "@/components/booking-section";
import Image from "next/image";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <div className="fixed inset-0 z-0">
        <Image
          src="/booking.jpeg"
          alt="Booking background"
          fill
          className="object-cover opacity-20"
          priority
          quality={100}
        />
      </div>

      <div className="relative z-10 pt-32 pb-20">
        <BookingSection />
      </div>
    </main>
  );
}

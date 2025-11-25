import Image from "next/image";
import Services from "@/components/services";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <div className="fixed inset-0 z-0">
        <Image
          src="/services.jpeg"
          alt="Background pattern"
          fill
          className="object-cover opacity-20"
          priority
          quality={100}
        />
      </div>
      <div className="relative z-10 pt-32 pb-20">
        <Services />
      </div>
    </main>
  );
}

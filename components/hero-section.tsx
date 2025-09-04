"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#312783] to-[#1a1f3a]"
    >
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(1200)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-granule-shift"
            style={{
              width: `${8 + Math.random() * 12}px`,
              height: `${8 + Math.random() * 12}px`,
              backgroundColor: Math.random() > 0.7 ? "#EFC981" : Math.random() > 0.4 ? "#E6C081" : "#C98C22",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
              opacity: 0.15 + Math.random() * 0.25,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 text-balance">
          Technologia <span className="text-[#EFC981]">Keramikplatte</span>
        </h1>

        <p className="text-xl md:text-2xl font-sans text-gray-300 mb-8 max-w-3xl mx-auto text-pretty">
          Niskoprzetworzone materiały ceramiczne. Wysoka trwałość. Szybka realizacja. Najniższe zużycie energii w
          budynkach.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-lg px-8 py-6 bg-[#C58511] hover:bg-[#C98C22] text-white font-semibold">
            Poznaj Technologię
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 border-[#EFC981] text-[#EFC981] hover:bg-[#EFC981] hover:text-[#312783] bg-transparent font-semibold"
          >
            Skontaktuj się z nami
          </Button>
        </div>

        <div className="mt-12 text-sm text-gray-400 font-sans">
          <p>Stan surowy budynku w 1 dzień! • Infolinia PL: 801 524 488</p>
        </div>
      </div>
    </section>
  )
}

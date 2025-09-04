"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#hero", label: "Start" },
    { href: "#technology", label: "Technologia" },
    { href: "#audience", label: "Dla Kogo" },
    { href: "#projects", label: "Projekty" },
    { href: "#contact", label: "Kontakt" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Image
              src="/logo-keramikplatte.svg"
              alt="Keramikplatte Logo"
              width={320}
              height={72}
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.slice(0, -1).map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-base font-bold transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-gradient-to-r from-[#EFC981] to-[#C58511] text-[#312783] px-6 py-2 rounded-md text-base font-bold hover:from-[#C98C22] hover:to-[#C58511] transition-all duration-300 shadow-lg"
              >
                Kontakt
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.slice(0, -1).map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-lg font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-gradient-to-r from-[#EFC981] to-[#C58511] text-[#312783] block px-6 py-2 rounded-md text-lg font-bold hover:from-[#C98C22] hover:to-[#C58511] transition-all duration-300 shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Kontakt
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

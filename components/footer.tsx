import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image
                src="/logo-keramikplatte.svg"
                alt="Keramikplatte Logo"
                width={200}
                height={45}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-pretty mb-4">
              Innowacyjna technologia budowlana z keramzytu. Szybka realizacja, wysoka trwałość, najniższe zużycie
              energii w budynkach.
            </p>
            <p className="text-sm text-muted-foreground">
              Niskoprzetworzone materiały • Wysoka trwałość rozwiązań • Szybka realizacja
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Technologia</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Ściany ceramiczne</li>
              <li>Keramzyt 70%</li>
              <li>Budynki pasywne</li>
              <li>Energooszczędność</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Projekty</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Dom Idealny</li>
              <li>Domy-Bio</li>
              <li>Optihouses</li>
              <li>Projekty indywidualne</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 Keramikplatte. Wszystkie prawa zastrzeżone.
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <span>Infolinia PL: 801 524 488</span>
            <span>info@keramikplatte.com</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

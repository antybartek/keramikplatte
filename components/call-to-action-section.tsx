import { Button } from "@/components/ui/button"
import { Phone, Mail, ArrowRight } from "lucide-react"

export default function CallToActionSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Gotowy na Innowacyjne Rozwiązanie?</h2>

        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
          Skontaktuj się z nami już dziś i otrzymaj bezpłatną informację produktową oraz wycenę dla Twojego projektu.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Phone className="mr-2 h-5 w-5" />
            Zadzwoń: 801 524 488
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
          >
            <Mail className="mr-2 h-5 w-5" />
            Wyślij zapytanie
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <p className="text-sm opacity-75">
          Realizujemy wszystkie projekty dostępne na rynku oraz projekty indywidualne
        </p>
      </div>
    </section>
  )
}

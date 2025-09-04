import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Factory, Zap, Clock, DollarSign } from "lucide-react"
import Link from "next/link"

export default function ObiektyPrzemyslowePage() {
  const benefits = [
    {
      icon: Factory,
      title: "Duże powierzchnie",
      description: "Idealne rozwiązanie dla hal produkcyjnych i magazynowych o dużych kubaturach",
    },
    {
      icon: Zap,
      title: "Oszczędność energii",
      description: "Znaczne obniżenie kosztów ogrzewania i chłodzenia obiektów przemysłowych",
    },
    {
      icon: Clock,
      title: "Szybka realizacja",
      description: "Montaż konstrukcji w rekordowym czasie dzięki prefabrykowanym elementom",
    },
    {
      icon: DollarSign,
      title: "Opłacalność",
      description: "Niskie koszty eksploatacji i długoterminowa rentowność inwestycji",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#312783] to-[#1a1f3a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-[#EFC981] hover:text-white mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Powrót do strony głównej
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Obiekty <span className="text-[#EFC981]">Przemysłowe</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Keramikplatte to przyszłość budownictwa przemysłowego - efektywne energetycznie hale i magazyny o
            najwyższych parametrach izolacyjnych.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Zalety dla obiektów przemysłowych</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Technologia ceramiczna zapewnia optymalne warunki dla procesów produkcyjnych
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-[#EFC981]/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-[#C58511]" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Zastosowania w przemyśle</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Hale produkcyjne</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Optymalne warunki dla procesów produkcyjnych dzięki stabilnej temperaturze i wilgotności
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Magazyny i centra logistyczne</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Efektywne przechowywanie towarów z minimalnym zużyciem energii na klimatyzację
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Obiekty specjalistyczne</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Laboratoria, czyste pomieszczenia i inne obiekty wymagające szczególnych warunków
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Planujemy Twój obiekt przemysłowy?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Poznaj możliwości technologii Keramikplatte w budownictwie przemysłowym
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#C58511] hover:bg-[#C98C22] text-white">
              Skontaktuj się z ekspertem
            </Button>
            <Button variant="outline" size="lg" className="border-[#EFC981] text-[#C58511] bg-transparent">
              Pobierz specyfikację techniczną
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

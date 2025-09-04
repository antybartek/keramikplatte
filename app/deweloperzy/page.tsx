import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Building2, Clock, DollarSign, Award, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function DeweloperzyPage() {
  const benefits = [
    {
      icon: Clock,
      title: "Realizacja w 1-2 Miesiące",
      description:
        "Stan surowy budynku do 250 m² w 1 dzień roboczy. Zamknięcie inwestycji 'pod klucz' w maksymalnie 2 miesiące.",
    },
    {
      icon: DollarSign,
      title: "Znaczne Oszczędności Kosztów",
      description: "Redukcja kosztów związanych z zatrudnieniem fachowców i ograniczenie ryzyka zdarzeń losowych.",
    },
    {
      icon: Award,
      title: "Wysoka Jakość Wykonania",
      description:
        "Konstrukcja składająca się w 70% z keramzytu, 15% drewna konstrukcyjnego i 15% płyt włóknowo-cementowych.",
    },
  ]

  const features = [
    "Stan surowy otwarty (SSO) budynku w 1 dzień",
    "Wszystkie projekty budynków dostępne na rynku",
    "Budynki o parametrach energooszczędnych i pasywnych",
    "Prefabrykacja elementów dla przyspieszenia realizacji",
    "Wsparcie na każdym etapie inwestycji",
    "Doświadczony zespół inżynierów i konstruktorów",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#312783] to-[#1a1f3a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-[#EFC981] hover:text-white mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Powrót do strony głównej
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-[#EFC981]/20 rounded-full flex items-center justify-center">
              <Building2 className="h-8 w-8 text-[#EFC981]" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold">Dla Deweloperów</h1>
              <p className="text-xl text-gray-300 mt-2">Szybka realizacja, gwarantowana jakość</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <section className="mb-20 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Rewolucja w Szybkości Budowy</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
              Dzięki naszej ścianie posiadającej parametry ściany ceramicznej – stan surowy otwarty (SSO) budynku o
              powierzchni podłóg do 250 m² wykonywany jest na placu budowy w czasie 1 dnia roboczego.
            </p>
          </section>

          {/* Benefits */}
          <section className="mb-20">
            <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">
              Korzyści dla Deweloperów
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-pretty">{benefit.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>

          {/* Technology Overview */}
          <section className="mb-20">
            <div className="bg-muted/30 rounded-lg p-8">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Technologia Keramikplatte</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg text-muted-foreground mb-6 text-pretty">
                    Konstrukcja ściany Keramikplatte decyduje o sprawnej realizacji budynku na placu budowy i pozwala na
                    zamknięcie inwestycji budowy średniej wielkości budynku w zakresie „pod klucz" w czasie do 2
                    miesięcy lub szybciej.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="font-semibold">70% keramzytu</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="font-semibold">15% drewna konstrukcyjnego</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="font-semibold">15% płyt włóknowo-cementowych i gipsowych</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Process Timeline */}
          <section className="mb-20">
            <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">Proces Realizacji</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Projekt</h3>
                  <p className="text-sm text-muted-foreground">
                    Indywidualny projekt wykonawczy i warsztatowo-montażowy
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">Prefabrykacja</h3>
                  <p className="text-sm text-muted-foreground">Przygotowanie elementów w zakładzie produkcyjnym</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Montaż</h3>
                  <p className="text-sm text-muted-foreground">Stan surowy budynku w 1 dzień roboczy</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    4
                  </div>
                  <h3 className="font-semibold mb-2">Wykończenie</h3>
                  <p className="text-sm text-muted-foreground">Realizacja "pod klucz" w maksymalnie 2 miesiące</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-[#312783] to-[#1a1f3a] text-white">
              <CardContent className="py-12">
                <h2 className="text-3xl font-serif font-bold mb-4">Rozpocznij Współpracę z Keramikplatte</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-pretty">
                  Zapraszamy do współpracy firmy budowlane i deweloperów planujących szybkie i efektywne realizacje.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-[#C58511] hover:bg-[#C98C22] text-white">
                    Otrzymaj ofertę
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[#EFC981] text-[#EFC981] hover:bg-[#EFC981] hover:text-[#312783] bg-transparent"
                  >
                    Skontaktuj się: 801 524 488
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  )
}

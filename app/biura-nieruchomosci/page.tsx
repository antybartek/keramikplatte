import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Home, TrendingUp, Leaf, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function BiuraNieruchomosciPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Wyższa Wartość Nieruchomości",
      description:
        "Ceramika jest uznawana za najwartościowszy materiał budowlany, pozytywnie wpływający na wartość budynku.",
    },
    {
      icon: Leaf,
      title: "Niskie Koszty Eksploatacji",
      description: "Budynki o parametrach energooszczędnych i pasywnych zapewniają najniższe możliwe zużycie energii.",
    },
    {
      icon: Shield,
      title: "Zdrowe Środowisko Mieszkalne",
      description: "Ceramika jest najzdrowsza i najodporniesza na wilgoć, zapewniając komfort mieszkańcom.",
    },
  ]

  const features = [
    "Materiał niepalny, obojętny chemicznie",
    "Odporny na wodę, działanie pleśni, grzybów i gryzoni",
    "Doskonałe parametry izolacji cieplnej i akustycznej",
    "Właściwości akumulacyjne i stateczność cieplna",
    "Możliwość 'oddychania ścian' przy odpowiedniej izolacji",
    "Długa tradycja i sprawdzona trwałość",
  ]

  const wallTypes = [
    {
      title: "Ściana Dwuwarstwowa",
      description: "Rozwiązanie powszechnie stosowane w budownictwie jednorodzinnym i wielomieszkaniowym",
      thickness: "15-30 cm warstwa nośna + 15-30 cm docieplenie",
    },
    {
      title: "Ściana Trójwarstwowa",
      description: "Najwyższej jakości rozwiązanie z wentylacyjną szczeliną powietrzną",
      thickness: "15-30 cm konstrukcja + izolacja + warstwa elewacyjna",
    },
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
              <Home className="h-8 w-8 text-[#EFC981]" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold">Dla Biur Nieruchomości</h1>
              <p className="text-xl text-gray-300 mt-2">Oferuj klientom najlepsze rozwiązania</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <section className="mb-20 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              Ceramika - Najwartościowszy Materiał Budowlany
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
              Rodzaj materiałów budowlanych wykorzystanych do budowy domu jest jednym z głównych elementów, którym
              interesują się Inwestorzy. Za najwartościowszy materiał uznawana jest powszechnie ceramika.
            </p>
          </section>

          {/* Benefits */}
          <section className="mb-20">
            <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">
              Korzyści dla Biur Nieruchomości
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

          {/* Ceramic Properties */}
          <section className="mb-20">
            <div className="bg-muted/30 rounded-lg p-8">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Właściwości Keramzytu</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg text-muted-foreground mb-6 text-pretty">
                    Keramzyt to granulat wypalany z gliny ilastej w temperaturze ok. 1150°C. Każda z porowatych wewnątrz
                    „kulek" pokryta jest twardą osłoną ceramiczną, co zapewnia wyjątkowe właściwości materiału.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6 text-pretty">
                    O trwałości ceramiki świadczą budowle historyczne. Z ceramiki można wznosić wszelkie rodzaje ścian,
                    a zalety ceramiki są niepodważalne.
                  </p>
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

          {/* Wall Types */}
          <section className="mb-20">
            <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">
              Rodzaje Ścian Keramikplatte
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {wallTypes.map((wall, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{wall.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-pretty">{wall.description}</p>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="font-semibold text-sm">Konstrukcja:</p>
                      <p className="text-sm text-muted-foreground">{wall.thickness}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Energy Efficiency */}
          <section className="mb-20">
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardContent className="py-12 text-center">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                  Budynki Energooszczędne i Pasywne
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
                  Cały system pozwala na projektowanie budynków o wysokim komforcie posiadających parametry budynków
                  wysoce energooszczędnych oraz budynków pasywnych. Współczynnik U ściany nie przekracza wartości 0,16
                  W/(m²K).
                </p>
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">0,16</div>
                    <div className="text-sm text-muted-foreground">W/(m²K) współczynnik U</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">70%</div>
                    <div className="text-sm text-muted-foreground">keramzytu w konstrukcji</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">1150°C</div>
                    <div className="text-sm text-muted-foreground">temperatura wypalania</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-[#312783] to-[#1a1f3a] text-white">
              <CardContent className="py-12">
                <h2 className="text-3xl font-serif font-bold mb-4">Rozpocznij Współpracę z Keramikplatte</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-pretty">
                  Oferuj swoim klientom nieruchomości o najwyższej jakości i wartości z technologią Keramikplatte.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-[#C58511] hover:bg-[#C98C22] text-white">
                    Materiały dla klientów
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

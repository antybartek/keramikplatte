import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Users, CheckCircle, Building, Zap, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ArchitekciPage() {
  const benefits = [
    {
      icon: Building,
      title: "Elastyczność Projektowa",
      description: "Pełna swoboda w projektowaniu dzięki modułowej konstrukcji ceramicznej.",
    },
    {
      icon: Zap,
      title: "Parametry Budynków Pasywnych",
      description: "Osiągnięcie najwyższych standardów energetycznych i komfortu użytkowania.",
    },
    {
      icon: Shield,
      title: "Wsparcie Techniczne",
      description: "Kompleksowe wsparcie na każdym etapie projektowania i realizacji.",
    },
  ]

  const features = [
    "Ściany dwuwarstwowe i trójwarstwowe",
    "Współczynnik U ściany nie przekraczający 0,16 W/(m²K)",
    "Doskonałe właściwości akumulacyjne i stateczność cieplna",
    "Możliwość projektowania budynków wysoce energooszczędnych",
    "Indywidualne projekty wykonawcze i warsztatowo-montażowe",
    "Zespół doświadczonych inżynierów i konstruktorów",
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
              <Users className="h-8 w-8 text-[#EFC981]" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold">Dla Architektów</h1>
              <p className="text-xl text-gray-300 mt-2">Projektuj z technologią przyszłości</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <section className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                  Ceramika - Materiał o Najdłuższej Tradycji
                </h2>
                <p className="text-lg text-muted-foreground mb-6 text-pretty">
                  Rodzaj materiałów budowlanych wykorzystanych do budowy domu jest jednym z głównych elementów, którym
                  interesują się Inwestorzy. Za najwartościowszy materiał uznawana jest powszechnie ceramika.
                </p>
                <p className="text-lg text-muted-foreground mb-6 text-pretty">
                  Ściana z ceramiki to bez wątpienia jedna z najsolidniejszych technologii w której można wybudować dom.
                  Nie ma innego materiału, który miałby za sobą tak długą tradycję, tak wiele lat testów i doświadczeń.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/images/wall-construction.jpg"
                  alt="Konstrukcja ściany Keramikplatte"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-20">
            <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">
              Korzyści dla Architektów
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

          {/* Technical Features */}
          <section className="mb-20">
            <div className="bg-muted/30 rounded-lg p-8">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Możliwości Techniczne</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Wall Types */}
          <section className="mb-20">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-12">
              Rodzaje Ścian w Technologii Keramikplatte
            </h2>

            <div className="space-y-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Ściana Dwuwarstwowa</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-pretty">
                    Rozwiązanie składające się z warstwy konstrukcyjnej zewnętrznej oraz systemu docieplenia. Warstwa
                    nośna ściany o grubości od 15-30 cm cechuje się wysoką wytrzymałością, izolacyjnością akustyczną
                    oraz doskonale przenosi obciążenia.
                  </p>
                  <p className="text-muted-foreground text-pretty">
                    System pozwala na projektowanie budynków o wysokim komforcie posiadających parametry budynków wysoce
                    energooszczędnych oraz budynków pasywnych.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Ściana Trójwarstwowa</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-pretty">
                    Składa się z wewnętrznej warstwy konstrukcyjnej oraz zewnętrznej warstwy osłonowej (cegły
                    elewacyjne, marmur, piaskowiec, szkło, blacha) oraz z umieszczonej pomiędzy nimi warstwy izolacji
                    termicznej.
                  </p>
                  <p className="text-muted-foreground text-pretty">
                    Pozwala na projektowanie i realizowanie budynków o wyjątkowo wysokim komforcie i równocześnie
                    posiadających parametry budynków wysoce energooszczędnych oraz budynków pasywnych.
                  </p>
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
                  Skontaktuj się z nami, aby otrzymać szczegółowe informacje techniczne i wsparcie w projektowaniu.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-[#C58511] hover:bg-[#C98C22] text-white">
                    Pobierz materiały techniczne
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

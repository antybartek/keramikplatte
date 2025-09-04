import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Building2, Shield, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function ObiektyUzytecznosciPublicznejPage() {
  const benefits = [
    {
      icon: Building2,
      title: "Prestiż i jakość",
      description: "Reprezentacyjne budynki publiczne o najwyższych standardach wykonania",
    },
    {
      icon: Shield,
      title: "Trwałość i bezpieczeństwo",
      description: "Długowieczne konstrukcje odporne na intensywne użytkowanie",
    },
    {
      icon: Users,
      title: "Komfort użytkowników",
      description: "Optymalne warunki dla osób korzystających z obiektów publicznych",
    },
    {
      icon: Zap,
      title: "Efektywność kosztowa",
      description: "Niskie koszty eksploatacji i utrzymania budynków publicznych",
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
            Obiekty Użyteczności <span className="text-[#EFC981]">Publicznej</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Keramikplatte w służbie społeczeństwa - nowoczesne, trwałe i energooszczędne budynki publiczne najwyższej
            jakości.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Zalety dla obiektów publicznych</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Technologia ceramiczna zapewnia najwyższe standardy dla budynków użyteczności publicznej
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

      {/* Public Facilities */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Typy obiektów użyteczności publicznej
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Urzędy i administracja</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reprezentacyjne budynki administracyjne z komfortowymi warunkami pracy
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Szpitale i przychodnie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sterylne i zdrowe środowisko medyczne z kontrolowanym mikroklimatem
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Centra kultury</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Teatry, muzea i galerie z doskonałą akustyką i klimatyzacją</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Obiekty sportowe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Hale sportowe i baseny z optymalną temperaturą i wilgotnością</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Dworce i terminale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Komfortowe przestrzenie dla podróżnych z efektywną wentylacją</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Centra konferencyjne</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Nowoczesne sale konferencyjne z doskonałą akustyką i klimatem</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Standardy dla obiektów publicznych</h2>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Klasa odporności ogniowej:</span>
                  <span className="text-[#C58511] font-semibold">A1 (niepalny)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Izolacyjność akustyczna:</span>
                  <span className="text-[#C58511] font-semibold">Rw = 55 dB</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Współczynnik U:</span>
                  <span className="text-[#C58511] font-semibold">0,08 W/m²K</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Żywotność konstrukcji:</span>
                  <span className="text-[#C58511] font-semibold">100+ lat</span>
                </div>
              </div>
            </div>
            <div className="bg-muted/50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Certyfikaty i normy</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Certyfikat CE zgodności z normami europejskimi</li>
                <li>• Spełnienie wymogów BREEAM i LEED</li>
                <li>• Zgodność z polskimi normami budowlanymi</li>
                <li>• Certyfikat ekologiczny dla materiałów</li>
                <li>• Atesty higieniczne i sanitarne</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Planujesz obiekt użyteczności publicznej?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Skontaktuj się z nami i poznaj możliwości technologii Keramikplatte dla Twojego projektu
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#C58511] hover:bg-[#C98C22] text-white">
              Konsultacja dla instytucji
            </Button>
            <Button variant="outline" size="lg" className="border-[#EFC981] text-[#C58511] bg-transparent">
              Referencje i certyfikaty
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

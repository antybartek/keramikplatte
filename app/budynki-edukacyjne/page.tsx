import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, GraduationCap, Heart, Leaf, Users } from "lucide-react"
import Link from "next/link"

export default function BudynkiEdukacyjnePage() {
  const benefits = [
    {
      icon: GraduationCap,
      title: "Komfort nauki",
      description: "Optymalne warunki akustyczne i termiczne sprzyjające koncentracji uczniów",
    },
    {
      icon: Heart,
      title: "Zdrowe środowisko",
      description: "Naturalne materiały ceramiczne zapewniają czyste powietrze w salach lekcyjnych",
    },
    {
      icon: Leaf,
      title: "Ekologia",
      description: "Minimalne zużycie energii i przyjazne środowisku rozwiązania budowlane",
    },
    {
      icon: Users,
      title: "Bezpieczeństwo",
      description: "Wysoka odporność ogniowa i trwałość konstrukcji ceramicznej",
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
            Budynki <span className="text-[#EFC981]">Edukacyjne</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Tworzymy nowoczesne przestrzenie edukacyjne z technologią Keramikplatte - zdrowe, komfortowe i
            energooszczędne środowisko dla nauki.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Korzyści dla placówek edukacyjnych</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Keramikplatte zapewnia idealne warunki do nauki i rozwoju
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

      {/* Educational Facilities */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Typy placówek edukacyjnych</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Przedszkola</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bezpieczne i zdrowe środowisko dla najmłodszych z optymalną temperaturą przez cały rok
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Szkoły podstawowe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Komfortowe sale lekcyjne sprzyjające koncentracji i efektywnej nauce
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Szkoły średnie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nowoczesne laboratoria i sale specjalistyczne z kontrolowanym mikroklimatem
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Uczelnie wyższe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Duże audytoria i sale wykładowe z doskonałą akustyką i wentylacją
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Centra szkoleniowe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Elastyczne przestrzenie edukacyjne dostosowane do różnych form kształcenia
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Biblioteki</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Ciche i komfortowe przestrzenie do nauki i pracy z książką</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Planujesz budowę placówki edukacyjnej?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Skontaktuj się z nami i dowiedz się, jak Keramikplatte może poprawić warunki nauki
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#C58511] hover:bg-[#C98C22] text-white">
              Umów konsultację
            </Button>
            <Button variant="outline" size="lg" className="border-[#EFC981] text-[#C58511] bg-transparent">
              Pobierz case study
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

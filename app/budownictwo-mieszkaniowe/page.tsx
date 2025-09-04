import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Home, Users, Zap, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BudownictwoMieszkaniowePage() {
  const benefits = [
    {
      icon: Home,
      title: "Komfort mieszkania",
      description: "Optymalna temperatura przez cały rok dzięki właściwościom izolacyjnym keramzytu",
    },
    {
      icon: Users,
      title: "Zdrowe środowisko",
      description: "Naturalne materiały ceramiczne zapewniają zdrowy mikroklimat w pomieszczeniach",
    },
    {
      icon: Zap,
      title: "Efektywność energetyczna",
      description: "Znaczne obniżenie kosztów ogrzewania i chłodzenia budynku",
    },
    {
      icon: Shield,
      title: "Trwałość konstrukcji",
      description: "Ceramika zapewnia długowieczność i odporność na warunki atmosferyczne",
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
            Budownictwo <span className="text-[#EFC981]">Mieszkaniowe</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Technologia Keramikplatte rewolucjonizuje budownictwo mieszkaniowe, oferując najwyższą jakość życia przy
            minimalnym zużyciu energii.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Korzyści dla budownictwa mieszkaniowego
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Keramikplatte to idealne rozwiązanie dla nowoczesnych budynków mieszkalnych
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

      {/* Technical Details */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Parametry techniczne dla budynków mieszkalnych
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Współczynnik U ściany:</span>
                  <span className="text-[#C58511] font-semibold">0,10 W/m²K</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Czas realizacji stanu surowego:</span>
                  <span className="text-[#C58511] font-semibold">1 dzień</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Grubość ściany:</span>
                  <span className="text-[#C58511] font-semibold">30-40 cm</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Klasa energetyczna:</span>
                  <span className="text-[#C58511] font-semibold">A+++</span>
                </div>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/wall-construction.jpg"
                alt="Konstrukcja ściany Keramikplatte"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Gotowy na budowę swojego domu?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Skontaktuj się z nami i poznaj możliwości technologii Keramikplatte w budownictwie mieszkaniowym
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#C58511] hover:bg-[#C98C22] text-white">
              Bezpłatna konsultacja
            </Button>
            <Button variant="outline" size="lg" className="border-[#EFC981] text-[#C58511] bg-transparent">
              Pobierz katalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

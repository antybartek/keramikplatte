import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function TargetAudienceSection() {
  const audiences = [
    {
      image: "/professional-architect-working-on-blueprints-in-mo.jpg",
      title: "Architekci",
      description: "Projektowanie budynków o wysokim komforcie z parametrami energooszczędnymi i pasywnymi.",
      benefits: [
        "Elastyczność projektowa",
        "Parametry budynków pasywnych",
        "Wsparcie techniczne",
        "Indywidualne projekty wykonawcze",
      ],
      link: "/architekci",
    },
    {
      image: "/construction-developer-at-building-site-with-hard-.jpg",
      title: "Deweloperzy",
      description: "Szybka realizacja projektów mieszkaniowych z gwarancją jakości i trwałości.",
      benefits: [
        "Realizacja w 1-2 miesiące",
        "Znaczne oszczędności kosztów",
        "Wysoka jakość wykonania",
        "Wszystkie projekty rynkowe",
      ],
      link: "/deweloperzy",
    },
    {
      image: "/real-estate-agent-showing-modern-house-to-clients-.jpg",
      title: "Biura Nieruchomości",
      description: "Oferowanie klientom nowoczesnych, energooszczędnych rozwiązań mieszkaniowych.",
      benefits: [
        "Wyższa wartość nieruchomości",
        "Niskie koszty eksploatacji",
        "Zdrowe środowisko mieszkalne",
        "Innowacyjna technologia",
      ],
      link: "/biura-nieruchomosci",
    },
  ]

  return (
    <section id="audience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Dla Kogo Jest Nasza Oferta</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Technologia Keramikplatte dedykowana jest profesjonalistom z branży budowlanej oraz inwestorom poszukującym
            innowacyjnych rozwiązań.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-full h-48 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={audience.image || "/placeholder.svg"}
                      alt={`${audience.title} professional`}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-2xl">{audience.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-pretty">{audience.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Korzyści:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {audience.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center justify-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={audience.link}>
                    <Button variant="outline" className="w-full bg-transparent">
                      Dowiedz się więcej
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

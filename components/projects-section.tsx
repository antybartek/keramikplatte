"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export default function ProjectsSection() {
  const projects = [
    {
      image: "/images/dom-idealny-screenshot.png",
      title: "Dom Idealny",
      description:
        "Projekty domów jednorodzinnych w technologii Keramikplatte z najwyższymi parametrami energetycznymi.",
      features: ["Budynki pasywne", "Szybka realizacja", "Wysoki komfort", "Trwałość ceramiki"],
      url: "https://domidealny.pro/",
    },
    {
      image: "/images/domy-bio-screenshot.png",
      title: "Domy-Bio",
      description: "Ekologiczne rozwiązania mieszkaniowe z wykorzystaniem naturalnych materiałów ceramicznych.",
      features: ["Materiały naturalne", "Zdrowe środowisko", "Energooszczędność", "Ekologia"],
      url: "https://domy-bio.pl/",
    },
    {
      image: "/images/optihouses-screenshot.png",
      title: "Optihouses",
      description: "Optymalne domy energooszczędne z zaawansowaną technologią izolacji termicznej.",
      features: ["Najniższe zużycie energii", "Inteligentne rozwiązania", "Komfort użytkowania", "Nowoczesny design"],
      url: "https://www.optihouses.com",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Projekty w Technologii Keramikplatte</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Poznaj nasze flagowe projekty realizowane w innowacyjnej technologii ceramicznej.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.title} website screenshot`}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-pretty">{project.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Cechy projektu:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <Button
                      variant="outline"
                      className="w-full bg-transparent"
                      onClick={() => window.open(project.url, "_blank")}
                    >
                      Zobacz
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

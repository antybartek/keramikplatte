import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building, Factory, School, Hospital } from "lucide-react"
import Link from "next/link"

export default function OtherProjectsSection() {
  const otherProjects = [
    {
      icon: Building,
      title: "Budownictwo Mieszkaniowe",
      description: "Wielorodzinne budynki mieszkalne z technologią Keramikplatte",
      link: "/budownictwo-mieszkaniowe",
    },
    {
      icon: Factory,
      title: "Obiekty Przemysłowe",
      description: "Hale produkcyjne i magazynowe o wysokiej efektywności energetycznej",
      link: "/obiekty-przemyslowe",
    },
    {
      icon: School,
      title: "Budynki Edukacyjne",
      description: "Szkoły i przedszkola z komfortowym środowiskiem nauki",
      link: "/budynki-edukacyjne",
    },
    {
      icon: Hospital,
      title: "Obiekty Użyteczności Publicznej",
      description: "Budynki publiczne z najwyższymi standardami jakości",
      link: "/obiekty-uzytecznosci-publicznej",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Inne zastosowania</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Technologia Keramikplatte znajduje zastosowanie w różnych typach budynków - od mieszkalnych po przemysłowe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherProjects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm text-pretty mb-4">{project.description}</p>
                  <Link href={project.link}>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Zobacz więcej
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Realizujemy wszystkie projekty budynków dostępne na rynku oraz projekty indywidualne
          </p>
          <Button size="lg">Skonsultuj swój projekt</Button>
        </div>
      </div>
    </section>
  )
}

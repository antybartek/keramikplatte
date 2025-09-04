import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Kontakt</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Skontaktuj się z nami przez główną infolinię lub email.
          </p>
        </div>

        <div className="text-center">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Główny Kontakt
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="font-semibold">Infolinia Polska</p>
                <p className="text-2xl font-bold text-primary">801 524 488</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Email</p>
                <p className="text-primary">info@keramikplatte.com</p>
              </div>
              <Button className="w-full">Wyślij zapytanie</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

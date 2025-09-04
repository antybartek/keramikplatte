"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building, Layers, Zap, Shield } from "lucide-react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"

function WallLayer({
  position,
  color,
  isVisible,
  delay = 0,
}: { position: [number, number, number]; color: string; isVisible: boolean; delay?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [scale, setScale] = useState(0)

  useFrame((state) => {
    if (meshRef.current) {
      const targetScale = isVisible ? 1 : 0
      const currentScale = meshRef.current.scale.x
      const newScale = THREE.MathUtils.lerp(currentScale, targetScale, 0.05)
      setScale(newScale)
      meshRef.current.scale.set(newScale, newScale, newScale)

      // Add subtle floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + delay) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[4, 0.8, 2]} />
      <meshStandardMaterial color={color} transparent opacity={0.8} />
    </mesh>
  )
}

function WallAnimation({ activeLayer }: { activeLayer: number }) {
  const layers = [
    { position: [0, -2, 0] as [number, number, number], color: "#8B7355" }, // Foundation
    { position: [0, -1.2, 0] as [number, number, number], color: "#D2B48C" }, // Insulation
    { position: [0, -0.4, 0] as [number, number, number], color: "#C98C22" }, // Keramzyt
    { position: [0, 0.4, 0] as [number, number, number], color: "#8B4513" }, // Wood structure
    { position: [0, 1.2, 0] as [number, number, number], color: "#696969" }, // Cement board
    { position: [0, 2, 0] as [number, number, number], color: "#EFC981" }, // External layer
  ]

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      {layers.map((layer, index) => (
        <WallLayer
          key={index}
          position={layer.position}
          color={layer.color}
          isVisible={activeLayer >= index}
          delay={index * 0.5}
        />
      ))}
    </>
  )
}

export default function TechnologySection() {
  const [activeLayer, setActiveLayer] = useState(0)

  const layers = [
    { name: "Fundament", description: "Płyta fundamentowa z zamknięciem" },
    { name: "Izolacja pozioma", description: "Projektowana indywidualnie" },
    { name: "Keramzyt 70%", description: "Granulat ceramiczny wypalany w 1150°C" },
    { name: "Drewno 15%", description: "Konstrukcja z drewna konstrukcyjnego" },
    { name: "Płyty cementowe", description: "Płyty włóknowo-cementowe" },
    { name: "Warstwa zewnętrzna", description: "Płyta włóknowo-cementowa do użytku zewnętrznego" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLayer((prev) => (prev + 1) % layers.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [layers.length])

  return (
    <section id="technology" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technologia Keramikplatte</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ściana ceramiczna składająca się z 70% keramzytu, 15% drewna konstrukcyjnego i 15% płyt włóknowo-cementowych
            oraz gipsowych.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-card rounded-lg p-8 border">
              <h3 className="text-2xl font-semibold mb-6 text-center">Konstrukcja Ściany 3D</h3>

              <div className="h-96 bg-gradient-to-b from-slate-100 to-slate-200 rounded-lg overflow-hidden">
                <Canvas camera={{ position: [8, 4, 8], fov: 50 }}>
                  <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
                  <WallAnimation activeLayer={activeLayer} />
                </Canvas>
              </div>

              <div className="mt-6 text-center">
                <div className="bg-black/10 rounded-lg p-4 mb-4">
                  <p className="text-lg font-semibold text-[#312783]">{layers[activeLayer]?.name}</p>
                  <p className="text-sm text-muted-foreground">{layers[activeLayer]?.description}</p>
                </div>
              </div>

              <div className="flex justify-center flex-wrap gap-2">
                {layers.map((_, index) => (
                  <Button
                    key={index}
                    variant={activeLayer === index ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveLayer(index)}
                    className="text-xs"
                  >
                    {index + 1}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Technology Benefits */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Building className="h-6 w-6 text-primary" />
                  Szybka Realizacja
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Stan surowy otwarty budynku do 250 m² wykonywany w 1 dzień roboczy. Znaczne oszczędności finansowe i
                  czasowe.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Layers className="h-6 w-6 text-primary" />
                  Ściany Dwu i Trójwarstwowe
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Elastyczne rozwiązania konstrukcyjne z warstwą nośną 15-30 cm i izolacją termiczną dostosowaną do
                  budynków pasywnych.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Zap className="h-6 w-6 text-primary" />
                  Energooszczędność
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Współczynnik U ściany nie przekracza 0,16 W/(m²K). Parametry budynków wysoce energooszczędnych i
                  pasywnych.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  Trwałość Ceramiki
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Materiał niepalny, chemicznie obojętny, odporny na wodę, pleśń, grzyby i gryzonie. Długa tradycja i
                  sprawdzone rozwiązania.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import TechnologySection from "@/components/technology-section"
import TargetAudienceSection from "@/components/target-audience-section"
import CallToActionSection from "@/components/call-to-action-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import OtherProjectsSection from "@/components/other-projects-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TechnologySection />
      <TargetAudienceSection />
      <CallToActionSection />
      <ProjectsSection />
      <ContactSection />
      <OtherProjectsSection />
      <Footer />
    </main>
  )
}

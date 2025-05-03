import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import PortfolioSection from "@/components/portfolio-section"
import CertificationSection from "@/components/certification-section"
import WhyChooseMeSection from "@/components/why-choose-me-section"
import TestimonialsSection from "@/components/testimonials-section"
import FinalCtaSection from "@/components/final-cta-section"
import Footer from "@/components/footer"
import ScrollNavigation from "@/components/scroll-navigation"
import { Montserrat, Space_Grotesk } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

// Definir las secciones para la navegación
const sections = ["hero", "servicios", "portfolio", "certificacion", "porque-elegirme", "testimonios", "contacto"]

export default function Home() {
  return (
    <main
      className={`${montserrat.variable} ${spaceGrotesk.variable} font-sans min-h-screen text-gray-800 dark:text-white overflow-x-hidden theme-transition`}
    >
      <Header />
      <ScrollNavigation sections={sections} />

      <section id="hero" className="section-container">
        <HeroSection />
      </section>

      <section id="servicios" className="section-container">
        <ServicesSection />
      </section>

      <section id="portfolio" className="section-container">
        <PortfolioSection />
      </section>

      <section id="certificacion" className="section-container">
        <CertificationSection />
      </section>

      <section id="porque-elegirme" className="section-container">
        <WhyChooseMeSection />
      </section>

      <section id="testimonios" className="section-container">
        <TestimonialsSection />
      </section>

      <section id="contacto" className="section-container">
        <FinalCtaSection />
      </section>

      <Footer />
    </main>
  )
}

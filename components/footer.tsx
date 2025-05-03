"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Linkedin, Github, Mail, ArrowUp } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer id="footer" className="py-12 relative overflow-hidden bg-gray-50 dark:bg-[#0A192F]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-gradient font-space-grotesk">
              NovaGrid
            </Link>
            <p className="text-gray-600 dark:text-white/60 mt-2">Soluciones WordPress y desarrollo web personalizado</p>
          </div>

          <div className="flex space-x-4">
            
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-200 dark:border-white/20 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gradient hover:border-gradient"
              aria-label="LinkedIn"
              onClick={() => window.open('https://www.linkedin.com/tu-perfil', '_blank')}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            

            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-200 dark:border-white/20 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gradient hover:border-gradient"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-200 dark:border-white/20 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gradient hover:border-gradient"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-white/60 text-sm mb-4 md:mb-0">
            © 2025 NovaGrid. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#servicios"
              className="text-gray-500 dark:text-white/60 hover:text-gradient text-sm transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="#portfolio"
              className="text-gray-500 dark:text-white/60 hover:text-gradient text-sm transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="#testimonios"
              className="text-gray-500 dark:text-white/60 hover:text-gradient text-sm transition-colors"
            >
              Testimonios
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0.5,
          pointerEvents: showScrollTop ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={scrollToTop}
          size="icon"
          className="rounded-full bg-gradient text-white hover:bg-gradient-hover shadow-lg h-12 w-12"
          aria-label="Volver arriba"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </motion.div>

      {/* Placeholder for future AI chatbot */}
      <div className="hidden">{/* AI Chatbot will be implemented here in the future */}</div>
    </footer>
  )
}

"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  if (!mounted) return null

  const isDark = resolvedTheme === "dark"

  return (
    <header
    className="fixed top-0 left-0 right-0 z-50"
    style={{
      backgroundColor: resolvedTheme === 'dark' 
        ? 'rgba(30, 30, 30, 0.7)' 
        : 'rgba(220, 220, 220, 0.7)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)'
    }}
  >
    
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-gradient font-space-grotesk">NovaGrid</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#servicios" className="text-gray-800 dark:text-white/80 hover:text-gradient transition-colors">
            Servicios
          </Link>
          <Link href="#portfolio" className="text-gray-800 dark:text-white/80 hover:text-gradient transition-colors">
            Portfolio
          </Link>
          <Link href="#testimonios" className="text-gray-800 dark:text-white/80 hover:text-gradient transition-colors">
            Testimonios
          </Link>
          <Button
            onClick={toggleTheme}
            variant="ghost"
            size="icon"
            className="rounded-full text-gray-800 dark:text-white"
            aria-label="Cambiar tema"
          >
            {isDark ? <Sun className="h-5 w-5 text-yellow-300" /> : <Moon className="h-5 w-5 text-primary" />}
          </Button>
          <Button
            className="button-gradient hover:bg-gradient-hover text-white font-medium rounded-full"
            aria-label="Contactar por WhatsApp"
            onClick={() => window.open("https://wa.me/+1234567890", "_blank")}
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            WhatsApp
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <Button
            onClick={toggleTheme}
            variant="ghost"
            size="icon"
            className="rounded-full text-gray-800 dark:text-white"
            aria-label="Cambiar tema"
          >
            {isDark ? <Sun className="h-5 w-5 text-yellow-300" /> : <Moon className="h-5 w-5 text-primary" />}
          </Button>
          <Button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            variant="ghost"
            size="icon"
            className="text-gray-800 dark:text-white"
            aria-label="Menú"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#0A192F]/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#servicios"
              className="text-gray-800 dark:text-white/80 hover:text-gradient transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="#portfolio"
              className="text-gray-800 dark:text-white/80 hover:text-gradient transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="#testimonios"
              className="text-gray-800 dark:text-white/80 hover:text-gradient transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonios
            </Link>
            <Button
              className="button-gradient text-white hover:bg-gradient-hover font-medium w-full rounded-full flex items-center justify-center"
              onClick={() => {
                window.open("https://wa.me/+1234567890", "_blank")
                setMobileMenuOpen(false)
              }}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

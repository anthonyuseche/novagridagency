import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import CustomCursor from "@/components/custom-cursor"
import ScrollEffects from "@/components/scroll-effects"
import ScrollAnimationHandler from "@/components/scroll-animation-handler"
import CloudflareParticles from "@/components/cloudflare-particles"

export const metadata = {
  title: "NovaGrid - Desarrollo Web y Agentes de IA",
  description: "Soluciones web innovadoras y agentes de IA personalizados para potenciar tu negocio en la era digital.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="theme-transition">
        <ThemeProvider attribute="class" defaultTheme="light">
          <CloudflareParticles />
          <CustomCursor />
          <ScrollEffects />
          <ScrollAnimationHandler />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

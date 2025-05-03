"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"
import { useTheme } from "next-themes"

export default function CloudflareParticles() {
  const particlesLoaded = useRef(false)
  const particlesContainer = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  // Función para inicializar las partículas
  const initParticles = () => {
    if (typeof window !== "undefined" && window.particlesJS && particlesContainer.current) {
      console.log("Inicializando partículas de Cloudflare...")

      // Colores adaptados según el tema
      const particleColor = isDark ? "#A557F2" : "#6A11CB"
      const lineColor = isDark ? "#A557F2" : "#6A11CB"
      const particleOpacity = isDark ? 0.3 : 0.5
      const lineOpacity = isDark ? 0.3 : 0.4

      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: particleColor,
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
          },
          opacity: {
            value: particleOpacity,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 4, // Tamaño ligeramente mayor
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: lineColor,
            opacity: lineOpacity,
            width: 1.2, // Líneas ligeramente más gruesas
          },
          move: {
            enable: true,
            speed: 1.2, // Movimiento ligeramente más rápido
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce",
            bounce: true,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      })

      particlesLoaded.current = true
    }
  }

  // Manejar la carga del script
  const handleScriptLoad = () => {
    console.log("Script de partículas cargado")
    initParticles()
  }

  // Intentar inicializar las partículas cuando el componente se monte o el tema cambie
  useEffect(() => {
    // Si el script ya está cargado, inicializar partículas
    if (typeof window !== "undefined" && window.particlesJS) {
      initParticles()
    }

    // Intentar inicializar cada 500ms hasta que funcione (por si el script se carga con retraso)
    const interval = setInterval(() => {
      if (!particlesLoaded.current && typeof window !== "undefined" && window.particlesJS) {
        initParticles()
      }
    }, 500)

    return () => clearInterval(interval)
  }, [isDark]) // Re-inicializar cuando cambie el tema

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js"
        onLoad={handleScriptLoad}
        strategy="afterInteractive"
      />
      <div id="particles-js" ref={particlesContainer} className="particles-container" />
    </>
  )
}

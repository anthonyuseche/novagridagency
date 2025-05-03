"use client"

import { useState, useEffect, useCallback } from "react"
import { throttle } from "lodash"

interface ScrollNavigationProps {
  sections: string[]
}

export default function ScrollNavigation({ sections }: ScrollNavigationProps) {
  const [activeSection, setActiveSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [userClicked, setUserClicked] = useState(false)

  // Función para determinar qué sección está activa
  const determineActiveSection = useCallback(() => {
    // Si estamos cerca del final del documento, activar la última sección
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      return sections.length - 1
    }

    // Calcular qué sección está más visible
    const viewportHeight = window.innerHeight
    const viewportMiddle = viewportHeight / 2

    let bestSection = 0
    let bestVisibility = -1

    sections.forEach((sectionId, index) => {
      const element = document.getElementById(sectionId)
      if (!element) return

      const rect = element.getBoundingClientRect()

      // Calcular qué tan visible está la sección en la ventana
      // Damos más peso a las secciones que están cerca del centro de la pantalla
      const distanceFromMiddle = Math.abs(rect.top + rect.height / 2 - viewportMiddle)
      const visibility = 1 - Math.min(1, distanceFromMiddle / viewportHeight)

      if (visibility > bestVisibility) {
        bestVisibility = visibility
        bestSection = index
      }
    })

    return bestSection
  }, [sections])

  // Función throttled para actualizar la sección activa durante el scroll
  const handleScroll = useCallback(
    throttle(() => {
      if (!userClicked) {
        const newActiveSection = determineActiveSection()
        setActiveSection(newActiveSection)
      }
      setIsScrolling(true)

      // Resetear el flag de scroll después de un tiempo
      clearTimeout(window.scrollTimeout)
      window.scrollTimeout = setTimeout(() => {
        setIsScrolling(false)
        setUserClicked(false)
      }, 150) as unknown as number
    }, 100),
    [determineActiveSection, userClicked],
  )

  // Función para manejar el clic en un punto de navegación
  const scrollToSection = (index: number) => {
    setUserClicked(true)
    setActiveSection(index)

    const section = document.getElementById(sections[index])
    if (section) {
      // Usar scrollIntoView con opciones para un scroll más suave
      window.scrollTo({
        top: section.offsetTop - 60, // Compensar por el header
        behavior: "smooth",
      })

      // Resetear el flag de clic después de la animación
      setTimeout(() => {
        setUserClicked(false)
      }, 1000)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Inicializar la sección activa
    setActiveSection(determineActiveSection())

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(window.scrollTimeout)
    }
  }, [handleScroll, determineActiveSection])

  return (
    <div className="scroll-nav">
      {sections.map((section, index) => (
        <div
          key={section}
          className={`scroll-nav-dot ${activeSection === index ? "active" : ""}`}
          onClick={() => scrollToSection(index)}
          title={section.charAt(0).toUpperCase() + section.slice(1)}
        />
      ))}
    </div>
  )
}

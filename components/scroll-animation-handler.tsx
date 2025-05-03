"use client"

import { useEffect } from "react"
import { throttle } from "lodash"

export default function ScrollAnimationHandler() {
  useEffect(() => {
    // Función para manejar la animación de las secciones al hacer scroll
    const handleSectionAnimation = throttle(() => {
      const sections = document.querySelectorAll(".section-container")
      const viewportHeight = window.innerHeight

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()

        // Una sección está "en vista" si al menos el 30% de ella es visible
        const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)
        const visibilityRatio = visibleHeight / rect.height
        const isInView = visibilityRatio > 0.3

        // Aplicar animaciones basadas en la visibilidad
        if (isInView) {
          // Determinar la dirección de la animación basada en el índice
          let animationClass = "section-animate-in"
          if (index % 2 === 0) {
            animationClass = "section-animate-right"
          } else {
            animationClass = "section-animate-left"
          }

          // Aplicar la clase de animación si no la tiene ya
          if (!section.classList.contains(animationClass)) {
            section.classList.add(animationClass)
          }
        }
      })
    }, 100)

    // Función para actualizar la barra de progreso
    const updateProgressBar = throttle(() => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      const scrollPercent = scrollTop / (docHeight - winHeight)
      const progressBar = document.querySelector(".scroll-progress")

      if (progressBar) {
        progressBar.setAttribute("style", `width: ${scrollPercent * 100}%`)
      }
    }, 10)

    // Inicializar
    handleSectionAnimation()
    updateProgressBar()

    // Añadir event listeners
    window.addEventListener("scroll", handleSectionAnimation, { passive: true })
    window.addEventListener("scroll", updateProgressBar, { passive: true })
    window.addEventListener("resize", handleSectionAnimation)
    window.addEventListener("resize", updateProgressBar)

    return () => {
      window.removeEventListener("scroll", handleSectionAnimation)
      window.removeEventListener("scroll", updateProgressBar)
      window.removeEventListener("resize", handleSectionAnimation)
      window.removeEventListener("resize", updateProgressBar)
    }
  }, [])

  return <div className="scroll-progress" />
}

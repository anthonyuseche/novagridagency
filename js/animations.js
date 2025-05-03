// Animaciones y efectos visuales
document.addEventListener("DOMContentLoaded", () => {
  // Función para inicializar elementos con animación al cargar
  function initAnimations() {
    // Animar elementos con clases de animación
    const animatedElements = document.querySelectorAll(
      ".animate-fade-in, .animate-fade-in-up, .animate-fade-in-down, .animate-fade-in-left, .animate-fade-in-right",
    )

    animatedElements.forEach((element, index) => {
      // Añadir delay escalonado si no tiene uno específico
      if (
        !element.classList.contains("delay-100") &&
        !element.classList.contains("delay-200") &&
        !element.classList.contains("delay-300") &&
        !element.classList.contains("delay-400") &&
        !element.classList.contains("delay-500")
      ) {
        element.style.animationDelay = `${index * 0.1}s`
      }
    })

    // Inicializar elementos con animación al scroll
    const scrollRevealElements = document.querySelectorAll(
      "section > div, .card, .service-card, .portfolio-card, .testimonial-card",
    )
    scrollRevealElements.forEach((element) => {
      if (!element.classList.contains("scroll-reveal")) {
        element.classList.add("scroll-reveal")
      }
    })
  }

  // Función para manejar animaciones al hacer scroll
  function handleScrollAnimations() {
    const revealElements = document.querySelectorAll(".scroll-reveal:not(.visible)")

    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      const elementVisible = 150

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add("visible")
      }
    })
  }

  // Inicializar animaciones
  initAnimations()
  handleScrollAnimations() // Comprobar inicialmente

  // Añadir event listener para animaciones al scroll
  window.addEventListener("scroll", handleScrollAnimations, { passive: true })
})

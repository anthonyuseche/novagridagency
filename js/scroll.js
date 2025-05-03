// Efectos de scroll y navegación
document.addEventListener("DOMContentLoaded", () => {
  // Referencias a elementos
  const header = document.getElementById("header")
  const backToTop = document.getElementById("back-to-top")
  const scrollProgress = document.querySelector(".scroll-progress")
  const scrollNav = document.querySelector(".scroll-nav")
  const sections = document.querySelectorAll(".section-container")

  // Crear puntos de navegación de scroll
  if (scrollNav && sections.length > 0) {
    sections.forEach((section, index) => {
      const dot = document.createElement("div")
      dot.classList.add("scroll-nav-dot")
      dot.dataset.index = index
      dot.dataset.target = section.id

      dot.addEventListener("click", () => {
        section.scrollIntoView({ behavior: "smooth" })
      })

      scrollNav.appendChild(dot)
    })
  }

  // Función para manejar el scroll
  let isScrolling = false
  let userClicked = false
  let scrollTimeout

  function handleScroll() {
    if (!isScrolling) {
      window.requestAnimationFrame(() => {
        // Actualizar header al hacer scroll
        if (window.scrollY > 10) {
          header.classList.add("scrolled")
        } else {
          header.classList.remove("scrolled")
        }

        // Mostrar/ocultar botón volver arriba
        if (window.scrollY > 300) {
          backToTop.classList.add("visible")
        } else {
          backToTop.classList.remove("visible")
        }

        // Actualizar barra de progreso
        if (scrollProgress) {
          const scrollTop = window.scrollY
          const docHeight = document.documentElement.scrollHeight
          const winHeight = window.innerHeight
          const scrollPercent = scrollTop / (docHeight - winHeight)
          scrollProgress.style.width = `${scrollPercent * 100}%`
        }

        // Actualizar navegación de scroll
        if (scrollNav && !userClicked) {
          updateActiveSection()
        }

        // Animar secciones al hacer scroll
        animateSections()

        isScrolling = false
      })

      isScrolling = true
    }

    // Resetear el flag de clic después de un tiempo
    clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(() => {
      userClicked = false
    }, 150)
  }

  // Función para determinar qué sección está activa
  function updateActiveSection() {
    const dots = document.querySelectorAll(".scroll-nav-dot")
    if (!dots.length) return

    // Si estamos cerca del final del documento, activar la última sección
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      dots.forEach((dot) => dot.classList.remove("active"))
      dots[dots.length - 1].classList.add("active")
      return
    }

    // Calcular qué sección está más visible
    const viewportHeight = window.innerHeight
    const viewportMiddle = viewportHeight / 2

    let bestSection = 0
    let bestVisibility = -1

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect()

      // Calcular qué tan visible está la sección en la ventana
      // Damos más peso a las secciones que están cerca del centro de la pantalla
      const distanceFromMiddle = Math.abs(rect.top + rect.height / 2 - viewportMiddle)
      const visibility = 1 - Math.min(1, distanceFromMiddle / viewportHeight)

      if (visibility > bestVisibility) {
        bestVisibility = visibility
        bestSection = index
      }
    })

    // Actualizar punto activo
    dots.forEach((dot) => dot.classList.remove("active"))
    dots[bestSection].classList.add("active")
  }

  // Función para animar secciones al hacer scroll
  function animateSections() {
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect()
      const viewportHeight = window.innerHeight

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

        // Marcar como visible
        section.classList.add("visible")
      }
    })
  }

  // Botón volver arriba
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }

  // Inicializar
  handleScroll() // Comprobar inicialmente

  // Añadir event listeners
  window.addEventListener("scroll", handleScroll, { passive: true })
  window.addEventListener("resize", handleScroll)

  // Manejar clics en la navegación de scroll
  const scrollNavDots = document.querySelectorAll(".scroll-nav-dot")
  scrollNavDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      userClicked = true
      const targetId = dot.dataset.target
      const targetSection = document.getElementById(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        })

        // Actualizar punto activo
        scrollNavDots.forEach((d) => d.classList.remove("active"))
        dot.classList.add("active")
      }
    })
  })
})

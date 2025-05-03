// Configuración de partículas
document.addEventListener("DOMContentLoaded", () => {
  // Comprobar si existe el contenedor de partículas y la biblioteca
  const particlesContainer = document.getElementById("particles-js")

  if (particlesContainer && window.particlesJS) {
    // Función para inicializar las partículas
    function initParticles() {
      // Determinar si estamos en modo oscuro
      const isDark = document.body.classList.contains("dark-theme")

      // Colores adaptados según el tema
      const particleColor = isDark ? "#A557F2" : "#6A11CB"
      const lineColor = isDark ? "#A557F2" : "#6A11CB"
      const particleOpacity = isDark ? 0.3 : 0.5
      const lineOpacity = isDark ? 0.3 : 0.4

      // Configuración de partículas
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
    }

    // Inicializar partículas
    initParticles()

    // Reinicializar partículas cuando cambie el tema
    const themeToggle = document.getElementById("theme-toggle")
    const themeToggleMobile = document.getElementById("theme-toggle-mobile")

    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        setTimeout(initParticles, 100) // Pequeño retraso para asegurar que el cambio de tema se ha aplicado
      })
    }

    if (themeToggleMobile) {
      themeToggleMobile.addEventListener("click", () => {
        setTimeout(initParticles, 100)
      })
    }
  }
})

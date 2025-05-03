// Efecto de escritura para el texto del hero
document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.getElementById("typing-text")

  if (!typingElement) return

  // Textos a mostrar en secuencia
  const texts = ["Hola, soy Anthony", "Senior Web Developer", "Experto en WordPress", "Fundador de NovaGrid"]

  let textIndex = 0
  let charIndex = 0
  let isDeleting = false
  let typingSpeed = 100 // Velocidad base de escritura

  // Función para añadir cursor parpadeante
  const cursor = document.createElement("span")
  cursor.className = "typing-cursor"
  typingElement.appendChild(cursor)

  // Función para escribir texto
  function typeText() {
    const currentText = texts[textIndex]

    if (isDeleting) {
      // Borrar texto
      charIndex--
      typingSpeed = 50 // Más rápido al borrar
    } else {
      // Escribir texto
      charIndex++
      typingSpeed = 100 // Normal al escribir
    }

    // Actualizar texto
    typingElement.textContent = currentText.substring(0, charIndex)

    // Añadir cursor de nuevo (se elimina al cambiar textContent)
    typingElement.appendChild(cursor)

    // Lógica para cambiar de estado
    if (!isDeleting && charIndex === currentText.length) {
      // Texto completo, esperar antes de borrar
      typingSpeed = 1000 // Pausa al completar
      isDeleting = true
    } else if (isDeleting && charIndex === 0) {
      // Texto borrado, pasar al siguiente
      isDeleting = false
      textIndex = (textIndex + 1) % texts.length
      typingSpeed = 500 // Pausa antes del siguiente
    }

    // Programar siguiente actualización
    setTimeout(typeText, typingSpeed)
  }

  // Iniciar efecto de escritura
  setTimeout(typeText, 1000) // Pequeño retraso inicial
})

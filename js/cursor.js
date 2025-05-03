// Cursor personalizado
document.addEventListener("DOMContentLoaded", () => {
  // Solo mostrar cursor personalizado si no es un dispositivo táctil
  if (window.matchMedia("(hover: hover)").matches) {
    const cursorOuter = document.querySelector(".custom-cursor-outer")
    const cursorInner = document.querySelector(".custom-cursor-inner")

    if (!cursorOuter || !cursorInner) return

    // Seguimiento del cursor
    document.addEventListener("mousemove", (e) => {
      // El cursor exterior sigue con un ligero retraso
      setTimeout(() => {
        cursorOuter.style.left = `${e.clientX}px`
        cursorOuter.style.top = `${e.clientY}px`
      }, 10)

      // El cursor interior sigue inmediatamente
      cursorInner.style.left = `${e.clientX}px`
      cursorInner.style.top = `${e.clientY}px`
    })

    // Efectos al hacer clic
    document.addEventListener("mousedown", () => {
      cursorInner.classList.add("active")
    })

    document.addEventListener("mouseup", () => {
      cursorInner.classList.remove("active")
    })

    // Mostrar/ocultar cursor al entrar/salir de la ventana
    document.addEventListener("mouseenter", () => {
      cursorOuter.style.opacity = "1"
      cursorInner.style.opacity = "1"
    })

    document.addEventListener("mouseleave", () => {
      cursorOuter.style.opacity = "0"
      cursorInner.style.opacity = "0"
    })

    // Efecto hover en elementos clickeables
    const clickableElements = document.querySelectorAll(
      'a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    )

    clickableElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        cursorOuter.classList.add("clickable")
      })

      element.addEventListener("mouseleave", () => {
        cursorOuter.classList.remove("clickable")
      })
    })
  }
})

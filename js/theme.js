// Gestión del tema (claro/oscuro)
document.addEventListener("DOMContentLoaded", () => {
  // Comprobar si hay un tema guardado en localStorage
  const savedTheme = localStorage.getItem("theme")
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

  // Aplicar tema guardado o preferencia del sistema
  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.body.classList.add("dark-theme")
  }

  // Función para cambiar el tema
  function toggleTheme() {
    const isDark = document.body.classList.toggle("dark-theme")
    localStorage.setItem("theme", isDark ? "dark" : "light")
  }

  // Asignar eventos a los botones de tema
  const themeToggle = document.getElementById("theme-toggle")
  const themeToggleMobile = document.getElementById("theme-toggle-mobile")

  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme)
  }

  if (themeToggleMobile) {
    themeToggleMobile.addEventListener("click", toggleTheme)
  }
})

// Archivo principal para inicialización y funcionalidad general
document.addEventListener("DOMContentLoaded", function() {
  // Menú móvil
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  if (mobileMenuToggle && mobileMenu && menuIcon && closeIcon) {
    mobileMenuToggle.addEventListener("click", function() {
      mobileMenu.classList.toggle("hidden");
      menuIcon.classList.toggle("hidden");
      closeIcon.classList.toggle("hidden");
    });

    // Cerrar menú al hacer clic en un enlace
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach(function(link) {
      link.addEventListener("click", function() {
        mobileMenu.classList.add("hidden");
        menuIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
      });
    });
  }

  // Inicializar secciones con animación
  const sections = document.querySelectorAll(".section-container");
  sections.forEach(function(section, index) {
    // Añadir clase de animación según el índice
    if (index % 2 === 0) {
      section.classList.add("section-animate-right");
    } else {
      section.classList.add("section-animate-left");
    }
  });

  // Inicializar elementos con animación
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.classList.add("animate-fade-in-up");
  }

  // Inicializar secciones con glassmorphism
  const servicesSection = document.querySelector(".services-section");
  const testimonialsSection = document.querySelector(".testimonials-section");
  const certificationSection = document.querySelector(".certification-section");

  if (servicesSection && !servicesSection.querySelector(".glassmorphism-bg")) {
    const bg = document.createElement("div");
    bg.className = "glassmorphism-bg";
    servicesSection.prepend(bg);
  }

  if (testimonialsSection && !testimonialsSection.querySelector(".glassmorphism-bg")) {
    const bg = document.createElement("div");
    bg.className = "glassmorphism-bg";
    testimonialsSection.prepend(bg);
  }

  if (certificationSection && !certificationSection.querySelector(".glassmorphism-bg")) {
    const bg = document.createElement("div");
    bg.className = "glassmorphism-bg";
    certificationSection.prepend(bg);
  }

  // Inicializar sección CTA con fondo de gradiente
  const ctaSection = document.querySelector(".final-cta-section");
  if (ctaSection && !ctaSection.querySelector(".gradient-bg")) {
    const bg = document.createElement("div");
    bg.className = "gradient-bg";
    ctaSection.prepend(bg);
  }

  // Inicializar enlaces suaves
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  smoothLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
      const targetId = link.getAttribute("href");
      if (targetId === "#") return; // Ignorar enlaces vacíos

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Detectar cuando las imágenes se han cargado
  window.addEventListener("load", function() {
    // Disparar evento de scroll para actualizar animaciones
    window.dispatchEvent(new Event("scroll"));
  });

  // Inicializar selector de idioma con banderas
  updateLanguageFlags();
});

function updateLanguageFlags() {
  const languageSelect = document.getElementById('language-select');
  const selectedFlag = document.querySelector('.selected-flag');
  
  if (languageSelect && selectedFlag) {
    // Configuración específica para cada bandera
    const flagConfig = {
      'es': { size: 'cover', position: 'center' },
      'en': { size: 'cover', position: 'center' }
    };
    
    function updateFlag() {
      const selectedOption = languageSelect.options[languageSelect.selectedIndex];
      const flagIcon = selectedOption.getAttribute('data-icon');
      const config = flagConfig[selectedOption.value];
      
      selectedFlag.style.backgroundImage = flagIcon;
      selectedFlag.style.backgroundSize = config.size;
      selectedFlag.style.backgroundPosition = config.position;
      
      // Ajuste extra para la bandera de EE.UU.
      if (selectedOption.value === 'en') {
        selectedFlag.style.backgroundRepeat = 'no-repeat';
      }
    }
    
    // Inicializar
    updateFlag();
    languageSelect.addEventListener('change', updateFlag);
  }
}

document.addEventListener('DOMContentLoaded', updateLanguageFlags);
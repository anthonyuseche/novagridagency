// Gestión de modales
document.addEventListener("DOMContentLoaded", () => {
  // Modal de Portfolio
  const portfolioCards = document.querySelectorAll(".portfolio-card")
  const portfolioModal = document.getElementById("portfolio-modal")
  const modalContent = document.getElementById("modal-content")
  const closeModal = document.getElementById("close-modal")

  // Datos de proyectos
  const projects = [
    {
      id: 1,
      title: "Data 108 - Dev Agency",
      description: "Empresa dedicada al Desarrollo de Apps, Software y Sistemas Web",
      image: "http://ayacoin.co/data.jpeg",
      tech: ["JavaScript", "HTML5", "CSS", "PHP"],
      demoUrl: "https://data108.com/",
      fullDescription:
        " Empresa dedicada al Desarrollo de Apps, Software y Sistemas Web",
    },
    {
      id: 2,
      title: "Q-Protex - Software Development",
      description: "Desarrollo custom de Software de acuerdo a los requerimientos del Cliente. Eficiencia y seguimiento del proceso hasta la entrega",
      image: "http://ayacoin.co/qprotex.jpeg",
      tech: ["JavaScript", "HTML5", "CSS", "PHP"],
      demoUrl: "https://q-protex.com/",
      fullDescription:
        "Desarrollo custom de Software de acuerdo a los requerimientos del Cliente. Eficiencia y seguimiento del proceso hasta la entrega",
    },
    {
      id: 3,
      title: "IxoStudio - Agencia Creativa",
      description: "Empresa Creativa dedicada al Diseño Web, Diseño Gráfico y Motion Animations",
      image: "http://ayacoin.co/ixo.jpeg",
      tech: ["JavaScript", "HTML5", "CSS", "PHP"],
      demoUrl: "https://ixostudio.com/",
      fullDescription:
        "Empresa Creativa dedicada al Diseño Web, Diseño Gráfico y Motion Animations",
    },
    {
      id: 4,
      title: "App de Comercio Electrónico",
      description: "Tienda online completa con pasarela de pagos, gestión de inventario y panel de administración.",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2070&auto=format&fit=crop",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Docker"],
      demoUrl: "#",
      fullDescription:
        "Solución de comercio electrónico completa con catálogo de productos, carrito de compras, pasarela de pagos segura, gestión de inventario y panel de administración. Incluye funcionalidades como recomendaciones personalizadas y programa de fidelización.",
    },
  ]

  // Abrir modal de portfolio
  portfolioCards.forEach((card) => {
    card.addEventListener("click", () => {
      const projectId = Number.parseInt(card.dataset.id)
      const project = projects.find((p) => p.id === projectId)

      if (project && modalContent) {
        // Crear contenido del modal
        modalContent.innerHTML = `
          <h2 class="modal-title text-gradient">${project.title}</h2>
          <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
          </div>
          <div class="project-description">
            <p>${project.fullDescription}</p>
            <h4 class="tech-title">Tecnologías utilizadas:</h4>
            <div class="tech-tags">
              ${project.tech.map((tech) => `<span class="tag">${tech}</span>`).join("")}
            </div>
            <a href="${project.demoUrl}" target="_blank" class="button button-gradient">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg>
              Ver demo en vivo
            </a>
          </div>
        `

        // Mostrar modal
        portfolioModal.classList.add("active")
        document.body.style.overflow = "hidden" // Evitar scroll
      }
    })
  })

  // Cerrar modal de portfolio
  if (closeModal) {
    closeModal.addEventListener("click", () => {
      portfolioModal.classList.remove("active")
      document.body.style.overflow = "" // Restaurar scroll
    })
  }

  // Cerrar modal al hacer clic fuera del contenido
  if (portfolioModal) {
    portfolioModal.addEventListener("click", (e) => {
      if (e.target === portfolioModal) {
        portfolioModal.classList.remove("active")
        document.body.style.overflow = ""
      }
    })
  }

  // Modal de Certificado
  const viewCertificate = document.getElementById("view-certificate")
  const certificateModal = document.getElementById("certificate-modal")
  const closeCertificateModal = document.getElementById("close-certificate-modal")

  // Abrir modal de certificado
  if (viewCertificate && certificateModal) {
    viewCertificate.addEventListener("click", () => {
      certificateModal.classList.add("active")
      document.body.style.overflow = "hidden"
    })
  }

  // Cerrar modal de certificado
  if (closeCertificateModal) {
    closeCertificateModal.addEventListener("click", () => {
      certificateModal.classList.remove("active")
      document.body.style.overflow = ""
    })
  }

  // Cerrar modal de certificado al hacer clic fuera del contenido
  if (certificateModal) {
    certificateModal.addEventListener("click", (e) => {
      if (e.target === certificateModal) {
        certificateModal.classList.remove("active")
        document.body.style.overflow = ""
      }
    })
  }

  // Cerrar modales con la tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (portfolioModal && portfolioModal.classList.contains("active")) {
        portfolioModal.classList.remove("active")
        document.body.style.overflow = ""
      }

      if (certificateModal && certificateModal.classList.contains("active")) {
        certificateModal.classList.remove("active")
        document.body.style.overflow = ""
      }
    }
  })
})

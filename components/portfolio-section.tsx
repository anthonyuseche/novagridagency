"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import SectionDivider from "./section-divider"

const projects = [
  {
    id: 1,
    title: "Data 108 - Dev Agency",
    description: "Empresa dedicada al Desarrollo de Apps, Software y Sistemas Web",
    image: "https://iili.io/3heos72.md.jpg4",
    tech: ["JavaScript", "HTML5", "CSS", "PHP"],
    demoUrl: "#",
    fullDescription:
      "Empresa dedicada al Desarrollo de Apps, Software y Sistemas Web",
  },
  {
    id: 2,
    title: "Q-Protex - Software Development",
    description: "Desarrollo custom de Software de acuerdo a los requerimientos del Cliente. Eficiencia y seguimiento del proceso hasta la entrega",
    image: "https://iili.io/3hk0nhG.jpg",
    tech: ["JavaScript", "HTML5", "CSS", "PHP"],
    demoUrl: "#",
    fullDescription:
      "Desarrollo custom de Software de acuerdo a los requerimientos del Cliente. Eficiencia y seguimiento del proceso hasta la entrega",
  },
  {
    id: 3,
    title: "IxoStudio - Agencia Creativa",
    description: "Empresa Creativa dedicada al Diseño Web, Diseño Gráfico y Motion Animations",
    image: "https://iili.io/3hkhXII.md.jpg",
    tech: ["JavaScript", "HTML5", "CSS", "PHP"],
    demoUrl: "#",
    fullDescription:
      "Empresa Creativa dedicada al Diseño Web, Diseño Gráfico y Motion Animations",
  },
 
]

export default function PortfolioSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <>
      <SectionDivider type="wave" position="top" />
      <section id="portfolio" className="py-20 relative overflow-hidden section-transition" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Mi <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
              Explora algunos de mis proyectos más destacados en WordPress y desarrollo web, y descubre cómo puedo
              ayudarte a alcanzar tus objetivos digitales.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white dark:bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-100 dark:border-white/10 hover:border-gradient transition-all duration-300 hover:shadow-gradient group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] to-transparent opacity-70"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-white/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/80 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="bg-white/95 dark:bg-[#0A192F]/95 backdrop-blur-xl border border-gray-100 dark:border-white/10 text-gray-800 dark:text-white max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gradient">{selectedProject?.title}</DialogTitle>
            </DialogHeader>
            <div className="relative h-64 md:h-80 my-4 rounded-lg overflow-hidden">
              {selectedProject && (
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <DialogDescription className="text-gray-700 dark:text-white/90 text-base">
              {selectedProject?.fullDescription}
            </DialogDescription>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Tecnologías utilizadas:</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject?.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-sm bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/80 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Button
                className="button-gradient text-white hover:bg-gradient-hover font-medium"
                onClick={() => window.open(selectedProject?.demoUrl, "_blank")}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Ver demo en vivo
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </section>
      <SectionDivider type="wave" position="bottom" />
    </>
  )
}

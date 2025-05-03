"use client"

import { motion } from "framer-motion"
import { Bot, Code, LineChart } from "lucide-react"
import { useInView } from "react-intersection-observer"

const services = [
  {
    icon: <Code className="h-12 w-12 text-primary" />,
    title: "Desarrollo WordPress Avanzado",
    description:
      "Creación de sitios y aplicaciones WordPress personalizadas con código limpio, plugins a medida y optimización de rendimiento para una experiencia de usuario excepcional.",
  },
  {
    icon: <LineChart className="h-12 w-12 text-primary" />,
    title: "Optimización de Velocidad WordPress",
    description:
      "Aceleración de tiempos de carga mediante técnicas avanzadas de caché, optimización de bases de datos, minificación de código y configuración de servidores para un rendimiento óptimo.",
  },
  {
    icon: <Bot className="h-12 w-12 text-primary" />,
    title: "Desarrollo de Agentes IA Personalizados",
    description:
      "Creación de asistentes virtuales inteligentes y multifuncionales adaptados a las necesidades específicas de tu negocio para automatizar tareas y mejorar la experiencia del cliente.",
  },
]

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="servicios" className="py-20 relative overflow-hidden section-transition" ref={ref}>
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-gray-50/70 dark:bg-[#0A192F]/30 backdrop-blur-sm z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Mis <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
            Ofrezco soluciones tecnológicas avanzadas, con especialización en WordPress, para impulsar tu negocio en el
            mundo digital.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-gray-100 dark:border-white/10 hover:border-gradient transition-all duration-300 hover:shadow-gradient group"
            >
              <div className="mb-6 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-gradient transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-white/70">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

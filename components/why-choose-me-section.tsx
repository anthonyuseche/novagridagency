"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Zap, Globe, MessageSquare, Code2, HeartHandshake, Layers } from "lucide-react"

const reasons = [
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    text: "Alta velocidad de entrega",
  },
  {
    icon: <HeartHandshake className="h-6 w-6 text-primary" />,
    text: "Calidad garantizada",
  },
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    text: "Comunicación fluida en inglés y español",
  },
  {
    icon: <Code2 className="h-6 w-6 text-primary" />,
    text: "Dominio técnico avanzado",
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    text: "Soporte continuo para agencias",
  },
  {
    icon: <Layers className="h-6 w-6 text-primary" />,
    text: "Experto en WordPress: desarrollo, optimización y plugins personalizados",
  },
]

export default function WhyChooseMeSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20 relative overflow-hidden section-transition" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            ¿Por qué <span className="text-gradient">elegirme</span>?
          </h2>
          <p className="text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
            Descubre las ventajas de trabajar conmigo y cómo puedo ayudarte a alcanzar tus objetivos digitales.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center space-x-4 bg-white dark:bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-gray-100 dark:border-white/10 hover:border-gradient transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="text-gradient">{reason.icon}</div>
              </div>
              <p className="text-gray-700 dark:text-white/90 font-medium">{reason.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

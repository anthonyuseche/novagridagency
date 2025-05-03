"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Star } from "lucide-react"
import Image from "next/image"
import SectionDivider from "./section-divider"

const testimonials = [
  {
    name: "Carlos Rodríguez",
    role: "CEO, TechSolutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    rating: 5,
    comment:
      "Anthony desarrolló un sistema de IA personalizado que transformó por completo nuestro servicio al cliente. Su profesionalismo y conocimiento técnico son excepcionales.",
  },
  {
    name: "María González",
    role: "Directora de Marketing, InnovaDigital",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    rating: 5,
    comment:
      "Trabajar con Anthony fue una experiencia increíble. Entendió perfectamente nuestras necesidades y entregó un producto que superó todas nuestras expectativas.",
  },
  {
    name: "Javier Méndez",
    role: "Fundador, StartupHub",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    rating: 5,
    comment:
      "La plataforma web que Anthony desarrolló para nosotros ha sido fundamental para el crecimiento de nuestro negocio. Su atención al detalle y capacidad para resolver problemas es impresionante.",
  },
]

export default function TestimonialsSection() {
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
      <SectionDivider type="curve" position="top" />
      <section id="testimonios" className="py-20 relative overflow-hidden section-transition" ref={ref}>
        <div className="absolute inset-0 bg-gray-50/70 dark:bg-[#0A192F]/30 backdrop-blur-sm z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Lo que dicen mis <span className="text-gradient">clientes</span>
            </h2>
            <p className="text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
              Descubre las experiencias de quienes han confiado en mis servicios de WordPress y desarrollo web, y han
              transformado sus negocios.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-gray-100 dark:border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(165,87,242,0.2)]"
              >
                <div className="flex items-center mb-4">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4 border-2 border-primary/30">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-white/60">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-white/80 italic">"{testimonial.comment}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <SectionDivider type="curve" position="bottom" />
    </>
  )
}

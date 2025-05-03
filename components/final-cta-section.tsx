"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export default function FinalCtaSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <section className="py-20 relative overflow-hidden section-transition" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-[#0A192F] dark:to-[#0d2240] z-0"></div>

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/20 to-transparent blur-3xl transform -translate-x-full animate-[gradient-x_15s_ease_infinite]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/20 to-transparent blur-3xl transform -translate-y-full animate-[gradient-y_10s_ease_infinite]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-white/5 backdrop-blur-lg rounded-xl p-10 border border-gray-100 dark:border-white/10 max-w-3xl mx-auto text-center shadow-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
            ¿Listo para <span className="text-gradient">impulsar</span> tu próximo proyecto de WordPress?
          </h2>
          <p className="text-gray-600 dark:text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Agenda una consulta gratuita para discutir tus ideas y descubrir cómo puedo ayudarte a llevarlas al
            siguiente nivel con soluciones WordPress optimizadas y personalizadas.
          </p>
          <Button className="button-gradient text-white hover:bg-gradient-hover font-medium text-lg px-8 py-6 rounded-full">
            <Calendar className="h-5 w-5 mr-2" />
            Agenda una llamada
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

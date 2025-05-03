"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { MessageCircle } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="mb-8 text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
            <TypeAnimation
              sequence={[
                "Hola, soy Anthony",
                1000,
                "Senior Web Developer",
                1000,
                "Experto en WordPress",
                1000,
                "Fundador de NovaGrid",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
              className="text-gradient"
            />
          </div>
          <p className="text-lg md:text-xl text-gray-700 dark:text-white/80 mb-10 max-w-2xl mx-auto">
            Desarrollo soluciones web innovadoras y personalizadas, con especialización en WordPress, para potenciar tu
            negocio en la era digital.
          </p>
          <Button
            className="button-gradient text-white hover:bg-gradient-hover font-medium text-lg px-8 py-6 rounded-full"
            onClick={() => window.open("https://wa.me/+1234567890", "_blank")}
          >
            <MessageCircle className="h-6 w-6 mr-2" />
            Trabaja conmigo
          </Button>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-[#0A192F] to-transparent z-10"></div>
    </div>
  )
}

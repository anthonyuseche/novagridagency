"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Award, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function CertificationSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="py-16 relative overflow-hidden section-transition" ref={ref}>
      <div className="absolute inset-0 bg-gray-50/70 dark:bg-[#0A192F]/30 backdrop-blur-sm z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-gray-100 dark:border-white/10 hover:border-primary/30 transition-all duration-300 max-w-3xl mx-auto text-center"
        >
          <Award className="h-16 w-16 text-gradient mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            Certificación <span className="text-gradient">EF SET C1</span>
          </h2>
          <p className="text-gray-600 dark:text-white/70 mb-6">
            Certificado oficial que acredita mi dominio del inglés a nivel profesional (C1), facilitando la comunicación
            fluida con clientes internacionales.
          </p>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="button-gradient text-white hover:bg-gradient-hover font-medium"
          >
            Ver certificado
          </Button>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-white/95 dark:bg-[#0A192F]/95 backdrop-blur-xl border border-gray-100 dark:border-white/10 text-gray-800 dark:text-white max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gradient">Certificado EF SET C1 Advanced</DialogTitle>
          </DialogHeader>
          <div className="relative h-96 my-4 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="EF SET C1 Certificate"
              fill
              className="object-contain"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <p className="text-white/70">
              Certificado que acredita nivel C1 (Advanced) en inglés según el Marco Común Europeo de Referencia para
              las lenguas.
            </p>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => window.open("https://cert.efset.org/CSLRtF", "_blank")}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Verificar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

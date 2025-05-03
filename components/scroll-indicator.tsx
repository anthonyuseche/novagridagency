"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface ScrollIndicatorProps {
  targetId: string
  label?: string
}

export default function ScrollIndicator({ targetId, label = "Descubre más" }: ScrollIndicatorProps) {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <a
        href={`#${targetId}`}
        className="flex flex-col items-center text-white/70 hover:text-primary transition-colors"
      >
        <span className="text-sm mb-2">{label}</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <ChevronDown className="h-6 w-6 mt-2 animate-bounce-slow" />
      </a>
    </motion.div>
  )
}

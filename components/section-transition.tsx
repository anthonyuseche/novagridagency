"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionTransitionProps {
  children: ReactNode
  id?: string
  className?: string
  direction?: "up" | "down" | "left" | "right"
}

export default function SectionTransition({ children, id, className = "", direction = "up" }: SectionTransitionProps) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: "-100px 0px",
  })

  const getVariants = () => {
    switch (direction) {
      case "up":
        return {
          hidden: { y: 50, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
      case "down":
        return {
          hidden: { y: -50, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
      case "left":
        return {
          hidden: { x: 50, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }
      case "right":
        return {
          hidden: { x: -50, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }
    }
  }

  return (
    <section id={id} ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={getVariants()}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, margin: "-100px" }}
      >
        {children}
      </motion.div>
    </section>
  )
}

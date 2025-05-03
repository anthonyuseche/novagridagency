"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface SectionDividerProps {
  type?: "wave" | "curve" | "triangle" | "zigzag"
  position?: "top" | "bottom"
  color?: string
  inverted?: boolean
}

export default function SectionDivider({
  type = "wave",
  position = "bottom",
  color,
  inverted = false,
}: SectionDividerProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === "dark"
  const fillColor = color || (isDark ? "#0A192F" : "#ffffff")
  const transform = position === "top" || inverted ? "rotate(180deg)" : "rotate(0)"

  const renderShape = () => {
    switch (type) {
      case "wave":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            style={{ transform }}
          >
            <path
              fill={fillColor}
              d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        )
      case "curve":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            style={{ transform }}
          >
            <path fill={fillColor} d="M0,96L1440,32L1440,0L0,0Z"></path>
          </svg>
        )
      case "triangle":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            style={{ transform }}
          >
            <path fill={fillColor} d="M0,96L720,32L1440,96L1440,0L0,0Z"></path>
          </svg>
        )
      case "zigzag":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            style={{ transform }}
          >
            <path
              fill={fillColor}
              d="M0,96L240,64L480,96L720,32L960,64L1200,32L1440,64L1440,0L1200,0L960,0L720,0L480,0L240,0L0,0Z"
            ></path>
          </svg>
        )
    }
  }

  return <div className="section-divider">{renderShape()}</div>
}

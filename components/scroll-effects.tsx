"use client"

import { useEffect, useState } from "react"

export default function ScrollEffects() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    // Handle scroll progress indicator
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      // Handle scroll reveal animations
      const revealElements = document.querySelectorAll(".scroll-reveal:not(.visible)")
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("visible")
        }
      })
    }

    // Initialize scroll reveal elements
    const initScrollReveal = () => {
      const elements = document.querySelectorAll("section > div, .card, .feature-item")
      elements.forEach((element) => {
        if (!element.classList.contains("scroll-reveal")) {
          element.classList.add("scroll-reveal")
        }
      })
    }

    // Add parallax effect to sections with background images
    const initParallax = () => {
      const parallaxElements = document.querySelectorAll('section[data-parallax="true"]')
      parallaxElements.forEach((element) => {
        element.classList.add("parallax-bg")
      })
    }

    // Initialize
    initScrollReveal()
    initParallax()
    handleScroll() // Initial check for elements in view

    // Add event listener
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
}

"use client"

import { useState, useEffect } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [innerPosition, setInnerPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Only show cursor if not on a touch device
    if (window.matchMedia("(hover: hover)").matches) {
      setIsVisible(true)
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Outer cursor follows with slight delay
      setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY })
      }, 10)

      // Inner cursor follows immediately
      setInnerPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Track hoverable elements
    const handleElementMouseEnter = () => setIsHovering(true)
    const handleElementMouseLeave = () => setIsHovering(false)

    // Add hover effect to clickable elements
    const addHoverListeners = () => {
      const clickableElements = document.querySelectorAll(
        'a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )

      clickableElements.forEach((element) => {
        element.addEventListener("mouseenter", handleElementMouseEnter)
        element.addEventListener("mouseleave", handleElementMouseLeave)
      })
    }

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    // Initial setup for clickable elements
    addHoverListeners()

    // Setup mutation observer to watch for new elements
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)

      // Clean up hover listeners
      const clickableElements = document.querySelectorAll(
        'a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      clickableElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleElementMouseEnter)
        element.removeEventListener("mouseleave", handleElementMouseLeave)
      })

      observer.disconnect()
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <div
        className={`custom-cursor-outer ${isHovering ? "clickable" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`custom-cursor-inner ${isClicking ? "active" : ""}`}
        style={{
          left: `${innerPosition.x}px`,
          top: `${innerPosition.y}px`,
        }}
      />
    </>
  )
}

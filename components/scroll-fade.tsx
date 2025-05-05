"use client"

import type React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { ReactNode } from "react"

interface ScrollFadeProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function ScrollFade({ children, className = "", delay = 0 }: ScrollFadeProps) {
  const { ref, isVisible } = useScrollAnimation()

  const delayClass = delay ? `delay-${delay * 100}` : ""

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${className} transition-all duration-800 ${delayClass} ${
        isVisible ? "opacity-100 blur-none translate-y-0" : "opacity-0 blur-md translate-y-4"
      }`}
    >
      {children}
    </div>
  )
}

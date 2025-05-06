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

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ transitionDelay: `${delay * 100}ms` }}
      className={`${className} transition-all duration-800 ${isVisible ? "opacity-100 blur-none translate-y-0" : "opacity-0 blur-md translate-y-4"
        }`}
    >
      {children}
    </div>
  )
}

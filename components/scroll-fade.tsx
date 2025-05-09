"use client";

import type React from "react";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

interface ScrollFadeProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollFade({
  children,
  className = "",
  delay = 0,
}: ScrollFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 100);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay * 100}ms` }}
      className={`${className} transition-all duration-500 ${
        isVisible
          ? "opacity-100 blur-none translate-y-0"
          : "opacity-0 blur-md translate-y-4"
      }`}
    >
      {children}
    </div>
  );
}

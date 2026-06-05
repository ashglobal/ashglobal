"use client"

import { useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
  suffix?: string
  prefix?: string
}

export function AnimatedCounter({ from, to, duration = 2.5, suffix = "", prefix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(from)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const startTime = Date.now()
    const totalDuration = duration * 1000

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / totalDuration, 1)

      const currentCount = Math.floor(from + (to - from) * progress)
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [from, to, duration, isInView])

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, ReactNode } from "react"
import { Badge } from "@/components/ui/badge"

interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  highlight?: string
  description?: ReactNode
  centered?: boolean
  className?: string
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  highlight,
  description,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={`${centered ? "text-center max-w-4xl mx-auto" : ""} ${className}`}
    >
      {badge && (
        <Badge variant="outline" className="mb-4 inline-block">
          {badge}
        </Badge>
      )}

      {subtitle && (
        <p className="text-sm font-semibold text-secondary mb-2 uppercase tracking-wider">
          {subtitle}
        </p>
      )}

      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
        {title} {highlight && <span className="text-gradient-gold">{highlight}</span>}
      </h2>

      {description && (
        <div className={`text-lg text-muted-foreground leading-relaxed ${
          centered ? "max-w-3xl mx-auto" : ""
        }`}>
          {description}
        </div>
      )}
    </motion.div>
  )
}

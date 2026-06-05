"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"
import { ReactNode } from "react"

interface ImpactCardProps {
  icon: LucideIcon
  title: string
  description?: string
  value?: string | number
  children?: ReactNode
  isInView?: boolean
  index?: number
  hover?: boolean
  className?: string
}

export function ImpactCard({
  icon: Icon,
  title,
  description,
  value,
  children,
  isInView = true,
  index = 0,
  hover = true,
  className = "",
}: ImpactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card
        className={`border-border/50 h-full transition-all duration-300 ${
          hover ? "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10" : ""
        } p-6 lg:p-8 ${className}`}
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0">
            <Icon className="w-7 h-7 text-primary" />
          </div>
          {value && (
            <div className="text-right flex-1">
              <div className="font-serif text-3xl font-bold text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text">
                {value}
              </div>
            </div>
          )}
        </div>

        <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
        {children}
      </Card>
    </motion.div>
  )
}

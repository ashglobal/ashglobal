"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { Users, BookOpen, Briefcase, Globe, Heart, Zap } from "lucide-react"

const statsData = [
  {
    icon: Users,
    value: 2500,
    label: "Youth Empowered",
    description: "Through our programs",
  },
  {
    icon: BookOpen,
    value: 50,
    label: "Programs Delivered",
    description: "Across multiple areas",
  },
  {
    icon: Globe,
    value: 15,
    label: "Communities Reached",
    description: "Direct and indirect impact",
  },
  {
    icon: Zap,
    value: 85,
    label: "Training Opportunities",
    description: "Created annually",
  },
  {
    icon: Briefcase,
    value: 40,
    label: "Partners Engaged",
    description: "Strategic partnerships",
  },
  {
    icon: Heart,
    value: 98,
    label: "Satisfaction Rate",
    description: "Among participants (%)",
    suffix: "%",
  },
]

export function ImpactStatisticsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl opacity-70" />
      <div className="absolute -bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-70" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Measuring Our <span className="text-gradient-gold">Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real numbers representing real lives transformed through education, skills, and opportunity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {statsData.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-border/50 h-full hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="font-serif text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text mb-2">
                      <AnimatedCounter
                        from={0}
                        to={stat.value}
                        suffix={stat.suffix || ""}
                      />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>

                  <div className="w-full h-1 bg-border rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : {}}
                      transition={{ duration: 2, delay: 0.5 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
                    />
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

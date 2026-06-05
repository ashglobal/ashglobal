"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import {
  CheckCircle2,
  Users,
  Target,
  Handshake,
  Lightbulb,
  Award,
  ArrowRight,
} from "lucide-react"

const impactMetrics = [
  {
    icon: CheckCircle2,
    value: 1,
    label: "Fundraising Event",
    description: "Successfully Completed",
  },
  {
    icon: Users,
    value: 350,
    label: "Community Members",
    description: "Actively Supported",
  },
  {
    icon: Target,
    value: 1,
    label: "Training Centre",
    description: "Established",
  },
  {
    icon: Lightbulb,
    value: 45,
    label: "Training Programs",
    description: "Created",
  },
  {
    icon: Handshake,
    value: 12,
    label: "Strategic Partners",
    description: "Engaged",
  },
  {
    icon: Award,
    value: 1,
    label: "Major Milestone",
    description: "Achieved",
  },
]

const impactHighlights = [
  "Event opening ceremony",
  "Musical performances",
  "Guest speakers",
  "Community participation",
  "Supporters and partners",
  "Award and recognition moments",
  "Beauty center setup process",
  "Equipment installation",
  "Training facilities",
  "Student workstations",
  "Completed beauty center interiors",
  "Operational training environment",
]

export function SuccessStorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <Badge variant="outline" className="mb-4">
            Our Greatest Achievement to Date
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
            Transforming Vision <span className="text-gradient-gold">Into Reality</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            On May 3rd, 2026, ASH Global Initiatives successfully hosted its Official Fundraising 
            Album Launch, bringing together supporters, partners, and community members united by a 
            shared vision of empowering lives through skills development.
          </p>
        </motion.div>

        {/* Featured Story */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <Card className="border-accent/20 bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60 p-8 lg:p-12">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Thanks to the generosity of our supporters and strategic partners, the funds raised 
                during the event were successfully invested in establishing the{" "}
                <span className="font-semibold text-foreground">
                  ASH Beauty & Cosmetology Training Centre
                </span>
                — the first phase of our broader Vocational Training and Community Empowerment Program.
              </p>

              <p>
                What began as a vision has now become a reality. Today, the center serves as a practical 
                learning environment where aspiring beauty professionals gain market-ready skills in hair 
                technology, beauty therapy, nail technology, skincare, and entrepreneurship, creating 
                pathways toward self-employment and financial independence.
              </p>

              <p>
                This milestone represents more than a completed project; it represents{" "}
                <span className="font-semibold text-secondary">
                  transformed opportunities, renewed hope, and a stronger foundation for community development.
                </span>
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Impact Highlights
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactMetrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="border-border/50 h-full hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 p-6 lg:p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="font-serif text-3xl md:text-4xl font-bold text-primary mb-1">
                          {metric.value === 1 ? (
                            "✓"
                          ) : metric.value > 30 ? (
                            <>
                              <AnimatedCounter from={0} to={metric.value} suffix="+" />
                            </>
                          ) : (
                            <AnimatedCounter from={0} to={metric.value} />
                          )}
                        </div>
                        <p className="font-semibold text-foreground">{metric.label}</p>
                        <p className="text-sm text-muted-foreground">{metric.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 lg:p-12 border border-primary/20">
            <p className="text-lg italic text-foreground leading-relaxed mb-6">
              "The success of our fundraising album launch is a testament to what can be achieved when 
              communities, partners, and supporters come together around a common purpose. Every 
              contribution helped transform an idea into a functioning training center that will continue 
              creating opportunities, empowering youth, and changing lives for years to come. We extend 
              our heartfelt gratitude to everyone who believed in the vision and stood with us on this journey."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">🎯</span>
              </div>
              <div>
                <p className="font-serif font-bold text-foreground">David Maina</p>
                <p className="text-sm text-muted-foreground">CEO, ASH Global Initiatives</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="border-border/50 p-8 lg:p-12 bg-card/50">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Our Vision Continues
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              While we celebrate this milestone, our mission continues. We're expanding our impact across 
              multiple fronts to create sustainable pathways for empowerment and transformation.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Expansion of vocational training programs",
                "Youth Information Resource Centre",
                "Business Mentorship Hub",
                "Professional Counseling Services",
                "Mental Health Awareness Podcast Programs",
                "Entrepreneurship Development Programs",
              ].map((initiative, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{initiative}</span>
                </div>
              ))}
            </div>

            <p className="text-lg font-semibold text-primary mb-6">
              Together, we continue building stronger people everywhere.
            </p>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { title: "Partner With Us", desc: "Help expand our impact", href: "/contact" },
            { title: "Volunteer", desc: "Contribute your skills", href: "/contact" },
            { title: "Support Programs", desc: "Invest in transformation", href: "/donate" },
            { title: "Visit Centre", desc: "Experience impact firsthand", href: "/contact" },
          ].map((cta, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={cta.href}>
                <Card className="h-full border-border/50 hover:border-primary/50 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 p-6">
                  <h4 className="font-semibold text-foreground mb-2">{cta.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{cta.desc}</p>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

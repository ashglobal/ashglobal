"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Scissors, HardHat, Shirt, Briefcase, Radio, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const programs = [
  {
    icon: Scissors,
    title: "ASH Beauty Parlor",
    description: "Professional beauty services including nail care, hairdressing, facials, massage, and waxing. Expert styling for all occasions.",
    href: "/services#beauty",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
  },
  {
    icon: Shirt,
    title: "Arise & Shine Outfitters",
    description: "Quality fashion retail and wholesale. Stylish clothing for the modern African, blending tradition with contemporary trends.",
    href: "/services#outfitters",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    icon: HardHat,
    title: "ASH Builders",
    description: "Comprehensive construction services including materials supply, renovation, and professional project management.",
    href: "/services#builders",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    icon: Briefcase,
    title: "ASH Agency",
    description: "Professional property management, marketing solutions, and business consulting services for growing enterprises.",
    href: "/services#agency",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
  icon: Radio,
  title: "Media, Podcast & Livestream Studio",
  description: "A creative media hub where youth develop practical skills in podcast production, livestreaming, digital storytelling, and content creation to educate, inspire, and transform communities.",
  href: "/media",
  image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80",
},
]

export function ProgramsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Programs & Departments
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Diverse initiatives designed to empower, train, and create opportunities for community development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={program.href} className="group block h-full">
                <div className="h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${program.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center">
                        <program.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {program.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <Button size="lg" variant="outline" className="rounded-full px-8">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

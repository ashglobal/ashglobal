"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Building, Gift, Users, Zap, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

const options = [
  {
    icon: GraduationCap,
    title: "Sponsor a Trainee",
    description: "Cover full training costs for one student including registration, daily training, materials, and certification fees.",
    amount: "Ksh. 15,000",
    period: "Full Program",
    popular: true,
  },
  {
    icon: Building,
    title: "Support a Program",
    description: "Fund a specific training program or community initiative. Help us expand our vocational training centers.",
    amount: "Any Amount",
    period: "One-time or Monthly",
    popular: false,
  },
  {
    icon: Zap,
    title: "Fund a Community Initiative",
    description: "Support specific community development projects, youth empowerment activities, and member welfare programs.",
    amount: "Custom Amount",
    period: "Project-based",
    popular: false,
  },
  {
    icon: Briefcase,
    title: "Become a Partner",
    description: "Corporate or institutional partnership. Receive recognition, impact reports, and employee engagement opportunities.",
    amount: "Custom",
    period: "Annual Partnership",
    popular: false,
  },
  {
    icon: Gift,
    title: "In-Kind Donations",
    description: "Donate equipment, materials, or professional services for our training programs. Contact us for specific needs.",
    amount: "Materials",
    period: "As Available",
    popular: false,
  },
  {
    icon: Users,
    title: "Explore Grant Opportunities",
    description: "Learn about foundation grants, corporate sponsorships, and government funding programs we are applying for.",
    amount: "Varies",
    period: "Collaborative",
    popular: false,
  },
]

export function DonationOptions() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="sponsor" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ways to Give
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose how you&apos;d like to support our mission. Every contribution makes a difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {options.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`h-full bg-card border rounded-2xl p-6 transition-all duration-300 hover:shadow-xl ${
                option.popular ? "border-primary" : "border-border hover:border-primary/50"
              }`}>
                {option.popular && (
                  <div className="text-xs font-medium text-primary mb-4">Most Popular</div>
                )}
                
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <option.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  {option.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {option.description}
                </p>

                <div className="mb-6">
                  <div className="font-serif text-2xl font-bold text-primary">
                    {option.amount}
                  </div>
                  <div className="text-sm text-muted-foreground">{option.period}</div>
                </div>

                <Button 
                  className={`w-full rounded-full ${
                    option.popular 
                      ? "bg-gradient-gold text-primary-foreground hover:opacity-90" 
                      : ""
                  }`}
                  variant={option.popular ? "default" : "outline"}
                >
                  {option.title === "In-Kind Donations" ? "Contact Us" : "Donate Now"}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

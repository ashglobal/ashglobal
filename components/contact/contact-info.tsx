"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Paneilla Apartment", "Murang'a County, Kenya"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+254 728 904 762", "+254 728 904 762"],
    links: ["tel:+254728904762", "tel:+254728904762"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["ashpoah@gmail.com", "support@ashglobal.org"],
    links: ["mailto:ashpoah@gmail.com", "mailto:support@ashglobal.org"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Friday: 8AM - 6PM", "Saturday: 9AM - 4PM"],
  },
]

const socials = [
  { icon: Facebook, href: "https://facebook.com/ASHGlobalInitiatives", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/ashglobalinitiatives", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/ashglobalinits", label: "Twitter/X" },
  { icon: Youtube, href: "https://youtube.com/@mrashglobal", label: "YouTube" },
]

export function ContactInfo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Other Ways to Reach Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the most convenient way to get in touch with our team
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactDetails.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="h-full bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">{item.title}</h3>
                <div className="space-y-1">
                  {item.details.map((detail, i) => (
                    <div key={i}>
                      {item.links ? (
                        <a
                          href={item.links[i]}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {detail}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{detail}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
          <div className="flex justify-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

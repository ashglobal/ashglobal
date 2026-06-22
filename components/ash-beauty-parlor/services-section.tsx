'use client'

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Clock, Sparkles } from "lucide-react"

const services = [
  {
    title: "Hair Braiding",
    description: "Professional braiding styles customized to suit your personality and lifestyle.",
    examples: ["Box Braids", "Knotless Braids", "Cornrows", "Tribal Braids"],
    duration: "2–8 Hours",
    benefits: ["Protective style", "Long-lasting", "Customizable designs"],
    image: "https://images.unsplash.com/photo-1596462502278-af3c6f337dc3?w=500&q=80"
  },
  {
    title: "Hair Twists",
    description: "Protective and stylish twists suitable for all hair types.",
    examples: ["Passion Twists", "Senegalese Twists", "Marley Twists"],
    duration: "2–6 Hours",
    benefits: ["Low maintenance", "Protective", "Versatile styling"],
    image: "https://images.unsplash.com/photo-1589411169827-17653b6b3f84?w=500&q=80"
  },
  {
    title: "Loc Retouch",
    description: "Professional maintenance and retightening of locs for healthy growth and neat appearance.",
    examples: ["Root retwist", "Palm rolling", "Loc maintenance"],
    duration: "1–3 Hours",
    benefits: ["Healthy growth", "Professional look", "Regular maintenance"],
    image: "https://images.unsplash.com/photo-1599114678909-ba9dfc0eacb7?w=500&q=80"
  },
  {
    title: "Loc Styling",
    description: "Elegant loc styling for everyday wear, special occasions, weddings, and events.",
    examples: ["Updos", "Side sweeps", "Crowns", "Artistic designs"],
    duration: "30–90 Minutes",
    benefits: ["Event ready", "Elegant appearance", "Professional execution"],
    image: "https://images.unsplash.com/photo-1603897142326-a5674ee2b855?w=500&q=80"
  },
  {
    title: "Hair Washing",
    description: "Deep cleansing and conditioning treatments that keep hair healthy and refreshed.",
    examples: ["Scalp cleanse", "Deep conditioning", "Oil treatment"],
    duration: "30–60 Minutes",
    benefits: ["Hair health", "Deep cleanse", "Moisture restoration"],
    image: "https://images.unsplash.com/photo-1552539302-19b2f7f74628?w=500&q=80"
  },
  {
    title: "Hair Treatment",
    description: "Repair damaged hair, restore moisture, and improve overall hair health.",
    examples: ["Protein Treatment", "Moisturizing Treatment", "Scalp Treatment"],
    duration: "45–90 Minutes",
    benefits: ["Damage repair", "Moisture boost", "Scalp health"],
    image: "https://images.unsplash.com/photo-1553958194249-e6d79f54f693?w=500&q=80"
  },
  {
    title: "Hair Coloring",
    description: "Professional coloring services using quality products to achieve vibrant and long-lasting results.",
    examples: ["Full color", "Highlights", "Ombre", "Balayage"],
    duration: "2–4 Hours",
    benefits: ["Vibrant color", "Professional quality", "Long-lasting results"],
    image: "https://images.unsplash.com/photo-1552595881-f5c3d8e9e3e3?w=500&q=80"
  },
  {
    title: "Wig Installation",
    description: "Flawless wig installation and customization for a natural look and comfortable fit.",
    examples: ["Install & style", "Customization", "Maintenance"],
    duration: "1–2 Hours",
    benefits: ["Natural appearance", "Comfortable fit", "Protective styling"],
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80"
  },
  {
    title: "Makeup Services",
    description: "Professional makeup services for weddings, parties, corporate events, and photoshoots.",
    examples: ["Bridal makeup", "Party makeup", "Event makeup"],
    duration: "1–2 Hours",
    benefits: ["Professional look", "Long-lasting", "Customized style"],
    image: "https://images.unsplash.com/photo-1552810820-e3a0fcb9de7c?w=500&q=80"
  },
  {
    title: "Facial Treatments",
    description: "Revitalize your skin with professional facial treatments designed to cleanse, hydrate, and rejuvenate.",
    examples: ["Hydrating facial", "Cleansing facial", "Anti-aging treatment"],
    duration: "45–90 Minutes",
    benefits: ["Skin rejuvenation", "Deep cleanse", "Hydration boost"],
    image: "https://images.unsplash.com/photo-1532996122724-8f3c2cd83c5d?w=500&q=80"
  },
  {
    title: "Nail Services",
    description: "Professional nail care and beauty services for hands and feet.",
    examples: ["Manicure", "Pedicure", "Gel Polish", "Nail Art"],
    duration: "30–120 Minutes",
    benefits: ["Professional finish", "Long-lasting", "Custom designs"],
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&q=80"
  }
]

export function ServicesSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-[#f8f4f1]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#001B5E] mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of professional beauty and hair care services
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Service Image */}
              <div className="h-48 overflow-hidden bg-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-[#001B5E] mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>

                {/* Examples */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-[#1E8A43] mb-2">Examples:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.examples.map((example) => (
                      <li key={example} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-2" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Duration */}
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Clock className="w-4 h-4 mr-2 text-[#D4AF37]" />
                  <span>{service.duration}</span>
                </div>

                {/* Benefits */}
                <div className="mb-6 bg-[#f8f4f1] rounded-lg p-3">
                  <div className="flex gap-2 flex-wrap">
                    {service.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="text-xs bg-[#D4AF37]/20 text-[#001B5E] px-3 py-1 rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full py-2 px-4 bg-[#D4AF37] text-[#001B5E] font-semibold rounded-lg hover:bg-[#E8C757] transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

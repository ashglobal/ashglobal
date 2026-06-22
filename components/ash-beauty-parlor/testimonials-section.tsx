'use client'

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Kamau",
    role: "Professional",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    text: "The team at ASH Beauty Parlor transformed my hair! Professional service, friendly staff, and amazing results.",
    rating: 5
  },
  {
    name: "Grace Omondi",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    text: "I've been coming here for over a year. Their expertise with locs is outstanding. Highly recommend!",
    rating: 5
  },
  {
    name: "Amina Hassan",
    role: "Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    text: "Best braiding experience ever! The stylists are talented and the environment is so welcoming.",
    rating: 5
  },
  {
    name: "Joyce Kipchoge",
    role: "Event Planner",
    image: "https://images.unsplash.com/photo-1489980557243-8d9d64bb7c41?w=150&q=80",
    text: "Perfect makeup and styling for my wedding! The team made me feel beautiful and confident.",
    rating: 5
  },
  {
    name: "Zainab Mohammed",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    text: "Clean, professional, and they really understand what you want. ASH Beauty Parlor is my go-to!",
    rating: 5
  }
]

export function TestimonialsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 bg-gradient-to-r from-[#001B5E] to-[#1E8A43]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-white/80">
            Trusted by hundreds of satisfied clients
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
        >
          <div className="flex flex-col items-center text-center">
            {/* Client Image */}
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-20 h-20 rounded-full object-cover mb-6 border-4 border-[#D4AF37]"
            />

            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-2xl italic">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Client Info */}
            <div className="mb-8">
              <h3 className="font-serif text-2xl font-bold text-[#001B5E]">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-[#1E8A43] font-semibold">
                {testimonials[currentIndex].role}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full border-2 border-[#D4AF37] text-[#001B5E] hover:bg-[#D4AF37] transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full border-2 border-[#D4AF37] text-[#001B5E] hover:bg-[#D4AF37] transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex ? "bg-[#D4AF37] w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

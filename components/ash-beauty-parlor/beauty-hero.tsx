'use client'

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function BeautyHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001B5E]/90 to-[#1E8A43]/80">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 h-screen flex flex-col items-center justify-center px-4 md:px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Image
            src="/ash-beauty-logo.png"
            alt="ASH Beauty Parlor"
            width={120}
            height={120}
            className="drop-shadow-lg"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6 leading-tight max-w-4xl"
        >
          Transform Your Beauty with Confidence
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/90 text-center mb-10 max-w-2xl"
        >
          At ASH Beauty Parlor, we provide professional beauty and hair care services designed to help you look your best, feel confident, and express your unique style.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="#booking">
            <Button
              size="lg"
              className="px-8 py-6 text-base font-semibold rounded-full bg-[#D4AF37] text-[#001B5E] hover:bg-[#E8C757] transition-all duration-300 hover:scale-105"
            >
              Book Appointment
            </Button>
          </Link>
          <Link href="#contact">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base font-semibold rounded-full border-2 border-white text-white hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </Button>
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-8 text-center text-white/80"
        >
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-[#D4AF37] mb-2">500+</div>
            <div className="text-sm">Happy Clients</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-[#D4AF37] mb-2">10+</div>
            <div className="text-sm">Expert Stylists</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-[#D4AF37] mb-2">5★</div>
            <div className="text-sm">Top Rated</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}

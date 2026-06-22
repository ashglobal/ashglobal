'use client'

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react"

export function BookingSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: ""
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // In a real app, this would send to an API
    alert("Thank you for your booking request! We'll contact you soon.")
    setFormData({ fullName: "", phone: "", email: "", service: "", date: "", message: "" })
  }

  return (
    <section id="booking" ref={ref} className="py-20 px-4 md:px-8 bg-[#f8f4f1]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#001B5E] mb-4">
            Book Your Appointment
          </h2>
          <p className="text-lg text-gray-600">
            Schedule your transformation with us today
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#001B5E] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#001B5E] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder="Your phone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#001B5E] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#001B5E] mb-2">
                  Service Needed
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="Hair Braiding">Hair Braiding</option>
                  <option value="Hair Twists">Hair Twists</option>
                  <option value="Loc Retouch">Loc Retouch</option>
                  <option value="Loc Styling">Loc Styling</option>
                  <option value="Hair Washing">Hair Washing</option>
                  <option value="Hair Treatment">Hair Treatment</option>
                  <option value="Hair Coloring">Hair Coloring</option>
                  <option value="Wig Installation">Wig Installation</option>
                  <option value="Makeup Services">Makeup Services</option>
                  <option value="Facial Treatments">Facial Treatments</option>
                  <option value="Nail Services">Nail Services</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#001B5E] mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#001B5E] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
                  rows={4}
                  placeholder="Any additional details..."
                />
              </div>

              <Button
                type="submit"
                className="w-full py-3 bg-[#D4AF37] text-[#001B5E] font-semibold rounded-lg hover:bg-[#E8C757] transition-colors"
              >
                Submit Booking
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* WhatsApp Booking */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#1E8A43] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#001B5E]">
                  WhatsApp Booking
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Quick and easy booking via WhatsApp. Send us your preferred date and service.
              </p>
              <a
                href="https://wa.me/254728904762"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center py-3 bg-[#1E8A43] text-white font-semibold rounded-lg hover:bg-[#157235] transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Contact Information Cards */}
            <div className="grid gap-4">
              {/* Phone */}
              <div className="bg-white rounded-xl p-6 shadow-lg flex items-start gap-4">
                <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#001B5E]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#001B5E] mb-1">Phone</h4>
                  <p className="text-gray-600">+254 728 904 762</p>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl p-6 shadow-lg flex items-start gap-4">
                <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#001B5E]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#001B5E] mb-1">Email</h4>
                  <p className="text-gray-600">ashpoah@gmail.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-xl p-6 shadow-lg flex items-start gap-4">
                <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#001B5E]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#001B5E] mb-1">Location</h4>
                  <p className="text-gray-600">Murang'a County, Kenya</p>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-xl p-6 shadow-lg flex items-start gap-4">
                <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#001B5E]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#001B5E] mb-1">Hours</h4>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sunday: By Appointment</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

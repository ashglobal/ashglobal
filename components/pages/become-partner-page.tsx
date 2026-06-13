"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { 
  Heart, 
  ArrowRight, 
  GraduationCap, 
  Building2, 
  Handshake, 
  Brain, 
  Users,
  Sparkles,
  Target,
  Globe,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  CheckCircle,
  Clock,
  MessageCircle,
  MapPin,
  Award,
  Briefcase,
  Church,
  School,
  Landmark,
  TrendingUp,
  Star,
  Quote,
  Eye
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export function BecomePartnerPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const brandColors = {
    primary: "#0F3D91",
    secondary: "#00A86B",
    accent: "#D4AF37",
    primaryLight: "#1a5bc4",
    secondaryLight: "#00c97d",
    accentLight: "#e8c84a",
    darkBg: "#0A0F1A",
    darkCard: "#111827",
    textPrimary: "#F3F4F6",
    textSecondary: "#9CA3AF",
  }

  const partnerBenefits = [
    { icon: Target, title: "Community Impact", description: "Directly contribute to sustainable community transformation" },
    { icon: Eye, title: "Brand Visibility", description: "Recognition across our platforms and events" },
    { icon: Award, title: "CSR Alignment", description: "Meet your corporate social responsibility goals" },
    { icon: TrendingUp, title: "Sustainable Development", description: "Support UN SDGs through meaningful action" },
    { icon: Users, title: "Youth Empowerment", description: "Invest in the next generation of leaders" },
    { icon: GraduationCap, title: "Skills Development", description: "Build workforce capabilities in communities" },
  ]

  const partnerCategories = [
    {
      title: "Corporate Partners",
      icon: Briefcase,
      description: "Businesses supporting programs and initiatives",
      benefits: ["Brand integration", "Employee engagement", "CSR reporting", "Networking opportunities"]
    },
    {
      title: "NGO & Development Partners",
      icon: Globe,
      description: "Organizations aligned with community empowerment",
      benefits: ["Program collaboration", "Resource sharing", "Joint impact initiatives", "Knowledge exchange"]
    },
    {
      title: "Faith-Based Partners",
      icon: Church,
      description: "Churches and ministries supporting social impact",
      benefits: ["Community outreach", "Volunteer programs", "Local partnerships", "Moral support"]
    },
    {
      title: "Educational Institutions",
      icon: School,
      description: "Schools, colleges, and training organizations",
      benefits: ["Student placements", "Curriculum development", "Research collaboration", "Internship programs"]
    },
    {
      title: "Government & Public Institutions",
      icon: Landmark,
      description: "Strategic collaboration opportunities",
      benefits: ["Policy alignment", "Scale initiatives", "Public funding", "Systemic change"]
    },
    {
      title: "International Development Partners",
      icon: Heart,
      description: "Global organizations supporting community transformation",
      benefits: ["Global reach", "Best practices", "Cross-cultural exchange", "Sustainable funding"]
    }
  ]

  const impactAreas = [
    { icon: GraduationCap, title: "Vocational Training", description: "Equip youth with practical skills" },
    { icon: Building2, title: "Resource Centre Development", description: "Create learning spaces" },
    { icon: Users, title: "Youth Empowerment", description: "Build leadership capabilities" },
    { icon: Handshake, title: "Business Mentorship", description: "Support entrepreneurship" },
    { icon: Heart, title: "Community Welfare", description: "Strengthen support systems" },
    { icon: Brain, title: "Mental Health Awareness", description: "Expand wellness programs" },
  ]

  const partnershipProcess = [
    { step: "1", title: "Initial Discussion", description: "Connect with our team to explore alignment" },
    { step: "2", title: "Partnership Exploration", description: "Identify mutual goals and opportunities" },
    { step: "3", title: "Strategic Alignment", description: "Define shared vision and objectives" },
    { step: "4", title: "Program Development", description: "Co-create impact initiatives" },
    { step: "5", title: "Impact Implementation", description: "Launch and execute programs" },
    { step: "6", title: "Reporting & Success Measurement", description: "Track and celebrate achievements" },
  ]

  const testimonials = [
    {
      quote: "Partnering with ASH Global Initiatives has transformed how we approach community development. Their commitment to sustainable impact is remarkable.",
      author: "John Mwangi",
      title: "Corporate Affairs Director",
      organization: "Leading Bank"
    },
    {
      quote: "The collaboration has enabled us to reach communities we couldn't access before. Their grassroots connections are invaluable.",
      author: "Sarah Omondi",
      title: "Programs Manager",
      organization: "International NGO"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: brandColors.darkBg }}>
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F3D91]/20 via-[#0A0F1A] to-[#0A0F1A]" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-3xl opacity-10" style={{ backgroundColor: brandColors.accent }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10" style={{ backgroundColor: brandColors.secondary }} />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 px-4 py-2 text-sm" style={{ backgroundColor: `${brandColors.accent}20`, color: brandColors.accent, border: `1px solid ${brandColors.accent}40` }}>
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                Become a Partner
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ color: brandColors.textPrimary }}>
                Partnerships That Create{" "}
                <span className="bg-gradient-to-r from-[#D4AF37] to-[#00A86B] bg-clip-text text-transparent">
                  Lasting Impact
                </span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed" style={{ color: brandColors.textSecondary }}>
                ASH Global Initiatives believes meaningful transformation happens through collaboration, 
                shared vision, and collective action.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact-partnership">
                  <Button size="lg" className="rounded-full px-8" style={{ background: `linear-gradient(135deg, ${brandColors.accent}, ${brandColors.secondary})`, color: '#0A0F1A' }}>
                    Start a Partnership
                    <Handshake className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="#partner-benefits">
                  <Button size="lg" variant="outline" className="rounded-full px-8 border-2" style={{ borderColor: brandColors.accent, color: brandColors.accent }}>
                    Explore Benefits
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-[#0F3D91] to-[#00A86B] rounded-2xl flex items-center justify-center">
                  <div className="text-center p-12">
                    <Handshake className="w-32 h-32 mx-auto mb-4" style={{ color: brandColors.accent }} />
                    <p className="text-white text-xl font-semibold">Building Stronger People Everywhere</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section ref={ref} className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: brandColors.textPrimary }}>
              Why Partner With{" "}
              <span className="text-[#D4AF37]">Us</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: brandColors.textSecondary }}>
              Join a network of organizations committed to sustainable community transformation
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {partnerBenefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full text-center hover:transform hover:-translate-y-2 transition-all duration-300" style={{ backgroundColor: `${brandColors.darkCard}CC`, borderColor: `${brandColors.accent}20` }}>
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${brandColors.accent}15` }}>
                      <benefit.icon className="w-8 h-8" style={{ color: brandColors.accent }} />
                    </div>
                    <CardTitle className="text-xl text-white">{benefit.title}</CardTitle>
                    <CardDescription className="text-white/60">{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partnership Categories */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: brandColors.textPrimary }}>
              Partnership <span className="text-[#00A86B]">Categories</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: brandColors.textSecondary }}>
              Find the partnership model that aligns with your organization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group cursor-pointer transition-all duration-300 hover:shadow-2xl" style={{ backgroundColor: `${brandColors.darkCard}CC`, borderColor: `${brandColors.accent}20` }}>
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${brandColors.accent}15` }}>
                      <category.icon className="w-7 h-7" style={{ color: brandColors.accent }} />
                    </div>
                    <CardTitle className="text-xl text-white">{category.title}</CardTitle>
                    <CardDescription className="text-white/60">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4" style={{ color: brandColors.secondary }} />
                          <span className="text-white/70">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Impact Areas */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: brandColors.textPrimary }}>
              Partnership Impact <span className="text-[#D4AF37]">Areas</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: brandColors.textSecondary }}>
              Direct your partnership support to areas that matter most
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:transform hover:-translate-y-1 transition-all duration-300" style={{ backgroundColor: `${brandColors.darkCard}CC`, borderColor: `${brandColors.accent}20` }}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: `${brandColors.accent}15` }}>
                      <area.icon className="w-6 h-6" style={{ color: brandColors.accent }} />
                    </div>
                    <CardTitle className="text-lg text-white">{area.title}</CardTitle>
                    <CardDescription className="text-white/60 text-sm">{area.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Partners Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: brandColors.textPrimary }}>
              Featured <span className="text-[#00A86B]">Partners</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: brandColors.textSecondary }}>
              Join organizations already making a difference with us
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center border border-white/10"
              >
                <div className="text-center">
                  <Building2 className="w-12 h-12 mx-auto mb-2 opacity-50" style={{ color: brandColors.accent }} />
                  <p className="text-white/60 text-sm">Partner Logo</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: brandColors.textPrimary }}>
              Partnership <span className="text-[#D4AF37]">Process</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: brandColors.textSecondary }}>
              Our proven framework for successful collaboration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnershipProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="relative overflow-hidden" style={{ backgroundColor: `${brandColors.darkCard}CC`, borderColor: `${brandColors.accent}20` }}>
                  <div className="absolute top-4 right-4 text-5xl font-bold opacity-10" style={{ color: brandColors.accent }}>
                    {step.step}
                  </div>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${brandColors.accent}20` }}>
                      <span className="text-xl font-bold" style={{ color: brandColors.accent }}>{step.step}</span>
                    </div>
                    <CardTitle className="text-lg text-white">{step.title}</CardTitle>
                    <CardDescription className="text-white/60">{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Testimonials */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: brandColors.textPrimary }}>
              Partner <span className="text-[#00A86B]">Testimonials</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: brandColors.textSecondary }}>
              What our partners say about collaborating with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="relative" style={{ backgroundColor: `${brandColors.darkCard}CC`, borderColor: `${brandColors.accent}20` }}>
                  <CardHeader>
                    <Quote className="w-10 h-10 mb-2" style={{ color: brandColors.accent }} />
                    <CardDescription className="text-white/80 text-lg leading-relaxed">
                      "{testimonial.quote}"
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <div>
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <p className="text-sm" style={{ color: brandColors.textSecondary }}>
                        {testimonial.title}, {testimonial.organization}
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Partnership Team */}
      <section id="contact-partnership" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: brandColors.textPrimary }}>
                Contact Our{" "}
                <span className="text-[#D4AF37]">Partnership Team</span>
              </h2>
              <p className="text-lg mb-6" style={{ color: brandColors.textSecondary }}>
                Ready to explore partnership opportunities? Our team is here to discuss how we can work together.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColors.accent}15` }}>
                    <Phone className="w-5 h-5" style={{ color: brandColors.accent }} />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Phone & WhatsApp</p>
                    <p className="text-white font-medium">0728 904 762</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColors.accent}15` }}>
                    <Mail className="w-5 h-5" style={{ color: brandColors.accent }} />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Email</p>
                    <p className="text-white font-medium">ashpoah@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColors.accent}15` }}>
                    <MessageCircle className="w-5 h-5" style={{ color: brandColors.accent }} />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Social Media</p>
                    <div className="flex gap-3 mt-1">
                      <Link href="#" className="hover:opacity-80 transition-opacity">
                        <Facebook className="w-5 h-5" style={{ color: brandColors.accent }} />
                      </Link>
                      <Link href="#" className="hover:opacity-80 transition-opacity">
                        <Instagram className="w-5 h-5" style={{ color: brandColors.accent }} />
                      </Link>
                      <Link href="#" className="hover:opacity-80 transition-opacity">
                        <Youtube className="w-5 h-5" style={{ color: brandColors.accent }} />
                      </Link>
                      <Link href="#" className="hover:opacity-80 transition-opacity">
                        <Twitter className="w-5 h-5" style={{ color: brandColors.accent }} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm text-white/60">Social Media Handles</p>
                <div className="space-y-1 mt-2">
                  <p className="text-white">Facebook: ASH Global Initiatives</p>
                  <p className="text-white">Instagram: @ashglobalinitiatives</p>
                  <p className="text-white">TikTok: @ashglobalinitiatives</p>
                  <p className="text-white">YouTube: @mrashglobal</p>
                  <p className="text-white">X: @ashglobalinits</p>
                </div>
              </div>
            </div>

            <Card className="backdrop-blur-sm" style={{ backgroundColor: `${brandColors.darkCard}CC`, borderColor: `${brandColors.accent}20` }}>
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send Us a Message</CardTitle>
                <CardDescription className="text-white/60">
                  Fill out the form and our partnership team will respond within 48 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Full Name</Label>
                    <Input id="name" placeholder="Your name" className="bg-black/40 border-white/20 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="organization" className="text-white">Organization</Label>
                    <Input id="organization" placeholder="Your organization" className="bg-black/40 border-white/20 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Email Address</Label>
                    <Input id="email" type="email" placeholder="you@example.com" className="bg-black/40 border-white/20 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-white">Message</Label>
                    <Textarea id="message" placeholder="Tell us about your partnership interests" rows={4} className="bg-black/40 border-white/20 text-white" />
                  </div>
                  <Button className="w-full rounded-full py-6" style={{ background: `linear-gradient(135deg, ${brandColors.accent}, ${brandColors.secondary})`, color: '#0A0F1A' }}>
                    Send Partnership Inquiry
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

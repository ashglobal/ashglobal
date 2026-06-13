"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
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
  Globe
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Image from "next/image"

export function FundraiserSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Brand colors
  const brandColors = {
    primary: "#0F3D91",     // Deep Royal Blue
    secondary: "#00A86B",   // Emerald Green
    accent: "#D4AF37",      // Gold
    primaryLight: "#1a5bc4",
    secondaryLight: "#00c97d",
    accentLight: "#e8c84a",
    darkBg: "#0A0F1A",
    darkCard: "#111827",
    textPrimary: "#F3F4F6",
    textSecondary: "#9CA3AF",
  }

  const supportAreas = [
    {
      title: "Vocational Training Expansion",
      description: "Support the growth of our Beauty & Cosmetology Training Centre and future training programs.",
      icon: GraduationCap,
      gradient: "from-blue-500/20 to-emerald-500/20",
      borderColor: "hover:border-blue-500/50"
    },
    {
      title: "Youth Resource Centre",
      description: "Help equip learning spaces, educational resources, and youth engagement programs.",
      icon: Building2,
      gradient: "from-emerald-500/20 to-gold-500/20",
      borderColor: "hover:border-emerald-500/50"
    },
    {
      title: "Business Mentorship Programs",
      description: "Support entrepreneurship development and economic empowerment initiatives.",
      icon: Handshake,
      gradient: "from-gold-500/20 to-blue-500/20",
      borderColor: "hover:border-gold-500/50"
    },
    {
      title: "Mental Health Awareness",
      description: "Help expand podcast programs, counseling services, and community awareness campaigns.",
      icon: Brain,
      gradient: "from-purple-500/20 to-blue-500/20",
      borderColor: "hover:border-purple-500/50"
    },
    {
      title: "Community Welfare Programs",
      description: "Strengthen support systems for vulnerable individuals and community members.",
      icon: Users,
      gradient: "from-rose-500/20 to-emerald-500/20",
      borderColor: "hover:border-rose-500/50"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section ref={ref} className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070")',
          }}
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F3D91]/90 via-[#0A0F1A]/95 to-[#0A0F1A]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-transparent to-[#0F3D91]/30" />
        
        {/* Abstract Brand Accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-10" style={{ backgroundColor: brandColors.accent }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10" style={{ backgroundColor: brandColors.secondary }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12" style={{ backgroundColor: brandColors.accent }} />
              <Badge 
                className="text-sm font-semibold tracking-wider uppercase px-4 py-1.5"
                style={{ 
                  backgroundColor: `${brandColors.accent}20`,
                  color: brandColors.accent,
                  border: `1px solid ${brandColors.accent}40`
                }}
              >
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                ONGOING INITIATIVE
              </Badge>
              <div className="h-px w-12" style={{ backgroundColor: brandColors.accent }} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight" style={{ color: brandColors.textPrimary }}>
            Supporting Sustainable{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#00A86B] bg-clip-text text-transparent">
              Community Transformation
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: brandColors.textSecondary }}>
            ASH Global Initiatives is continually seeking donors, sponsors, grant opportunities, 
            strategic partners, and resource mobilization support to expand our impact and strengthen 
            community empowerment programs.
          </p>
        </motion.div>

        {/* Supporting Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <Card 
            className="backdrop-blur-md border bg-black/30 shadow-xl overflow-hidden"
            style={{ borderColor: `${brandColors.accent}30` }}
          >
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: `${brandColors.accent}20` }}>
                    <Globe className="w-10 h-10" style={{ color: brandColors.accent }} />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-white/90 leading-relaxed mb-4">
                    Through collaborative partnerships and sustainable funding, we are able to provide affordable vocational training, 
                    youth empowerment programs, business mentorship, professional counseling, and community development initiatives 
                    that create lasting social and economic transformation.
                  </p>
                  <p className="text-white/80 font-medium" style={{ color: brandColors.secondary }}>
                    Our goal is to build stronger people, stronger families, and stronger communities through accessible 
                    opportunities that promote self-reliance and sustainable development.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Key Areas Seeking Support - Premium Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: brandColors.textPrimary }}>
              Key Areas <span className="relative inline-block">
                Seeking Support
                <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="2" x2="200" y2="2" stroke={brandColors.accent} strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              </span>
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Your partnership helps us expand our reach and deepen our impact across multiple initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card 
                  className="h-full backdrop-blur-sm transition-all duration-300 group overflow-hidden border bg-black/40 hover:shadow-2xl"
                  style={{ 
                    borderColor: `${brandColors.accent}20`,
                    backgroundColor: 'rgba(17, 24, 39, 0.6)'
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <CardHeader className="relative z-10">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" style={{ backgroundColor: `${brandColors.accent}15` }}>
                      <area.icon className="w-7 h-7" style={{ color: brandColors.accent }} />
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-gold transition-colors">
                      {area.title}
                    </CardTitle>
                    <CardDescription className="text-white/60 text-sm leading-relaxed">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="relative z-10 pt-0">
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto text-sm font-medium group/btn hover:bg-transparent"
                      style={{ color: brandColors.accent }}
                    >
                      Learn More 
                      <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <Card 
            className="backdrop-blur-md border-2 overflow-hidden"
            style={{ 
              background: `linear-gradient(135deg, ${brandColors.primary}20, ${brandColors.secondary}10)`,
              borderColor: brandColors.accent
            }}
          >
            <CardContent className="p-8 md:p-12 text-center relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl" />
              
              <Heart className="w-12 h-12 mx-auto mb-4" style={{ color: brandColors.accent }} />
              <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto" style={{ color: brandColors.textPrimary }}>
                Every partnership, donation, sponsorship, and grant contributes directly to creating opportunities, 
                building skills, and empowering individuals to achieve sustainable livelihoods.
              </p>
              <Separator className="my-6 w-24 mx-auto" style={{ backgroundColor: brandColors.accent }} />
              <p className="text-lg" style={{ color: brandColors.secondary }}>
                Together, we can continue transforming lives and building stronger people everywhere.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call To Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/become-a-partner">
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ 
                  background: `linear-gradient(135deg, ${brandColors.accent}, ${brandColors.secondary})`,
                  color: '#0A0F1A'
                }}
              >
                <Handshake className="w-5 h-5 mr-2" />
                Become a Partner
              </Button>
            </Link>
            <Link href="/support-our-mission">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-base font-semibold transition-all duration-300 hover:scale-105 border-2"
                style={{ 
                  borderColor: brandColors.accent,
                  color: brandColors.accent,
                  backgroundColor: 'transparent'
                }}
              >
                <Heart className="w-5 h-5 mr-2" />
                Support Our Mission
              </Button>
            </Link>
            <Link href="/sponsorship-opportunities">
              <Button
                size="lg"
                variant="ghost"
                className="rounded-full px-8 py-6 text-base font-semibold transition-all duration-300 hover:scale-105"
                style={{ 
                  color: brandColors.textSecondary,
                  backgroundColor: 'rgba(255,255,255,0.05)'
                }}
              >
                <Target className="w-5 h-5 mr-2" />
                Explore Sponsorship Opportunities
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          
          <p className="mt-8 text-sm" style={{ color: brandColors.textSecondary }}>
            Join us in building stronger communities, one partnership at a time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

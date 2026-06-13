"use client"

import { motion, useScroll, useTransform } from "framer-motion"
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
  DollarSign,
  Gift,
  Briefcase,
  Clock,
  Award,
  TrendingUp,
  Globe,
  BookOpen,
  Mic,
  Smile,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export function SupportMissionPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

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

  const missionInAction = [
    {
      title: "Vocational Training",
      description: "Providing practical skills for sustainable employment and entrepreneurship",
      image: "/vocational-training.jpg",
      icon: GraduationCap,
      stats: "500+ Trained"
    },
    {
      title: "Youth Empowerment",
      description: "Building leadership capabilities and creating pathways to success",
      image: "/youth-empowerment.jpg",
      icon: Users,
      stats: "1000+ Youth Reached"
    },
    {
      title: "Community Welfare",
      description: "Supporting vulnerable individuals and strengthening community bonds",
      image: "/community-welfare.jpg",
      icon: Heart,
      stats: "2000+ Beneficiaries"
    },
    {
      title: "Counseling Programs",
      description: "Providing mental health support and professional guidance",
      image: "/counseling.jpg",
      icon: Brain,
      stats: "800+ Counseling Sessions"
    },
    {
      title: "Resource Centre Development",
      description: "Creating learning spaces equipped with modern educational resources",
      image: "/resource-centre.jpg",
      icon: Building2,
      stats: "3 Centres Established"
    },
    {
      title: "Mental Health Awareness",
      description: "Expanding outreach through podcasts and community campaigns",
      image: "/mental-health.jpg",
      icon: Mic,
      stats: "50,000+ Reached"
    }
  ]

  const impactAreas = [
    { title: "Sponsor a Trainee", description: "Support a youth's vocational training journey", icon: GraduationCap, amount: "$500/year" },
    { title: "Equip a Workstation", description: "Provide tools and equipment for training", icon: Building2, amount: "$1,000" },
    { title: "Support Mentorship Programs", description: "Fund business mentorship initiatives", icon: Handshake, amount: "$2,500" },
    { title: "Expand Community Outreach", description: "Reach more communities with programs", icon: Globe, amount: "$5,000" },
    { title: "Fund Educational Resources", description: "Provide learning materials and books", icon: BookOpen, amount: "$750" },
  ]

  const waysToSupport = [
    {
      title: "Individual Giving",
      description: "Support community transformation directly through one-time or recurring donations",
      icon: Heart,
      gradient: "from-rose-500/20 to-red-500/20"
    },
    {
      title: "Corporate Sponsorship",
      description: "Align your brand with meaningful impact and community development",
      icon: Briefcase,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Grants & Foundations",
      description: "Partner to scale sustainable programs and expand our reach",
      icon: Award,
      gradient: "from-gold-500/20 to-yellow-500/20"
    },
    {
      title: "In-Kind Donations",
      description: "Provide equipment, learning resources, or professional services",
      icon: Gift,
      gradient: "from-emerald-500/20 to-green-500/20"
    },
    {
      title: "Volunteer Support",
      description: "Contribute your expertise and time to empower communities",
      icon: Clock,
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ]

  const successStories = [
    {
      name: "Beauty Centre Establishment",
      description: "From vision to reality - how partnerships built a state-of-the-art training facility",
      impact: "100+ students trained annually",
      icon: Smile
    },
    {
      name: "Community Transformation",
      description: "Local beneficiaries share their journey from training to sustainable employment",
      impact: "85% employment rate",
      icon: TrendingUp
    },
    {
      name: "Partnership Achievements",
      description: "Strategic collaborations that expanded our reach and deepened our impact",
      impact: "15+ active partners",
      icon: Handshake
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
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-10" style={{ backgroundColor: brandColors.secondary }} />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full blur-3xl opacity-10" style={{ backgroundColor: brandColors.accent }} />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 px-4 py-2 text-sm mx-auto inline-flex" style={{ backgroundColor: `${brandColors.accent}20`, color: brandColors.accent, border: `1px solid ${brandColors.accent}40` }}>
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Support Our Mission
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ color: brandColors.textPrimary }}>
              Support Our{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#00A86B] bg-clip-text text-transparent">
                Mission
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed" style={{ color: brandColors.textSecondary }}>
              Every contribution helps create opportunities, develop skills, and empower communities to build sustainable livelihoods.
            </p>
            <Link href="/donate">
              <Button size="lg" className="rounded-full px-8 py-6 text-lg" style={{ background: `linear-gradient(135deg, ${brandColors.accent}, ${brandColors.secondary})`, color: '#0A0F1A' }}>
                Support Today
                <Heart className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Mission In Action */}
      <section ref={ref} className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: brandColors.textPrimary }}>
              Our Mission In{" "}
              <span className="text-[#00A86B]">Action</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: brandColors.textSecondary }}>
              See how your support translates into real-world impact and transformation
            </p>
          </motion.div>

          <div className="space-y-12">
            {missionInAction.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="flex-1">
                  <Card className="backdrop-blur-sm" style={{ backgroundColor: `${brandColors.darkCard}CC`, borderColor: `${brandColors.accent}20` }}>
                    <CardHeader>
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${brandColors.accent}15` }}>
                        <item.icon className="w-7 h-7" style={{ color: brandColors.accent }} />
                      </div>
                      <CardTitle className="text-2xl text-white">{item.title}</CardTitle>
                      <CardDescription className="text-white/70 text-lg">{item.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Badge className="text-sm" style={{ backgroundColor: `${brandColors.secondary}20`, color: brandColors.secondary }}>
                        {item.stats}
                      </Badge>
                    </CardFooter>
                  </Card>
                </div>
                <div className="flex-1">
                  <div className="relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-[#0F3D91] to-[#00A86B] flex items-center justify-center">
                    <div className="text-center text-white">
                      <item.icon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-xl font-semibold">Visual Story</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Support Creates Impact */}
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
              Your Support Creates{" "}
              <span className="text-[#D4AF37]">Impact</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: brandColors.textSecondary }}>
              Every contribution makes a tangible difference in someone's life
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
                <Card className="h-full text-center hover:transform hover:-translate-y-2 transition-all duration-300" style={{ backgroundColor: `${brandColors.darkCard}CC`, borderColor: `${brandColors.accent}20` }}>
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${brandColors.accent}15` }}>
                      <area.icon className="w-8 h-8" style={{ color: brandColors.accent }} />
                    </div>
                    <CardTitle className="text-xl text-white">{area.title}</CardTitle>
                    <CardDescription className="text-white/60">{area.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-center">
                    <Badge className="text-lg px-4 py-2" style={{ backgroundColor: `${brandColors.secondary}20`, color: brandColors.secondary }}>
                      {area.amount}
                    </Badge>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways To Support */}
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
              Ways To <span className="text-[#00A86B]">Support</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: brandColors.textSecondary }}>
              Choose the method that works best for you and your organization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {waysToSupport.map((way, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group cursor-pointer transition-all duration-300 hover:shadow-2xl overflow-hidden" style={{ backgroundColor: `${brandColors.darkCard}CC`, borderColor: `${brandColors.accent}20` }}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${way.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <CardHeader className="relative z-10">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${brandColors.accent}15` }}>
                      <way.icon className="w-7 h-7" style={{ color: brandColors.accent }} />
                    </div>
                    <CardTitle className="text-xl text-white">{way.title}</CardTitle>
                    <CardDescription className="text-white/60">{way.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="relative z-10">
                    <Button variant="ghost" className="p-0 h-auto" style={{ color: brandColors.accent }}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
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
              Success <span className="text-[#D4AF37]">Stories</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: brandColors.textSecondary }}>
              Real impact, real transformation, real communities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center" style={{ backgroundColor: `${brandColors.darkCard}CC`, borderColor: `${brandColors.accent}20` }}>
                  <CardHeader>
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${brandColors.accent}15` }}>
                      <story.icon className="w-10 h-10" style={{ color: brandColors.accent }} />
                    </div>
                    <CardTitle className="text-xl text-white">{story.name}</CardTitle>
                    <CardDescription className="text-white/70">{story.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-center">
                    <Badge className="text-sm px-3 py-1" style={{ backgroundColor: `${brandColors.secondary}20`, color: brandColors.secondary }}>
                      {story.impact}
                    </Badge>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Mobilization Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-md border-2 overflow-hidden text-center" style={{ background: `linear-gradient(135deg, ${brandColors.primary}40, ${brandColors.secondary}20)`, borderColor: brandColors.accent }}>
              <CardContent className="p-12">
                <Globe className="w-16 h-16 mx-auto mb-6" style={{ color: brandColors.accent }} />
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Together We Can Build Stronger People Everywhere</h3>
                <p className="text-xl mb-6" style={{ color: brandColors.textSecondary }}>
                  Your partnership enables us to expand our reach and deepen our impact across communities.
                </p>
                <Separator className="my-6 w-24 mx-auto" style={{ backgroundColor: brandColors.accent }} />
                <div className="flex flex-wrap justify-center gap-6 text-sm" style={{ color: brandColors.textSecondary }}>
                  <span>Ongoing Fundraising</span>
                  <span>•</span>
                  <span>Sponsorship Opportunities</span>
                  <span>•</span>
                  <span>Donor Engagement</span>
                  <span>•</span>
                  <span>Grant Partnerships</span>
                  <span>•</span>
                  <span>Strategic Collaborations</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/donate">
                <Button size="lg" className="rounded-full px-8" style={{ background: `linear-gradient(135deg, ${brandColors.accent}, ${brandColors.secondary})`, color: '#0A0F1A' }}>
                  Support The Mission
                  <Heart className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/donate">
                <Button size="lg" variant="outline" className="rounded-full px-8 border-2" style={{ borderColor: brandColors.accent, color: brandColors.accent }}>
                  Become A Donor
                </Button>
              </Link>
              <Link href="/become-a-partner">
                <Button size="lg" variant="ghost" className="rounded-full px-8" style={{ color: brandColors.textSecondary }}>
                  Partner With Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
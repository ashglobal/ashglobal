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
  Award,
  Star,
  Medal,
  Trophy,
  CheckCircle,
  Image as ImageIcon,
  Play,
  Quote,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"

export function SponsorshipPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState("platinum")

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

  const whySponsor = [
    { icon: GraduationCap, title: "Vocational Training", description: "Empower youth with practical skills for sustainable employment" },
    { icon: Users, title: "Youth Empowerment", description: "Build leadership and entrepreneurial capabilities" },
    { icon: Heart, title: "Community Welfare", description: "Strengthen support systems for vulnerable individuals" },
    { icon: Handshake, title: "Business Mentorship", description: "Foster economic growth through mentorship" },
    { icon: Brain, title: "Mental Health Awareness", description: "Expand counseling and wellness programs" },
    { icon: Building2, title: "Resource Center Development", description: "Create learning spaces for community development" },
  ]

  const sponsorshipTiers = {
    platinum: {
      title: "Platinum Partner",
      icon: Trophy,
      price: "$25,000+",
      features: [
        "Naming opportunities for major programs",
        "Premium brand visibility across all platforms",
        "Headline event recognition",
        "Strategic partnership opportunities",
        "VIP access to all events",
        "Custom impact reporting",
        "Media and press recognition",
        "Board meeting participation"
      ],
      color: "from-gold-500 to-yellow-600"
    },
    gold: {
      title: "Gold Partner",
      icon: Star,
      price: "$10,000 - $24,999",
      features: [
        "Program sponsorship opportunities",
        "Media recognition across platforms",
        "Community engagement opportunities",
        "Event sponsorship benefits",
        "Regular impact updates",
        "Brand feature in newsletters",
        "Social media recognition"
      ],
      color: "from-yellow-500 to-yellow-600"
    },
    silver: {
      title: "Silver Partner",
      icon: Medal,
      price: "$5,000 - $9,999",
      features: [
        "Training support recognition",
        "Resource center support acknowledgment",
        "Program visibility benefits",
        "Certificate of partnership",
        "Impact report access",
        "Newsletter recognition"
      ],
      color: "from-gray-400 to-gray-500"
    },
    community: {
      title: "Community Partner",
      icon: Award,
      price: "$1,000 - $4,999",
      features: [
        "Support specific community projects",
        "Sponsor equipment for training",
        "Sponsor learning materials",
        "Community recognition",
        "Certificate of appreciation",
        "Project impact updates"
      ],
      color: "from-emerald-500 to-green-600"
    }
  }

  const sponsorshipAreas = [
    { title: "Beauty & Cosmetology Training Centre", image: "/beauty-training.jpg", description: "State-of-the-art facilities for skills development" },
    { title: "Student Scholarships", image: "/scholarship.jpg", description: "Support youth access to quality education" },
    { title: "Youth Resource Centre", image: "/youth-center.jpg", description: "Equip learning and development spaces" },
    { title: "Mental Health Programs", image: "/mental-health.jpg", description: "Expand counseling and wellness services" },
    { title: "Podcast Awareness Campaigns", image: "/podcast.jpg", description: "Reach communities through digital media" },
    { title: "Business Mentorship Programs", image: "/mentorship.jpg", description: "Support entrepreneurship development" },
    { title: "Community Welfare Programs", image: "/community-welfare.jpg", description: "Strengthen support for vulnerable members" },
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
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-3xl opacity-10" style={{ backgroundColor: brandColors.accent }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-10" style={{ backgroundColor: brandColors.secondary }} />
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
                Sponsorship Opportunities
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ color: brandColors.textPrimary }}>
                Invest In{" "}
                <span className="bg-gradient-to-r from-[#D4AF37] to-[#00A86B] bg-clip-text text-transparent">
                  Community Transformation
                </span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed" style={{ color: brandColors.textSecondary }}>
                Partner with ASH Global Initiatives to create opportunities, empower individuals, 
                and build sustainable futures through education, mentorship, and community development.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#sponsorship-tiers">
                  <Button size="lg" className="rounded-full px-8" style={{ background: `linear-gradient(135deg, ${brandColors.accent}, ${brandColors.secondary})`, color: '#0A0F1A' }}>
                    Explore Sponsorship Packages
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/become-a-partner">
                  <Button size="lg" variant="outline" className="rounded-full px-8 border-2" style={{ borderColor: brandColors.accent, color: brandColors.accent }}>
                    Become A Sponsor
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
                    <Handshake className="w-24 h-24 mx-auto mb-4" style={{ color: brandColors.accent }} />
                    <p className="text-white text-xl font-semibold">Building Stronger People Everywhere</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section ref={ref} className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: brandColors.textPrimary }}>
              Why Sponsor{" "}
              <span className="text-[#D4AF37]">ASH Global Initiatives</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: brandColors.textSecondary }}>
              Your sponsorship directly impacts lives and transforms communities
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {whySponsor.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full backdrop-blur-sm transition-all duration-300 hover:transform hover:-translate-y-2" style={{ backgroundColor: `${brandColors.darkCard}CC`, borderColor: `${brandColors.accent}20` }}>
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${brandColors.accent}15` }}>
                      <item.icon className="w-7 h-7" style={{ color: brandColors.accent }} />
                    </div>
                    <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                    <CardDescription className="text-white/60">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sponsorship Tiers Section */}
      <section id="sponsorship-tiers" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: brandColors.textPrimary }}>
              Sponsorship <span className="text-[#00A86B]">Opportunities</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: brandColors.textSecondary }}>
              Choose the partnership level that aligns with your organization's goals
            </p>
          </motion.div>

          <Tabs defaultValue="platinum" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-black/40">
              <TabsTrigger value="platinum" className="text-white data-[state=active]:text-gold">Platinum</TabsTrigger>
              <TabsTrigger value="gold" className="text-white data-[state=active]:text-gold">Gold</TabsTrigger>
              <TabsTrigger value="silver" className="text-white data-[state=active]:text-gold">Silver</TabsTrigger>
              <TabsTrigger value="community" className="text-white data-[state=active]:text-gold">Community</TabsTrigger>
            </TabsList>

            {Object.entries(sponsorshipTiers).map(([key, tier]) => (
              <TabsContent key={key} value={key}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="backdrop-blur-sm border-2 overflow-hidden" style={{ borderColor: `${brandColors.accent}40`, backgroundColor: `${brandColors.darkCard}CC` }}>
                    <div className={`h-2 bg-gradient-to-r ${tier.color}`} />
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <tier.icon className="w-8 h-8" style={{ color: brandColors.accent }} />
                            <CardTitle className="text-3xl text-white">{tier.title}</CardTitle>
                          </div>
                          <CardDescription className="text-2xl font-bold mt-2" style={{ color: brandColors.accent }}>
                            {tier.price}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {tier.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" style={{ color: brandColors.secondary }} />
                            <span className="text-white/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full rounded-full py-6" style={{ background: `linear-gradient(135deg, ${brandColors.accent}, ${brandColors.secondary})`, color: '#0A0F1A' }}>
                        Become a {tier.title}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Areas Available For Sponsorship */}
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
              Areas Available For <span className="text-[#D4AF37]">Sponsorship</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: brandColors.textSecondary }}>
              Direct your support to specific programs that align with your mission
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsorshipAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300" style={{ backgroundColor: `${brandColors.darkCard}CC`, borderColor: `${brandColors.accent}20` }}>
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                    <div className="w-full h-full bg-gradient-to-br from-[#0F3D91] to-[#00A86B] flex items-center justify-center">
                      <Building2 className="w-16 h-16 text-white/30" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-white group-hover:text-gold transition-colors">{area.title}</CardTitle>
                    <CardDescription className="text-white/60">{area.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="ghost" className="p-0 h-auto text-sm font-medium" style={{ color: brandColors.accent }}>
                      Sponsor This Area
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Gallery */}
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
              Impact <span className="text-[#00A86B]">Gallery</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: brandColors.textSecondary }}>
              See the transformation your sponsorship makes possible
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-xl aspect-square cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F3D91] to-[#00A86B] flex items-center justify-center">
                  <ImageIcon className="w-12 h-12 text-white/50" />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="outline" className="rounded-full border-white text-white hover:bg-white/20">
                    View Gallery
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-md border-2 overflow-hidden" style={{ background: `linear-gradient(135deg, ${brandColors.primary}40, ${brandColors.secondary}20)`, borderColor: brandColors.accent }}>
              <CardContent className="p-12">
                <Heart className="w-16 h-16 mx-auto mb-6" style={{ color: brandColors.accent }} />
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Create Lasting Impact?</h3>
                <p className="text-xl mb-8" style={{ color: brandColors.textSecondary }}>
                  Join us in transforming lives and building stronger communities across Africa.
                </p>
                <Link href="/become-a-partner">
                  <Button size="lg" className="rounded-full px-8 py-6 text-lg" style={{ background: `linear-gradient(135deg, ${brandColors.accent}, ${brandColors.secondary})`, color: '#0A0F1A' }}>
                    Become A Sponsor
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
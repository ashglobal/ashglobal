"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Scissors, Ruler, HardHat, Leaf, Monitor, Clock, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

const activePrograms = [
  {
    icon: Scissors,
    title: "Hair Technology",
    description: "Master cutting, styling, coloring, and advanced hair treatment techniques for professional excellence.",
    duration: "3-4 months",
    spots: "Now Enrolling",
    featured: true,
    image: "https://images.unsplash.com/photo-1580612176707-29e530f03aa0?w=800&q=80",
  },
  {
    icon: Scissors,
    title: "Beauty Therapy",
    description: "Comprehensive training in facial treatments, body massage, spa services, and holistic beauty care.",
    duration: "3 months",
    spots: "Now Enrolling",
    featured: false,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
  },
  {
    icon: Ruler,
    title: "Nail Technology",
    description: "Professional nail art, design, application techniques, and nail care specialization.",
    duration: "2-3 months",
    spots: "Now Enrolling",
    featured: false,
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
  },
  {
    icon: Scissors,
    title: "Cosmetology",
    description: "Complete beauty training including makeup artistry, skincare science, and professional cosmetics application.",
    duration: "3-4 months",
    spots: "Limited Spots",
    featured: false,
    image: "https://images.unsplash.com/photo-1596467537623-a51415b7fd70?w=800&q=80",
  },
  {
    icon: Award,
    title: "Beauty Entrepreneurship",
    description: "Business fundamentals, salon management, marketing strategies, and financial planning for beauty professionals.",
    duration: "2 months",
    spots: "Now Enrolling",
    featured: false,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
]

const comingSoonPrograms = [
  {
    icon: Ruler,
    title: "Tailoring Programs",
    description: "Learn garment construction, pattern making, and alteration techniques.",
    planned: "Q3 2024",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    icon: Scissors,
    title: "Fashion Design Programs",
    description: "Advanced fashion design, trend forecasting, and collection development.",
    planned: "Q4 2024",
    image: "https://images.unsplash.com/photo-1567307160868-e71b99932e29?w=800&q=80",
  },
  {
    icon: Leaf,
    title: "Agribusiness Training",
    description: "Modern farming techniques, livestock management, and agricultural business skills.",
    planned: "2025",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80",
  },
]

const courses = [...activePrograms]

export function CoursesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="courses" className="py-20 lg:py-32 bg-background scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Training Programs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Practical, skills-based training designed to prepare you for employment and entrepreneurship
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={course.featured ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <div className={`group h-full bg-card border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 ${
                course.featured ? "border-primary" : "border-border hover:border-primary/50"
              }`}>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${course.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Badge */}
                  {course.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-gold text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                  
                  {/* Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center">
                      <course.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {course.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className={`flex items-center gap-1 ${
                      course.spots === "Now Enrolling" ? "text-green-500" : 
                      course.spots === "Limited Spots" ? "text-primary" : "text-muted-foreground"
                    }`}>
                      <Users className="w-4 h-4" />
                      <span>{course.spots}</span>
                    </div>
                  </div>

                  <a href="#enroll">
                    <Button 
                      className={`w-full rounded-full ${
                        course.featured 
                          ? "bg-gradient-gold text-primary-foreground hover:opacity-90" 
                          : ""
                      }`}
                      variant={course.featured ? "default" : "outline"}
                    >
                      {course.spots === "Coming Soon" ? "Join Waitlist" : "Apply Now"}
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
              Programs Coming Soon
            </h3>
            <p className="text-muted-foreground">
              Exciting new training programs launching throughout 2024 and 2025
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comingSoonPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="group h-full bg-card border border-muted rounded-2xl overflow-hidden opacity-75 hover:opacity-100 hover:border-primary/30 transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                      style={{ backgroundImage: `url(${program.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    
                    {/* Coming Soon Badge */}
                    <div className="absolute top-4 right-4 bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Coming Soon
                    </div>
                    
                    {/* Icon */}
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center opacity-50">
                        <program.icon className="w-6 h-6 text-muted-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {program.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                      <Clock className="w-4 h-4" />
                      <span>Planned: {program.planned}</span>
                    </div>

                    <Button 
                      className="w-full rounded-full"
                      variant="outline"
                      disabled
                    >
                      Join Waitlist
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { X } from "lucide-react"

const galleryItems = [
  {
    category: "Hair Braiding",
    image: "https://images.unsplash.com/photo-1596462502278-af3c6f337dc3?w=400&q=80",
    title: "Elegant Box Braids"
  },
  {
    category: "Hair Braiding",
    image: "https://images.unsplash.com/photo-1589411169827-17653b6b3f84?w=400&q=80",
    title: "Stylish Twists"
  },
  {
    category: "Locs",
    image: "https://images.unsplash.com/photo-1599114678909-ba9dfc0eacb7?w=400&q=80",
    title: "Beautiful Locs"
  },
  {
    category: "Makeup",
    image: "https://images.unsplash.com/photo-1552810820-e3a0fcb9de7c?w=400&q=80",
    title: "Bridal Makeup"
  },
  {
    category: "Nails",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80",
    title: "Nail Art Design"
  },
  {
    category: "Treatments",
    image: "https://images.unsplash.com/photo-1553958194249-e6d79f54f693?w=400&q=80",
    title: "Hair Treatment"
  }
]

export function GallerySection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "Hair Braiding", "Locs", "Makeup", "Nails", "Treatments"]
  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#001B5E] mb-4">
            Our Work
          </h2>
          <p className="text-lg text-gray-600">
            See our latest transformations and before-and-after showcases
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#D4AF37] text-[#001B5E]"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl h-64 md:h-80"
              onClick={() => setSelectedImage(item.image)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-end">
                <div className="w-full p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage} alt="Full view" className="w-full h-auto rounded-lg" />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
              >
                <X className="w-6 h-6 text-black" />
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

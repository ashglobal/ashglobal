'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Play, X, ZoomIn, Image as ImageIcon } from 'lucide-react'
import Link from 'next/link'

export function AlbumCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  // Brand colors extracted from logo: ASH GLOBAL INITIATIVES
  const brandColors = {
    primary: '#1A2A3A',    // Deep navy blue from "ASH"
    secondary: '#C5A267',  // Metallic gold/bronze from "GLOBAL"
    accent: '#2C4B6B',     // Muted blue accent
    light: '#F5F3EF',      // Warm off-white background
    dark: '#0A1A2A',       // Dark navy for text contrast
    gold: '#D4B87A',       // Lighter gold for hover states
    textDark: '#2C3E50',   // Primary text
    textLight: '#F8F9FA',  // Light text
    overlay: 'rgba(10, 26, 42, 0.85)' // Dark navy overlay
  }

  const mediaItems = [
    { id: 1, title: 'Youth Empowerment Workshop', type: 'image', src: '/placeholder-1.jpg', description: 'Inspiring the next generation of leaders through hands-on mentorship' },
    { id: 2, title: 'Skills Training Session', type: 'image', src: '/placeholder-2.jpg', description: 'Building practical capabilities for sustainable employment' },
    { id: 3, title: 'Community Impact Video', type: 'video', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', description: 'Witness the transformative power of collective action' },
    { id: 4, title: 'Graduation Ceremony', type: 'image', src: '/placeholder-3.jpg', description: 'Celebrating milestones and new beginnings' },
    { id: 5, title: 'Business Mentorship Program', type: 'image', src: '/placeholder-4.jpg', description: 'Fostering entrepreneurship and economic growth' },
    { id: 6, title: 'Digital Literacy Training', type: 'image', src: '/placeholder-5.jpg', description: 'Bridging the digital divide one skill at a time' },
  ]

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length)
  }, [mediaItems.length])

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length)
  }, [mediaItems.length])

  // Auto-advance carousel when playing
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying && !isHovering) {
      interval = setInterval(next, 4000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, isHovering, next])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape') setSelectedItem(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [prev, next])

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: brandColors.light }}>
      {/* Decorative Brand Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full" style={{ backgroundColor: brandColors.secondary }} />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full" style={{ backgroundColor: brandColors.primary }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12" style={{ backgroundColor: brandColors.secondary }} />
              <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: brandColors.secondary }}>Our Story in Motion</span>
              <div className="h-px w-12" style={{ backgroundColor: brandColors.secondary }} />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight" style={{ color: brandColors.primary }}>
            Album & Media Gallery
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: brandColors.textDark }}>
            Celebrating our journey and impact through captured moments
          </p>
        </div>

        {/* Main Carousel Section */}
        <div 
          className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl bg-black group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Main display */}
          <div className="relative aspect-video bg-black">
            {mediaItems[currentIndex].type === 'image' && (
              <div className="relative w-full h-full cursor-pointer" onClick={() => setSelectedItem(currentIndex)}>
                <img
                  src={mediaItems[currentIndex].src}
                  alt={mediaItems[currentIndex].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-black/50 rounded-full p-3 backdrop-blur-sm">
                    <ZoomIn size={28} className="text-white" />
                  </div>
                </div>
              </div>
            )}
            {mediaItems[currentIndex].type === 'video' && (
              <iframe
                src={mediaItems[currentIndex].src}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}

            {/* Play/Pause Toggle */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-2 rounded-full transition-all z-10"
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? <X size={18} /> : <Play size={18} />}
            </button>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
            style={{ boxShadow: `0 4px 15px ${brandColors.primary}20` }}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
            style={{ boxShadow: `0 4px 15px ${brandColors.primary}20` }}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Title & Description Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">{mediaItems[currentIndex].title}</h3>
            <p className="text-gray-200 text-sm md:text-base max-w-2xl opacity-90">
              {mediaItems[currentIndex].description}
            </p>
            {/* Progress Indicator */}
            <div className="mt-4 flex gap-1">
              {mediaItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className="h-1 flex-1 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: idx === currentIndex ? brandColors.secondary : 'rgba(255,255,255,0.3)',
                    width: idx === currentIndex ? '24px' : 'auto'
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Slide Counter */}
          <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
            {currentIndex + 1} / {mediaItems.length}
          </div>
        </div>

        {/* Thumbnails Grid - Enhanced Interactive */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {mediaItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className="group relative rounded-xl overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                border: `2px solid ${idx === currentIndex ? brandColors.secondary : 'transparent'}`,
                boxShadow: idx === currentIndex ? `0 0 0 2px ${brandColors.light}, 0 0 0 4px ${brandColors.secondary}` : 'none',
                transform: idx === currentIndex ? 'scale(1.02)' : 'scale(1)'
              }}
            >
              <div className="relative aspect-square overflow-hidden bg-gray-200">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-all">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 transition-all group-hover:scale-110">
                      <Play size={20} style={{ color: brandColors.secondary }} />
                    </div>
                  </div>
                )}
                {/* Thumbnail Overlay for Active/Inactive */}
                <div 
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{ 
                    backgroundColor: idx === currentIndex ? 'transparent' : `${brandColors.primary}99`,
                    opacity: idx === currentIndex ? 0 : 0.4
                  }} 
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-xs font-medium truncate">{item.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Images */}
      {selectedItem !== null && mediaItems[selectedItem].type === 'image' && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md transition-all duration-300"
          style={{ backgroundColor: brandColors.overlay }}
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative max-w-5xl w-full mx-auto rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            <img
              src={mediaItems[selectedItem].src}
              alt={mediaItems[selectedItem].title}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="text-white text-xl font-bold">{mediaItems[selectedItem].title}</h3>
              <p className="text-gray-200">{mediaItems[selectedItem].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
'use client'

import { FileText, Download, Search, Filter, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function DocumentsSection() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  // Brand colors extracted from logo: ASH GLOBAL INITIATIVES (matching media gallery)
  const brandColors = {
    primary: '#1A2A3A',    // Deep navy blue from "ASH"
    secondary: '#C5A267',  // Metallic gold/bronze from "GLOBAL"
    secondaryLight: '#D4B87A', // Lighter gold for hover states
    accent: '#2C4B6B',     // Muted blue accent
    darkBg: '#0A0F1A',     // Deep dark background
    darkCard: '#111827',   // Card background
    darkElevated: '#1F2937', // Elevated elements
    textPrimary: '#F3F4F6',   // Light text
    textSecondary: '#9CA3AF', // Muted light text
    textMuted: '#6B7280',     // Even more muted
    gold: '#D4B87A',       // Lighter gold for hover states
    borderLight: 'rgba(255,255,255,0.1)',
    success: '#10B981',
  }

  const documents = [
    { id: 1, title: 'Organization Constitution', category: 'legal', year: 2024, size: '2.4 MB', downloads: 245 },
    { id: 2, title: 'Annual Report 2024', category: 'reports', year: 2024, size: '5.1 MB', downloads: 1892 },
    { id: 3, title: 'Strategic Plan 2024-2028', category: 'strategic', year: 2024, size: '3.8 MB', downloads: 567 },
    { id: 4, title: 'Annual Budget 2024', category: 'financial', year: 2024, size: '1.2 MB', downloads: 324 },
    { id: 5, title: 'IT Programs Manual', category: 'training', year: 2024, size: '4.5 MB', downloads: 478 },
    { id: 6, title: 'Members Welfare Policy', category: 'policies', year: 2024, size: '1.8 MB', downloads: 156 },
    { id: 7, title: 'Financial Audit Report 2023', category: 'financial', year: 2023, size: '2.9 MB', downloads: 423 },
    { id: 8, title: 'Training Curriculum Guide', category: 'training', year: 2024, size: '6.2 MB', downloads: 892 },
  ]

  const categories = [
    { id: 'all', label: 'All Documents' },
    { id: 'legal', label: 'Legal' },
    { id: 'reports', label: 'Reports' },
    { id: 'strategic', label: 'Strategic' },
    { id: 'financial', label: 'Financial' },
    { id: 'training', label: 'Training' },
    { id: 'policies', label: 'Policies' },
  ]

  const filteredDocs = documents.filter(doc => {
    const matchesCategory = activeCategory === 'all' || doc.category === activeCategory
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: brandColors.darkBg }}>
      {/* Background Image with Overlay - matching media gallery */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070")',
            backgroundBlendMode: 'overlay'
          }}
        />
        {/* Gradient Overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/80 via-brand-dark/50 to-brand-dark/90" style={{ backgroundColor: brandColors.darkBg }} />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/30" />
        
        {/* Abstract Brand Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10" style={{ backgroundColor: brandColors.secondary }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-5" style={{ backgroundColor: brandColors.primary }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section - matching media gallery styling */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12" style={{ backgroundColor: brandColors.secondary }} />
              <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: brandColors.secondary }}>Knowledge Hub</span>
              <div className="h-px w-12" style={{ backgroundColor: brandColors.secondary }} />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight" style={{ color: brandColors.textPrimary }}>
            Documents & Resources
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: brandColors.textSecondary }}>
            Access organizational documents, reports, policies, and training materials
          </p>
        </div>

        {/* Search and Filter Section - Dark themed */}
        <div className="rounded-2xl p-6 mb-8 backdrop-blur-sm border" style={{ backgroundColor: `${brandColors.darkCard}CC`, borderColor: brandColors.borderLight }}>
          <div className="flex gap-4 mb-6 flex-col sm:flex-row">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2" size={18} style={{ color: brandColors.textSecondary }} />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 transition-all bg-gray-900 text-white placeholder-gray-500"
                style={{ 
                  backgroundColor: brandColors.darkElevated,
                  border: `1px solid ${brandColors.borderLight}`,
                  '--tw-ring-color': brandColors.secondary
                } as any}
              />
            </div>
          </div>

          {/* Category filters - Gold accent for active */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                  activeCategory === cat.id
                    ? 'text-white shadow-lg'
                    : 'hover:bg-gray-800 text-gray-300'
                }`}
                style={{
                  backgroundColor: activeCategory === cat.id ? brandColors.secondary : brandColors.darkElevated,
                  border: `1px solid ${activeCategory === cat.id ? 'transparent' : brandColors.borderLight}`
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Documents grid - Matching media gallery card styling */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map(doc => (
            <div 
              key={doc.id} 
              className="group rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1 backdrop-blur-sm border"
              style={{ 
                backgroundColor: `${brandColors.darkCard}E6`,
                borderColor: brandColors.borderLight,
                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.3)'
              }}
            >
              {/* Colored top bar accent */}
              <div className="h-1 w-full" style={{ backgroundColor: brandColors.secondary }} />
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: `${brandColors.secondary}20` }}>
                    <FileText size={24} style={{ color: brandColors.secondary }} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2 py-1 rounded-lg" style={{ backgroundColor: brandColors.darkElevated, color: brandColors.textSecondary }}>
                      {doc.year}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-2 transition-colors group-hover" style={{ color: brandColors.textPrimary }}>
                  {doc.title}
                </h3>
                
                <div className="flex items-center justify-between mb-5">
                  <p className="text-sm" style={{ color: brandColors.textSecondary }}>
                    {doc.size}
                  </p>
                  <p className="text-xs" style={{ color: brandColors.textMuted }}>
                    📥 {doc.downloads.toLocaleString()} downloads
                  </p>
                </div>
                
                <button 
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:gap-3"
                  style={{ 
                    backgroundColor: `${brandColors.secondary}15`,
                    color: brandColors.secondary,
                    border: `1px solid ${brandColors.secondary}30`
                  }}
                >
                  <Download size={16} />
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state - Styled for dark mode */}
        {filteredDocs.length === 0 && (
          <div className="text-center py-16 rounded-2xl backdrop-blur-sm border" style={{ backgroundColor: `${brandColors.darkCard}80`, borderColor: brandColors.borderLight }}>
            <FileText size={48} className="mx-auto mb-4 opacity-50" style={{ color: brandColors.textSecondary }} />
            <p className="text-lg" style={{ color: brandColors.textSecondary }}>No documents found matching your search.</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setActiveCategory('all')
              }}
              className="mt-4 text-sm font-medium transition-colors hover:underline"
              style={{ color: brandColors.secondary }}
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Document Stats Footer */}
        {filteredDocs.length > 0 && (
          <div className="mt-12 text-center">
            <p className="text-sm" style={{ color: brandColors.textMuted }}>
              Showing {filteredDocs.length} of {documents.length} documents
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

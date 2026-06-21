import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,
  swcMinify: true,
  optimizeFonts: true,
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  redirects: async () => [],
  rewrites: async () => [],
}

export default nextConfig

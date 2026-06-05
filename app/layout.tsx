import type { Metadata, Viewport } from 'next'
import { Poppins, Montserrat, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ASH Global Initiatives | Youth Empowerment & Community Development',
  description: 'ASH Global Initiatives empowers youth through skill development, vocational training, business mentorship, IT programs, and community development in Kenya. Transform lives through education and opportunity.',
  keywords: ['youth empowerment', 'vocational training', 'Kenya', 'community development', 'skill development', 'business mentorship', 'technology training', 'social impact', 'beauty training', 'entrepreneurship'],
  authors: [{ name: 'ASH Global Initiatives' }],
  creator: 'ASH Global Initiatives',
  publisher: 'ASH Global Initiatives',
  openGraph: {
    title: 'ASH Global Initiatives | Building Stronger People Everywhere',
    description: 'Together we arise and shine - empowering youth, transforming communities through skills and opportunity.',
    type: 'website',
    locale: 'en_KE',
    siteName: 'ASH Global Initiatives',
    url: 'https://ashglobal.ke',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASH Global Initiatives',
    description: 'Empowering communities through skills, resources, and opportunities.',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0A3D62' },
    { media: '(prefers-color-scheme: dark)', color: '#4DA6D6' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${poppins.variable} ${montserrat.variable} ${openSans.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="ash-global-theme"
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

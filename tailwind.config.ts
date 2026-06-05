import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-brand': '#0F3D91',
        'emerald': '#00A86B',
        'gold-accent': '#D4AF37',
        'charcoal': '#121212',
        'light-gray': '#F5F7FA',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'var(--font-open-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-montserrat)', 'serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
      },
    },
  },
  plugins: [],
}

export default config

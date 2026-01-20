import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'rich-black': '#050505',
        'gold-base': '#D4AF37',
        'gold-light': '#F7EF8A',
        'gold-dark': '#AA8C2C',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, #AA8C2C, #D4AF37, #F7EF8A, #D4AF37, #AA8C2C)',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-lato)', 'Lato', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config

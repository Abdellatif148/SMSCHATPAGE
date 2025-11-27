/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          black: '#050505',
          midnight: '#000000',
          white: '#F5F9FF',
          soft: '#FFFFFF',
          blue: '#006CFF',
          electric: '#006CFF',
          dark: '#0A0A0A',
          deepGray: '#1A1A1A',
          slateGray: '#2B2B2B',
          iceBlue: '#BBD7FF'
        }
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'blue-glow': 'radial-gradient(circle, rgba(0, 175, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.1)' },
        }
      }
    }
  },
  plugins: [],
}

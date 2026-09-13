/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        foreground: '#0A0A0A',
        secondary: '#2B1A12',
        'secondary-light': '#3A241A',
        'secondary-text': '#5C504A',
        muted: '#5C504A',
        card: '#FAF8F6',
        'card-hover': '#F5F0EB',
        'card-border': '#E5DED9',
        border: '#E5DED9',
        input: {
          DEFAULT: '#FFFFFF',
          border: '#E5DED9',
          placeholder: '#8A817C',
        },
        primary: {
          DEFAULT: '#FF6A00',
          hover: '#E85D00',
          light: '#FF8533',
          dark: '#CC5500',
        },
        accent: '#FF6A00',
        dark: {
          bg: '#0A0A0A',
          secondary: '#2B1A12',
          card: '#15100D',
          border: '#3A2920',
          text: '#FFFFFF',
          muted: '#D8D2CE',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 0 0 rgba(255, 106, 0, 0.4)' },
          '50%': { opacity: .5, boxShadow: '0 0 0 10px rgba(255, 106, 0, 0)' },
        },
        shimmer: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        },
        'slide-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}

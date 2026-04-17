/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FF751F',
          dark: '#E5640E',
          light: '#FF9549',
          50: '#FFF4ED',
          100: '#FFE8D5',
        },
        charcoal: {
          DEFAULT: '#353434',
          deep: '#1C1C1C',
          deeper: '#111111',
        },
        silver: {
          DEFAULT: '#908E8E',
          light: '#DEE2E4',
        },
      },
      fontFamily: {
        heading: ['"Barlow Condensed"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #111111 0%, #1C1C1C 50%, #252525 100%)',
        'orange-gradient': 'linear-gradient(135deg, #FF751F 0%, #E5640E 100%)',
        'dark-gradient': 'linear-gradient(180deg, #1C1C1C 0%, #111111 100%)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,117,31,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(255,117,31,0.8)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

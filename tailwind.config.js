/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vyoma-purple': '#8B5CF6',
        'vyoma-pink': '#EC4899',
        'vyoma-blue': '#3B82F6',
        'vyoma-teal': '#14B8A6',
        'vyoma-green': '#BFFF00',
        'vyoma-lime': '#ADFF2F',
        'vyoma-dark': '#0A0A0A',
        'vyoma-gray': '#1A1A1A',
      },
      backgroundImage: {
        'aurora-gradient': 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #3B82F6 100%)',
        'purple-pink': 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
        'blue-purple': 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
        'dark-radial': 'radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

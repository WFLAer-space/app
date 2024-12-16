/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'toast-slide-in': {
          '0%': { transform: 'translateX(-50%) translateY(-100%)' },
          '100%': { transform: 'translateX(-50%) translateY(24px)' }
        },
        'toast-slide-out': {
          '0%': { transform: 'translateX(-50%) translateY(24px)' },
          '100%': { transform: 'translateX(-50%) translateY(-100%)' }
        }
      },
      animation: {
        'toast-slide-in': 'toast-slide-in 0.3s ease-out forwards',
        'toast-slide-out': 'toast-slide-out 0.3s ease-in forwards'
      }
    },
  },
  plugins: [],
} 
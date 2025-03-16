/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6C2BD9',
          dark: '#4C1D99',
          light: '#8B5CF6'
        },
        secondary: {
          DEFAULT: '#F6B938',
          dark: '#D99B28',
          light: '#FFD180'
        },
        background: {
          dark: '#1A1B26',
          light: '#F3F4F6'
        }
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [],
}
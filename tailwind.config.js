/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#ff7a00', // orange
          dark: '#cc5a00'
        }
      },
      boxShadow: {
        soft: '0 6px 24px rgba(0,0,0,0.06)',
        // ADDED
        elevated: '0 10px 30px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
        subtle: '0 1px 3px rgba(0,0,0,0.06)'
      }
    }
  },
  plugins: []
}
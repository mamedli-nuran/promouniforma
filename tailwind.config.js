/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0F172A',
          amber: '#F59E0B',
          emerald: '#10B981',
          gray: '#F8FAFC'
        }
      }
    },
  },
  plugins: [],
}

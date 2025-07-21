/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff007f', // rose vif BeatsMarket
        secondary: '#7c3aed', // violet
        background: '#0f0f0f', // fond sombre
        text: '#eee'
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif']
      }
    },
  },
  plugins: [],
}

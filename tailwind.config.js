/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E75480',  // Rose vif BeatsMarket
        secondary: '#5C2A82', // Violet BeatsMarket
        background: '#121212', // Fond sombre
        text: '#FFFFFF', // Texte clair
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        ptsans: ['var(--font-pt-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

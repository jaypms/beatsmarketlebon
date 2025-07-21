/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',   // pour Next.js app directory
    './pages/**/*.{js,ts,jsx,tsx}', // si tu as encore un dossier pages
    './components/**/*.{js,ts,jsx,tsx}', // tes composants
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          400: '#FF6FAF',
          500: '#FF3F8B',
        },
        violet: {
          400: '#8B5CF6',
          500: '#7C3AED',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['PT Serif', 'serif'],
      },
    },
  },
  plugins: [],
}

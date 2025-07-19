import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D33F8D",  // rose vif BeatsMarket
        secondary: "#6F42C1", // violet BeatsMarket
        darkbg: "#121212",
        darkbg2: "#181818"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        ptsans: ["PT Sans", "sans-serif"]
      }
    }
  },
  plugins: []
}

export default config

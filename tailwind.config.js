/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {

      extend: {
        fontFamily: {
          neue: ["Bebas Neue", "sans-serif"],
          kaushan: ["Kaushan Script", "cursive"],
          inter: ["Inter", "sans-serif"],
        },
        colors: {
          green: {
            DEFAULT: "#00f260",
          },
          dark: {
            DEFAULT: "#010101",
            100: "#0a0b0e",
            200: "#16181d",
            300: "#16181d",
            500: "#0f1115",
            700: "#202125",
          },
        },
      },
  },
  plugins: [],
}

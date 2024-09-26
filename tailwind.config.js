/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        expand: "expand 0.3s ease-out forwards",
        collapse: "collapse 0.3s ease-out forwards",
        fadeIn: "fadeIn 0.3s ease-in-out forwards",
        fadeOut: "fadeOut 0.3s ease-out forwards",
      },
      keyframes: {
        expand: {
          "0%": { width: "72px" },
          "100%": { width: "260px" },
        },
        collapse: {
          "0%": { width: "260px" },
          "100%": { width: "72px" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      colors: {
        primary: "#F78C21",
        secondary: "#FEF4E9",
        black: "#000000",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};

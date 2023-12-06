/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Inter: ["inter"],
    },
    colors: {
      grey: "#B0B1B3",
      lightgrey: "#E5E5E6",
      dark: "#19191A",
      white: "#FFFFFF",
    },

    lineHeight: {
      main: "2.875rem",
    },
    extend: {},
  },
  plugins: [],
};

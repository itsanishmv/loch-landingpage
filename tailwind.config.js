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
      "text-background": "#F2F2F2",
      dark: "#19191A",
      white: "#FFFFFF",
      blue: "#165DFF29",
    },
    dropShadow: {
      "text-drop-shadow": "0px 4px 4px 0px #00000040",
    },
    lineHeight: {
      main: "2.875rem",
    },

    extend: {
      backgroundImage: {
        "card-gradient":
          "linear-gradient(0deg, #FFFFFF, #FFFFFF),linear-gradient(180deg, rgba(255, 255, 255, 0.2) 27.5%, rgba(22, 93, 255, 0.162) 157.71%)",
      },
    },
  },
  plugins: [],
};

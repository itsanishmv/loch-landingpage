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
      background: {
        "card-gradient":
          "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "slide-animation": "slide 5s linear infinite",
      },
    },
  },
  plugins: [],
};

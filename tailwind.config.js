/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    // Container
    container: {
      center: true,
      padding: "20px",
    },

    extend: {
      // Animation
      keyframes: {
        mode: {
          "0%": { marginLeft: "0px" },
          "100%": { marginLeft: "calc(100% - 13px)" },
        },
      },
      animation: {
        mode: "mode 100ms linear 1 forwards",
        stop: "animation-fill-mode: forwards ",
      },
    },
    // extend END
    // Font Family
    fontFamily: {
      myFont: ["IBM Plex Sans", "sans-serif"],
    },
  },
  // theme END
  plugins: [],
  darkMode: "selector",
};

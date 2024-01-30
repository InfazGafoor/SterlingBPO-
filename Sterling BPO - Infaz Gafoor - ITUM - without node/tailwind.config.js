/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkgray: {
          "100": "#b1b1b1",
          "200": "rgba(177, 177, 177, 0.15)",
          "300": "rgba(177, 177, 177, 0.7)",
        },
        fuchsia: {
          "100": "#ee14ee",
          "200": "#e108e1",
        },
        gray: {
          "100": "#181818",
          "200": "#0d0d0d",
          "300": "rgba(0, 0, 0, 0.6)",
          "400": "rgba(255, 255, 255, 0.1)",
          "500": "rgba(0, 0, 0, 0.5)",
          "600": "rgba(255, 255, 255, 0.5)",
          "700": "rgba(0, 0, 0, 0.1)",
          "800": "rgba(255, 255, 255, 0.15)",
          "900": "rgba(255, 255, 255, 0.4)",
          "1000": "rgba(0, 0, 0, 0.4)",
          "1100": "rgba(12, 18, 0, 0.95)",
        },
        black: "#000",
        gainsboro: "rgba(217, 217, 217, 0.2)",
        brown: "#953a3a",
      },
      spacing: {},
      fontFamily: {
        "times-new-roman": "'Times New Roman'",
        "league-spartan": "'League Spartan'",
        "zilla-slab": "'Zilla Slab'",
        "dancing-script": "'Dancing Script'",
        rubik: "Rubik",
        "cocogoose-narrow": "'Cocogoose Narrow'",
      },
      borderRadius: {
        mini: "15px",
        "31xl": "50px",
        xl: "20px",
        "11xl": "30px",
        "61xl": "80px",
        "8xs": "5px",
      },
    },
    fontSize: {
      "3xl": "1.38rem",
      base: "1rem",
      "5xl": "1.5rem",
      xl: "1.25rem",
      "11xl": "1.88rem",
      "161xl": "11.25rem",
      sm: "0.88rem",
      lg: "1.13rem",
      "9xl": "1.75rem",
      "19xl": "2.38rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

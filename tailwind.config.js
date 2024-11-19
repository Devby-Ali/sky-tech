/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightishBlue: {
          50: "#EBF1FF",
          100: "#D6E2FF",
          200: "#ADC6FF",
          300: "#85A9FF",
          400: "#6190FF",
          500: "#3772FF",
          600: "#004BFA",
          700: "#0037B8",
          800: "#00257A",
          900: "#00123D",
          950: "#00091F",
        },
        darkColor: "#111827",
        darkBox: "#242a38"
      },
      boxShadow: {
        normal: "0px 1px 12px rgba(0, 0, 0, 0.07)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        EstedadThin: "Estedad Thin",
        EstedadLight: "Estedad Light",
        EstedadMedium: "Estedad Medium",
        EstedadBold: "Estedad Bold",
        MikhakWoff2one: "Mikhak-woff2-1",
        Dirooz: "Dirooz",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          md: "3rem",
          lg: "4rem",
        },
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
});

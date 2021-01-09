module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: "#0A192F",
        brand_light: "#172a45",
        org: "#F75C03",
        lead: "#CCD6F6",
        lead_light: "#8892B0",
      },
      fontFamily: {
        lead: ["Anton"],
        text: ["Open Sans"],
        mono: ["'Space Mono', monospace"],
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      width: {
        300: "300px",
        30: "32%",
      },
      height: {
        300: "300px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

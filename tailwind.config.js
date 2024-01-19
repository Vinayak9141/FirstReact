module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_4c": "#0000004c",
          "900_0c": "#0000000c",
          "900_87": "#00000087",
          "900_75": "#00000075",
          "900_01": "#0d0d0d",
          "900_02": "#030406",
        },
        gray: {
          50: "#f9f9f9",
          100: "#f5f5f5",
          "50_99": "#f9f9f999",
          "50_7e": "#f9f9f97e",
        },
        orange: { A200: "#ffad33" },
        blue_gray: { "100_75": "#d9d9d975", "100_e5": "#d9d9d9e5" },
        red: { 300: "#e07575", 600: "#db4444" },
        green: { A400: "#00ff66" },
        yellow: { 400: "#eeff61" },
        teal: { 900: "#184947" },
        deep_orange: { A700: "#fa1214" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { poppins: "Poppins", inter: "Inter" },
      boxShadow: { bs: "0px 1px  13px 0px #0000000c" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // fontFamily: {
    //   sans: ["SFProDisplay", "sans-serif"],
    // },
    extend: {
      colors: {
        primary: "#d64c4c",
        primaryDarker: "#863333",
        white: "#fff",
        black: "#00060C",
      },
      backgroundImage: {},
      borderRadius: {
        "50%": "50%",
      },
      boxShadow: {},
      spacing: {
        17: "1.063rem",
        10.5: "0.656rem",
        102: "6.375rem",
        184: "11.5rem",
        158: "9.875rem",
        253: "15.813rem",
        171: "10.688rem",
      },
      maxWidth: {},
      minWidth: {},
      width: {},
      height: {},
      fontSize: {
        18: "1.125rem",
        14: "0.875rem",
        h1: "3.563rem",
        h2: "1.875rem",
        h3: "1.2rem",
        p: "0.75rem",
        span: "1rem",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      code: ["Fira Code", "sans-serif"],
      title: ["Playfair Display", "serif"],
    },
    extend: {},
  },
  plugins: [],
});

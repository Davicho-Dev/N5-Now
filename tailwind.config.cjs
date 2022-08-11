/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [ "./src/**/*.{ts,tsx}", "./index.html" ],
  darkMode: "class",
  theme: {
    extend: {}
  },
  plugins: [
    require( "@tailwindcss/typography" ),
    require( "@tailwindcss/line-clamp" ) ]
};

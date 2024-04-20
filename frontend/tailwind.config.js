/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['Onest', 'Onest Variable']
      }
    },
  },

  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar')
  ],
  darkMode:'class'
});
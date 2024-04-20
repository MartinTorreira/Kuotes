/** @type {import('tailwindcss').Config} */
module.exports = {
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
    require('flowbite/plugin','tailwind-scrollbar')
  ],
  darkMode:'class'
}
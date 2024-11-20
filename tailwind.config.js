/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'], 
      },
      colors:{
        but_color:'#458FF6',
        list_color:'#1F1534',
      }
    },
  },
  plugins: [],
}
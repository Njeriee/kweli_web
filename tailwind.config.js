/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor:{
        'home-bg-color':'#040404',
        'card': '#ebebeb'
      }
    },
  },
  plugins: [],
}

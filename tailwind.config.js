/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,php}",'./api/**/*.php',"./index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms')
    
  ],
}
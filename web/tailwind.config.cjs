/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx", 
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/background-img.png')"
      },
    },
  },
  plugins: [],
}

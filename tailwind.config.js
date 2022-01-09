const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif']
      }
    },
    colors: {
      white: '#fff',
      gray: {
        900: '#171838'
      },
      teal: {
        ...colors.teal,
        500: '#3aa39f'
      }
    }
  },
  plugins: [],
}

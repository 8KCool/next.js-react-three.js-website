/* eslint-disable */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        special: '#032174',
        primary: '#5B34EA',
        secondary: '#141B41',
        dark: '#202635',
        light: colors.gray[200],
        grey: colors.gray[600],
      },
      fontFamily: {
        sans: ['Sarabun', 'sans-serif'],
        roboto: ['Roboto Mono', 'monospace'],
        blanka: ['Blanka', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

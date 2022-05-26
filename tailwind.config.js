/* eslint-disable */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        special: '#032174',
        primary: '#5B34EA',
        secondary: '#141B41',
        dark: '#202635',
        light: colors.gray[200],
        // grey and light-grey was intensionally named
        // so they don't match with tailwindcss gray
        grey: colors.gray[600],
        'light-grey': '#283145',
      },
      screens: {
        md2: '850px',
      },
      fontFamily: {
        sans: ['Sarabun', 'sans-serif'],
        roboto: ['Roboto Mono', 'monospace'],
        blanka: ['Blanka', 'sans-serif'],
      },
      height: {
        '1vh': '10vh',
      },
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translateY(0px) scale(1)',
          },
          '33%': {
            transform: 'translateY(-10px) scale(1.1)',
          },
          '66%': {
            transform: 'translateY(10px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

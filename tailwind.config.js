/* eslint-disable */
const { url } = require('inspector')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        //  "aboutSection": "url(https://bbdu.ac.in/wp-content/uploads/2020/05/banner-background-5.jpg)",
        "blogSection": "/images/trigan-section-bg.jpg",
        // "roadMapSection": "url('/images/1.jpg')",
      },
      colors: {
        special: '#3898EC',
        primary: 'rgb(72, 31, 255)',
        secondary: '#5E1FFF',
        dark: '#202635',
        light: colors.gray[200],
        // grey and light-grey was intensionally named
        // so they don't match with tailwindcss gray
        grey: colors.gray[600],
        'light-grey': '#283145',
      },
      screens: {
        xs: '400px',
        md2: '850px',
        sm2: '520px',
        xxs: '300px'
      },
      fontFamily: {
        m_plus_rounded_1c: ['"M PLUS Rounded 1c"', 'sans-serif'],
      },
      height: {
        '1vh': '10vh',
      },
      scale: {
        customScale: 'var(--headerScale)',
      },
      animation: {
        blob: 'blob 7s infinite',
        lineH: 'lineH  4s infinite',
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
        lineH: {
          '0%': {
            transform: 'scaleY(0)'
          },
          '50%':
          {
            transform: 'scaleY(1)'
          },
          '50.1%':
          {
            transform: 'scaleY(1)'

          },
          '100%': {
            transform: 'scaleY(0)'

          }
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}

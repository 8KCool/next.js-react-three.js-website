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
        blogSection: '/images/trigan-section-bg.jpg',
        // "roadMapSection": "url('/images/1.jpg')",
      },
      colors: {
        neutralBlack: { 50: '#212529' },
        neutralGray: { 10: '#F2F6FB' },
        special: '#3898EC',
        primary: 'rgb(72, 31, 255)',
        tpurple: '#A855F7',
        secondary: '#5E1FFF',
        dark: '#202635',
        light: colors.gray[200],
        // grey and light-grey was intensionally named
        // so they don't match with tailwindcss gray
        grey: colors.gray[600],
        'light-grey': '#283145',
        'gradient-grey': 'rgba(255, 255, 255, 0.3) 13.84%',
        'gradient-grey-2': 'rgba(255, 255, 255, 0.1) 74.14%',
        'gradient-dark-grey': 'rgba(0, 0, 0 , 98%) 13.84%',
        'gradient-dark-grey-2': 'rgba(0, 0, 0 , 80%) 74.14%',
      },
      screens: {
        xs: '400px',
        md2: '850px',
        sm2: '520px',
        xxs: '300px',
        xl: '1279px',
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
        lineH: 'lineH  8s alternate infinite',
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
            height: '0%',
          },
          '33%': {
            height: '120%',
          },
          '66%': {
            height: '300%',
          },
          '100%': {
            height: '500%',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

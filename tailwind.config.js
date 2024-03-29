const defaultTheme = require('tailwindcss/defaultTheme')


function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}, ${opacityValue}))`;
    }
    return `rgb(var(${variableName}))`;
  }
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '6rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        '2xl': '1280px',
        '3xl': '1280px',
        '4xl': '1280px'
      }
    },
    fontFamily: {
      rale: "'RaleWay', sans-serif",
      suez: "'Suez One', serif"
    },
    extend: {
      colors: {
        primary: withOpacity('--core-primary-color-rgb'),
        accent:  withOpacity('--core-accent-color-rgb'),
        warn: withOpacity('--core-warn-color-rgb'),
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class', // only generate classes
    }),
  ],
}


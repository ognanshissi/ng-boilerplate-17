const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      rale: "'Raleway', sans-serif",
      suez: "'SuezOne', serif"
    },
    extend: {
      fontFamily: {
        'sans': ['"Raleway"', ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
        padding: 10,
      },
      colors: {
        primary: {
          DEFAULT: 'var(--primary-color)',
        },
        accent: {
          DEFAULT: 'var(--accent-color)',
        },
        warn: 'var(--warn-color)',
      },
    },
  },
  plugins: [],
}


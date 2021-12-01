const defaultTheme = require('tailwindcss/defaultTheme.js');
const colors = require('tailwindcss/colors.js');

module.exports = {
  purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  jit: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            h2: {
              color: colors.blue['500'],
            },
            a: {
              color: colors.blue['400'],
              '&:hover': {
                color: colors.blue['700'],
              },
            },
          },
        },
      },
      colors: {
        primary: {
          light: colors.blue['300'],
          default: colors.blue['400'],
          dark: colors.blue['700'],
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};

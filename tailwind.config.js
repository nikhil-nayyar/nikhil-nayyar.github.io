const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html", "./themes/boring/**/*.html", "./content/**/*.html"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      serif: ['"Crimson Pro"', ...defaultTheme.fontFamily.serif],
      sans: ['"Work Sans"', ...defaultTheme.fontFamily.sans],
      mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
    },
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      'forest': '#1a2716',
      'ivy': '#a7b4a4',
      'davy': '#5e5d5c',
      'vanilla': '#f2dda4',
      'mauve': '#2b061e'
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

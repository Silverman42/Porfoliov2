const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './dist/**/*.html',
    './pages/**/*.{js,jsx,ts,tsx,vue}',
    './components/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.teal,
        secondary: colors.yellow,
      },
      fontFamily: {
        sans: ['Sofia Pro Regular', 'system-ui'],
        serif: ['ui-serif', 'Georgia'],
        mono: ['SF Mono Regular', 'SFMono-Regular'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

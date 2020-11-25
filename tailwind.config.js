// tailwind.config.js

//figure out the config for colors later
// const colors = require('tailwindcss/colors')


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // colors: {
      //   gray: colors.trueGray,
      //   indigo: colors.indigo,
      //   red: colors.rose,
      //   yellow: colors.amber,
      // },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        animation: ['hover', 'focus'],
      }
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],

  },
  plugins: [
    
  ],
}
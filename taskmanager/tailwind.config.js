module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: theme => theme('colors'),
      textColor: {
      'primary': '#009adc',
      'secondary': '#27d7a1',
      'danger': '#e3342f',
      }
    },
  },
  variants: {
    extend: {
      textColor: ['active'],
    },
  },
  plugins: [],
}

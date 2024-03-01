/** @type {import('tailwindcss').Config} */
const FormKitVariants = require('@formkit/themes/tailwindcss')

module.exports = {
  content: [
    './blocks/**/*.vue',
    './components/**/*.vue',
    './configs/formKitTheme.ts',
  ],
  theme: {
    screens: {
      'sm': '768px',
      'md': '1240px',
      'lg': '1560px',
      'xl': '1880px',
      '2xl': '2520px',
    },
  },
  plugins: [FormKitVariants],
}

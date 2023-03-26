/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.vue',
  ],

  theme: {
    fontFamily: {
      serif: ['Lora', 'serif'],
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        'dark-grey': '#383A39',
        'dark-brown': '#271D15',
        'prune': '#413332',
        'light-brown': '#97714A',
        'light-grey': '#383A39'
      },
      boxShadow: {
        'custom': '0px 0px 8px 2px rgba(0, 0, 0, 0.25)',
      }
    },
  },

};

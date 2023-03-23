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
        'very-dark-brown': '#32281E',
        'dark-brown': '#56412C',
        'light-brown': '#97714A',
      },
    },
  },

};

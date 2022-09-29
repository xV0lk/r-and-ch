/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        lobs: ['Lobster', 'sans-serif'],
      },
      backgroundImage: {
        'patt-food': "url('/svg/patterns/i-like-food.svg')",
        'patt-cross': "url('/svg/patterns/hideout.svg')",
        'patt-rock': "url('/svg/patterns/rock-food.svg')",
        'patt-rock2': "url('/svg/patterns/rock-food2.svg')",
        'patt-skull': "url('/svg/patterns/skulls.svg')",
        'patt-bubbles': "url('/svg/patterns/bubbles.svg')",
        'patt-plus': "url('/svg/patterns/plus.svg')",
      },
      colors: {
        darkgrad: {
          1: '#434343',
          2: '#000000',
        },
        bluegrad: {
          1: '#09203f',
          2: '#537895',
        },
        graygrad: {
          1: '#29323c',
          2: '#485563',
        },
        orange: {
          1: '#F68522',
        },
      },
    },
  },
  plugins: [],
}

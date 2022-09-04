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
    },
  },
  plugins: [],
};

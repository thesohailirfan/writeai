/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tall': { 'raw': '(min-height: 920px)' },
        'short': { 'raw': '(min-height: 840px)' },
        'small': { 'raw': '(min-height: 760px)' },
        'little': { 'raw': '(min-height: 735px)' },
        'tiny': { 'raw': '(min-height: 700px)' },
      }
    },
  },
  plugins: [],
}
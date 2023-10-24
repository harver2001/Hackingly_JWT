/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {colors: {
    transparent: 'transparent',
    current: 'currentColor',
    'white': '#ffffff',
    'primary': '#F4F2F7',
    'secondary': '#5161E9',
    'tertiary': '#2D2D2D',
    'black': '#000000',
    'gray' : '#8C8C8C',
    'input': '#e8f0fe',
  },
    extend: {},
  },
  plugins: [],
}
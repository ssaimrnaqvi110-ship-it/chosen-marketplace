const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        chosen: {
          cream: '#F5F0E8',
          sand: '#E8DED0',
          brown: '#5B4032',
          dark: '#38271F',
          accent: '#D7C2A5',
          text: '#29231F',
          white: '#FFFFFF',
        },
      },
      boxShadow: {
        chosen: '0 12px 30px rgba(56, 39, 31, 0.12)',
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};

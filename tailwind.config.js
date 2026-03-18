/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0A1628',
          light: '#0D1E3C',
        },
        gold: {
          DEFAULT: '#C9A96E',
          light: '#D4B882',
        },
        ivory: '#F8F7F4',
      },
      boxShadow: {
        'gold': '0 10px 40px rgba(201, 169, 110, 0.25)',
        'navy': '0 10px 40px rgba(10, 22, 40, 0.12)',
      },
    },
  },
  plugins: [],
};

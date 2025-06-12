/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f1',
          100: '#dcf2de',
          200: '#bce5c1',
          300: '#8dd196',
          400: '#5bb665',
          500: '#C7E8CA', // Cor principal
          600: '#a8d4ac',
          700: '#8bc190',
          800: '#6fa674',
          900: '#5a8a5f',
        }
      }
    },
  },
  plugins: [],
};
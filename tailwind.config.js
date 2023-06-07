/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          50:  '#ccccd7',
          100: '#b3b3c4',
          200: '#9999b0',
          300: '#80809c',
          400: '#666688',
          500: '#555571',
          600: '#44445b',
          700: '#333344',
          800: '#22222d',
          900: '#111117',
        },
      },
      fontFamily: {
        sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
        serif: ['Barlow Condensed', ...defaultTheme.fontFamily.serif],
        mono: ['Metal', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'm': { 'max': '978px' },
      'bs': {'min':'1680px'},
    },
    extend: {
      backgroundImage: {
        'hero': "url('./src/assets/cornered-stairs.png')"
      },
      fontFamily: {
        'poppins' : ['Poppins', 'sans-serif']
      },
      animation: {
        text: 'text 5s ease infinite',
        border: 'border 4s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        border: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
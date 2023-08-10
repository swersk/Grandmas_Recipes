/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing-regular': ['DancingScript-regular', 'mono'],
        'dancing-bold': ['DancingScript-Bold', 'mono'],
        'satoshi-light': ['Satoshi-Light', 'mono'],
        'satoshi-regular': ['Satoshi-Regular', 'mono'],
        'satoshi-medium': ['Satoshi-Medium', 'mono'],
        'gambarino': ['Gambarino-Regular', 'mono'],
      },
      textShadow: {
        'default': '0 2px 0 #000',
        'md': '0 2px 2px #000',
        '2xl': '1px 1px 5px rgb(33 34 43 / 20%)',
        '3xl': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
        'h2': '0 0 3px #FF0000, 0 0 5px #0000FF',
        'h1': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
      },
      boxShadow: {
        button: '0 3px 9px 0 rgba(0, 0, 0, 0.09)',
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('tailwindcss-box-shadow'),
  ],
}


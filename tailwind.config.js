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
        'satoshi-bold': ['Satoshi-Bold', 'mono']
      }
    },
  },
  plugins: [],
}


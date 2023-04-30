/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
      '2xl': '1536px',
      '3xl': '1728px',
    },
    extend: {
      colors: {
        grey: '#dfdfdf',
        orange: '#d87d4a'
      },
      letterSpacing: {
        '2px': '2px',
      },
      spacing: {
        '5px': '5px',
        '6px': '6px',
        '10px': '10px',
        '15px': '15px',
        '19px': '19px',
        '50px': '50px',
        '18': '72px',
        '25': '100px',
        '27': '108px',
        '30': '120px',
        '50': '200px',
      }
    },
  },
  plugins: [],
}


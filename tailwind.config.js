/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
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


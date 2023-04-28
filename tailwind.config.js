/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: '#dfdfdf',
        orange: '#d87d4a'
      },
      letterSpacing: {
        '2px': '2px',
      },
    },
  },
  plugins: [],
}


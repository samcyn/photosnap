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
        'thirds': '3.33333px',
        'fourths': '4.16667px'
      },
      spacing: {
        '1px': '1px',
        '1.5px': '1.5px',
        '5px': '5px',
        '6px': '6px',
        '10px': '10px',
        '15px': '15px',
        '19px': '19px',
        '30px': '30px',
        '50px': '50px',
        '13': '52px',
        '38px': '38px',
        '54px': '54px',
        '17': '68px',
        '18': '72px',
        '25': '100px',
        '27': '108px',
        '28': '112px',
        '30': '120px',
        '34': '136px',
        '35': '140px',
        '43': '172px',
        '50': '200px',
        '68': '272px',
        '294px': '294px',
        '375px': '375px',
        '125': '500px'
      },
      lineHeight: {
        '10px': '10px',
        '17px': '17px',
        '25px': '25px',
        '12': '48px',
      },
      fontSize: {
        '13px': '13px',
        '15px': '15px',
        '18px': '18px',
        '32px': '32px',
        '40px': '40px',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['kanit', 'sans'],
      },
      maxWidth: {
        80: '80px',
        235: '235px',
        600: '600px',
        500: '500px',
        400: '400px',
        450: '450px',

      },
      spacing: {
        190: '190px',
        75: '75px',
        107: '107px'
      },
      width: {
        500: '500px',
        400: '400px',
        366: '366px',
        344: '344px'
      },
      height: {
        243: '243px',
        950: '950px',
        500: '500px',
        171: '171px'
      },
      colors: {
        'sds-bg': '#201F1F',
        'sds-orange': '#E79231',
        'sds-text': '#D8E1F2',
        'sds-secondary': '#CFE1EF',
        'sds-gray': '#423F3F'
      },
      textUnderlineOffset: {
        20: '20px'
      },
      backgroundImage: {
        'section-2': "url('../src/assets/images/section-2.png')",
        'section-4': "url('../src/assets/images/section-4.png')",
        'career': "url('../src/assets/images/career.png')",
        'service': "url('../src/assets/images/service-hero.png')",
        'career-2': "url('../src/assets/images/career-2.png')",
        'login': "url('../src/assets/images/elipse.png')",
      },
      boxShadow: {
        'home-service': '0px 4px 30px 0px #BFBEBE',
        'login': '-5px -8px 10px 0px #BFBEBE'
      },
      transformOrigin: {
        'top-left-1/3-3/4': '33% 75%',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 2s linear',
        'accordion': 'accordion 0.5s linear',
        'accordion2': 'accordion2 0.5s linear',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(1.5rem)' },
          to: { transform: 'translateX(-10%)' },
        },
        'accordion': {
          from: { transform: 'translateX(0rem)' },
          to: { transform: 'translateX(-100px)'},
        },
        'accordion2': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    }
  },
  plugins: [],
}
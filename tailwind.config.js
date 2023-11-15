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
        80:'80px',
        235: '235px',
        600: '600px',
        500: '500px',
        400: '400px',

      },
      width: {
        500: '500px',
        400: '400px',
        366: '366px'
      },
      height: {
        243: '243px',
        932: '932px',
        500: '500px',

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
      }
    }
  },
  plugins: [],
}
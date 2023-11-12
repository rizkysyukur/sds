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
        235: '235px',
        600: '600px',
        500: '500px',
      },
      height: {
        243: '243px',
        932: '932px',
        500: '500px',
      },
      colors: {
        'sds-bg': '#201F1F',
        'sds-orange': '#E79231',
        'sds-text': '#D8E1F2'
      },
      backgroundImage: {
        'section-2': "url('../src/assets/images/section-2.png')",
        'section-4': "url('../src/assets/images/section-4.png')",
        'career': "url('../src/assets/images/career.png')",
        'service': "url('../src/assets/images/service-hero.png')",
      }
    }
  },
  plugins: [],
}
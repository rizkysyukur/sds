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
      colors: {
        'sds-bg': '#201F1F',
        'sds-orange': '#E79231',
        'sds-text': '#D8E1F2'
      }
    }
  },
  plugins: [],
}
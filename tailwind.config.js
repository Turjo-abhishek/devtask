/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '428px': '428px'
      },
      backgroundImage:{
        'hero-pattern': "url('/img/hero-pattern.svg')"
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'},
      fontFamily: {
        'poppins': 'poppins',
      },
    extend: {
      grayscale: {
        80: '80%',
      },
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      color: {
        armyGreen: "#665E28",
        White: "#FCFCFA",
        black: "#000000",
        offWhite: "#E9E2C9",
        green: "#6D8338"
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms')
  ],
}

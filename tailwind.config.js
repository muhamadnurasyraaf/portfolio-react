/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        pop: ['Poppins'],
        mont: ['Montserrat Alternates'],
        mon:['Montserrat']
      },
      colors:{
        body:'#161618',
        txt: '#ff004f'
      }
    },
  },
  plugins: [],
}


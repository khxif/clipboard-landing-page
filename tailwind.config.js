/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      container:{
        center:true,
        padding:'2.5rem'
      },
      fontFamily:{
        'bai-jamurjee' : ['Bai Jamjuree, sans-serif']
      },
      colors:{
        'strongCyan':'hsl(171, 66%, 44%)',
        'lightBlue': 'hsl(233, 100%, 69%)',
        'darkGrayishBlue': 'hsl(210, 10%, 33%)',
        'grayishBlue': 'hsl(201, 11%, 66%)'
      }
    },
  },
  plugins: [],
}

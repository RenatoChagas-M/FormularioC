/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '10%' : '10%',
        '20%' : '20%',
        '30%' : '30%',
        '40%' : '40%',
        '50%' : '50%',
        '60%' : '60%',
        '70%' : '70%',
        '80%' : '80%',
        '90%' : '90%',
      },
      width: {
        '10%' : '10%',
        '20%' : '20%',
        '30%' : '30%',
        '40%' : '40%',
        '50%' : '50%',
        '60%' : '60%',
        '70%' : '70%',
        '80%' : '80%',
        '90%' : '90%',
      },
      fontFamily: {
        'Poppins' : [ 'Poppins', 'sans-serif' ],
      },
      boxShadow: {
        'Perfect' : 'box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
      },
    },
  },
  plugins: [],
}


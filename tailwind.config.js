/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '10/1' : '10%',
        '20/1' : '20%',
        '30/1' : '30%',
        '40/1' : '40%',
        '50/1' : '50%',
        '60/1' : '60%',
        '70/1' : '70%',
        '80/1' : '80%',
        '90/1' : '90%',
      },
      width: {
        '10/1' : '10%',
        '20/1' : '20%',
        '30/1' : '30%',
        '40/1' : '40%',
        '50/1' : '50%',
        '60/1' : '60%',
        '70/1' : '70%',
        '80/1' : '80%',
        '90/1' : '90%',
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


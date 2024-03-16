/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: { 500: '#D11242' },
        gray: {300:'#848484', 400: '#555555', 600: '#19191A'},
      },
      fontFamily: {
        OpenSans: ["Open Sans"],
        CormorantGaramond: ['Cormorant Garamond'],    
    },
    },
  },
  plugins: [],
}
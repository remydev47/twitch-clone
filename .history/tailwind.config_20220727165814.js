/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      sm: '640px',
      md:'768px',
      lg:'1028px',
      xl:'1280px',

      '2xl' : '1600px',
      '3xl' : '1800px'
        }
  },
  plugins: [],
}

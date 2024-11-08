/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
   
    extend: {
  
      backgroundImage:{
      "ideas":"url('../src/assets/ideas/bg-img.jpg')"
      },
      colors: {
        'card-border': '#ddd',
        'gray': '#f8f8f8',
        'light-gray': '#EEEEEE',
        'medium-gray': '#B9B9B9',
        'dark-blue': '#2c353a',
        'dark-gray': '#2A494C',
        'light-teal': '#7BD4CF',
        'medium-teal': '#55C2BC',
        
      
      },
    },
  },
  plugins: [],
}
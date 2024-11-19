/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
   
    extend: {
  
      backgroundImage:{
      "ideas":"url('../src/assets/ideas/bg-img.jpg')",
      "lines":"url('../src/assets/services/line.png')",
      "section-divider":"url('../src/assets/services/section-divider.png')",
      "subscribe":"url('../src/assets/news/subscribe.png')",
      },
      colors: {
        'light-gray1': '#D9D9D9',
        'light-gray2': '#B9B9B9',
        'teal1': '#55C2BC',
        'teal2': '#7BD4CF',
        'dark-gray1': '#2A494C',
        'dark-gray2': '#2C353A',
        'card-gray': '#F8F8F8',
        'card-border': '#dddddd',
        'light-gray': '#EEEEEE',
      },
    },
  },
  plugins: [],
}
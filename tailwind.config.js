/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
      "3xl": "1800px",
    },
    extend: {
      backgroundImage: {
        lines1: "url('../src/assets/services/line1.png')",
        lines2: "url('../src/assets/services/line2.png')",
        lines3: "url('../src/assets/featured-products/line3.png')",
        lines4: "url('../src/assets/featured-products/line4.png')",
        subscribe: "url('../src/assets/news/subscribe.png')",
        map: "url('../src/assets/about/map.png')",
      },
      colors: {
        "light-gray1": "#D9D9D9",
        "light-gray2": "#B9B9B9",
        "teal1": "#55C2BC",
        "teal2": "#7BD4CF",
        "dark-gray1": "#2A494C",
        "dark-gray2": "#2C353A",
        "card-gray": "#F8F8F8",
        "card-border": "#dddddd",
        "light-gray": "#EEEEEE",
        "video-overlay": "#00a99f"
      },
    },
  },
  plugins: [],
};
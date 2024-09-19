/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.{js,jsx,ts,tsx,}",
    "./src/**/*.{js,jsx,ts,tsx,}",
    "./*.{html,css}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans : ['Roboto','sans-serif'],
      },
      gridTemplateColumns: {
        "70/30": "70% 28%"
      }
    },
  },
  plugins: [],
}


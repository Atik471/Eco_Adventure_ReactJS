/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        amatic: ['"Amatic SC"', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        primary: "#6CA12B",
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:"#5A5959",
        orange:"#FFEAAE",
        "Dark-yellow":"#FCCA3F",
        yellow:"#F6820C"
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      purple:"#3f396d",
      blue:"#6f34fe",
      yellow:"#fca61f",
      White:"#ffffff",
      text:"#6c757d",
      Home:"linear-gradient(33deg, rgba(242, 242, 255, 1) 0%, rgba(235, 249, 255, 1) 100%)"
    },
    extend: {},
  },
  plugins: [],
}
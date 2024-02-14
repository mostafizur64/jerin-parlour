/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        headingColor:'#111430',
        paragraphColor:'#666666',
        textColor:'#F63E7B',
        dashboardTextColor:'#878787'
      }
    },
  },
  plugins: [],
}


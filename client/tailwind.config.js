/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heading: '#EEEEEE',
        text: '#00ADB5',
        bgp: '#222831',
        bgs: '#393E46',
        white: '#FFFFFF',
        yellow: '#FFD700',
        softBlue: '#B0C4DE',
        warm: '#F5F5DC'



      }
    },
  },
  plugins: [],
}


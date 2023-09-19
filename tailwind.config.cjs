/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      // backgroundImage: 
      // // "url('../assets/herobg.jpg')"
      // {
      //   'herobg': "url('./assets/herobg1.png')",
      // }
      // ,
      animation: {
        'spin-slow': 'spin 7s linear infinite',
        'pulse-slow': 'pulse 10s linear infinite',
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        // perlin: 
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        universo: ["universo", "sans-serif"],
        latinka: ["latinka", "sans-serif"],
        pixeloid: ["pixeloid", "sans-serif"],
        pixeloidBold: ["pixeloidBold", "bold"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
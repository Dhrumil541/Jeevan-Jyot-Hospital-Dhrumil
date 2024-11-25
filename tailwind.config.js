/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    container:{
      center:true,
      padding:15,
    },
    extend: {
      
        screens: {
          'sm': '640px', // Small screens (default)
          'md': '768px', // Medium screens (tablets)
          'lg': '1024px', // Large screens (laptops)
          'xl': '1280px', // Extra large screens
          '2xl': '1536px', // 2x extra large screens (desktops)
          // Custom breakpoints:
          '3xl': '1920px', // Example for very large screens
          '4xl': '2560px', // Example for ultra-large screens
        },
        colors: {
          'blue-white': 'background:linear-gradient(92.74deg, #86BBF1 0%, #D2EAEF 98.25%)',
        },
      
    },
  },
  plugins: [],
}


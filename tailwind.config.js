/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        content:'#00224D',
        secondary: '#64748b',
        dark:'#0f172a',
        blob: '#C9806A',
      },
      
      screens:{
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}


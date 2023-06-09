/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js}",'./index.html'],
  theme: {
    extend: {
      fontFamily:{
      'sans':['Poppins']
      },
      colors:{
        primary:'#0067f3'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#0067f3",
        
"secondary": "#F000B8",
        
"accent": "#37CDBE",
        
"neutral": "#3D4451",
        
"base-100": "#FFFFFF",
        
"info": "#3ABFF8",
        
"success": "#36D399",
        
"warning": "#FBBD23",
        
"error": "#F87272",
        },
      },
    ],
  },
}

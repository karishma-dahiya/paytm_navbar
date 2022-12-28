/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    colors:{
      '1':'#fafafa',
      '2':'#00baf2',
      '3':'#002970',
      '4':'#f6f6f6',
    },
    extend: {},
    screens:{
      'sm':{'min':'640px','max':'1023px'},
      'lg':{'min':'1024px'}
    },
    
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
      
  }
  ],
}

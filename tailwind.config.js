/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode : 'class',
  theme: {

    screens: {
      'xs': '480px',
      
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',
    },

    extend: {


      fontFamily : {
        'dana': 'dana',
        'dana-medium' : 'dana medium',
        'dana-bold' : 'dana bold',
        'morabba': 'morabba',
        'morabba-medium' : 'morabba medium',
        'morabba-bold' : 'morabba bold',

      },


      colors: {
        'brown': {
          10  :'#FED7AA33',
          50  : '#B55A5A',
          100 : '#ECE0D1',
          300 : '#DBC1AC',
          600 : '#967259',
          900 : '#634832',
        }
      },


      boxShadow: {
        'light' : '0px 1px 10px 0px #0000000D',
      },


      borderRadius: {
        '4xl' : '2rem',
      },

      letterSpacing: {
        'tightest' : '-.065em'
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '0.625'
        }
  
      },

      backgroundImage: {
        'home-mobile' : 'url(../img/headerBgMobile.webp)',
        'home-desktop' : 'url(../img/headerBgDesktop.webp)',
      }
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('child', '&>*')
      addVariant('child-hover', '&>*:hover')
    })
  ],
}


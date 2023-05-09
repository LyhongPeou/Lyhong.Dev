/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontSize: {
      title: `1.6rem;`,
      nav: `1.2rem;`,
      welcome: `1.9rem;`, 
      subtext: `1rem`,
      title1: `1.6rem`,
      title2: `2.6rem`,
      title3: `3.4rem`,

      smtitle1: `1.2rem`,
      smtitle2: `1.4rem`,
      smtitle3: `1.6rem`,
      
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif' ]
    },
    extend: {},

  },
  plugins: [],
}


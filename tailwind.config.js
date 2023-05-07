/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontSize: {
      title: `1.6rem;`,
      nav: `1.2rem;`,
      welcome: `1.9rem;`, 
      subtext: `1rem`,
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif' ]
    },
    extend: {},

  },
  plugins: [],
}


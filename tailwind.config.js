/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'wave-pattern': "url('./assets/img/wave-white.png')",
        'wave-pattern-dots': "url('./assets/img/pattern-white-dots.png')",
        'pattern-characters-red': "url('./assets/img/pattern-characters-red.png')",
        'character-mario': "url('./assets/img/character-l.png')",
        'wave-pink': "url('./assets/img/wave-pink.png')",
        'yellow-dots': "url('./assets/img/pattern-yellow-dots.png')",
      }),
      screens: {
        'xsm': '320px'
      }
    },
  },
  plugins: [],
}
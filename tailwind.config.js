/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      zIndex: {
        'zato': '100',
      }
    },
  },
  plugins: [],
}


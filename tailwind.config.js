/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'fundo-site': "url('/assets/fundo_branco.jpg')"
      }
    },
  },
  plugins: [],
}


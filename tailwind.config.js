module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gray-to-blue': "url('../img/layered-waves-haikei.svg')"
      }
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      josefin: ['Josefin Sans', 'sans-serif']
    }
  },
  plugins: [],
}

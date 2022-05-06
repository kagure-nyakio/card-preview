module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'lexend-deca': ['"Lexend Deca"', 'sans-serif'],
        'big-shoulder' : ['"Big Shoulders Display"', 'cursive']
      },
      colors: {
        'bright-orange': 'hsl(31, 77%, 52%)',
        'dark-cyan': 'hsl(184, 100%, 22%)',
        'very-dark-cyan': 'hsl(179, 100%, 13%)',
        'transparent-white': 'hsla(0, 0%, 100%, 0.75)',
        'very-light-gray': 'hsl(0, 0%, 95%)'
      },
      gridTemplateColumns: {
        '3': 'repeat(3, minmax(270px, 1fr))'
      }
    },
  },
  plugins: [],
}


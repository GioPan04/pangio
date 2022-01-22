module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Nunito', 'sans-serif'],
        'subtitle': ['Quicksand', 'sans-serif'],
        'body': ['Comfortaa', 'cursive'],
      },
      flexGrow: {
        '2': 2,
        '3': 3,
      },
      colors: {
        primary: '#0D1821',
        secondary: '#E03616',
        accent: '#008148',
      },
      minHeight: {
        'screen-80': '80vh',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

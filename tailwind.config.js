module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flexGrow: {
        '2': 2
      },
      colors: {
        primary: '#0D1821',
        secondary: '#E03616',
        accent: '#008148',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

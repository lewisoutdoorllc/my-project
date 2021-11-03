module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray_1: '#282828',
        gray_2: '#424242',
        gray_3: '#565656',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

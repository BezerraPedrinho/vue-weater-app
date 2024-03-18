/** @type {import('tailwindcss').Config} */
export default {
  content: ['.index.html', './src/**/*.{vue,js,ts,jsx,tsx'],
  theme: {
    extend: {
      'weather-primary': '#00668a',
      'weather-secondary': '#004E71',
    },
    fontFamily: {
      Roboto: ['Roboto, sans-serif'],
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#131617',
        secondary: '#cb5454',
        trans: 'rgba(0,0,0,0.7)',
        trans1: 'rgba(0,0,0,0.5)',
      }
    },
  },
  plugins: [],
}

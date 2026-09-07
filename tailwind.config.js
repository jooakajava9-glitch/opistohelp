/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0f1419',
        darker: '#0a0e13',
        accent: '#00ff88',
        accentLight: '#00ff99',
      },
    },
  },
  plugins: [],
}
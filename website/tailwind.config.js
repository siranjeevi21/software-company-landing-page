/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: '#1d0c4d',
        accentPink: '#ff6ec4',
        accentOrange: '#ffc837',
        accentGreen: '#32cd32',
        lightGray: '#d3d3d3',
        textWhite: '#ffffff',
        textPurple: '#b5a8d0',
      },
    },
  },
  plugins: [],
}
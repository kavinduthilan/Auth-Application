/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e1b382',
        secondary: '#c89666', 
        tertiary: '#2d545e',
        quaternary: '#1234b',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            Poppins: ['Poppins', 'sans-serif'],
            Asap: ['Asap', 'sans-serif'],
            Archivo: ['Archivo', 'sans-serif']
        }
    },
  },
  plugins: [],
}
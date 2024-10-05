/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            // Poppins: ['Poppins', 'sans-serif'],
            // Asap: ['Asap', 'sans-serif'],
            // Archivo: ['Archivo', 'sans-serif'],
            primary: ['Source-Sans-3', 'sans-serif'], // Use for: Product descriptions, user reviews, general text, forms, and FAQs.
            secondary: ['Poppins', 'sans-serif'], // Use for: Headings, titles, category names, and banners.
            accent: ['Nunito', 'sans-serif'], // Use for: Buttons, CTAs, and navigation links.
        },
        colors: {
            'dark-green': '#1e3f48',
            primary: {
                'Soft-Navy-Blue': '#2C3E50',
                'Light-Beige': '#FAF3E0'

            },
            secondary: {
                'Sage-Green': '#6C7A89',
                'Charcoal-Gray ': '#34495E'
            },
            accent: {
                'Warm-Yellow': '#F39C12',
                'Coral-Red': '#E74C3C'
            },
            highlight: {
                'Sky-Blue': '#3498DB',
                'Peach': '#FAD7A0',
            }
        }
    },
  },
  plugins: [],
}
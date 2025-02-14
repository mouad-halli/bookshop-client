/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			primary: [
  				'Source-Sans-3',
  				'sans-serif'
  			],
  			secondary: [
  				'Poppins',
  				'sans-serif'
  			],
  			accent: [
  				'Nunito',
  				'sans-serif'
  			]
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
  				Peach: '#FAD7A0'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
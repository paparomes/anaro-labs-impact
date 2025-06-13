import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'urbanist': ['Urbanist', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
			},
			colors: {
				// Anaro Labs Brand Colors
				'anaro-charcoal': '#1a1a1a',
				'anaro-charcoal-light': '#2d2d2d',
				'anaro-charcoal-lighter': '#404040',
				'anaro-lime': '#deff9a',
				'anaro-lime-hover': '#d4f485',
				'anaro-lime-light': '#e7ffb3',
				'anaro-text-primary': '#ffffff',
				'anaro-text-secondary': '#e5e5e5',
				'anaro-text-muted': '#a3a3a3',
				
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'subtle-glow': {
					'0%, 100%': {
						boxShadow: '0 0 5px rgba(222, 255, 154, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 20px rgba(222, 255, 154, 0.6)'
					}
				},
				'lime-pulse': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.7'
					}
				},
				'cinematic-glow': {
					'0%, 100%': {
						textShadow: '0 0 10px rgba(222, 255, 154, 0.3)'
					},
					'50%': {
						textShadow: '0 0 20px rgba(222, 255, 154, 0.6), 0 0 30px rgba(222, 255, 154, 0.3)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'subtle-glow': 'subtle-glow 3s ease-in-out infinite',
				'lime-pulse': 'lime-pulse 2s ease-in-out infinite',
				'cinematic-glow': 'cinematic-glow 3s ease-in-out infinite',
			},
			backgroundImage: {
				'anaro-gradient': 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
				'anaro-texture': 'radial-gradient(circle at 25% 25%, #2d2d2d 0%, #1a1a1a 50%)',
				'lime-gradient': 'linear-gradient(135deg, #deff9a 0%, #d4f485 100%)',
				'cinematic-grain': 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%), url("data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.02"/%3E%3C/svg%3E")',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

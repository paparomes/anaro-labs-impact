
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
				'inter': ['Inter', 'sans-serif'],
			},
			colors: {
				// Anaro Labs Brand Colors
				'anaro-charcoal': '#1a1a1a',
				'anaro-charcoal-light': '#2d2d2d',
				'anaro-charcoal-lighter': '#404040',
				'anaro-lime': '#9ACD32',
				'anaro-lime-hover': '#8FBC2F',
				'anaro-lime-light': '#B8E356',
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
						boxShadow: '0 0 5px rgba(154, 205, 50, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 20px rgba(154, 205, 50, 0.6)'
					}
				},
				'lime-pulse': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.7'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'subtle-glow': 'subtle-glow 3s ease-in-out infinite',
				'lime-pulse': 'lime-pulse 2s ease-in-out infinite',
			},
			backgroundImage: {
				'anaro-gradient': 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
				'anaro-texture': 'radial-gradient(circle at 25% 25%, #2d2d2d 0%, #1a1a1a 50%)',
				'lime-gradient': 'linear-gradient(135deg, #9ACD32 0%, #8FBC2F 100%)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

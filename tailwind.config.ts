
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
				'space': ['Space Grotesk', 'sans-serif'],
				'orbitron': ['Orbitron', 'monospace'],
			},
			colors: {
				// Vibrant Tech Palette
				'electric-blue': 'hsl(214 100% 59%)',
				'neon-green': 'hsl(142 76% 56%)',
				'cyber-purple': 'hsl(263 70% 50%)',
				'plasma-pink': 'hsl(328 85% 70%)',
				'quantum-orange': 'hsl(31 100% 71%)',
				'void-black': 'hsl(0 0% 3%)',
				'space-gray': 'hsl(220 27% 7%)',
				'nebula-dark': 'hsl(215 25% 14%)',
				
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
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(214 100% 59% / 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(263 70% 50% / 0.6), 0 0 60px hsl(142 76% 56% / 0.3)'
					}
				},
				'float-rotate': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-15px) rotate(180deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'float-rotate': 'float-rotate 6s ease-in-out infinite',
			},
			backgroundImage: {
				'cyber-gradient': 'linear-gradient(135deg, hsl(214 100% 59%) 0%, hsl(263 70% 50%) 50%, hsl(142 76% 56%) 100%)',
				'holographic': 'linear-gradient(45deg, hsl(214 100% 59% / 0.1) 0%, hsl(328 85% 70% / 0.1) 25%, hsl(142 76% 56% / 0.1) 50%, hsl(263 70% 50% / 0.1) 75%, hsl(31 100% 71% / 0.1) 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

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
			colors: {
				mep: {
					blue: {
						light: "#4A89DC",
						DEFAULT: "#3A6BC5",
						dark: "#2A4C8F"
					},
					gray: {
						light: "#F5F7FA",
						DEFAULT: "#E6E9ED",
						dark: "#656D78"
					},
					orange: {
						light: "#FFCE54",
						DEFAULT: "#F6BB42",
						dark: "#E9873F"
					}
				},
			colors: {
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
				},
				'shutter-open-horizontal': {
					'0%': { width: '0' },
					'100%': { width: '100%' }
				},
				'shutter-close-horizontal': {
					'0%': { width: '100%' },
					'100%': { width: '0' }
				},
				'shutter-open-vertical': {
					'0%': { height: '0' },
					'100%': { height: '100%' }
				},
				'shutter-close-vertical': {
					'0%': { height: '100%' },
					'100%': { height: '0' }
				},
				'rotate-in': {
					'0%': { transform: 'rotateY(90deg)', opacity: '0' },
					'100%': { transform: 'rotateY(0deg)', opacity: '1' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'shutter-open-h': 'shutter-open-horizontal 0.6s ease-in-out forwards',
				'shutter-close-h': 'shutter-close-horizontal 0.6s ease-in-out forwards',
				'shutter-open-v': 'shutter-open-vertical 0.6s ease-in-out forwards',
				'shutter-close-v': 'shutter-close-vertical 0.6s ease-in-out forwards',
				'rotate-in': 'rotate-in 0.8s ease-out forwards',
				'slide-left': 'slide-in-left 0.6s ease-out forwards',
				'slide-right': 'slide-in-right 0.6s ease-out forwards',
				'fade-in': 'fade-in 0.8s ease-out forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

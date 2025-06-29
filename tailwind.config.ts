
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
				poppins: ['Poppins', 'sans-serif'],
				raleway: ['Raleway', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
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
				// Custom design system colors based on user instructions
				customDark: {
					background: '#0a0f1c', // Very Dark Blue - Full page background
					card: '#1d2736', // Dark Slate Blue - Section backgrounds
				},
				customAccent: '#00bfff', // Neon Blue - Headings, highlights, icons, hover
				customText: {
					body: '#a0a0a0', // Light Gray - Subtext, descriptions
				},
				// Original vibrant theme colors
				vibrant: {
					red: '#ea384c',
					orange: '#F97316',
					black: '#000000e6',
					darkRed: '#7F1D1D',
					lightOrange: '#FDBA74',
				},
				// Star rating colors
				star: {
					active: '#facc15',
					inactive: '#d1d5db',
				},
			},
			boxShadow: {
				'glow-red': '0 0 15px rgba(234, 56, 76, 0.7)',
				'glow-orange': '0 0 15px rgba(249, 115, 22, 0.7)',
				'glow-yellow': '0 0 15px rgba(250, 204, 21, 0.7)',
				'glow-sm': '0 0 10px rgba(0, 191, 255, 0.3)',
				'glow-md': '0 0 20px rgba(0, 191, 255, 0.5)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-main': 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
				'gradient-card': 'linear-gradient(90deg, #ea384c 0%, #F97316 100%)',
				'gradient-dark': 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9))',
				'gradient-hero': 'linear-gradient(90deg, hsla(341, 91%, 68%, 1) 0%, hsla(24, 100%, 83%, 1) 100%)',
				'gradient-section': 'linear-gradient(90deg, hsla(22, 100%, 78%, 1) 0%, hsla(2, 78%, 62%, 1) 100%)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 10px rgba(234, 56, 76, 0.5)' },
					'50%': { boxShadow: '0 0 20px rgba(249, 115, 22, 0.8)' },
				},
				'cursor-pulse': {
					'0%': { transform: 'scale(1) translate(-50%, -50%)' },
					'50%': { transform: 'scale(1.1) translate(-45%, -45%)' },
					'100%': { transform: 'scale(1) translate(-50%, -50%)' },
				},
				'float': {
					'0%': { transform: 'translateY(0px) translateX(0px)' },
					'33%': { transform: 'translateY(-10px) translateX(5px)' },
					'66%': { transform: 'translateY(5px) translateX(-5px)' },
					'100%': { transform: 'translateY(0px) translateX(0px)' },
				},
				'twinkle': {
					'0%, 100%': { opacity: '0.3' },
					'50%': { opacity: '1' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 2s infinite',
				'cursor-pulse': 'cursor-pulse 2s infinite',
				'float': 'float 20s infinite linear',
				'twinkle': 'twinkle 15s infinite ease-in-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

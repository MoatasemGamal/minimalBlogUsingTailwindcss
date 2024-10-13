/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ["./*.html", "./main.js"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Space Grotesk", "IBM Plex Sans Arabic", "sans-serif"],
			},
			colors: {
				background: "rgba(var(--clr-background))",
				"txt-primary": "rgba(var(--clr-txt-primary))",
				"txt-secondary": "rgba(var(--clr-txt-secondary))",
				"accent-primary": "rgba(var(--clr-accent-primary))",
				"accent-secondary": "rgba(var(--clr-accent-secondary))",
			},
		},
	},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				notoSans: "Noto Sans, sans-serif",
			},
			colors: {
				primaryTextColor: "rgb(var(--color-primaryTextColor) / <alpha-value>)",
				activeText: "rgb(var(--color-activeText) / <alpha-value>)",
				activeBkg: "rgb(var(--color-activeBkg) / <alpha-value>)",
				accentColor1: "rgb(var(--color-accentColor1) / <alpha-value>)",
				accentColor2: "rgb(var(--color-accentColor2) / <alpha-value>)",
			},
		},
	},
	plugins: [],
	darkMode: "class",
};

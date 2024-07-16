/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				libre: ["Libre Franklin", "sans-serif"],
			},
			colors: {
				primaryTextColor: "rgb(var(--color-primaryTextColor) / <alpha-value>)",
				activeText: "rgb(var(--color-activeText) / <alpha-value>)",
				activeBkg: "rgb(var(--color-activeBkg) / <alpha-value>)",
				accentColor1: "rgb(var(--color-accentColor1) / <alpha-value>)",
				accentColor2: "rgb(var(--color-accentColor2) / <alpha-value>)",
				lightAccentColor: "rgb(var(--color-lightAccentColor) / <alpha-value>)",
				bgColor: "rgb(var(--color-bgColor) / <alpha-value>)",
				serchInputBg: "rgb(var(--color-serchInputBg) / <alpha-value>)",
				bgTableWithSpacing:
				"rgb(var(--color-bgTableWithSpacing) / <alpha-value>)",
				
				textLight: "rgb(var(--text-light) / <alpha-value>)",
				textMedium: "rgb(var(--text-medium) / <alpha-value>)",
				textDark: "rgb(var(--text-dark) / <alpha-value>)",
				mainBgColor: "rgb(var(--color-mainBgColor) / <alpha-value>)",
				textLightMode: "rgb(var(--color-textLightMode) / <alpha-value>)",
				containerBg: "rgb(var(--color-containerBg) / <alpha-value>)",
				cancelStatus: "rgb(var(--color-cancelStatus) / <alpha-value>)",
				confirmStatus: "rgb(var(--color-confirmStatus) / <alpha-value>)",
				disabledStatus: "rgb(var(--color-disabledStatus) / <alpha-value>)",
				secondaryTextColor:
					"rgb(var(--color-secondaryTextColor) / <alpha-value>)",
				headingTextColor:
					"rgb(var(--color-headingTextColor) / <alpha-value>)",
				iconsColor:
					"rgb(var(--color-iconsColor) / <alpha-value>)",
				containerBg2:
					"rgb(var(--color-containerBg2) / <alpha-value>)",
				divideColor:
					"rgb(var(--color-divideColor) / <alpha-value>)",
			},
			backgroundImage: { bgImg: "url('./data/background.jpg')" },
		},
	},
	plugins: [],
	darkMode: "class",
};

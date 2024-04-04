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
				secondaryTextColor:
					"rgb(var(--color-secondaryTextColor) / <alpha-value>)",
				activeText: "rgb(var(--color-activeText) / <alpha-value>)",
				activeBkg: "rgb(var(--color-activeBkg) / <alpha-value>)",
				accentColor1: "rgb(var(--color-accentColor1) / <alpha-value>)",
				accentColor2: "rgb(var(--color-accentColor2) / <alpha-value>)",
				bgColor: "rgb(var(--color-bgColor) / <alpha-value>)",
				statusCanceled: "rgb(var(--color-statusCanceled) / <alpha-value>)",
				statusComplited: "rgb(var(--color-statusComplited) / <alpha-value>)",
				statusUnconfirmed:
					"rgb(var(--color-statusUnconfirmed) / <alpha-value>)",
				serchInputBg: "rgb(var(--color-serchInputBg) / <alpha-value>)",
				bgTableWithSpacing:
					"rgb(var(--color-bgTableWithSpacing) / <alpha-value>)",
			},
			backgroundImage: { bgImg: "url('./data/background.jpg')" },
		},
	},
	plugins: [],
	darkMode: "class",
};

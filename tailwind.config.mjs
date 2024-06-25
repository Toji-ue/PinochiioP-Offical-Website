/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
                asap: ["Asap", "sans-serif"]
            },
			letterSpacing: {
				'extra-wide': '0.2em',
			},
		},
	},
	plugins: [],
}

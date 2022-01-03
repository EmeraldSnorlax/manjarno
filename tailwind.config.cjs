const colors = require('tailwindcss/colors');
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			body: ['Inter', 'sans-serif'],
			display: ['"JetBrains Mono"', 'monospace'],
		},
	},

	plugins: [
		require('@tailwindcss/typography')
	],
};

module.exports = config;

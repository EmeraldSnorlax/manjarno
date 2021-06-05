const colors = require('tailwindcss/colors')
module.exports = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			colors: {
				'true-gray': colors.trueGray
			}
		},
	},
	plugins: [],
};

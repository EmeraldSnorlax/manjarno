const colors = require('tailwindcss/colors')
module.exports = {
	darkMode: "class",
	purge: [
		"*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			colors: {
				"true-gray": colors.trueGray,
				cream: '#f2eadc',
			}
		},
	},
	plugins: [],
};

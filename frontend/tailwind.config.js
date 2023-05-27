/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			keyframes: {
				float: {
					'0%': {transform: 'translateY(0)'},
					'50%': {transform: 'translateY(-15px)'},
					'100%': {transform: 'translateY(0)'},
				},
			},
			animation: {
				float: 'float 3s ease-in-out infinite',
			},
		},
	},
	plugins: [],
};

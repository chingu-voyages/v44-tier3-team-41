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
				float2: 'float 2s ease-in-out infinite',
			},
			color: {
				textlight: '#fafafa',
				textgary: '#6B7381',
				textdark: '#111829',
				dark1: '#1F2937',
				dark2: '#111829',
				light1: '#fafafa',
			},
		},
	},
	plugins: [],
};

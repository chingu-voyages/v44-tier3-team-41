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
			colors: {
				light1: '#fafafa',
				light2: '#F8FAFC',
				light3: '#F1F5F9',
				light4: '#E2E8F0',
				dark1: '#0F172A',
				dark2: '#1E293B',
				dark3: '#334155',
				dark4: '#475569',
				dark5: '#64748B',
				dark6: '#94A3B8',
				mentor1: '#174ea1',
				mentor2: '#14438b',
				mentor3: '#113875',
				mentor4: '#0e2e5e',
				mentor5: '#0a2348',
				mentor6: '#071832',
			},
		},
	},
	plugins: [],
};

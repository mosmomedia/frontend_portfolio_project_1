module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				header: '#ebfbff',
				body: '#fff',
				footer: '#003333',
			},
			backgroundColor: {
				primary: 'var(--bg-primary)',
				secondary: 'var(--bg-secondary)',
				tertiary: 'var(--color-primary)',
			},
			textColor: {
				primary: 'var(--text-primary)',
				secondary: 'var(--text-secondary)',
				tertiary: 'var(--color-primary)',
			},
			mobile: '768px',
		},
	},
	plugins: [],
};

import type { Config } from 'tailwindcss';

const colors = {
	'grey-dark-1': '#838691',
	'grey-dark-2': '#50565E',
	'grey-light-1': '#B6B9C4',
	'blue-dark-1': '#006FFF',
	'grey-light-2': '#EDEDF0',
	'grey-light-3': '#808893',
	'grey-light-4': '#F4F5F6',
	'blue-dark-2': '#0059CC',
	dark: '#212327'
};

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Core Sans', 'sans-serif'],
				'core-sans': ["'Core Sans'", 'sans-serif']
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			colors
		}
	},
	plugins: []
};

export default config;

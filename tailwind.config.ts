import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				clicker: ['var(--font-clicker-script)'],
				jost: ['var(--font-jost)'],
			},
			colors: {
				choco: {
					DEFAULT: '#67544e',
					light: '#9b7065',
				},
				blue: '#b4c5d5',
			},
			keyframes: {
				breath: {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' },
					'100%': { transform: 'scale(1)' },
				},
			},
			animation: {
				breath: 'breath 1s infinite',
			},
		},
	},
	plugins: [],
};

export default config;

import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				bg: 'var(--clr-bg)',
				'bg-alt': 'var(--clr-bg-alt)',
				primary: 'var(--clr-primary)',
				'primary-alt': 'var(--clr-primary-alt)',
			},
			scale: {
				'400': '4',
			},
		},
	},
	plugins: [],
};
export default config;

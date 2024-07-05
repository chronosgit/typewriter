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
			keyframes: {
				'gallery-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
			},
			animation: {
				'gallery-scroll': 'gallery-scroll 15s linear infinite',
			},
		},
	},
	plugins: [],
};
export default config;

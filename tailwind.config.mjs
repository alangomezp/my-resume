import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens:{
				'xs': '390px'
			},
			keyframes:{
				appear:{
					'0%': {
						transform: 'scale(0.9)'
					},
					'100%': {
						transform: 'scale(1)'
					},
					

					
				}
			},
			animation:{
				appear: 'appear 0.2s ease-in-out '
			}
		},
	},
	plugins: [],
}

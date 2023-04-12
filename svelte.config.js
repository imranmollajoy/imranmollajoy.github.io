import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	kit: {
		adapter: adapter()
	},
	preprocess: [
		mdsvex({
			extensions: ['.md', '.svx'],
			layout: {
				// material: 'src/lib/templates/material.svelte',
				_: 'src/lib/templates/default.svelte'
			}
		}),
		preprocess({
			postcss: true
		})
	]
};

export default config;

import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	kit: {
		adapter: adapter(),
		prerender: {
			enabled: true,
			default: true,
			onError: 'continue'
		}
	},
	preprocess: [
		mdsvex({
			extensions: ['.md']
		})
	]
};

export default config;

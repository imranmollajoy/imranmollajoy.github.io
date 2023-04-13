import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import relativeImages from 'mdsvex-relative-images';
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: true
		})
	},
	preprocess: [
		mdsvex({
			extensions: ['.md', '.svx'],
			layout: {
				// material: 'src/lib/templates/material.svelte',
				_: 'src/lib/templates/default.svelte'
			},
			remarkPlugins: [relativeImages]
		}),
		preprocess({
			postcss: true
		})
	]
};

export default config;

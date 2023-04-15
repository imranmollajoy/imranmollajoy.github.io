import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';
import relativeImages from 'mdsvex-relative-images';
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	kit: {
		adapter: adapter({
			precompress: false,
			pages: 'docs'
		}),
		prerender: {
			crawl: true,
			entries: [
				'*',
				'/posts/category/Web development',
				'/posts/category/Android',
				'/posts/category/Technology'
			]
		}
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

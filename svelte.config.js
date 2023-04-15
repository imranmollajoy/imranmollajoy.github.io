import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import relativeImages from 'mdsvex-relative-images';
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	kit: {
		adapter: adapter({
			precompress: false
		}),
		prerender: {
			crawl: true,
			entries: ['*']
		}
	},
	preprocess: [
		mdsvex({
			extensions: ['.md', '.svx'],
			layout: {
				_: 'src/lib/templates/default.svelte',
				portfolio: 'src/lib/templates/portfolio.svelte'
			},
			remarkPlugins: [relativeImages]
		}),
		preprocess({
			postcss: true
		})
	]
};

export default config;

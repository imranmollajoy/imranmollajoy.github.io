import toc from '@jsdevtools/rehype-toc';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import relativeImages from 'mdsvex-relative-images';
import rehypeSlug from 'rehype-slug';
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
			extensions: ['.md', '.svx'],
			layout: {
				blog: './src/lib/components/templates/blog-layout.svelte'
			},
			remarkPlugins: [relativeImages],
			rehypePlugins: [
				rehypeSlug,
				[
					toc,
					{
						headings: ['h3', 'h2', 'h4'], // Only include <h1> and <h2> headings in the TOC
						cssClasses: {
							toc: 'page-outline', // Change the CSS class for the TOC
							link: 'page-link' // Change the CSS class for links in the TOC
						},
						position: 'afterbegin'
					}
				]
			]
		})
	]
};

export default config;

<script>
	import { onMount } from 'svelte';
	import '../../helpers/prism.css';
	import '../../helpers/prism.js';
	import ImageLoader from '../shared/Image/ImageLoader.svelte';
	import SEO from '../shared/SEO/SEO.svelte';

	export let name;
	export let date;
	export let featuredImg;
	export let excerpt;
	export let slug;
	let src;
	$: ogImage = {
		url: null,
		alt: ''
	};
	// toc is hidden
	$: seo = {
		article: true,
		datePublished: date,
		metadescription: excerpt,
		slug,
		title: name
	};
	onMount(async () => {
		const img = import.meta.glob('/src/routes/posts/**/*.png');
		for (const path in img) {
			if (path.includes(featuredImg)) {
				img[path]().then((mod) => {
					src = mod.default;
					ogImage = {
						alt: `Thumbnail of ${name}`,
						url: src
					};
				});
			}
		}
	});
</script>

<SEO {seo} {ogImage} />
<section class="responsive">
	<div class="grid">
		<!-- <div class="toc l2 m l">
			<div class="sticky">
				<a href="">ok</a>
				<a href=".sd">ok</a>
			</div>
		</div> -->
		<div class="post-body l7 s12">
			<ImageLoader {src} />
			<h1>{name}</h1>
			<p>{date}</p>
			<main>
				<slot />
			</main>
		</div>
		<!-- <div class="sidebar l3 s12">
			<div class="sticky">
				<section>
					<h3>Related</h3>
					<a href="/"><h5>Why are you running?</h5></a>
					<a href="/"><h5>7 reasons why you are still single</h5></a>
				</section>
				<section>
					<h3>Related</h3>
					<a href="/"><h5>Why are you running?</h5></a>
					<a href="/"><h5>7 reasons why you are still single</h5></a>
				</section>
			</div>
		</div> -->
	</div>
</section>

<style lang="scss">
	.sidebar {
	}
	.sidebar section {
		margin-bottom: 1rem;
		padding: 1rem;
		border-radius: 0.8rem;
	}
	.sidebar section h5 {
		margin: 0;
	}
</style>

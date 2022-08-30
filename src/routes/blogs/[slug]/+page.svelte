<script>
	import Image from 'svelte-image';
	import Seo from '$lib/components/shared/SEO/SEO.svelte';
	import '$lib/helpers/prism';
	import '$lib/helpers/prism.css';
	export let data;

	const ogImage = {
		url: data.imageData.meta,
		alt: data.name
	};
	const metadescription = data.excerpt;
	const datePublished = data.date;
</script>

<Seo title={data.name} {metadescription} article={true} {datePublished} {ogImage} />

<div class="row">
	<main class="container">
		<article>
			<!-- {#each data.category as cat}
				<a href={`/blogs/categories/${cat}`} class="button">{cat} </a>
			{/each} -->
			<h1 class="toc-exclude">{data.name}</h1>
			<!-- <img src={data.img.default} alt="" /> -->
			<img src={data.imageData.meta} />
			<div class="post-body">
				{@html data.content}
			</div>
		</article>
	</main>
</div>

<style>
	.row {
		position: relative;
	}
	article {
		margin-top: 6rem;
	}
	.post-body {
		margin-top: 4rem;
	}
</style>

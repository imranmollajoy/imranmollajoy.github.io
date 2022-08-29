<script>
	import Image from 'svelte-image';
	import Seo from '$lib/components/shared/SEO/SEO.svelte';
	import '$lib/helpers/prism';
	import '$lib/helpers/prism.css';
	export let data;
	const openGraphProps = {
		article: true,
		datePublished: data.date,
		image: data.img,
		metadescription: data.excerpt,
		pageTitle: data.name
	};
</script>

<Seo title={data.name} {openGraphProps} />

<div class="row">
	<main class="container">
		<article>
			<!-- {#each data.category as cat}
				<a href={`/blogs/categories/${cat}`} class="button">{cat} </a>
			{/each} -->
			<h1 class="toc-exclude">{data.name}</h1>
			<!-- <img src={data.img.default} alt="" /> -->
			<Image src={data.img} />
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

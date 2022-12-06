<script>
	import ImageLoader from '$lib/components/shared/Image/ImageLoader.svelte';
	import Seo from '$lib/components/shared/SEO/SEO.svelte';
	export let data;
</script>

<Seo title={data.updatedName} />

<main class="responsive">
	<article>
		<h1>{data.updatedName}</h1>
		<ImageLoader src={data.imageData.meta} />
		<div class="post">
			{@html data.content}
		</div>
		<a href={`https://github.com/imranmollajoy/${data.slug}`} class="button">Source code</a>
		<a href="mailto:imj_portfolio.3z5y3@simplelogin.com" class="button button-primary">Contact me</a
		>
	</article>
</main>

<style>
	article {
		margin: 6rem 0;
	}
	.post {
		margin-top: 4rem;
	}
</style>

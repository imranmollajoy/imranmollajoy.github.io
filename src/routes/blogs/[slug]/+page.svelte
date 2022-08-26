<script>
	import Seo from '../../../lib/components/shared/SEO/SEO.svelte';
	import '../../../lib/helpers/prism';
	import '../../../lib/helpers/prism.css';
	export let data;
</script>

<Seo title={data.name} article={true} />

<div class="row">
	<main class="container">
		<article>
			<a href={`/blogs/categories/${data.category}`} class="button">{data.category} </a>
			<h1 class="toc-exclude">{data.name}</h1>
			<!-- <img src={data.featuredImgPath} alt="" /> -->
			<!-- <img src={data.img.default} alt="" /> -->
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

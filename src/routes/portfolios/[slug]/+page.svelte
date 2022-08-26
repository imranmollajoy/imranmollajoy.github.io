<script>
	import Seo from '../../../lib/components/shared/SEO/SEO.svelte';
	export let data;
</script>

<Seo title={data.name} />

<div class="container">
	<article>
		<h1>{data.name}</h1>
		<div class="post">
			{@html data.content}
		</div>
	</article>
</div>

<style>
	article {
		margin-top: 6rem;
	}
	.post {
		margin-top: 4rem;
	}
</style>

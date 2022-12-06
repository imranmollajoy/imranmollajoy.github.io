<script>
	export let portfolios;
	// trim portfolio data to only show 3 items
	portfolios = portfolios.slice(0, 3);
	import PostCard from '$lib/components/shared/PostCard.svelte';
</script>

<div class="anchor" id="portfolio">Anchor</div>

<main class="responsive">
	<h2>Portfolio</h2>
	<div class="grid">
		{#each portfolios as p, i}
			<PostCard
				path={p.post.path}
				imgPath={p.imgSrc.meta}
				tags={p.post.meta.stacks}
				name={p.post.meta.name}
			/>
		{/each}
	</div>
	<a href="/portfolios" class="button button-primary">More</a>
</main>

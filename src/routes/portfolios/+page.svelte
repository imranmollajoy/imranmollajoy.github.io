<script>
	import Seo from '../../lib/components/shared/SEO/SEO.svelte';
	import PostCard from '../../lib/components/shared/PostCard.svelte';

	export let data;
</script>

<Seo title="Portfolios" />
<section>
	<div class="container">
		<h2>Portfolios</h2>
		<div class="post-grid">
			{#each data.portfolios as p, i}
				<PostCard
					path={p.path}
					imgPath={`/src/data/portfolios/${p.meta.featuredImg}`}
					tags={p.meta.stacks}
					name={p.meta.name}
				/>
			{/each}
		</div>
	</div>
</section>

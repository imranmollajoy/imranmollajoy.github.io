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
					path={p.post.path}
					imgPath={p.imgSrc.meta}
					tags={p.post.meta.stacks}
					name={p.post.meta.name}
				/>
			{/each}
		</div>
	</div>
</section>

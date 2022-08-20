<script>
	export let portfolios;
	// trim portfolio data to only show 3 items
	portfolios = portfolios.slice(0, 3);
</script>

<div class="anchor" id="portfolio">Anchor</div>

<section>
	<div class="container">
		<h2>Portfolio</h2>
		{#each portfolios as p}
			<a href={p.path} class="post">
				<h5>{p.meta.name}</h5>
				<div class="tags">
					{#each p.meta.stacks as stack}
						<div class="badge uppercase">{stack}</div>
					{/each}
				</div>
			</a>
		{/each}
		<a href="/portfolios" class="button button-primary">More</a>
	</div>
</section>

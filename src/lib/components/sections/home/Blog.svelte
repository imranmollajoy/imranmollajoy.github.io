<script>
	export let blogs;
	// trim portfolio data to only show 3 items
	blogs = blogs.slice(0, 3);
</script>

<section>
	<div class="container" id="portfolio">
		<h2>Blogs</h2>
		{#each blogs as p}
			<a href={p.path} class="post" class:featured={p.meta.featured}>
				<h5>{p.meta.name}</h5>
				<div class="tags">
					<div class="badge uppercase">{p.meta.category}</div>
				</div>
			</a>
		{/each}
		<a href="/blogs" class="button button-primary">More</a>
	</div>
</section>

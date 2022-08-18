<script>
	export let blogs;
	// trim portfolio data to only show 3 items
	blogs = blogs.slice(0, 3);
</script>

<section>
	<div class="container" id="portfolio">
		<h2>Blogs</h2>
		{#each blogs as p}
			<a href={p.path} class="post">
				<h5>{p.meta.name}</h5>
			</a>
		{/each}
		<a href="/blogs" class="button button-primary">More</a>
	</div>
</section>

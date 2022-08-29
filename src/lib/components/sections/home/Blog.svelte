<script>
	import PostCard from '../../shared/PostCard.svelte';

	export let blogs;
	// trim portfolio data to only show 3 items
	blogs = blogs.slice(0, 3);
</script>

<section>
	<div class="container" id="portfolio">
		<h2>Blogs</h2>
		<div class="post-grid">
			{#each blogs as blog}
				<PostCard
					path={blog.path}
					imgPath={`/src/data/${blog.path}/${blog.meta.featuredImg}`}
					tags={blog.meta.category}
					name={blog.meta.name}
					featured={blog.meta.featured}
				/>
			{/each}
		</div>
		<a href="/blogs" class="button button-primary">More</a>
	</div>
</section>

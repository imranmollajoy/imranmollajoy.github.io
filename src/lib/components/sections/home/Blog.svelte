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
					path={blog.post.path}
					imgPath={blog.imgSrc.meta}
					tags={blog.post.meta.category}
					name={blog.post.meta.name}
					featured={blog.post.meta.featured}
				/>
			{/each}
		</div>
		<a href="/blogs?page=1" class="button button-primary">More</a>
	</div>
</section>

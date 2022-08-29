<script>
	import Seo from '../../lib/components/shared/SEO/SEO.svelte';
	import Image from 'svelte-image';
	import PostCard from '../../lib/components/shared/PostCard.svelte';
	export let data;
	let links = [
		{
			path: '/',
			text: 'Home'
		},
		{
			path: '/blogs',
			text: 'Blogs'
		}
	];
</script>

<Seo title="Blogs" />
<section>
	<div class="container">
		<h2>Blogs</h2>
		<div class="post-grid">
			{#each data.blogs as blog}
				<PostCard
					path={blog.path}
					imgPath={`/src/data/${blog.path}/${blog.meta.featuredImg}`}
					tags={blog.meta.category}
					name={blog.meta.name}
					featured={blog.meta.featured}
				/>
			{/each}
		</div>
	</div>
</section>

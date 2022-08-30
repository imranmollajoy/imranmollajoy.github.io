<script>
	import Seo from '../../lib/components/shared/SEO/SEO.svelte';
	import { base, assets } from '$app/paths';
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
					path={blog.post.path}
					imgPath={blog.imgSrc.meta}
					tags={blog.post.meta.category}
					name={blog.post.meta.name}
					featured={blog.post.meta.featured}
				/>
			{/each}
		</div>
	</div>
</section>

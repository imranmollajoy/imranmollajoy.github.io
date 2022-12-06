<script>
	import Seo from '../../lib/components/shared/SEO/SEO.svelte';
	import PostCard from '../../lib/components/shared/PostCard.svelte';
	import Pagination from '../../lib/components/shared/Pagination.svelte';
	export let data;
</script>

<Seo title="Posts" />
<section class="responsive">
	<h2>Posts</h2>
	<div class="grid">
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
	<Pagination current={data.currentPage} pages={data.totalPages} />
</section>

<script>
	import Breadcrumb from '../../lib/components/shared/Breadcrumb.svelte';

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

<Breadcrumb {links} />
<section>
	<div class="container">
		<h2>Blogs</h2>
		{#each data.blogs as blog}
			<a href={blog.path} class="post">
				<h4>{blog.meta.name}</h4>
				<p>
					{blog.meta.category}
					{#if blog.meta.featured}
						<span class="accent" style="margin-left: 1rem;"> Featured </span>{/if}
				</p>
			</a>
		{/each}
	</div>
</section>

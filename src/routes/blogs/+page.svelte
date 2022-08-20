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
			<a href={blog.path} class="post" class:featured={blog.meta.featured}>
				<h4>{blog.meta.name}</h4>
				<div class="tags">
					<p class="badge">{blog.meta.category}</p>
				</div>
			</a>
		{/each}
	</div>
</section>

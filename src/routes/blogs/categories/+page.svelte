<script>
	import Breadcrumb from '$lib/components/shared/Breadcrumb.svelte';
	import Seo from '../../../lib/components/shared/SEO/SEO.svelte';
	export let data;
	let links = [
		{
			path: '/',
			text: 'Home'
		},
		{
			path: '/blogs',
			text: 'Blogs'
		},
		{
			path: '/blogs/categories',
			text: 'Categories'
		}
	];
</script>

<Seo title="Categories" />
<Breadcrumb {links} />
<section class="container">
	<h2>Categories</h2>

	{#each data.categories as c}
		<a href={`/blogs/categories/${c}`} class="post">
			<h5>{c}</h5>
		</a>
	{/each}
</section>

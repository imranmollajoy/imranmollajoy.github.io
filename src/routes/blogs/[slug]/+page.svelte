<script>
	import Breadcrumb from '$lib/components/shared/Breadcrumb.svelte';

	export let data;
	let breadcrumb = [
		{
			path: '/',
			text: 'Home'
		},
		{
			path: '/blogs',
			text: 'Blogs'
		},
		{
			path: '/blogs/' + data.slug,
			text: data.name
		}
	];
</script>

<Breadcrumb links={breadcrumb} />

<div class="container">
	<article>
		<h1>{data.name}</h1>
		<p class="badge">{data.category}</p>
		<!-- <img src={data.img.default} alt="" /> -->
		<div class="post">
			{@html data.content}
		</div>
	</article>
</div>

<style>
	article {
		margin-top: 6rem;
	}
	.post {
		margin-top: 4rem;
	}
</style>

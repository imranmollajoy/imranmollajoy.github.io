<script>
	import Breadcrumb from '$lib/components/shared/Breadcrumb.svelte';
	import Image from 'svelte-image';
	export let data;
	let breadcrumb = [
		{
			path: '/',
			text: 'Home'
		},
		{
			path: '/portfolios',
			text: 'Portfolios'
		},
		{
			path: '/portfolios/' + data.slug,
			text: data.name
		}
	];
</script>

<Breadcrumb links={breadcrumb} />

<div class="container">
	<article>
		<h1>{data.name}</h1>
		<Image src={`/images/portfolios/${data.featuredImg}`} />
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

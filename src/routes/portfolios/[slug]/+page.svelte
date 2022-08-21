<script>
	import Breadcrumb from '$lib/components/shared/Breadcrumb.svelte';
	import Seo from '../../../lib/components/shared/SEO/SEO.svelte';
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

<Seo title={data.name} />

<Breadcrumb links={breadcrumb} />

<div class="container">
	<article>
		<h1>{data.name}</h1>
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

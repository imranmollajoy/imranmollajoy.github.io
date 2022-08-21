<script>
	import Breadcrumb from '$lib/components/shared/Breadcrumb.svelte';
	import Seo from '../../../lib/components/shared/SEO/SEO.svelte';
	import '../../../lib/helpers/prism';
	import '../../../lib/helpers/prism.css';
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

<Seo title={data.name} article={true} />
<Breadcrumb links={breadcrumb} />

<div class="container">
	<article>
		<h1>{data.name}</h1>
		<a href={`/blogs/categories/${data.category}`}
			><p class="badge clickable">{data.category}</p>
		</a>
		<!-- <img src={data.featuredImgPath} alt="" /> -->
		<!-- <img src={data.img.default} alt="" /> -->
		<div class="post-body">
			{@html data.content}
		</div>
	</article>
</div>

<style>
	article {
		margin-top: 6rem;
	}
	.post-body {
		margin-top: 4rem;
	}
</style>

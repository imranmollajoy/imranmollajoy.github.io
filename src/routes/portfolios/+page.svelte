<script>
	import Breadcrumb from '$lib/components/shared/Breadcrumb.svelte';
	import Seo from '../../lib/components/shared/SEO/SEO.svelte';
	export let data;
	let breadcrumb = [
		{
			path: '/',
			text: 'Home'
		},
		{
			path: '/portfolios',
			text: 'Portfolios'
		}
	];
</script>

<Seo title="Portfolios" />
<Breadcrumb links={breadcrumb} />
<section>
	<div class="container">
		<h2>Portfolios</h2>
		{#each data.portfolios as p, i}
			<a href={p.path} class="post">
				<!-- <img src="" alt={p.meta.name} /> -->
				<h5>{p.meta.name}</h5>
				<div class="tags">
					{#each p.meta.stacks as stack}
						<div class="badge uppercase">{stack}</div>
					{/each}
				</div>
			</a>
		{/each}
	</div>
</section>

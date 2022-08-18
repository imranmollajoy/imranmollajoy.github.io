<script>
	import Breadcrumb from '$lib/components/shared/Breadcrumb.svelte';
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

<Breadcrumb links={breadcrumb} />
<section>
	<div class="container">
		<h2>Portfolios</h2>
		{#each data.portfolios as p}
			<a href={p.path} class="post">
				<h5>{p.meta.name}</h5>
			</a>
		{/each}
	</div>
</section>

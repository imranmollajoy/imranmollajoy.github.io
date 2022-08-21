<script>
	export let links = [
		{
			path: '/',
			text: 'Home'
		}
	];
	$: if (links[0].path === '/') links[0].text = 'Home';
</script>

<section class="breadcrumb">
	<div class="container">
		{#each links as link, i}
			{#if i + 1 >= links.length}
				<p>{link.text}</p>
			{:else}
				<a href={link.path} class="active">{link.text}</a> /
			{/if}
		{/each}
	</div>
</section>

<style>
	.container {
		overflow-wrap: break-word;
	}
	p {
		display: inline;
		margin-left: 1rem;
	}
	.active {
		margin: 0;
		padding: 0.3rem 1rem;
		text-transform: uppercase;
	}
	.active:first-child {
		padding-left: 0;
	}
</style>

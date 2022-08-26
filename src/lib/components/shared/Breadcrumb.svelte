<script>
	export let path;
	export let hideOnHome = false;
	let links;
	$: {
		const tokens = path.split('/').filter((t) => t !== '');

		let tokenPath = '';
		links = tokens.map((t) => {
			tokenPath += '/' + t;
			return {
				label: t.toLocaleUpperCase(),
				href: tokenPath
			};
		});
		links.unshift({ label: 'Home', href: '/' });
	}
</script>

<!-- we wont render if we are on home -->
<!-- on home links.length will be 1 -->
{#if links.length > 1}
	<section class="breadcrumb">
		<div class="container">
			{#each links as link, i}
				{#if i + 1 >= links.length}
					<p>{link.label}</p>
				{:else}
					<a href={link.href} class="active">{link.label}</a> /
				{/if}
			{/each}
		</div>
	</section>
{/if}

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

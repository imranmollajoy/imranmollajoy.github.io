<script>
	export let pages = 3;
	export let current = 2;
	const hrefBase = '/blogs?page=';
	let rePages = [];
	$: reCurrent = parseInt(current);
	$: for (let i = 0; i < pages; i++) {
		rePages = [...rePages, i + 1];
	}
</script>

<section>
	{#each rePages as page}
		<a class:active={reCurrent === page} class="button" href={hrefBase + page}>{page}</a>
	{/each}
</section>

<style>
	a {
		text-decoration: none;
		border-radius: 1rem;
		margin-right: 0.5rem;
	}
	.active {
		background-color: var(--clr-accent);
		color: var(--clr-light);
	}
</style>

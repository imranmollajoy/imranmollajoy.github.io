<script>
	export let data;
</script>

<section>
	<div class="container">
		<h2>Portfolio</h2>
		{#each data.portfolios as p}
			<a href={p.path} class="post">
				<h5>{p.meta.name}</h5>
			</a>
		{/each}
	</div>
</section>

<style>
	a.post {
		background-color: var(--white);
		padding: 1rem;
		box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.05);
		margin-bottom: 2rem;
		border-radius: 0.4rem;
		display: block;
		text-decoration: none;
		transition: all 0.2s ease-in-out;
	}
	a.post:hover {
		box-shadow: 0px 0px 23px 4px rgba(0, 0, 0, 0.1);
		transform: scale(1.02);
	}
</style>

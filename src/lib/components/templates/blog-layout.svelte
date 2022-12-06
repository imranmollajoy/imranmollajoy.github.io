<script>
	import '../../helpers/prism.css';
	import '../../helpers/prism.js';
	export let name;
	export let date;
	export let featuredImg;
	// toc is hidden
</script>

<main class="responsive">
	<h1>{name}</h1>
	<p>{date}</p>
	<main>
		<slot />
	</main>
</main>

<style>
	/* main {
		background-color: var(--white);
		padding: 2rem;
		margin: -2rem;
		border-radius: 1rem;
	} */
</style>

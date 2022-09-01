<script>
	import '../../helpers/prism.css';
	import '../../helpers/prism.js';
	export let name;
	export let date;
	export let featuredImg;
	// toc is hidden
</script>

<section class="container">
	<h1>{name}</h1>
	<p>{date}</p>
	<main>
		<slot />
	</main>
</section>

<style>
	main {
		background-color: var(--white);
		padding: 1rem;
		margin: -1rem;
	}
</style>

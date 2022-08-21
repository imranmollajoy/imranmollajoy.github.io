<script>
	import '$lib/styles/normalize.css';
	import '$lib/styles/skeleton.css';
	import '$lib/styles/shared.css';
	import '$lib/styles/simple-grid.css';
	export let data;
	const portfolioMarkdownImages = import.meta.glob('../data/portfolios/images/*.{png,jpg}');
	const postMarkdownImages = import.meta.glob('../data/blogs/**/*.{png,jpg}');
</script>

<slot />

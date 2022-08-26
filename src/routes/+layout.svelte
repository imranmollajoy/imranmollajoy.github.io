<script>
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';
	import '$lib/styles/normalize.css';
	import '$lib/styles/skeleton.css';
	import '$lib/styles/shared.css';
	import Breadcrumb from '../lib/components/shared/Breadcrumb.svelte';
	import { page } from '$app/stores';
	// import '$lib/styles/simple-grid.css';
	const portfolioMarkdownImages = import.meta.glob('../data/portfolios/images/*.{png,jpg}');
	const postMarkdownImages = import.meta.glob('../data/blogs/**/*.{png,jpg}');

	NProgress.configure({
		// Full list: https://github.com/rstacruz/nprogress#configuration
		minimum: 0.16,
		showSpinner: true
	});
	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}
</script>

<Breadcrumb path={$page.url.pathname} />
<slot />

<script>
	import { onMount } from 'svelte';
	import ImageLoader from '../shared/Image/ImageLoader.svelte';

	export let name;
	export let date;
	export let featuredImg;
	let src;
	onMount(async () => {
		const img = import.meta.glob('/src/routes/portfolios/**/*.png');
		for (const path in img) {
			if (path.includes(featuredImg)) {
				img[path]().then((mod) => {
					src = mod.default;
				});
			}
		}
	});
</script>

<main class="responsive">
	<h1>{name}</h1>
	<ImageLoader {src} alt={name} />
	<main>
		<slot />
	</main>
</main>

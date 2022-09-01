<script>
	export let src;
	/** @type String */
	export let alt;

	import { onMount } from 'svelte';

	let loaded = false;
	let thisImage;

	onMount(() => {
		thisImage.onload = () => {
			loaded = true;
		};
	});
</script>

<img {src} {alt} class:loaded bind:this={thisImage} loading="lazy" />

<style>
	img {
		height: 100px;
		opacity: 0;
		transition: all 1200ms ease-out;
	}
	img.loaded {
		opacity: 1;
		height: auto;
	}
</style>

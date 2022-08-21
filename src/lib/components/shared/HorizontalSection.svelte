<script>
	import { onMount } from 'svelte';

	//get the .row and put as item var
	let item;
	let widthOfItem;
	onMount(() => {
		widthOfItem = item.offsetWidth - 20;
	});
	function scroll(el) {
		if (el.deltaY > 0) item.scrollLeft += widthOfItem;
		else item.scrollLeft -= widthOfItem;
	}
</script>

<div class="row" on:mousewheel|preventDefault={scroll} bind:this={item}>
	<slot />
</div>

<style>
	.row {
		display: flex;
		overflow-y: hidden;
		gap: 2rem;
		scroll-behavior: smooth;
	}
	.row::-webkit-scrollbar {
		display: none;
	}
</style>

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
	<div class="card">
		<h4>Lorem ipsum</h4>
		<p>
			Sustainable pok pok pabst, pug cardigan chambray man bun big mood cold-pressed. Lo-fi
			gastropub photo booth plaid af jean shorts you probably haven't heard of them enamel pin.
		</p>
	</div>
	<div class="card">
		<h4>Lorem ipsum 2</h4>
		<p>Edison bulb etsy vaporware, aesthetic praxis hashtag 3 wolf moon letterpress.</p>
	</div>
	<div class="card">
		<h4>Lorem ipsum 3</h4>
		<p>
			DSA thundercats vinyl semiotics, adaptogen copper mug affogato big mood normcore craft beer.
			Hexagon 8-bit whatever tote bag wolf messenger bag.
		</p>
	</div>
	<div class="card">
		<h4>Lorem ipsum 4</h4>
		<p>Thundercats wolf lomo praxis, tofu direct trade bodega boys four loko semiotics.</p>
	</div>
	<div class="card">
		<h4>Lorem ipsum 5</h4>
		<p>
			Paleo farm-to-table forage praxis small batch. Kitsch af woke, narwhal crucifix tumeric
			organic pitchfork single-origin coffee microdosing. .
		</p>
	</div>
	<div class="card">
		<h4>Lorem ipsum 6</h4>
		<p>
			+1 tonx subway tile, fam vaporware normcore migas cronut direct trade heirloom four dollar
			toast. Copper mug lomo hexagon glossier. Cred cornhole hammock, PBR&B kogi craft beer edison
			bulb pinterest bushwick gatekeep cardigan enamel pin keytar succulents
		</p>
	</div>
	<div class="card">
		<h4>Lorem ipsum</h4>
		<p>Lorem ipsum this is a text</p>
	</div>
</div>

<style>
	.row {
		display: flex;
		overflow-y: hidden;
		gap: 2rem;
		scroll-behavior: smooth;
		flex-direction: row !important;
	}
	.row::-webkit-scrollbar {
		display: none;
	}
	.card {
		min-width: 250px !important;
		height: 356px;
		background-color: #fff;
		padding: 20px;
	}
</style>

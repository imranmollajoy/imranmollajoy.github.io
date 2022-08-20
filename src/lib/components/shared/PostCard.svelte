<script>
	export let path;
	export let img;
	export let name;
	export let tags;
	let imgURL = `../../images/${img}`;
	// import IMG from imgURL;
</script>

<a href={data.path} class="post columns six">
	<img src={IMG} alt={p.meta.name} />
	<h5>{name}</h5>
	<div>
		{#each tags as stack}
			<div class="badge uppercase">{stack}</div>
		{/each}
	</div>
</a>

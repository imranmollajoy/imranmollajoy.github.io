<script>
	export let data;
	$: console.log(data.img);
</script>

<div class="container">
	<article>
		<h1>{data.name}</h1>
		<img src={data.img.default} alt="" />
		<div class="post">
			{@html data.content}
		</div>
	</article>
</div>
<footer class="container">
	<a href="/">Home</a>
	<a href="/portfolios">Portfolios</a>
</footer>

<style>
	article {
		margin-top: 6rem;
	}
	.post,
	footer {
		margin-top: 4rem;
	}
	footer {
		margin-bottom: 4rem;
	}
	footer a {
		margin-right: 1rem;
	}
</style>

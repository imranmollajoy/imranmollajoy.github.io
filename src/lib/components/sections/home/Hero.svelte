<script>
	import CURVE from '$lib/images/Curve.svg';
</script>

<section>
	<img src={CURVE} alt="" />
	<div class="container">
		<h3>Hi there, hello</h3>
		<h1>I am an <span class="accent">Web Developer</span></h1>
		<div>
			<a href="#portfolio" class="button button-primary">Portfolio</a>
			<a href="#about" class="button">About me</a>
		</div>
	</div>
</section>

<style>
	section {
		position: relative;
		overflow: hidden;
		margin: 0;
	}
	.container {
		min-height: 95vh;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	img {
		position: absolute;
		z-index: -1;
		top: 0;
		right: -5%;
	}
	/* media for phone */
	@media (max-width: 768px) {
		img {
			right: -30%;
		}
	}
</style>

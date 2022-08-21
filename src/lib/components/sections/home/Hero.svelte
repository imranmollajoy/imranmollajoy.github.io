<script>
	import Typewriter from 'svelte-typewriter';
	import CURVE from '$lib/images/Curve.svg';

	const texts = ['Web developer', 'Web designer', 'Graphic designer', 'UI designer'];
	$: current = texts[0];
</script>

<section>
	<div class="container">
		<h3>Hi there, hello!</h3>
		<h1>
			I am an
			<Typewriter mode="loop" interval={100} delay={200} element="span">
				<span class="accent"> Web developer </span>
				<span class="accent"> Web designer </span>
				<span class="accent"> Graphic designer </span>
			</Typewriter>
		</h1>
		<div>
			<a href="#portfolio" class="button button-primary">Portfolio</a>
			<a href="#about" class="button">About me</a>
		</div>
	</div>
	<img src={CURVE} alt="" />
</section>

<style>
	section {
		position: relative;
		overflow-x: visible;
		margin: 0;
		box-sizing: border-box;
	}
	.container {
		min-height: 95vh;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	img {
		position: absolute;
		z-index: -2;
		top: 0;
		right: 15%;
	}
	h1 {
		transition: all;
	}

	/* media for phone */
	@media (max-width: 768px) {
		section {
			overflow: hidden;
		}
		img {
			right: -30%;
		}
	}
</style>

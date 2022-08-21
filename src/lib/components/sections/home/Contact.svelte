<script>
	import CURVE from '$lib/images/Curve-light.svg';
	import BG from '$lib/images/Contact-bg.svg';
</script>

<div class="u-full-width">
	<img src={CURVE} alt="" class="curve" />
	<img src={BG} alt="" class="bg" />
	<div class="container">
		<h1>Have something great in mind?</h1>
		<a href="mailto:imj_portfolio.3z5y3@simplelogin.com" class="button button-secondary">Email me</a
		>
	</div>
</div>

<style>
	.u-full-width {
		min-height: 50vh;
		display: flex;
		justify-content: center;
		flex-direction: column;
		background: var(--clr-accent);
		margin-top: 10rem;
		position: relative;
		overflow: hidden;
	}
	.container {
		z-index: 3;
	}
	.bg {
		position: absolute;
		top: 0;
		object-fit: cover;
		height: 100%;
		width: 100%;
		z-index: 1;
	}
	.curve {
		position: absolute;
		top: 0;
		left: 50%;
		transform: rotate(30deg);
		z-index: 2;
	}
	h1 {
		color: var(--clr-light);
	}
	/* media for mobile */
	@media (max-width: 425px) {
		.curve {
			transform: rotate(15deg);
			left: 40%;
		}
	}
</style>

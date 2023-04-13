<script>
	import { RadioGroup, RadioItem, SlideToggle } from '@skeletonlabs/skeleton';
	import Button from './Button.svelte';

	const sizes = ['small', 'normal', 'large'];
	const variants = ['primary', 'secondary', 'neutral'];
	let selectedSize = sizes[1];
	let selectedVariant = variants[0];
	let disabled = false;
	let invert = false;
	let flat = false;
</script>

<div class="space-y-4">
	<div class="">
		<RadioGroup>
			{#each sizes as size}
				<RadioItem bind:group={selectedSize} value={size} name={size}>
					{size}
				</RadioItem>
			{/each}
		</RadioGroup>
	</div>
	<div class="">
		<RadioGroup>
			{#each variants as variant}
				<RadioItem bind:group={selectedVariant} value={variant} name={variant}>
					{variant}
				</RadioItem>
			{/each}
		</RadioGroup>
	</div>
	<div>
		<SlideToggle name="slideFlat" bind:checked={flat}>Flat</SlideToggle>
		<SlideToggle name="slideInvert" bind:checked={invert}>inverted</SlideToggle>
		<SlideToggle name="slideDisabled" bind:checked={disabled}>Disabled</SlideToggle>
	</div>

	<Button variant={selectedVariant} size={selectedSize} {flat} {disabled} {invert}>Button</Button>
</div>

<script lang="ts">
	/**
	 * The size of the button. Can be 'sm', 'base', 'lg', or 'xl'.
	 * Defaults to 'base'.
	 */
	export let size: string | 'sm' | 'base' | 'lg' | 'xl' = 'base';

	/**
	 * The variant of the button. Can be 'filled', 'ghost', 'soft', or 'ringed'.
	 * Defaults to 'filled'.
	 */
	export let variant: string | 'filled' | 'ghost' | 'soft' | 'ringed' = 'filled';

	/**
	 * The color of the button. Can be 'surface', 'primary', 'secondary', 'tertiary', 'success', 'warning', or 'error'.
	 * Defaults to 'surface'.
	 */
	export let color:
		| string
		| 'surface'
		| 'primary'
		| 'secondary'
		| 'tertiary'
		| 'success'
		| 'warning'
		| 'error' = 'surface';

	/**
	 * Whether the button is disabled. Defaults to false.
	 */
	export let disabled = false;

	/**
	 * Whether the button should have rounded edges. Defaults to false.
	 */
	export let rounded = false;
</script>

<button
	class="btn btn-${size} variant-${variant}-${color}"
	class:disabled
	class:rounded
	on:click
	on:focus
	on:submit
>
	<slot />
</button>
